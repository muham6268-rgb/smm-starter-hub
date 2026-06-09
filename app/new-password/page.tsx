"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


import {
    KeyRound,
    Lock,
    Eye,
    EyeOff,
    Loader2,
} from "lucide-react";

export default function NewPasswordPage() {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [isFocused, setIsFocused] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [passwordError, setPasswordError] = useState(false);
    const router = useRouter();
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {

        const checkSession = async () => {

            const {
                data: { session },
            } = await supabase.auth.getSession();

            if (!session) {
                router.replace("/expired");
            }
        };

        checkSession();

    }, [router]);

    const checks = [
        password.length >= 10,
        /[A-Z]/.test(password),
        /[a-z]/.test(password),
        (password.match(/\d/g) || []).length >= 2,
        /[!@#_$%^&*-]/.test(password),
    ];

    const passedChecks = checks.filter(Boolean).length;

    const handleUpdatePassword = async () => {

        setPasswordError(false);
        setConfirmPasswordError(false);
        setError("");
        setSuccess("");

        if (!password) {
            setPasswordError(true);
        }

        if (!confirmPassword) {
            setConfirmPasswordError(true);
        }

        if (!password || !confirmPassword) {
            return;
        }

        if (password.length < 10) {
            setError("Parol kamida 10 ta belgidan iborat bo'lishi kerak");
            return;
        }

        if (password !== confirmPassword) {
            setError("Parollar mos emas");
            return;
        }

        try {

            setLoading(true);

            const { error } =
                await supabase.auth.updateUser({
                    password,
                });

            if (error) {
                setError(error.message);
                return;
            }

            setSuccess(
                "Parol muvaffaqiyatli yangilandi"
            );

            await supabase.auth.signOut();

            setTimeout(() => {
                window.location.replace("/login");
            }, 3000);

        } catch {

            setError("Xatolik yuz berdi");

        } finally {

            setLoading(false);

        }
    };


    return (
        <div className="min-h-screen bg-[#020B23]">
            <header className="border-b border-white/10">
                <nav className="mx-auto flex h-15 max-w-7xl items-center justify-between px-6">

                    {/* LOGO */}
                    <Link href="/" className="flex items-center gap-3">

                        <div
                            className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-lg
                bg-white
                "
                        >
                            <img
                                src="/smm_starter_hub_logo.png"
                                alt="Logo"
                                width={40}
                                height={40}
                                className="rounded-lg"
                            />
                        </div>

                        <span className="text-xl font-bold text-white">
                            SMM Starter Hub
                        </span>

                    </Link>

                    {/* MENU */}
                    <div className="hidden md:flex gap-8 items-center">

                        <Link
                            href="/platform"
                            className="
                text-sm
                font-medium
                text-white/90
                transition
                hover:text-white
                "
                        >
                            Platform
                        </Link>

                        <Link
                            href="/pricing"
                            className="
                text-sm
                font-medium
                text-white/90
                transition
                hover:text-white
                "
                        >
                            Pricing
                        </Link>

                        <Link
                            href="/agency-solutions"
                            className="
                text-sm
                font-medium
                text-white/90
                transition
                hover:text-white
                "
                        >
                            Agency Solutions
                        </Link>

                    </div>

                </nav>
            </header>
            <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4">
                <div
                    className="
                w-full
                max-w-md
                rounded-3xl
                border
                border-white/10
                bg-[#16233A]
                p-8
                shadow-2xl
                "
                >
                    <div className="flex justify-center">
                        <div
                            className="
                    mb-6
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-4xl
                    bg-blue-500/10
                    text-blue-400
                    "
                        >
                            <KeyRound size={30} />
                        </div>
                    </div>

                    <h1 className="text-4xl font-bold text-white text-center">
                        Yangi Parol
                    </h1>

                    <p className="mt-4 text-slate-400 leading-7 text-center">
                        Hisobingiz uchun yangi parol yarating.
                    </p>



                    {/* PASSWORD */}
                    <div className="mt-8">

                        <label className="mb-2 block text-sm text-slate-300">
                            Yangi parol
                        </label>

                        <div className="relative">

                            <Lock
                                size={20}
                                className="
            absolute
            left-4
            top-1/4
            -translate-y-1/2
            text-slate-400
            "
                            />

                            <input onFocus={() => setIsFocused(true)}
                                onBlur={() =>
                                    setTimeout(() => {
                                        setIsFocused(false);
                                    }, 200)
                                }
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setPasswordError(false);
                                }}

                                placeholder="********"

                                className={`
h-12
w-full
rounded-xl
border
bg-[#0E0818]
pl-12
pr-12
text-white
outline-none
focus:border-purple-500
${passwordError
                                        ? " border-red-500"
                                        : " border-purple-500/20"}
`}

                            />

                            <div className="mt-4">


                                <div className="flex gap-2">

                                    {[1, 2, 3, 4].map((item) => (

                                        <div
                                            key={item}
                                            className="
                    relative
                    h-1.5
                    flex-1
                    overflow-hidden
                    rounded-full
                    bg-slate-600/50
                "
                                        >

                                            <div
                                                className={`
                        absolute
                        inset-0
                        transition-all
                        duration-500

                        ${passedChecks >= item
                                                        ? passedChecks === 1
                                                            ? "bg-red-500 shadow-[0_0_12px_rgba(239,68,68,.8)]"

                                                            : passedChecks === 2
                                                                ? "bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,.8)]"

                                                                : passedChecks === 3
                                                                    ? "bg-yellow-500 shadow-[0_0_12px_rgba(234,179,8,.8)]"

                                                                    : "bg-green-500 shadow-[0_0_12px_rgba(34,197,94,.8)]"

                                                        : "bg-transparent"
                                                    }
                    `}
                                            />

                                        </div>

                                    ))}

                                </div>

                                <div className="mt-2 flex items-center justify-between">

                                    <span className="text-sm text-slate-400">
                                        Parol kuchi
                                    </span>

                                    <span
                                        className={`
        text-sm
        ${passedChecks <= 1
                                                ? "text-red-400"
                                                : passedChecks === 2
                                                    ? "text-orange-400"
                                                    : passedChecks === 3
                                                        ? "text-yellow-400"
                                                        : "text-green-400"
                                            }
    `}
                                    >
                                        {
                                            passedChecks <= 1
                                                ? "Zaif"
                                                : passedChecks === 2
                                                    ? "O'rtacha"
                                                    : passedChecks === 3
                                                        ? "Yaxshi"
                                                        : "Kuchli"
                                        }
                                    </span>

                                </div>

                            </div>

                            {isFocused && (
                                <div
                                    className="
        absolute
        bottom-[115%]
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

                                        <div className={(password.match(/\d/g) || []).length >= 2 ? "text-green-400" : "text-slate-400"}>
                                            ✓ Kamida 2 ta raqam
                                        </div>

                                        <div className={/[!@#$%^&_*-]/.test(password) ? "text-green-400" : "text-slate-400"}>
                                            ✓ Kamida 1 ta maxsus belgi
                                        </div>

                                    </div>
                                </div>
                            )}

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                                className="
            absolute
            right-4
            top-1/4
            -translate-y-1/2
            text-slate-400
            "
                            >
                                {showPassword ? (
                                    <EyeOff size={20} />
                                ) : (
                                    <Eye size={20} />
                                )}
                            </button>

                        </div>
                        {/* CONFIRM PASSWORD */}
                        <div className="mt-6">

                            <label className="mb-2 block text-sm text-slate-300">
                                Parolni tasdiqlang
                            </label>

                            <div className="relative">

                                <Lock
                                    size={20}
                                    className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-slate-400
            "
                                />

                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={confirmPassword}
                                    onChange={(e) => {
                                        setConfirmPassword(e.target.value);
                                        setConfirmPasswordError(false);
                                    }}
                                    placeholder="********"
                                    className={`
h-12
w-full
rounded-xl
border
bg-[#0E0818]
pl-12
pr-12
text-white
outline-none

${confirmPassword.length === 0
                                            ? "border-purple-500/20 focus:border-purple-500"

                                            : password === confirmPassword
                                                ? "border-green-500 focus:border-green-500"

                                                : "border-red-500 focus:border-red-500"
                                        }
`}
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowConfirmPassword(!showConfirmPassword)
                                    }
                                    className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-slate-400
            "
                                >
                                    {showConfirmPassword ? (
                                        <EyeOff size={20} />
                                    ) : (
                                        <Eye size={20} />
                                    )}
                                </button>

                            </div>

                        </div>

                        {/* SUCCESS */}
                        {success && (
                            <div className="
        mt-4
        rounded-xl
        border
        border-green-500/20
        bg-green-500/10
        p-3
        text-sm
        text-green-400
    ">
                                {success}
                            </div>
                        )}

                    </div>

                    <button onClick={handleUpdatePassword}
                        type="button"
                        disabled={loading}
                        className="
    mt-6
    flex
    h-12
    w-full
    items-center
    justify-center
    gap-2
    rounded-xl
    bg-gradient-to-r
    from-purple-600
    to-fuchsia-500
    font-semibold
    text-white
    transition
    hover:scale-[1.01]
    disabled:cursor-not-allowed
    disabled:opacity-70
    "
                    >
                        {loading ? (
                            <>
                                <Loader2
                                    size={18}
                                    className="animate-spin"
                                />
                                Yangilanmoqda...
                            </>
                        ) : (
                            "Parolni yangilash"
                        )}
                    </button>

                </div>
            </div>
        </div>
    );
}