"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

const CTA = () => {
    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background with Brand Color */}
            <div className="absolute inset-0 bg-white">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]"></div>
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#3eb4d6]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#99f200]/5 rounded-full blur-3xl"></div>
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
                    <div className="inline-flex items-center space-x-2 bg-gray-50 text-[#3eb4d6] px-5 py-2 rounded-full mb-8 border border-gray-100">
                        <span className="w-2 h-2 bg-[#99f200] rounded-full animate-pulse"></span>
                        <span className="text-sm font-bold uppercase tracking-wider">Let's Work Together</span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold mb-8 leading-tight">
                        <span className="text-[#3eb4d6]">Have a</span>{" "}
                        <span className="text-[#5b6f73]">Project?</span>
                    </h2>

                    {/* Subheading */}
                    <p className="text-lg sm:text-xl text-[#5b6f73]/70 mb-12 leading-relaxed">
                        Let's Talk! We're here to help you transform your ideas into reality.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-bold text-white bg-[#3eb4d6] rounded-full shadow-md shadow-[#3eb4d6]/20 transition-all duration-300"
                        >
                            <span className="absolute inset-0 w-full h-full bg-[#99f200] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            <span className="relative flex items-center group-hover:text-[#5b6f73]">
                                Get In Touch
                                <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                        </Link>

                        <Link
                            href="/portfolio"
                            className="inline-flex items-center justify-center px-10 py-4 font-semibold text-[#5b6f73] bg-white border border-gray-200 rounded-full hover:border-[#99f200] hover:text-[#5b6f73] transition-all duration-300 shadow-sm"
                        >
                            View Our Work
                        </Link>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-[#5b6f73]">
                        <div className="space-y-2">
                            <div className="text-xs font-bold uppercase tracking-widest text-[#5b6f73]/50">Email Us</div>
                            <a
                                href="mailto:info@digitalcraftconsult.com.au"
                                className="text-lg font-bold hover:text-[#99f200] transition-colors"
                            >
                                info@digitalcraftconsult.com.au
                            </a>
                        </div>
                        <div className="space-y-2">
                            <div className="text-xs font-bold uppercase tracking-widest text-[#5b6f73]/50">Call Us</div>
                            <a
                                href="tel:+61234567890"
                                className="text-lg font-bold hover:text-[#99f200] transition-colors"
                            >
                                +61 234 567 890
                            </a>
                        </div>
                        <div className="space-y-2">
                            <div className="text-xs font-bold uppercase tracking-widest text-[#5b6f73]/50">Visit Us</div>
                            <div className="text-lg font-bold">
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
