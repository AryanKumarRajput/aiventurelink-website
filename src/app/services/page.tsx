import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHeroSection from "./components/ServicesHeroSection";
import ServicesDomainGrid from "./components/ServicesDomainGrid";
import ServicesCtaSection from "./components/ServicesCtaSection";

export const metadata: Metadata = {
  title: "AI Solution Domains — AIVentureLink",
  description:
    "Explore AIVentureLink's 6 enterprise AI solution domains: Conversational AI, Enterprise Automation, Data Infrastructure, Marketing AI, Fintech Analytics, and Industry-Specific AI.",
  keywords: [
    "enterprise AI solutions",
    "conversational AI",
    "enterprise automation",
    "AI infrastructure",
    "fintech AI",
    "industry AI",
    "AIVentureLink services",
  ],
  openGraph: {
    title: "AI Solution Domains — AIVentureLink",
    description:
      "6 specialized AI solution domains for enterprise adoption — curated, vetted, and matched by AIVentureLink.",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#050810]">
      <Header />
      <ServicesHeroSection />
      <ServicesDomainGrid />
      <ServicesCtaSection />
      <Footer />
    </main>
  );
}