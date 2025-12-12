"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/", label: "Inicio" },
    { href: "/about", label: "Sobre mí" },
    { href: "/services", label: "Servicios" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contacto" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50">
            <nav className="backdrop-blur-md bg-white/70 border-b border-black/5">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                    {/* Logo / Nombre */}
                    <Link
                        href="/"
                        className="font-semibold text-lg tracking-tight text-gray-900 hover:opacity-80 transition cursor-pointer"
                    >
                        Mateo Morejón
                    </Link>

                    {/* Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {links.map((link) => {
                            const active = pathname === link.href;

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`
                                        relative text-sm font-medium transition cursor-pointer
                                        ${active ? "text-brandPeach" : "text-gray-700 hover:text-gray-900"}
                                    `}
                                >
                                    {link.label}

                                    {/* Indicador activo */}
                                    {active && (
                                        <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-brandPeach rounded-full" />
                                    )}
                                </Link>
                            );
                        })}

                        {/* CTA */}
                        <a
                            href="https://wa.me/593000000000"
                            target="_blank"
                            className="
                                ml-4 px-4 py-2 rounded-full text-sm font-semibold
                                bg-brandPeach text-[#171717]
                                hover:bg-brandMint transition
                                cursor-pointer
                            "
                        >
                            Agenda tu sesión
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}