"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

const CTA = () => {
    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0878b5] to-[#020c36]">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -left-48 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            {/* Content */}
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-8">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                        <span className="text-sm font-medium">Let's Work Together</span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Have a Project in Mind?
                    </h2>

                    {/* Subheading */}
                    <p className="text-xl sm:text-2xl text-white/90 mb-12 leading-relaxed">
                        Let's Talk! We're here to help you transform your ideas into reality.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-semibold text-blue-600 bg-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            <span className="relative flex items-center">
                                Get In Touch
                                <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                        </Link>

                        <Link
                            href="/portfolio"
                            className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full hover:bg-white/20 transition-all duration-300"
                        >
                            View Our Work
                        </Link>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
                        <div className="space-y-2">
                            <div className="text-sm opacity-80">Email Us</div>
                            <a
                                href="mailto:info@digitalcraftconsult.com.au"
                                className="text-lg font-semibold hover:underline"
                            >
                                info@digitalcraftconsult.com.au
                            </a>
                        </div>
                        <div className="space-y-2">
                            <div className="text-sm opacity-80">Call Us</div>
                            <a
                                href="tel:+61234567890"
                                className="text-lg font-semibold hover:underline"
                            >
                                +61 234 567 890
                            </a>
                        </div>
                        <div className="space-y-2">
                            <div className="text-sm opacity-80">Visit Us</div>
                            <div className="text-lg font-semibold">
                                Canberra, Australia
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
