"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const pathname = usePathname();
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            // Always allow access to the login page
            if (pathname === "/admin/login") {
                setIsAuthorized(true);
                return;
            }

            const { data: { session } } = await supabase.auth.getSession();

            if (!session) {
                // Redirect unauthenticated users to login
                router.replace("/admin/login");
            } else {
                // Allow access if authenticated
                setIsAuthorized(true);
            }
        };

        checkAuth();
    }, [router, pathname]);

    // Prevent flashing of protected content
    if (!isAuthorized) {
        return null;
    }

    return <>{children}</>;
}
