"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname();

    const links = [
        {
            name: "Create Post",
            href: "/dashboard/create-post",
            icon: "➕",
        },
        {
            name: "Dashboard",
            href: "/dashboard",
            icon: "📊",
        },
        {
            name: "Profile",
            href: "/dashboard/profile",
            icon: "👤",
        },
        {
            name: "Content",
            href: "/dashboard/content",
            icon: "📁",
        },
        {
            name: "Settings",
            href: "/dashboard/settings",
            icon: "⚙️",
        },
    ];

    return (
        <div
            className="
                w-72
                min-h-screen
                bg-black
                border-r
                border-white/10
                p-6
            "
        >
            <h1
                className="
                    text-3xl
                    font-bold
                    text-white
                    mb-10
                "
            >
                SMM Hub 🚀
            </h1>

            <div className="space-y-3">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`
                            flex
                            items-center
                            gap-3
                            px-4
                            py-3
                            rounded-xl
                            transition

                            ${pathname === link.href
                                ? "bg-violet-600 text-white"
                                : "bg-white/5 text-zinc-300 hover:bg-white/10"
                            }
                        `}
                    >
                        <span>{link.icon}</span>
                        <span>{link.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}