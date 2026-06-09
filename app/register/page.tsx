"use client";

import { User, Mail } from "lucide-react";
import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import { BadgeCheck } from "lucide-react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function RegisterPage() {

    const [hovered, setHovered] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [fullName, setFullName] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [email, setEmail] = useState("");
    const router = useRouter();
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const checks = [
        password.length >= 10,
        /[A-Z]/.test(password),
        /[a-z]/.test(password),
        /\d/.test(password),
        /[!@#$%^&*]/.test(password),
    ];

    const handleRegister = async () => {

        setSubmitted(true);

        if (!fullName.trim()) return;

        if (!isValidEmail) return;

        if (passedChecks !== 5) return;

        if (!acceptedTerms) return;

        setLoading(true);

        try {

            // SERVERGA REQUEST

            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        full_name: fullName,
                    },
                },
            });

            if (!error && data.user) {

                const { error: profileError } = await supabase
                    .from("profiles")
                    .insert({
                        id: data.user.id,
                        email: email,
                        first_name: fullName,
                    });

                console.log(profileError);
            }

            if (error) {

                if (
                    error.message
                        .toLowerCase()
                        .includes("already")
                ) {
                    setError("Bu email avval ro'yxatdan o'tgan");
                } else {
                    setError(error.message);
                }

                return;
            }

            // SUCCESS
            router.replace("/dashboard");

        } finally {
            setLoading(false);
        }

        setError("");

    };

    const isValidEmail =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const passedChecks = checks.filter(Boolean).length;

    return (

        <div className="h-screen w-screen overflow-hidden bg-[#020B23]">

            <div className="flex h-full">

                {/* LEFT 40% */}
                <div className="relative hidden lg:block">

                    <div className="absolute inset-0 bg-gradient-to-b from-[#1A0B2E] via-[#0F051D] to-[#05010D]" />

                    <div className="relative z-10 flex h-full flex-col justify-between p-8">
                        {/* CARD */}
                        <div className="mt-20 flex justify-center">

                            <div style={{
                                width: "500px", background: "rgba(26,16,43,0.7)",
                                border: "1px solid rgba(168,85,247,0.2)"
                            }}
                                className="
        
        rounded-2xl
        border
        p-8
        backdrop-blur-md
    "
                            >
                                <div className="mb-6 flex items-center gap-2">
                                    <BadgeCheck
                                        size={16}
                                        className="text-emerald-400"
                                    />

                                    <span className="text-[11px] font-bold uppercase tracking-[3px] text-emerald-400">
                                        SOHA YETAKCHISI
                                    </span>
                                </div>

                                <h2 className="mb-6 text-4xl font-bold text-white">
                                    Nufuzingizni Oshiring
                                </h2>

                                <p className="mb-8 leading-8 text-slate-300 italic text-lg">
                                    “SMM Starter Hub bizga shunchaki vositalarni taqdim etib qolmadi, balki oʻsish dvigatelini berdi. Biz ularning avtomatlashtirilgan jalb qilish ish jarayonlaridan foydalanib, atigi toʻrt oy ichida mijozlar bazamizni 300% ga kengaytirdik.”
                                </p>

                                <div className="flex items-center gap-4">
                                    <div
                                        className="
        h-14
        w-14
        overflow-hidden
        rounded-full
        border-2
        border-cyan-400
    "
                                    >
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnDp5Q_ppGzyqpxfP56sDbp8zln7WcNDX3VQ&s"
                                            alt="Marcus Chen"
                                            className="h-full w-full object-cover"
                                        />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-white">
                                            Marcus Chen
                                        </h3>

                                        <p className="text-sm text-slate-400">
                                            Founder, Velocity Media Agency
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT 60% */}
                <div
                    className="flex-1 flex items-center justify-center"
                    style={{
                        background:
                            "linear-gradient(180deg, #020B23 0%, #050A1A 50%, #0A0715 100%)"
                    }}
                >
                    <div className="w-full max-w-[550px] px-5 sm:px-6">
                        {/* LOGO */}
                        <Link
                            href="/"
                            className="mt-8 md:mt-16 mb-3 inline-block"
                        >
                            <div
                                className="flex h-16 w-16 items-center justify-center rounded bg-white"
                                style={{
                                    transition: "all .3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "scale(1.05)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "scale(1)";
                                }}
                            >
                                <img
                                    src="/smm_starter_hub_logo.png"
                                    alt="SMM Starter Hub"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "contain",
                                    }}
                                />
                            </div>
                        </Link>

                        {/* TITLE */}
                        <h1 className="text-2xl sm:text-3xl font-bold text-white from-white to-purple-400">
                            Create your account
                        </h1>

                        <p className="mt-3 text-sm sm:text-base text-slate-400">
                            Start your 14-day free trial today.
                            No credit card required.
                        </p>

                        {/* FORM */}
                        <div className="mt-8 md:mt-10 space-y-5 md:space-y-6">

                            {/* FULL NAME */}
                            <label className="mb-2 block text-sm font-medium text-slate-300">
                                Full Name
                            </label>
                            <div className="relative">

                                <User
                                    size={20}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                />

                                <input
                                    type="text"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    placeholder="John Doe"
                                    className={`
h-12
w-full
rounded-xl
pl-12
pr-4
text-white
outline-none
border
bg-[#120A20]

${submitted && !fullName.trim()
                                            ? "border-red-500"
                                            : "border-purple-500/20"
                                        }
`}
                                />
                            </div>

                            {/* EMAIL */}
                            <label className="mb-2 block text-sm font-medium text-slate-300">
                                Email Address
                            </label>
                            <div className="relative">

                                <Mail
                                    size={20}
                                    className={`absolute left-4 top-1/2 -translate-y-1/2 ${email.length > 0 && !isValidEmail
                                        ? "text-red-400"
                                        : "text-slate-400"
                                        }`}
                                />

                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="name@company.com"
                                    className={`
            h-12
            w-full
            rounded-xl
            bg-[#120A20]
            pl-12
            pr-4
            text-white
            outline-none
            border
            transition-all
            ${submitted && !isValidEmail
                                            ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/30"
                                            : "border-purple-500/20 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40"
                                        }
        `}
                                />

                            </div>

                            {/* PASSWORD */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-300">
                                    Password
                                </label>

                                <div className="relative">

                                    <Lock
                                        size={20}
                                        className="absolute left-4 top-6 -translate-y-1/2 text-slate-400 z-10"
                                    />

                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        onFocus={() => setIsFocused(true)}
                                        onBlur={() =>
                                            setTimeout(() => {
                                                setIsFocused(false);
                                            }, 200)
                                        }
                                        placeholder="••••••••"
                                        className={`
h-12
w-full
rounded-xl
pl-12
pr-12
text-white
outline-none
border
bg-[#120A20]

${submitted && passedChecks !== 5
                                                ? "border-red-500"
                                                : "border-purple-500/20"
                                            }
`}
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="
        absolute
        right-4
        top-6
        -translate-y-1/2
        text-slate-400
        hover:text-white
        transition-colors
    "
                                    >
                                        {showPassword ? (
                                            <EyeOff size={20} />
                                        ) : (
                                            <Eye size={20} />
                                        )}
                                    </button>

                                    {isFocused && (
                                        <div
                                            className="
                    absolute
                    bottom-full
                    mb-3
                    left-0
                    z-50
                    w-full
                    rounded-xl
                    border
                    border-purple-500/20
                    bg-[#120A20]
                    p-4
                    shadow-2xl
                "
                                        >
                                            <h4 className="mb-3 text-sm font-semibold text-white">
                                                Parol talablari
                                            </h4>

                                            <div className="space-y-2 text-sm">

                                                <div className={password.length >= 10 ? "text-green-400" : "text-slate-400"}>
                                                    ✓ Kamida 10 ta belgi
                                                </div>

                                                <div className={/[A-Z]/.test(password) ? "text-green-400" : "text-slate-400"}>
                                                    ✓ Kamida 1 ta katta harf
                                                </div>

                                                <div className={/[a-z]/.test(password) ? "text-green-400" : "text-slate-400"}>
                                                    ✓ Kamida 1 ta kichik harf
                                                </div>

                                                <div className={/\d/.test(password) ? "text-green-400" : "text-slate-400"}>
                                                    ✓ Kamida 2 ta raqam
                                                </div>

                                                <div className={/[!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?]/.test(password) ? "text-green-400" : "text-slate-400"}>
                                                    ✓ Kamida 1 ta maxsus belgi (!@#$...)
                                                </div>

                                            </div>
                                        </div>
                                    )}

                                </div>

                                <div className="mt-4">

                                    <div className="mb-2 flex justify-between text-xs">

                                        <span className="text-slate-500">
                                            Parol xavfsizligi
                                        </span>

                                        <span
                                            className={
                                                passedChecks === 0
                                                    ? "text-slate-500"
                                                    : passedChecks === 1
                                                        ? "text-red-400"
                                                        : passedChecks === 2
                                                            ? "text-orange-400"
                                                            : passedChecks === 3
                                                                ? "text-yellow-400"
                                                                : passedChecks === 4
                                                                    ? "text-lime-400"
                                                                    : "text-green-400"
                                            }
                                        >
                                            {
                                                passedChecks === 0
                                                    ? "Bo'sh"
                                                    : passedChecks === 1
                                                        ? "Juda Kuchsiz"
                                                        : passedChecks === 2
                                                            ? "Kuchsiz"
                                                            : passedChecks === 3
                                                                ? "O'rtacha"
                                                                : passedChecks === 4
                                                                    ? "Yaxshi"
                                                                    : "Juda Kuchli"
                                            }
                                        </span>

                                    </div>

                                    <div className="h-2 overflow-hidden rounded-full bg-white/10">

                                        <div
                                            className="h-full rounded-full transition-all duration-700"
                                            style={{
                                                width: `${passedChecks * 20}%`,

                                                background:
                                                    passedChecks === 0
                                                        ? "#334155"
                                                        : passedChecks === 1
                                                            ? "linear-gradient(90deg,#DC2626,#EF4444)"
                                                            : passedChecks === 2
                                                                ? "linear-gradient(90deg,#EA580C,#FB923C)"
                                                                : passedChecks === 3
                                                                    ? "linear-gradient(90deg,#CA8A04,#FACC15)"
                                                                    : passedChecks === 4
                                                                        ? "linear-gradient(90deg,#65A30D,#84CC16)"
                                                                        : "linear-gradient(90deg,#16A34A,#22C55E)",

                                                boxShadow:
                                                    passedChecks === 0
                                                        ? "none"
                                                        : passedChecks === 1
                                                            ? "0 0 15px rgba(239,68,68,.5)"
                                                            : passedChecks === 2
                                                                ? "0 0 15px rgba(251,146,60,.5)"
                                                                : passedChecks === 3
                                                                    ? "0 0 15px rgba(250,204,21,.5)"
                                                                    : passedChecks === 4
                                                                        ? "0 0 15px rgba(132,204,22,.5)"
                                                                        : "0 0 20px rgba(34,197,94,.6)"
                                            }}
                                        />

                                    </div>

                                </div>
                            </div>

                        </div>
                        {/* TERMS */}
                        <label className="mt-6 flex items-start gap-3 text-sm text-slate-400">
                            <input
                                type="checkbox"
                                checked={acceptedTerms}
                                onChange={(e) => setAcceptedTerms(e.target.checked)}
                                className={`
        mt-1
        h-4
        w-4

        ${submitted && !acceptedTerms
                                        ? "accent-red-500"
                                        : ""
                                    }
    `}
                            />
                            <span>
                                I agree to the{" "}
                                <span className="text-blue-400 hover:text-blue-300 cursor-pointer">
                                    Terms of Service
                                </span>{" "}
                                and{" "}
                                <span className="text-blue-400 hover:text-blue-300 cursor-pointer">
                                    Privacy Policy
                                </span>
                                .
                            </span>
                        </label>

                        {/* BUTTON */}
                        <div className="flex justify-center items-center">

                            <button
                                onClick={handleRegister}
                                onMouseEnter={() => setHovered(true)}
                                onMouseLeave={() => setHovered(false)}
                                className="
w-full
h-12
rounded-xl
font-bold
text-white
"
                                style={{
                                    marginTop: "24px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: "10px",
                                    border: "none",
                                    fontWeight: "bold",
                                    color: "white",
                                    cursor: "pointer",

                                    background:
                                        "linear-gradient(135deg,#9333EA,#C026D3)",

                                    transition: "all .3s ease",

                                    transform: hovered
                                        ? "translateY(-3px) scale(1.02)"
                                        : "translateY(0) scale(1)",

                                    boxShadow: hovered
                                        ? "0 0 40px rgba(192,38,211,.6)"
                                        : "0 0 15px rgba(147,51,234,.3)",
                                }}
                            >
                                {loading ? (
                                    <>
                                        <Loader2
                                            size={20}
                                            className="animate-spin mr-2"
                                        />
                                        Yuklanmoqda...
                                    </>
                                ) : (
                                    <>
                                        Create Account →
                                    </>
                                )}
                            </button>

                        </div>
                        {error && (
                            <div
                                className="
        mt-4
        rounded-xl
        border
        border-red-500/20
        bg-red-500/10
        p-4
        text-sm
        text-red-400
        "
                            >
                                {error}

                                {error === "Bu email avval ro'yxatdan o'tgan" && (
                                    <button
                                        onClick={() => router.push("/login")}
                                        className=" cursor-pointer
                ml-3
                font-semibold
                text-blue-400
                hover:text-blue-300
                "
                                    >
                                        Login →
                                    </button>
                                )}
                            </div>
                        )}

                        {/* LOGIN */}
                        <div className="mt-3 text-center">
                            <span className="text-slate-400">
                                Already have an account?
                            </span>{" "}
                            <button
                                onClick={() => router.push("/login")}
                                className="font-medium text-blue-400 hover:text-blue-300 cursor-pointer mb-17"
                            >
                                Log in
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}