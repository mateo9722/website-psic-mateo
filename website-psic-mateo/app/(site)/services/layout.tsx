import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Terapia psicológica en Quito | Mateo Morejón",
    description:
        "Servicios de terapia psicológica en Quito. Atención a adolescentes y adultos. Modalidad presencial y online.",
};

export default function ServicesLayout({
                                           children,
                                       }: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}