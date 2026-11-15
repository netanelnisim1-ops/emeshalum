import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import ContactSection from "@/components/ContactSection";
import Image from "next/image";
import { BUSINESS } from "@/lib/business";
import { PROJECT_PHOTOS, photo } from "@/lib/projects";

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

export const metadata: Metadata = {
  title: "גלריית עבודות: חלונות ודלתות אלומיניום",
  description:
    "גלריית פרויקטים של א.מ.ש אלומיניום – חלונות בלגיים, ויטרינות, פרגולות, מקלחונים ותריסים חשמליים בבתים פרטיים, וילות ומבני מגורים בכל הארץ.",
  alternates: { canonical: "/gallery" },
};

const PROJECTS = PROJECT_PHOTOS;

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="גלריית פרויקטים"
          title="עבודות אמיתיות. תוצאות מוכחות."
          subtitle="מבחר עבודות שלנו: חלונות בלגיים, חלונות ציר וקיפ, דלתות כניסה ופנים, דלתות הזזה, תריסים וסגירות זכוכית. כל התמונות כאן הן עבודות שלנו."
          image={photo("chalon-belgi-erker").src}
          breadcrumbs={[
            { label: "בית", href: "/" },
            { label: "גלריה" },
          ]}
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="bg-brand-cream rounded-2xl p-6 md:p-8 mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div>
                <h2 className="text-brand-navy-deep text-xl md:text-2xl font-bold mb-2">
                  רוצים לראות עוד עבודות?
                </h2>
                <p className="text-brand-mist">
                  באינסטגרם שלנו אנחנו מעלים פרויקטים חדשים כל שבוע.
                </p>
              </div>
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-navy-deep text-white font-semibold px-6 py-3 rounded-lg transition-colors shrink-0"
              >
                <InstagramIcon className="w-5 h-5" />
                <span>עקבו באינסטגרם</span>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {PROJECTS.map((project, i) => (
                <figure
                  key={`${project.name}-${i}`}
                  className="group relative overflow-hidden rounded-2xl bg-brand-stone aspect-[4/5]"
                >
                  <Image
                    src={project.src}
                    alt={project.caption}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/90 via-brand-navy-deep/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                  <figcaption className="absolute bottom-0 right-0 left-0 p-5 text-white">
                    <span className="inline-block bg-brand-orange text-white text-xs font-bold px-2.5 py-1 rounded-full mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-balance">{project.caption}</h3>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-14 text-center">
              <p className="text-brand-mist text-lg mb-5">
                אהבתם את מה שראיתם? בואו נבנה משהו דומה גם אצלכם.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-deep text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-brand-orange/30 transition-all"
              >
                לקבלת הצעת מחיר
              </Link>
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
