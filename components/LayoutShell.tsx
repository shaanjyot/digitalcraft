"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface LayoutShellProps {
    children: ReactNode;
    header: ReactNode;
    footer: ReactNode;
}

export function LayoutShell({ children, header, footer }: LayoutShellProps) {
    const pathname = usePathname();

    // Define routes where header and footer should be hidden (using exact or prefix matching as needed)
    const isExcludedRoute = pathname?.startsWith("/admin");

    if (isExcludedRoute) {
        return <>{children}</>;
    }

    return (
        <>
            {header}
            {children}
            {footer}
        </>
    );
}
