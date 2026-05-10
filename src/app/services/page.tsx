import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import ContactSection from "@/components/ContactSection";
import { ArrowLeft } from "lucide-react";
import { SERVICE_PAGES, BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "שירותי אלומיניום | חלונות, פרגולות, מקלחונים ותריסים",
  description:
    "כל שירותי האלומיניום של א.מ.ש – חלונות, דלתות, ויטרינות, מקלחונים, פרגולות, מעקות ותריסים חשמליים. ייצור עצמי, מחירי יצרן, 5 שנות אחריות.",
  alternates: { canonical: "/services" },
};

const SERVICE_IMAGES: Record<string, string> = {
  "windows-doors":
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
  "showers-pergolas-railings":
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=80",
  "electric-shutters":
    "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=1400&q=80",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="המומחיות שלנו"
          title="שירותי אלומיניום מקיפים, יצרנות אמיתית."
          subtitle={`בא.מ.ש אלומיניום אנחנו מייצרים בעצמנו את כל מרכיבי החלון – פרופיל, זכוכית, צבע ופרזול. ${BUSINESS.yearsExperience}+ שנות ניסיון, שירות בכל הארץ ו-${BUSINESS.warrantyYears} שנות אחריות.`}
          breadcrumbs={[
            { label: "בית", href: "/" },
            { label: "שירותים" },
          ]}
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-6">
              {SERVICE_PAGES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-brand-stone shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="relative h-56 md:h-64 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                      style={{
                        backgroundImage: `url('${SERVICE_IMAGES[service.slug]}')`,
                      }}
                      aria-hidden
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/70 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-brand-navy-deep mb-3 text-balance">
                      {service.title}
                    </h2>
                    <p className="text-brand-mist leading-relaxed mb-5 text-pretty">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-brand-orange font-semibold group-hover:gap-3 transition-all">
                      לדף השירות המלא
                      <ArrowLeft className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
