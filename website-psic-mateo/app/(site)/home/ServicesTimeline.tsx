"use client";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion, Variants } from "framer-motion";
import { Sparkles, HeartHandshake, Brain, Users, ShieldAlert, MessageCircleHeart, Waves } from "lucide-react";
import Link from "next/link";

const timelineElements = [
    {
        title: "Ansiedad y Estrés",
        description: "Comprender el origen de tus síntomas, trabajar tus miedos y construir herramientas para recuperar calma y enfoque.",
        icon: Brain,
        bgColor: "#ffbc7d",
        iconColor: "#99dfbd",
    },
    {
        title: "Duelo y Pérdidas",
        description: "Acompañamiento sensible y profundo para transitar el dolor, darle espacio a lo que sientes y reconstruirte con tiempo.",
        icon: Waves,
        bgColor: "#ffbc7d",
        iconColor: "#99dfbd",
    },
    {
        title: "Acompañamiento a Adolescentes",
        description: "Espacios respetuosos para explorar identidad, emociones, conflictos escolares y dinámicas familiares.",
        icon: Users,
        bgColor: "#ffbc7d",
        iconColor: "#99dfbd",
    },
    {
        title: "Relaciones y Vínculos",
        description: "Comprender patrones afectivos, sanar heridas relacionales y construir vínculos más saludables.",
        icon: HeartHandshake,
        bgColor: "#ffbc7d",
        iconColor: "#99dfbd",
    },
    {
        title: "Autoestima y Autoconocimiento",
        description: "Procesos orientados a explorar tu historia emocional, comprender tus inseguridades y fortalecer tu identidad.",
        icon: MessageCircleHeart,
        bgColor: "#ffbc7d",
        iconColor: "#99dfbd",
    },
    {
        title: "Violencia Psicológica",
        description: "Identificar dinámicas dañinas, comprender sus efectos y acompañar tu proceso de salida y reparación emocional.",
        icon: ShieldAlert,
        bgColor: "#ffbc7d",
        iconColor: "#99dfbd",
    },
    {
        title: "Crecimiento Personal",
        description: "Procesos profundos para entenderte, conectar con tu historia y avanzar hacia una vida más auténtica.",
        icon: Sparkles,
        bgColor: "#ffbc7d",
        iconColor: "#99dfbd",
    },
];

const variants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: (index: number) => ({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { delay: index * 0.15, type: "spring", stiffness: 80, damping: 12 },
    }),
};

const ServicesTimeline = () => {
    return (
        <section className="w-full py-24 px-6 bg-white">
            {/* Encabezado */}
            <div className="max-w-4xl mx-auto text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-semibold text-gray-900"
                >
                    Áreas de Acompañamiento
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="text-lg md:text-xl text-gray-700 mt-4"
                >
                    Procesos centrados en tu historia, tus tiempos y lo que hoy necesitas.
                </motion.p>
            </div>

            {/* Timeline dinámico */}
            <VerticalTimeline lineColor="#ffbc7d">
                {timelineElements.map((el, i) => {
                    const Icon = el.icon;
                    return (
                        <VerticalTimelineElement
                            key={i}
                            contentStyle={{
                                background: el.bgColor,
                                color: "#000",
                                borderRadius: "18px",
                            }}
                            contentArrowStyle={{ borderRight: `7px solid ${el.bgColor}` }}
                            icon={<Icon />}
                            iconStyle={{ background: el.iconColor, color: "#000" }}
                        >
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={variants}
                                custom={i}
                            >
                                <h3 className="font-semibold text-xl">{el.title}</h3>
                                <p className="mt-2">{el.description}</p>
                            </motion.div>
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>

            {/* Botón dinámico */}
            <motion.div
                className="text-center mt-12"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Link
                    href="https://wa.me/593987184079?text=Hola%2C%20quisiera%20agendar%20una%20sesión"
                    target="_blank"
                >
                    <motion.button
                        className="px-8 py-4 rounded-full font-semibold text-black shadow-md"
                        style={{ backgroundColor: "#99dfbd", transition: "0.3s" }}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        Dar el primer paso
                    </motion.button>
                </Link>
            </motion.div>
        </section>
    );
};

export default ServicesTimeline;