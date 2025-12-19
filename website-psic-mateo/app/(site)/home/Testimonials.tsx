"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";

interface Testimonial {
    name: string;
    text: string;
}

const testimonials: Testimonial[] = [
    {
        name: "E.M",
        text: "Desde que empecé terapia entendí cosas que antes no podía ver. Hablarlas en voz alta me ayudó a ser más consciente, ver opciones y tomar decisiones desde un lugar más claro y compasivo conmigo mismo.",
    },
    {
        name: "Y.C",
        text: "Llevo más de dos años en terapia y ha sido un proceso profundamente transformador. Cada sesión se siente como soltar peso y volver a respirar. En este espacio encontré seguridad y la libertad para mirarme sin filtros.",
    },
    {
        name: "B.",
        text: "Llegué a terapia en un momento límite. El consumo de alcohol me había llevado a un lugar muy peligroso. Poder hablar sin reservas abrió una parte de mí que necesitaba ser escuchada. Hoy sigo aquí, presente, gracias a este proceso.",
    },
    {
        name: "K.R",
        text: "Perder a mi hijo destruyó toda mi vida. En este espacio encontré contención, respeto y la libertad para expresar un dolor que nadie antes había sabido sostener. La terapia me ha permitido encontrar fuerzas para seguir viviendo, incluso en este nuevo mundo sin él.",
    },
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-[#fff6f3]">
            {/* Título */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bree-serif font-bold text-center mb-8"
                style={{ color: "#ffbc7d" }}
            >
                Qué opinan mis pacientes
            </motion.h2>

            {/* Marco de experiencia */}
            <p className="max-w-xl mx-auto text-center text-gray-600 text-base mb-20 leading-relaxed">
                A lo largo de mi práctica he acompañado procesos muy distintos, cada uno
                con su propio tiempo y su propio dolor. Estas voces forman parte de ese recorrido.
            </p>

            {/* Testimonio */}
            <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                effect="fade"
                slidesPerView={1}
                loop
                autoplay={{ delay: 11000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                speed={800}
                className="max-w-2xl mx-auto"
            >
                {testimonials.map((t, i) => (
                    <SwiperSlide key={i}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white/95 backdrop-blur-sm rounded-3xl px-10 py-14 text-center shadow-md"
                        >
                            <p className="text-gray-800 text-lg md:text-xl leading-relaxed italic font-light mb-10">
                                “{t.text}”
                            </p>

                            <span className="block text-sm tracking-widest text-brandMint">
                {t.name}
              </span>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;