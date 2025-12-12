// app/components/HeroWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import Hero from "./Hero";

export default function HeroWrapper() {
    const pathname = usePathname();
    return <Hero key={pathname} />;
}