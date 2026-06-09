"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ReviewForm() {
    const [name, setName] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [review, setReview] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const submitReview = async () => {
        console.log("BUTTON BOSILDI");

        if (!name || !businessName || !review) {
            alert("Barcha maydonlarni to'ldiring");
            return;
        }

        setLoading(true);

        const { error } = await supabase
            .from("reviews")
            .insert([
                {
                    name,
                    business_name: businessName,
                    review,
                    rating: 5,
                },
            ]);

        console.log("ERROR:", error);

        if (!error) {
            setSuccess(true);

            setName("");
            setBusinessName("");
            setReview("");

            setTimeout(() => {
                setSuccess(false);
            }, 3000);
        }

        setLoading(false);
    };

    return (
        <section className="py-32 relative">
            {success && (
                <div className="fixed top-5 right-5 z-50 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg">
                    ✅ Review muvaffaqiyatli yuborildi
                </div>
            )}

            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-5xl font-bold text-center mb-4">
                    Fikringizni qoldiring
                </h2>

                <p className="text-zinc-400 text-center mb-12">
                    SMM Starter Hub haqida fikringiz biz uchun muhim.
                </p>

                <div className="space-y-6">
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ismingiz"
                        className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 px-5"
                    />

                    <input
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        placeholder="Biznes nomi"
                        className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 px-5"
                    />

                    <textarea
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        placeholder="Fikringiz..."
                        rows={5}
                        className="w-full rounded-2xl bg-white/5 border border-white/10 p-5"
                    />

                    <button
                        type="button"
                        onClick={submitReview}
                        disabled={loading}
                        className="
              w-full
              h-14
              rounded-2xl
              bg-violet-600
              hover:bg-violet-500
              transition
              font-semibold
              disabled:opacity-50
            "
                    >
                        {loading ? "Yuborilmoqda..." : "Review yuborish"}
                    </button>
                </div>
            </div>
        </section>
    );
}