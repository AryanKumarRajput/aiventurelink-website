import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "./components/HeroSection";
import EcosystemSection from "./components/EcosystemSection";
import DomainsSection from "./components/DomainsSection";
import HowItWorksSection from "./components/HowItWorksSection";
import CtaBannerSection from "./components/CtaBannerSection";

export const metadata: Metadata = {
  title: "AIVentureLink — Connecting Enterprises with Trusted AI Solutions",
  description:
    "AIVentureLink is a curated AI solutions brokerage operated by Zestova Private Limited. We connect enterprises with vetted AI solution providers across 6 specialized domains.",
  keywords: [
    "AI solutions",
    "enterprise AI",
    "AI brokerage",
    "AI vendors",
    "Zestova",
    "AIVentureLink",
    "AI adoption",
  ],
  openGraph: {
    title: "AIVentureLink — Connecting Enterprises with Trusted AI Solutions",
    description:
      "Curated AI solutions brokerage connecting enterprises with vetted AI providers across 6 domains.",
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