"use client";

import { useState } from "react";

import HowItWorksSection from "./components/HowItWorksSection";
import ModeSelector from "./components/ModeSelector.controlled";
import ServiceContent from "./components/ServiceContent";
import PricingAccessibility from "./components/PricingAccessibility";
import CTA from "./components/CTA";
import ValueHeader from "@/app/(site)/services/components/ValueProposition";
import FAQ from "@/app/(site)/services/components/FAQ";
import SocioeconomicAnalysis from "@/app/(site)/services/components/SocioEconomicAnalysis";

type Mode = "virtual" | "presencial";

export default function ServicesPage() {
    const [mode, setMode] = useState<Mode>("virtual");

    return (
        <main className="w-full flex flex-col items-center px-6 md:px-20 py-16 gap-24">

            {/* 1. Propuesta de valor */}
            <section className="w-full max-w-5xl">
                <ValueHeader />
            </section>

            {/* 2. Cómo funciona la terapia */}
            <section className="w-full max-w-6xl">
                <HowItWorksSection />
            </section>
            <SocioeconomicAnalysis />

            <section className="w-full max-w-6xl">
                <ModeSelector mode={mode} setMode={setMode} />
                <div className="mt-6">
                    <ServiceContent mode={mode} />
                </div>
            </section>

            {/* 3. Introducción a las modalidades */}
            <section className="w-full max-w-4xl text-center mt-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                    Elige cómo quieres iniciar tu proceso
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Un acompañamiento que se adapta a tu contexto y a tu ritmo,
                    tanto en modalidad virtual como presencial.
                </p>
            </section>

            {/* 4. Selector de modalidad */}
            <section className="w-full max-w-6xl flex flex-col gap-8 mt-4">
                <ModeSelector mode={mode} setMode={setMode} />
                <ServiceContent mode={mode} />
            </section>

            {/* 5. Accesibilidad y compromiso ético */}
            <section className="w-full max-w-5xl">
                <PricingAccessibility />
            </section>

            {/* 6. Preguntas frecuentes */}
            <section className="w-full max-w-5xl">
                <FAQ />
            </section>

            {/* 7. Call to action final */}
            <section className="w-full max-w-4xl">
                <CTA />
            </section>

        </main>
    );
}