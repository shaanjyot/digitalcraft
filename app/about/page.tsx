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
            <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                            About{" "}
                            <span className="bg-gradient-to-r from-[#0878b5] to-[#020c36] bg-clip-text text-transparent">
                                Digital Craft
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                            We are a Digital Transformation Consultancy based out of Canberra, dedicated to helping businesses thrive in the digital age.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl font-bold mb-8">Our Story</h2>
                            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
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
            <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4">Our Values</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            The principles that guide everything we do
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-16 h-16 bg-gradient-to-r from-[#0878b5] to-[#020c36] rounded-xl flex items-center justify-center mb-6">
                                    <value.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-4xl font-bold mb-6">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                            Let's work together to bring your digital vision to life.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white bg-gradient-to-r from-[#0878b5] to-[#020c36] rounded-full hover:shadow-lg hover:shadow-[#0878b5]/50 transition-all duration-300"
                        >
                            Get In Touch
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
