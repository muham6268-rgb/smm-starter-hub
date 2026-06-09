"use client";

import Link from "next/link";

export default function ExpiredPage() {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-6">
            <div className="max-w-xl text-center">

                <div className="text-7xl mb-6">
                    ⚠
                </div>

                <h1 className="text-4xl font-bold text-black">
                    Sessiya tugadi
                </h1>

                <p className="mt-6 text-zinc-600 text-lg leading-relaxed">
                    Siz bu sahifaga to'g'ridan-to'g'ri kira olmaysiz
                    yoki ro'yxatdan o'tish jarayoni yakunlanmagan.
                </p>

                <p className="mt-4 text-zinc-600 text-lg leading-relaxed">
                    Xavfsizlik sababli vaqtinchalik
                    ma'lumotlar o'chirildi.
                </p>

                <p className="mt-4 text-zinc-600 text-lg leading-relaxed">
                    Iltimos qayta ro'yxatdan o'ting.
                </p>

                <Link
                    href="/register"
                    className="
                        inline-flex
                        items-center
                        justify-center
                        mt-10
                        h-14
                        px-8
                        rounded-2xl
                        bg-black
                        text-white
                        font-semibold
                        hover:opacity-90
                        transition-all
                    "
                >
                    Qayta ro'yxatdan o'tish
                </Link>

            </div>
        </div>
    );
}