"use client";

import EnergyWaves from "@/components/dashboard/EnergyWaves";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import InstagramPostWorkspace from "./components/InstagramPostWorkspace";
import ReelsWorkspace from "./components/ReelsWorkspace";
import StoryWorkspace from "./components/StoryWorkspace";
import CaptionWorkspace from "./components/CaptionWorkspace";
import HashtagWorkspace from "./components/HashtagWorkspace";
import EnergySnake from "./effects/EnergySnake";
import { useState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import {
    LayoutDashboard,
    Sparkles,
    Calendar,
    Video,
    Share2,
    Mail,
    BarChart3,
    MessageSquare,
    Zap,
    MessageSquareText,
    CalendarDays,
    ChartColumn,
    MessageCircle,
    ImageIcon,
    FolderOpen,
    Settings,
    Bell,
    CircleHelp,
    Flame,
    TrendingUp,
    FileText,
    PenSquare,
    Clapperboard,
    UserCircle2,
    Smartphone,
} from "lucide-react";

export default function AIStudioPage() {

    const router = useRouter();
    const pathname = usePathname();
    const [activeTool, setActiveTool] = useState("");

    const toolSections = [
        {
            title: "CONTENT",
            items: [
                "Instagram Post",
                "Reels Script",
                "Story Content",
                "Caption",
                "Hashtag Set",
            ],
        },
        {
            title: "STRATEGY",
            items: [
                "Marketing Idea",
                "Weekly Plan",
                "CTA Generator",
                "Campaign Plan",
            ],
        },
        {
            title: "ANALYTICS",
            items: [
                "Audience Analysis",
                "Competitor Analysis",
                "Product Analysis",
            ],
        },
        {
            title: "ADVANCED",
            items: [
                "Brand Voice",
                "Content Rewrite",
                "Trend Finder",
                "Content Optimizer",
                "Hook Generator",
                "Viral Ideas",
                "SEO Booster",
                "AI Content Audit",
            ],
        },
    ];

    const menuItems = [
        {
            icon: LayoutDashboard,
            label: "Dashboard",
            href: "/dashboard",
        },
        {
            icon: Sparkles,
            label: "AI Studio",
            href: "/dashboard/ai-studio",
        },
        {
            icon: Calendar,
            label: "Kontent kalendar",
            href: "/calendar",
        },
        {
            icon: BarChart3,
            label: "Analitika",
            href: "/analytics",
        },
        {
            icon: MessageSquare,
            label: "AI Chat",
            href: "/chat",
        },
        {
            icon: FolderOpen,
            label: "Loyihalar",
            href: "/projects",
        },
        {
            icon: Settings,
            label: "Sozlamalar",
            href: "/settings",
        },
    ];

    const steps = [
        {
            number: "01",
            title: "Tanlang",
            description: "Kerakli kontent turini tanlang",
        },
        {
            number: "02",
            title: "Ma'lumot bering",
            description: "Brendingiz haqida qisqacha ma'lumot",
        },
        {
            number: "03",
            title: "Prompt yozing",
            description: "Yoki AI yordamchisidan so'rang",
        },
        {
            number: "04",
            title: "Natijani oling",
            description: "Tayyor kontentni nashr eting",
        },
    ];

    const analyticsFeatures = [
        "Haqiqiy vaqtdagi trendlar tahlili",
        "Auditoriya reaksiyasi bashorati",
        "Optimal vaqtda avtomatik nashr",
    ];

    return (
        <div className="min-h-screen bg-[#020B23] flex relative overflow-hidden">

            <EnergyWaves />

            {/* Sidebar */}
            <aside
                className=" group fixed left-0 top-0 z-51 h-screen w-20 hover:w-72 transition-all duration-300 border-r border-white/10 bg-[#08142B] overflow-hidden"
            >
                <div className="h-20 flex items-center px-5 border-b border-white/10">

                    <div
                        className=" w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center shrink-0
        "
                    >
                        S
                    </div>

                    <span
                        className=" ml-4 text-white font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition
        "
                    >
                        SMM Starter Hub
                    </span>

                </div>
                {/* Menu */}
                <div className="p-3 space-y-2">

                    <div className="py-5 space-y-2">

                        {menuItems.map((item) => {
                            const active = pathname === item.href;
                            const Icon = item.icon;

                            return (
                                <button
                                    key={item.label}
                                    onClick={() => router.push(item.href)}
                                    className={` w-full h-12 rounded-xl flex items-center px-4 transition-all duration-200 ${active
                                        ? "bg-white/10 text-white border border-white/10"
                                        : "text-zinc-300 hover:bg-white/5 hover:text-white"
                                        }
    `}
                                >
                                    <Icon
                                        size={20}
                                        className="shrink-0"
                                    />

                                    <span
                                        className=" ml-4 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all
                    "
                                    >
                                        {item.label}
                                    </span>
                                </button>
                            );
                        })}

                    </div>

                </div>

            </aside>

            {/* Main */}
            <main
                className=" flex-1 ml-[80px]"
            >


                {/* Navbar */}
                <header
                    className=" h-20 border-b border-white/10 flex items-center justify-between px-8
    "
                >

                    {/* Left */}
                    <div>
                        <h1 className="text-white text-2xl font-bold">
                            Ai Studio
                        </h1>
                    </div>

                    {/* Right */}
                    <div className="flex items-center gap-8">

                        <div className="flex items-center gap-10">

                            <button
                                className=" text-zinc-400 hover:text-white transition text-sm font-medium
            "
                            >
                                Bildirishnomalar
                            </button>

                            <button
                                className=" text-zinc-400 hover:text-white transition text-sm font-medium
            "
                            >
                                Yordam
                            </button>

                        </div>

                        <div className="h-10 w-px bg-white/20" />

                        <Bell
                            size={24}
                            className="text-zinc-400 hover:text-white cursor-pointer transition"
                        />

                        <CircleHelp
                            size={24}
                            className="text-zinc-400 hover:text-white cursor-pointer transition"
                        />

                        <div
                            className=" flex items-center gap-2 px-4 h-11 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 transition
    "
                        >
                            <UserCircle2
                                size={22}
                                strokeWidth={1.8}
                                className="text-zinc-400"
                            />

                            <span className="text-zinc-300 text-sm font-medium">
                                Profil
                            </span>
                        </div>

                    </div>

                </header>

                <div className="h-[calc(100vh-80px)] flex">

                    <div className="w-[280px] h-full border-r border-white/10 p-6 overflow-y-auto scrollbar-none">

                        <div className="mb-8 pb-6 border-b border-white/10">
                            <p className="text-cyan-400 text-xs tracking-[0.25em] mb-2">
                                AI STUDIO
                            </p>

                            <h2 className="text-white text-2xl font-bold">
                                Toolbox
                            </h2>

                            <p className="text-zinc-500 text-sm mt-1">
                                AI instrumentlari
                            </p>
                        </div>

                        {toolSections.map((section) => (

                            <div
                                key={section.title}
                                className="mb-8"
                            >

                                <p className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 mb-3">
                                    {section.title}
                                </p>

                                <div className="space-y-1">

                                    {section.items.map((item) => (

                                        <button
                                            key={item}
                                            onClick={() => setActiveTool(item)}
                                            className={`group relative w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${activeTool === item
                                                ? "bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
                                                : "text-zinc-400 hover:text-white hover:bg-white/[0.04] cursor-pointer"
                                                }`}
                                        >
                                            {activeTool === item && (
                                                <div className="absolute left-0 top-2 bottom-2 w-1 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]" />
                                            )}

                                            <div
                                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${activeTool === item
                                                    ? "bg-cyan-400 shadow-[0_0_8px_#22d3ee]"
                                                    : "bg-zinc-600 group-hover:bg-cyan-400"
                                                    }`}
                                            />

                                            <span className="text-[13px] font-medium">
                                                {item}
                                            </span>
                                        </button>

                                    ))}

                                </div>

                            </div>

                        ))}

                    </div>

                    <div className="flex-1 overflow-y-auto">

                        {!activeTool && (
                            <>

                                <section className="relative min-h-[650px] flex items-center justify-center px-12 overflow-hidden">

                                    <div className="absolute inset-0 bg-[url('/social-bg.png')] scale-180 bg-center bg-no-repeat bg-[length:60%] opacity-25 pointer-events-none" />

                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020B23]/30 to-[#020B23]" />

                                    <div className="relative z-10 max-w-5xl mx-auto text-center">

                                        <span className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-xs tracking-[0.25em] uppercase gap-1">
                                            <Zap size={18} strokeWidth={1} className="text-blue-500" />
                                            Yangi Avlod SMM Yechimi
                                        </span>

                                        <h1 className="mt-8 text-5xl font-black leading-tight text-white">
                                            AI Studio — Sening Shaxsiy <span className="block text-green-400">Marketing Laboratoriyang</span>
                                        </h1>

                                        <p className="mt-8 max-w-3xl mx-auto text-lg text-white leading-relaxed">
                                            Bu shunchaki AI generator emas. Strategiya, kreativlik va analitika bir joyda jamlangan professional SMM markazi.
                                        </p>

                                        <div className="mt-10 flex justify-center">
                                            <button onClick={() => {
                                                document
                                                    .getElementById("tools-section")
                                                    ?.scrollIntoView({
                                                        behavior: "smooth",
                                                    });
                                            }} className="relative group overflow-hidden border border-blue-900 text-white px-8 py-3 rounded-md transition-all duration-300 hover:border-transparent hover:shadow-[0_0_25px_rgba(99,102,241,0.7)] cursor-pointer">

                                                {/* HOVER BO'LGANDA AYLANADIGAN GRADIENT QATLAM */}
                                                <div className="absolute inset-[-100%] bg-[conic-gradient(#c084fc,#6366f1,#22d3ee,#c084fc)] opacity-0 group-hover:opacity-100 group-hover:animate-spin-slow transition-opacity duration-300 z-0" />

                                                {/* MATN DOIMO GRADIENTNING USTIDA TURISHI UCHUN */}
                                                <span className="relative z-10 font-medium">
                                                    Hozir boshlash
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </section>

                                <section className="px-12 py-20 ">

                                    <div className="mb-12">

                                        <h2 className="text-white text-4xl font-bold">
                                            Asosiy Imkoniyatlar
                                        </h2>

                                        <div className="w-16 h-1 bg-cyan-400 rounded-full mt-3" />

                                    </div>

                                    <div className="grid grid-cols-12 gap-6">

                                        {/* Card 1 */}
                                        <div className="col-span-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden group">

                                            <div className="grid grid-cols-[1.2fr_0.8fr] min-h-[260px]">

                                                {/* LEFT */}

                                                <div className="p-6 flex flex-col justify-between">

                                                    <div>

                                                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">

                                                            <Sparkles
                                                                size={18}
                                                                className="text-cyan-400"
                                                            />

                                                        </div>

                                                        <h3 className="text-white text-2xl font-bold mb-3">
                                                            AI Kontent Yaratish
                                                        </h3>

                                                        <p className="text-zinc-400 text-sm leading-7 max-w-md">
                                                            Instagram postlar, Reels skriptlar va kreativ captionlarni
                                                            soniyalar ichida yarating. Har bir post brendingiz ohangiga
                                                            moslanadi.
                                                        </p>

                                                    </div>

                                                    <div className="flex flex-wrap gap-2 mt-5">

                                                        <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs">
                                                            Reels
                                                        </span>

                                                        <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs">
                                                            Caption
                                                        </span>

                                                        <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs">
                                                            Story
                                                        </span>

                                                    </div>

                                                </div>

                                                {/* RIGHT */}

                                                <div className="relative overflow-hidden flex items-center justify-center">

                                                    <img
                                                        src="/social-bg4.png"
                                                        alt=""
                                                        className=" w-[240px] object-contain scale-130 brightness-50 transition-all duration-500 group-hover:brightness-100 group-hover:scale-140 "
                                                    />

                                                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#020B23]/30" />

                                                </div>

                                            </div>

                                        </div>

                                        {/* Card 2 */}
                                        <div className="col-span-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6">

                                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">

                                                <CalendarDays
                                                    size={18}
                                                    className="text-emerald-400"
                                                />

                                            </div>

                                            <h3 className="text-white text-2xl font-bold mb-3">
                                                Strategik Rejalashtirish
                                            </h3>

                                            <p className="text-zinc-400 text-sm leading-7">
                                                Haftalik va oylik kontent rejalarini Al
                                                yordamida tuzish. Maqsadli auditoriya
                                                xohishlaridan kelib chiqqan holda kontent
                                                matritsasini yarating.
                                            </p>

                                            <div
                                                className="h-px w-full bg-white/10"
                                            />

                                            <div className="mt-auto">

                                                <div className="flex items-center justify-between text-xs mb-2 mt-2">

                                                    <span className="text-zinc-500">
                                                        Avtomatlashtirish
                                                    </span>

                                                    <span className="text-emerald-400 font-semibold">
                                                        95%
                                                    </span>

                                                </div>

                                                <div className="h-2 rounded-full bg-white/5 overflow-hidden">

                                                    <div
                                                        className=" h-full w-[95%] rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400 "
                                                    />

                                                </div>

                                            </div>

                                        </div>

                                        {/* Card 3 */}
                                        <div className="col-span-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden group">

                                            <div className="grid grid-cols-[1fr_0.9fr] h-full">

                                                <div className="p-6">

                                                    <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-5">

                                                        <ImageIcon
                                                            size={18}
                                                            className="text-violet-400"
                                                        />

                                                    </div>

                                                    <h3 className="text-white text-2xl font-bold mb-3">
                                                        Vizual Kreativlik
                                                    </h3>

                                                    <p className="text-zinc-400 text-sm leading-7">
                                                        Al Image Designer va Video
                                                        Studio imkoniyatlari.
                                                        Professional grafik dizaynlarni
                                                        hech qanday dizayner
                                                        yordamisiz tayyorlang.
                                                    </p>

                                                </div>

                                                <div className="relative overflow-hidden flex items-center justify-center">

                                                    <img
                                                        src="/social-bg3.png"
                                                        alt=""
                                                        className=" rounded-2xl w-[180px] object-contain brightness-50 transition-all duration-500 group-hover:brightness-100 group-hover:scale-110 "
                                                    />

                                                </div>

                                            </div>

                                        </div>

                                        {/* Card 4 */}
                                        <div className="relative col-span-6 rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden p-8 group">

                                            {/* BG IMAGE WITH HOVER ANIMATION */}
                                            <img
                                                src="/social-bg2.png"
                                                alt=""
                                                className="top-10 absolute right-0 bottom-0 h-full w-[45%] object-cover opacity-40 pointer-events-none transition-all duration-800 ease-out origin-bottom-right group-hover:rotate-12 group-hover:scale-110"
                                            />

                                            {/* GRADIENT */}
                                            <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-cyan-500/5 via-[#020B23]/30 to-transparent pointer-events-none" />

                                            {/* CONTENT */}
                                            <div className="relative z-10">
                                                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6">
                                                    <FileText size={20} className="text-orange-400" />
                                                </div>
                                                <h3 className="text-white text-3xl font-bold mb-4">
                                                    Matn Laboratoriyasi
                                                </h3>
                                                <p className="text-zinc-400 text-sm leading-6 max-w-xl">
                                                    SEO bloglar, Ad Copy va Email marketing matnlari. Har bir so'z konversiyani oshirish uchun maxsus AI algoritmimiz tomonidan tekshiriladi.
                                                </p>
                                            </div>
                                        </div>

                                    </div>

                                </section>

                                <section className="mt-24 px-8 max-w-7xl mx-auto">

                                    {/* HEADER SECTION */}
                                    <div className="text-center mb-20">
                                        <h2 className="text-white text-4xl font-bold mb-3">
                                            Ish jarayoni qanday?
                                        </h2>
                                        <p className="text-zinc-400">
                                            Bor-yo'g'i 4 qadamda mukammal natija
                                        </p>
                                    </div>

                                    {/* STEPS CONTAINER */}
                                    <div className="relative">

                                        {/* BACKGROUND STATIC LINE */}
                                        <div className="absolute top-10 left-0 w-full h-px bg-white/10" />

                                        {/* ANIMATED LINE */}
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 2, ease: "easeInOut" }}
                                            className="absolute top-10 left-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 shadow-[0_0_20px_#22d3ee]"
                                        />

                                        {/* GRID COLUMNS FOR STEPS */}
                                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                                            {steps.map((step, index) => (
                                                <div key={step.number} className="text-center group">

                                                    {/* CIRCLE WITH NUMBER */}
                                                    <motion.div
                                                        initial={{ scale: 0.7, opacity: 0 }}
                                                        whileInView={{ scale: 1, opacity: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: index * 0.4, duration: 0.5, ease: "easeOut" }}
                                                        className="relative mx-auto mb-6 w-20 h-20 rounded-full border border-cyan-400/20 bg-[#070c1e] backdrop-blur-xl flex items-center justify-center text-cyan-300 text-2xl font-bold transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                                                    >
                                                        {/* PULSING BACKGROUND EFFECT */}
                                                        <motion.div
                                                            animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.02, 0.15] }}
                                                            transition={{ repeat: Infinity, duration: 2.5, delay: index * 0.5, ease: "easeInOut" }}
                                                            className="absolute inset-0 rounded-full bg-cyan-500 pointer-events-none"
                                                        />

                                                        <span className="relative z-10 selection:bg-transparent">
                                                            {step.number}
                                                        </span>
                                                    </motion.div>

                                                    {/* TITLE & DESCRIPTION */}
                                                    <h3 className="text-white font-semibold mb-2 text-lg transition-colors duration-300 group-hover:text-cyan-300">
                                                        {step.title}
                                                    </h3>
                                                    <p className="text-zinc-400 text-sm leading-relaxed max-w-[220px] mx-auto">
                                                        {step.description}
                                                    </p>

                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </section>

                                <section className="mt-32 px-8 max-w-7xl mx-auto">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                                        {/* LEFT CONTENT */}
                                        <div>
                                            <span className="text-green-400 text-sm font-semibold tracking-[0.2em] uppercase">
                                                Bashoratli Analitika
                                            </span>
                                            <h2 className="mt-5 text-white text-4xl md:text-3xl font-bold leading-tight md:leading-snug">
                                                Post qilishingizdan oldin natijani biling
                                            </h2>
                                            <p className="mt-5 text-zinc-400 text-base md:text-lg leading-relaxed md:leading-7 max-w-2xl">
                                                Al Studio faqat yaratish bilan cheklanmaydi. Bizning
                                                algoritmimiz har bir postning necha kishi ko'rishi, qancha layk
                                                to'plashi va qanchalik tarqalishini (engagement rate) oldindan
                                                bashorat qiladi. Trendlarni soniyalar ichida tahlil qilib, eng
                                                maqbul nashr vaqtini taklif etadi.
                                            </p>

                                            {/* FEATURES LIST */}
                                            <div className="mt-5 space-y-3">
                                                <div className="flex items-center gap-4 group">
                                                    <CheckCircle2 size={20} className="text-green-400 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                                                    <span className="text-white text-base md:text-lg">Haqiqiy vaqtdagi trendlar tahlili</span>
                                                </div>
                                                <div className="flex items-center gap-4 group">
                                                    <CheckCircle2 size={20} className="text-green-400 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                                                    <span className="text-white text-base md:text-lg">Auditoriya reaksiyasi bashorati</span>
                                                </div>
                                                <div className="flex items-center gap-4 group">
                                                    <CheckCircle2 size={20} className="text-green-400 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                                                    <span className="text-white text-base md:text-lg">Optimal vaqtda avtomatik nashr</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* RIGHT ANALYTICS CARD */}
                                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 overflow-hidden relative group hover:border-cyan-500/30 transition-all duration-500">

                                            {/* CHART SECTION */}
                                            <div className="h-[220px] flex items-end justify-between gap-3 md:gap-4 border-b border-white/5 pb-4">
                                                <div className="w-full h-[40%] rounded-t-xl bg-green-500/40 transition-all duration-500 group-hover:h-[55%]" />
                                                <div className="w-full h-[65%] rounded-t-xl bg-green-500/55 transition-all duration-500 group-hover:h-[75%]" />
                                                <div className="w-full h-[50%] rounded-t-xl bg-green-500/70 transition-all duration-500 group-hover:h-[60%]" />
                                                <div className="w-full h-[85%] rounded-t-xl bg-green-500/90 transition-all duration-500 group-hover:h-[95%]" />
                                                <div className="w-full h-[72%] rounded-t-xl bg-green-400 transition-all duration-500 group-hover:h-[80%] shadow-[0_0_20px_rgba(34,211,238,0.4)]" />
                                            </div>

                                            {/* STATS INFOCARDS */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                                                <div className="rounded-2xl bg-[#111B36] p-5 border border-white/[0.02] transition-transform duration-300 hover:-translate-y-1">
                                                    <p className="text-zinc-200 text-sm font-medium">Engagement Rate</p>
                                                    <h3 className="mt-2 text-green-400 text-3xl md:text-4xl font-bold tracking-tight">+14.2%</h3>
                                                </div>
                                                <div className="rounded-2xl bg-[#111B36] p-5 border border-white/[0.02] transition-transform duration-300 hover:-translate-y-1">
                                                    <p className="text-zinc-200 text-sm font-medium">Reach Forecast</p>
                                                    <h3 className="mt-2 text-cyan-400 text-3xl md:text-4xl font-bold tracking-tight">12.5K</h3>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </section>

                                <section className="mt-40 px-8">
                                    <div className="max-w-7xl mx-auto text-center">

                                        {/* BADGE */}
                                        <span className="text-cyan-400 text-xs md:text-sm tracking-[0.4em] uppercase font-semibold">
                                            Global Samaradorlik Statistikasi
                                        </span>

                                        {/* MAIN HEADING */}
                                        <h2 className="mt-5 text-white text-3xl sm:text-5xl md:text-7xl font-light leading-tight">
                                            SMM Hub foydalanuvchilari <br className="hidden md:inline" /> haftasiga o'rtacha{" "}
                                            <span className="text-[#42F5B0] font-normal drop-shadow-[0_0_25px_rgba(66,245,176,0.5)]">
                                                15 soat
                                            </span>{" "}
                                            vaqt <br className="hidden md:inline" /> tejashmoqda.
                                        </h2>

                                        {/* STATISTICS GRID */}
                                        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6">

                                            {/* STAT 1 */}
                                            <div className="group border border-white/[0.03] bg-white/[0.01] p-6 rounded-2xl transition-all duration-300 hover:bg-white/[0.03] hover:border-white/10">
                                                <h3 className="text-white text-5xl md:text-6xl font-light tracking-tight transition-colors duration-300 group-hover:text-[#42F5B0]">
                                                    94%
                                                </h3>
                                                <p className="mt-6 text-zinc-400 text-xs tracking-[0.2em] uppercase font-semibold">
                                                    Qoniqish Darajasi
                                                </p>
                                                <p className="mt-3 text-zinc-500 text-sm leading-relaxed max-w-[240px] mx-auto">
                                                    Mijozlarimizning qayta murojaat darajasi
                                                </p>
                                            </div>

                                            {/* STAT 2 */}
                                            <div className="group border border-white/[0.03] bg-white/[0.01] p-6 rounded-2xl transition-all duration-300 hover:bg-white/[0.03] hover:border-white/10">
                                                <h3 className="text-white text-5xl md:text-6xl font-light tracking-tight transition-colors duration-300 group-hover:text-cyan-400">
                                                    5X
                                                </h3>
                                                <p className="mt-6 text-zinc-400 text-xs tracking-[0.2em] uppercase font-semibold">
                                                    Tezkorlik
                                                </p>
                                                <p className="mt-3 text-zinc-500 text-sm leading-relaxed max-w-[240px] mx-auto">
                                                    Kontent yaratish tezligining o'sishi
                                                </p>
                                            </div>

                                            {/* STAT 3 */}
                                            <div className="group border border-white/[0.03] bg-white/[0.01] p-6 rounded-2xl transition-all duration-300 hover:bg-white/[0.03] hover:border-white/10">
                                                <h3 className="text-white text-5xl md:text-6xl font-light tracking-tight transition-colors duration-300 group-hover:text-[#42F5B0]">
                                                    1.2M+
                                                </h3>
                                                <p className="mt-6 text-zinc-400 text-xs tracking-[0.2em] uppercase font-semibold">
                                                    Aktiv Kontent
                                                </p>
                                                <p className="mt-3 text-zinc-500 text-sm leading-relaxed max-w-[240px] mx-auto">
                                                    Har oy platformada yaratiladigan postlar
                                                </p>
                                            </div>

                                            {/* STAT 4 */}
                                            <div className="group border border-white/[0.03] bg-white/[0.01] p-6 rounded-2xl transition-all duration-300 hover:bg-white/[0.03] hover:border-white/10">
                                                <h3 className="text-white text-5xl md:text-6xl font-light tracking-tight transition-colors duration-300 group-hover:text-cyan-400">
                                                    40+
                                                </h3>
                                                <p className="mt-6 text-zinc-400 text-xs tracking-[0.2em] uppercase font-semibold">
                                                    Yirik Brendlar
                                                </p>
                                                <p className="mt-3 text-zinc-500 text-sm leading-relaxed max-w-[240px] mx-auto">
                                                    Bizga ishonadigan xalqaro kompaniyalar
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </section>

                                <section className="mt-30 px-8 mb-30" id="tools-section">
                                    <div className="max-w-7xl mx-auto rounded-[32px] border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden relative group hover:border-cyan-500/20 transition-all duration-500">

                                        {/* CENTER GLOW EFFECT */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none group-hover:bg-cyan-500/15 transition-all duration-500" />
                                        <div className="relative rounded-[32px] overflow-hidden border border-white/10">
                                            <EnergySnake />
                                            <div className="relative z-10">
                                                {/* CONTENT LAYER */}
                                                <div className="relative z-10 py-20 md:py-20 px-6 md:px-10 text-center">

                                                    {/* HEADING */}
                                                    <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                                                        Kelajak Marketingini <br className="hidden sm:inline" /> Bugundan Boshlang
                                                    </h2>

                                                    {/* DESCRIPTION */}
                                                    <p className="mt-8 max-w-2xl mx-auto text-zinc-400 text-base md:text-xl leading-relaxed">
                                                        O'z brendingizni yangi darajaga olib chiqing. AI Studio bilan siz nafaqat kontent yaratasiz, balki raqamli dunyoda ustunlikka erishasiz.
                                                    </p>

                                                    {/* CALL TO ACTION BUTTON */}
                                                    <button onClick={() => setActiveTool("Instagram Post")} className="mt-12 h-14 md:h-16 px-10 md:px-12 rounded-2xl bg-[#42F5B0] text-black font-bold text-base md:text-lg hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_35px_rgba(66,245,176,0.3)] hover:shadow-[0_0_45px_rgba(66,245,176,0.5)]">
                                                        Hozir boshlang 🚀
                                                    </button>

                                                    {/* FOOTNOTE */}
                                                    <p className="mt-6 text-zinc-500 text-xs md:text-sm font-medium tracking-wide">
                                                        Kredit karta talab qilinmaydi • 7 kunlik bepul sinov
                                                    </p>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </section>

                                <footer className="mt-32 border-t border-white/10">

                                    <div className="grid grid-cols-4 gap-16 px-12 py-16">

                                        {/* LOGO */}
                                        <div>

                                            <h3 className="text-4xl font-bold text-white mb-6">
                                                StudioAI
                                            </h3>

                                            <p className="text-zinc-400 leading-8">
                                                Digital marketing olamida sizning
                                                ishonchli AI hamrohingiz.
                                                Eng so'nggi texnologiyalar orqali
                                                o'sishingizni ta'minlaymiz.
                                            </p>

                                        </div>

                                        {/* PRODUCT */}
                                        <div>

                                            <h4 className="text-white text-sm tracking-[0.2em] uppercase mb-6">
                                                Mahsulot
                                            </h4>

                                            <div className="space-y-4">

                                                <button className="block text-zinc-400 hover:text-cyan-400 transition">
                                                    • Imkoniyatlar
                                                </button>

                                                <button className="block text-zinc-400 hover:text-cyan-400 transition">
                                                    • Narxlar
                                                </button>

                                                <button className="block text-zinc-400 hover:text-cyan-400 transition">
                                                    • API Docs
                                                </button>

                                            </div>

                                        </div>

                                        {/* COMPANY */}
                                        <div>

                                            <h4 className="text-white text-sm tracking-[0.2em] uppercase mb-6">
                                                Kompaniya
                                            </h4>

                                            <div className="space-y-4">

                                                <button className="block text-zinc-400 hover:text-cyan-400 transition">
                                                    • Biz haqimizda
                                                </button>

                                                <button className="block text-zinc-400 hover:text-cyan-400 transition">
                                                    • Hub Blog
                                                </button>

                                                <button className="block text-zinc-400 hover:text-cyan-400 transition">
                                                    • Karyera
                                                </button>

                                            </div>

                                        </div>

                                        {/* SOCIAL */}
                                        <div>

                                            <h4 className="text-white text-sm tracking-[0.2em] uppercase mb-6">
                                                Bog'lanish
                                            </h4>

                                            <div className="flex gap-4">

                                                <button className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500/20 transition">
                                                    <MessageCircle size={20} />
                                                </button>

                                                <button className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500/20 transition">
                                                    <Share2 size={20} />
                                                </button>

                                                <button className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500/20 transition">
                                                    <Mail size={20} />
                                                </button>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="border-t border-white/10 py-8 text-center">

                                        <p className="text-xs tracking-[0.3em] text-zinc-500 uppercase">
                                            © 2026 SMM STARTER HUB. BARCHA HUQUQLAR AI TOMONIDAN HIMOYALANGAN.
                                        </p>

                                    </div>

                                </footer>

                            </>
                        )}

                        {activeTool === "Instagram Post" && (
                            <InstagramPostWorkspace />
                        )}

                        {activeTool === "Reels Script" && (
                            <ReelsWorkspace />
                        )}

                        {activeTool === "Story Content" && (
                            <StoryWorkspace />
                        )}

                        {activeTool === "Caption" && (
                            <CaptionWorkspace />
                        )}

                        {activeTool === "Hashtag Set" && (
                            <HashtagWorkspace />
                        )}

                    </div>
                </div >
            </main >
        </div >


    );
}