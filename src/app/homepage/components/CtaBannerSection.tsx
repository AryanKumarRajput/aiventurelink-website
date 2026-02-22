"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function CtaBannerSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef?.current?.querySelectorAll(".reveal-hidden");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("revealed"); }),
      { threshold: 0.2 }
    );
    els?.forEach((el) => obs?.observe(el));
    return () => obs?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="container-wide">
        <div className="reveal-hidden relative rounded-3xl overflow-hidden p-10 md:p-16 text-center"
          style={{
            background: "linear-gradient(135deg, #0F1629 0%, #0A1545 50%, #0F1629 100%)",
            border: "1px solid rgba(37,99,235,0.25)",
            boxShadow: "0 0 80px rgba(37,99,235,0.12)",
          }}
        >
          {/* Orbs inside banner */}
          <div className="absolute top-0 left-1/4 w-64 h-64 orb bg-aivl-blue/15 animate-orb-drift" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 orb bg-aivl-cyan/10 animate-orb-drift" style={{ animationDelay: "-6s" }} />

          {/* Grid inside */}
          <div className="absolute inset-0 grid-pattern opacity-20" />

          <div className="relative z-10">
            <span className="tag-badge mb-6 inline-block">Get Started Today</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-aivl-text-primary mb-4">
              Ready to Find Your <span className="gradient-text">AI Solution?</span>
            </h2>
            <p className="max-w-lg mx-auto text-aivl-text-secondary text-lg mb-8">
              Submit your enterprise requirement in under 5 minutes.
              Our team will analyze your needs and match you with 3–5 vetted AI solution providers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/submit-requirement"
                className="group px-8 py-4 rounded-xl font-semibold text-white btn-shimmer shadow-glow-blue hover:scale-105 active:scale-95 transition-transform duration-200 text-base"
              >
                Submit Requirement
                <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 rounded-xl font-semibold text-aivl-text-primary border border-white/10 hover:border-aivl-blue/40 hover:bg-aivl-blue/10 transition-all duration-200 text-base"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}