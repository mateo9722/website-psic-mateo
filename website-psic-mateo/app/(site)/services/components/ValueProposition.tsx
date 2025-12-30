"use client";

import { motion } from "framer-motion";

export default function ValueHeader() {
    return (
        <section className="w-full max-w-5xl text-center">

            {/* H1 SEO explícito */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold mb-4"
            >
                Terapia psicológica en Quito
            </motion.h1>

            {/* Subtítulo humano (tu frase original) */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-2xl md:text-3xl font-semibold mb-6
                bg-gradient-to-r from-[#FFBC7D] to-[#99DFBD] bg-clip-text text-transparent"
            >
                Un espacio seguro para comprenderte, escucharte y transformarte.
            </motion.h2>

            {/* Texto clínico (se queda igual) */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed"
            >
                Acompañamiento psicoanalítico y psicodinámico diseñado para que la
                terapia sea accesible, constante y respetuosa con tu historia.
            </motion.p>
        </section>
    );
}