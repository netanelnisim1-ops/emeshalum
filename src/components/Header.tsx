"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/business";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl md:text-2xl font-extrabold tracking-tight">
              <span className="text-brand-navy">א.מ.</span>
              <span className="text-brand-orange">ש</span>
              <span className="text-brand-navy"> אלומיניום</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-brand-navy hover:text-brand-orange font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="hidden md:inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-deep text-white px-5 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
            >
              <Phone className="w-4 h-4" strokeWidth={2.5} />
              <span dir="ltr">{BUSINESS.phoneDisplay}</span>
            </a>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-brand-navy"
              aria-label="תפריט"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-brand-stone bg-white">
          <nav className="flex flex-col py-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-6 py-3 text-brand-navy hover:bg-brand-cream hover:text-brand-orange font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${BUSINESS.phone}`}
              className="md:hidden mx-4 my-3 inline-flex items-center justify-center gap-2 bg-brand-orange text-white px-5 py-3 rounded-lg font-semibold"
            >
              <Phone className="w-4 h-4" strokeWidth={2.5} />
              <span dir="ltr">{BUSINESS.phoneDisplay}</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
