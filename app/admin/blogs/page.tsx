"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import { HiPlus, HiPencil, HiTrash, HiOutlineDocumentText, HiSearch, HiArrowLeft } from "react-icons/hi";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    cover_image: string;
    category: string;
    created_at: string;
}

export default function AdminBlogsPage() {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchBlogs = async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from("blogs")
                .select("*")
                .order("created_at", { ascending: false });

            if (error) throw error;
            setBlogs(data || []);
        } catch (err: any) {
            console.error("Failed to fetch blogs:", err);
            setError("Failed to load blogs. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this blog post? This action cannot be undone.")) return;

        try {
            const { error } = await supabase
                .from("blogs")
                .delete()
                .eq("id", id);

            if (error) throw error;
            setBlogs((prev) => prev.filter((blog) => blog.id !== id));
        } catch (err: any) {
            alert("Failed to delete blog: " + (err.message || "Unknown error"));
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.05 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    if (loading) {
        return (
            <div className="min-h-screen pt-24 pb-12 flex items-center justify-center bg-[#F8FAFC]">
                <div className="flex flex-col items-center gap-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#3eb4d6]/20 border-t-[#3eb4d6]"></div>
                    <span className="text-[#5b6f73]/50 font-medium text-sm animate-pulse">Loading Asset Manager...</span>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen pt-28 pb-12 bg-[#F8FAFC] relative overflow-hidden font-sans">
            {/* Ambient Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none sticky top-0">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3eb4d6]/5 rounded-full blur-[100px] mix-blend-multiply opacity-50"></div>
                <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-[#99f200]/5 rounded-full blur-[120px] mix-blend-multiply opacity-40"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
                {/* Header & Actions */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-8">
                    <div>
                        <Link href="/admin/dashboard" className="inline-flex items-center text-sm font-bold text-[#5b6f73]/40 hover:text-[#3eb4d6] mb-4 transition-colors">
                            <HiArrowLeft className="mr-2" /> Dashboard
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-[#5b6f73] tracking-tight">
                            Manage <span className="text-[#3eb4d6]">Blogs</span>
                        </h1>
                        <p className="mt-3 text-lg text-[#5b6f73]/70 font-medium">
                            {blogs.length} posts published
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 items-center">
                        {/* Search Placeholder (Visual Only) */}
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <HiSearch className="h-5 w-5 text-gray-400 group-focus-within:text-[#3eb4d6] transition-colors" />
                            </div>
                            <input
                                type="text"
                                className="block w-full md:w-64 pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-full text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3eb4d6]/20 focus:border-[#3eb4d6] transition-all shadow-sm"
                                placeholder="Search posts..."
                                readOnly
                            />
                        </div>

                        <Link
                            href="/admin/blogs/new"
                            className="inline-flex items-center justify-center px-8 py-3 bg-[#3eb4d6] hover:bg-[#99f200] text-white hover:text-[#5b6f73] font-bold rounded-full transition-all duration-300 shadow-lg shadow-[#3eb4d6]/20 hover:shadow-xl hover:-translate-y-0.5 gap-2"
                        >
                            <HiPlus className="w-5 h-5" />
                            Create New
                        </Link>
                    </div>
                </div>

                {error && (
                    <div className="p-4 mb-8 bg-red-50 border border-red-100 text-red-600 rounded-2xl flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        {error}
                    </div>
                )}

                {/* Empty State */}
                {!loading && blogs.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-32 bg-white/50 backdrop-blur-sm rounded-[2.5rem] border border-dashed border-gray-200"
                    >
                        <div className="w-24 h-24 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-6 text-gray-300 shadow-inner">
                            <HiOutlineDocumentText className="w-12 h-12" />
                        </div>
                        <h3 className="text-xl font-bold text-[#5b6f73] mb-2">No blogs found</h3>
                        <p className="text-[#5b6f73]/60 mb-8 max-w-sm mx-auto">Your blog is currently empty. Start writing your first story today.</p>
                        <Link
                            href="/admin/blogs/create"
                            className="inline-flex items-center text-[#3eb4d6] font-bold hover:text-[#99f200] transition-colors"
                        >
                            <HiPlus className="mr-2 w-5 h-5" /> Create First Post
                        </Link>
                    </motion.div>
                )}

                {/* Blog Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20"
                >
                    <AnimatePresence>
                        {blogs.map((blog) => (
                            <motion.div
                                key={blog.id}
                                variants={itemVariants}
                                layout
                                className="group bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-[0_4px_20px_-5px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-10px_rgba(62,180,214,0.15)] hover:border-[#3eb4d6]/30 transition-all duration-500 flex flex-col h-full hover:-translate-y-1"
                            >
                                {/* Image */}
                                <div className="relative h-60 bg-gray-100 overflow-hidden">
                                    {blog.cover_image ? (
                                        <>
                                            <Image
                                                src={blog.cover_image}
                                                alt={blog.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
                                        </>
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-300 bg-gray-50">
                                            <HiOutlineDocumentText className="w-12 h-12 opacity-50" />
                                        </div>
                                    )}

                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/95 backdrop-blur-md text-[#3eb4d6] px-4 py-1.5 rounded-full text-xs font-bold shadow-sm uppercase tracking-wider border border-white/50">
                                            {/* Category likely not in sample schema, defaulting or adding if needed. Re-checking request... Schema had title, slug, excerpt, content, cover_image. I should add 'Web Dev' mock or migration */}
                                            {/* Wait, user request didn't list Category column? "id, title, slug, excerpt, content, cover_image, created_at". */}
                                            {/* I will allow category if it exists or fallback */}
                                            {blog.category || "General"}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-1">
                                    <div className="mb-auto">
                                        <div className="text-xs font-bold text-[#5b6f73]/40 mb-3 uppercase tracking-wider flex items-center gap-2">
                                            {blog.created_at ? new Date(blog.created_at).toLocaleDateString() : "Draft"}
                                        </div>
                                        <h3 className="text-xl font-bold text-[#5b6f73] mb-3 line-clamp-2 leading-tight group-hover:text-[#3eb4d6] transition-colors">
                                            {blog.title}
                                        </h3>
                                        <p className="text-sm text-[#5b6f73]/60 line-clamp-3 leading-relaxed">
                                            {blog.excerpt}
                                        </p>
                                    </div>

                                    {/* Actions */}
                                    <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between gap-3">
                                        <Link
                                            href={`/admin/blogs/edit/${blog.id}`}
                                            className="flex-1 inline-flex items-center justify-center py-2.5 rounded-xl bg-gray-50 text-[#5b6f73] font-bold text-sm hover:bg-[#3eb4d6] hover:text-white transition-all duration-200 group/edit"
                                        >
                                            <HiPencil className="w-4 h-4 mr-2 group-hover/edit:scale-110 transition-transform" />
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(blog.id)}
                                            className="p-2.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200"
                                            title="Delete"
                                        >
                                            <HiTrash className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </main>
    );
}
