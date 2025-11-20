"use client";

import { motion } from "framer-motion";
import { FaBrain, FaHeart, FaUsers } from "react-icons/fa";
import SpecialtyCard from "@/app/(site)/about/components/SpecialtyCard";

export default function AboutIntro() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                {/* Título principal */}
                <motion.h2
                    className="text-4xl md:text-5xl font-bree-serif font-bold mb-6"
                    style={{ color: "#ffbc7d" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    ¿Quién soy realmente?
                </motion.h2>

                {/* Párrafo introductorio */}
                <motion.p
                    className="text-gray-800 font-montserrat text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 1 }}
                >
                    Como psicólogo clínico, creo espacios seguros para explorar y comprender tus emociones.
                    Mi enfoque es humano y profundo, facilitando procesos de autoconocimiento y crecimiento personal
                    que promuevan bienestar integral y autenticidad.
                </motion.p>
            </div>

            {/* Specialty Cards con animación stagger */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: { staggerChildren: 0.2 }
                    }
                }}
                className="max-w-6xl mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            >
                <SpecialtyCard
                    icon={FaBrain}
                    title="Enfoque Psicológico"
                    description="Acompaño a mis pacientes con técnicas basadas en la evidencia para mejorar su bienestar mental."
                    color="#99dfbd"
                />
                <SpecialtyCard
                    icon={FaHeart}
                    title="Cuidado Emocional"
                    description="Cada sesión es un espacio seguro donde puedes expresarte sin juicios y con apoyo constante."
                    color="#ffbc7d"
                />
                <SpecialtyCard
                    icon={FaUsers}
                    title="Trabajo Comunitario"
                    description="Promuevo la salud mental también desde el ámbito social y comunitario, involucrando a quienes te rodean."
                    color="#99dfbd"
                />
            </motion.div>
        </section>
    );
}