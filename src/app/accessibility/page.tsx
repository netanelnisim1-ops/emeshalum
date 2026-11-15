import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { BUSINESS } from "@/lib/business";

const UPDATED = "15.11.2026";

export const metadata: Metadata = {
  title: "הצהרת נגישות",
  description: `הצהרת הנגישות של ${BUSINESS.name}: ההתאמות שבוצעו באתר ופרטי רכז הנגישות.`,
  alternates: { canonical: "/accessibility" },
};

// Follows the usual structure of Israeli accessibility statements (תקנות שוויון זכויות לאנשים עם מוגבלות).
// Lists only adjustments that actually exist on the site. Recommended: an accessibility audit + legal review.
export default function AccessibilityPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          title="הצהרת נגישות"
          subtitle={`עודכן לאחרונה: ${UPDATED}`}
          breadcrumbs={[{ label: "בית", href: "/" }, { label: "הצהרת נגישות" }]}
        />
        <section className="py-14 md:py-20 bg-white">
          <article className="max-w-3xl mx-auto px-4 md:px-6 text-brand-graphite leading-relaxed space-y-6 [&_h2]:text-brand-navy-deep [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pr-6 [&_ul]:space-y-1">
            <p>
              {BUSINESS.name} רואה חשיבות במתן שירות שוויוני לכל הלקוחות, כולל אנשים עם מוגבלות. אנחנו
              פועלים להנגיש את האתר בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות),
              התשע"ג-2013, ולתקן הישראלי ת"י 5568, המבוסס על הנחיות WCAG 2.0, ברמה AA.
            </p>

            <h2>ההתאמות שבוצעו באתר</h2>
            <ul>
              <li>מבנה כותרות היררכי וברור בכל העמודים</li>
              <li>תיאור טקסטואלי (טקסט חלופי) לתמונות</li>
              <li>הגדרת שפת האתר לעברית וכיוון קריאה מימין לשמאל</li>
              <li>התאמה לתצוגה בטלפון, בטאבלט ובמחשב</li>
              <li>אפשרות להגדיל את התצוגה בדפדפן (Ctrl ו-+) בלי לפגוע בתוכן</li>
              <li>שדות הטופס מסומנים בתוויות ברורות</li>
              <li>קישורים וכפתורים עם טקסט שמתאר לאן הם מובילים</li>
              <li>אפשרות לנווט באתר באמצעות המקלדת</li>
            </ul>

            <h2>הסתייגות</h2>
            <p>
              אנחנו ממשיכים לשפר את נגישות האתר. ייתכן שחלקים מסוימים עדיין אינם נגישים במלואם. אם נתקלתם
              בבעיה, נשמח שתעדכנו אותנו ונפעל לתקן אותה בהקדם.
            </p>

            <h2>נגישות השירות</h2>
            <p>
              העסק אינו מקיים קבלת קהל במשרד. השירות, כולל מדידה, ייעוץ והתקנה, ניתן בבית הלקוח או בטלפון,
              בוואטסאפ ובמייל.
            </p>

            <h2>רכז הנגישות</h2>
            <p>לפניות, הערות ובקשות בנושא נגישות:</p>
            <ul>
              <li>שם: {BUSINESS.founderName}</li>
              <li>
                טלפון:{" "}
                <a href={`tel:${BUSINESS.phone}`} className="text-brand-orange" dir="ltr">
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li>
                מייל:{" "}
                <a href={`mailto:${BUSINESS.email}`} className="text-brand-orange" dir="ltr">
                  {BUSINESS.email}
                </a>
              </li>
            </ul>
            <p>
              כדי שנוכל לטפל בפנייה, נשמח לפרטים על הבעיה: באיזה עמוד, מה ניסיתם לעשות, ובאיזה דפדפן
              ומכשיר השתמשתם.
            </p>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
