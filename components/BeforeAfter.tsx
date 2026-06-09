export default function BeforeAfter() {
    return (
        <section className="relative py-40 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_70%)]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <p className="text-violet-400 tracking-[8px] uppercase text-sm mb-4">
                        BEFORE VS AFTER
                    </p>

                    <h2 className="text-6xl font-bold mb-6">
                        AI dan oldin va keyin
                    </h2>

                    <p className="text-zinc-400 text-xl max-w-3xl mx-auto">
                        Bir xil biznes. Ikki xil natija.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">
                    {/* BEFORE */}

                    <div className="group relative overflow-hidden rounded-[32px] border border-zinc-800 bg-zinc-950/70 p-10">
                        <div className="absolute top-6 right-6 text-red-500 font-bold">
                            OLD METHOD
                        </div>

                        <h3 className="text-4xl font-bold mb-10">
                            Qo'lda ishlash
                        </h3>

                        <div className="space-y-7">
                            {[
                                { name: "Post g'oyasi", time: "45 min", width: "100%" },
                                { name: "Caption yozish", time: "30 min", width: "75%" },
                                { name: "Story o'ylash", time: "20 min", width: "50%" },
                                { name: "Dizayn matni", time: "15 min", width: "35%" },
                            ].map((item) => (
                                <div key={item.name}>
                                    <div className="flex justify-between mb-3">
                                        <span className="text-zinc-200">{item.name}</span>
                                        <span className="text-red-400 font-medium">{item.time}</span>
                                    </div>

                                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full"
                                            style={{ width: item.width }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-14 pt-8 border-t border-zinc-800">
                            <p className="text-zinc-500 mb-2">Jami vaqt</p>

                            <div className="text-6xl font-black text-red-500">
                                1h 50m
                            </div>
                        </div>
                    </div>

                    {/* AFTER */}

                    <div className="group relative overflow-hidden rounded-[32px] border border-violet-500/30 bg-gradient-to-b from-violet-950/40 to-black p-10">

                        <div className="absolute inset-0 bg-violet-500/5" />

                        <div className="absolute top-6 right-6 text-violet-400 font-bold">
                            AI METHOD
                        </div>

                        <h3 className="text-4xl font-bold mb-10">
                            SMM Starter Hub
                        </h3>

                        <div className="space-y-7">
                            {[
                                { name: "Biznes turi", time: "8 sec", width: "12%" },
                                { name: "AI analiz", time: "5 sec", width: "15%" },
                                { name: "Post + Caption", time: "7 sec", width: "18%" },
                                { name: "Story", time: "3 sec", width: "5%" },
                            ].map((item) => (
                                <div key={item.name}>
                                    <div className="flex justify-between mb-3">
                                        <span className="text-zinc-200">{item.name}</span>
                                        <span className="text-emerald-400 font-medium">{item.time}</span>
                                    </div>

                                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full"
                                            style={{ width: item.width }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-14 pt-8 border-t border-violet-500/20">
                            <p className="text-zinc-400 mb-2">Jami vaqt</p>

                            <div className="text-6xl font-black text-violet-400">
                                23 sec
                            </div>
                        </div>
                    </div>
                </div>

                {/* CENTER COMPARISON */}

                <div className="text-center mt-20">
                    <div className="inline-flex items-center gap-8">
                        <span className="text-5xl font-black text-red-500">
                            1h 50m
                        </span>

                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                            <div className="
    w-24 h-24
    rounded-full
    border border-violet-500/30
    bg-black/80
    backdrop-blur-xl
    flex items-center justify-center
    text-3xl font-black
    text-violet-400
    shadow-[0_0_60px_rgba(139,92,246,0.4)]
  ">
                                VS
                            </div>
                        </div>

                        <span className="text-7xl">
                            →
                        </span>

                        <span className="text-5xl font-black text-violet-400">
                            23 sec
                        </span>
                    </div>

                    <p className="mt-6 text-zinc-400 text-xl">
                        660 marta tezroq kontent yaratish
                    </p>
                </div>
            </div>
        </section>
    );
}