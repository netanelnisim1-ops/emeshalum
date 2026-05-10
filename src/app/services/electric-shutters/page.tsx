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

const TITLE = "תריסים חשמליים ומערכות הצללה";
const DESC =
  "תריסי אור חשמליים, תריסי גלילה, רשתות נגד יתושים ומערכות הצללה משולבות בחלון. תקני בטיחות מלאים, שלט אלחוטי, חיבור לבית חכם.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/services/electric-shutters" },
  openGraph: {
    title: `${TITLE} | א.מ.ש אלומיניום`,
    description: DESC,
    url: "/services/electric-shutters",
  },
};

const FAQ = [
  {
    q: "האם תריס חשמלי דורש חיווט מיוחד בבית?",
    a: 'בבנייה חדשה מומלץ להתקין שקע ייעודי 220V מאחורי כל חלון. אם הבית קיים – יש לנו פתרונות עם מנוע סולארי, מנוע סוללה נטענת, או חיווט עוקף שמותקן לאחר הבנייה. נמליץ על הפתרון הכי מתאים בזמן המדידה.',
  },
  {
    q: "מה ההבדל בין תריס אור לתריס גלילה?",
    a: 'תריס אור (ידוע גם כ"תריס שלבים") מאפשר לכם לסובב את השלבים – לשלוט בכמות האור והפרטיות בלי להוריד את כל התריס. תריס גלילה הוא תריס מסורתי שעולה ויורד. בא.מ.ש אנחנו מייצרים את שני הסוגים, ומתאימים את הבחירה לחלון, לכיוון השמש ולהעדפות שלכם.',
  },
  {
    q: "האם אפשר לחבר את התריסים לבית חכם?",
    a: "כן. כל התריסים החשמליים שלנו תומכים בשלט אלחוטי, וניתן לחבר אותם למערכות בית חכם כמו Somfy TaHoma, KNX, או למערכות בקרה אלחוטיות אחרות. ניתן לתזמן פתיחה/סגירה אוטומטית, להפעיל מהאפליקציה ולחבר לאלקסה/גוגל הום.",
  },
  {
    q: "האם תריסים חשמליים בטוחים? מה אם החשמל מתנתק?",
    a: 'בטיחות הילדים והמשתמש היא קריטית. כל המנועים שלנו עומדים בתקני CE עם הגנות נגד מעיכת אצבעות, חיישני התנגדות שמפסיקים את המנוע אם משהו חוסם, ומערכת ידנית במקרה של הפסקת חשמל. במקרה של חירום אפשר לפתוח את התריס ידנית או באמצעות סוללת גיבוי.',
  },
  {
    q: "האם אתם מספקים גם רשתות נגד יתושים?",
    a: "כן. אנחנו מייצרים רשתות נגללות נגד יתושים שמשולבות בחלון או בדלת – פתיחה אנכית או אופקית, עם מסילה דקה ועדינה שלא פוגעת באסתטיקה של החלון. גם שילוב של תריס + רשת באותה מסגרת אפשרי.",
  },
];

const SERVICE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: TITLE,
  description: DESC,
  provider: { "@type": "LocalBusiness", "@id": `${SITE_URL}/#business` },
  areaServed: { "@type": "Country", name: "ישראל" },
  url: `${SITE_URL}/services/electric-shutters`,
  category: "תריסים חשמליים",
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

export default function ElectricShuttersPage() {
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
          eyebrow="שירות 3 מתוך 3"
          title="תריסים חשמליים ומערכות הצללה"
          subtitle="תריסי אור חשמליים, תריסי גלילה ורשתות נגד יתושים – משולבים באופן הרמוני עם החלון, תומכים בבית חכם, ועם תקני בטיחות מלאים."
          image="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=2400&q=80"
          breadcrumbs={[
            { label: "בית", href: "/" },
            { label: "שירותים", href: "/services" },
            { label: "תריסים חשמליים" },
          ]}
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h2 className="text-brand-navy-deep text-3xl md:text-4xl font-extrabold mb-6 text-balance">
              תריסים שעובדים בשבילכם, לא הפוך
            </h2>
            <div className="space-y-4 text-brand-graphite text-lg leading-relaxed">
              <p>
                תריס חשמלי הוא הרבה יותר מנוחות. הוא מבודד את הבית מקור ומחום,
                מגן על הריהוט מפני קרינת UV, מספק פרטיות מלאה ומשפר משמעותית את
                הבידוד האקוסטי. ובניגוד לתריס ידני שמושך אותו 30 פעם ביום – תריס
                חשמלי עובד בלחיצת כפתור.
              </p>
              <p>
                בא.מ.ש אלומיניום אנחנו מייצרים את התריסים יחד עם החלונות{" "}
                <strong className="text-brand-navy-deep">
                  באותה מסגרת ובאותו גוון
                </strong>
                . זאת הסיבה שהפיתוח שלנו נראה כמו "חלון בעיצוב אחיד" ולא כמו
                "חלון + תריס שהורכב אחר כך".
              </p>
            </div>

            <h3 className="text-brand-navy-deep text-2xl md:text-3xl font-bold mt-12 mb-5">
              הסוגים שאנחנו מייצרים
            </h3>
            <ul className="space-y-3 text-brand-graphite">
              {[
                ["תריסי אור חשמליים", "שלבים מתכווננים שמאפשרים לכם לשלוט באור ובפרטיות בלי להוריד את כל התריס – אידיאלי לחדרי שינה ולסלון."],
                ["תריסי גלילה", "תריסים קלאסיים שעולים ויורדים – פתרון אטום לחלוטין, אידיאלי לחדרי ילדים ולממ\"ד."],
                ["שילוב תריס + רשת באותה מסגרת", "פיתוח חכם ששומר על אסתטיקה של חלון יחיד אבל נותן גם הצללה וגם הגנה מיתושים."],
                ["רשתות נגללות נגד יתושים", "מסילה אופקית או אנכית, נסגרת לתוך מסגרת דקה כשלא בשימוש."],
                ["מנועי שלט וחיבור לבית חכם", "כל מנוע מגיע עם שלט אלחוטי. אופציה לחיבור Somfy, KNX ומערכות בקרה אחרות."],
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
              בטיחות, אמינות ושלוות נפש
            </h3>
            <div className="space-y-4 text-brand-graphite text-lg leading-relaxed">
              <p>
                כל המנועים שאנחנו מתקינים עומדים בתקני CE האירופאיים עם חיישני
                התנגדות, הגנות נגד מעיכה, ופתרון ידני במקרה של הפסקת חשמל.
                אחריות {BUSINESS.warrantyYears} שנים על המנוע, התריס וההתקנה.
              </p>
              <p>
                כשמשהו צריך תיקון – אתם מתקשרים אלינו. אנחנו לא מפנים אתכם ליבואן
                המנוע, ליצרן הפרופיל או לחשמלאי חיצוני. כתובת אחת – אחריות אחת.
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
