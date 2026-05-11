import { Quote } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const STATS = [
  { number: `${BUSINESS.yearsExperience}+`, label: "שנות ניסיון" },
  { number: "1000+", label: "פרויקטים שהושלמו" },
  { number: `${BUSINESS.warrantyYears}`, label: "שנות אחריות מקיפה" },
  { number: "100%", label: "ייצור In-House" },
];

const NETANEL_PHOTO = "/images/netanel-owner.jpeg";

export default function Authority() {
  return (
    <section className="relative py-14 md:py-20 bg-brand-navy-deep text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(232,93,31,0.4) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(232,93,31,0.3) 0%, transparent 50%)",
        }}
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-14">
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

        <figure className="max-w-5xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-7 md:p-10 relative">
          <Quote
            className="absolute top-6 right-6 w-12 h-12 text-brand-orange/30 rotate-180"
            aria-hidden
          />

          <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-10 items-center">
            <div className="relative w-full max-w-[200px] aspect-square mx-auto md:mx-0">
              <div
                className="absolute inset-0 rounded-2xl bg-cover bg-center border-4 border-brand-orange/50 shadow-2xl shadow-brand-orange/20"
                style={{ backgroundImage: `url('${NETANEL_PHOTO}')` }}
                role="img"
                aria-label={`תמונת ${BUSINESS.founderName}`}
              />
              <div className="absolute -bottom-3 -left-3 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                {BUSINESS.yearsExperience}+ שנות ניסיון
              </div>
            </div>

            <div>
              <blockquote className="text-base md:text-xl leading-relaxed text-white/95 mb-5 text-pretty">
                "כקבלן אלומיניום עם מעל 15 שנות ניסיון בשטח, ראיתי את כל
                התקלות שיכולות לקרות בבנייה. לכן הקמתי את המפעל שלנו בצורה
                שתעניק ללקוח שקט נפשי אמיתי. כל חלון, מסילה וזכוכית שיוצאים
                מאיתנו עוברים בקרת איכות קפדנית, עד להתקנה המושלמת אצלכם
                בבית."
              </blockquote>

              <figcaption>
                <div className="font-bold text-lg">{BUSINESS.founderName}</div>
                <div className="text-brand-orange-light text-sm font-semibold">
                  {BUSINESS.founderRole} | {BUSINESS.name}
                </div>
              </figcaption>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}
