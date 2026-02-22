"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AppLogo from "@/components/ui/AppLogo";
import Icon from "@/components/ui/AppIcon";

const navLinks = [
  { label: "Home",     href: "/homepage" },
  { label: "Services", href: "/services" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled,     setScrolled]     = useState(false);
  const [mobileOpen,   setMobileOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else            document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#050810]/95 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >
        <div className="container-wide">
          <nav className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link href="/homepage" aria-label="AIVentureLink Home">
              <AppLogo
                text="AIVentureLink"
                iconName="SparklesIcon"
                size={64}
                className="cursor-pointer"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(link.href)
                      ? "text-aivl-blue-glow bg-aivl-blue/10" :"text-aivl-text-secondary hover:text-aivl-text-primary hover:bg-white/[0.05]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/submit-requirement"
                className="px-5 py-2 rounded-lg text-sm font-semibold text-aivl-text-primary border border-white/10 hover:border-aivl-blue/40 hover:bg-aivl-blue/10 transition-all duration-200"
              >
                Submit Requirement
              </Link>
              <Link
                href="/submit-requirement"
                className="px-5 py-2 rounded-lg text-sm font-semibold text-white bg-aivl-blue hover:bg-aivl-blue-light transition-all duration-200 shadow-glow-blue"
              >
                Become a Partner
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-aivl-text-secondary hover:text-white hover:bg-white/[0.05] transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <Icon name={mobileOpen ? "XMarkIcon" : "Bars3Icon"} size={24} />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-[#050810]/95 backdrop-blur-xl"
          onClick={() => setMobileOpen(false)}
        />
        <nav className="absolute top-16 left-0 right-0 p-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                isActive(link.href)
                  ? "text-aivl-blue-glow bg-aivl-blue/10 border border-aivl-blue/20" :"text-aivl-text-secondary hover:text-white hover:bg-white/[0.05]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-white/[0.06] flex flex-col gap-3">
            <Link
              href="/submit-requirement"
              onClick={() => setMobileOpen(false)}
              className="px-5 py-3 rounded-xl text-sm font-semibold text-center text-aivl-text-primary border border-white/10 hover:border-aivl-blue/40 transition-all"
            >
              Submit Requirement
            </Link>
            <Link
              href="/submit-requirement"
              onClick={() => setMobileOpen(false)}
              className="px-5 py-3 rounded-xl text-sm font-semibold text-center text-white bg-aivl-blue hover:bg-aivl-blue-light transition-all"
            >
              Become a Partner
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}