"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HiArrowRight, HiCalendar, HiClock } from "react-icons/hi";

const Blog = () => {
    const posts = [
        {
            title: "The five C's to remember while building a website",
            excerpt: "Discover the essential principles that make a website successful - from Content to Conversion.",
            date: "January 4, 2024",
            readTime: "5 min read",
            category: "Web Development",
            slug: "five-cs-building-website",
            image: "/blog-web-dev.jpg",
        },
        {
            title: "What is the importance of a logo?",
            excerpt: "Learn why a well-designed logo is crucial for your brand identity and business success.",
            date: "January 4, 2024",
            readTime: "4 min read",
            category: "Branding",
            slug: "importance-of-logo",
            image: "/blog-digital.jpg",
        },
        {
            title: "Digital Transformation in 2024",
            excerpt: "Explore the latest trends and strategies for successful digital transformation in modern businesses.",
            date: "December 28, 2023",
            readTime: "6 min read",
            category: "Digital Strategy",
            slug: "digital-transformation-2024",
            image: "/blog-branding.jpg",
        },
    ];

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
                    {posts.map((post, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group bg-white rounded-2xl border border-gray-100 overflow-hidden premium-shadow"
                        >
                            {/* Image Placeholder */}
                            <div className="relative h-48 bg-gray-50 overflow-hidden group-hover:opacity-90 transition-opacity duration-300">
                                {post.image ? (
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-[#3eb4d6] text-8xl font-display font-bold opacity-10">
                                            {post.title.charAt(0)}
                                        </div>
                                    </div>
                                )}
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 text-[#3eb4d6] px-4 py-1.5 rounded-full text-xs font-bold shadow-sm uppercase tracking-wider">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Meta Info */}
                                <div className="flex items-center space-x-4 text-xs font-medium text-[#5b6f73]/50 mb-4 uppercase tracking-widest">
                                    <div className="flex items-center">
                                        <HiCalendar className="w-4 h-4 mr-1.5 text-[#3eb4d6]/60" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center">
                                        <HiClock className="w-4 h-4 mr-1.5 text-[#3eb4d6]/60" />
                                        {post.readTime}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold mb-3 text-[#5b6f73] group-hover:text-[#3eb4d6] transition-colors duration-200">
                                    <Link href={`/blog/${post.slug}`} className="hover:text-[#99f200] transition-colors duration-300">
                                        {post.title}
                                    </Link>
                                </h3>

                                {/* Excerpt */}
                                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                    {post.excerpt}
                                </p>

                                {/* Read More Link */}
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="inline-flex items-center text-[#3eb4d6] font-bold text-sm hover:gap-3 hover:text-[#99f200] transition-all duration-200 uppercase tracking-widest"
                                >
                                    Read More
                                    <HiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
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
