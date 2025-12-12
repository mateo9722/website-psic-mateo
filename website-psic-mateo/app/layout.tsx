// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Bree_Serif, Montserrat } from "next/font/google";
import "./globals.css";
import React from "react";

import Navbar from "@/app/components/Navbar";
import HeroWrapper from "@/app/components/HeroWrapper";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const breeSerif = Bree_Serif({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-bree-serif",
});

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-montserrat",
});

export const metadata: Metadata = {
    title: "Mateo Morejón - Psicólogo Clínico",
    description: "Acompañamiento psicológico humano y profesional.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
        <body
            className={`${geistSans.variable} ${geistMono.variable} ${breeSerif.variable} ${montserrat.variable} antialiased bg-gray-50 text-gray-900`}
        >
        <Navbar />
        <HeroWrapper />

        <main className="max-w-6xl mx-auto px-4 py-16">
            {children}
        </main>

        <footer className="bg-white border-t border-gray-200 mt-16 py-8">
            <div className="max-w-6xl mx-auto text-center text-gray-700 text-sm">
                © {new Date().getFullYear()} Mateo Morejón — Psicología y bienestar
            </div>
        </footer>
        </body>
        </html>
    );
}