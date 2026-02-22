"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Icon from "@/components/ui/AppIcon";

const domains = [
  {
    icon:     "ChatBubbleLeftRightIcon",
    title:    "Conversational & Voice AI",
    desc:     "Chatbots, virtual assistants, IVR automation, and multilingual voice agents for enterprise helpdesks and customer service.",
    tags:     ["Chatbots", "Voice Agents", "IVR"],
    color:    "from-blue-600/20 to-cyan-600/10",
    accentColor: "text-blue-400",
    borderColor: "border-blue-500/20",
  },
  {
    icon:     "CpuChipIcon",
    title:    "Enterprise Automation AI",
    desc:     "RPA augmented with AI, intelligent document processing, and agentic AI for back-office operations.",
    tags:     ["RPA+AI", "IDP", "Agentic AI"],
    color:    "from-violet-600/20 to-purple-600/10",
    accentColor: "text-violet-400",
    borderColor: "border-violet-500/20",
  },
  {
    icon:     "CircleStackIcon",
    title:    "Data & AI Infrastructure",
    desc:     "MLOps platforms, data pipelines, vector databases, and AI governance frameworks for scalable deployments.",
    tags:     ["MLOps", "Vector DB", "LLMOps"],
    color:    "from-emerald-600/20 to-teal-600/10",
    accentColor: "text-emerald-400",
    borderColor: "border-emerald-500/20",
  },
  {
    icon:     "MegaphoneIcon",
    title:    "Marketing & Commerce AI",
    desc:     "Personalization engines, AI-driven content generation, ad optimization, and recommendation systems.",
    tags:     ["Personalization", "Ad AI", "Recommendations"],
    color:    "from-orange-600/20 to-amber-600/10",
    accentColor: "text-orange-400",
    borderColor: "border-orange-500/20",
  },
  {
    icon:     "BanknotesIcon",
    title:    "Fintech & Analytics AI",
    desc:     "Predictive analytics, fraud detection, AI-driven spend analysis, risk modeling, and credit scoring.",
    tags:     ["Fraud Detection", "Risk AI", "Analytics"],
    color:    "from-rose-600/20 to-pink-600/10",
    accentColor: "text-rose-400",
    borderColor: "border-rose-500/20",
  },
  {
    icon:     "BuildingStorefrontIcon",
    title:    "Industry-Specific AI",
    desc:     "Vertical AI for healthcare, legal, manufacturing, logistics, real estate, and education sectors.",
    tags:     ["Healthcare AI", "Legal AI", "Manufacturing"],
    color:    "from-sky-600/20 to-indigo-600/10",
    accentColor: "text-sky-400",
    borderColor: "border-sky-500/20",
  },
];

export default function DomainsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal-hidden");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("revealed"); }),
      { threshold: 0.08 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#0A0F1E] relative">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="container-wide relative z-10">

        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 reveal-hidden">
          <div>
            <span className="tag-badge mb-4 inline-block">6 Solution Domains</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-aivl-text-primary">
              AI Solutions Across <br className="hidden md:block" />
              <span className="gradient-text">Every Enterprise Need</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-aivl-blue-glow hover:text-white transition-colors whitespace-nowrap"
          >
            Explore All Domains
            <Icon name="ArrowRightIcon" size={16} />
          </Link>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {domains.map((domain, i) => (
            <div
              key={domain.title}
              className={`reveal-hidden delay-${(i % 3 + 1) * 100} relative rounded-2xl p-6 bg-gradient-to-br ${domain.color} border ${domain.borderColor} card-lift overflow-hidden group`}
            >
              {/* Glow spot */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/[0.02] blur-2xl group-hover:bg-white/[0.04] transition-all" />

              <div className={`w-11 h-11 rounded-xl bg-[#050810]/60 border border-white/10 flex items-center justify-center mb-5 ${domain.accentColor}`}>
                <Icon name={domain.icon as "ChatBubbleLeftRightIcon"} size={22} />
              </div>

              <h3 className="font-display font-semibold text-lg text-aivl-text-primary mb-2">{domain.title}</h3>
              <p className="text-sm text-aivl-text-secondary leading-relaxed mb-4">{domain.desc}</p>

              <div className="flex flex-wrap gap-2">
                {domain.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#050810]/50 border border-white/[0.08] text-aivl-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}