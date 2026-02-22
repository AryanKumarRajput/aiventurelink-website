"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Icon from "@/components/ui/AppIcon";

interface Domain {
  id:          string;
  icon:        string;
  title:       string;
  tagline:     string;
  description: string;
  useCases:    string[];
  features:    string[];
  gradient:    string;
  accentColor: string;
  borderColor: string;
  bgColor:     string;
}

const domains: Domain[] = [
  {
    id:          "conversational",
    icon:        "ChatBubbleLeftRightIcon",
    title:       "Conversational & Voice AI",
    tagline:     "Transform every customer interaction with intelligent, human-like AI.",
    description: "Deploy enterprise-grade chatbots, virtual assistants, IVR automation systems, and multilingual voice agents that handle complex queries, reduce support costs, and operate 24/7 without fatigue.",
    useCases:    [
      "Enterprise helpdesk automation with 80%+ query resolution",
      "Multilingual voice IVR for banking and telecom",
      "Customer service AI reducing ticket volume by 60%",
      "WhatsApp/Slack/Teams-integrated virtual assistants",
    ],
    features:    ["NLP & NLU engines", "Omnichannel deployment", "Multilingual support", "CRM integration", "Analytics dashboard", "Human handoff"],
    gradient:    "from-blue-900/30 via-[#0A0F1E] to-[#0A0F1E]",
    accentColor: "text-blue-400",
    borderColor: "border-blue-500/20 hover:border-blue-500/40",
    bgColor:     "bg-blue-500/10",
  },
  {
    id:          "automation",
    icon:        "CpuChipIcon",
    title:       "Enterprise Automation AI",
    tagline:     "Eliminate manual work across your back-office with intelligent automation.",
    description: "Move beyond basic RPA with AI-augmented automation that handles unstructured data, makes decisions, and orchestrates complex multi-step workflows across your enterprise systems.",
    useCases:    [
      "Invoice processing automation with 99% accuracy",
      "Intelligent document processing for legal contracts",
      "HR onboarding workflow orchestration",
      "Supply chain exception management with agentic AI",
    ],
    features:    ["AI-augmented RPA", "Intelligent document processing", "Agentic AI workflows", "ERP/SAP integration", "Exception handling", "Audit trails"],
    gradient:    "from-violet-900/30 via-[#0A0F1E] to-[#0A0F1E]",
    accentColor: "text-violet-400",
    borderColor: "border-violet-500/20 hover:border-violet-500/40",
    bgColor:     "bg-violet-500/10",
  },
  {
    id:          "infrastructure",
    icon:        "CircleStackIcon",
    title:       "Data & AI Infrastructure",
    tagline:     "Build the foundation that makes enterprise AI reliable and scalable.",
    description: "From MLOps platforms and data pipelines to vector databases and AI governance frameworks — ensure your AI initiatives are built on a robust, observable, and compliant foundation.",
    useCases:    [
      "Enterprise data lake modernization for AI readiness",
      "LLM deployment and fine-tuning infrastructure",
      "AI model monitoring and drift detection",
      "Vector database for RAG-based enterprise search",
    ],
    features:    ["MLOps platform", "Vector databases", "Data pipelines", "Model governance", "AI observability", "Cost optimization"],
    gradient:    "from-emerald-900/30 via-[#0A0F1E] to-[#0A0F1E]",
    accentColor: "text-emerald-400",
    borderColor: "border-emerald-500/20 hover:border-emerald-500/40",
    bgColor:     "bg-emerald-500/10",
  },
  {
    id:          "marketing",
    icon:        "MegaphoneIcon",
    title:       "Marketing & Commerce AI",
    tagline:     "Personalize at scale and drive measurable revenue with AI.",
    description: "Deploy AI-powered personalization engines, content generation systems, ad optimization tools, and recommendation algorithms that increase conversion rates and reduce customer acquisition costs.",
    useCases:    [
      "E-commerce personalization increasing AOV by 35%",
      "AI content generation for 10x marketing output",
      "Programmatic ad optimization reducing CAC by 40%",
      "Customer segmentation with 200+ behavioral signals",
    ],
    features:    ["Personalization engine", "Content generation AI", "Ad optimization", "Recommendation systems", "Customer segmentation", "A/B testing AI"],
    gradient:    "from-orange-900/30 via-[#0A0F1E] to-[#0A0F1E]",
    accentColor: "text-orange-400",
    borderColor: "border-orange-500/20 hover:border-orange-500/40",
    bgColor:     "bg-orange-500/10",
  },
  {
    id:          "fintech",
    icon:        "BanknotesIcon",
    title:       "Fintech & Analytics AI",
    tagline:     "Turn financial data into competitive advantage with AI-driven insights.",
    description: "Deploy predictive analytics, real-time fraud detection, AI-driven spend analysis, risk modeling, and credit scoring systems that help financial institutions make faster, more accurate decisions.",
    useCases:    [
      "Real-time fraud detection with <100ms latency",
      "Credit scoring model reducing default rates by 25%",
      "Regulatory compliance analytics automation",
      "Financial forecasting with 94% accuracy",
    ],
    features:    ["Fraud detection AI", "Credit risk modeling", "Predictive analytics", "Compliance automation", "Spend analysis", "Regulatory reporting"],
    gradient:    "from-rose-900/30 via-[#0A0F1E] to-[#0A0F1E]",
    accentColor: "text-rose-400",
    borderColor: "border-rose-500/20 hover:border-rose-500/40",
    bgColor:     "bg-rose-500/10",
  },
  {
    id:          "industry",
    icon:        "BuildingStorefrontIcon",
    title:       "Industry-Specific AI Solutions",
    tagline:     "Vertical AI built for the unique challenges of your sector.",
    description: "Purpose-built AI solutions for healthcare, legal, manufacturing, logistics, real estate, and education — designed with domain-specific models, compliance requirements, and industry workflows in mind.",
    useCases:    [
      "Diagnostic AI reducing radiology turnaround by 60%",
      "Contract analysis AI for legal due diligence",
      "Predictive maintenance reducing downtime by 45%",
      "Route optimization AI cutting logistics costs by 30%",
    ],
    features:    ["Healthcare diagnostic AI", "Legal contract analysis", "Predictive maintenance", "Route optimization", "EdTech adaptive learning", "Real estate valuation AI"],
    gradient:    "from-sky-900/30 via-[#0A0F1E] to-[#0A0F1E]",
    accentColor: "text-sky-400",
    borderColor: "border-sky-500/20 hover:border-sky-500/40",
    bgColor:     "bg-sky-500/10",
  },
];

export default function ServicesDomainGrid() {
  const [activeId, setActiveId] = useState<string>("conversational");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal-hidden, .reveal-left, .reveal-right");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("revealed"); }),
      { threshold: 0.05 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const active = domains.find((d) => d.id === activeId) ?? domains[0];

  return (
    <section ref={sectionRef} className="py-16 bg-[#0A0F1E]">
      <div className="container-wide">

        {/* Domain selector tabs */}
        <div className="reveal-hidden mb-10">
          <div className="flex flex-wrap gap-2 p-1.5 bg-[#050810] rounded-2xl border border-white/[0.06]">
            {domains.map((d) => (
              <button
                key={d.id}
                onClick={() => setActiveId(d.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeId === d.id
                    ? `${d.bgColor} ${d.accentColor} border border-current/30`
                    : "text-aivl-text-muted hover:text-aivl-text-secondary"
                }`}
              >
                <Icon name={d.icon as "ChatBubbleLeftRightIcon"} size={15} />
                <span className="hidden sm:inline">{d.title.split(" ")[0]}</span>
                <span className="sm:hidden">{d.title.split("&")[0].trim()}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active domain detail */}
        <div className={`reveal-hidden rounded-3xl bg-gradient-to-br ${active.gradient} border ${active.borderColor} overflow-hidden transition-all duration-300`}>
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

              {/* Left: main info */}
              <div className="lg:col-span-7">
                <div className={`w-14 h-14 rounded-2xl ${active.bgColor} border border-white/10 flex items-center justify-center mb-6 ${active.accentColor}`}>
                  <Icon name={active.icon as "ChatBubbleLeftRightIcon"} size={26} />
                </div>
                <h2 className="font-display font-bold text-2xl md:text-4xl text-aivl-text-primary mb-3">
                  {active.title}
                </h2>
                <p className={`text-lg font-medium mb-4 ${active.accentColor}`}>{active.tagline}</p>
                <p className="text-aivl-text-secondary leading-relaxed mb-8">{active.description}</p>

                {/* Use cases */}
                <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-aivl-text-muted mb-4">
                  Enterprise Use Cases
                </h3>
                <ul className="space-y-3">
                  {active.useCases.map((uc, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full ${active.bgColor} border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Icon name="CheckIcon" size={10} className={active.accentColor} />
                      </div>
                      <span className="text-sm text-aivl-text-secondary leading-relaxed">{uc}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link
                    href="/submit-requirement"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-aivl-blue hover:bg-aivl-blue-light transition-colors duration-200 shadow-glow-blue"
                  >
                    Find {active.title.split(" ")[0]} Providers
                    <Icon name="ArrowRightIcon" size={16} />
                  </Link>
                </div>
              </div>

              {/* Right: feature tags */}
              <div className="lg:col-span-5">
                <div className="glass rounded-2xl p-6 border border-white/[0.06] h-full">
                  <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-aivl-text-muted mb-5">
                    Capabilities Covered
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {active.features.map((feat) => (
                      <span
                        key={feat}
                        className={`text-xs font-semibold px-3 py-1.5 rounded-full ${active.bgColor} ${active.accentColor} border border-current/20`}
                      >
                        {feat}
                      </span>
                    ))}
                  </div>

                  {/* Domain navigation */}
                  <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-aivl-text-muted mb-4">
                    Other Domains
                  </h3>
                  <div className="space-y-2">
                    {domains.filter((d) => d.id !== activeId).slice(0, 4).map((d) => (
                      <button
                        key={d.id}
                        onClick={() => setActiveId(d.id)}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left hover:bg-white/[0.04] transition-colors group"
                      >
                        <Icon name={d.icon as "ChatBubbleLeftRightIcon"} size={14} className="text-aivl-text-muted group-hover:text-aivl-blue-glow transition-colors" />
                        <span className="text-sm text-aivl-text-muted group-hover:text-aivl-text-secondary transition-colors">{d.title}</span>
                        <Icon name="ChevronRightIcon" size={12} className="ml-auto text-aivl-text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All 6 domain cards overview */}
        <div className="mt-12 reveal-hidden">
          <h3 className="font-display font-semibold text-lg text-aivl-text-primary mb-6">
            All Solution Domains
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {domains.map((d, i) => (
              <button
                key={d.id}
                onClick={() => setActiveId(d.id)}
                className={`reveal-hidden delay-${(i % 3 + 1) * 100} text-left p-5 rounded-2xl border transition-all duration-200 card-lift ${
                  activeId === d.id
                    ? `${d.bgColor} ${d.borderColor}`
                    : "bg-[#050810] border-white/[0.06] hover:border-white/[0.12]"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-9 h-9 rounded-xl ${d.bgColor} border border-white/10 flex items-center justify-center`}>
                    <Icon name={d.icon as "ChatBubbleLeftRightIcon"} size={16} className={d.accentColor} />
                  </div>
                  <span className={`text-sm font-semibold ${activeId === d.id ? d.accentColor : "text-aivl-text-primary"}`}>
                    {d.title}
                  </span>
                </div>
                <p className="text-xs text-aivl-text-muted leading-relaxed">{d.tagline}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}