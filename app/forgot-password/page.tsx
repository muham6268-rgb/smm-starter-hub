"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import Image from "next/image";

import {
    ArrowLeft,
    Mail,
    EarthLock,
    Loader2,
} from "lucide-react";

export default function ForgotPasswordPage() {

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [countdown, setCountdown] = useState(60);
    const [popupMessage, setPopupMessage] =
        useState("");
    const [canResend, setCanResend] = useState(false);
    const [resendLoading, setResendLoading] =
        useState(false);
    const [showLimitPopup, setShowLimitPopup] =
        useState(false);

    useEffect(() => {
        const sent = localStorage.getItem("reset_sent");

        if (sent === "true") {

            setSuccess(
                "Emailga parolni tiklash havolasi yuborildi."
            );

            const sentTime = Number(
                localStorage.getItem("reset_sent_time")
            );

            const passedSeconds = Math.floor(
                (Date.now() - sentTime) / 1000
            );

            const remaining = 60 - passedSeconds;

            if (remaining > 0) {
                setCountdown(remaining);
                setCanResend(false);
            } else {
                setCountdown(0);
                setCanResend(true);
            }
        }
    }, []);

    useEffect(() => {

        if (!success || canResend) return;

        const timer = setInterval(() => {

            setCountdown((prev) => {

                if (prev <= 1) {

                    clearInterval(timer);

                    setCanResend(true);

                    localStorage.removeItem("reset_sent");
                    localStorage.removeItem("reset_sent_time");

                    return 0;
                }

                return prev - 1;

            });

        }, 1000);

        return () => clearInterval(timer);

    }, [success, canResend]);

    const handleResetPassword = async () => {

        const blocked = Number(
            localStorage.getItem("reset_blocked_until")
        );

        if (blocked && Date.now() < blocked) {

            setPopupMessage(
                "Ko'p urinish amalga oshirildi. 10 daqiqadan keyin qayta urinib ko'ring."
            );

            setShowLimitPopup(true);

            setTimeout(() => {
                setShowLimitPopup(false);
            }, 3000);

            return;
        }

        setError("");

        if (!email) {
            setError("Email manzil kiriting");
            return;
        }

        try {

            if (success) {
                setResendLoading(true);
            } else {
                setLoading(true);
            }

            const { error } = await supabase.auth.resetPasswordForEmail(
                email,
                {
                    redirectTo:
                        "http://localhost:3000/new-password",
                }
            );

            if (error) {
                setError(error.message);
                return;
            }

            setSuccess(
                "Emailga parolni tiklash havolasi yuborildi."
            );

            const attempts =
                (Number(localStorage.getItem("reset_attempts")) || 0) + 1;

            localStorage.setItem(
                "reset_attempts",
                attempts.toString()
            );

            if (attempts >= 3) {

                const fifteenMinutes =
                    Date.now() + 10 * 60 * 1000;

                localStorage.setItem(
                    "reset_blocked_until",
                    fifteenMinutes.toString()
                );
            }

            setCountdown(60);
            setCanResend(false);

            localStorage.setItem("reset_sent", "true");

            localStorage.setItem(
                "reset_sent_time",
                Date.now().toString()
            );

        } catch (err) {

            setError("Xatolik yuz berdi");

        } finally {

            setLoading(false);
            setResendLoading(false);

        }
    };

    return (
        <div className="min-h-screen bg-[#020B23] flex flex-col">

            <header className="absolute top-0 left-0 right-0 z-50">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

                    <Link
                        href="/"
                        className="flex items-center gap-3"
                    >
                        <div className=" rounded-lg bg-white flex items-center justify-center">
                            <Image
                                src="/smm_starter_hub_logo.png"
                                alt="Logo"
                                width={60}
                                height={60}
                                className="rounded-xl"
                            />
                        </div>

                        <span className="text-xl font-bold text-white">
                            SMM Starter Hub
                        </span>
                    </Link>

                    <div className="flex items-center gap-8">

                        <Link
                            href="/support"
                            className="text-sm text-slate-400 hover:text-white"
                        >
                            Support
                        </Link>

                        <Link
                            href="/status"
                            className="text-sm text-slate-400 hover:text-white"
                        >
                            API Status
                        </Link>

                    </div>

                </div>
            </header>

            <div className="flex-1 flex items-center justify-center px-4 py-32 ">

                <div
                    className="
            w-full
            max-w-md
            rounded-xl
            border
            border-white/10
            bg-[#16233A]
            p-8
            shadow-2xl
            "
                >

                    {/* ICON */}
                    <div
                        className="
                mb-6
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-blue-500/10
                text-blue-400
                "
                    >
                        <EarthLock size={30} />
                    </div>

                    {/* TITLE */}
                    <h1 className="text-4xl font-bold text-white">
                        Parolni Tiklash
                    </h1>

                    <p className="mt-4 text-slate-400 leading-7">
                        Hisobingizga bog'langan email manzilni kiriting.
                        Sizga parolni tiklash uchun xavfsiz havola yuboramiz.
                    </p>

                    {/* EMAIL */}
                    {!success ? (
                        <>
                            {/* EMAIL */}
                            <div className="mt-8">

                                <label className="mb-2 block text-sm text-slate-300">
                                    Email manzil
                                </label>

                                <div className="relative">

                                    <Mail
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
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="name@gmail.com"
                                        className="
                    h-12
                    w-full
                    rounded-xl
                    border
                    border-purple-500/20
                    bg-[#0E0818]
                    pl-12
                    pr-4
                    text-white
                    outline-none
                    focus:border-purple-500
                    "
                                    />

                                </div>

                            </div>

                            {error && (
                                <div className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400">
                                    {error}
                                </div>
                            )}

                            <button
                                onClick={handleResetPassword}
                                type="button"
                                disabled={loading}
                                className=" cursor-pointer
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
                                        Yuborilmoqda...
                                    </>
                                ) : (
                                    "Reset havolasini yuborish"
                                )}
                            </button>

                            <Link
                                href="/login"
                                className="
            mt-6
            flex
            items-center
            justify-center
            gap-2
            text-slate-400
            transition
            hover:text-white
            "
                            >
                                <ArrowLeft size={16} />
                                Login sahifasiga qaytish
                            </Link>
                        </>
                    ) : (
                        <>
                            <div className="mt-8 text-center">

                                <div>
                                    <div className="mb-4 text-5xl">
                                        ✅
                                    </div>

                                    <h2 className="text-2xl font-bold text-white">
                                        Havola yuborildi
                                    </h2>

                                    <p className="mt-3 text-slate-400">
                                        Emailingizni tekshiring.
                                        Parolni tiklash havolasi yuborildi.
                                    </p>

                                    <Link
                                        href="/login"
                                        className="
                mt-8
                inline-flex
                items-center
                justify-center
                rounded-xl
                bg-gradient-to-r
                from-purple-600
                to-fuchsia-500
                px-6
                py-3
                font-semibold
                text-white
                "
                                    >
                                        Login sahifasiga o'tish
                                    </Link>

                                </div>
                                <button
                                    disabled={resendLoading}
                                    className="
mt-4
cursor-pointer
text-sm
font-medium
text-purple-400
transition
hover:text-purple-300
disabled:cursor-not-allowed
disabled:text-slate-500
disabled:opacity-50
"
                                    onClick={() => {

                                        if (!canResend) {

                                            setPopupMessage(
                                                `Qayta yuborish uchun ${countdown} soniya kuting`
                                            );

                                            setShowLimitPopup(true);

                                            setTimeout(() => {
                                                setShowLimitPopup(false);
                                            }, 3000);

                                            return;
                                        }

                                        handleResetPassword();
                                    }}
                                >
                                    {resendLoading ? (
                                        <span className="flex items-center gap-2">
                                            <Loader2
                                                size={14}
                                                className="animate-spin"
                                            />
                                            Qayta yuborilmoqda...
                                        </span>
                                    ) : canResend ? (
                                        "Qayta yuborish"
                                    ) : (
                                        `Qayta yuborish (${countdown})`
                                    )}
                                </button>

                            </div>
                        </>
                    )}

                </div>


                {showLimitPopup && (
                    <div
                        className="
        fixed
        left-1/2
        top-8
        z-[999]
        -translate-x-1/2
        rounded-xl
        border
        border-red-500/30
        bg-red-500/10
        px-6
        py-4
        text-red-400
        backdrop-blur-md
        shadow-xl
        "
                    >
                        {popupMessage}
                    </div>
                )}
            </div>

            <footer className="border-t border-white/10">

                <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

                    <div>
                        <h3 className="font-semibold text-white">
                            SMM Starter Hub
                        </h3>

                        <p className="mt-1 text-xs text-slate-500">
                            © 2026 SMM Starter Hub. Barcha huquqlar himoyalangan.
                        </p>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-slate-400">

                        <Link href="#">
                            Foydalanish shartlari
                        </Link>

                        <Link href="#">
                            Maxfiylik siyosati
                        </Link>

                        <Link href="#">
                            Yordam markazi
                        </Link>

                    </div>

                </div>

            </footer>
        </div>
    );
}