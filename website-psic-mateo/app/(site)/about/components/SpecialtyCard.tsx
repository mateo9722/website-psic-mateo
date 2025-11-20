"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface SpecialtyCardProps {
    icon: IconType;
    title: string;
    description: string;
    color?: string; // color de borde
}

export default function SpecialtyCard({
                                          icon: Icon,
                                          title,
                                          description,
                                          color = "#99dfbd",
                                      }: SpecialtyCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05, borderColor: color }}
            className={`flex flex-col items-center text-center p-6 rounded-2xl border-2 cursor-pointer`}
            style={{ borderColor: color }}
        >
            <div className="text-5xl mb-4" style={{ color }}>
                <Icon />
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-900">{description}</p>
        </motion.div>
    );
}