"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiCheckCircle, HiLightningBolt, HiUsers, HiTrendingUp } from "react-icons/hi";

export default function AboutPage() {
    const values = [
        {
            icon: HiCheckCircle,
            title: "Quality First",
            description: "We never compromise on quality and deliver excellence in every project.",
        },
        {
            icon: HiLightningBolt,
            title: "Innovation",
            description: "Staying ahead with the latest technologies and creative solutions.",
        },
        {
            icon: HiUsers,
            title: "Client-Centric",
            description: "Your success is our success. We put clients at the heart of everything we do.",
        },
        {
            icon: HiTrendingUp,
            title: "Growth Mindset",
            description: "Continuous learning and improvement to deliver better results.",
        },
    ];

    return (
        <main className="pt-20">
            {/* Hero Section */}
            <section className="relative py-24 bg-white">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#3eb4d6]/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#99f200]/5 rounded-full blur-3xl"></div>
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-8 leading-tight">
                            About{" "}
                            <span className="text-[#3eb4d6]">
                                Digital
                            </span>{" "}
                            <span className="text-[#5b6f73]">Craft</span>
                        </h1>
                        <p className="text-xl text-[#5b6f73]/70 leading-relaxed max-w-2xl mx-auto">
                            We are a Digital Transformation Consultancy based out of Canberra, dedicated to helping businesses thrive in the digital age.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl font-bold mb-8 text-[#5b6f73]">Our Story</h2>
                            <div className="space-y-6 text-lg text-[#5b6f73]/80 leading-relaxed">
                                <p>
                                    Digital Craft Consultants was founded with a simple mission: to help businesses navigate the complex world of digital transformation. Based in Canberra, Australia, we've been serving small and medium enterprises, startups, and large corporates with innovative digital solutions.
                                </p>
                                <p>
                                    Our team of experienced professionals brings together expertise in UI/UX design, web development, SEO marketing, content strategy, and more. We believe in creating world-class solutions that not only look great but also drive real business results.
                                </p>
                                <p>
                                    From designing memorable logos to building comprehensive e-commerce platforms, we're committed to helping our clients establish a strong online presence and achieve their digital goals.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4 text-[#5b6f73]">Our Values</h2>
                        <p className="text-lg text-[#5b6f73]/70">
                            The principles that guide everything we do
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl border border-gray-100 premium-shadow hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="w-16 h-16 bg-[#3eb4d6]/5 rounded-xl flex items-center justify-center mb-6">
                                    <value.icon className="w-8 h-8 text-[#3eb4d6]" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-[#5b6f73]">
                                    {value.title}
                                </h3>
                                <p className="text-[#5b6f73]/70 text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-4xl font-bold mb-6 text-[#5b6f73]">
                            Ready to Transform your Business?
                        </h2>
                        <p className="text-lg text-[#5b6f73]/70 mb-10">
                            Let's work together to bring your digital vision to life.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-10 py-4 font-bold text-white bg-[#3eb4d6] rounded-full hover:bg-[#3eb4d6]/90 shadow-md shadow-[#3eb4d6]/20 transition-all duration-300"
                        >
                            Get In Touch
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
