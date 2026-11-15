import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { BUSINESS } from "@/lib/business";

const UPDATED = "15.11.2026";

export const metadata: Metadata = {
  title: "מדיניות פרטיות",
  description: `מדיניות הפרטיות של ${BUSINESS.name}: איזה מידע נאסף באתר, למה הוא משמש, למי הוא מועבר ואיך לממש את הזכויות שלכם.`,
  alternates: { canonical: "/privacy" },
};

// Wording follows common Israeli small-business privacy notices. Recommended: have a lawyer review it.
// When an ad pixel / analytics is added to the site, update the "cookies" section.
export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          title="מדיניות פרטיות"
          subtitle={`עודכן לאחרונה: ${UPDATED}`}
          breadcrumbs={[{ label: "בית", href: "/" }, { label: "מדיניות פרטיות" }]}
        />
        <section className="py-14 md:py-20 bg-white">
          <article className="max-w-3xl mx-auto px-4 md:px-6 text-brand-graphite leading-relaxed space-y-6 [&_h2]:text-brand-navy-deep [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pr-6 [&_ul]:space-y-1">
            <p>
              {BUSINESS.name} (ח.פ {BUSINESS.businessId}) מכבדת את פרטיות הגולשים באתר{" "}
              {BUSINESS.siteUrl.replace("https://", "")} ואת פרטיות הלקוחות שלה. מדיניות זו מסבירה
              איזה מידע נאסף, למה הוא משמש, למי הוא עשוי להיות מועבר, ומהן הזכויות שלכם. השימוש באתר
              ומסירת פרטים בו מהווים הסכמה למדיניות זו.
            </p>

            <h2>איזה מידע נאסף</h2>
            <ul>
              <li>
                <strong>מידע שאתם מוסרים:</strong> כשאתם ממלאים את טופס יצירת הקשר אנחנו מקבלים את
                השם, מספר הטלפון, העיר ותיאור הפרויקט שכתבתם. מסירת הפרטים אינה חובה לפי חוק, אך בלעדיהם
                לא נוכל לחזור אליכם.
              </li>
              <li>
                <strong>פניות ישירות:</strong> פרטים שאתם מוסרים בשיחת טלפון, בוואטסאפ או במייל.
              </li>
              <li>
                <strong>מידע טכני:</strong> שרתי האחסון של האתר רושמים באופן אוטומטי מידע בסיסי כמו
                כתובת IP, סוג הדפדפן ומועד הגלישה, לצורכי אבטחה ותפעול תקין של האתר.
              </li>
            </ul>

            <h2>למה המידע משמש</h2>
            <ul>
              <li>כדי לחזור אליכם, לייעץ ולתת הצעת מחיר</li>
              <li>כדי לתאם מדידה, ייצור, התקנה ושירות</li>
              <li>כדי לשפר את האתר ואת השירות</li>
              <li>כדי לעמוד בחובות לפי דין, כמו הנהלת חשבונות</li>
            </ul>
            <p>
              לא נשלח אליכם דיוור שיווקי (מייל, SMS או וואטסאפ) בלי שנתתם לכך הסכמה מפורשת. תוכלו לבקש
              להפסיק לקבל פניות כאלה בכל עת.
            </p>

            <h2>העברת מידע לצדדים שלישיים</h2>
            <p>
              אנחנו לא מוכרים ולא משכירים מידע אישי. המידע עשוי להיות מועבר רק לספקי שירות שעוזרים לנו
              להפעיל את האתר, ורק במידה הנדרשת לכך:
            </p>
            <ul>
              <li>ספק האחסון של האתר (Vercel), ששרתיו עשויים להיות ממוקמים מחוץ לישראל</li>
              <li>שירות לשליחת הודעות הטופס אלינו במייל (Resend)</li>
            </ul>
            <p>
              בנוסף, מידע עשוי להימסר אם נידרש לכך לפי דין, צו של רשות מוסמכת, או כדי להגן על זכויותינו.
            </p>

            <h2>עוגיות (Cookies) וכלי מעקב</h2>
            <p>
              נכון למועד העדכון, האתר אינו משתמש בעוגיות פרסום, בפיקסלים של רשתות חברתיות או בכלי
              סטטיסטיקה של צד שלישי. אם יתווספו כלים כאלה, למשל לצורכי פרסום, נעדכן את המדיניות הזו.
              אפשר לחסום או למחוק עוגיות בהגדרות הדפדפן.
            </p>

            <h2>אבטחת מידע</h2>
            <p>
              האתר מאובטח בתקן HTTPS, והגישה למידע שנמסר בטופס מוגבלת לבעלי העסק ולמי שמטפל בפנייה.
              אנחנו נוקטים אמצעים סבירים לשמירה על המידע, אך אין מערכת מאובטחת לחלוטין.
            </p>

            <h2>שמירת המידע</h2>
            <p>
              נשמור את המידע כל עוד הוא נדרש לטיפול בפנייה, למתן שירות ואחריות, ולעמידה בחובות לפי דין.
            </p>

            <h2>הזכויות שלכם</h2>
            <p>
              לפי חוק הגנת הפרטיות, התשמ"א-1981, אתם רשאים לעיין במידע שנשמר עליכם, לבקש לתקן מידע
              שגוי, ולבקש למחוק מידע שאינו נדרש עוד. לפנייה בנושא:
            </p>
            <ul>
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

            <h2>קטינים</h2>
            <p>האתר מיועד לבגירים. קטינים מתבקשים לא למסור פרטים בלי הסכמת הורה.</p>

            <h2>שינויים במדיניות</h2>
            <p>
              ייתכן שנעדכן את המדיניות מעת לעת. הנוסח המחייב הוא זה שמופיע בעמוד זה, ותאריך העדכון
              האחרון מופיע בראשו.
            </p>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
