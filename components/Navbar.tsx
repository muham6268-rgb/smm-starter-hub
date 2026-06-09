import Link from "next/link";
import { LogIn, UserPlus } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="w-full border-b border-white/10 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                <h1 className="text-xl font-bold text-white cursor-pointer hover:text-violet-400 transition">
                SMM Starter Hub
            </h1>

            <div className="flex items-center gap-3">

                <Link
                    href="/login"
                    className="
              flex items-center gap-2
              px-4 py-2
              rounded-xl
              border border-white/10
              text-white
              hover:bg-white/5
              transition
            "
                >
                    <LogIn size={18} />
                    Login
                </Link>

                <Link
                    href="/register"
                    className="
              flex items-center gap-2
              px-5 py-2
              rounded-xl
              bg-violet-600
              text-white
              hover:bg-violet-500
              transition
              shadow-lg shadow-violet-600/20
            "
                >
                    <UserPlus size={18} />
                    Register
                </Link>

            </div>

        </div>
        </nav >
    );
}