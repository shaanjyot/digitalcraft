"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
        },
        {
            title: "What is the importance of a logo?",
            excerpt: "Learn why a well-designed logo is crucial for your brand identity and business success.",
            date: "January 4, 2024",
            readTime: "4 min read",
            category: "Branding",
            slug: "importance-of-logo",
        },
        {
            title: "Digital Transformation in 2024",
            excerpt: "Explore the latest trends and strategies for successful digital transformation in modern businesses.",
            date: "December 28, 2023",
            readTime: "6 min read",
            category: "Digital Strategy",
            slug: "digital-transformation-2024",
        },
    ];

    return (
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        Latest{" "}
                        <span className="bg-gradient-to-r from-[#0878b5] to-[#020c36] bg-clip-text text-transparent">
                            Blogs
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
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
                            className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
                        >
                            {/* Image Placeholder */}
                            <div className="relative h-48 bg-gradient-to-br from-[#0878b5] to-[#020c36] overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-white text-6xl font-bold opacity-20">
                                        {post.title.charAt(0)}
                                    </div>
                                </div>

                                {/* Category Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white px-4 py-2 rounded-full text-xs font-semibold">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Meta Info */}
                                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                                    <div className="flex items-center">
                                        <HiCalendar className="w-4 h-4 mr-1" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center">
                                        <HiClock className="w-4 h-4 mr-1" />
                                        {post.readTime}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                                    <Link href={`/blog/${post.slug}`}>
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
                                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:gap-2 transition-all duration-200"
                                >
                                    Read More
                                    <HiArrowRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
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
                        className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white bg-gradient-to-r from-[#0878b5] to-[#020c36] rounded-full hover:shadow-lg hover:shadow-[#0878b5]/50 transition-all duration-300"
                    >
                        View All Posts
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Blog;
