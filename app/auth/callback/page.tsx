"use client";

import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

function AuthCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleAuth = async () => {
      try {
        const code = searchParams.get("code");

        if (code) {
          await supabase.auth.exchangeCodeForSession(code);
        }

        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
          router.push("/login");
          return;
        }

        router.push("/dashboard");
      } catch (error) {
        console.error(error);
        router.push("/login");
      }
    };

    handleAuth();
  }, [router, searchParams]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      Tasdiqlanmoqda...
    </div>
  );
}

export default function AuthCallback() {
  return (
    <Suspense fallback={<div>Yuklanmoqda...</div>}>
      <AuthCallbackContent />
    </Suspense>
  );
}