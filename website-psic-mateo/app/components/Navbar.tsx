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

    const backgroundImage =
        {
            "/": "/home.png",
            "/about": "/aboutimage.jpg",
            "/services": "/services.png",
            "/blog": "/blogimage.jpg",
            "/contact": "/contactimage.jpg",
        }[pathname] || "/homeimage.jpg";

    return (
        <header className="relative w-full">
            {/* Imagen de fondo */}
            <div className="relative w-full min-h-[350px] md:min-h-[480px]">
                <Image
                    src={backgroundImage}
                    alt="Fondo Navbar"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Navbar */}
            <nav className="absolute top-0 left-0 w-full z-50">
                <div className="max-w-6xl mx-auto flex justify-between items-center px-6 md:px-20 py-4">

                    {/* Links desktop */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-white text-xl font-bold hover:text-brandPeach transition"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Botón menú mobile */}
                    <button
                        className="md:hidden text-white z-50"
                        onClick={() => setOpen(!open)}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                </div>

                {/* Menú mobile */}
                {open && (
                    <div className="md:hidden absolute w-full bg-black/70 backdrop-blur px-6 py-4 space-y-4 text-white">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="block text-lg font-medium hover:text-brandPeach transition"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
}