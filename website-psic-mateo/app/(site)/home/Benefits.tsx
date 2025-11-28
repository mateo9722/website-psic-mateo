"use client";

import { motion } from "framer-motion";
import { FaBrain, FaUsers, FaHeart, FaHandsHelping } from "react-icons/fa";

const benefits = [
    {
        icon: <FaBrain />,
        title: "Presencia y Empatía",
        text: "Cada sesión es un acompañamiento humano y respetuoso, donde tu historia importa y te escucho atentamente.",
    },
    {
        icon: <FaUsers />,
        title: "Espacio Seguro",
        text: "Aquí puedes expresar tus emociones sin miedo ni juicios; eres escuchado y comprendido en tu propio ritmo.",
    },
    {
        icon: <FaHeart />,
        title: "Profundidad Real",
        text: "Me enfoco en comprender tus emociones y pensamientos, no en soluciones rápidas, para trabajar de manera profunda.",
    },
    {
        icon: <FaHandsHelping />,
        title: "Crecimiento Personal",
        text: "Te acompaño a conectar con tu historia y avanzar hacia tu bienestar emocional con acompañamiento cercano y sincero.",
    },
];

const Benefits = () => {
    return (
        <section className="py-20 bg-white">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bree-serif font-bold text-center mb-12"
                style={{ color: "#ffbc7d" }}
            >
                Mi acompañamiento se basa en
            </motion.h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
                {benefits.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: i * 0.2 }}
                        className="p-8 rounded-2xl shadow-lg bg-white border border-gray-100 hover:shadow-2xl hover:scale-105 transition group cursor-pointer"
                    >
                        <div className="text-5xl mb-4 text-brandMint group-hover:scale-110 transition">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2 font-bree-serif">{item.title}</h3>
                        <p className="text-gray-700 font-sans">{item.text}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Benefits;