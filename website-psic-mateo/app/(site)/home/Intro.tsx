"use client";

import { motion } from "framer-motion";

const Intro = () => {
    return (
        <section className="w-full py-28 px-6 bg-gradient-to-b from-white to-[#fff6f3]">
            <div className="max-w-4xl mx-auto text-center">

                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-4xl md:text-5xl font-bree-serif text-gray-900 mb-6"
                >
                    Un espacio seguro para comprender tu historia
                </motion.h2>

                {/* Texto */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                    className="text-lg md:text-xl text-gray-700 leading-relaxed font-montserrat"
                >
                    Acompaño a adolescentes y adultos desde un enfoque psicodinámico.
                    Un lugar cálido, profundo y humano para explorar lo que te ocurre,
                    sin prisa, con significado y con respeto por tu propio ritmo.
                </motion.p>
            </div>
        </section>
    );
};

export default Intro;