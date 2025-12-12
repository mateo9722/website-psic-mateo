"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
    {
        title: "Accesibilidad como punto de partida",
        description:
            "La terapia debe ser un espacio posible. Evaluamos tu contexto para que puedas sostener tu proceso sin que la economía sea un obstáculo.",
        image: "/step1.png",
    },
    {
        title: "Transparencia total",
        description:
            "El valor definido al inicio se mantiene siempre. Sin incrementos, sin sorpresas, sin presiones.",
        image: "/step2.png",
    },
    {
        title: "Un proceso respetuoso a tu ritmo",
        description:
            "Cada persona necesita tiempos distintos. La terapia no se apura; se acompaña.",
        image: "/step3.png",
    },
    {
        title: "Acompañamiento humano y ético",
        description:
            "Un espacio construido desde la escucha profunda y la comprensión de tu historia.",
        image: "/step4.png",
    },
];

export default function HowItWorksSection() {
    const [active, setActive] = useState(0);

    return (
        <section className="w-full max-w-6xl bg-[#FFF4EB] p-10 md:p-14 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                ¿Cómo funciona la terapia?
            </h2>

            {/* 🔧 Nueva alineación perfecta */}
            <div className="grid md:grid-cols-2 gap-10 items-center">

                {/* 🟧 Lista de pasos */}
                <div className="flex flex-col gap-6">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            onMouseEnter={() => setActive(i)}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className={`p-6 rounded-3xl cursor-pointer shadow-md transition-all duration-300
                                ${active === i ? "bg-[#FFE8D6] shadow-lg scale-[1.02]" : "bg-white"}`}
                        >
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-700">{step.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* 🟩 Imagen dinámica centrada 100% */}
                <motion.div
                    key={active}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-80 md:h-[420px] rounded-3xl overflow-hidden shadow-xl flex items-center justify-center self-center"
                >
                    <Image
                        src={steps[active].image}
                        alt="Proceso terapéutico"
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
}