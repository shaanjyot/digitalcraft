import Products from "@/components/Products";
import CTA from "@/components/CTA";

export default function ProductsPage() {
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
                            Our{" "}
                            <span className="text-[#3eb4d6]">
                                Products
                            </span>
                        </h1>
                        <p className="text-xl text-[#5b6f73]/70 leading-relaxed max-w-2xl mx-auto">
                            Comprehensive digital transformation packages tailored to your business needs.
                        </p>
                    </div>
                </div>
            </section>

            <Products />
            <CTA />
        </main>
    );
}
