"use client";

import dynamic from "next/dynamic";

const CTA = dynamic(() => import("./CTA"), {
    ssr: false,
});

export default function CTAClient() {
    return <CTA />;
}