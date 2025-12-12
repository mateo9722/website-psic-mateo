"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

type Mode = "virtual" | "presencial";

interface Service {
    title: string;
    short: string;
    price?: string;
}

const SERVICES: Record<Mode, Service[]> = {
    presencial: [
        {
            title: "Terapia Individual (Presencial)",
            short: "Acompañamiento cercano y confidencial en un espacio físico cálido.",
            price: "20 - 22 USD",
        },
        {
            title: "Terapia de Pareja (Presencial)",
            short: "Espacio para dialogar y transformar la vida en pareja.",
            price: "25 - 30 USD",
        },
        {
            title: "Terapia Familiar (Presencial)",
            short: "Intervenciones orientadas a reparar vínculos y roles familiares.",
            price: "30 - 35 USD",
        },
    ],
    virtual: [
        {
            title: "Terapia Individual (Virtual)",
            short: "La misma profundidad terapéutica, desde donde estés.",
            price: "13 - 18 USD",
        },
        {
            title: "Terapia de Pareja (Virtual)",
            short: "Accesible para parejas con agendas o distancias complicadas.",
            price: "20 - 25 USD",
        },
        {
            title: "Terapia Familiar (Virtual)",
            short: "Solución práctica para familias que viven en distintas localidades.",
            price: "20 - 25 USD",
        },
    ],
};

export default function ServiceContent({ mode }: { mode: Mode }) {
    const items = SERVICES[mode];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.12 },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <motion.section
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
            {items.map((s, i) => (
                <motion.div key={i} variants={item}>
                    <ServiceCard {...s} />
                </motion.div>
            ))}
        </motion.section>
    );
}