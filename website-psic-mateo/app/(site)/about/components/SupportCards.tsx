"use client";

import { motion } from "framer-motion";
import { FaHeartBroken, FaUserFriends, FaBrain } from "react-icons/fa";

export default function SupportCards() {
    const items = [
        {
            icon: <FaHeartBroken />,
            title: "Procesos de duelo",
            text: "Acompaño duelos emocionales, pérdidas, rupturas, duelo perinatal y momentos donde la vida cambia de forma abrupta.",
            color: "#ffbc7d",
        },
        {
            icon: <FaUserFriends />,
            title: "Adolescentes y adultos",
            text: "Trabajo profundamente con jóvenes y adultos que buscan comprenderse, sanar historias y encontrar nuevas formas de vivir.",
            color: "#99dfbd",
        },
        {
            icon: <FaBrain />,
            title: "Gestión emocional",
            text: "Ansiedad, autolesiones, crisis, miedo, tristeza, vacío… No estás solo. Aquí tienes un espacio para respirar y entender lo que sientes.",
            color: "#ffbc7d",
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bree-serif font-bold text-center mb-12"
                style={{ color: "#99dfbd" }}
            >
                En qué puedo acompañarte
            </motion.h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.2 }}
                        className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition group"
                    >
                        <div
                            className="text-5xl mb-4 transition group-hover:scale-110"
                            style={{ color: item.color }}
                        >
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-700">{item.text}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}