"use client";

import { MessageCircle, Mail, AtSign, MapPin, Video } from "lucide-react";

export default function ContactSection() {
    return (
        <section className="bg-brandPeach-light py-32 animate-page-fade">
            <div className="max-w-6xl mx-auto px-6">

                {/* Card principal */}
                <div
                    className="
            max-w-4xl mx-auto
            rounded-[2.5rem]
            p-14 md:p-16
            space-y-14
            bg-white
            border border-brandPeach
            shadow-[0_30px_70px_rgba(0,0,0,0.12)]
          "
                >
                    {/* Mensaje principal */}
                    <div className="space-y-4 animate-fade-up">
                        <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground max-w-3xl">
                            Iniciar terapia no siempre comienza con una certeza.
                            A veces empieza con una pregunta que necesita ser escuchada.
                        </p>

                        <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
                            Puedes escribir sin tener todo claro. El proceso se construye paso a paso,
                            respetando tu tiempo y tu forma.
                        </p>
                    </div>

                    {/* Acciones */}
                    <div className="grid md:grid-cols-2 gap-6 animate-fade-up">
                        <a
                            href="https://wa.me/593987865487?text=Hola%20Mateo,%20quisiera%20información%20sobre%20iniciar%20un%20proceso%20terapéutico."
                            target="_blank"
                            className="
                flex items-center justify-center gap-3
                rounded-full
                bg-brandMint
                px-10 py-5
                text-base font-medium text-foreground
                transition hover:scale-[1.04] hover:shadow-xl
              "
                        >
                            <MessageCircle size={20} />
                            Escribir por WhatsApp
                        </a>

                        <a
                            href="mailto:psic.mateomorejon@hotmail.com"
                            className="
                flex items-center justify-center gap-3
                rounded-full
                border border-brandPeach
                bg-white
                px-10 py-5
                text-base font-medium text-foreground
                transition hover:bg-brandPeach-light
              "
                        >
                            <Mail size={20} />
                            Enviar un correo
                        </a>
                    </div>


                    {/* Inicio de proceso — formulario */}
                    <div className="rounded-2xl bg-brandMint-light p-6 space-y-4 animate-fade-up">
                        <p className="text-sm text-foreground max-w-2xl">
                            Si prefieres iniciar el proceso de forma más pausada,
                            puedes hacerlo completando un breve análisis socioeconómico.
                        </p>

                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                window.open(
                                    "https://docs.google.com/forms/d/e/1FAIpQLSfBS8Ta9Tw5g6YuaqFJseIOY84FJhq4bTR_ZM5RsQMZ_BE2iA/viewform?usp=dialog",
                                    "_blank",
                                    "noopener,noreferrer"
                                );
                            }}
                            className="
                                inline-flex items-center justify-center
                                rounded-full
                                bg-brandMint
                                px-8 py-4
                                text-base font-medium text-foreground
                                transition hover:scale-[1.04] hover:shadow-lg
                            "
                        >
                            Iniciar proceso terapéutico
                        </a>
                    </div>

                    {/* Modalidad de atención — REDISEÑADA */}
                    <div className="space-y-6 animate-fade-up">
                        <p className="text-sm uppercase tracking-wide text-muted-foreground">
                            Modalidad de atención
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Presencial */}
                            <div className="rounded-2xl border border-brandPeach bg-brandPeach-light p-6 space-y-3">
                                <div className="flex items-center gap-3 text-brandPeach">
                                    <MapPin size={18} />
                                    <span className="uppercase text-xs tracking-widest">
                    Presencial
                  </span>
                                </div>

                                <p className="text-foreground text-sm md:text-base">
                                    Atención en el norte y sur de Quito, en espacios que se coordinan
                                    contigo una vez iniciado el contacto.
                                </p>
                            </div>

                            {/* Online */}
                            <div className="rounded-2xl border border-brandMint bg-brandMint-light p-6 space-y-3">
                                <div className="flex items-center gap-3 text-brandMint">
                                    <Video size={18} />
                                    <span className="uppercase text-xs tracking-widest">
                    Online
                  </span>
                                </div>

                                <p className="text-foreground text-sm md:text-base">
                                    Sesiones virtuales disponibles según disponibilidad y contexto.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Instagram */}
                    <div className="rounded-2xl bg-brandPeach-light p-6 space-y-3 animate-fade-up">
                        <p className="text-sm text-foreground">
                            También puedes conocer mi forma de trabajo y reflexiones aquí:
                        </p>

                        <a
                            href="https://www.instagram.com/psic_mateomorejon/"
                            target="_blank"
                            className="
                inline-flex items-center gap-3
                text-brandPeach text-base font-medium
                transition hover:translate-x-1
              "
                        >
                            <AtSign size={18} />
                            Instagram
                        </a>
                    </div>

                    {/* Cierre humano */}
                    <p className="text-sm text-muted-foreground text-center pt-6">
                        Si sientes que es el momento, puedes escribir cuando lo necesites.
                    </p>
                </div>
            </div>
        </section>
    );
}