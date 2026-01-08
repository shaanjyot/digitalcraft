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
                            Innovative
                        </span>{" "}
                        <span className="text-[#5b6f73]">Solutions</span>
                    </h2>
                    <p className="text-lg text-[#5b6f73]/70 max-w-2xl mx-auto">
                        Revolutionizing the Industry with Powerful Features for Your Success
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative h-full bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#3eb4d6]/20 transition-all duration-300 premium-shadow hover:-translate-y-1"
                        >
                            {/* Icon */}
                            <div className="mb-6">
                                <div className="relative inline-flex">
                                    <div className="relative bg-[#3eb4d6]/5 p-4 rounded-xl group-hover:bg-[#99f200] transition-colors duration-300">
                                        <feature.icon className="w-8 h-8 text-[#3eb4d6] group-hover:text-[#5b6f73]" />
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold mb-3 text-[#5b6f73]">
                                {feature.title}
                            </h3>
                            <p className="text-[#5b6f73]/80 leading-relaxed text-sm">
                                {feature.description}
                            </p>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
