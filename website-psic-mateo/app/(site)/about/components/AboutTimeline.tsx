"use client";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaHospital, FaUsers, FaClinicMedical, FaHandHoldingHeart } from "react-icons/fa";

export default function AboutTimeline() {
    return (
        <section className="py-24 bg-white">
            {/* Título */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center text-4xl md:text-5xl font-bree-serif font-bold mb-16"
                style={{ color: "#ffbc7d" }}
            >
                Mi camino acompañando a otros
            </motion.h2>

            <VerticalTimeline lineColor="#99dfbd">

                {/* PRIMERA ETAPA */}
                <VerticalTimelineElement
                    icon={<FaHospital />}
                    iconStyle={{
                        background: "#ffbc7d",
                        color: "#fff",
                        boxShadow: "0 0 15px #ffbc7d",
                    }}
                    contentStyle={{
                        background: "#fff7f1",
                        borderRadius: "16px",
                        boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                    }}
                    contentArrowStyle={{ borderRight: "7px solid #fff7f1" }}
                    date="Hospital – Área Infantil"
                >
                    <h3 className="font-bold text-xl">Primeros pasos desde lo humano</h3>
                    <p className="mt-2 text-gray-700">
                        Actividades de acompañamiento emocional en pediatría. Ese día fui “payaso terapéutico”,
                        ayudando a niños y familias en momentos difíciles.
                    </p>

                    <div className="mt-4 rounded-xl overflow-hidden">
                        <Image
                            src="/hospital1.png"
                            alt="Hospital Actividad"
                            width={600}
                            height={400}
                            className="object-cover w-full h-60"
                        />
                    </div>
                </VerticalTimelineElement>

                {/* SEGUNDA ETAPA */}
                <VerticalTimelineElement
                    icon={<FaHandHoldingHeart />}
                    iconStyle={{
                        background: "#99dfbd",
                        color: "#fff",
                        boxShadow: "0 0 15px #99dfbd",
                    }}
                    contentStyle={{
                        background: "#f3fff8",
                        borderRadius: "16px",
                        boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                    }}
                    contentArrowStyle={{ borderRight: "7px solid #f3fff8" }}
                    date="Trabajo clínico hospitalario"
                >
                    <h3 className="font-bold text-xl">Acompañamiento clínico</h3>
                    <p className="mt-2 text-gray-700">
                        Duelo perinatal, depresión, ansiedad, violencia, crisis, adolescencia y apoyo emocional
                        en distintas áreas del hospital.
                    </p>

                    <div className="mt-4 rounded-xl overflow-hidden">
                        <Image
                            src="/educa.jpg"
                            alt="Equipo hospitalario"
                            width={600}
                            height={400}
                            className="object-cover w-full h-60"
                        />
                    </div>
                </VerticalTimelineElement>

                {/* TERCERA ETAPA */}
                <VerticalTimelineElement
                    icon={<FaUsers />}
                    iconStyle={{
                        background: "#ffbc7d",
                        color: "#fff",
                        boxShadow: "0 0 15px #ffbc7d",
                    }}
                    contentStyle={{
                        background: "#fff7f1",
                        borderRadius: "16px",
                        boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                    }}
                    contentArrowStyle={{ borderRight: "7px solid #fff7f1" }}
                    date="Psicología comunitaria – Proyecto Jatari"
                >
                    <h3 className="font-bold text-xl">Trabajo comunitario</h3>
                    <p className="mt-2 text-gray-700">
                        Procesos grupales, prevención, riesgo psicosocial y educación emocional con adolescentes y adultos
                        en territorios vulnerables.
                    </p>

                    <div className="mt-4 rounded-xl overflow-hidden">
                        <Image
                            src="/jatari.png"
                            alt="Psicología comunitaria"
                            width={600}
                            height={400}
                            className="object-cover w-full h-60"
                        />
                    </div>
                </VerticalTimelineElement>

                {/* CUARTA ETAPA */}
                <VerticalTimelineElement
                    icon={<FaClinicMedical />}
                    iconStyle={{
                        background: "#99dfbd",
                        color: "#fff",
                        boxShadow: "0 0 15px #99dfbd",
                    }}
                    contentStyle={{
                        background: "#f3fff8",
                        borderRadius: "16px",
                        boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                    }}
                    contentArrowStyle={{ borderRight: "7px solid #f3fff8" }}
                    date="Consulta privada – Actualidad"
                >
                    <h3 className="font-bold text-xl">Consulta privada</h3>
                    <p className="mt-2 text-gray-700">
                        Acompaño a adolescentes y adultos desde un enfoque humano, profundo y responsable.
                        Trabajo duelo y tanatología, autolesiones, ansiedad, depresión y procesos emocionales complejos.
                    </p>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </section>
    );
}