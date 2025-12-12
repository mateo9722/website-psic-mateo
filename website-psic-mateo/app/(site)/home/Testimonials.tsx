"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { motion } from "framer-motion";

interface Testimonial {
    name: string;
    text: string;
}

const testimonials: Testimonial[] = [
    {
        name: "EM",
        text: "Desde que empecé terapia entendí cosas que antes no podía ver. Hablarlas en voz alta me ayudó a ser más consciente, ver opciones y tomar decisiones desde un lugar más claro y compasivo conmigo mismo. Ha sido de mucha ayuda para seguir adelante."
    },
    {
        name: "Brenda",
        text: "Llegué a terapia como último recurso para seguir viviendo. El consumo de alcohol me había llevado a un límite peligroso. Hablar sin reservas abrió una parte de mí que necesitaba ser escuchada. Hoy sigo aquí, presente, gracias a este proceso y al acompañamiento del Dr. Mateo."
    },
    {
        name: "K.R",
        text: "Perder a mi hijo destruyó toda mi vida. En este espacio encontré contención, respeto y la libertad para expresar un dolor que nadie antes había sabido sostener. La terapia me ha permitido encontrar fuerzas para seguir viviendo, incluso en este nuevo mundo sin él."
    }
];

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Testimonials = () => {
    return (
        <section className="py-32 bg-[#fff6f3]">
            {/* Título */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bree-serif font-bold text-center mb-20"
                style={{ color: "#ffbc7d" }}
            >
                Qué opinan mis pacientes
            </motion.h2>

            {/* Slider */}
            <Swiper
                modules={[Autoplay, EffectFade, Pagination, Navigation]}
                effect="fade"
                slidesPerView={1.05}
                centeredSlides={true}
                loop={true}
                grabCursor={true}
                autoplay={{ delay: 7000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation
                speed={700}
                spaceBetween={20}
                className="max-w-4xl mx-auto"
            >
                {testimonials.map((t, i) => (
                    <SwiperSlide key={i} className="flex justify-center items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                            className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-12 md:p-16 text-center flex flex-col justify-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <motion.p
                                variants={textVariants}
                                className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 font-sans"
                            >
                                {t.text}
                            </motion.p>
                            <motion.span
                                variants={textVariants}
                                className="block font-semibold text-brandMint text-xl md:text-2xl"
                            >
                                {t.name}
                            </motion.span>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* CTA */}
            <div className="text-center mt-12">
                <motion.a
                    href="https://wa.me/593987184079?text=Hola%2C%20quisiera%20agendar%20una%20sesión"
                    target="_blank"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-8 py-4 rounded-full font-semibold text-black shadow-md"
                    style={{ backgroundColor: "#99dfbd", transition: "0.3s" }}
                >
                    Dar el primer paso
                </motion.a>
            </div>
        </section>
    );
};

export default Testimonials;