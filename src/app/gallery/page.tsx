import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import ContactSection from "@/components/ContactSection";
import { BUSINESS } from "@/lib/business";

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
  title: "גלריית פרויקטים | חלונות, פרגולות ותריסים – א.מ.ש אלומיניום",
  description:
    "גלריית פרויקטים של א.מ.ש אלומיניום – חלונות בלגיים, ויטרינות, פרגולות, מקלחונים ותריסים חשמליים בבתים פרטיים, וילות ומבני מגורים בכל הארץ.",
  alternates: { canonical: "/gallery" },
};

const PROJECTS = [
  {
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1400&q=80",
    title: "חלון פנורמי עם נוף לים",
    category: "חלונות פנורמיים",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    title: "חלונות מינימל זיגוג כפול",
    category: "חלונות מינימל",
  },
  {
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1400&q=80",
    title: "פרגולת אלומיניום צמודת בית",
    category: "פרגולות אלומיניום",
  },
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80",
    title: "מעקות זכוכית וחלונות בייסיק",
    category: "מעקות זכוכית",
  },
  {
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1400&q=80",
    title: "מקלחון עם זכוכית מחוסמת",
    category: "מקלחונים",
  },
  {
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=80",
    title: "תריס חשמלי בווילה יוקרתית",
    category: "תריסים חשמליים",
  },
  {
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1400&q=80",
    title: "חיפוי אלומיניום קירות מסך",
    category: "חיפויי אלומיניום",
  },
  {
    image: "https://images.unsplash.com/photo-1545193544-312983719627?auto=format&fit=crop&w=1400&q=80",
    title: "דלת אלומיניום כניסה מעוצבת",
    category: "דלתות כניסה",
  },
  {
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1400&q=80",
    title: "ויטרינה בלגית יוקרתית",
    category: "ויטרינות בלגיות",
  },
];

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="גלריית פרויקטים"
          title="עבודות אמיתיות. תוצאות מוכחות."
          subtitle="לפניכם מבחר פרויקטים שביצענו בכל הארץ – חלונות, פרגולות, מקלחונים ותריסים חשמליים. כל פרויקט מיוצר ומותקן על ידינו, מהפרופיל ועד הברגיל האחרון."
          image="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=80"
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
                  key={`${project.title}-${i}`}
                  className="group relative overflow-hidden rounded-2xl bg-brand-stone aspect-[4/5]"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url('${project.image}')` }}
                    role="img"
                    aria-label={project.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/90 via-brand-navy-deep/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                  <figcaption className="absolute bottom-0 right-0 left-0 p-5 text-white">
                    <span className="inline-block bg-brand-orange text-white text-xs font-bold px-2.5 py-1 rounded-full mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-balance">{project.title}</h3>
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
