import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import CTA from "@/components/CTA";

export default function DigitalGaragePage() {
    return (
        <main className="pt-20">
            <section className="relative py-24 bg-white">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#3eb4d6]/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#99f200]/5 rounded-full blur-3xl"></div>
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-8 leading-tight">
                            <span className="text-[#3eb4d6]">
                                DIGITAL
                            </span>{" "}
                            <span className="text-[#5b6f73]">GARAGE</span>
                        </h1>
                        <p className="text-xl text-[#5b6f73]/70 leading-relaxed max-w-2xl mx-auto">
                            Ongoing support and maintenance for your digital assets
                        </p>
                    </div>

                    <div className="max-w-md mx-auto relative bg-white rounded-2xl border border-gray-100 shadow-sm p-8 hover:shadow-md transition-all duration-300">
                        <div className="mb-6">
                            <h3 className="text-2xl font-display font-bold text-[#3eb4d6] mb-2 uppercase tracking-wide">
                                DIGITAL GARAGE
                            </h3>
                            <p className="text-[#5b6f73]/70 text-sm leading-relaxed">
                                Ongoing support and maintenance for your digital assets
                            </p>
                        </div>
                        <div className="mb-8">
                            <div className="flex items-baseline">
                                <span className="text-5xl font-bold text-[#5b6f73]">
                                    $99
                                </span>
                                <span className="ml-2 text-[#5b6f73]/60 text-sm uppercase tracking-wider">
                                    / per hour
                                </span>
                            </div>
                        </div>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Bug fixes",
                                "Site Audit and Technical solutions",
                                "Website issue and fixes",
                                "Code review and testing scripts",
                                "Google analytics setup",
                                "Search on Web page optimization"
                            ].map((feature, idx) => (
                                <li key={idx} className="flex items-start">
                                    <svg
                                        className="w-5 h-5 mr-3 flex-shrink-0 text-[#3eb4d6] bg-[#3eb4d6]/5 rounded-full p-1"
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
                        <Link
                            href="/contact"
                            className="group w-full inline-flex items-center justify-center px-6 py-3.5 font-semibold text-white bg-[#3eb4d6] rounded-full hover:bg-[#99f200] hover:text-[#5b6f73] transition-all duration-300 shadow-md shadow-[#3eb4d6]/10"
                        >
                            Get Started
                            <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </div>
                </div>
            </section>
            <CTA />
        </main>
    );
}
