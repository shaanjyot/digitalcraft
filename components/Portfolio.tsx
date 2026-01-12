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
            description: "A comprehensive healthcare management system with patient portals and appointments scheduling.",
            image: "/healthcare-preview.png",
            link: "https://professionalhealthcare.com.au/",
            tags: ["Web Development", "UI/UX", "Healthcare"],
        },
        {
            title: "Spicerack Foods",
            category: "E-Commerce",
            description: "Modern e-commerce platform for gourmet spices and food products with seamless shopping experience.",
            image: "/spicerack-preview.png",
            link: "https://spicerackfoods.com.au/",
            tags: ["E-Commerce", "Shopify", "Branding"],
        },
        {
            title: "Community Cafe",
            category: "Restaurant & Hospitality",
            description: "Engaging website for a community cafe featuring online ordering and event management.",
            image: "/community-cafe-preview.png",
            link: "https://communitycafe.com.au/",
            tags: ["Web Design", "Online Ordering", "SEO"],
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        <span className="text-[#3eb4d6]">
                            Recent
                        </span>{" "}
                        <span className="text-[#5b6f73]">Works</span>
                    </h2>
                    <p className="text-lg text-[#5b6f73]/70 max-w-2xl mx-auto">
                        A showcase of our digital excellence and innovative solutions
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
                            className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 premium-shadow"
                        >
                            {/* Image */}
                            <div className="relative h-64 bg-gray-50 overflow-hidden">
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-[#3eb4d6] text-8xl font-display font-bold opacity-10">
                                        {project.title.charAt(0)}
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>

                                {/* Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-[#3eb4d6] text-white px-6 py-3 rounded-full font-bold flex items-center space-x-2 hover:bg-white hover:text-[#3eb4d6] transition-all duration-300 shadow-md"
                                    >
                                        <span>View Project</span>
                                        <HiExternalLink className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="text-sm text-[#3eb4d6] font-semibold mb-2 uppercase tracking-wider">
                                    {project.category}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-[#5b6f73]">
                                    {project.title}
                                </h3>
                                <p className="text-[#5b6f73]/70 text-sm leading-relaxed">
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
                        className="inline-flex items-center justify-center px-10 py-4 font-semibold text-white bg-[#3eb4d6] rounded-full hover:bg-[#3eb4d6]/90 transition-all duration-300 shadow-md shadow-[#3eb4d6]/20"
                    >
                        View All Projects
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;
