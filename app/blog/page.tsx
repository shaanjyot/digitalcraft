import Blog from "@/components/Blog";
import CTA from "@/components/CTA";

export default function BlogPage() {
    return (
        <main className="pt-20">
            <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                            Our{" "}
                            <span className="bg-gradient-to-r from-[#0878b5] to-[#020c36] bg-clip-text text-transparent">
                                Blog
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                            Insights, tips, and updates from our team of digital transformation experts.
                        </p>
                    </div>
                </div>
            </section>

            <Blog />
            <CTA />
        </main>
    );
}
