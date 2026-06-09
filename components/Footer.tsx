export default function Footer() {
    return (
            <footer className="border-t border-white/10 mt-40">

                <div className="max-w-7xl mx-auto px-6 py-20">

                    <div className="grid md:grid-cols-4 gap-12">

                        <div>
                            <a
                                href="#top"
                                className="
        text-2xl
        font-bold
        text-white
        mb-4
        block
        hover:text-violet-400
        transition
    "
                            >
                                SMM Starter Hub
                            </a>

                            <p className="text-zinc-400 leading-7">
                                AI yordamida biznesingiz uchun
                                professional kontent yaratish platformasi.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-4">
                                Platform
                            </h3>

                            <div className="space-y-3 text-zinc-400">
                                <p className="
text-zinc-400
hover:text-violet-400
transition
cursor-pointer
">Features</p>
                                <p className="
text-zinc-400
hover:text-violet-400
transition
cursor-pointer
">Pricing</p>
                                <p className="
text-zinc-400
hover:text-violet-400
transition
cursor-pointer
">Dashboard</p>
                                <p className="
text-zinc-400
hover:text-violet-400
transition
cursor-pointer
">AI Generator</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-4">
                                Company
                            </h3>

                            <div className="space-y-3 text-zinc-400">
                                <p className="
text-zinc-400
hover:text-violet-400
transition
cursor-pointer
">About</p>
                                <p className="
text-zinc-400
hover:text-violet-400
transition
cursor-pointer
">Contact</p>
                                <p className="
text-zinc-400
hover:text-violet-400
transition
cursor-pointer
">Privacy Policy</p>
                                <p className="
text-zinc-400
hover:text-violet-400
transition
cursor-pointer
">Terms</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-4">
                                Contact
                            </h3>

                            <div className="space-y-3 text-zinc-400">
                                <p className="
text-zinc-400
hover:text-violet-400
transition
cursor-pointer
">support@smmstarterhub.com</p>
                                <p className="
text-zinc-400
hover:text-violet-400
transition
cursor-pointer
">Tashkent, Uzbekistan</p>
                            </div>
                        </div>

                    </div>

                    <div
                        className="
                        mt-16
                        pt-8
                        border-t
                        border-white/10
                        flex
                        flex-col
                        md:flex-row
                        justify-between
                        gap-4
                    "
                    >
                        <p className="text-zinc-500">
                            © 2026 SMM Starter Hub. All rights reserved.
                        </p>

                        <p className="text-zinc-500">
                            Built with AI 🚀
                        </p>
                    </div>
                </div>

            </footer>
    );
}