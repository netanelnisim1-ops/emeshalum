import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import ContactSection from "@/components/ContactSection";
import ServiceFAQ from "@/components/ServiceFAQ";
import { Check } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const SITE_URL = BUSINESS.siteUrl;

const TITLE = "מקלחונים, פרגולות ומעקות אלומיניום";
const DESC =
  "מקלחוני זכוכית מעוצבים, פרגולות אלומיניום עמידות, מעקות בטיחותיים וסגירות חורף למרפסות. ייצור פנימי, התקנה מקצועית, 5 שנות אחריות.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/services/showers-pergolas-railings" },
  openGraph: {
    title: `${TITLE} | א.מ.ש אלומיניום`,
    description: DESC,
    url: "/services/showers-pergolas-railings",
  },
};

const FAQ = [
  {
    q: "האם פרגולת אלומיניום עמידה בכל מזג אוויר?",
    a: "כן. אנחנו משתמשים בפרופילי אלומיניום מאוקסדים וצבועים בתנור צביעה במפעל שלנו, מה שהופך את הפרגולה לעמידה לחלוטין בשמש, בגשם, ברוח ובמליחות (חשוב במיוחד באזורי החוף). אחריות 5 שנים על הצבע והמבנה.",
  },
  {
    q: "האם המקלחון יכול להיות עיצוב לפי מידה?",
    a: "בהחלט. כל מקלחון שאנחנו מייצרים נמדד ונחתך במפעל שלנו לפי המידות המדויקות של חדר האמבטיה. זוויות מיוחדות, מקלחונים פינתיים, מקלחוני 'walk-in' עם זכוכית קבועה, ידיות בעיצוב מותאם – אנחנו מייצרים הכל.",
  },
  {
    q: "מה ההבדל בין פרגולת אלומיניום לפרגולת עץ?",
    a: "פרגולת עץ דורשת תחזוקה שנתית (שמן/לכה), נסדקת, נמשכת לחרקים, ומתעוותת בלחות. פרגולת אלומיניום עמידה לעשרות שנים, לא דורשת תחזוקה, ובאה במגוון גוונים – כולל גוונים בדמוי-עץ אם רוצים את המראה. זה הפתרון הכי חכם לטווח ארוך.",
  },
  {
    q: "האם אתם מייצרים גם מעקות לזכוכית?",
    a: "כן. אנחנו מייצרים מעקות אלומיניום קלאסיים, מעקות עם זכוכית מחוסמת ופרופיל אלומיניום, ומעקות מעוצבים בעבודת יד. מתאים למדרגות פנים, מרפסות גג ומדרגות חיצוניות.",
  },
  {
    q: "מה עלות סגירת מרפסת באלומיניום?",
    a: "עלות סגירת מרפסת תלויה בגודל, סוג הפרופיל, סוג הזכוכית, ובדרישות הבידוד התרמי/אקוסטי. כיוון שאנחנו היצרן אנחנו מציעים מחירי יצרן הוגנים. נשמח לתת הצעה מדויקת לאחר מדידה בבית.",
  },
];

const SERVICE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: TITLE,
  description: DESC,
  provider: { "@type": "LocalBusiness", "@id": `${SITE_URL}/#business` },
  areaServed: { "@type": "Country", name: "ישראל" },
  url: `${SITE_URL}/services/showers-pergolas-railings`,
  category: "מקלחונים, פרגולות ומעקות אלומיניום",
};

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function ShowersPergolasRailingsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSONLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }}
      />

      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="שירות 2 מתוך 3"
          title="מקלחונים, פרגולות ומעקות אלומיניום"
          subtitle="מעטפת אלומיניום מלאה לבית – מקלחוני זכוכית מעוצבים, פרגולות עמידות לעשרות שנים, מעקות בטיחותיים וסגירות חורף למרפסות."
          image="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2400&q=80"
          breadcrumbs={[
            { label: "בית", href: "/" },
            { label: "שירותים", href: "/services" },
            { label: "מקלחונים ופרגולות" },
          ]}
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h2 className="text-brand-navy-deep text-3xl md:text-4xl font-extrabold mb-6 text-balance">
              אלומיניום שמשלב יופי ועמידות לכל החיים
            </h2>
            <div className="space-y-4 text-brand-graphite text-lg leading-relaxed">
              <p>
                אלומיניום הוא חומר אידיאלי לכל מה שצריך להיות חזק, יפה ולא לדרוש
                תחזוקה: מקלחונים, פרגולות, מעקות וסגירות חורף. הוא לא חלוד, לא
                מתעוות, לא נסדק, ונראה מצוין שנים אחרי ההתקנה.
              </p>
              <p>
                בא.מ.ש אלומיניום אנחנו מייצרים את כל המוצרים האלה במפעל שלנו –{" "}
                <strong className="text-brand-navy-deep">
                  כולל הצביעה בתנור הצבע הפנימי
                </strong>
                . זאת הסיבה שאנחנו יכולים להבטיח עמידות אמיתית של הצבע, גוונים
                מיוחדים, ולוחות זמנים שאי אפשר להשיג מקבלן שמסתמך על מצבעות
                חיצוניות.
              </p>
            </div>

            <h3 className="text-brand-navy-deep text-2xl md:text-3xl font-bold mt-12 mb-5">
              המוצרים שאנחנו מייצרים
            </h3>
            <ul className="space-y-3 text-brand-graphite">
              {[
                ["מקלחוני זכוכית", "מקלחונים פינתיים, ישרים, walk-in עם זכוכית קבועה, וזוויות מיוחדות. זכוכית מחוסמת בעובי 8-10 מ\"מ עם פרופיל אלומיניום עדין."],
                ["פרגולות אלומיניום", "פרגולות צמודות-בית, פרגולות פינתיות, וגגוני אלומיניום עם תקרה צ'יקלון או חזית פתוחה. חוזק ללא דרישת תחזוקה."],
                ["מעקות אלומיניום", "מעקות מדרגות פנים, מעקות מרפסת, מעקות גג, ומעקות עם זכוכית מחוסמת. עומדים בכל תקני הבטיחות."],
                ["סגירות חורף למרפסות", "הפיכת מרפסת זכוכית ליחידת חיים שלמה – חמה בחורף, מאווררת בקיץ. בידוד אקוסטי איכותי."],
                ["גדרות ושערים", "גדרות אלומיניום בעיצובים מודרניים וקלאסיים, שערי חניה חשמליים, ושערים להולכי רגל."],
              ].map(([title, body]) => (
                <li key={title} className="flex items-start gap-3 bg-brand-cream rounded-lg p-4">
                  <Check className="w-5 h-5 text-brand-orange shrink-0 mt-1" strokeWidth={3} />
                  <div>
                    <strong className="text-brand-navy-deep block mb-1">
                      {title}
                    </strong>
                    <span>{body}</span>
                  </div>
                </li>
              ))}
            </ul>

            <h3 className="text-brand-navy-deep text-2xl md:text-3xl font-bold mt-12 mb-5">
              למה לקנות הכל מספק אחד?
            </h3>
            <div className="space-y-4 text-brand-graphite text-lg leading-relaxed">
              <p>
                כשהמקלחון, הפרגולה והמעקות באים מאותו יצרן –{" "}
                <strong>הגוונים זהים</strong>, פרופיל האלומיניום אחיד, וכל הבית
                שלכם נראה כמו פרויקט מתואם. במקום לרדוף אחרי 4 ספקים שונים,
                אתם מקבלים פתרון אחד עם אחריות אחת.
              </p>
              <p>
                {BUSINESS.yearsExperience}+ שנות ניסיון של {BUSINESS.founderName}{" "}
                בייצור אלומיניום, ועוד {BUSINESS.warrantyYears} שנות אחריות
                מקיפה – כדי שתישנו בשקט.
              </p>
            </div>
          </div>
        </section>

        <ServiceFAQ items={FAQ} />
        <ContactSection />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
