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
        <footer className="relative bg-[#5b6f73]/10 pt-20 overflow-hidden border-t border-gray-100">
            {/* Greyish Blue Brand Gradient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 opacity-[0.15] bg-gradient-to-br from-[#5b6f73] via-[#3eb4d6] to-[#5b6f73]"></div>
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-white/20 to-transparent"></div>
            </div>
            {/* Main Footer */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <div className="relative">
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[#3eb4d6]/10 rounded-sm"></div>
                                <div className="relative text-[#3eb4d6] font-bold text-2xl tracking-tighter">
                                    DC
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-display font-bold text-[#5b6f73]">
                                    Digital Craft
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3eb4d6] -mt-1">
                                    Consultants
                                </span>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed text-[#5b6f73]/70">
                            We are a Digital Transformation Consultancy based out of Canberra. We help businesses design world-class solutions and create a strong online presence.
                        </p>
                        <div className="flex space-x-3">
                            {[
                                { icon: FaFacebookF, href: "#" },
                                { icon: FaTwitter, href: "#" },
                                { icon: FaLinkedinIn, href: "#" },
                                { icon: FaInstagram, href: "#" },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-[#5b6f73]/5 text-[#5b6f73] hover:bg-[#3eb4d6] hover:text-white flex items-center justify-center transition-all duration-300"
                                >
                                    <social.icon className="w-3.5 h-3.5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-[#5b6f73] font-bold text-sm uppercase tracking-widest mb-8">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-[#5b6f73]/70 hover:text-[#3eb4d6] transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-[#5b6f73] font-bold text-sm uppercase tracking-widest mb-8">Products</h3>
                        <ul className="space-y-3">
                            {products.map((product) => (
                                <li key={product.name}>
                                    <Link
                                        href={product.href}
                                        className="text-sm text-[#5b6f73]/70 hover:text-[#3eb4d6] transition-colors duration-200"
                                    >
                                        {product.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-[#5b6f73] font-bold text-sm uppercase tracking-widest mb-8">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <HiLocationMarker className="w-4 h-4 text-[#3eb4d6] mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-[#5b6f73]/70">Canberra, Australia</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <HiMail className="w-4 h-4 text-[#3eb4d6] mt-0.5 flex-shrink-0" />
                                <a
                                    href="mailto:info@digitalcraftconsult.com.au"
                                    className="text-sm text-[#5b6f73]/70 hover:text-[#3eb4d6] transition-colors duration-200"
                                >
                                    info@digitalcraftconsult.com.au
                                </a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <HiPhone className="w-4 h-4 text-[#3eb4d6] mt-0.5 flex-shrink-0" />
                                <a
                                    href="tel:+61234567890"
                                    className="text-sm text-[#5b6f73]/70 hover:text-[#3eb4d6] transition-colors duration-200"
                                >
                                    +61 234 567 890
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="mt-20 pt-12 border-t border-gray-100">
                    <div className="max-w-2xl mx-auto text-center">
                        <h3 className="text-[#5b6f73] font-bold text-xl mb-4">
                            Subscribe to Our Newsletter
                        </h3>
                        <p className="text-sm text-[#5b6f73]/70 mb-8">
                            Stay updated with our latest news, products, and exclusive offers.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-3 rounded-full bg-gray-50 border border-gray-100 focus:border-[#3eb4d6] focus:outline-none focus:ring-4 focus:ring-[#3eb4d6]/5 transition-all duration-200 text-[#5b6f73] placeholder-gray-400"
                            />
                            <button
                                type="submit"
                                className="px-10 py-3 bg-[#3eb4d6] text-white font-bold rounded-full hover:bg-[#3eb4d6]/90 transition-all duration-300 shadow-md shadow-[#3eb4d6]/10"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-[#5b6f73]/50">
                            © {currentYear} Digital Craft Consultants. All rights reserved.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            {legal.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-xs font-bold uppercase tracking-widest text-[#5b6f73]/40 hover:text-[#3eb4d6] transition-colors duration-200"
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
