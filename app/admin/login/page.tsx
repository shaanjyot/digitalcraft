"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { HiLockClosed } from "react-icons/hi";

export default function AdminLoginPage() {
    const router = useRouter();
    const { login } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            await login(email, password);
            router.push("/admin/dashboard");
        } catch (err: any) {
            setError(err.message || "Invalid credentials. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen pt-20 flex items-center justify-center bg-gray-50 px-4">
            {/* Background decoration matching existing design */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#3eb4d6]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#99f200]/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative w-full max-w-md">
                <div className="premium-card p-8 sm:p-10">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#3eb4d6]/10 text-[#3eb4d6] mb-4">
                            <HiLockClosed className="w-6 h-6" />
                        </div>
                        <h1 className="text-3xl font-display font-bold text-[#5b6f73]">
                            Admin <span className="text-[#3eb4d6]">Login</span>
                        </h1>
                        <p className="mt-2 text-sm text-[#5b6f73]/60">
                            Sign in to manage your content
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                            <div className="p-4 rounded-lg bg-red-50 border border-red-100 text-red-600 text-sm font-medium">
                                {error}
                            </div>
                        )}

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-[#5b6f73] mb-2">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#3eb4d6] focus:ring-2 focus:ring-[#3eb4d6]/20 outline-none transition-all text-[#5b6f73]"
                                placeholder="name@company.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-[#5b6f73] mb-2">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#3eb4d6] focus:ring-2 focus:ring-[#3eb4d6]/20 outline-none transition-all text-[#5b6f73]"
                                placeholder="••••••••"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3.5 px-4 bg-[#3eb4d6] hover:bg-[#99f200] text-white hover:text-[#5b6f73] font-bold rounded-xl transition-all duration-300 shadow-md shadow-[#3eb4d6]/20 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            {loading ? (
                                <span className="flex items-center gap-2">
                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Signing in...
                                </span>
                            ) : (
                                "Sign In"
                            )}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <Link href="/" className="text-sm text-[#5b6f73]/50 hover:text-[#3eb4d6] transition-colors">
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
