"use client";

import { useEffect, useRef } from "react";
import Icon from "@/components/ui/AppIcon";

const domainStats = [
  { icon: "ChatBubbleLeftRightIcon", label: "Conversational & Voice AI" },
  { icon: "CpuChipIcon",             label: "Enterprise Automation AI" },
  { icon: "CircleStackIcon",         label: "Data & AI Infrastructure" },
  { icon: "MegaphoneIcon",           label: "Marketing & Commerce AI" },
  { icon: "BanknotesIcon",           label: "Fintech & Analytics AI" },
  { icon: "BuildingStorefrontIcon",  label: "Industry-Specific AI" },
];

export default function ServicesHeroSection() {
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
    <section ref={ref} className="relative pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-80 orb bg-aivl-blue/10" />

      <div className="container-wide relative z-10">
        <div className="text-center mb-12 reveal-hidden">
          <span className="tag-badge mb-4 inline-block">6 Solution Domains</span>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-aivl-text-primary mb-4">
            AI Solutions for <span className="gradient-text">Every Enterprise</span>
          </h1>
          <p className="max-w-2xl mx-auto text-aivl-text-secondary text-lg leading-relaxed">
            AIVentureLink curates and matches enterprises with specialized AI solution providers
            across six high-impact domains — from conversational AI to industry-specific deployments.
          </p>
        </div>

        {/* Domain pills */}
        <div className="reveal-hidden flex flex-wrap justify-center gap-3">
          {domainStats.map((d, i) => (
            <div
              key={d.label}
              className={`flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/[0.08] hover:border-aivl-blue/30 transition-all duration-200 delay-${i * 50}`}
            >
              <Icon name={d.icon as "ChatBubbleLeftRightIcon"} size={14} className="text-aivl-blue-glow" />
              <span className="text-sm text-aivl-text-secondary">{d.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}