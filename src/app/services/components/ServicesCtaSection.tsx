"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Icon from "@/components/ui/AppIcon";

const processSteps = [
  { step: "01", label: "Submit Requirement",   icon: "DocumentTextIcon" },
  { step: "02", label: "Requirement Analysis", icon: "MagnifyingGlassIcon" },
  { step: "03", label: "Partner Matching",     icon: "SparklesIcon" },
  { step: "04", label: "Execution Oversight",  icon: "ShieldCheckIcon" },
];

export default function ServicesCtaSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal-hidden");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("revealed"); }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="container-wide relative z-10">

        {/* How it works mini-section */}
        <div className="reveal-hidden text-center mb-12">
          <span className="tag-badge mb-4 inline-block">How We Work</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-aivl-text-primary mb-4">
            From Requirement to <span className="gradient-text">Matched Partner</span>
          </h2>
          <p className="max-w-lg mx-auto text-aivl-text-secondary">
            Our structured process ensures your enterprise AI requirement reaches
            the most qualified solution providers within 24 hours.
          </p>
        </div>

        {/* Process steps */}
        <div className="reveal-hidden grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {processSteps.map((s, i) => (
            <div key={s.step} className="flex flex-col items-center text-center p-5 glass rounded-2xl border border-white/[0.06]">
              <div className="w-12 h-12 rounded-2xl bg-aivl-blue/15 border border-aivl-blue/30 flex items-center justify-center mb-3">
                <Icon name={s.icon as "DocumentTextIcon"} size={20} className="text-aivl-blue-glow" />
              </div>
              <span className="text-xs font-bold text-aivl-text-muted mb-1">{s.step}</span>
              <span className="text-sm font-semibold text-aivl-text-primary">{s.label}</span>
            </div>
          ))}
        </div>

        {/* CTA card */}
        <div className="reveal-hidden relative rounded-3xl overflow-hidden p-10 md:p-14 text-center"
          style={{
            background: "linear-gradient(135deg, #0F1629 0%, #0A1545 50%, #0F1629 100%)",
            border: "1px solid rgba(37,99,235,0.25)",
            boxShadow: "0 0 80px rgba(37,99,235,0.12)",
          }}
        >
          <div className="absolute top-0 left-1/3 w-72 h-72 orb bg-aivl-blue/12 animate-orb-drift" />
          <div className="absolute bottom-0 right-1/3 w-56 h-56 orb bg-aivl-cyan/8 animate-orb-drift" style={{ animationDelay: "-5s" }} />
          <div className="absolute inset-0 grid-pattern opacity-20" />

          <div className="relative z-10">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-aivl-text-primary mb-4">
              Ready to Deploy AI in Your Enterprise?
            </h2>
            <p className="max-w-lg mx-auto text-aivl-text-secondary text-lg mb-8">
              Submit your requirement today. Our team will analyze your needs and
              match you with the right AI solution providers across any of our 6 domains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/submit-requirement"
                className="group px-8 py-4 rounded-xl font-semibold text-white btn-shimmer shadow-glow-blue hover:scale-105 active:scale-95 transition-transform duration-200 flex items-center justify-center gap-2"
              >
                Submit Requirement
                <Icon name="ArrowRightIcon" size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="mailto:connect@aiventurelink.com"
                className="px-8 py-4 rounded-xl font-semibold text-aivl-text-primary border border-white/10 hover:border-aivl-blue/40 hover:bg-aivl-blue/10 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Icon name="EnvelopeIcon" size={16} />
                connect@aiventurelink.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}