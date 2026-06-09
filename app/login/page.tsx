"use client";

import { Mail } from "lucide-react";
import { Globe, Apple } from "lucide-react";
import { useState } from "react";
import { BarChart3 } from "lucide-react";
import { Eye, EyeOff, Lock } from "lucide-react";
import { Loader2 } from "lucide-react";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function RegisterPage() {

    const [hovered, setHovered] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [email, setEmail] = useState("");
    const [loginError, setLoginError] = useState("");
    const [loading, setLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);


    const handleLogin = async () => {

        setSubmitted(true);

        if (!email.trim() || !password.trim()) {
            return;
        }

        setLoading(true);



        try {

            const { data, error } =
                await supabase.auth.signInWithPassword({
                    email,
                    password,
                });

            if (error) {
                setLoginError("Email yoki parol noto'g'ri");

                setTimeout(() => {
                    setLoginError("");
                }, 3000);

                return;
            }


            window.location.href = "/dashboard";

        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {

        const { error } =
            await supabase.auth.signInWithOAuth({
                provider: "google",
                options: {
                    redirectTo:
                        "http://localhost:3000/dashboard",
                },
            });

        if (error) {
            console.error(error);
        }
    };

    return (

        <div className="h-screen w-screen overflow-hidden bg-[#020B23]">

            <div className="flex h-full">

                {/* LEFT 40% */}
                <div className="relative hidden lg:block">

                    <div className="absolute inset-0 bg-gradient-to-b from-[#1A0B2E] via-[#0F051D] to-[#05010D]" />

                    <div className="relative z-10 flex h-full flex-col justify-between p-8">
                        {/* CARD */}
                        <div className="flex justify-center">

                            <div className="
w-full
max-w-[500px]
rounded-2xl
p-5
backdrop-blur-md
"
                            >
                                <div className="mb-6 flex items-center gap-2">


                                    <Link
                                        href="/"
                                        style={{
                                            display: "inline-block",
                                            cursor: "pointer",
                                        }}
                                    >
                                        <div
                                            className="flex h-14 w-14 items-center justify-center rounded bg-white "
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
                                </div>
                                <h1 className="mt-5 text-2xl font-bold text-white leading-tight">
                                    O'z borlig'ingizni ko'taring
                                </h1>

                                <p className="mt-2 text-md text-slate-300 leading-6 max-w-md">
                                    Avtomatlashtirilgan uskunalar to'plamimiz yordamida
                                    o'z qamrovini kengaytirayotgan 10 000+ dan ortiq
                                    ijodkorlarga qo'shiling.
                                </p>




                            </div>
                        </div>
                        <div className="">
                            <div className="flex justify-center mb-5 hover:-translate-y-1
hover:border-purple-500/40
hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all">

                                <div style={{
                                    background: "rgba(26,16,43,0.7)",
                                    border: "1px solid rgba(168,85,247,0.2)"
                                }}
                                    className="
        
        w-full
max-w-[500px]
rounded-2xl
border
p-4
backdrop-blur-md
    "
                                >
                                    <div className="
        flex
        h-8
        w-8
        items-center
        justify-center
        rounded-xl
        bg-green-500/10
        text-green-400
    ">
                                        <Sparkles size={16} />
                                    </div>
                                    <div className="flex items-start gap-4">


                                        <div>
                                            <h3 className="text-md font-semibold text-white">
                                                Avtomatlashtirilgan Rejalashtirish
                                            </h3>

                                            <p className="mt-2 text-slate-400 leading-4 text-xs">
                                                Sun'iy intellekt yordamida eng yaxshi
                                                post joylash <br /> vaqtlarini aniqlang va
                                                auditoriyangiz faol <br /> bo'lgan paytda
                                                kontent chiqaring.
                                            </p>
                                        </div>

                                    </div>



                                </div>
                            </div>
                            <div className="flex justify-center">

                                <div style={{
                                    background: "rgba(26,16,43,0.7)",
                                    border: "1px solid rgba(168,85,247,0.2)"
                                }}
                                    className="hover:-translate-y-1
hover:border-purple-500/40
hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all
        
        w-full
max-w-[500px]
rounded-2xl
border
p-4
backdrop-blur-md
    "
                                >
                                    <div className="
        flex
        h-8
        w-8
        items-center
        justify-center
        rounded-xl
        bg-blue-500/10
        text-blue-400
    ">
                                        <BarChart3 size={16} />
                                    </div>
                                    <div className="flex items-start gap-4">


                                        <div>
                                            <h3 className="text-md font-semibold text-white">
                                                Chuqur Analitika
                                            </h3>

                                            <p className="mt-2 text-slate-400 leading-4 text-xs">
                                                Instagram, TikTok va boshqa
                                                platformalardagi <br /> natijalarni
                                                real vaqt rejimida kuzating.
                                            </p>
                                        </div>

                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT 60% */}
                <div
 className="
 flex-1
 flex
 items-center
 justify-center
 px-4
 sm:px-6
 lg:px-8
 "
>
                    <div className="w-full max-w-[520px] px-5 sm:px-6">
                        {/* LOGO */}


                        {/* TITLE */}
                        <h1 className="text-2xl sm:text-3xl font-bold text-white">
                            Xush kelibsiz
                        </h1>

                        <p className="mt-3 text-sm sm:text-base text-slate-400">
                            Boshqaruv paneliga kirish uchun login va parolingizni (shaxsingizni tasdiqlovchi ma'lumotlarni) kiriting.
                        </p>

                        {/* FORM */}
                        <div className="mt-8 md:mt-10 space-y-5 md:space-y-6">

                            {/* EMAIL */}
                            <label className="mb-2 block text-sm font-medium text-slate-300">
                                Email Address
                            </label>
                            <div className="relative">

                                <Mail
                                    size={20}
                                    className="absolute left-4 top-1/2 -translate-y-1/2"
                                />

                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setLoginError("");

                                        if (e.target.value.trim()) {
                                            setSubmitted(false);
                                        }
                                    }}
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
            ${submitted && !email
                                            ? "border-red-500"
                                            : "border-purple-500/20 focus:border-purple-500"
                                        }
        `}
                                />

                            </div>

                            {/* PASSWORD */}
                            <div>
                                <div className="flex justify-between items-center">
                                    <label className="mb-2 block text-sm font-medium text-slate-300">
                                        Password
                                    </label>
                                    <Link
                                        href="/forgot-password"
                                        onClick={() => {
                                            localStorage.removeItem("reset_sent");
                                            localStorage.removeItem("reset_sent_time");
                                        }}
                                    >
                                        Parolni unutdingizmi?
                                    </Link>
                                </div>

                                <div className="relative">

                                    <Lock
                                        size={20}
                                        className="absolute left-4 top-6 -translate-y-1/2 text-slate-400 z-10"
                                    />

                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                            setLoginError("");

                                            if (e.target.value.trim()) {
                                                setSubmitted(false);
                                            }
                                        }}
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

${submitted && !password
                                                ? "border-red-500"
                                                : "border-purple-500/20 focus:border-purple-500"
                                            }
`}
                                    />
                                    {loginError && (
                                        <div
                                            className="
        mt-3
        rounded-xl
        border
        border-red-500/30
        bg-red-500/10
        px-4
        py-3
        text-sm
        text-red-400
        animate-pulse
    "
                                        >
                                            {loginError}
                                        </div>
                                    )}

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
                                </div>
                            </div>

                        </div>
                        {/* TERMS */}
                        <label className="mt-6 flex items-start gap-3 text-sm text-slate-400">
                            <input
                                type="checkbox"     
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className={`
        mt-1
        h-4
        w-4

        ${submitted
                                        ? "accent-red-500"
                                        : ""
                                    }
    `}
                            />
                            <span>
                                Meni eslab qol
                            </span>
                        </label>

                        {/* BUTTON */}
                        <div className="flex justify-center items-center">

                            <button
                                onClick={handleLogin}
                                onMouseEnter={() => setHovered(true)}
                                onMouseLeave={() => setHovered(false)}
                                style={{
                                    marginTop: "24px",
                                    display: "flex",
                                    width: "100%",
                                    height: "50px",
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
                                        Kirish
                                    </>
                                )}
                            </button>

                        </div>


                        {/* LOGIN */}
                        <div className="my-8 flex items-center gap-4">
                            <div className="h-px flex-1 bg-white/10" />

                            <span className="text-xs uppercase tracking-[3px] text-slate-500">
                                yoki davom etish
                            </span>

                            <div className="h-px flex-1 bg-white/10" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">

                            <button
                                onClick={handleGoogleLogin}
                                type="button"
                                className=" cursor-pointer
        flex
        items-center
        justify-center
        gap-3
        h-14
        rounded-xl
        border
        border-white/10
        bg-white/[0.02]
        text-white
        font-medium
        transition-all
        duration-300
        hover:border-purple-500/40
        hover:bg-purple-500/10
        hover:-translate-y-1
        "
                            >
                                <Globe size={18} />
                                Google
                            </button>

                            <button
                                type="button"
                                className=" cursor-pointer
        flex
        items-center
        justify-center
        gap-3
        h-14
        rounded-xl
        border
        border-white/10
        bg-white/[0.02]
        text-white
        font-medium
        transition-all
        duration-300
        hover:border-purple-500/40
        hover:bg-purple-500/10
        hover:-translate-y-1
        "
                            >
                                <Apple size={18} />
                                Apple
                            </button>

                        </div>

                        <p className="mt-6 text-center text-slate-400">
                            SMM Starter Hub'da yangimisiz?{" "}
                            <Link
                                href="/register"
                                className="text-blue-400 hover:text-blue-300"
                            >
                                Ro'yxatdan o'tish
                            </Link>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}