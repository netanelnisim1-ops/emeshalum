import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const SERVICES = [
  {
    title: "חלונות מעוצבים מכל הסוגים",
    body: "חלונות בלגיים, חלונות הזזה, חלונות פנורמיים, וחלונות פתיחה (קיפ / דריי-קיפ) – מיוצרים מהפרופילים המובילים והעמידים ביותר בשוק.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    href: "/services/windows-doors",
    accent: "חלונות בלגיים, הזזה ופנורמיים",
  },
  {
    title: "מערכות תריסים והצללה",
    body: "תריסי אור חשמליים, תריסי שלבים ורשתות נגללות נגד יתושים – משולבים באופן הרמוני עם החלון.",
    image:
      "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=1200&q=80",
    href: "/services/electric-shutters",
    accent: "תריסים חשמליים ורשתות",
  },
  {
    title: "מעטפת אלומיניום מלאה",
    body: "דלתות אלומיניום כניסה ופנים, פרגולות, סגירות חורף למרפסות זכוכית, גדרות, שערים ומעקות. אחידות עיצובית מול ספק אחד.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
    href: "/services/showers-pergolas-railings",
    accent: "פרגולות, מקלחונים ומעקות",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 md:py-28 bg-brand-stone">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-3xl">
            <p className="text-brand-orange font-bold text-sm md:text-base uppercase tracking-widest mb-3">
              ההתמחות שלנו
            </p>
            <h2 className="text-brand-navy-deep text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-balance">
              המומחיות שלנו
              <br />
              <span className="text-brand-navy-light">בייצור אלומיניום</span>
            </h2>
          </div>
          <Link
            href="/gallery"
            className="self-start md:self-auto inline-flex items-center gap-2 text-brand-navy-deep font-semibold hover:text-brand-orange transition-colors group"
          >
            לצפייה בגלריית העבודות המלאה
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:translate-y-[-4px]"
            >
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url('${service.image}')` }}
                  aria-hidden
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/70 to-transparent" />
                <span className="absolute top-4 right-4 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                  {service.accent}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold text-brand-navy-deep mb-3 text-balance">
                  {service.title}
                </h3>
                <p className="text-brand-mist leading-relaxed mb-4 text-pretty">
                  {service.body}
                </p>
                <span className="inline-flex items-center gap-2 text-brand-orange font-semibold group-hover:gap-3 transition-all">
                  קראו עוד
                  <ArrowLeft className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
