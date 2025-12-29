"use client";

import { motion } from "framer-motion";

export default function SocioeconomicAnalysis() {
    return (
        <section className="w-full max-w-5xl mx-auto py-16 px-4">
            {/* Título */}
            <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-center
                bg-gradient-to-r from-[#FFBC7D] to-[#99DFBD] bg-clip-text text-transparent mb-10"
            >
                Análisis Socioeconómico
            </motion.h2>

            {/* Caja */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_25px_rgba(0,0,0,0.06)]
                border border-[#FFBC7D]/30"
            >
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
                    La terapia debe ser un espacio sostenible y accesible. Para lograrlo,
                    realizo un análisis socioeconómico que me permite comprender tus
                    posibilidades reales y definir un valor que puedas sostener a lo largo
                    del proceso, sin que se convierta en una carga.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                    Este análisis no busca etiquetar ni evaluar tu situación personal,
                    sino asegurarnos de que la terapia sea un compromiso posible, estable
                    y coherente con tu vida diaria.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                    Es un gesto ético y humano que sostiene la continuidad del proceso,
                    cuida tu bienestar y permite que la terapia sea un espacio seguro
                    también en lo económico.
                </p>

                {/* Botón para formulario (cuando lo tengas) */}
                <motion.a
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={(e) => {
                        e.preventDefault();
                        window.open(
                            "https://docs.google.com/forms/d/e/1FAIpQLSfBS8Ta9Tw5g6YuaqFJseIOY84FJhq4bTR_ZM5RsQMZ_BE2iA/viewform?usp=dialog",
                            "_blank",
                            "noopener,noreferrer"
                        );
                    }}
                    href="#"
                    className="inline-block px-8 py-4 rounded-full font-semibold text-black shadow-md
    bg-[#99DFBD] hover:bg-[#89d4b0] transition-colors duration-300"
                >
                    Completar análisis socioeconómico
                </motion.a>
            </motion.div>
        </section>
    );
}