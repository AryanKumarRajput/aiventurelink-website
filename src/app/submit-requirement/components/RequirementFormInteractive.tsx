"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import Link from "next/link";
import Icon from "@/components/ui/AppIcon";

const industries = [
  "Banking & Financial Services",
  "Healthcare & Life Sciences",
  "Manufacturing & Industrials",
  "Retail & E-commerce",
  "Logistics & Supply Chain",
  "Real Estate & PropTech",
  "Legal & Compliance",
  "Education & EdTech",
  "Government & Public Sector",
  "Media & Entertainment",
  "Telecom & Technology",
  "Other",
];

const budgetRanges = [
  "Under ₹10 Lakhs",
  "₹10L – ₹50L",
  "₹50L – ₹2 Crore",
  "₹2 Crore+",
];

const timelines = [
  "Immediate (ASAP)",
  "1–3 Months",
  "3–6 Months",
  "6+ Months",
];

const aiDomains = [
  "Conversational & Voice AI",
  "Enterprise Automation AI",
  "Data & AI Infrastructure",
  "Marketing & Commerce AI",
  "Fintech & Analytics AI",
  "Industry-Specific AI Solutions",
];

const enterpriseExperience = [
  "None — first enterprise project",
  "1–2 enterprise projects",
  "3–10 enterprise projects",
  "10+ enterprise projects",
];

type TabType = "enterprise" | "partner";

interface FormState {
  // Enterprise
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  problem: string;
  budget: string;
  timeline: string;
  // Partner
  partnerCompany: string;
  website: string;
  contactName: string;
  partnerEmail: string;
  selectedDomains: string[];
  experience: string;
  description: string;
}

const initialForm: FormState = {
  name: "", company: "", email: "", phone: "",
  industry: "", problem: "", budget: "", timeline: "",
  partnerCompany: "", website: "", contactName: "", partnerEmail: "",
  selectedDomains: [], experience: "", description: "",
};

const trustPoints = [
  { icon: "ShieldCheckIcon",  label: "Enterprise-grade security" },
  { icon: "LockClosedIcon",   label: "Data handled confidentially" },
  { icon: "ClockIcon",        label: "Response within 24 hours" },
  { icon: "StarIcon",         label: "100+ vetted AI partners" },
];

export default function RequirementFormInteractive() {
  const [activeTab,  setActiveTab]  = useState<TabType>("enterprise");
  const [formState,  setFormState]  = useState<FormState>(initialForm);
  const [submitted,  setSubmitted]  = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors,     setErrors]     = useState<Record<string, string>>({});
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

  const set = (key: keyof FormState, val: string) =>
    setFormState((p) => ({ ...p, [key]: val }));

  const toggleDomain = (domain: string) => {
    setFormState((p) => ({
      ...p,
      selectedDomains: p.selectedDomains.includes(domain)
        ? p.selectedDomains.filter((d) => d !== domain)
        : [...p.selectedDomains, domain],
    }));
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (activeTab === "enterprise") {
      if (!formState.name.trim())    errs.name    = "Name is required";
      if (!formState.company.trim()) errs.company = "Company is required";
      if (!formState.email.trim() || !/\S+@\S+\.\S+/.test(formState.email))
                                     errs.email   = "Valid email is required";
      if (!formState.phone.trim())   errs.phone   = "Phone is required";
      if (!formState.industry)       errs.industry = "Please select an industry";
      if (!formState.problem.trim() || formState.problem.length < 30)
                                     errs.problem  = "Please describe your problem in at least 30 characters";
      if (!formState.budget)         errs.budget   = "Please select a budget range";
      if (!formState.timeline)       errs.timeline = "Please select a timeline";
    } else {
      if (!formState.partnerCompany.trim()) errs.partnerCompany = "Company name is required";
      if (!formState.website.trim())        errs.website        = "Website URL is required";
      if (!formState.contactName.trim())    errs.contactName    = "Contact name is required";
      if (!formState.partnerEmail.trim() || !/\S+@\S+\.\S+/.test(formState.partnerEmail))
                                            errs.partnerEmail   = "Valid email is required";
      if (formState.selectedDomains.length === 0) errs.selectedDomains = "Select at least one domain";
      if (!formState.experience)            errs.experience     = "Please select your experience level";
      if (!formState.description.trim() || formState.description.length < 30)
                                            errs.description    = "Please describe your company in at least 30 characters";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    // Mock submit — backend integration point
    await new Promise((r) => setTimeout(r, 1800));
    setSubmitting(false);
    setSubmitted(true);
  };

  const inputClass = (field: string) =>
    `w-full form-input rounded-xl px-4 py-3 text-sm ${
      errors[field] ? "border-rose-500/60" : ""
    }`;

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-20 h-20 rounded-full bg-aivl-blue/15 border border-aivl-blue/30 flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
            <Icon name="CheckCircleIcon" size={40} className="text-aivl-blue-glow" />
          </div>
          <h2 className="font-display font-bold text-2xl text-aivl-text-primary mb-3">
            {activeTab === "enterprise" ? "Requirement Submitted!" : "Partner Application Received!"}
          </h2>
          <p className="text-aivl-text-secondary mb-6">
            {activeTab === "enterprise" ?"Our team will review your requirement and get back to you within 24 hours with matched AI solution providers." :"Thank you for your interest in joining the AIVentureLink ecosystem. Our team will review your application and reach out within 48 hours."}
          </p>
          <button
            onClick={() => { setSubmitted(false); setFormState(initialForm); setErrors({}); }}
            className="px-6 py-3 rounded-xl bg-aivl-blue text-white font-semibold hover:bg-aivl-blue-light transition-colors"
          >
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div ref={sectionRef} className="container-wide py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

        {/* Left sidebar */}
        <aside className="lg:col-span-4 reveal-left">
          <div className="sticky top-24">
            {/* About card */}
            <div className="glass glow-border rounded-2xl p-6 mb-6">
              <h3 className="font-display font-semibold text-lg text-aivl-text-primary mb-2">
                Why AIVentureLink?
              </h3>
              <p className="text-sm text-aivl-text-secondary leading-relaxed mb-4">
                We analyze your enterprise AI requirements and match you with curated,
                vetted solution providers — removing the complexity of vendor discovery.
              </p>
              <div className="space-y-3">
                {trustPoints.map((pt) => (
                  <div key={pt.label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-aivl-blue/15 border border-aivl-blue/20 flex items-center justify-center flex-shrink-0">
                      <Icon name={pt.icon as "ShieldCheckIcon"} size={14} className="text-aivl-blue-glow" />
                    </div>
                    <span className="text-sm text-aivl-text-secondary">{pt.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="glass rounded-2xl p-6 border border-white/[0.06] mb-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "100+", lbl: "Vetted Partners" },
                  { val: "6",    lbl: "Domains Covered" },
                  { val: "34%",  lbl: "Faster Deployment" },
                  { val: "24h",  lbl: "Response Time" },
                ].map((s) => (
                  <div key={s.lbl} className="text-center">
                    <div className="font-display font-bold text-xl gradient-text">{s.val}</div>
                    <div className="text-xs text-aivl-text-muted mt-0.5">{s.lbl}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div className="text-sm text-aivl-text-muted space-y-2">
              <div className="flex items-center gap-2">
                <Icon name="EnvelopeIcon" size={14} />
                <a href="mailto:connect@aiventurelink.com" className="hover:text-aivl-blue-glow transition-colors">
                  connect@aiventurelink.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="MapPinIcon" size={14} className="mt-0.5 flex-shrink-0" />
                <span>Rohini Sector 18–19, New Delhi, India</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main form */}
        <div className="lg:col-span-8 reveal-right">
          {/* Tab switcher */}
          <div className="flex gap-2 p-1 bg-[#0A0F1E] rounded-2xl border border-white/[0.06] mb-8">
            {(["enterprise", "partner"] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setErrors({}); setFormState(initialForm); }}
                className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-aivl-blue text-white shadow-glow-blue"
                    : "text-aivl-text-secondary hover:text-aivl-text-primary"
                }`}
              >
                {tab === "enterprise" ? "🏢 Submit Requirement" : "🤝 Become a Partner"}
              </button>
            ))}
          </div>

          <div className="glass glow-border rounded-3xl p-8">
            <div className="mb-6">
              <h2 className="font-display font-bold text-2xl text-aivl-text-primary">
                {activeTab === "enterprise" ? "Submit Your AI Requirement" : "Partner With AIVentureLink"}
              </h2>
              <p className="text-sm text-aivl-text-secondary mt-1">
                {activeTab === "enterprise" ?"Tell us about your enterprise AI challenge. We'll match you with the right solution providers." :"Join our curated ecosystem of AI solution providers and connect with enterprise clients."}
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              {activeTab === "enterprise" ? (
                <div className="space-y-5">
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-aivl-text-secondary mb-1.5 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Arjun Sharma"
                        value={formState.name}
                        onChange={(e) => set("name", e.target.value)}
                        className={inputClass("name")}
                      />
                      {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-aivl-text-secondary mb-1.5 uppercase tracking-wider">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Reliance Industries Ltd."
                        value={formState.company}
                        onChange={(e) => set("company", e.target.value)}
                        className={inputClass("company")}
                      />
                      {errors.company && <p className="text-xs text-rose-400 mt-1">{errors.company}</p>}
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-aivl-text-secondary mb-1.5 uppercase tracking-wider">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        placeholder="arjun@company.com"
                        value={formState.email}
                        onChange={(e) => set("email", e.target.value)}
                        className={inputClass("email")}
                      />
                      {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-aivl-text-secondary mb-1.5 uppercase tracking-wider">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formState.phone}
                        onChange={(e) => set("phone", e.target.value)}
                        className={inputClass("phone")}
                      />
                      {errors.phone && <p className="text-xs text-rose-400 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Industry */}
                  <div>
                    <label className="block text-xs font-semibold text-aivl-text-secondary mb-1.5 uppercase tracking-wider">
                      Industry / Sector *
                    </label>
                    <select
                      value={formState.industry}
                      onChange={(e) => set("industry", e.target.value)}
                      className={`${inputClass("industry")} cursor-pointer`}
                    >
                      <option value="" disabled>Select your industry</option>
                      {industries.map((ind) => (
                        <option key={ind} value={ind} className="bg-[#0A0F1E]">{ind}</option>
                      ))}
                    </select>
                    {errors.industry && <p className="text-xs text-rose-400 mt-1">{errors.industry}</p>}
                  </div>

                  {/* Problem statement */}
                  <div>
                    <label className="block text-xs font-semibold text-aivl-text-secondary mb-1.5 uppercase tracking-wider">
                      Problem Statement *
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Describe the AI challenge or use case you want to address. Include context about your current process, pain points, and desired outcomes..."
                      value={formState.problem}
                      onChange={(e) => set("problem", e.target.value)}
                      className={`${inputClass("problem")} resize-none`}
                    />
                    <div className="flex justify-between mt-1">
                      {errors.problem
                        ? <p className="text-xs text-rose-400">{errors.problem}</p>
                        : <span />
                      }
                      <span className="text-xs text-aivl-text-muted">{formState.problem.length} chars</span>
                    </div>
                  </div>

                  {/* Budget + Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-aivl-text-secondary mb-1.5 uppercase tracking-wider">
                        Budget Range *
                      </label>
                      <select
                        value={formState.budget}
                        onChange={(e) => set("budget", e.target.value)}
                        className={`${inputClass("budget")} cursor-pointer`}
                      >
                        <option value="" disabled>Select budget</option>
                        {budgetRanges.map((b) => (
                          <option key={b} value={b} className="bg-[#0A0F1E]">{b}</option>
                        ))}
                      </select>
                      {errors.budget && <p className="text-xs text-rose-400 mt-1">{errors.budget}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-aivl-text-secondary mb-1.5 uppercase tracking-wider">
                        Timeline *
                      </label>
                      <select
                        value={formState.timeline}
                        onChange={(e) => set("timeline", e.target.value)}
                        className={`${inputClass("timeline")} cursor-pointer`}
                      >
                        <option value="" disabled>Select timeline</option>
                        {timelines.map((t) => (
                          <option key={t} value={t} className="bg-[#0A0F1E]">{t}</option>
                        ))}
                      </select>
                      {errors.timeline && <p className="text-xs text-rose-400 mt-1">{errors.timeline}</p>}
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-xl font-semibold text-white btn-shimmer shadow-glow-blue hover:scale-[1.01] active:scale-[0.99] transition-transform duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <Icon name="ArrowPathIcon" size={18} className="animate-spin" />
                        Submitting Requirement...
                      </>
                    ) : (
                      <>
                        Submit Requirement
                        <Icon name="ArrowRightIcon" size={18} />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-center text-aivl-text-muted">
                    By submitting, you agree to our{" "}
                    <Link href="#" className="text-aivl-blue-glow hover:underline">Privacy Policy</Link>
                    {" "}and{" "}
                    <Link href="#" className="text-aivl-blue-glow hover:underline">Terms of Use</Link>.
                    Your data is handled with enterprise-grade confidentiality.
                  </p>
                </div>
              ) : (
                /* Partner form */
                <div className="space-y-5">
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-aivl-text-secondary mb-1.5 uppercase tracking-wider">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Turing AI Solutions Pvt. Ltd."
                        value={formState.partnerCompany}
                        onChange={(e) => set("partnerCompany", e.target.value)}
                        className={inputClass("partnerCompany")}
                      />
                      {errors.partnerCompany && <p className="text-xs text-rose-400 mt-1">{errors.partnerCompany}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-aivl-text-secondary mb-1.5 uppercase tracking-wider">
                        Website URL *
                      </label>
                      <input
                        type="url"
                        placeholder="https://yourcompany.ai"
                        value={formState.website}
                        onChange={(e) => set("website", e.target.value)}
                        className={inputClass("website")}
                      />
                      {errors.website && <p className="text-xs text-rose-400 mt-1">{errors.website}</p>}
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-aivl-text-secondary mb-1.5 uppercase tracking-wider">
                        Contact Person *
                      </label>
                      <input
                        type="text"
                        placeholder="Priya Nair"
                        value={formState.contactName}
                        onChange={(e) => set("contactName", e.target.value)}
                        className={inputClass("contactName")}
                      />
                      {errors.contactName && <p className="text-xs text-rose-400 mt-1">{errors.contactName}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-aivl-text-secondary mb-1.5 uppercase tracking-wider">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        placeholder="priya@yourcompany.ai"
                        value={formState.partnerEmail}
                        onChange={(e) => set("partnerEmail", e.target.value)}
                        className={inputClass("partnerEmail")}
                      />
                      {errors.partnerEmail && <p className="text-xs text-rose-400 mt-1">{errors.partnerEmail}</p>}
                    </div>
                  </div>

                  {/* AI Domains multi-select */}
                  <div>
                    <label className="block text-xs font-semibold text-aivl-text-secondary mb-2 uppercase tracking-wider">
                      AI Domain(s) * <span className="normal-case text-aivl-text-muted">(select all that apply)</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {aiDomains.map((domain) => {
                        const selected = formState.selectedDomains.includes(domain);
                        return (
                          <button
                            key={domain}
                            type="button"
                            onClick={() => toggleDomain(domain)}
                            className={`text-left px-4 py-2.5 rounded-xl text-sm border transition-all duration-200 ${
                              selected
                                ? "bg-aivl-blue/15 border-aivl-blue/40 text-aivl-blue-glow" :"bg-white/[0.03] border-white/[0.08] text-aivl-text-secondary hover:border-aivl-blue/30 hover:text-aivl-text-primary"
                            }`}
                          >
                            <span className="mr-2">{selected ? "✓" : "○"}</span>
                            {domain}
                          </button>
                        );
                      })}
                    </div>
                    {errors.selectedDomains && <p className="text-xs text-rose-400 mt-1">{errors.selectedDomains}</p>}
                  </div>

                  {/* Experience */}
                  <div>
                    <label className="block text-xs font-semibold text-aivl-text-secondary mb-1.5 uppercase tracking-wider">
                      Enterprise Experience *
                    </label>
                    <select
                      value={formState.experience}
                      onChange={(e) => set("experience", e.target.value)}
                      className={`${inputClass("experience")} cursor-pointer`}
                    >
                      <option value="" disabled>Select experience level</option>
                      {enterpriseExperience.map((exp) => (
                        <option key={exp} value={exp} className="bg-[#0A0F1E]">{exp}</option>
                      ))}
                    </select>
                    {errors.experience && <p className="text-xs text-rose-400 mt-1">{errors.experience}</p>}
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-xs font-semibold text-aivl-text-secondary mb-1.5 uppercase tracking-wider">
                      Company Description *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe your AI products or services, key differentiators, and the types of enterprise problems you solve..."
                      value={formState.description}
                      onChange={(e) => set("description", e.target.value)}
                      className={`${inputClass("description")} resize-none`}
                    />
                    <div className="flex justify-between mt-1">
                      {errors.description
                        ? <p className="text-xs text-rose-400">{errors.description}</p>
                        : <span />
                      }
                      <span className="text-xs text-aivl-text-muted">{formState.description.length} chars</span>
                    </div>
                  </div>

                  {/* Pitch deck upload note */}
                  <div className="glass rounded-xl p-4 border border-white/[0.06] flex items-start gap-3">
                    <Icon name="DocumentArrowUpIcon" size={18} className="text-aivl-text-muted mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-aivl-text-secondary">
                        <span className="font-semibold text-aivl-text-primary">Pitch Deck Upload</span> — After submission, our team will send you a secure upload link for your pitch deck (PDF/PPT, max 10MB).
                      </p>
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-xl font-semibold text-white btn-shimmer shadow-glow-blue hover:scale-[1.01] active:scale-[0.99] transition-transform duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <Icon name="ArrowPathIcon" size={18} className="animate-spin" />
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        Submit Partner Application
                        <Icon name="ArrowRightIcon" size={18} />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-center text-aivl-text-muted">
                    By submitting, you agree to our{" "}
                    <Link href="#" className="text-aivl-blue-glow hover:underline">Privacy Policy</Link>
                    {" "}and{" "}
                    <Link href="#" className="text-aivl-blue-glow hover:underline">Terms of Use</Link>.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}