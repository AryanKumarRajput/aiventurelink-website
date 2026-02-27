import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "./components/HeroSection";
import EcosystemSection from "./components/EcosystemSection";
import DomainsSection from "./components/DomainsSection";
import HowItWorksSection from "./components/HowItWorksSection";
import CtaBannerSection from "./components/CtaBannerSection";

export const metadata: Metadata = {
  title: "AIVentureLink — Managed AI Implementation Partner",
  description:
    "AIVentureLink designs, manages and delivers AI solutions by orchestrating specialized AI partners. We help businesses implement AI across multiple domains with a single point of accountability.",
  keywords: [
    "AI implementation",
    "AI project management",
    "AI orchestration",
    "enterprise AI solutions",
    "AI integration",
    "AIVentureLink",
  ],
  openGraph: {
    title: "AIVentureLink — Managed AI Implementation Partner",
    description:
      "We orchestrate AI partners to design, manage and deliver end-to-end AI solutions for businesses.",
    type: "website",
  },
};

export default function HomepagePage() {
  return (
    <main className="min-h-screen bg-[#050810]">
      <Header />
      <HeroSection />
      <EcosystemSection />
      <DomainsSection />
      <HowItWorksSection />
      <CtaBannerSection />
      <Footer />
    </main>
  );
}