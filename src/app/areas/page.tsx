import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import ContactSection from "@/components/ContactSection";
import { BUSINESS, SERVICE_PAGES } from "@/lib/business";
import { SERVICE_REGIONS, type ServiceRegion } from "@/lib/service-areas";
import {
  CITY_KEYWORDS,
  CITY_KEYWORD_LABELS,
  EXTRA_REGION_CITIES,
  joinWithB,
} from "@/lib/city-keywords";

// For each service, the cities in this region where people search "<service> <city>".
function regionKeywords(r: ServiceRegion) {
  const inRegion = new Set([
    ...r.cities,
    ...r.councils.flatMap((c) => c.localities),
    ...(EXTRA_REGION_CITIES[r.region] || []),
  ]);
  return Object.entries(CITY_KEYWORDS)
    .map(([key, cities]) => ({
      label: CITY_KEYWORD_LABELS[key],
      cities: cities.filter((c) => inRegion.has(c)),
    }))
    .filter((k) => k.cities.length > 0);
}

export const metadata: Metadata = {
  title: "אזורי שירות | חלונות ואלומיניום בכל הארץ",
  description:
    "א.מ.ש אלומיניום מייצרת ומתקינה חלונות, דלתות, פרגולות, מקלחונים ותריסים חשמליים בכל הארץ - מהגליל ועד הנגב. בדקו את רשימת הערים והיישובים.",
  alternates: { canonical: "/areas" },
};

const areasJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "אזורי שירות - א.מ.ש אלומיניום",
  url: `${BUSINESS.siteUrl}/areas`,
  about: {
    "@id": `${BUSINESS.siteUrl}/#business`,
  },
  mainEntity: {
    "@type": "Service",
    serviceType: "ייצור והתקנת חלונות ומוצרי אלומיניום",
    provider: { "@id": `${BUSINESS.siteUrl}/#business` },
    areaServed: SERVICE_REGIONS.flatMap((r) =>
      r.cities.map((name) => ({ "@type": "City", name })),
    ),
  },
};

export default function AreasPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(areasJsonLd) }}
        />
        <PageHero
          eyebrow="אזורי שירות"
          title="מגיעים אליכם, מהגליל ועד הנגב."
          subtitle={`א.מ.ש אלומיניום מייצרת במפעל שלה ומתקינה בכל הארץ. ${BUSINESS.warrantyYears} שנות אחריות, בכל עיר ובכל יישוב.`}
          breadcrumbs={[
            { label: "בית", href: "/" },
            { label: "אזורי שירות" },
          ]}
        />

        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <p className="text-lg text-brand-navy-deep leading-relaxed mb-6 text-pretty">
              אנחנו מגיעים למדידה, להתקנה ולשירות בכל הערים והיישובים שברשימה
              למטה. מה שאנחנו עושים:
            </p>
            <ul className="flex flex-wrap gap-3 mb-14">
              {SERVICE_PAGES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="inline-block bg-brand-cream border border-brand-stone rounded-full px-4 py-2 text-brand-navy-deep font-semibold hover:border-brand-orange transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>

            <nav aria-label="אזורים" className="flex flex-wrap gap-2 mb-12">
              {SERVICE_REGIONS.map((r, i) => (
                <a
                  key={r.region}
                  href={`#region-${i}`}
                  className="text-sm text-brand-orange font-semibold hover:underline"
                >
                  {r.region}
                </a>
              ))}
            </nav>

            <div className="space-y-14">
              {SERVICE_REGIONS.map((r, i) => (
                <section key={r.region} id={`region-${i}`} className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-navy-deep mb-5">
                    חלונות ואלומיניום ב{r.region.replace(/^ה/, "")}
                  </h2>
                  {regionKeywords(r).length > 0 && (
                    <div className="space-y-2 text-brand-navy-deep leading-relaxed mb-6">
                      {regionKeywords(r).map((k) => (
                        <p key={k.label} className="text-pretty">
                          <strong>{k.label}</strong> {joinWithB(k.cities)}.
                        </p>
                      ))}
                    </div>
                  )}
                  <ul className="flex flex-wrap gap-x-4 gap-y-2 text-brand-navy-deep mb-6">
                    {r.cities.map((c) => (
                      <li key={c} className="font-medium">
                        {c}
                      </li>
                    ))}
                  </ul>
                  {r.councils.length > 0 && (
                    <div className="space-y-2">
                      {r.councils.map((c) => (
                        <details
                          key={c.name}
                          className="border border-brand-stone rounded-lg px-4 py-3"
                        >
                          <summary className="cursor-pointer font-semibold text-brand-navy-deep">
                            מועצה אזורית {c.name} ({c.localities.length} יישובים)
                          </summary>
                          <p className="mt-3 text-brand-mist leading-relaxed text-sm">
                            {c.localities.join(" · ")}
                          </p>
                        </details>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>

            <p className="mt-14 text-brand-mist text-pretty">
              לא מצאתם את היישוב שלכם? התקשרו{" "}
              <a href={`tel:${BUSINESS.phone}`} className="text-brand-orange font-semibold" dir="ltr">
                {BUSINESS.phoneDisplay}
              </a>{" "}
              ונבדוק יחד.
            </p>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
