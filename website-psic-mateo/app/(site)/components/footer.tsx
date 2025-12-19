import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#f2f2ef] text-[#2b2b2b]">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid gap-12 md:grid-cols-3 items-start">

                    {/* Identidad */}
                    <div className="flex items-start gap-6">
                        <Image
                            src="/logofinal.png"
                            alt="Logo Mateo Morejón"
                            width={180}
                            height={180}
                            priority
                        />

                        <div className="space-y-2">
                            <p className="text-2xl font-medium tracking-tight">
                                Mateo Morejón
                            </p>
                            <p className="text-sm text-[#6b6b6b]">
                                Psicólogo clínico
                            </p>
                            <p className="text-sm text-[#6b6b6b] leading-relaxed max-w-xs">
                                Un espacio de escucha.
                            </p>
                        </div>
                    </div>

                    {/* Atención */}
                    <div className="space-y-3 md:pl-10">
                        <p className="text-xs uppercase tracking-[0.25em] text-[#6b6b6b]">
                            Atención
                        </p>
                        <p className="text-sm leading-relaxed">
                            Presencial en norte y sur de Quito<br />
                            Online
                        </p>
                    </div>

                    {/* Contacto */}
                    <div className="space-y-4">
                        <p className="text-xs uppercase tracking-[0.25em] text-[#6b6b6b]">
                            Contacto
                        </p>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link
                                    href="https://wa.me/593987865487?text=Hola%20Mateo,%20quisiera%20información%20sobre%20iniciar%20un%20proceso%20terapéutico."
                                    target="_blank"
                                    className="flex items-center gap-3 hover:opacity-70 transition"
                                >
                                    <FaWhatsapp />
                                    WhatsApp
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="https://www.instagram.com/psic_mateomorejon/"
                                    target="_blank"
                                    className="flex items-center gap-3 hover:opacity-70 transition"
                                >
                                    <FaInstagram />
                                    Instagram
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="https://www.linkedin.com/in/mateo-morej%C3%B3n-0b3861265/"
                                    target="_blank"
                                    className="flex items-center gap-3 hover:opacity-70 transition"
                                >
                                    <FaLinkedin />
                                    LinkedIn
                                </Link>
                            </li>
                        </ul>

                        <Link
                            href="mailto:psic.mateomorejon@hotmail.com"
                            className="text-sm text-[#6b6b6b] hover:text-[#2b2b2b] transition block"
                        >
                            psic.mateomorejon@hotmail.com
                        </Link>
                    </div>
                </div>

                {/* Línea inferior */}
                <div className="mt-10 pt-4 border-t border-[#d8d8d4] text-sm text-[#6b6b6b] flex flex-col md:flex-row justify-between gap-2">
                    <p>© {new Date().getFullYear()} Mateo Morejón</p>
                    <p>Diseño y desarrollo web: Mateo Morejón</p>
                </div>
            </div>
        </footer>
    );
}