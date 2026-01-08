"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

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
                            Get In{" "}
                            <span className="text-[#3eb4d6]">
                                Touch
                            </span>
                        </h1>
                        <p className="text-xl text-[#5b6f73]/70 leading-relaxed max-w-2xl mx-auto">
                            Have a question or ready to start your project? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="relative py-24 bg-white overflow-hidden pb-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-6xl mx-auto">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold mb-8 text-[#5b6f73]">Contact Information</h2>
                            <p className="text-lg text-[#5b6f73]/70 mb-12">
                                Fill out the form and our team will get back to you within 24 hours.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start space-x-6">
                                    <div className="w-14 h-14 bg-[#3eb4d6]/5 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <HiMail className="w-6 h-6 text-[#3eb4d6]" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold uppercase tracking-widest text-[#5b6f73]/40 mb-1">Email Us</h3>
                                        <a
                                            href="mailto:info@digitalcraftconsult.com.au"
                                            className="text-lg font-bold text-[#5b6f73] hover:text-[#3eb4d6] transition-colors"
                                        >
                                            info@digitalcraftconsult.com.au
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6">
                                    <div className="w-14 h-14 bg-[#3eb4d6]/5 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <HiPhone className="w-6 h-6 text-[#3eb4d6]" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold uppercase tracking-widest text-[#5b6f73]/40 mb-1">Call Us</h3>
                                        <a
                                            href="tel:+61234567890"
                                            className="text-lg font-bold text-[#5b6f73] hover:text-[#3eb4d6] transition-colors"
                                        >
                                            +61 234 567 890
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6">
                                    <div className="w-14 h-14 bg-[#3eb4d6]/5 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <HiLocationMarker className="w-6 h-6 text-[#3eb4d6]" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold uppercase tracking-widest text-[#5b6f73]/40 mb-1">Visit Us</h3>
                                        <p className="text-lg font-bold text-[#5b6f73]">
                                            Canberra, Australia
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 premium-shadow">
                                <h2 className="text-3xl font-bold mb-8 text-[#5b6f73]">Send us a Message</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-bold text-[#5b6f73]/60 ml-1">Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-[#3eb4d6]/30 focus:outline-none focus:ring-4 focus:ring-[#3eb4d6]/5 transition-all duration-200"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-bold text-[#5b6f73]/60 ml-1">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-[#3eb4d6]/30 focus:outline-none focus:ring-4 focus:ring-[#3eb4d6]/5 transition-all duration-200"
                                                placeholder="Your email"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-bold text-[#5b6f73]/60 ml-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-[#3eb4d6]/30 focus:outline-none focus:ring-4 focus:ring-[#3eb4d6]/5 transition-all duration-200"
                                            placeholder="Your phone number"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-bold text-[#5b6f73]/60 ml-1">Subject</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-[#3eb4d6]/30 focus:outline-none focus:ring-4 focus:ring-[#3eb4d6]/5 transition-all duration-200"
                                            placeholder="How can we help?"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-bold text-[#5b6f73]/60 ml-1">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-[#3eb4d6]/30 focus:outline-none focus:ring-4 focus:ring-[#3eb4d6]/5 transition-all duration-200 resize-none"
                                            placeholder="Tell us about your project..."
                                        />
                                    </div>
                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            className="w-full py-4 bg-[#3eb4d6] text-white font-bold rounded-2xl hover:bg-[#3eb4d6]/90 shadow-md shadow-[#3eb4d6]/20 transition-all duration-300"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
