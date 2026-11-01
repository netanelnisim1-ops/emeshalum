import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import ContactSection from "@/components/ContactSection";
import ServiceFAQ from "@/components/ServiceFAQ";
import ServiceCities from "@/components/ServiceCities";
import { Check, ArrowLeft } from "lucide-react";
import { BUSINESS, SERVICE_PAGES } from "@/lib/business";
import { PRODUCT_PAGES, getProductPage } from "@/lib/product-pages";
import { getAllPosts } from "@/lib/blog";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return PRODUCT_PAGES.map((p) => ({ slug: p.slug }));
}

const w = (s: string) => s.replaceAll("{W}", String(BUSINESS.warrantyYears));

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getProductPage(slug);
  if (!page) return {};
  const title = w(page.seoTitle);
  const description = w(page.description);
  return {
    // Google shows the brand as the site name, so the title is spent on the offer.
    title: { absolute: title },
    description,
    alternates: { canonical: `/services/${slug}` },
    openGraph: { title, description, url: `/services/${slug}` },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getProductPage(slug);
  if (!page) notFound();

  const parent = SERVICE_PAGES.find((s) => s.slug === page.parent)!;
  const posts = getAllPosts();
  const guides = page.guides
    .map((g) => posts.find((p) => p.slug === g))
    .filter((p) => p !== undefined);
  const related = page.related
    .map((r) => getProductPage(r))
    .filter((p) => p !== undefined);
  const faq = page.faq.map(({ q, a }) => ({ q: w(q), a: w(a) }));
  const url = `${BUSINESS.siteUrl}/services/${slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.keyword,
      description: w(page.description),
      provider: { "@type": "LocalBusiness", "@id": `${BUSINESS.siteUrl}/#business` },
      areaServed: { "@type": "Country", name: "ישראל" },
      url,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "בית", item: BUSINESS.siteUrl },
        { "@type": "ListItem", position: 2, name: parent.shortTitle, item: `${BUSINESS.siteUrl}/services/${parent.slug}` },
        { "@type": "ListItem", position: 3, name: page.keyword, item: url },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow={`לפי מידה · אחריות ${BUSINESS.warrantyYears} שנים`}
          title={page.keyword}
          subtitle={page.heroSubtitle}
          breadcrumbs={[
            { label: "בית", href: "/" },
            { label: parent.shortTitle, href: `/services/${parent.slug}` },
            { label: page.keyword },
          ]}
        />

        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="space-y-4 text-brand-graphite text-lg leading-relaxed">
              {page.intro.map((p) => (
                <p key={p.slice(0, 24)}>{w(p)}</p>
              ))}
            </div>

            <h2 className="text-brand-navy-deep text-2xl md:text-3xl font-bold mt-12 mb-5">
              {page.typesTitle}
            </h2>
            <ul className="space-y-3 text-brand-graphite">
              {page.types.map(([title, body]) => (
                <li key={title} className="flex items-start gap-3 bg-brand-cream rounded-lg p-4">
                  <Check className="w-5 h-5 text-brand-orange shrink-0 mt-1" strokeWidth={3} />
                  <div>
                    <strong className="text-brand-navy-deep block mb-1">{title}</strong>
                    <span>{w(body)}</span>
                  </div>
                </li>
              ))}
            </ul>

            <h2 className="text-brand-navy-deep text-2xl md:text-3xl font-bold mt-12 mb-5">
              {page.pointsTitle}
            </h2>
            <ul className="space-y-2 text-brand-graphite text-lg">
              {page.points.map((pt) => (
                <li key={pt} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-orange shrink-0 mt-1.5" strokeWidth={3} />
                  <span>{w(pt)}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 rounded-2xl bg-brand-navy-deep text-white p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-3">
                {page.keyword} מ{BUSINESS.name}
              </h2>
              <p className="text-white/85 leading-relaxed">
                ייצור לפי מידה, התקנה בכל הארץ ואחריות ל-{BUSINESS.warrantyYears} שנים.
                מודדים את הפתח, ממליצים על הפתרון המתאים ונותנים הצעת מחיר מפורטת.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-5 bg-brand-orange hover:bg-brand-orange-deep text-white font-bold px-6 py-3 rounded-xl transition-colors"
              >
                לקבלת הצעת מחיר
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {(guides.length > 0 || related.length > 0) && (
          <section className="py-14 bg-brand-stone">
            <div className="max-w-5xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10">
              {guides.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-brand-navy-deep mb-4">מדריכים ומידע</h2>
                  <ul className="space-y-2">
                    {guides.map((g) => (
                      <li key={g.slug}>
                        <Link href={`/blog/${g.slug}`} className="text-brand-graphite hover:text-brand-orange">
                          {g.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {related.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-brand-navy-deep mb-4">מוצרים נוספים</h2>
                  <ul className="space-y-2">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link href={`/services/${r.slug}`} className="text-brand-graphite hover:text-brand-orange">
                          {r.keyword}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link href={`/services/${parent.slug}`} className="text-brand-orange font-semibold">
                        כל ה{parent.shortTitle}
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        <ServiceCities products={[page.cityProduct]} />
        <ServiceFAQ items={faq} />
        <ContactSection />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
