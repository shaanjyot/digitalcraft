"use client";

import { motion } from "framer-motion";
import { HiLightningBolt, HiUsers, HiChatAlt2, HiCurrencyDollar } from "react-icons/hi";

const Features = () => {
    const features = [
        {
            icon: HiLightningBolt,
            title: "Scalability and Flexibility",
            description: "Grow with Confidence - Our solutions are designed to scale with your business needs, ensuring long-term success.",
        },
        {
            icon: HiUsers,
            title: "User-Friendly Interface",
            description: "Intuitive and Easy to Use - We create interfaces that your users will love, focusing on simplicity and effectiveness.",
        },
        {
            icon: HiChatAlt2,
            title: "Collaboration and Communication",
            description: "Streamline Teamwork - Enhance productivity with tools and strategies that facilitate seamless collaboration.",
        },
        {
            icon: HiCurrencyDollar,
            title: "Scalable Pricing Plans",
            description: "Affordable and Flexible Options - Choose from a range of pricing plans that fit your budget and requirements.",
        },
    ];

    return (
        <section className="py-20 bg-white dark:bg-gray-900">
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
                            Innovative Solutions
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Revolutionizing the Industry with Powerful Features for Your Success
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
                        >
                            {/* Icon */}
                            <div className="mb-6">
                                <div className="relative inline-flex">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#0878b5] to-[#020c36] rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                                    <div className="relative bg-gradient-to-r from-[#0878b5] to-[#020c36] p-4 rounded-xl">
                                        <feature.icon className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0878b5]/5 to-[#020c36]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
