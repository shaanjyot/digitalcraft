"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        {
            name: "Products",
            href: "/products",
            submenu: [
                { name: "Deziin", href: "/products/deziin" },
                { name: "Deziin Gold", href: "/products/deziin-gold" },
                { name: "Digital Garage", href: "/products/digital-garage" },
            ],
        },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
                : "bg-white lg:bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group">
                        <Image
                            src="/DigitalCraftLogo.png"
                            alt="Digital Craft Consultants"
                            width={220}
                            height={60}
                            className="h-14 w-auto object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <div key={item.name} className="relative group">
                                <Link
                                    href={item.href}
                                    className="px-4 py-2 text-[#5b6f73] hover:text-[#99f200] font-medium transition-colors duration-200 rounded-lg"
                                >
                                    {item.name}
                                </Link>
                                {item.submenu && (
                                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
                                        {item.submenu.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                href={subItem.href}
                                                className="block px-5 py-3 text-gray-700 dark:text-gray-300 hover:bg-[#99f200] hover:text-[#5b6f73] transition-colors duration-200"
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <Link
                            href="/contact"
                            className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-semibold text-white transition-all duration-300 bg-[#3eb4d6] rounded-full shadow-md shadow-[#3eb4d6]/20 hover:shadow-lg hover:bg-[#99f200] hover:scale-105 group"
                        >
                            <span className="relative">Get In Touch</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 text-[#5b6f73] hover:text-[#3eb4d6] transition-colors duration-200 rounded-lg hover:bg-gray-50"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <HiX className="w-6 h-6" />
                        ) : (
                            <HiMenu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-[#5b6f73]/10 border-t border-gray-100 shadow-xl relative overflow-hidden"
                    >
                        {/* Footer-like Gradient Background */}
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute inset-0 opacity-[0.15] bg-gradient-to-br from-[#5b6f73] via-[#3eb4d6] to-[#5b6f73]"></div>
                            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-white/20 to-transparent"></div>
                        </div>

                        <nav className="container mx-auto px-4 py-6 space-y-1 relative z-10">
                            {navItems.map((item) => (
                                <div key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="block px-4 py-3 text-[#5b6f73] font-bold hover:text-[#5b6f73] transition-colors duration-200 rounded-lg hover:bg-[#99f200]"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                    {item.submenu && (
                                        <div className="ml-4 mt-1 space-y-1 border-l-2 border-[#5b6f73]/10 pl-2">
                                            {item.submenu.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className="block px-4 py-2 text-sm text-[#5b6f73] font-medium hover:text-[#5b6f73] transition-colors duration-200 rounded-lg hover:bg-[#99f200]"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <Link
                                href="/contact"
                                className="block w-full text-center px-6 py-3 mt-4 bg-[#3eb4d6] text-white font-semibold rounded-full shadow-md hover:bg-[#99f200] transition-all duration-300"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Get In Touch
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
