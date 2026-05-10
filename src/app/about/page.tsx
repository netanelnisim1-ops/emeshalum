import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import ContactSection from "@/components/ContactSection";
import Authority from "@/components/Authority";
import { BUSINESS } from "@/lib/business";
import { Factory, Award, Users, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "אודות א.מ.ש אלומיניום | יצרני אלומיניום עם ניסיון של 20+ שנה",
  description:
    "א.מ.ש אלומיניום – יצרני חלונות אלומיניום, פרגולות ותריסים חשמליים בישראל. למעלה מ-20 שנות ניסיון, מפעל פנימי לפרופיל, זכוכית, צבע ופרזול. שירות בכל הארץ.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    icon: Factory,
    title: "ייצור פנימי מלא",
    body: "פרופיל, זכוכית, צבע ופרזול – הכל מיוצר במפעל שלנו, ללא תלות בספקים חיצוניים.",
  },
  {
    icon: Award,
    title: "איכות ללא פשרות",
    body: "כל מוצר עובר בקרת איכות קפדנית לפני שהוא יוצא מהמפעל ומגיע אליכם הביתה.",
  },
  {
    icon: Users,
    title: "צוות מקצועי בלבד",
    body: "מודדים, יצרנים ומתקינים שגדלו אצלנו – לא קבלני משנה ולא נציגי מכירות חיצוניים.",
  },
  {
    icon: MapPin,
    title: "שירות בכל הארץ",
    body: "מצפון לדרום – אנחנו מגיעים אליכם, מודדים, מייצרים ומתקינים בעצמנו.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="אודות"
          title="20+ שנות ניסיון. מפעל אחד. סטנדרט אחד."
          subtitle="א.מ.ש אלומיניום הוקמה כדי לפתור בעיה אמיתית בענף הבנייה: שרשרת ספקים מסורבלת שגורמת לעיכובים, פערי מחירים והעברת אחריות. אנחנו מציעים גישה אחרת – יצרן אחד שאחראי לכל החלון, מהפרופיל ועד המנעול."
          image="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=2400&q=80"
          breadcrumbs={[
            { label: "בית", href: "/" },
            { label: "אודות" },
          ]}
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="space-y-5 text-brand-graphite text-lg leading-relaxed">
              <p>
                א.מ.ש אלומיניום הוקמה ב-{new Date().getFullYear() - BUSINESS.yearsExperience} על ידי{" "}
                <strong className="text-brand-navy-deep">
                  {BUSINESS.founderName}
                </strong>
                , קבלן אלומיניום ותיק עם למעלה מ-15 שנות ניסיון בשטח. נתנאל הקים
                את המפעל מתוך הבנה ברורה: כדי לתת ללקוח מוצר מצוין, צריך לשלוט
                בכל שלב בתהליך – ולא להסתמך על שרשרת של ספקים חיצוניים.
              </p>
              <p>
                היום, {BUSINESS.yearsExperience}+ שנים אחרי, אנחנו מפעילים מפעל
                שמייצר את כל מרכיבי החלון:{" "}
                <strong className="text-brand-orange">
                  פרופיל אלומיניום, זכוכית מבודדת, צבע בתנור פנימי, ופרזול
                  איכותי
                </strong>
                . אנחנו לא רק "מתקינים" – אנחנו היצרן הישיר, וזה ההבדל שאתם
                מרגישים בכל פרויקט.
              </p>
              <p>
                העבודה איתנו פשוטה: אתם מקבלים יועץ אחד, מחיר אחד, לוח זמנים אחד,
                ואחריות אחת. {BUSINESS.warrantyYears} שנות אחריות מקיפה על כל
                ייצור והתקנה. כי כשאתם בונים בית – אתם רוצים לישון בלילה בלי
                לדאוג ממי שיגיע לתקן את החלון אם משהו משתבש.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 mt-12">
              {VALUES.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="bg-brand-cream rounded-2xl p-6 border border-brand-stone hover:border-brand-orange/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-orange flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy-deep mb-2">
                    {title}
                  </h3>
                  <p className="text-brand-mist leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Authority />
        <ContactSection />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
