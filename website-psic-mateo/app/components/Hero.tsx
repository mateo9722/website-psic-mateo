"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const HERO_CONFIG: Record<
    string,
    { image: string; title: string; subtitle?: string; phrase?: string }
> = {
    "/": {
        image: "/home.png",
        title: "La salud mental empieza cuando encuentras un espacio seguro",
        subtitle: "Terapia accesible, cercana y pensada para ti",
        phrase: "No tienes que poder con todo solo.",
    },
    "/services": {
        image: "/services.png",
        title: "Encuentra el acompañamiento adecuado para tu proceso",
        phrase: "Cada historia merece un espacio propio para sanar.",
    },
    "/about": {
        image: "/aboutimage.png",
        title: "Sobre mí y mi forma de acompañarte",
        phrase: "Escuchar también es una forma de cuidar.",
    },
    "/blog": {
        image: "/blog.png",
        title: "Reflexiones, procesos y salud mental",
        phrase: "Palabras que acompañan, no que explican.",
    },
    "/contact": {
        image: "/contact.png",
        title: "Comienza tu proceso con calma",
        phrase: "A veces, el primer paso es simplemente escribir.",
    },
};

export default function Hero() {
    const pathname = usePathname();

    // 🚫 No mostrar hero en artículos del blog
    if (pathname.startsWith("/blog/") && pathname !== "/blog") return null;

    const hero = HERO_CONFIG[pathname];
    if (!hero) return null;

    return (
        <section className="relative w-full h-[420px] md:h-[540px] overflow-hidden">
            {/* Imagen */}
            <Image
                src={hero.image}
                alt={hero.title}
                fill
                priority
                className="object-cover hero-image"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/65" />

            {/* Texto central */}
            <div className="absolute inset-0 flex items-center justify-center px-6">
                <div className="max-w-3xl text-center hero-content">
                    <h1 className="text-white text-3xl md:text-5xl font-semibold leading-tight tracking-tight drop-shadow-lg">
                        {hero.title}
                    </h1>

                    {hero.subtitle && (
                        <p className="mt-6 text-white/90 text-lg md:text-2xl leading-relaxed">
                            {hero.subtitle}
                        </p>
                    )}
                </div>
            </div>

            {/* Frase inferior */}
            {hero.phrase && (
                <div className="absolute bottom-6 w-full flex justify-center">
                    <p className="text-white/80 text-sm md:text-base italic tracking-wide hero-phrase">
                        {hero.phrase}
                    </p>
                </div>
            )}
        </section>
    );
}