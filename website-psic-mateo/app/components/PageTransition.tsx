"use client";

import { ReactNode, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    useLayoutEffect(() => {
        if (pathname === "/") {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    return (
        <div className="animate-page-fade">
            {children}
        </div>
    );
}