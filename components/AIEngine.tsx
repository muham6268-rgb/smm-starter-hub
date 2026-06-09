export default function AIEngine() {
    const outputs = [
        "✨ Instagram Post",
        "📝 Caption",
        "📱 Story",
        "🏷️ Hashtag Pack",
        "🎬 Reels Idea",
        "🚀 CTA",
        "📅 Weekly Plan",
        "🔥 Promotion Text",
    ];

    return (
        <section className="relative py-40 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-violet-600/10 blur-[180px]" />

            <div className="relative max-w-7xl mx-auto px-6">

                <div className="text-center mb-24">
                    <div className="text-violet-400 tracking-[0.4em] text-sm uppercase mb-6">
                        AI Preview
                    </div>

                    <h2 className="text-6xl md:text-7xl font-black text-white mb-6">
                        AI qanday ishlaydi?
                    </h2>

                    <p className="text-xl text-white/60 max-w-3xl mx-auto">
                        Biznesingiz haqida bir nechta ma'lumot kiriting va AI bir necha
                        soniyada tayyor marketing kontent yaratadi.
                    </p>
                </div>

                <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-16 items-center">

                    {/* INPUT */}
                    <div className="p-8 rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl">

                        <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-8">
                            INPUT
                        </div>

                        <div className="flex items-center gap-4 mb-8">
                            <div className="text-5xl">💈</div>

                            <div>
                                <h3 className="text-4xl font-bold text-white">
                                    Barber Shop
                                </h3>

                                <p className="text-white/40">
                                    Business Profile
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4">

                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                <div className="text-white/40 text-sm">
                                    🎯 Goal
                                </div>

                                <div className="text-white font-medium">
                                    Yangi mijozlar
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                <div className="text-white/40 text-sm">
                                    📍 Location
                                </div>

                                <div className="text-white font-medium">
                                    Toshkent
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                <div className="text-white/40 text-sm">
                                    📱 Platform
                                </div>

                                <div className="text-white font-medium">
                                    Instagram
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                <div className="text-white/40 text-sm">
                                    🔥 Tone
                                </div>

                                <div className="text-white font-medium">
                                    Premium
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                <div className="text-white/40 text-sm">
                                    👥 Audience
                                </div>

                                <div className="text-white font-medium">
                                    18-40 yosh
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* AI CORE */}
                    <div className="relative flex items-center justify-center">

                        <div className="absolute w-[320px] h-[320px] rounded-full border border-violet-500/20 animate-spin [animation-duration:40s]" />

                        <div className="absolute w-[260px] h-[260px] rounded-full border border-violet-500/20 animate-spin [animation-duration:25s] [animation-direction:reverse]" />

                        <div className="w-56 h-56 rounded-full bg-gradient-to-br from-violet-500/20 to-fuchsia-500/10 border border-violet-500/30 backdrop-blur-2xl flex items-center justify-center shadow-[0_0_120px_rgba(139,92,246,0.25)]">

                            <div className="text-center">

                                <div className="text-6xl font-black text-violet-300">
                                    AI
                                </div>

                                <div className="text-xs tracking-[0.5em] text-white/40 mt-3">
                                    CORE
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* OUTPUT */}
                    <div>

                        <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">
                            OUTPUT
                        </div>

                        <div className="grid gap-4">

                            {outputs.map((item) => (
                                <div
                                    key={item}
                                    className="
                    p-5
                    rounded-3xl
                    border
                    border-violet-500/20
                    bg-white/[0.03]
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:scale-[1.02]
                    hover:border-violet-400/50
                    hover:shadow-[0_0_40px_rgba(139,92,246,0.25)]
                  "
                                >
                                    <div className="text-white font-medium">
                                        {item}
                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}