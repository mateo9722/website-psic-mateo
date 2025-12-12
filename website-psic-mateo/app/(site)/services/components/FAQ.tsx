"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

interface FAQItem {
    question: string;
    answer: string;
}

const FAQS: FAQItem[] = [
    {
        question: "¿Cuántas sesiones necesito?",
        answer:
            "Cada proceso es único. No trabajo con paquetes ni plazos fijos. Evaluamos juntos tu ritmo y tus necesidades, sin presión."
    },
    {
        question: "¿La terapia virtual es igual de efectiva?",
        answer:
            "Sí. Permite el mismo trabajo emocional profundo, siempre que cuentes con un espacio tranquilo para conectarte."
    },
    {
        question: "¿Cómo se define el valor de la sesión?",
        answer:
            "A través de un análisis socioeconómico que considera tus posibilidades reales. El objetivo es que puedas sostener el proceso sin afectar tu estabilidad."
    },
    {
        question: "¿Qué información se considera en el análisis socioeconómico?",
        answer:
            "Solo aquello que permita comprender tus posibilidades reales. No se trata de evaluar tu valor personal ni de pedir datos invasivos, sino de encontrar un punto justo donde puedas sostener tu proceso terapéutico de manera estable y sin que afecte tu bienestar económico."
    },
    {
        question: "¿Qué pasa si actualmente no puedo pagar el valor completo?",
        answer:
            "Lo conversamos con respeto y buscamos un valor que puedas sostener sin que se vuelva una carga. El objetivo del análisis no es excluir a nadie, sino hacer que la terapia sea un espacio realmente accesible y posible para ti."
    },
    {
        question: "¿Qué pasa si no puedo asistir a una sesión?",
        answer:
            "Puedes reprogramarla con 24 horas de anticipación. Si no es así, la sesión se considera realizada, excepto emergencias."
    },
    {
        question: "¿Puedo cambiar entre modalidad presencial y virtual?",
        answer:
            "Sí, siempre que lo conversemos con anticipación para cuidar la coherencia del proceso."
    },
    {
        question: "¿Atiendes ansiedad, duelo o consumo?",
        answer:
            "Sí. Acompaño procesos de ansiedad, depresión, duelos y consumos problemáticos desde un enfoque psicodinámico."
    },
    {
        question: "¿Qué necesito para la terapia virtual?",
        answer:
            "Solo un espacio privado, buena conexión y, si lo prefieres, audífonos. Nada más."
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section className="w-full max-w-5xl mx-auto py-20">
            <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-center
                bg-gradient-to-r from-[#FFBC7D] to-[#99DFBD] bg-clip-text text-transparent mb-12"
            >
                Preguntas frecuentes
            </motion.h2>

            <div className="space-y-4">
                {FAQS.map((faq, i) => {
                    const isOpen = open === i;

                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-white p-6 rounded-2xl border border-[#FFBC7D]/40 shadow-sm"
                        >
                            <button
                                onClick={() => setOpen(isOpen ? null : i)}
                                className="w-full flex items-center justify-between text-left"
                            >
                                <span className="text-lg font-semibold text-gray-900">
                                    {faq.question}
                                </span>

                                <motion.div
                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    <FiChevronDown size={22} className="text-[#FFBC7D]" />
                                </motion.div>
                            </button>

                            {isOpen && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                    className="mt-3 text-gray-700 leading-relaxed"
                                >
                                    {faq.answer}
                                </motion.p>
                            )}
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}