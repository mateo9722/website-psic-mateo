"use client";

import { useState } from "react";
import HeroText, { SlideData } from "./HeroText";
import { motion } from "framer-motion";
import HeroCarousel from "@/app/(site)/home/HeroCarrousel";

export default function Hero() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

    const slides: SlideData[] = [
        {
            title: "Terapia individual virtual",
            description:
                "Sesiones adaptadas a tu ritmo y necesidades. Atención personalizada desde la comodidad de tu hogar, enfocada en tu bienestar emocional y mental.",
            price: "$13",
            type: "individual",
            mode: "virtual",
            image: "/individualvir.jpg",
        },
        {
            title: "Terapia de pareja virtual",
            description:
                "Fortalece tu relación desde cualquier lugar. Apoyo profesional para mejorar la comunicación y reconectar emocionalmente.",
            price: "$20",
            type: "pareja",
            mode: "virtual",
            image: "/parejavir.jpg",
        },
        {
            title: "Terapia familiar virtual",
            description:
                "Acompañamiento para toda la familia. Sesiones que fomentan la comprensión, el respeto y la unión entre sus miembros.",
            price: "$25",
            type: "familiar",
            mode: "virtual",
            image: "/familiarvir.jpg",
        },
        {
            title: "Terapia individual presencial",
            description:
                "Sesiones cara a cara en un espacio seguro. Atención personalizada enfocada en tu bienestar emocional y herramientas prácticas.",
            price: "$20",
            type: "individual",
            mode: "presencial",
            image: "/individualpre.jpg",
        },
        {
            title: "Terapia familiar presencial",
            description:
                "Apoyo presencial para toda la familia. Creando espacios de diálogo y comprensión entre todos los miembros.",
            price: "$30",
            type: "familiar",
            mode: "presencial",
            image: "/familiarpre.jpg",
        },
        {
            title: "Terapia de pareja presencial",
            description:
                "Reconecta con tu pareja de manera presencial. Sesiones guiadas para mejorar la comunicación y fortalecer la relación.",
            price: "$25",
            type: "pareja",
            mode: "presencial",
            image: "/parejapre.jpg",
        },
    ];

    const images = slides.map((s) => s.image);

    return (
        <section className="relative w-full py-20">
            {/* Fondo blur dinámico */}
            <motion.div
                key={currentSlideIndex}
                className="absolute inset-0 w-full h-full bg-center bg-cover filter blur-3xl opacity-20 transition-all duration-700"
                style={{ backgroundImage: `url(${slides[currentSlideIndex].image})` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                exit={{ opacity: 0 }}
            />

            {/* Card contenedora */}
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-12 p-8 md:p-16 items-center">
                    {/* HeroText */}
                    <HeroText currentSlideIndex={currentSlideIndex} slides={slides} />

                    {/* HeroCarousel */}
                    <div className="flex justify-center md:justify-end">
                        <div className="w-[350px] md:w-[450px] rounded-xl overflow-hidden shadow-lg">
                            <HeroCarousel
                                images={images}
                                setCurrentSlideIndex={setCurrentSlideIndex}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}