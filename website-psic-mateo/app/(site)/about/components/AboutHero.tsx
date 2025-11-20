"use client";

import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

                {/* Avatar */}
                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative w-64 h-64 md:w-96 md:h-[500px] rounded-2xl shadow-lg mx-auto overflow-hidden">
                        <Image
                            src="/myphoto.jpg"
                            alt="Mateo Morejón"
                            fill
                            className="object-cover object-[50%_25%]" // 50% horizontal, 25% vertical
                            priority
                        />
                    </div>
                </motion.div>

                {/* Texto */}
                <motion.div
                    className="flex-1 space-y-6 text-center md:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <h1
                        className="text-4xl md:text-5xl font-bree-serif font-bold"
                        style={{
                            background: "linear-gradient(90deg, #99dfbd, #ffbc7d)",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                        }}
                    >
                        <Typewriter
                            words={["Acompaño a reconectar con tu interior y encontrar claridad."]}
                            cursor
                            cursorStyle="|"
                            typeSpeed={60}
                            deleteSpeed={0}
                            delaySpeed={3000}
                        />
                    </h1>
                    <p className="text-gray-900 font-montserrat text-lg md:text-xl">
                        Trabajo desde la honestidad y el acompañamiento real, sin prisa ni recetas mágicas.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}