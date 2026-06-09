"use client";

import { useState } from "react";

export default function InstagramPostWorkspace() {

    const [maqsad, setMaqsad] = useState("");
    const [soha, setSoha] = useState("");
    const [korxonaNomi, setKorxonaNomi] = useState("");
    const [til, setTil] = useState("O'zbek");
    const [ohang, setOhang] = useState("");

    const tillar = [
        "O'zbek",
        "Русский",
        "English",
    ];

    const sohalar = [
        "Go'zallik Saloni",
        "Fitness Klub",
        "Restoran",
        "Ta'lim Markazi",
        "Onlayn Do'kon",
        "Tibbiyot",
        "Sayohat",
        "Avtoservis",
    ];

    return (
        <div className="p-8">
            <div className="max-w-6xl rounded-3xl border border-white/10 bg-white/[0.02] p-8">

                {/* HEADER */}
                <h2 className="text-3xl font-bold text-white mb-2">
                    Instagram Post Yaratish
                </h2>
                <p className="text-zinc-400 mb-8">
                    Biznesingiz haqida ma'lumot kiriting va AI siz uchun professional post tayyorlaydi.
                </p>

                {/* INPUTS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* KORXONA NOMI */}
                    <div>
                        <label className="block text-white text-sm font-medium mb-3">
                            Korxona Nomi
                        </label>
                        <input
                            value={korxonaNomi}
                            onChange={(e) => setKorxonaNomi(e.target.value)}
                            placeholder="Masalan: Beauty House"
                            className="w-full h-14 px-4 rounded-xl bg-white/[0.03] border border-white/10 text-white outline-none focus:border-cyan-500/50 transition"
                        />

                        <div className="mt-5">
                            <label className="block text-white text-sm font-medium mb-3">
                                Post Maqsadi
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                {[
                                    "Sotuv Oshirish",
                                    "Mijoz Topish",
                                    "Brend Tanish",
                                    "Aksiya E'lon Qilish",
                                    "Follow Ko'paytirish",
                                    "Xizmat Tanishtirish",
                                    "Mahsulot Sotish",
                                    "Auditoriyani Jalb Qilish",
                                ].map((item) => (
                                    <button
                                        key={item}
                                        type="button"
                                        onClick={() => setMaqsad(item)}
                                        className={`h-12 px-3 text-sm rounded-xl border transition-all ${maqsad === item
                                            ? "border-cyan-500 bg-cyan-500/15 text-cyan-300"
                                            : "border-white/10 bg-white/[0.03] text-zinc-400 hover:text-white"
                                            }`}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* FAOLIYAT SOHASI */}
                    <div>
                        <label className="block text-white text-sm font-medium mb-3">
                            Faoliyat Sohasi
                        </label>
                        <input
                            value={soha}
                            onChange={(e) => setSoha(e.target.value)}
                            placeholder="Masalan: Go'zallik Saloni"
                            className="w-full h-14 px-4 rounded-xl bg-white/[0.03] border border-white/10 text-white outline-none focus:border-cyan-500/50 transition"
                        />

                        {/* TAGS */}
                        <div className="flex flex-wrap gap-2 mt-4">
                            {sohalar.map((item) => (
                                <button
                                    key={item}
                                    type="button"
                                    onClick={() => setSoha(item)}
                                    className={`px-4 py-2 rounded-full text-sm border transition-all ${soha === item
                                        ? "bg-cyan-500/20 border-cyan-500 text-cyan-300"
                                        : "bg-white/[0.03] border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="">
                        <label className="block text-white text-sm font-medium mb-3">
                            Post Tili
                        </label>
                        <div className="flex flex-wrap gap-3">
                            {tillar.map((item) => (
                                <button
                                    key={item}
                                    type="button"
                                    onClick={() => setTil(item)}
                                    className={`px-5 h-12 text-sm rounded-xl border transition-all ${til === item
                                        ? "bg-cyan-500/15 border-cyan-500 text-cyan-300"
                                        : "bg-white/[0.03] border-white/10 text-zinc-400 hover:text-white"
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>

                        <div className="mt-8">
                            <label className="block text-white text-sm font-medium mb-3">
                                Post Ohangi
                            </label>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                                {[
                                    "Samimiy",
                                    "Professional",
                                    "Premium",
                                    "Rasmiy",
                                    "Viral",
                                    "Sotuvga Yo'naltirilgan",
                                ].map((item) => (
                                    <button
                                        key={item}
                                        type="button"
                                        onClick={() => setOhang(item)}
                                        className={`h-12 px-3 text-sm rounded-xl border transition-all ${ohang === item
                                                ? "border-cyan-500 bg-cyan-500/15 text-cyan-300"
                                                : "border-white/10 bg-white/[0.03] text-zinc-400 hover:text-white"
                                            }`}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>

                    </div>



                </div>
            </div>
        </div>
    );
}
