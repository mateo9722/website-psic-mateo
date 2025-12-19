"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
    { href: "/", label: "Inicio" },
    { href: "/about", label: "Sobre mí" },
    { href: "/services", label: "Servicios" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contacto" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50">
            <nav className="backdrop-blur-md bg-white/90 border-b border-black/5">
                <div className="max-w-6xl mx-auto px-6 h-28 flex items-center justify-between">

                    {/* Logo + Nombre */}
                    <Link
                        href="/"
                        className="flex items-center gap-6 hover:opacity-80 transition"
                    >
                        <Image
                            src="/logofinal.png"
                            alt="Logo Mateo Morejón"
                            width={96}
                            height={96}
                            priority
                        />

                        <span className="font-medium text-2xl tracking-tight text-gray-900">
              Mateo Morejón
            </span>
                    </Link>

                    {/* Botón mobile */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-gray-900 hover:bg-black/5 transition"
                        aria-label="Abrir menú"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-7 h-7"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                            />
                        </svg>
                    </button>

                    {/* Links desktop */}
                    <div className="hidden md:flex items-center gap-10">
                        {links.map((link) => {
                            const active = pathname === link.href;

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`
                    relative text-base font-medium transition
                    ${
                                        active
                                            ? "text-brandPeach"
                                            : "text-gray-700 hover:text-gray-900"
                                    }
                  `}
                                >
                                    {link.label}

                                    {active && (
                                        <span className="absolute -bottom-3 left-0 w-full h-[2px] bg-brandPeach rounded-full" />
                                    )}
                                </Link>
                            );
                        })}

                        {/* CTA */}
                        <a
                            href="https://wa.me/593987865487?text=Hola%20Mateo,%20quisiera%20información%20sobre%20iniciar%20un%20proceso%20terapéutico."
                            target="_blank"
                            className="
                ml-4 px-7 py-3 rounded-full text-base font-semibold
                bg-brandPeach text-[#171717]
                hover:bg-brandMint transition
              "
                        >
                            Agenda tu sesión
                        </a>
                    </div>
                </div>

                {/* Menú mobile */}
                {open && (
                    <div className="md:hidden border-t border-black/5 bg-white/95 backdrop-blur-md">
                        <div className="px-6 py-6 flex flex-col gap-5">
                            {links.map((link) => {
                                const active = pathname === link.href;

                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className={`text-lg font-medium ${
                                            active ? "text-brandPeach" : "text-gray-800"
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}

                            <a
                                href="https://wa.me/593987865487"
                                target="_blank"
                                className="
                  mt-2 inline-flex justify-center px-6 py-3 rounded-full text-base font-semibold
                  bg-brandPeach text-[#171717]
                "
                            >
                                Agenda tu sesión
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}