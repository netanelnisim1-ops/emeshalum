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

const TITLE = "חלונות, דלתות וויטרינות אלומיניום";
const DESC =
  "ייצור והתקנה של חלונות אלומיניום בלגיים, חלונות הזזה ופנורמיים, ויטרינות ענק ודלתות אלומיניום במידות מותאמות אישית. ייצור פנימי, מחירי יצרן, 5 שנות אחריות.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/services/windows-doors" },
  openGraph: {
    title: `${TITLE} | א.מ.ש אלומיניום`,
    description: DESC,
    url: "/services/windows-doors",
  },
};

const FAQ = [
  {
    q: "כמה זמן לוקח לייצר ולהתקין חלונות אלומיניום?",
    a: "מרגע אישור ההזמנה זמן הייצור הוא בדרך כלל 3-5 שבועות. כיוון שאנחנו מייצרים בעצמנו את כל מרכיבי החלון – פרופיל, זכוכית, צבע ופרזול – אנחנו לא תלויים בספקים חיצוניים ועומדים בלוחות הזמנים שהבטחנו.",
  },
  {
    q: "מה ההבדל בין חלון בלגי לחלון אלומיניום רגיל?",
    a: "חלון בלגי הוא חלון עם פרופיל אלומיניום צר ומראה קלאסי-תעשייתי, עם זכוכית גדולה וחיתוך גריד עדין. חלון אלומיניום רגיל יכול להיות בפרופיל רחב יותר עם דגש על בידוד תרמי ואקוסטי. אנחנו מייצרים את שני הסוגים, וההמלצה תלויה בעיצוב הבית ובדרישות הבידוד.",
  },
  {
    q: "האם אתם מספקים גם דלתות אלומיניום כניסה?",
    a: "כן. אנחנו מייצרים דלתות אלומיניום לכניסה לבית ולחצר, דלתות פנים, דלתות הזזה גדולות ודלתות פטיו. ניתן להזמין בכל הפרופילים, הצבעים ועם זכוכיות מבודדות.",
  },
  {
    q: "מה עלות חלון אלומיניום ממוצע?",
    a: "המחיר תלוי בגודל, סוג הפרופיל, סוג הזכוכית ופריטי הפרזול. כיוון שאנחנו היצרן הישיר אנחנו מציעים מחירי יצרן ללא תיווך. נשמח לתת הצעת מחיר מדויקת לאחר שיחה קצרה ומדידה בבית.",
  },
  {
    q: "איזו אחריות אתם נותנים?",
    a: `אנחנו נותנים ${BUSINESS.warrantyYears} שנות אחריות מקיפה על כל הייצור וההתקנה. אם משהו לא תקין – טלפון אחד אלינו ואנחנו מטפלים. כתובת אחת לאחריות במקום לחפש את ספק הזכוכית, את המצבעה או את ספק הפרזול.`,
  },
];

const SERVICE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: TITLE,
  description: DESC,
  provider: {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
  },
  areaServed: { "@type": "Country", name: "ישראל" },
  url: `${SITE_URL}/services/windows-doors`,
  category: "חלונות ודלתות אלומיניום",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "סוגי חלונות ודלתות",
    itemListElement: [
      "חלונות בלגיים",
      "חלונות הזזה",
      "חלונות פנורמיים",
      "חלונות פתיחה (קיפ / דריי-קיפ)",
      "ויטרינות אלומיניום",
      "דלתות אלומיניום כניסה",
      "דלתות פטיו",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
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

export default function WindowsDoorsPage() {
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
          eyebrow="שירות 1 מתוך 3"
          title="חלונות, דלתות וויטרינות אלומיניום"
          subtitle="חלונות בלגיים, חלונות הזזה ופנורמיים, ויטרינות ענק ודלתות מותאמות אישית – הכל מיוצר במפעל שלנו, בדיוק לפי המפרט והעיצוב שלכם."
          image="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=80"
          breadcrumbs={[
            { label: "בית", href: "/" },
            { label: "שירותים", href: "/services" },
            { label: "חלונות ודלתות" },
          ]}
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6 prose-headings">
            <h2 className="text-brand-navy-deep text-3xl md:text-4xl font-extrabold mb-6 text-balance">
              למה חלונות אלומיניום מבית א.מ.ש שונים?
            </h2>
            <div className="space-y-4 text-brand-graphite text-lg leading-relaxed">
              <p>
                חלונות אלומיניום הם הרבה יותר מ"מסגרת לזכוכית". הם מגדירים את
                כמות האור הטבעי בבית, את רמת הבידוד התרמי והאקוסטי, את האסתטיקה
                הכוללת – ואת חוויית המגורים שלכם לעשרות שנים קדימה.
              </p>
              <p>
                ב-{BUSINESS.name} אנחנו מייצרים את החלונות שלכם תחת קורת גג אחת:{" "}
                <strong className="text-brand-navy-deep">
                  פרופיל, זכוכית, צבע ופרזול
                </strong>{" "}
                – הכל יוצא מהמפעל שלנו. זה אומר עבורכם דיוק מוחלט, אספקה מהירה,
                מחירי יצרן ללא תיווך, ואחריות אחת מקיפה לכל החלון.
              </p>
            </div>

            <h3 className="text-brand-navy-deep text-2xl md:text-3xl font-bold mt-12 mb-5">
              סוגי החלונות שאנחנו מייצרים
            </h3>
            <ul className="space-y-3 text-brand-graphite">
              {[
                ["חלונות בלגיים", "פרופיל אלומיניום צר עם מראה קלאסי-תעשייתי. גריד עדין, זכוכיות גדולות, אידיאלי לבתים מודרניים-כפריים ולסלון בעל סגנון לופט."],
                ["חלונות הזזה", "פתרון יעיל למרפסות, סלונים ומטבחים. ניתן להגיע לפתחים גדולים מאוד בלי לאבד מקום."],
                ["חלונות פנורמיים", "ויטרינות ענק שמכניסות את הנוף לתוך הבית. מסגרות מינימליסטיות וזכוכיות מבודדות איכותיות."],
                ["חלונות פתיחה (קיפ / דריי-קיפ)", "פתיחה מלאה כצפוי + נטייה אופקית לאוורור עדין. אידיאלי לחדרי שינה ומבני משרדים."],
                ["דלתות אלומיניום כניסה", "דלתות מעוצבות עם מנעולים מולטי-לוק, פרופיל מחוזק וזכוכיות בטיחותיות."],
                ["ויטרינות לעסקים", "פתרונות לחזיתות מסחריות, חנויות ומשרדים – יציבות, נראות מקצועית והתאמה לסטנדרט."],
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
              היתרון של ייצור פנימי (In-House)
            </h3>
            <div className="space-y-4 text-brand-graphite text-lg leading-relaxed">
              <p>
                בשוק האלומיניום הישראלי, רוב הקבלנים מרכיבים חלקים מספקים שונים:
                פרופיל מכאן, זכוכית מספק אחר, צבע ממצבעה חיצונית ופרזול מהיבואן.
                התוצאה היא שרשרת ארוכה של תלות, עיכובים ופערי תיווך.
              </p>
              <p>
                אצלנו זה אחרת. <strong>אנחנו היצרן הישיר</strong> של כל מרכיב.
                כשמשהו צריך תיקון – אנחנו מתקנים. כשהלקוח רוצה גוון צבע מיוחד –
                אנחנו צובעים. כשהמפרט מורכב – אנחנו מייצרים. ככה אנחנו עומדים
                בלוחות זמנים ושומרים על איכות הגימור.
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
