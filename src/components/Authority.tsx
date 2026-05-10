import { Quote } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const STATS = [
  { number: `${BUSINESS.yearsExperience}+`, label: "שנות ניסיון" },
  { number: "1000+", label: "פרויקטים שהושלמו" },
  { number: `${BUSINESS.warrantyYears}`, label: "שנות אחריות מקיפה" },
  { number: "100%", label: "ייצור In-House" },
];

export default function Authority() {
  return (
    <section className="relative py-20 md:py-28 bg-brand-navy-deep text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(232,93,31,0.4) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(232,93,31,0.3) 0%, transparent 50%)",
        }}
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <p className="text-brand-orange-light font-bold text-sm md:text-base uppercase tracking-widest mb-3">
            סמכות וניסיון
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-balance">
            למעלה מ-{BUSINESS.yearsExperience} שנות ניסיון –
            <br />
            <span className="text-brand-orange-light">
              הסטנדרט של א.מ.ש אלומיניום
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-brand-orange/40 hover:bg-white/10 transition-all"
            >
              <div className="text-3xl md:text-5xl font-extrabold text-brand-orange-light mb-2">
                {stat.number}
              </div>
              <div className="text-white/70 text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <figure className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 relative">
          <Quote
            className="absolute top-6 right-6 w-12 h-12 text-brand-orange/30 rotate-180"
            aria-hidden
          />

          <blockquote className="text-lg md:text-2xl leading-relaxed text-white/95 mb-6 text-pretty">
            "כקבלן אלומיניום עם מעל 15 שנות ניסיון בשטח, ראיתי את כל התקלות
            שיכולות לקרות בבנייה. לכן הקמתי את המפעל שלנו בצורה שתעניק ללקוח
            שקט נפשי אמיתי. כל חלון, מסילה וזכוכית שיוצאים מאיתנו עוברים בקרת
            איכות קפדנית, עד להתקנה המושלמת אצלכם בבית."
          </blockquote>

          <figcaption className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-orange to-brand-orange-deep flex items-center justify-center text-2xl font-extrabold">
              {BUSINESS.founderName.charAt(0)}
            </div>
            <div>
              <div className="font-bold text-lg">{BUSINESS.founderName}</div>
              <div className="text-brand-orange-light text-sm font-semibold">
                {BUSINESS.founderRole} | {BUSINESS.name}
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
