import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
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
              "linear-gradient(115deg, rgba(8,18,30,0.96) 0%, rgba(14,31,46,0.92) 45%, rgba(14,31,46,0.78) 100%)",
          }}
          aria-hidden
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28 w-full">
        <div className="max-w-3xl">
          <div
            className="inline-flex items-center gap-3 bg-brand-orange/20 border-2 border-brand-orange/60 backdrop-blur-sm rounded-full px-6 py-3 mb-8 animate-fade-up shadow-lg shadow-brand-orange/20"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-brand-orange-light font-bold text-base md:text-lg tracking-wide">
              יצרן בלעדי | {BUSINESS.yearsExperience}+ שנות ניסיון
            </span>
          </div>

          <h1
            className="text-white text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.02] tracking-tight text-balance animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            חלון לחיים.
            <br />
            <span className="text-brand-orange-light">חיבור מושלם</span>
            <br />
            <span className="text-white/90">בין הבית לעולם.</span>
          </h1>

          <p
            className="text-white/90 text-lg md:text-xl mt-7 leading-relaxed max-w-2xl text-pretty animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            חלון אלומיניום איכותי מבודד מהקור והחום, חוסם רעש, מאיר את הבית
            בשמש, ושומר על האווירה שאתם רוצים. בא.מ.ש אלומיניום אנחנו מייצרים
            את כל חלקי החלון – פרופיל, זכוכית, צבע ופרזול – בעצמנו. תוצאה:
            התאמה מדויקת, מחיר ישיר מהיצרן, ואחריות אחת מקיפה.
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

            <div className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold px-8 py-4 rounded-xl text-base md:text-lg select-text">
              <Phone className="w-5 h-5" strokeWidth={2.5} />
              <span dir="ltr">{BUSINESS.phoneDisplay}</span>
            </div>
          </div>

          <div
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 animate-fade-up"
            style={{ animationDelay: "0.55s" }}
          >
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/15">
              <span className="flex items-center justify-center w-7 h-7 bg-brand-orange rounded-full text-white text-base font-extrabold shrink-0">✓</span>
              <span className="text-white font-bold text-base md:text-lg">הכל תחת קורת גג אחת</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/15">
              <span className="flex items-center justify-center w-7 h-7 bg-brand-orange rounded-full text-white text-base font-extrabold shrink-0">✓</span>
              <span className="text-white font-bold text-base md:text-lg">מחירי יצרן הוגנים</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/15">
              <span className="flex items-center justify-center w-7 h-7 bg-brand-orange rounded-full text-white text-base font-extrabold shrink-0">✓</span>
              <span className="text-white font-bold text-base md:text-lg">{BUSINESS.warrantyYears} שנות אחריות</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
