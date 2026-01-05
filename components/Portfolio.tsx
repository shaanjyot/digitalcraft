"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";

const Portfolio = () => {
    const projects = [
        {
            title: "Professional Healthcare Solution",
            category: "Healthcare Platform",
            description: "A comprehensive healthcare management system with patient portals and appointment scheduling.",
            image: "/projects/healthcare.jpg",
            link: "https://professionalhealthcare.com.au/",
            tags: ["Web Development", "UI/UX", "Healthcare"],
        },
        {
            title: "Spicerack Foods",
            category: "E-Commerce",
            description: "Modern e-commerce platform for gourmet spices and food products with seamless shopping experience.",
            image: "/projects/spicerack.jpg",
            link: "https://spicerackfoods.com.au/",
            tags: ["E-Commerce", "Shopify", "Branding"],
        },
        {
            title: "Community Cafe",
            category: "Restaurant & Hospitality",
            description: "Engaging website for a community cafe featuring online ordering and event management.",
            image: "/projects/cafe.jpg",
            link: "https://communitycafe.com.au/",
            tags: ["Web Design", "Online Ordering", "SEO"],
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-[#0878b5] to-[#020c36] bg-clip-text text-transparent">
                            Recent Works
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Here are some of our favorite projects we have done lately
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="relative h-64 bg-gradient-to-br from-[#0878b5] to-[#020c36] overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20">
                                    {project.title.charAt(0)}
                                </div>
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>

                                {/* Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:bg-gray-100 transition-colors duration-200"
                                    >
                                        <span>View Project</span>
                                        <HiExternalLink className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">
                                    {project.category}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
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
                        href="/portfolio"
                        className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white bg-gradient-to-r from-[#0878b5] to-[#020c36] rounded-full hover:shadow-lg hover:shadow-[#0878b5]/50 transition-all duration-300"
                    >
                        View All Projects
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;
