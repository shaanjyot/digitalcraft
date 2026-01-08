"use client";

import { motion } from "framer-motion";
import {
    HiPencilAlt,
    HiCode,
    HiSearchCircle,
    HiDocumentText,
    HiLightBulb,
    HiPencil,
    HiMail,
    HiCursorClick,
} from "react-icons/hi";

const Services = () => {
    const services = [
        {
            icon: HiPencilAlt,
            title: "UI/UX Designing",
            description: "Create stunning, user-friendly interfaces that engage and convert your audience.",
        },
        {
            icon: HiCode,
            title: "Website Development",
            description: "Build responsive, high-performance websites tailored to your business needs.",
        },
        {
            icon: HiSearchCircle,
            title: "SEO Marketing",
            description: "Boost your online visibility and rank higher in search engine results.",
        },
        {
            icon: HiDocumentText,
            title: "Content Marketing",
            description: "Craft compelling content that tells your story and drives engagement.",
        },
        {
            icon: HiLightBulb,
            title: "Campaign Strategy",
            description: "Develop data-driven marketing campaigns that deliver measurable results.",
        },
        {
            icon: HiPencil,
            title: "Blog Writing",
            description: "Professional blog writing services to establish your thought leadership.",
        },
        {
            icon: HiMail,
            title: "Email Marketing",
            description: "Create targeted email campaigns that nurture leads and drive conversions.",
        },
        {
            icon: HiCursorClick,
            title: "Google Ads Expertise",
            description: "Maximize ROI with expertly managed Google Ads campaigns.",
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
                        We help to build clients their{" "}
                        <span className="text-[#3eb4d6]">
                            dream
                        </span>{" "}
                        <span className="text-[#5b6f73]">projects</span>
                    </h2>
                    <p className="text-lg text-[#5b6f73]/70 max-w-2xl mx-auto">
                        Comprehensive digital services to transform your business
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                            className="group relative bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#3eb4d6]/20 transition-all duration-300 premium-shadow"
                        >
                            {/* Theme Overlay removed */}
                            <div className="absolute inset-[1px] bg-white rounded-2xl -z-10"></div>

                            {/* Icon */}
                            <div className="mb-6">
                                <div className="w-16 h-16 bg-[#3eb4d6]/5 rounded-xl flex items-center justify-center group-hover:bg-[#99f200] transition-all duration-300">
                                    <service.icon className="w-8 h-8 text-[#3eb4d6] group-hover:text-[#5b6f73]" />
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold mb-3 text-[#5b6f73]">
                                {service.title}
                            </h3>
                            <p className="text-[#5b6f73]/80 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div >
        </section >
    );
};

export default Services;
