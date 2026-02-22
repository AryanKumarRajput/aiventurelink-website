import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RequirementFormInteractive from "./components/RequirementFormInteractive";

export const metadata: Metadata = {
  title: "Submit Requirement — AIVentureLink",
  description:
    "Submit your enterprise AI requirement or apply to become a partner in the AIVentureLink ecosystem. Our team will match you with vetted AI solution providers within 24 hours.",
  keywords: ["submit AI requirement", "enterprise AI form", "AI partner application", "AIVentureLink"],
};

export default function SubmitRequirementPage() {
  return (
    <main className="min-h-screen bg-[#050810]">
      <Header />

      {/* Page Header */}
      <section className="relative pt-28 pb-10 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 orb bg-aivl-blue/10" />
        <div className="container-wide relative z-10 text-center">
          <span className="tag-badge mb-4 inline-block">Enterprise Intake</span>
          <h1 className="font-display font-bold text-3xl md:text-5xl text-aivl-text-primary mb-4">
            Submit Your <span className="gradient-text">AI Requirement</span>
          </h1>
          <p className="max-w-xl mx-auto text-aivl-text-secondary text-lg">
            Tell us your challenge. We'll match you with 3–5 vetted AI solution providers
            within 24 hours — no vendor hunting required.
          </p>
        </div>
      </section>

      <RequirementFormInteractive />
      <Footer />
    </main>
  );
}