"use client";

import { useEffect, useRef } from "react";
import Icon from "@/components/ui/AppIcon";

const categories = [
  {
    icon:  "RocketLaunchIcon",
    title: "AI Startups",
    desc:  "Early-stage and growth-stage AI product companies with specialized domain expertise.",
    count: "40+",
  },
  {
    icon:  "BuildingOffice2Icon",
    title: "Enterprise Vendors",
    desc:  "Established AI software and services companies with proven enterprise deployments.",
    count: "25+",
  },
  {
    icon:  "ServerStackIcon",
    title: "Infrastructure Partners",
    desc:  "Cloud, MLOps, data pipeline, and compute providers powering AI workloads.",
    count: "15+",
  },
  {
    icon:  "AcademicCapIcon",
    title: "Innovation Ecosystems",
    desc:  "Accelerators, incubators, research institutions, and government AI initiatives.",
    count: "20+",
  },
];

const trustSignals = [
  { value: "6",    label: "Solution Domains" },
  { value: "100+", label: "Vetted Partners" },
  { value: "34%",  label: "Faster Deployment" },
  { value: "73%",  label: "Partnership Match Rate" },
];

export default function EcosystemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal-hidden, .reveal-left, .reveal-right");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("revealed"); }),
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container-wide relative z-10">

        {/* Heading */}
        <div className="text-center mb-16 reveal-hidden">
          <span className="tag-badge mb-4 inline-block">Our Ecosystem</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-aivl-text-primary mb-4">
            A Trusted Network of <span className="gradient-text">AI Partners</span>
          </h2>
          <p className="max-w-xl mx-auto text-aivl-text-secondary text-lg">
            Four distinct partner categories form the backbone of the AIVentureLink ecosystem,
            ensuring every enterprise finds the right AI solution.
          </p>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className={`reveal-hidden delay-${(i + 1) * 100} glass glow-border rounded-2xl p-6 card-lift flex flex-col gap-4`}
            >
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-aivl-blue/15 border border-aivl-blue/20 flex items-center justify-center">
                  <Icon name={cat.icon as "RocketLaunchIcon"} size={22} className="text-aivl-blue-glow" />
                </div>
                <span className="font-display font-bold text-2xl gradient-text">{cat.count}</span>
              </div>
              <div>
                <h3 className="font-display font-semibold text-base text-aivl-text-primary mb-1">{cat.title}</h3>
                <p className="text-sm text-aivl-text-secondary leading-relaxed">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust signals bar */}
        <div className="reveal-hidden glass rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 border border-aivl-blue/15">
          {trustSignals.map((sig, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <span className="font-display font-bold text-3xl md:text-4xl gradient-text">{sig.value}</span>
              <span className="text-sm text-aivl-text-muted mt-1">{sig.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}