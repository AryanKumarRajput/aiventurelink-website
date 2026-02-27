"use client";

import { useEffect, useRef } from "react";
import Icon from "@/components/ui/AppIcon";

const steps = [
  {
    number: "01",
    icon: "DocumentTextIcon",
    title: "Submit Requirement",
    desc: "Business shares problem statement, objectives, timeline, and constraints through our structured intake process.",
    detail: "Takes under 5 minutes",
  },
  {
    number: "02",
    icon: "MagnifyingGlassIcon",
    title: "Requirement & Scope Design",
    desc: "We analyze the use case, define solution scope, and identify the AI capabilities required for successful implementation.",
    detail: "Response within 24 hours",
  },
  {
    number: "03",
    icon: "SparklesIcon",
    title: "Solution Architecture",
    desc: "AIVentureLink selects and orchestrates the right AI technologies and specialized delivery partners aligned to the project.",
    detail: "Multi-vendor orchestration",
  },
  {
    number: "04",
    icon: "ShieldCheckIcon",
    title: "Managed Delivery",
    desc: "We coordinate vendors, manage milestones, and ensure quality execution while providing a single point of accountability.",
    detail: "End-to-end management",
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal-hidden, .reveal-left");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("revealed"); }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] orb bg-aivl-blue/5" />

      <div className="container-wide relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 reveal-hidden">
          <span className="tag-badge mb-4 inline-block">Structured Delivery Process</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-aivl-text-primary mb-4">
            How <span className="gradient-text">AIVentureLink</span> Delivers
          </h2>
          <p className="max-w-xl mx-auto text-aivl-text-secondary text-lg">
            From problem definition to implementation — a structured approach where we design,
            orchestrate and manage AI delivery for your business.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-[3.25rem] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-aivl-blue/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`reveal-hidden delay-${(i + 1) * 100} relative flex flex-col items-center text-center p-6 rounded-2xl glass glow-border card-lift`}
              >
                <div className="relative mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-aivl-blue/15 border border-aivl-blue/30 flex items-center justify-center animate-pulse-glow">
                    <Icon name={step.icon as "DocumentTextIcon"} size={24} className="text-aivl-blue-glow" />
                  </div>
                  <span className="absolute -top-2 -right-2 text-[10px] font-bold font-display text-aivl-blue-glow bg-[#050810] border border-aivl-blue/30 rounded-full w-5 h-5 flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-display font-semibold text-base text-aivl-text-primary mb-2">{step.title}</h3>
                <p className="text-sm text-aivl-text-secondary leading-relaxed mb-3">{step.desc}</p>
                <span className="text-xs font-semibold text-aivl-blue-glow bg-aivl-blue/10 px-3 py-1 rounded-full border border-aivl-blue/20">
                  {step.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}