"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function WhyUs() {
    const [activeCard, setActiveCard] = useState<number | null>(null);

    const handleOpen = (index: number) => {
        setActiveCard(index);

        setTimeout(() => {
            setActiveCard(null);
        }, 10000);
    };

    const features = [
        {
            number: "01",
            title: "AI Powered",

            description:
                "Kontentlar zamonaviy AI yordamida biznesingizga mos yaratiladi.",

            details:
                "AI biznesingiz turini tahlil qiladi va siz uchun mos post, caption hamda story g'oyalarini avtomatik yaratadi.",
        },

        {
            number: "02",
            title: "Lightning Fast",

            description:
                "30 kunlik kontent rejasini soniyalar ichida yarating.",

            details:
                "Bir oy davomida joylanadigan kontentlarni bir necha soniyada tayyorlab vaqtingizni tejaydi.",
        },

        {
            number: "03",
            title: "More Engagement",

            description:
                "Mijozlarni jalb qiladigan post va captionlar oling.",

            details:
                "Auditoriyaning e'tiborini tortadigan va ko'proq faollik keltiradigan kontent tavsiyalarini beradi.",
        },

        {
            number: "04",
            title: "Unlimited Ideas",

            description:
                "Kontent g'oyalari hech qachon tugamaydi.",

            details:
                "Post, reel va story uchun doim yangi va kreativ g'oyalarni taklif qiladi.",
        },
    ];

    return (
        <section className="relative py-40 overflow-hidden">

            <div className="absolute inset-0 flex justify-center">
                <div className="w-[900px] h-[500px] bg-violet-600/10 blur-[220px] rounded-full" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6">

                <div className="text-center mb-20">
                    <p className="text-violet-400 uppercase tracking-[0.3em] mb-4">
                        WHY CHOOSE US
                    </p>

                    <h2 className="text-6xl font-bold text-white mb-6">
                        Kontent yaratishning
                        <br />
                        yangi avlodi
                    </h2>

                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                        AI yordamida biznesingiz uchun professional kontent
                        yaratish endi bir necha soniya masalasi.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mt-8">

                    <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                        ⚡ 10x Faster
                    </div>

                    <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                        🤖 AI Powered
                    </div>

                    <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                        🎯 Marketing Focused
                    </div>

                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-20">

                    {features.map((item, index) => (

                        <div
                            key={item.number}
                            onClick={() => handleOpen(index)}
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-3xl
                                border
                                border-white/10
                                bg-white/[0.03]
                                backdrop-blur-xl
                                p-10
                                cursor-pointer
                                transition-all
                                duration-500
                                hover:border-violet-500/50
                                hover:bg-white/[0.05]
                                hover:-translate-y-2
                            "
                        >

                            <div
                                className="
                                    absolute
                                    inset-0
                                    opacity-0
                                    group-hover:opacity-100
                                    transition
                                    duration-500
                                    bg-gradient-to-br
                                    from-violet-500/10
                                    via-transparent
                                    to-fuchsia-500/10
                                "
                            />

                            <div className="relative h-[200px]">

                                <AnimatePresence mode="wait">

                                    {activeCard === index ? (

                                        <motion.div
                                            key="answer"
                                            initial={{
                                                x: 120,
                                                opacity: 0,
                                            }}
                                            animate={{
                                                x: 0,
                                                opacity: 1,
                                            }}
                                            exit={{
                                                x: -120,
                                                opacity: 0,
                                            }}
                                            transition={{
                                                duration: 0.6,
                                            }}
                                            className="
                                                absolute
                                                inset-0
                                                flex
                                                flex-col
                                                justify-center
                                            "
                                        >
                                            <h3 className="text-3xl font-bold text-white mb-6">
                                                {item.title}
                                            </h3>

                                            <p className="text-zinc-400 leading-8">
                                                {item.details}
                                            </p>
                                        </motion.div>

                                    ) : (

                                        <motion.div
                                            key="question"
                                            initial={{
                                                x: -120,
                                                opacity: 0,
                                            }}
                                            animate={{
                                                x: 0,
                                                opacity: 1,
                                            }}
                                            exit={{
                                                x: 120,
                                                opacity: 0,
                                            }}
                                            transition={{
                                                duration: 0.6,
                                            }}
                                        >

                                            <span
                                                className="
                                                    text-6xl
                                                    font-black
                                                    bg-gradient-to-b
                                                    from-violet-300/20
                                                    to-transparent
                                                    bg-clip-text
                                                    text-transparent
                                                "
                                            >
                                                {item.number}
                                            </span>

                                            <h3 className="text-3xl font-bold text-white mt-4 mb-4">
                                                {item.title}
                                            </h3>

                                            <p className="text-zinc-400 leading-8">
                                                {item.description}
                                            </p>

                                            <div
                                                className="
                                                    mt-8
                                                    text-violet-400
                                                    flex
                                                    items-center
                                                    gap-2
                                                    group-hover:translate-x-2
                                                    transition-transform
                                                "
                                            >
                                                Batafsil →
                                            </div>

                                        </motion.div>

                                    )}

                                </AnimatePresence>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}