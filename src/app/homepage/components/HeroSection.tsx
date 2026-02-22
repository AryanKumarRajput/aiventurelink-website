"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import AppImage from "@/components/ui/AppImage";

const stats = [
{ value: "34%", label: "Faster Time-to-Market" },
{ value: "73%", label: "More Partnerships Identified" },
{ value: "6", label: "AI Solution Domains" },
{ value: "100+", label: "Vetted AI Partners" }];


export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
      const card = el.querySelector<HTMLElement>(".hero-float-card");
      if (card) {
        card.style.transform = `translateY(-10px) rotateX(${-y * 0.4}deg) rotateY(${x * 0.4}deg)`;
      }
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-16">
      
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_1a9e4a1f7-1768426083409.png"
          alt="Abstract glowing blue network visualization representing AI connections"
          fill
          className="object-cover opacity-20"
          priority />
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#050810]/60 via-[#050810]/40 to-[#050810]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 z-0 grid-pattern opacity-40" />

      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] orb bg-aivl-blue/10 animate-orb-drift" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] orb bg-aivl-cyan/8 animate-orb-drift" style={{ animationDelay: "-4s" }} />

      {/* Hero content */}
      <div className="relative z-10 container-wide flex flex-col items-center text-center">

        {/* Badge */}
        <div className="tag-badge mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          AI Ecosystem Platform · Operated by Zestova Private Limited
        </div>

        {/* Headline */}
        <h1
          className="font-display font-bold leading-[1.05] tracking-tight mb-6 animate-fade-in-up"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", animationDelay: "0.2s" }}>
          
          <span className="text-aivl-text-primary">Connecting Enterprises</span>
          <br />
          <span className="gradient-text-warm">with Trusted AI Solutions</span>
        </h1>

        {/* Subheadline */}
        <p
          className="max-w-2xl text-lg md:text-xl text-aivl-text-secondary leading-relaxed mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.35s" }}>
          
          AIVentureLink is a curated AI solutions brokerage — we analyze your enterprise
          requirements and match you with vetted AI solution providers across 6 specialized domains,
          removing the complexity of vendor discovery and evaluation.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}>
          
          <Link
            href="/submit-requirement"
            className="group px-8 py-4 rounded-xl font-semibold text-white btn-shimmer shadow-glow-blue hover:scale-105 active:scale-95 transition-transform duration-200 text-base">
            
            Submit Requirement
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link
            href="/submit-requirement"
            className="px-8 py-4 rounded-xl font-semibold text-aivl-text-primary border border-white/10 hover:border-aivl-blue/40 hover:bg-aivl-blue/10 transition-all duration-200 text-base">
            
            Become a Partner
          </Link>
        </div>

        {/* Floating stats card */}
        <div
          className="hero-float-card glass glow-border rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl w-full animate-fade-in-up"
          style={{
            animationDelay: "0.65s",
            transition: "transform 0.1s ease-out",
            transformStyle: "preserve-3d"
          }}>
          
          {stats.map((stat, i) =>
          <div key={i} className="flex flex-col items-center text-center">
              <span className="font-display font-bold text-2xl md:text-3xl gradient-text">{stat.value}</span>
              <span className="text-xs text-aivl-text-muted mt-1 leading-tight">{stat.label}</span>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-aivl-text-muted tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-aivl-text-muted to-transparent" />
      </div>
    </section>);

}