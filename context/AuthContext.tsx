"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Session } from "@supabase/supabase-js";

interface AuthContextType {
    session: Session | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    isLoading: boolean;
    token: string | null; // Kept for interface compatibility
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEY = "auth_token"; // We still use this for middleware/API compatibility

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [session, setSession] = useState<Session | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Initial load and subscription
    useEffect(() => {
        const initializeAuth = async () => {
            try {
                // Get initial session
                const { data: { session: initialSession } } = await supabase.auth.getSession();
                setSession(initialSession);

                // If session exists, sync cookie for middleware
                if (initialSession?.access_token) {
                    document.cookie = `${STORAGE_KEY}=${initialSession.access_token}; path=/; max-age=${initialSession.expires_in}; SameSite=Lax`;
                }
            } catch (error) {
                console.error("Auth init error:", error);
            } finally {
                setIsLoading(false);
            }
        };

        initializeAuth();

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, newSession) => {
            setSession(newSession);
            setIsLoading(false);

            if (newSession?.access_token) {
                // Update cookie
                document.cookie = `${STORAGE_KEY}=${newSession.access_token}; path=/; max-age=${newSession.expires_in}; SameSite=Lax`;
            } else if (_event === 'SIGNED_OUT') {
                // Remove cookie
                document.cookie = `${STORAGE_KEY}=; path=/; max-age=0`;
            }
        });

        return () => subscription.unsubscribe();
    }, []);

    const login = async (email: string, password: string) => {
        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;

            // Session state is handled by the onAuthStateChange listener
        } catch (error) {
            console.error("Login failed:", error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await supabase.auth.signOut();
            // Clean up cookie manually just in case listener is slow
            document.cookie = `${STORAGE_KEY}=; path=/; max-age=0`;
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    const value = {
        session,
        isAuthenticated: !!session,
        login,
        logout,
        isLoading,
        token: session?.access_token || null, // Backwards compatibility for components using `token`
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
