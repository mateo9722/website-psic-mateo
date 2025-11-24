"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Inicio" },
        { href: "/about", label: "Sobre mí" },
        { href: "/services", label: "Servicios" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Contacto" },
    ];

    const backgroundImage = {
        "/": "/home.png",
        "/about": "/aboutimage.jpg",
        "/services": "/servicesimage.jpg",
        "/blog": "/blogimage.jpg",
        "/contact": "/contactimage.jpg",
    }[pathname] || "/homeimage.jpg";

    return (
        <header className="relative w-full">

            {/* Imagen de fondo del header */}
            <div className="relative w-full min-h-[350px] md:min-h-[480px]">
                <Image
                    src={backgroundImage}
                    alt="Fondo Navbar"
                    fill
                    priority
                    className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Texto Hero (solo en Home) */}
                {pathname === "/" && (
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                        <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg opacity-0 fade-in-up">
                            La salud mental empieza cuando encuentras un espacio seguro
                        </h1>

                        <p className="text-white/90 text-lg md:text-2xl max-w-2xl drop-shadow-lg opacity-0 fade-in-up-delayed">
                            Terapia accesible, cercana y pensada para ti.
                        </p>
                    </div>
                )}
            </div>

            {/* Navbar */}
            <nav className="absolute top-0 left-0 w-full z-50">
                <div className="max-w-6xl mx-auto flex justify-between items-center px-6 md:px-20 py-4">

                    {/* Menú Desktop */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="nav-link text-white text-xl font-bold hover:text-brandPeach transition-colors duration-300"
                            >
                                {link.label}
                            </Link>
                        ))}

                        <a
                            href="https://wa.me/593000000000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-link bg-brandPeach text-[#171717] px-6 py-2 rounded-full font-semibold shadow-md hover:bg-brandMint transition-all duration-300"
                        >
                            Agenda tu sesión
                        </a>
                    </div>

                    {/* Botón Mobile */}
                    <button
                        className="md:hidden text-white z-50"
                        onClick={() => setOpen(!open)}
                    >
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                </div>

                {/* Menú Mobile */}
                {open && (
                    <div className="md:hidden absolute w-full bg-black/60 backdrop-blur-md px-6 py-4 space-y-4 text-white z-50">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="block text-lg font-medium nav-link hover:text-brandPeach transition-colors duration-300"
                            >
                                {link.label}
                            </Link>
                        ))}

                        <a
                            href="https://wa.me/593000000000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center nav-link bg-brandPeach text-[#171717] px-6 py-2 rounded-full font-semibold shadow-md hover:bg-brandMint transition-all duration-300"
                        >
                            Agenda tu sesión
                        </a>
                    </div>
                )}
            </nav>
        </header>
    );
}