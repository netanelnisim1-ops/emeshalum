import { CircleCheck } from "lucide-react";

const KLIL_FEATURES = [
  "פרופיל בלגי מסדרת קליל 9000 ו-קליל 4500",
  "פרופילים תרמיים עם שבר תרמי לבידוד מקסימלי",
  "פרופילי הזזה בעובי דפן 1.6-2.0 מ\"מ",
  "מערכות חלונות ודלתות בהתאמה אישית",
  "צבעי קליל מאושרים בתקן ת\"י",
  "אחריות יצרן מלאה על פרופילי קליל",
];

const KLIL_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    alt: "פרופיל בלגי קליל - חלון מעוצב לסלון",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    alt: "פרופיל קליל - חלון פנורמי",
  },
  {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    alt: "פרופיל קליל - חלון הזזה",
  },
];

export default function KlilProfiles() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <p className="text-brand-orange font-bold text-sm md:text-base uppercase tracking-widest mb-3">
              שותפות עם המוביל בענף
            </p>
            <h2 className="text-brand-navy-deep text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-balance mb-6">
              ניתן למצוא אצלנו את כל סוגי
              <br />
              <span className="text-brand-orange">הפרופילים של קליל</span>
            </h2>

            <div className="space-y-4 text-brand-graphite text-lg leading-relaxed mb-8">
              <p>
                <strong className="text-brand-navy-deep">קליל</strong> הוא
                יצרן הפרופילים המוביל בישראל, עם מעל 60 שנות ניסיון בייצור
                מערכות אלומיניום ברמה הגבוהה ביותר. כל הפרופילים שלהם עומדים
                בתקנים הישראליים המחמירים והאירופאיים.
              </p>
              <p>
                בא.מ.ש אלומיניום אנחנו עובדים עם <strong>כל סדרות
                הפרופילים</strong> של קליל – מהסדרה הסטנדרטית ועד הסדרות
                המתקדמות עם שבר תרמי. כיוון שאנחנו מייצרים בעצמנו את החלונות,
                אנחנו יכולים להציע לכם את הפרופיל המדויק שמתאים לפרויקט שלכם
                – לפי תקציב, אסתטיקה ודרישות בידוד.
              </p>
            </div>

            <ul className="space-y-3">
              {KLIL_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-brand-graphite">
                  <CircleCheck className="w-5 h-5 text-brand-orange shrink-0 mt-1" strokeWidth={2.5} />
                  <span className="text-base md:text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div
              className="col-span-2 aspect-[16/10] rounded-2xl bg-cover bg-center shadow-lg"
              style={{ backgroundImage: `url('${KLIL_IMAGES[0].src}')` }}
              role="img"
              aria-label={KLIL_IMAGES[0].alt}
            />
            <div
              className="aspect-square rounded-2xl bg-cover bg-center shadow-lg"
              style={{ backgroundImage: `url('${KLIL_IMAGES[1].src}')` }}
              role="img"
              aria-label={KLIL_IMAGES[1].alt}
            />
            <div
              className="aspect-square rounded-2xl bg-cover bg-center shadow-lg"
              style={{ backgroundImage: `url('${KLIL_IMAGES[2].src}')` }}
              role="img"
              aria-label={KLIL_IMAGES[2].alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
