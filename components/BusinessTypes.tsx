export default function BusinessTypes() {
    const row1 = [
        "💈 Barber",
        "💇 Beauty Salon",
        "☕ Kafe",
        "🍽️ Restoran",
        "🍕 Fast Food",
        "🎓 O'quv markazi",
        "🏋️ Fitness",
        "🚗 Avtoservis",
        "🏥 Klinika",
        "🦷 Stomatologiya",
    ];

    const row2 = [
        "🏨 Mehmonxona",
        "🛒 Do'kon",
        "💻 IT Kompaniya",
        "📱 SMM Agentlik",
        "🏠 Ko'chmas mulk",
        "📷 Foto Studio",
        "👗 Kiyim do'koni",
        "💍 Zargarlik",
        "🎂 Qandolat",
        "🌐 Internet Provayder",
    ];

    return (
        <section className="py-24 overflow-hidden">
            <h2 className="text-4xl font-bold text-center text-white mb-12">
                Kimlar uchun?
            </h2>

            {/* 1-qator */}
            <div className="overflow-hidden">
                <div className="flex gap-6 w-max marquee-left">
                    {[...row1, ...row1].map((item, i) => (
                        <div
                            key={i}
                            className="
                min-w-[280px]
                h-[120px]
                flex
                items-center
                justify-center
                rounded-2xl
                bg-white/5
                border
                border-white/10
                text-white
                text-lg
                hover:border-violet-500
                transition-all
              "
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            {/* 2-qator */}
            <div className="overflow-hidden mt-6">
                <div className="flex gap-6 w-max marquee-right">
                    {[...row2, ...row2].map((item, i) => (
                        <div
                            key={i}
                            className="
                min-w-[280px]
                h-[120px]
                flex
                items-center
                justify-center
                rounded-2xl
                bg-white/5
                border
                border-white/10
                text-white
                text-lg
                hover:border-violet-500
                transition-all
              "
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}