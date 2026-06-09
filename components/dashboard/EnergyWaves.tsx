"use client";

export default function EnergyWaves() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

            {/* Cyan */}
            <div
                className="
                absolute
                -top-72
                left-1/4
                w-[1200px]
                h-[1200px]
                rounded-full
                blur-[180px]
                opacity-[0.08]
                animate-waveOne
                bg-cyan-500
                "
            />

            {/* Violet */}
            <div
                className="
                absolute
                top-1/3
                -right-72
                w-[1000px]
                h-[1000px]
                rounded-full
                blur-[180px]
                opacity-[0.06]
                animate-waveTwo
                bg-violet-600
                "
            />

            {/* Blue */}
            <div
                className="
                absolute
                -bottom-72
                left-1/3
                w-[1400px]
                h-[1400px]
                rounded-full
                blur-[220px]
                opacity-[0.05]
                animate-waveThree
                bg-blue-500
                "
            />
        </div>
    );
}