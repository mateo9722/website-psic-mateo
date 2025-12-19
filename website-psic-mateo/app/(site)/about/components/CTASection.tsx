"use client";

import { motion } from "framer-motion";

export default function CTASection() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-[#f3fff8]">
            <div className="max-w-4xl mx-auto text-center px-6">
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bree-serif font-bold mb-6"
                    style={{
                        color: "#99dfbd",
                    }}
                >
                    Si quieres, podemos empezar cuando tú estés listo
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-gray-700 text-lg mb-10 max-w-2xl mx-auto"
                >
                    Aquí tienes un espacio seguro para hablar, pensar, respirar y reencontrarte contigo.
                </motion.p>

                <motion.a
                    href="https://wa.me/593987865487?text=Hola%20Mateo,%20quisiera%20información%20sobre%20iniciar%20un%20proceso%20terapéutico." // pon aquí tu número
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-10 py-4 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition text-lg"
                    style={{
                        background: "linear-gradient(90deg, #99dfbd, #ffbc7d)",
                    }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                >
                    Hablar por WhatsApp
                </motion.a>
            </div>
        </section>
    );
}