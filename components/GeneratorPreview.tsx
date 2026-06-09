"use client";

import { useEffect, useState } from "react";
export default function GeneratorPreview() {
    const texts = [
        "Analyzing Market...",
        "Building Strategy...",
        "Generating Content...",
        "Optimizing Engagement...",
        "Publishing Ready...",
    ];

    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % texts.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);
    return (
        <section className="relative py-40 overflow-hidden">

            <div className="absolute inset-0 flex justify-center">
                <div className="w-[1200px] h-[600px] bg-violet-600/10 blur-[200px] rounded-full" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6">

                <div className="text-center mb-24">

                    <p className="text-violet-400 uppercase tracking-[0.4em] mb-6">
                        AI PREVIEW
                    </p>

                    <h2 className="text-6xl md:text-7xl font-bold text-white mb-6">
                        AI qanday ishlaydi?
                    </h2>

                    <p className="text-zinc-400 text-xl max-w-3xl mx-auto">
                        Biznesingiz haqida bir nechta ma'lumot kiriting va
                        AI bir necha soniyada tayyor marketing kontent yaratadi.
                    </p>

                </div>

                <div className="grid lg:grid-cols-3 gap-10 items-center">

                    {/* LEFT */}

                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8">

                        <div className="text-zinc-500 text-sm mb-4">
                            INPUT
                        </div>

                        <div className="space-y-4">

                            <div className="rounded-2xl bg-white/5 p-4">
                                💈 Barber Shop
                            </div>

                            <div className="rounded-2xl bg-white/5 p-4">
                                🎯 Yangi mijozlarni jalb qilish
                            </div>

                            <div className="rounded-2xl bg-white/5 p-4">
                                📍 Toshkent
                            </div>

                            <div className="rounded-2xl bg-white/5 p-4">
                                🎨 Professional uslub
                            </div>

                        </div>

                    </div>

                    {/* CENTER */}

                    <div className="flex justify-center">

                        <div className="relative">

                            <div className="absolute inset-0 bg-violet-500 blur-[120px] opacity-60 opacity-40 rounded-full animate-pulse" />

                            <div
                                className="
            relative
            w-96
            h-72
            rounded-full
            border
            border-violet-500/40
            bg-black/40
            backdrop-blur-xl
            flex
            items-center
            justify-center
            "
                            >
                                <div
                                    className="
  absolute
  w-[420px]
  h-[420px]
  left-1/2
  top-1/2
  -translate-x-1/2
  -translate-y-1/2
  animate-spin
  "
                                    style={{
                                        animationDuration: "30s",
                                    }}
                                >
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2">

                                        <div
                                            style={{
                                                animation: "keepStraight 30s linear infinite",
                                            }}
                                            className="
      px-4 py-2
      rounded-full
      bg-white/5
      border border-white/10
      text-white/50
      text-xs
      tracking-[0.3em]
    "
                                        >
                                            BARBER
                                        </div>

                                    </div>

                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2">

                                        <div
                                            style={{
                                                animation: "keepStraight 30s linear infinite",
                                            }}
                                            className="
      px-4 py-2
      rounded-full
      bg-white/5
      border border-white/10
      text-white/50
      text-xs
      tracking-[0.3em]
    "
                                        >
                                            CAFE
                                        </div>

                                    </div>

                                    <div className="absolute right-0 top-1/2 -translate-y-1/2">

                                        <div
                                            style={{
                                                animation: "keepStraight 30s linear infinite",
                                            }}
                                            className="
      px-4 py-2
      rounded-full
      bg-white/5
      border border-white/10
      text-white/50
      text-xs
      tracking-[0.3em]
    "
                                        >
                                            FITNESS
                                        </div>

                                    </div>

                                    <div className="absolute left-0 top-1/2 -translate-y-1/2">

                                        <div
                                            style={{
                                                animation: "keepStraight 30s linear infinite",
                                            }}
                                            className="
      px-4 py-2
      rounded-full
      bg-white/5
      border border-white/10
      text-white/50
      text-xs
      tracking-[0.3em]
    "
                                        >
                                            REAL ESTATE
                                        </div>

                                    </div>
                                </div>
                                <div className="text-center relative z-20">

                                    <div className="absolute inset-0 bg-violet-500/20 blur-3xl" />

                                    <div
                                        className="
        text-7xl
        font-black
        tracking-tight
        bg-gradient-to-r
        from-violet-300
        via-fuchsia-300
        to-violet-500
        bg-clip-text
        text-transparent
        drop-shadow-[0_0_30px_rgba(168,85,247,0.6)]
        "
                                    >
                                        AI
                                    </div>

                                    <div
                                        className="
        mt-2
        text-[11px]
        uppercase
        tracking-[0.5em]
        text-zinc-500
        "
                                    >
                                        INTELLIGENCE CORE
                                    </div>

                                    <div className="w-24 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto my-5" />

                                    <div
                                        className="
        text-violet-400
        text-sm
        font-medium
        min-h-[24px]
        animate-pulse
        "
                                    >
                                        {texts[textIndex]}
                                    </div>

                                </div>

                            </div>

                            <div
                                className="
            absolute
            -inset-8
            rounded-full
            border
            border-violet-500/20
            animate-spin
            "
                                style={{
                                    animationDuration: "20s",
                                }}
                            />

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div className="rounded-3xl border border-violet-500/20 bg-black/30 backdrop-blur-xl p-8">

                        <div className="text-zinc-500 text-sm mb-6">
                            OUTPUT
                        </div>

                        <div className="space-y-5">

                            <div className="rounded-2xl bg-violet-500/10 border border-violet-500/20 p-5">

                                <div className="text-violet-400 mb-2">
                                    ✨ Instagram Post
                                </div>

                                <p className="text-zinc-300">
                                    Yoz mavsumiga maxsus aksiyalar!
                                    Bugunoq yangi uslubni sinab ko'ring.
                                </p>

                            </div>

                            <div className="rounded-2xl bg-violet-500/10 border border-violet-500/20 p-5">

                                <div className="text-violet-400 mb-2">
                                    📝 Caption
                                </div>

                                <p className="text-zinc-300">
                                    O'zingizga mos ideal ko'rinishni toping ✂️
                                </p>

                            </div>

                            <div className="rounded-2xl bg-violet-500/10 border border-violet-500/20 p-5">

                                <div className="text-violet-400 mb-2">
                                    📱 Story
                                </div>

                                <p className="text-zinc-300">
                                    Bugun bo'sh vaqtlar mavjud. Bron qiling.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}