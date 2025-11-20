"use client";

import { motion } from "framer-motion";
import React from "react";

export default function HoverCardOverlay({
                                             children,
                                             text,
                                         }: {
    children: React.ReactNode;
    text: string;
}) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
        >
            {/* Imagen */}
            <div className="w-full h-full">{children}</div>

            {/* Overlay al pasar el mouse */}
            <div
                className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100
                transition-all duration-300 flex items-center justify-center p-4"
            >
                <p className="text-white text-lg font-semibold text-center">
                    {text}
                </p>
            </div>

            {/* Zoom suave */}
            <div
                className="absolute inset-0 scale-100 group-hover:scale-110 transition-transform duration-500"
            />
        </motion.div>
    );
}