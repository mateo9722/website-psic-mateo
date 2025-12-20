"use client";

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

    const navigate = (href: string) => {
        setOpen(false);
        window.location.href = href;
    };

    return (
        <header className="sticky top-0 z-50">
            <nav className="backdrop-blur-md bg-white/90 border-b border-black/5">
                <div className="max-w-6xl mx-auto px-6 h-28 flex items-center justify-between">

                    {/* Logo */}
                    <button
                        onClick={() => navigate("/")}
                        className="flex items-center gap-6 hover:opacity-80 transition text-left"
                    >
                        <Image
                            src="/logofinal.png"
                            alt="Logo Mateo Morejón"
                            width={96}
                            height={96}
                            priority
                        />
                        <div className="flex flex-col leading-tight">
              <span className="font-medium text-2xl tracking-tight text-gray-900">
                Mateo Morejón
              </span>
                            <span className="text-sm text-gray-500">
                Psicólogo clínico
              </span>
                        </div>
                    </button>

                    {/* Botón mobile */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-gray-900 hover:bg-black/5 transition"
                        aria-label="Abrir menú"
                    >
                        ☰
                    </button>

                    {/* Links desktop */}
                    <div className="hidden md:flex items-center gap-10">
                        {links.map((link) => {
                            const active = pathname === link.href;

                            return (
                                <button
                                    key={link.href}
                                    onClick={() => navigate(link.href)}
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
                                </button>
                            );
                        })}

                        <a
                            href="https://wa.me/593987865487"
                            target="_blank"
                            className="ml-4 px-7 py-3 rounded-full text-base font-semibold bg-brandPeach text-[#171717]"
                        >
                            Agenda tu sesión
                        </a>
                    </div>
                </div>

                {/* Menú mobile */}
                {open && (
                    <div className="md:hidden border-t border-black/5 bg-white/95">
                        <div className="px-6 py-6 flex flex-col gap-5">
                            {links.map((link) => {
                                const active = pathname === link.href;

                                return (
                                    <button
                                        key={link.href}
                                        onClick={() => navigate(link.href)}
                                        className={`text-lg font-medium text-left ${
                                            active ? "text-brandPeach" : "text-gray-800"
                                        }`}
                                    >
                                        {link.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}