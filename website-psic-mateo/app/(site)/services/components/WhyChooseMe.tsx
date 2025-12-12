"use client";

import { motion } from "framer-motion";

const reasons = [
    {
        title: "Acompañamiento humano y cercano",
        desc: "Un espacio donde tu historia importa, sin juicios y con respeto.",
    },
    {
        title: "Procesos sostenibles",
        desc: "La terapia debe poder sostenerse sin presión económica.",
    },
    {
        title: "Formación clínica continua",
        desc: "Trabajo desde marcos teóricos sólidos y ética profesional.",
    },
    {
        title: "Compromiso con tu bienestar real",
        desc: "La terapia es un trabajo conjunto para transformar tu vida.",
    },
];

export default function WhyChooseMe() {
    return (
        <section className="w-full max-w-6xl bg-[#E9F9F1] p-10 md:p-14 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                ¿Por qué elegirme?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
                {reasons.map((r, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-8 bg-white border border-[#D8EDE3] rounded-3xl shadow-md hover:shadow-xl transition"
                    >
                        <h3 className="text-xl font-semibold mb-2">{r.title}</h3>
                        <p className="text-gray-700">{r.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}