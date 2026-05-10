import Link from "next/link";
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
import { BUSINESS, NAV_LINKS, SERVICE_PAGES } from "@/lib/business";

export default function Footer() {
  return (
    <footer className="bg-brand-navy-deep text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="text-2xl font-extrabold mb-3">
              <span>א.מ.</span>
              <span className="text-brand-orange">ש</span>
              <span> אלומיניום</span>
            </div>
            <p className="text-brand-orange-light font-medium mb-4">
              {BUSINESS.slogan}
            </p>
            <p className="text-white/70 leading-relaxed text-sm">
              יצרן בלעדי של חלונות אלומיניום, דלתות, פרגולות ותריסים חשמליים.
              למעלה מ-{BUSINESS.yearsExperience} שנות ניסיון, שירות בכל הארץ.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/30 rounded-lg px-3 py-2">
              <ShieldCheck className="w-4 h-4 text-brand-orange" />
              <span className="text-sm font-semibold">
                {BUSINESS.warrantyYears} שנות אחריות מקיפה
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">ניווט</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-brand-orange-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">השירותים שלנו</h3>
            <ul className="space-y-2">
              {SERVICE_PAGES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-white/70 hover:text-brand-orange-light transition-colors"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">צור קשר</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="flex items-center gap-3 text-white/80 hover:text-brand-orange-light transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                  <span dir="ltr" className="font-semibold">
                    {BUSINESS.phoneDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-3 text-white/80 hover:text-brand-orange-light transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                  <span dir="ltr">{BUSINESS.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
                <span>שירות בכל הארץ</span>
              </li>
              <li>
                <a
                  href={BUSINESS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/80 hover:text-brand-orange-light transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>אינסטגרם</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm text-white/50">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. כל הזכויות שמורות.</p>
          <p>
            נבנה במחשבה על איכות. {BUSINESS.founderName}, {BUSINESS.founderRole}.
          </p>
        </div>
      </div>
    </footer>
  );
}
