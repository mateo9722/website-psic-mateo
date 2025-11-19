"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

                {/* Logo (vacío por ahora) */}
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gray-300" />
                    <span className="text-lg font-semibold text-gray-900">
                Mateo Morejón | Psicólogo Clínico
            </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 font-medium text-gray-900">
                    <Link href="/" className="hover:text-blue-600 cursor-pointer transition">Inicio</Link>
                    <Link href="/about" className="hover:text-blue-600 cursor-pointer transition">Sobre mí</Link>
                    <Link href="/services" className="hover:text-blue-600 cursor-pointer transition">Servicios</Link>
                    <Link href="/blog" className="hover:text-blue-600 cursor-pointer transition">Blog</Link>
                    <Link href="/contact" className="hover:text-blue-600 cursor-pointer transition">Contacto</Link>
                </div>

                {/* Mobile button */}
                <button
                    className="md:hidden p-2 rounded hover:bg-gray-100"
                    onClick={() => setOpen(!open)}
                >
                    <svg
                        className="w-6 h-6"
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

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <div className="flex flex-col p-4 space-y-4 font-medium text-gray-900">
                        <Link href="/" onClick={() => setOpen(false)} className="hover:text-blue-600 transition">Inicio</Link>
                        <Link href="/about" onClick={() => setOpen(false)} className="hover:text-blue-600 transition">Sobre mí</Link>
                        <Link href="/services" onClick={() => setOpen(false)} className="hover:text-blue-600 transition">Servicios</Link>
                        <Link href="/blog" onClick={() => setOpen(false)} className="hover:text-blue-600 transition">Blog</Link>
                        <Link href="/contact" onClick={() => setOpen(false)} className="hover:text-blue-600 transition">Contacto</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}