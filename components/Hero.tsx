"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowRight, HiSparkles } from "react-icons/hi";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-teal-950/20">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-400/10 to-accent-400/10 rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-5 py-2.5 rounded-full mb-8 border border-primary-200 dark:border-primary-800">
                            <HiSparkles className="w-4 h-4" />
                            <span className="text-sm font-semibold">Digital Transformation Experts</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
                            <span className="bg-gradient-to-r from-[#0878b5] to-[#020c36] bg-clip-text text-transparent">
                                Fuelling Innovation
                            </span>
                            <br />
                            <span className="text-gray-950 dark:text-white">go digital</span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                            We are a Digital Transformation Consultancy based out of Canberra.
                            We help you design world-class solutions and create a strong online presence.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-semibold text-white transition-all duration-300 bg-gradient-to-r from-[#0878b5] to-[#020c36] rounded-full shadow-lg shadow-[#0878b5]/30 hover:shadow-xl hover:shadow-[#0878b5]/40 hover:scale-105"
                            >
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#020c36] to-[#0878b5] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                <span className="relative flex items-center">
                                    Get Started
                                    <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                            </Link>

                            <Link
                                href="/about"
                                className="inline-flex items-center justify-center px-8 py-4 font-semibold text-gray-800 dark:text-gray-300 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-full hover:border-purple-500 dark:hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Learn More
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { number: "100+", label: "Projects Completed" },
                                { number: "50+", label: "Happy Clients" },
                                { number: "8+", label: "Years Experience" },
                                { number: "24/7", label: "Support Available" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                                    className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
                                >
                                    <div className="text-3xl sm:text-4xl font-display font-bold bg-gradient-to-r from-[#0878b5] to-[#020c36] bg-clip-text text-transparent mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-gray-700 dark:text-gray-400 font-medium">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-3 bg-gradient-to-b from-[#0878b5] to-[#020c36] rounded-full mt-2"
                    ></motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
