import Link from "next/link";
import AppLogo from "@/components/ui/AppLogo";
import Icon from "@/components/ui/AppIcon";

const footerLinks = [
  { label: "Home",              href: "/homepage" },
  { label: "Services",          href: "/services" },
  { label: "Submit Requirement",href: "/submit-requirement" },
  { label: "Privacy Policy",    href: "#" },
  { label: "Terms of Use",      href: "#" },
];

const socialLinks = [
  { icon: "GlobeAltIcon", href: "#",   label: "Website" },
  { icon: "EnvelopeIcon", href: "mailto:connect@aiventurelink.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#050810]">
      <div className="container-wide py-10">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
          <Link href="/homepage">
            <AppLogo text="AIVentureLink" iconName="SparklesIcon" size={64} />
          </Link>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-aivl-text-muted hover:text-aivl-text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 rounded-lg border border-white/[0.08] flex items-center justify-center text-aivl-text-muted hover:text-white hover:border-aivl-blue/40 transition-all duration-200"
              >
                <Icon name={s.icon as "GlobeAltIcon"} size={16} />
              </a>
            ))}
          </div>
        </div>
        {/* Divider */}
        <div className="section-divider mb-6" />
        {/* Row 2 */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-aivl-text-muted">
          <span>© 2026 AIVentureLink. Operated by Zestova Private Limited. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            <Icon name="MapPinIcon" size={12} />
            Rohini Sector 18–19, New Delhi, India
            <span className="mx-2">·</span>
            <Icon name="EnvelopeIcon" size={12} />
            connect@aiventurelink.com
          </span>
        </div>
      </div>
    </footer>
  );
}