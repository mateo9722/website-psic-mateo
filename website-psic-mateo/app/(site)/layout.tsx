import "../globals.css";
import type { Metadata } from "next";
import Navbar from "@/app/(site)/components/navbar";

export const metadata: Metadata = {
    title: "Mi sitio | Mateo",
    description: "Psicología, servicios, blog y contacto",
};

export default function SiteLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
        <body className="min-h-screen flex flex-col bg-white text-gray-900">

        {/* NAVBAR */}
        <div className="bg-white border-b border-gray-200 shadow-sm">
            <Navbar />
        </div>

        {/* CONTENIDO */}
        <main className="flex-1">
            {children}
        </main>

        {/* FOOTER */}
        <footer className="border-t border-gray-300 py-6 mt-10 bg-white">
            <div className="max-w-6xl mx-auto px-4 text-sm text-gray-800">
                © {new Date().getFullYear()} Mateo Morejón — Psicología y bienestar
            </div>
        </footer>

        </body>
        </html>
    );
}