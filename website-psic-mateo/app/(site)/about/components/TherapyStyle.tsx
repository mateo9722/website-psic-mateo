"use client";

import { motion } from "framer-motion";
import { FaHandHoldingHeart, FaFeatherAlt, FaSeedling } from "react-icons/fa";

export default function TherapyStyle() {
    const items = [
        {
            icon: <FaHandHoldingHeart />,
            title: "Acompañamiento real",
            text: "Trabajo desde la presencia humana y el respeto profundo por tu historia. No busco dirigir tu vida, sino caminar contigo.",
        },
        {
            icon: <FaFeatherAlt />,
            title: "Un espacio seguro",
            text: "Aquí puedes hablar sin miedo. Sin juicios. Sin etiquetas. Solo tú, tal como eres, y lo que necesitas expresar.",
        },
        {
            icon: <FaSeedling />,
            title: "Procesos profundos",
            text: "No se trata de soluciones rápidas, sino de comprender lo que ocurre dentro de ti y transformarlo con tiempo y honestidad.",
        },
    ];

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
                Mi estilo de terapia
            </motion.h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: i * 0.2 }}
                        className="p-8 rounded-2xl shadow-lg bg-white border border-gray-100 hover:shadow-2xl transition group"
                    >
                        <div className="text-5xl mb-4 text-brandMint group-hover:scale-110 transition">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-700">{item.text}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}