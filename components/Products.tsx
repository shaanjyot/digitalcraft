"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

const Products = () => {
    const products = [
        {
            name: "DEZIIN",
            price: "$299",
            period: "one-time",
            description: "Perfect for startups and small businesses looking to establish their brand identity",
            features: [
                "Logo Design with 60 minutes consulting",
                "Free online sketches",
                "Pastel designs",
                "Customized digital sketchworks",
                "Multiple revision rounds",
                "Final files in all formats",
            ],
            gradient: "from-[#0878b5] to-[#020c36]",
            popular: false,
        },
        {
            name: "DEZIIN GOLD",
            price: "$1,999",
            period: "one-time",
            description: "Complete web solution for businesses ready to go online",
            features: [
                "WordPress Website with Logo",
                "WooCommerce/Shopify Website",
                "50 products catalog website",
                "Responsive design",
                "SEO optimization",
                "3 months free support",
                "Other web solutions",
            ],
            gradient: "from-[#0878b5] to-[#020c36]",
            popular: true,
        },
        {
            name: "DIGITAL GARAGE",
            price: "$99",
            period: "per hour",
            description: "Ongoing support and maintenance for your digital assets",
            features: [
                "Bug fixes",
                "Site Audit and Technical solutions",
                "Website issue and fixes",
                "Code review and testing scripts",
                "Google analytics setup",
                "Search on Web page optimization",
            ],
            gradient: "from-[#0878b5] to-[#020c36]",
            popular: false,
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
                        Our{" "}
                        <span className="bg-gradient-to-r from-[#0878b5] to-[#020c36] bg-clip-text text-transparent">
                            Products
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Choose the perfect package for your business needs
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative bg-white dark:bg-gray-800 rounded-2xl border-2 ${product.popular
                                    ? "border-purple-500 shadow-2xl shadow-purple-500/20 scale-105"
                                    : "border-gray-200 dark:border-gray-700"
                                } p-8 hover:shadow-xl transition-all duration-300`}
                        >
                            {/* Popular Badge */}
                            {product.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="bg-gradient-to-r from-[#0878b5] to-[#020c36] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            {/* Product Name */}
                            <div className="mb-6">
                                <h3 className={`text-2xl font-bold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent mb-2`}>
                                    {product.name}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    {product.description}
                                </p>
                            </div>

                            {/* Price */}
                            <div className="mb-8">
                                <div className="flex items-baseline">
                                    <span className="text-5xl font-bold text-gray-900 dark:text-white">
                                        {product.price}
                                    </span>
                                    <span className="ml-2 text-gray-600 dark:text-gray-400">
                                        / {product.period}
                                    </span>
                                </div>
                            </div>

                            {/* Features */}
                            <ul className="space-y-4 mb-8">
                                {product.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <svg
                                            className={`w-6 h-6 mr-3 flex-shrink-0 bg-gradient-to-r ${product.gradient} text-white rounded-full p-1`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className="text-gray-700 dark:text-gray-300">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <Link
                                href="/contact"
                                className={`group w-full inline-flex items-center justify-center px-6 py-4 font-semibold text-white bg-gradient-to-r ${product.gradient} rounded-full hover:shadow-lg transition-all duration-300`}
                            >
                                Get Started
                                <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
