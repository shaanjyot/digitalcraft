import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import { LayoutShell } from "@/components/LayoutShell";

export const metadata: Metadata = {
  title: "Digital Craft Consultants - Digital Transformation Consultancy",
  description: "We are a Digital Transformation Consultancy based out of Canberra. We help businesses design world-class solutions and create a strong online presence.",
  keywords: ["Digital Transformation", "Web Development", "UI/UX Design", "SEO", "Canberra", "Australia"],
  authors: [{ name: "Digital Craft Consultants" }],
  openGraph: {
    title: "Digital Craft Consultants - Digital Transformation Consultancy",
    description: "We are a Digital Transformation Consultancy based out of Canberra.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/carolingia" />
      </head>
      <body className="antialiased font-sans">
        <Providers>
          <LayoutShell header={<Header />} footer={<Footer />}>
            {children}
          </LayoutShell>
        </Providers>
      </body>
    </html>
  );
}
