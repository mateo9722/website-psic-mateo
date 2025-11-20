"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HoverCardOverlay from "./HoverCardOverlay";

export default function AboutCollage() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-bree-serif font-bold text-center mb-12"
                    style={{ color: "#ffbc7d" }}
                >
                    Mi recorrido, en imágenes
                </motion.h2>

                {/* Collage */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Hospital 1 - Payaso terapéutico */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <HoverCardOverlay text="Payaso terapéutico – Acompañamiento infantil">
                            <Image
                                src="/hospital1.png"
                                alt="Hospital Mateo"
                                width={600}
                                height={600}
                                className="object-cover w-full h-full"
                            />
                        </HoverCardOverlay>
                    </motion.div>

                    {/* Hospital 2 - Equipo clínico */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <HoverCardOverlay text="Trabajo clínico y acompañamiento emocional en hospital">
                            <Image
                                src="/educa.jpg"
                                alt="Hospital Mateo 2"
                                width={600}
                                height={600}
                                className="object-cover w-full h-full"
                            />
                        </HoverCardOverlay>
                    </motion.div>

                    {/* Jatari - Comunitario */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <HoverCardOverlay text="Psicología comunitaria – Proyecto Jatari">
                            <Image
                                src="/jatari.png"
                                alt="Trabajo comunitario"
                                width={600}
                                height={600}
                                className="object-cover w-full h-full"
                            />
                        </HoverCardOverlay>
                    </motion.div>
                </div>

                {/* Texto debajo */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-center text-gray-700 font-montserrat text-lg md:text-xl mt-10 max-w-3xl mx-auto"
                >
                    He trabajado en entornos clínicos, hospitalarios y comunitarios, acompañando procesos reales y profundos.
                    Cada experiencia ha construido la forma en que entiendo la salud mental: humana, cercana y transformadora.
                </motion.p>
            </div>
        </section>
    );
}