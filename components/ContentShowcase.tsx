"use client";

import { useEffect, useState } from "react";

const examples = [
    {
        business: "💈 Barber Shop",
        goal: "Yangi mijozlar",
        location: "Toshkent",
        platform: "Instagram",
        audience: "18-40 yosh",
        outputs: [
            "✨ Instagram Post",
            "📝 Caption",
            "📱 Story",
            "🏷️ Hashtag Pack",
            "🎬 Reels Idea",
            "🚀 CTA",
            "📅 Weekly Plan",
            "🔥 Promotion Text",
        ],
    },

    {
        business: "☕ Kafe",
        goal: "Ko'proq buyurtmalar",
        location: "Samarqand",
        platform: "Instagram",
        audience: "18-35 yosh",
        outputs: [
            "☕ Coffee Post",
            "📝 Caption",
            "📱 Story",
            "🏷️ Hashtags",
            "🎬 Reels",
            "🚀 CTA",
            "📅 Weekly Plan",
            "🎁 Promotion",
        ],
    },

    {
        business: "🏋️ Fitness",
        goal: "Yangi a'zolar",
        location: "Toshkent",
        platform: "Instagram",
        audience: "16-45 yosh",
        outputs: [
            "💪 Fitness Post",
            "📝 Caption",
            "📱 Story",
            "🏷️ Hashtags",
            "🎬 Reels",
            "🚀 CTA",
            "📅 Weekly Plan",
            "🔥 Challenge",
        ],
    },

    {
        business: "💅 Beauty Salon",
        goal: "Bronlar soni",
        location: "Buxoro",
        platform: "Instagram",
        audience: "18-40 yosh",
        outputs: [
            "💅 Beauty Post",
            "📝 Caption",
            "📱 Story",
            "🏷️ Hashtags",
            "🎬 Reels",
            "🚀 CTA",
            "📅 Weekly Plan",
            "✨ Promotion",
        ],
    },
];

export default function ContentShowcase() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % examples.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const item = examples[active];

    return (
        <section className="relative py-40 overflow-hidden">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.12),transparent_70%)]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="text-center mb-20">
                    <p className="text-violet-400 tracking-[8px] uppercase text-sm mb-4">
                        LIVE EXAMPLES
                    </p>

                    <h2 className="text-6xl font-bold mb-6">
                        AI nimalar yaratadi?
                    </h2>

                    <p className="text-zinc-400 text-xl">
                        Har bir biznes uchun tayyor marketing kontenti.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">

                    {/* LEFT */}

                    <div className="rounded-[32px] border border-zinc-800 bg-zinc-950/60 p-10">

                        <div className="text-zinc-500 text-sm mb-8">
                            BIZNES TURI
                        </div>

                        <div className="text-5xl font-bold mb-8 text-violet-300">
                            {item.business}
                        </div>
                        <div className="space-y-4">

                            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4">
                                <p className="text-zinc-500 text-xs mb-1">BUSINESS</p>
                                <p className="text-white font-medium">{item.business}</p>
                            </div>

                            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4">
                                <p className="text-zinc-500 text-xs mb-1">GOAL</p>
                                <p className="text-white">Yangi mijozlar</p>
                            </div>

                            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4">
                                <p className="text-zinc-500 text-xs mb-1">LOCATION</p>
                                <p className="text-white">Toshkent</p>
                            </div>

                            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4">
                                <p className="text-zinc-500 text-xs mb-1">AUDIENCE</p>
                                <p className="text-white">18-40 yosh</p>
                            </div>

                        </div>

                        <div className="flex gap-3 flex-wrap">

                            {examples.map((x, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActive(i)}
                                    className={`px-4 py-2 rounded-full border transition-all
                  ${active === i
                                            ? "border-violet-500 bg-violet-500/20"
                                            : "border-zinc-700"
                                        }`}
                                >
                                    {x.business}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT */}

                    <div className="space-y-5">

                        <div className="grid md:grid-cols-2 gap-4">

                            {item.outputs.map((output) => (
                                <div
                                    key={output}
                                    className="
        p-5
        rounded-[24px]
        border
        border-violet-500/20
        bg-violet-950/10
        transition-all
        duration-500
        hover:-translate-y-2
        hover:scale-[1.02]
        hover:border-violet-400/50
        hover:shadow-[0_0_40px_rgba(139,92,246,0.25)]
      "
                                >
                                    <div className="text-white font-medium">
                                        {output}
                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </div>
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-600/10 blur-[180px]" />

            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-fuchsia-600/10 blur-[180px]" />
        </section>
    );
}