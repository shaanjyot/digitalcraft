"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Products", href: "/products" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
    ];

    const products = [
        { name: "Deziin", href: "/products/deziin" },
        { name: "Deziin Gold", href: "/products/deziin-gold" },
        { name: "Digital Garage", href: "/products/digital-garage" },
    ];

    const legal = [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms & Conditions", href: "/terms-and-conditions" },
        { name: "Payment Terms", href: "/payment-terms" },
    ];

    return (
        <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300">
            {/* Main Footer */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#0878b5] to-[#020c36] rounded-xl blur-sm opacity-75"></div>
                                <div className="relative bg-gradient-to-br from-[#0878b5] to-[#020c36] text-white font-bold text-lg px-4 py-2.5 rounded-xl shadow-lg">
                                    DC
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-display font-bold text-white">
                                    Digital Craft
                                </span>
                                <span className="text-xs text-gray-400 -mt-1">Consultants</span>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed">
                            We are a Digital Transformation Consultancy based out of Canberra. We help businesses design world-class solutions and create a strong online presence.
                        </p>
                        <div className="flex space-x-3">
                            {[
                                { icon: FaFacebookF, href: "https://facebook.com" },
                                { icon: FaTwitter, href: "https://twitter.com" },
                                { icon: FaLinkedinIn, href: "https://linkedin.com" },
                                { icon: FaInstagram, href: "https://instagram.com" },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-[#0878b5] hover:to-[#020c36] flex items-center justify-center transition-all duration-300 hover:scale-110"
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-display font-semibold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm hover:text-primary-400 transition-colors duration-200 flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-primary-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-white font-display font-semibold text-lg mb-6">Our Products</h3>
                        <ul className="space-y-3">
                            {products.map((product) => (
                                <li key={product.name}>
                                    <Link
                                        href={product.href}
                                        className="text-sm hover:text-primary-400 transition-colors duration-200 flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-primary-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                                        {product.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-display font-semibold text-lg mb-6">Contact Info</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <HiLocationMarker className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">Canberra, Australia</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <HiMail className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                                <a
                                    href="mailto:info@digitalcraftconsult.com.au"
                                    className="text-sm hover:text-primary-400 transition-colors duration-200"
                                >
                                    info@digitalcraftconsult.com.au
                                </a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <HiPhone className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                                <a
                                    href="tel:+61234567890"
                                    className="text-sm hover:text-primary-400 transition-colors duration-200"
                                >
                                    +61 234 567 890
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="mt-12 pt-12 border-t border-gray-800">
                    <div className="max-w-2xl mx-auto text-center">
                        <h3 className="text-white font-display font-semibold text-2xl mb-4">
                            Subscribe to Our Newsletter
                        </h3>
                        <p className="text-sm mb-6">
                            Stay updated with our latest news, products, and exclusive offers.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-5 py-3 rounded-full bg-gray-800 border border-gray-700 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all duration-200 text-white placeholder-gray-400"
                            />
                            <button
                                type="submit"
                                className="px-8 py-3 bg-gradient-to-r from-[#0878b5] to-[#020c36] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#0878b5]/30 transition-all duration-300 hover:scale-105"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-gray-400">
                            © {currentYear} Digital Craft Consultants. All rights reserved.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            {legal.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors duration-200"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
