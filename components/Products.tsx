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
            gradient: "from-[#3eb4d6] to-[#3eb4d6]/80",
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
            gradient: "from-[#3eb4d6] to-[#3eb4d6]/80",
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
            gradient: "from-[#3eb4d6] to-[#3eb4d6]/80",
            popular: false,
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
                        Our{" "}
                        <span className="text-[#3eb4d6]">
                            Products
                        </span>
                    </h2>
                    <p className="text-lg text-[#5b6f73]/70 max-w-2xl mx-auto">
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
                            className={`relative bg-white rounded-2xl border ${product.popular
                                ? "border-[#3eb4d6]/30 shadow-xl shadow-[#3eb4d6]/5 scale-105 z-10"
                                : "border-gray-100 shadow-sm"
                                } p-8 hover:shadow-md transition-all duration-300`}
                        >
                            {/* Popular Badge */}
                            {product.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="bg-[#99f200] text-[#5b6f73] px-6 py-1.5 rounded-full text-xs font-bold shadow-md uppercase tracking-wider">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            {/* Product Name */}
                            <div className="mb-6">
                                <h3 className={`text-2xl font-bold text-[#3eb4d6] mb-2 uppercase tracking-wide`}>
                                    {product.name}
                                </h3>
                                <p className="text-[#5b6f73]/70 text-sm leading-relaxed">
                                    {product.description}
                                </p>
                            </div>

                            {/* Price */}
                            <div className="mb-8">
                                <div className="flex items-baseline">
                                    <span className="text-5xl font-bold text-[#5b6f73]">
                                        {product.price}
                                    </span>
                                    <span className="ml-2 text-[#5b6f73]/60 text-sm uppercase tracking-wider">
                                        / {product.period}
                                    </span>
                                </div>
                            </div>

                            {/* Features */}
                            <ul className="space-y-4 mb-8">
                                {product.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <svg
                                            className={`w-5 h-5 mr-3 flex-shrink-0 text-[#3eb4d6] bg-[#3eb4d6]/5 rounded-full p-1`}
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
                                        <span className="text-[#5b6f73]/80 text-sm">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <Link
                                href="/contact"
                                className={`group w-full inline-flex items-center justify-center px-6 py-3.5 font-semibold text-white bg-[#3eb4d6] rounded-full hover:bg-[#99f200] hover:text-[#5b6f73] transition-all duration-300 shadow-md shadow-[#3eb4d6]/10`}
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
