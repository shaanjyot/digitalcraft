"use client";

import { useEffect, useState, use } from "react";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";
import Link from "next/link";
import { HiArrowLeft, HiCalendar, HiClock, HiTag } from "react-icons/hi";
import { motion } from "framer-motion";

interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    cover_image: string;
    category: string;
    readTime: string;
    created_at: string;
    slug: string;
}

interface BlogPostPageProps {
    params: Promise<{ id: string }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
    const { id } = use(params);
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setLoading(true);

                // 1. Try fetching by slug
                let { data, error } = await supabase
                    .from("blogs")
                    .select("*")
                    .eq("slug", id)
                    .single();

                // 2. If not found, try fetching by UUID if id looks like one
                if ((!data || error) && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)) {
                    const idRes = await supabase
                        .from("blogs")
                        .select("*")
                        .eq("id", id)
                        .single();

                    if (idRes.data) {
                        data = idRes.data;
                        error = null;
                    }
                }

                if (error && !data) throw error;
                if (!data) throw new Error("Blog post not found.");

                // Map to safe interface
                const mappedPost: BlogPost = {
                    id: data.id,
                    title: data.title,
                    excerpt: data.excerpt,
                    content: data.content,
                    cover_image: data.cover_image,
                    slug: data.slug,
                    created_at: data.created_at,
                    category: data.category || "Web Development",
                    readTime: data.read_time || "5 min read",
                };

                setPost(mappedPost);

            } catch (err: any) {
                console.error("Fetch details error:", err);
                setError("Failed to load blog post.");
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchPost();
        }
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen pt-24 pb-12 flex items-center justify-center bg-[#F8FAFC]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3eb4d6]"></div>
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="min-h-screen pt-32 pb-12 bg-[#F8FAFC] text-center px-4 flex flex-col items-center justify-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                    <HiTag className="w-10 h-10 text-gray-300" />
                </div>
                <h1 className="text-3xl font-display font-bold text-[#5b6f73] mb-4">Post Not Found</h1>
                <p className="text-[#5b6f73]/60 mb-8 max-w-md">{error || "The blog post you are looking for might have been removed or renamed."}</p>
                <Link
                    href="/blog"
                    className="inline-flex items-center px-6 py-3 bg-[#3eb4d6] text-white font-bold rounded-full hover:bg-[#99f200] hover:text-[#5b6f73] transition-all"
                >
                    <HiArrowLeft className="mr-2" /> Back to Blogs
                </Link>
            </div>
        );
    }

    const displayDate = post.created_at ? new Date(post.created_at).toLocaleDateString() : "Recent";

    return (
        <main className="pt-28 pb-20 bg-[#F8FAFC] min-h-screen relative overflow-hidden font-sans">
            {/* Ambient Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none sticky top-0">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3eb4d6]/5 rounded-full blur-[100px] mix-blend-multiply opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#99f200]/5 rounded-full blur-[120px] mix-blend-multiply opacity-40"></div>
            </div>

            <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
                <Link
                    href="/blog"
                    className="inline-flex items-center text-sm font-bold text-[#5b6f73]/50 hover:text-[#3eb4d6] mb-8 transition-all hover:-translate-x-1 duration-300 uppercase tracking-widest"
                >
                    <HiArrowLeft className="mr-2 w-4 h-4" />
                    Back to Blogs
                </Link>

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Meta Tags */}
                    <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-[#5b6f73]/60 mb-6 uppercase tracking-[0.15em]">
                        <span className="bg-white text-[#3eb4d6] px-4 py-1.5 rounded-full flex items-center gap-2 border border-[#3eb4d6]/20 shadow-sm">
                            <HiTag className="w-3.5 h-3.5" />
                            {post.category}
                        </span>
                        <span className="flex items-center gap-2">
                            <HiCalendar className="w-3.5 h-3.5 text-[#3eb4d6]" />
                            {displayDate}
                        </span>
                        {post.readTime && (
                            <span className="flex items-center gap-2">
                                <HiClock className="w-3.5 h-3.5 text-[#3eb4d6]" />
                                {post.readTime}
                            </span>
                        )}
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-[#5b6f73] leading-[1.1] mb-10 tracking-tight">
                        {post.title}
                    </h1>
                </motion.div>

                {/* Featured Image */}
                {post.cover_image && (
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-full aspect-[16/9] rounded-[2rem] overflow-hidden mb-16 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white/50"
                    >
                        <Image
                            src={post.cover_image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#5b6f73]/20 to-transparent pointer-events-none"></div>
                    </motion.div>
                )}

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 sm:p-12 md:p-16 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.01)] border border-white/60"
                >
                    <div className="prose prose-lg prose-slate max-w-none 
                        prose-headings:font-display prose-headings:text-[#5b6f73] prose-headings:font-bold
                        prose-p:text-[#5b6f73]/80 prose-p:leading-8
                        prose-a:text-[#3eb4d6] prose-a:no-underline hover:prose-a:text-[#99f200] hover:prose-a:underline
                        prose-strong:text-[#5b6f73] prose-strong:font-bold
                        prose-blockquote:border-l-[#3eb4d6] prose-blockquote:bg-gray-50 prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl prose-blockquote:not-italic
                        whitespace-pre-wrap">
                        {post.content}
                    </div>

                    {/* Footer */}
                    <div className="mt-16 pt-10 border-t border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3eb4d6] to-[#99f200] flex items-center justify-center text-white font-bold text-xl font-display shadow-md shadow-[#3eb4d6]/20">
                                DC
                            </div>
                            <div>
                                <p className="text-sm font-bold text-[#5b6f73]">Digital Craft Consultants</p>
                                <p className="text-xs text-[#5b6f73]/60">Written by the Team</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </article>
        </main>
    );
}
