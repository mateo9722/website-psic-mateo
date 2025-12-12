"use client";

import { motion } from "framer-motion";
import { FiHeart, FiCheckCircle, FiTrendingUp, FiUsers } from "react-icons/fi";

const features = [
    {
        icon: <FiUsers size={26} />,
        title: "Análisis socioeconómico",
        description:
            "Antes de comenzar, revisamos tu contexto personal y económico para definir un valor justo, posible y sostenible para ti.",
    },
    {
        icon: <FiCheckCircle size={26} />,
        title: "Valor estable",
        description:
            "El valor que definimos juntos al inicio se mantiene durante todo tu proceso. Sin aumentos inesperados, sin presiones, sin sorpresas.",
    },
    {
        icon: <FiTrendingUp size={26} />,
        title: "Procesos sostenibles",
        description:
            "Mi prioridad es que puedas mantener tu proceso sin interrupciones por motivos económicos, respetando tu bienestar.",
    },
    {
        icon: <FiHeart size={26} />,
        title: "Compromiso ético y clínico",
        description:
            "La terapia es un trabajo humano y responsable. Garantizo claridad, ética y un acompañamiento profesional centrado en ti.",
    },
];

export default function PricingAccessibility() {
    return (
        <section
            className="w-full max-w-6xl mx-auto
            bg-gradient-to-br from-[#FFF4EB] to-[#E9F9F1]
            p-12 md:p-16 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
        >
            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-center mb-10
                bg-gradient-to-r from-[#FFBC7D] to-[#99DFBD] bg-clip-text text-transparent"
            >
                Accesibilidad y compromiso ético
            </motion.h2>

            {/* Intro */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-center text-gray-700 text-lg max-w-3xl mx-auto mb-12 leading-relaxed"
            >
                La terapia no debe ser un privilegio.
                Debe ser un espacio posible, humano y sostenido en el tiempo.
                Por eso, mi práctica se basa en accesibilidad, estabilidad y ética.
            </motion.p>

            {/* Features grid */}
            <div className="grid md:grid-cols-2 gap-10">
                {features.map((f, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="p-8 bg-white rounded-3xl shadow-md hover:shadow-xl transition-all"
                    >
                        <div className="flex items-center gap-4 mb-4 text-[#FFBC7D]">
                            {f.icon}
                            <h3 className="text-xl font-semibold text-black">{f.title}</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{f.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}