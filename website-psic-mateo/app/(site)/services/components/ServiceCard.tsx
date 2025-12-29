"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
    title: string;
    short: string;
    price?: string | undefined;
    whatsappHref?: string;
}

export default function ServiceCard({
                                        title,
                                        short,
                                        price,
                                        whatsappHref = "https://wa.me/593987865487?text=Hola%20Mateo,%20quisiera%20información%20sobre%20iniciar%20un%20proceso%20terapéutico.",
                                    }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
                flex flex-col justify-between
                h-full rounded-3xl bg-white
                shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                border border-[#FFE1C6]
                p-8
                hover:shadow-xl hover:scale-[1.02]
                transition-all duration-300
            "
        >
            {/* ----- CONTENIDO SUPERIOR ----- */}
            <div>
                <h3 className="text-2xl font-bold text-[#232323] mb-3">
                    {title}
                </h3>

                <p className="text-gray-700 mb-6 leading-relaxed">
                    {short}
                </p>

                <p className="text-xl font-semibold text-[#FFBC7D]">
                    {price}
                </p>
            </div>

            {/* ----- CTA ---- */}
            <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="
                    mt-8 w-full text-center px-4 py-3
                    rounded-xl font-semibold text-black
                    bg-[#99DFBD]
                    hover:bg-[#FFBC7D] hover:text-black
                    transition-all shadow-md
                "
            >
                Agendar sesión
            </a>
        </motion.div>
    );
}