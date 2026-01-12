import Link from "next/link";
import {
    HiArrowRight,
    HiChatAlt2,
    HiClipboardList,
    HiCog,
    HiBadgeCheck,
    HiCheck
} from "react-icons/hi";
import CTA from "@/components/CTA";

export default function DigitalGaragePage() {
    const steps = [
        {
            num: "01",
            title: "Connect",
            desc: "Detailed consulting and review of issue",
            icon: HiChatAlt2,
            color: "text-[#3eb4d6]",
            bg: "bg-[#3eb4d6]/10",
        },
        {
            num: "02",
            title: "Audit",
            desc: "Review existing product and check issues",
            icon: HiClipboardList,
            color: "text-[#99f200]",
            bg: "bg-[#99f200]/10",
        },
        {
            num: "03",
            title: "Fix",
            desc: "Fix the issues, or provide alternative solutions",
            icon: HiCog,
            color: "text-[#5b6f73]",
            bg: "bg-[#5b6f73]/10",
        },
        {
            num: "04",
            title: "Sign Off",
            desc: "Deliver final solution with sign-off & smooth handover.",
            icon: HiBadgeCheck,
            color: "text-[#6d28d9]", // Using a purple shade to match reference image briefly
            bg: "bg-[#6d28d9]/10",
        }
    ];

    const features = [
        "Bug fixes",
        "Site Audit and Technical solutions",
        "Website issue and fixes",
        "Code review and testing scripts",
        "Google analytics setup",
        "Search on Web page optimization"
    ];

    return (
        <main className="pt-20">
            {/* Hero Section */}
            <section className="relative py-20 bg-white overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3eb4d6]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#99f200]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                            DIGITAL GARAGE: Our Rapid Fix &{" "}
                            <span className="text-[#3eb4d6]">Audit Framework</span>
                        </h1>
                        <p className="text-xl text-[#5b6f73]/80 leading-relaxed max-w-3xl mx-auto">
                            A quick, expert-led process to review issues, apply fixes and deliver clean, tested solutions with a final sign-off.
                        </p>
                    </div>

                    {/* Process Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 relative max-w-5xl mx-auto">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-[2.5rem] left-0 right-0 h-0.5 bg-gradient-to-r from-[#3eb4d6]/20 via-[#99f200]/20 to-[#6d28d9]/20 z-0 mx-16"></div>

                        {steps.map((step, idx) => (
                            <div key={idx} className="relative z-10 group">
                                <div className={`w-20 h-20 mx-auto rounded-full ${step.bg} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-sm border-4 border-white`}>
                                    <step.icon className={`w-9 h-9 ${step.color}`} />
                                </div>
                                <div className="text-center px-4">
                                    <div className={`inline-block px-3 py-1 bg-white border border-gray-100 rounded-full text-xs font-bold ${step.color.replace('text-', 'text-opacity-80 text-')} mb-3 shadow-sm`}>
                                        STEP {step.num}
                                    </div>
                                    <h3 className="text-lg font-bold text-[#5b6f73] mb-3">{step.title}</h3>
                                    <p className="text-[#5b6f73]/70 text-sm leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content & Pricing Split */}
            <section className="py-24 bg-[#5b6f73]/5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

                        {/* Left Content */}
                        <div className="space-y-8 animate-fade-in-up">
                            <div>
                                <h2 className="text-4xl font-display font-bold text-[#3eb4d6] mb-6">DIGITAL GARAGE</h2>
                                <div className="space-y-6 text-lg text-[#5b6f73]/80 leading-relaxed">
                                    <p className="font-medium text-[#5b6f73]">
                                        Digital Garage is for quick fixes, website audits, Google Analytics, SEO checks, and even software code-testing scripts.
                                    </p>
                                    <p>
                                        We provide detailed technical consulting with solutions. We can do an independent review of your site or existing products.
                                    </p>
                                    <p>
                                        If you wish to engage in offshore outsourced solutions where you would like to solve complex issues we have a team of consultants. We offer them in the digital garage.
                                    </p>
                                </div>
                            </div>

                            <div className="pt-4">
                                <Link
                                    href="/contact"
                                    className="hidden lg:inline-flex items-center text-[#3eb4d6] font-bold hover:text-[#99f200] transition-colors"
                                >
                                    Start your project now <HiArrowRight className="ml-2" />
                                </Link>
                            </div>
                        </div>

                        {/* Right Pricing Card */}
                        <div className="relative group">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#3eb4d6] to-[#99f200] rounded-[2rem] blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500"></div>

                            <div className="relative bg-white rounded-[2rem] p-8 sm:p-10 shadow-xl border border-white/50 backdrop-blur-sm">
                                {/* Price Header */}
                                <div className="flex justify-between items-start mb-10 border-b border-gray-100 pb-8">
                                    <div>
                                        <div className="text-sm font-bold text-[#99f200] uppercase tracking-widest mb-2">Package</div>
                                        <h3 className="text-2xl font-display font-bold text-[#5b6f73]">Support</h3>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-5xl font-bold text-[#3eb4d6] tracking-tight">$99</div>
                                        <div className="text-sm text-[#5b6f73]/50 font-medium mt-1">per hour</div>
                                    </div>
                                </div>

                                {/* Features List */}
                                <div className="space-y-5 mb-10">
                                    {features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start">
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3eb4d6]/10 flex items-center justify-center mt-0.5">
                                                <HiCheck className="w-4 h-4 text-[#3eb4d6]" />
                                            </div>
                                            <span className="ml-3 text-[#5b6f73]/80 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Main CTA */}
                                <Link
                                    href="/contact"
                                    className="block w-full py-4 px-8 bg-[#3eb4d6] hover:bg-[#99f200] text-white hover:text-[#5b6f73] font-bold rounded-xl text-center transition-all duration-300 shadow-lg shadow-[#3eb4d6]/20 hover:shadow-[#99f200]/20 transform hover:-translate-y-1"
                                >
                                    Get Started
                                </Link>
                                <p className="text-center text-xs text-[#5b6f73]/40 mt-4">Transparent hourly billing.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <CTA />
        </main>
    );
}
