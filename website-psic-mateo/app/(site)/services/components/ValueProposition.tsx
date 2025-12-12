"use client";

import { motion } from "framer-motion";

export default function ValueHeader() {
    return (
        <section className="w-full max-w-5xl text-center">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold mb-6
                bg-gradient-to-r from-[#FFBC7D] to-[#99DFBD] bg-clip-text text-transparent"
            >
                Un espacio seguro para comprenderte, escucharte y transformarte.
            </motion.h1>

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