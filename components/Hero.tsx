"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiArrowRight, HiSparkles } from "react-icons/hi";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#3eb4d6]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#99f200]/5 rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Content */}
                    <div className="max-w-2xl relative">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Badge */}
                            <div className="inline-flex items-center space-x-2 bg-gray-50 text-[#3eb4d6] px-5 py-2 rounded-full mb-8 border border-gray-100">
                                <HiSparkles className="w-4 h-4 text-[#99f200]" />
                                <span className="text-sm font-semibold tracking-wide uppercase">Digital Transformation Experts</span>
                            </div>

                            {/* Main Heading */}
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6 leading-[0.85] sm:leading-tight text-left">
                                <span className="text-[#3eb4d6]">
                                    Fuelling
                                </span>{" "}
                                <span className="text-[#5b6f73]">Innovation</span>
                                <br />
                                <span className="text-[#5b6f73]/80">go digital</span>
                            </h1>

                            {/* Subheading */}
                            <p className="text-lg sm:text-xl text-[#5b6f73]/80 mb-12 leading-relaxed text-left max-w-xl">
                                We are a Digital Transformation Consultancy based out of Canberra.
                                We help you design world-class solutions and create a strong online presence.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <Link
                                    href="/contact"
                                    className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-bold text-white bg-[#3eb4d6] rounded-full shadow-lg shadow-[#3eb4d6]/20 transition-all duration-300"
                                >
                                    <span className="absolute inset-0 w-full h-full bg-[#99f200] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    <span className="relative flex items-center group-hover:text-[#5b6f73]">
                                        Get Started
                                        <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                    </span>
                                </Link>

                                <Link
                                    href="/about"
                                    className="inline-flex items-center justify-center px-8 py-4 font-semibold text-[#5b6f73] bg-white border border-gray-200 rounded-full hover:border-[#99f200] hover:text-[#5b6f73] transition-all duration-300 shadow-sm"
                                >
                                    Learn More
                                </Link>
                            </div>

                            {/* Stats */}
                            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
                                {[
                                    { label: "Projects Completed", value: "100+" },
                                    { label: "Happy Clients", value: "50+" },
                                    { label: "Years Experience", value: "8+" },
                                    { label: "Support Available", value: "24/7" },
                                ].map((stat, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                                        className="relative group text-center p-8 rounded-[2rem] bg-white border border-gray-100 premium-shadow hover:border-[#3eb4d6]/30 transition-all duration-500"
                                    >
                                        <div className="absolute inset-0 bg-[#3eb4d6]/5 opacity-0 group-hover:opacity-100 rounded-[2rem] transition-opacity duration-500"></div>
                                        <div className="relative text-3xl sm:text-4xl font-display font-bold text-[#3eb4d6] mb-2">{stat.value}</div>
                                        <div className="relative text-[10px] text-[#5b6f73] font-bold uppercase tracking-[0.2em]">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-full h-full flex items-center justify-center"
                    >
                        {/* Animated Background Dots - Behind Image */}
                        <div className="absolute inset-0 flex items-end justify-center opacity-50 dark:opacity-40 pointer-events-none z-0">
                            {/* Vertical columns of dots */}
                            <div className="flex gap-8 mb-8">
                                {/* First vertical column */}
                                <div className="flex flex-col gap-6">
                                    {[...Array(5)].map((_, i) => (
                                        <motion.div
                                            key={`col1-${i}`}
                                            className="w-2 h-2 rounded-full bg-[#3eb4d6]"
                                            animate={{
                                                scale: [1, 1.2, 1],
                                                opacity: [0.5, 0.8, 0.5],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: i * 0.2,
                                            }}
                                        />
                                    ))}
                                </div>
                                {/* Second vertical column */}
                                <div className="flex flex-col gap-6">
                                    {[...Array(5)].map((_, i) => (
                                        <motion.div
                                            key={`col2-${i}`}
                                            className={`w-2 h-2 rounded-full ${i % 2 === 0 ? "bg-[#3eb4d6]" : "bg-[#99f200]"}`}
                                            animate={{
                                                scale: [1, 1.2, 1],
                                                opacity: [0.5, 0.8, 0.5],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: (i + 0.5) * 0.2,
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                            {/* Horizontal rows of dots */}
                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-6 translate-x-12">
                                {[...Array(3)].map((_, i) => (
                                    <motion.div
                                        key={`row1-${i}`}
                                        className={`w-2 h-2 rounded-full ${i % 2 === 0 ? "bg-[#3eb4d6]" : "bg-[#99f200]"}`}
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            opacity: [0.5, 0.8, 0.5],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.15,
                                        }}
                                    />
                                ))}
                            </div>
                            <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-6 translate-x-12">
                                {[...Array(3)].map((_, i) => (
                                    <motion.div
                                        key={`row2-${i}`}
                                        className="w-2 h-2 rounded-full bg-[#3eb4d6]"
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            opacity: [0.5, 0.8, 0.5],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: (i + 0.3) * 0.15,
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="relative w-full max-w-md mx-auto z-10">
                            {/* Decorative Container/Card Effect */}
                            <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl transform rotate-6 scale-105 z-0 border border-gray-100"></div>
                            <div className="absolute inset-0 bg-[#3eb4d6]/10 rounded-2xl transform -rotate-6 scale-105 z-0"></div>

                            <Image
                                src="/herodgc.webp"
                                alt="Digital Transformation"
                                width={400}
                                height={500}
                                className="relative rounded-2xl object-cover shadow-2xl z-10 bg-white"
                                priority
                            />
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
                <div className="w-6 h-10 border border-gray-200 rounded-full flex justify-center">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1 h-2 bg-[#3eb4d6] rounded-full mt-2"
                    ></motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
