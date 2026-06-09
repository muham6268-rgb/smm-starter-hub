"use client";

import EnergyWaves from "@/components/dashboard/EnergyWaves";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { supabase } from "@/lib/supabase";
import {
    LayoutDashboard,
    Sparkles,
    Calendar,
    Video,
    BarChart3,
    MessageSquare,
    MessageSquareText,
    CalendarDays,
    ChartColumn,
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

export default function Dashboard() {

    const today = new Date().getDay();

    const [, forceUpdate] = useState(0);

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<any>(null);
    const [profile, setProfile] = useState<any>(null);

    const name = user?.user_metadata?.full_name;

    const router = useRouter();
    const pathname = usePathname();

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

    useEffect(() => {
        checkUser();
    }, []);

    const checkUser = async () => {

        setLoading(true);
        setProgress(15);

        const {
            data: { user },
        } = await supabase.auth.getUser();

        if (!user) {

            await supabase.auth.signOut();
            router.replace("/login");

            return;
        }

        setProgress(35);

        setUser(user);

        const { data } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", user.id)
            .single();

        setProfile(data);

        setProgress(85);

        setTimeout(() => {

            setProgress(100);

            setTimeout(() => {
                setLoading(false);
            }, 200);

        }, 200);

    };

    const handleLogout = async () => {

        const { error } =
            await supabase.auth.signOut();

        if (error) {
            console.log(error);
            return;
        }

        localStorage.clear();

        router.replace("/login");
    };

    const [progress, setProgress] = useState(0);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#020B23] flex items-center justify-center relative overflow-hidden">

                <div className="absolute w-[300px] h-[300px] rounded-full bg-cyan-500/20 blur-[150px] animate-pulse" />

                <div className="relative z-10 flex flex-col items-center">

                    {/* LOGO */}
                    <div className="w-24 h-24 rounded-3xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center animate-pulse">

                        <Sparkles
                            size={42}
                            className="text-cyan-400"
                        />

                    </div>

                    {/* TITLE */}
                    <h1 className="mt-8 text-4xl font-black text-white">
                        SMM Starter Hub
                    </h1>

                    {/* STATUS */}
                    <p className="mt-3 text-zinc-400">

                        {progress < 30 &&
                            "AI modullari yuklanmoqda..."}

                        {progress >= 30 &&
                            progress < 70 &&
                            "Kontent laboratoriyasi tayyorlanmoqda..."}

                        {progress >= 70 &&
                            progress < 100 &&
                            "Oxirgi optimizatsiyalar bajarilmoqda..."}

                        {progress === 100 &&
                            "Tayyor!"}

                    </p>

                    {/* PROGRESS */}
                    <div className="mt-8 w-[320px]">

                        <div className="flex justify-between text-xs text-zinc-500 mb-2">

                            <span>
                                Loading
                            </span>

                            <span>
                                {progress}%
                            </span>

                        </div>

                        <div className="h-2 rounded-full bg-white/5 overflow-hidden">

                            <div
                                className="
                            h-full
                            bg-gradient-to-r
                            from-cyan-400
                            via-sky-400
                            to-emerald-400
                            transition-all
                            duration-300
                            "
                                style={{
                                    width: `${progress}%`,
                                }}
                            />

                        </div>

                    </div>

                </div>

            </div>
        );
    }


    console.log(user);
    console.log(user?.user_metadata);

    const recentContent = [
        {
            title: "Beauty Salon Promo",
            type: "Reels Script",
            image: "/content/content-1.jpg",
            badge: "REELS",
            badgeClass:
                "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
            time: "2 min ago",
        },
        {
            title: "Summer Sale Campaign",
            type: "Instagram Post",
            image: "/content/content-2.jpg",
            badge: "POST",
            badgeClass:
                "bg-violet-500/10 text-violet-300 border-violet-500/20",
            time: "15 min ago",
        },
        {
            title: "Coffee Shop Opening",
            type: "Caption",
            image: "/content/content-3.jpg",
            badge: "CAPTION",
            badgeClass:
                "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
            time: "1 hour ago",
        },
        {
            title: "Restaurant Launch Ad",
            type: "Marketing Strategy",
            image: "/content/content-4.jpg",
            badge: "STRATEGY",
            badgeClass:
                "bg-orange-500/10 text-orange-300 border-orange-500/20",
            time: "3 hours ago",
        },
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
                                    className={`
        w-full h-12 rounded-xl flex items-center px-4 transition-all duration-200
        ${active
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
                            Boshqaruv paneli
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

                {/* Content */}
                <div className="px-10 pt-10 pb-8">

                    <div className="flex items-start justify-between">

                        {/* Chap taraf */}
                        <div>
                            <h1 className="text-5xl font-bold tracking-tight">
                                <span
                                    className=" bg-gradient-to-r from-[#9BB9FF] via-[#7DD3FC] to-[#6EE7B7] bg-clip-text text-transparent
                    "
                                >
                                    Xush kelibsiz, {user?.user_metadata?.full_name}!
                                </span>
                            </h1>

                            <p
                                className=" mt-4 text-xl text-zinc-400
                "
                            >
                                Sizning SMM boshqaruv markazingiz ishga tayyor.
                            </p>
                        </div>

                        {/* O'ng taraf */}
                        <div
                            className=" w-[380px] h-[90px] rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-between px-8
            "
                        >
                            <div>
                                <p className="text-[11px] text-zinc-500 font-bold uppercase">
                                    Joriy tarif
                                </p>

                                <h3 className="text-emerald-400 text-4xl font-bold">
                                    Free
                                </h3>
                            </div>

                            <div className="w-px h-12 bg-white/10" />

                            <div>
                                <p className="text-[11px] text-zinc-500 font-bold uppercase">
                                    Qolgan kreditlar
                                </p>

                                <h3 className="text-[#adc6ff] text-4xl font-bold">
                                    1,240
                                </h3>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="grid grid-cols-12 gap-5 px-10 pt-5 pb-8">

                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    >
                        <div
                            className=" absolute -top-20 -left-20 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl "
                        />
                    </div>

                    <div
                        className=" group relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-2xl p-5 col-span-2 flex flex-col hover:border-cyan-400/40 hover:bg-white/[0.05] transition-all duration-500 hover:-translate-y-1 "
                    >

                        <div className="
absolute
inset-0
bg-gradient-to-t
from-[#020B23]
via-[#020B23]/50
to-transparent
z-10
"/>

                        <Image
                            src="/social-bg.png"
                            alt="Background"
                            fill
                            className="
                            object-cover
transition-all
duration-700
group-hover:scale-110
        opacity-80
        scale-100
        z-0
    "
                        />

                        <div
                            className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none"
                        >
                            <div
                                className=" absolute top-0 -left-[150%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-[150%] transition-all duration-1000"
                            />
                        </div>


                        <div
                            className=" w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1 z-50
"
                        >
                            <FileText size={23} strokeWidth={2.5} className="text-blue-400" />
                        </div>

                        <div className="mt-auto z-50">
                            <h2 className="text-4xl font-bold text-white">
                                0
                            </h2>

                            <p className="mt-2 text-zinc-400">
                                Jami kontentlar
                            </p>
                        </div>

                    </div>

                    <div
                        className=" group relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-2xl p-5 col-span-2 flex flex-col hover:border-cyan-400/40 hover:bg-white/[0.05] transition-all duration-500 hover:-translate-y-1 "
                    >



                        <div
                            className="absoluteinset-0overflow-hiddenrounded-2xlpointer-events-none"
                        >
                            <div
                                className=" absolute top-0 -left-[150%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-[150%] transition-all duration-1000"
                            />
                        </div>

                        <div className="
absolute
inset-0
bg-gradient-to-t
from-[#020B23]
via-[#020B23]/50
to-transparent
z-10
"/>

                        <Image
                            src="/social-bg2.png"
                            alt="Background"
                            fill
                            className="
                            object-cover
transition-all
duration-700
group-hover:scale-110
        opacity-80
        scale-100
        z-0
    "
                        />


                        <div
                            className=" w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1 z-50
"
                        >

                            <Sparkles size={23} strokeWidth={2.5} className="text-violet-400" />
                        </div>

                        <div className="mt-auto z-50">
                            <h2 className="text-4xl font-bold text-white">
                                0
                            </h2>

                            <p className="mt-2 text-zinc-400">
                                AI postlar
                            </p>
                        </div>

                    </div>

                    <div
                        className=" group relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-2xl p-5 col-span-2 flex flex-col hover:border-cyan-400/40 hover:bg-white/[0.05] transition-all duration-500 hover:-translate-y-1 "
                    >

                        <div
                            className="absoluteinset-0overflow-hiddenrounded-2xlpointer-events-none"
                        >
                            <div
                                className=" absolute top-0 -left-[150%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-[150%] transition-all duration-1000"
                            />
                        </div>

                        <div className="
absolute
inset-0
bg-gradient-to-t
from-[#020B23]
via-[#020B23]/50
to-transparent
z-10
"/>

                        <Image
                            src="/social-bg3.png"
                            alt="Background"
                            fill
                            className="
                            object-cover
transition-all
duration-700
group-hover:scale-110
        opacity-80
        scale-100
        z-0
    "
                        />


                        <div
                            className=" w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1 z-50
"
                        >

                            <PenSquare size={23} strokeWidth={2.5} className="text-emerald-400" />
                        </div>

                        <div className="mt-auto z-50">
                            <h2 className="text-4xl font-bold text-white">
                                0
                            </h2>

                            <p className="mt-2 text-zinc-400">
                                Sarlavhalar
                            </p>
                        </div>

                    </div>

                    <div
                        className=" group relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-2xl p-5 col-span-2 flex flex-col hover:border-cyan-400/40 hover:bg-white/[0.05] transition-all duration-500 hover:-translate-y-1"
                    >

                        <div
                            className="absoluteinset-0overflow-hiddenrounded-2xlpointer-events-none"
                        >
                            <div
                                className=" absolute top-0 -left-[150%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-[150%] transition-all duration-1000"
                            />
                        </div>

                        <div className="
absolute
inset-0
bg-gradient-to-t
from-[#020B23]
via-[#020B23]/50
to-transparent
z-10
"/>

                        <Image
                            src="/social-bg4.png"
                            alt="Background"
                            fill
                            className="
                            object-cover
transition-all
duration-700
group-hover:scale-110
        z-0
        opacity-80
        scale-100
    "
                        />


                        <div
                            className=" w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1 z-50
"
                        >

                            <Clapperboard size={23} strokeWidth={2.5} className="text-orange-400" />
                        </div>

                        <div className="mt-auto z-50">
                            <h2 className="text-4xl font-bold text-white">
                                0
                            </h2>

                            <p className="mt-2 text-zinc-400">
                                Reels skriptlar
                            </p>
                        </div>

                    </div>

                    <div
                        className="
    col-span-4
    bg-white/[0.03]
    border
    border-white/10
    rounded-2xl
    p-6
"
                    >

                        <h3 className="text-white text-3xl font-bold mb-6">
                            Tezkor harakatlar
                        </h3>

                        <div className="grid grid-cols-2 gap-4">

                            <button
                                className=" group cursor-pointer
hover:-translate-y-2
hover:scale-[1.02]
transition-all
duration-500
            group
            bg-blue-500/10
            border
            border-blue-500/20
            rounded-xl
            p-4
            text-left
            hover:bg-blue-500/15
            hover:border-blue-400/40

        "
                            >

                                <div className="text-3xl mb-3"><Sparkles size={26} /></div>

                                <h4 className="text-white font-semibold">
                                    AI Post
                                </h4>

                                <p className="text-zinc-500 text-sm mt-1">
                                    Kontent yaratish
                                </p>
                            </button>

                            <button
                                className=" group cursor-pointer
hover:-translate-y-2
hover:scale-[1.02]
transition-all
duration-500
            group
            bg-violet-500/10
            border
            border-violet-500/20
            rounded-xl
            p-4
            text-left
            hover:bg-violet-500/15
            hover:border-violet-400/40
        "
                            >
                                <div className="text-3xl mb-3"><MessageSquareText size={26} /></div>

                                <h4 className="text-white font-semibold">
                                    AI Chat
                                </h4>

                                <p className="text-zinc-500 text-sm mt-1">
                                    Chat yordamchi
                                </p>
                            </button>

                            <button
                                className="group cursor-pointer
hover:-translate-y-2
hover:scale-[1.02]
transition-all
duration-500
            group
            bg-emerald-500/10
            border
            border-emerald-500/20
            rounded-xl
            p-4
            text-left
            hover:bg-emerald-500/15
            hover:border-emerald-400/40
        "
                            >
                                <div className="text-3xl mb-3"><CalendarDays size={26} /></div>

                                <h4 className="text-white font-semibold">
                                    Planner
                                </h4>

                                <p className="text-zinc-500 text-sm mt-1">
                                    Reja tuzish
                                </p>
                            </button>

                            <button
                                className=" group cursor-pointer
hover:-translate-y-2
hover:scale-[1.02]
transition-all
duration-500
            group
            bg-orange-500/10
            border
            border-orange-500/20
            rounded-xl
            p-4
            text-left
            hover:bg-orange-500/15
            hover:border-orange-400/40

        "
                            >
                                <div className="text-3xl mb-3"><ChartColumn size={26} /></div>

                                <h4 className="text-white font-semibold">
                                    Hisobot
                                </h4>

                                <p className="text-zinc-500 text-sm mt-1">
                                    Analitika
                                </p>
                            </button>

                        </div>

                    </div>

                </div>

                <div className="grid grid-cols-12 gap-5 px-10 pb-10">

                    {/* So'nggi loyihalar */}
                    <div className="col-span-6 bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-cyan-500/20 transition-all duration-500">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-2xl font-bold text-white">
                                Recent Content
                            </h3>

                            <button className="text-[#8FB3FF] text-sm hover:text-white transition">
                                Barchasi
                            </button>
                        </div>

                        <div className="space-y-3">

                            {/* Item 1 */}
                            {recentContent.map((item, index) => (
                                <div
                                    key={index}
                                    className="
            group
            flex
            items-center
            justify-between
            p-3
            rounded-xl
            hover:bg-white/[0.04]
            hover:translate-x-1
            transition-all
            duration-300
            cursor-pointer
        "
                                >
                                    <div className="flex items-center gap-4">

                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={56}
                                            height={56}
                                            className="
                    w-14
                    h-14
                    rounded-xl
                    object-cover
                    border
                    border-white/10
                "
                                        />

                                        <div>

                                            <h4 className="text-white font-semibold">
                                                {item.title}
                                            </h4>

                                            <div className="flex items-center gap-2 mt-1">

                                                <p className="text-zinc-500 text-sm">
                                                    {item.type}
                                                </p>

                                                <span
                                                    className={`
                            px-2
                            py-0.5
                            rounded-md
                            text-[10px]
                            border

                            
                        `}
                                                >
                                                    {item.badge}
                                                </span>

                                            </div>

                                        </div>

                                    </div>

                                    <span
                                        className="
                px-2
                py-1
                rounded-lg
                bg-white/[0.03]
                border
                border-white/10
                text-zinc-400
                text-xs
            "
                                    >
                                        {item.time}
                                    </span>

                                </div>
                            ))}

                        </div>
                    </div>

                    {/* Foydalanish tahlili */}
                    <div
                        className=" col-span-6 bg-white/[0.03] border border-white/10 rounded-2xl p-6
"
                    >

                        <div className="flex items-center justify-between mb-6">

                            <div>
                                <h3 className="text-2xl font-bold text-white">
                                    Foydalanish tahlili
                                </h3>

                                <p className="text-sm text-zinc-500 mt-1">
                                    Oxirgi 7 kunlik faollik
                                </p>
                            </div>

                            <div className="flex items-center gap-3">

                                <div className="px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                                    <span className="text-emerald-400 text-sm font-semibold">
                                        +24%
                                    </span>
                                </div>

                                <div className="flex items-center gap-1 p-1 rounded-xl border border-white/10 bg-white/[0.03]">

                                    <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20">
                                        Haftalik
                                    </button>

                                    <button className="px-4 py-2 rounded-lg text-sm text-zinc-400 hover:bg-white/5 hover:text-white transition">
                                        Oylik
                                    </button>

                                </div>

                            </div>

                        </div>

                        <div className="flex items-center gap-8 mt-6 mb-6 ">

                            <div>
                                <p className="text-zinc-500 text-sm">
                                    Jami foydalanish
                                </p>

                                <h2 className="text-3xl font-bold text-white">
                                    1,240
                                </h2>
                            </div>

                            <div>
                                <p className="text-zinc-500 text-sm">
                                    Bugun
                                </p>

                                <h2 className="text-3xl font-bold text-cyan-400">
                                    87
                                </h2>
                            </div>

                        </div>

                        <div className="relative h-[300px]">

                            {/* Chap chiziq */}
                            <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10" />

                            {/* Pastki chiziq */}
                            <div className="absolute left-0 right-0 bottom-0 h-px bg-white/10" />

                            <div className="relative h-[290px]">

                                <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10" />
                                <div className="absolute left-0 right-0 bottom-8 h-px bg-white/10" />

                                <div className="h-[250px] flex items-end gap-3 pl-4">

                                    {/* Ustunlar shu yerda qoladi */}
                                    <div className="group w-full h-[30%] rounded-t-lg bg-gradient-to-t from-[#233B6F] to-[#5B8CFF] hover:from-[#3154A8] hover:to-[#8FB3FF] hover:scale-y-105 transition-all duration-300 cursor-pointer" />

                                    <div className="group w-full h-[55%] rounded-t-lg bg-gradient-to-t from-[#233B6F] to-[#5B8CFF] hover:from-[#3154A8] hover:to-[#8FB3FF] hover:scale-y-105 transition-all duration-300 cursor-pointer" />

                                    <div className="group w-full h-[80%] rounded-t-lg bg-gradient-to-t from-[#3A63C9] to-[#AFC7FF] shadow-lg shadow-[#8FB3FF]/20 hover:shadow-[#8FB3FF]/40 hover:scale-y-105 transition-all duration-300 cursor-pointer" />

                                    <div className="group w-full h-[55%] rounded-t-lg bg-gradient-to-t from-[#233B6F] to-[#5B8CFF] hover:from-[#3154A8] hover:to-[#8FB3FF] hover:scale-y-105 transition-all duration-300 cursor-pointer" />

                                    <div className="group w-full h-[95%] rounded-t-lg bg-gradient-to-t from-[#3A63C9] to-[#AFC7FF] shadow-lg shadow-[#8FB3FF]/20 hover:shadow-[#8FB3FF]/40 hover:scale-y-105 transition-all duration-300 cursor-pointer" />

                                    <div className="group w-full h-[40%] rounded-t-lg bg-gradient-to-t from-[#233B6F] to-[#5B8CFF] hover:from-[#3154A8] hover:to-[#8FB3FF] hover:scale-y-105 transition-all duration-300 cursor-pointer" />

                                    <div className="group w-full h-[25%] rounded-t-lg bg-gradient-to-t from-[#233B6F] to-[#5B8CFF] hover:from-[#3154A8] hover:to-[#8FB3FF] hover:scale-y-105 transition-all duration-300 cursor-pointer" />

                                </div>

                                <div className="flex gap-3 pl-4 mt-3 text-xs font-medium">

                                    <div className={`w-full text-center ${today === 1 ? "text-cyan-400 text-xl font-bold" : "text-zinc-500"}`}>
                                        Du
                                    </div>

                                    <div className={`w-full text-center ${today === 2 ? "text-cyan-400 text-xl font-bold" : "text-zinc-500"}`}>
                                        Se
                                    </div>

                                    <div className={`w-full text-center ${today === 3 ? "text-cyan-400 text-xl font-bold" : "text-zinc-500"}`}>
                                        Cho
                                    </div>

                                    <div className={`w-full text-center ${today === 4 ? "text-cyan-400 text-xl font-bold" : "text-zinc-500"}`}>
                                        Pay
                                    </div>

                                    <div className={`w-full text-center ${today === 5 ? "text-cyan-400 text-xl font-bold" : "text-zinc-500"}`}>
                                        Ju
                                    </div>

                                    <div className={`w-full text-center ${today === 6 ? "text-cyan-400 text-xl font-bold" : "text-zinc-500"}`}>
                                        Sha
                                    </div>

                                    <div className={`w-full text-center ${today === 0 ? "text-cyan-400 text-xl font-bold" : "text-zinc-500"}`}>
                                        Yak
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </main>

        </div>
    );

}