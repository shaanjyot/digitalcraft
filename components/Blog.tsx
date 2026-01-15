"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HiArrowRight, HiCalendar, HiClock, HiOutlineDocumentText } from "react-icons/hi";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface BlogPost {
    title: string;
    excerpt: string;
    created_at?: string;
    readTime: string;
    category: string;
    slug?: string;
    id?: string;
    cover_image: string;
}

const Blog = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // Fetch directly from Supabase instead of API route to avoid 404/500 issues
                const { data, error } = await supabase
                    .from('blogs')
                    .select('*')
                    .order('created_at', { ascending: false })
                    .limit(3);

                if (error) {
                    throw error;
                }

                if (data) {
                    setPosts(data as BlogPost[]);
                }
            } catch (error) {
                console.error("Failed to fetch blogs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    // Placeholder loading skeleton
    if (loading) {
        return (
            <section className="py-24 bg-gray-50 relative overflow-hidden">
                <div className="container mx-auto px-4 flex justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3eb4d6]"></div>
                </div>
            </section>
        );
    }

    // Hide section if no posts
    if (!loading && posts.length === 0) {
        return null;
    }

    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Subtle Greyish Background Overlay */}
            <div className="absolute inset-0 bg-[#5b6f73]/5 pointer-events-none"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[#5b6f73]">
                        Latest{" "}
                        <span className="text-[#3eb4d6]">
                            Blogs
                        </span>
                    </h2>
                    <p className="text-lg text-[#5b6f73]/70 max-w-2xl mx-auto">
                        Insights, tips, and updates from our team of experts
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {posts.map((post, index) => {
                        const id = post.id;
                        // Fallback logic for date
                        const displayDate = post.created_at ? new Date(post.created_at).toLocaleDateString() : "Recent";
                        // Fallback for slug -> assume we use legacy ID routing if slug is missing, but prefer slug
                        const linkHref = post.slug ? `/blog/${post.slug}` : `/blog/${id}`;

                        return (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden premium-shadow flex flex-col h-full"
                            >
                                {/* Image Placeholder */}
                                <div className="relative h-48 bg-gray-50 overflow-hidden group-hover:opacity-90 transition-opacity duration-300">
                                    {post.cover_image ? (
                                        <Image
                                            src={post.cover_image}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                                            <HiOutlineDocumentText className="text-gray-300 w-16 h-16" />
                                        </div>
                                    )}
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 text-[#3eb4d6] px-4 py-1.5 rounded-full text-xs font-bold shadow-sm uppercase tracking-wider">
                                            {/* Static category for now if DB doesn't have it, or fetch if available */}
                                            {post.category || "General"}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    {/* Meta Info */}
                                    <div className="flex items-center space-x-4 text-xs font-medium text-[#5b6f73]/50 mb-4 uppercase tracking-widest">
                                        <div className="flex items-center">
                                            <HiCalendar className="w-4 h-4 mr-1.5 text-[#3eb4d6]/60" />
                                            {displayDate}
                                        </div>
                                        {post.readTime && (
                                            <div className="flex items-center">
                                                <HiClock className="w-4 h-4 mr-1.5 text-[#3eb4d6]/60" />
                                                {post.readTime}
                                            </div>
                                        )}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold mb-3 text-[#5b6f73] group-hover:text-[#3eb4d6] transition-colors duration-200 line-clamp-2">
                                        <Link href={linkHref} className="hover:text-[#99f200] transition-colors duration-300">
                                            {post.title}
                                        </Link>
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    {/* Spacer to push button down */}
                                    <div className="mt-auto pt-4">
                                        {/* Read More Link */}
                                        <Link
                                            href={linkHref}
                                            className="inline-flex items-center text-[#3eb4d6] font-bold text-sm hover:gap-3 hover:text-[#99f200] transition-all duration-200 uppercase tracking-widest"
                                        >
                                            Read More
                                            <HiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <Link
                        href="/blog"
                        className="inline-flex items-center justify-center px-10 py-4 font-semibold text-white bg-[#3eb4d6] rounded-full hover:bg-[#99f200] hover:text-[#5b6f73] transition-all duration-300 shadow-md shadow-[#3eb4d6]/20"
                    >
                        View All Posts
                    </Link>
                </motion.div>
            </div>
        </section >
    );
};

export default Blog;
