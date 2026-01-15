"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { HiLogout, HiOutlineViewGrid, HiOutlineDocumentText } from "react-icons/hi";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AdminDashboardPage() {
    const { logout } = useAuth();
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push("/admin/login");
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <main className="min-h-screen pt-28 pb-12 bg-[#F8FAFC] relative overflow-hidden font-sans">
            {/* Ambient Background - Premium Feel */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none sticky top-0">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#3eb4d6]/5 rounded-full blur-[120px] mix-blend-multiply opacity-70"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#99f200]/5 rounded-full blur-[100px] mix-blend-multiply opacity-60"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
                >
                    <div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-[#5b6f73] tracking-tight">
                            Admin <span className="text-[#3eb4d6]">Dashboard</span>
                        </h1>
                        <p className="mt-4 text-lg text-[#5b6f73]/70 font-medium max-w-xl leading-relaxed">
                            Welcome back. Access your management tools and oversee your digital platform from one central hub.
                        </p>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleLogout}
                        className="inline-flex items-center justify-center px-8 py-4 bg-white border border-gray-200 text-[#5b6f73] font-bold rounded-2xl transition-all duration-300 shadow-sm hover:shadow-xl hover:bg-white hover:text-[#FF4D4D] hover:border-[#FF4D4D]/20 gap-3 group"
                    >
                        <HiLogout className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span>Sign Out</span>
                    </motion.button>
                </motion.div>

                {/* Dashboard Options Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {/* Blog Management Card - Primary Action */}
                    <motion.div variants={itemVariants} className="h-full">
                        <Link href="/admin/blogs" className="block h-full">
                            <div className="h-full bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(62,180,214,0.15)] hover:border-[#3eb4d6]/30 transition-all duration-500 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 transform group-hover:scale-110 group-hover:rotate-12">
                                    <HiOutlineDocumentText className="w-48 h-48 text-[#3eb4d6]" />
                                </div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#3eb4d6]/10 to-[#3eb4d6]/20 rounded-2xl text-[#3eb4d6] mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-inner">
                                        <HiOutlineViewGrid className="w-8 h-8" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-[#5b6f73] mb-4 group-hover:text-[#3eb4d6] transition-colors">Manage Blogs</h3>
                                    <p className="text-[#5b6f73]/60 mb-8 leading-relaxed text-base flex-grow">
                                        Create compelling stories, edit existing posts, and manage your content strategy with ease.
                                    </p>

                                    <div className="flex items-center font-bold text-[#3eb4d6] group-hover:text-[#99f200] transition-colors gap-2 mt-auto">
                                        Access Blog Manager <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Placeholder for Analytics/Future */}
                    <motion.div variants={itemVariants} className="h-full opacity-60">
                        <div className="h-full bg-gray-50/80 p-10 rounded-[2.5rem] border border-dashed border-gray-200 flex flex-col items-start cursor-not-allowed">
                            <div className="w-16 h-16 flex items-center justify-center bg-gray-200/50 rounded-2xl text-gray-400 mb-8">
                                <HiOutlineDocumentText className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-400 mb-4">Analytics</h3>
                            <p className="text-gray-400/80 mb-8 leading-relaxed">
                                Detailed insights and performance metrics coming soon.
                            </p>
                            <div className="mt-auto px-4 py-1.5 bg-gray-200 rounded-full text-xs font-bold text-gray-400 uppercase tracking-wider">
                                In Development
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </main>
    );
}
