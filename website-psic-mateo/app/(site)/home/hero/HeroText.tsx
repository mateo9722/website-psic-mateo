"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface SlideData {
    title: string;
    description: string;
    price: string;
    type: "individual" | "pareja" | "familiar";
    mode: "virtual" | "presencial";
    image: string;
}

interface HeroTextProps {
    currentSlideIndex: number;
    slides: SlideData[];
}

const typeIcon = {
    individual: "💻",
    pareja: "💑",
    familiar: "👨‍👩‍👧",
};

const modeIcon = {
    virtual: "🌐",
    presencial: "🏢",
};

const HeroText: React.FC<HeroTextProps> = ({ currentSlideIndex, slides }) => {
    const slide = slides[currentSlideIndex];

    return (
        <div className="flex flex-col gap-6">
            {/* Título con palabras clave animadas */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                {slide.title.split(" ").map((word, i) =>
                    ["Terapia", "virtual", "presencial"].includes(word) ? (
                        <motion.span
                            key={i}
                            className="text-brandPeach inline-block"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05, duration: 0.3 }}
                        >
                            {word}{" "}
                        </motion.span>
                    ) : (
                        <span key={i}>{word} </span>
                    )
                )}
            </h1>

            {/* Descripción animada */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlideIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5 }}
                    className="text-gray-600 text-lg leading-relaxed"
                >
                    <motion.p
                        className="mb-2 flex items-center"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="mr-2">{typeIcon[slide.type]}</span>
                        {slide.description}
                    </motion.p>

                    <motion.p
                        className="mt-2 flex items-center"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <span className="mr-2">{modeIcon[slide.mode]}</span>
                        Un espacio seguro para explorar tus emociones, comprender conflictos internos y avanzar hacia tu bienestar emocional.
                    </motion.p>
                </motion.div>
            </AnimatePresence>

            {/* Botón */}
            <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <a
                    href="https://wa.me/NUMERO"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                        e.preventDefault(); // evita la navegación normal
                        window.open("https://wa.me/593987865487?text=Hola%20Mateo,%20quisiera%20información%20sobre%20iniciar%20un%20proceso%20terapéutico.");
                    }}
                    className="px-6 py-3 bg-brandMint text-gray-900 rounded-lg shadow-md hover:bg-brandPeach hover:scale-105 transition-all duration-300 font-semibold inline-block"
                >
                    {`Accede desde ${slide.price}`}
                </a>
            </motion.div>
        </div>
    );
};

export default HeroText;