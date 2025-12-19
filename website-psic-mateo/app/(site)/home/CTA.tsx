"use client";

import { motion } from "framer-motion";

const CTA = () => {
    return (
        <section className="py-20 px-6 text-center bg-brandPeach/10">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl font-bree-serif font-semibold mb-4"
            >
                ¿Listo para comenzar tu proceso?
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-gray-700 text-lg md:text-xl mb-8"
            >
                Estoy aquí para acompañarte con calma, respeto y profundidad.
            </motion.p>

            <motion.a
                href="https://wa.me/593987865487?text=Hola%20Mateo,%20quisiera%20información%20sobre%20iniciar%20un%20proceso%20terapéutico."
                target="_blank"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 bg-brandPeach text-white rounded-full font-semibold text-lg shadow-md transition-all duration-300"
            >
                Agendar vía WhatsApp
            </motion.a>
        </section>
    );
};

export default CTA;