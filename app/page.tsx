import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Services />
      <Products />
      <Portfolio />
      <Blog />
      <CTA />
    </main>
  );
}

