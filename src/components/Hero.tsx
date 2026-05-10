import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80')",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, rgba(14,31,46,0.92) 0%, rgba(22,49,74,0.78) 45%, rgba(22,49,74,0.35) 100%)",
          }}
          aria-hidden
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-brand-orange/15 border border-brand-orange/40 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-brand-orange-light font-semibold text-sm">
              יצרן בלעדי | {BUSINESS.yearsExperience}+ שנות ניסיון
            </span>
          </div>

          <h1
            className="text-white text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-balance animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            הבית שלכם עומד לקבל את חלונות
            <br />
            <span className="text-brand-orange-light">האלומיניום המושלמים.</span>
            <br />
            <span className="text-white/85 text-3xl md:text-5xl lg:text-6xl font-bold">
              בלי כאב הראש של השיפוץ.
            </span>
          </h1>

          <p
            className="text-white/85 text-lg md:text-xl mt-7 leading-relaxed max-w-2xl text-pretty animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            כשהפרופיל, הזכוכית, הצבע והפרזול מיוצרים כולם במפעל אחד – אתם מקבלים
            חלונות ברמת הגימור הגבוהה ביותר, באספקה מהירה ובמחיר יצרן. בלי
            לרדוף אחרי ספקים, ובלי שקבלנים יזרקו אחריות אחד על השני.
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 bg-brand-orange hover:bg-brand-orange-deep text-white font-bold px-8 py-4 rounded-xl text-base md:text-lg shadow-2xl shadow-brand-orange/30 hover:shadow-brand-orange/50 transition-all hover:translate-y-[-2px]"
            >
              לתיאום פגישת ייעוץ אישית
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Link>

            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold px-8 py-4 rounded-xl text-base md:text-lg transition-all"
            >
              <Phone className="w-5 h-5" strokeWidth={2.5} />
              <span dir="ltr">{BUSINESS.phoneDisplay}</span>
            </a>
          </div>

          <div
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-white/75 text-sm animate-fade-up"
            style={{ animationDelay: "0.55s" }}
          >
            <div className="flex items-center gap-2">
              <span className="text-brand-orange text-lg">✓</span>
              <span>הכל תחת קורת גג אחת</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-brand-orange text-lg">✓</span>
              <span>מחירי יצרן הוגנים</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-brand-orange text-lg">✓</span>
              <span>{BUSINESS.warrantyYears} שנות אחריות</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
