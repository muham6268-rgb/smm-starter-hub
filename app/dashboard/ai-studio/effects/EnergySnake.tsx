"use client";

import { motion } from "framer-motion";

export default function EnergySnake() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

            {/* CYAN LINE SNAKE */}
            <motion.div
                animate={{
                    x: ["-20%", "120%", "80%", "-10%"],
                    y: ["20%", "60%", "30%", "20%"],
                    rotate: [0, 90, 180, 360],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute w-[400px] h-[80px] rounded-full blur-3xl opacity-80 bg-cyan-400"
            />

            {/* EMERALD LINE SNAKE */}
            <motion.div
                animate={{
                    x: ["120%", "-20%", "40%", "110%"],
                    y: ["70%", "20%", "50%", "70%"],
                    rotate: [0, -120, -240, -360],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute w-[350px] h-[60px] rounded-full blur-3xl opacity-70 bg-emerald-400"
            />

            <motion.div
                animate={{
                    x: ["110%", "-20%", "40%", "110%"],
                    y: ["45%", "60%", "35%", "45%"],
                    rotate: [0, 120, 240, 360],
                }}
                transition={{
                    duration: 26,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className=" absolute w-[320px] h-[70px] rounded-full blur-3xl opacity-100 bg-purple-500"
            />

            {/* AMBIENT BACKGROUND GLOW */}
            <motion.div
                animate={{
                    x: ["50%", "80%", "20%", "50%"],
                    y: ["70%", "85%", "60%", "70%"],
                }}
                transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute w-[500px] h-[500px] rounded-full blur-[70px] bg-cyan-500/20"
            />

        </div>
    );
}
