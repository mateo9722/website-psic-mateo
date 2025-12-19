"use client";

import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section className="w-full py-24">
            <div
                className="max-w-4xl mx-auto bg-gradient-to-br
                from-[#FFF4EB] to-[#E9F9F1]
                p-12 md:p-16 rounded-3xl
                shadow-[0_8px_30px_rgba(0,0,0,0.08)] text-center"
            >
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold
                    bg-gradient-to-r from-[#FFBC7D] to-[#99DFBD] bg-clip-text text-transparent mb-6"
                >
                    ¿Listo para comenzar tu proceso?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-700 max-w-2xl mx-auto mt-2 mb-10 leading-relaxed text-lg"
                >
                    Dar el primer paso no siempre es fácil, pero nunca estás solo.
                    Si sientes que es el momento, estoy aquí para acompañarte con calma,
                    cercanía y total respeto por tu historia.
                </motion.p>

                <motion.a
                    href="https://wa.me/593987865487?text=Hola%20Mateo,%20quisiera%20información%20sobre%20iniciar%20un%20proceso%20terapéutico."
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-10 py-4 rounded-full
                    font-semibold text-black
                    shadow-md bg-[#99DFBD] hover:bg-[#8ADBB4]
                    transition-all text-lg"
                >
                    Agendar mi sesión
                </motion.a>
            </div>
        </section>
    );
}