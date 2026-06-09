"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">

            <motion.div
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                }}
                className="absolute w-[500px] h-[500px] bg-violet-600/20 blur-[140px] rounded-full"
            />

            <motion.div
                animate={{
                    y: [-20, 20, -20],
                    x: [-10, 10, -10],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                }}
                className="absolute top-32 left-[25%] w-3 h-3 rounded-full bg-violet-400 shadow-[0_0_20px_#a855f7]"
            />

            <motion.div
                animate={{
                    y: [20, -20, 20],
                    x: [10, -10, 10],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                }}
                className="absolute top-60 right-[20%] w-2 h-2 rounded-full bg-fuchsia-400 shadow-[0_0_20px_#d946ef]"
            />

            <motion.div
                animate={{
                    y: [-30, 30, -30],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                }}
                className="absolute bottom-40 left-[30%] w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_30px_#9333ea]"
            />

            <div className="relative text-center max-w-4xl px-6">
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 50,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1,
                    }}
                    className="text-6xl font-bold text-white mb-6"
                >
                    AI yordamida
                    <span className="bg-gradient-to-r -violet-400 via-fuchsia-400 to-purple-600 bg-clip-text text-transparent">
                        {" "}30 kunlik kontent
                    </span>
                    {" "}yarating
                </motion.h1>

                <p className="text-zinc-400 text-xl mb-8">
                    Barber, kafe, restoran va boshqa bizneslar uchun
                    post, caption va story g'oyalarini bir necha soniyada oling.
                </p>

                <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-lg font-semibold shadow-[0_0_40px_rgba(139,92,246,0.4)] hover:scale-105 transition-all">
                    Kontent yaratish
                </button>

                <div className="mt-20 flex justify-center gap-16 flex-wrap">
                    <div>
                        <h3 className="text-4xl font-bold text-white">
                            12,847+
                        </h3>
                        <p className="text-zinc-400">
                            Yaratilgan postlar
                        </p>
                    </div>

                    <div>
                        <h3 className="text-4xl font-bold text-white">
                            523+
                        </h3>
                        <p className="text-zinc-400">
                            Biznes foydalanmoqda
                        </p>
                    </div>

                    <div>
                        <h3 className="text-4xl font-bold text-white">
                            98%
                        </h3>
                        <p className="text-zinc-400">
                            Vaqt tejaydi
                        </p>
                    </div>
                </div>
            </div>

            <motion.div
                animate={{
                    y: [-15, 15, -15],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                }}
                className="absolute left-20 top-40 hidden xl:flex"
            >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4">
                    <p className="text-violet-400 font-bold text-2xl">12,847+</p>
                    <p className="text-zinc-400 text-sm">
                        Yaratilgan postlar
                    </p>
                </div>
            </motion.div>

            <motion.div
                animate={{
                    y: [15, -15, 15],
                    x: [0, 10, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                }}
                className="absolute right-20 top-56 hidden xl:flex"
            >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4">
                    <p className="text-violet-400 font-bold text-2xl">523+</p>
                    <p className="text-zinc-400 text-sm">
                        Faol bizneslar
                    </p>
                </div>
            </motion.div>

            <motion.div
                animate={{
                    y: [-10, 10, -10],
                    rotate: [-1, 1, -1],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                }}
                className="absolute left-32 bottom-32 hidden xl:flex"
            >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4">
                    <p className="text-violet-400 font-bold text-2xl">98%</p>
                    <p className="text-zinc-400 text-sm">
                        Vaqt tejaladi
                    </p>
                </div>
            </motion.div>
        </section>
    );
}