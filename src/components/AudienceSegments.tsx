import { House, Compass } from "lucide-react";

const SEGMENTS = [
  {
    icon: House,
    badge: "לקוחות פרטיים",
    title: "לבתים פרטיים, וילות ודירות יוקרה",
    body: "החלונות הם העיניים של הבית. בין אם אתם חולמים על חלונות בלגיים במראה כפרי, ויטרינות ענק שמכניסות את הגינה לסלון, או חלונות מינימליסטיים בפרופיל שחור (דמוי עץ או חלק) – אנחנו מייצרים הכל במידות מדויקות, עם זכוכיות מבודדות רעש וקור, ותריסי אור חשמליים להשלמת החוויה.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80",
  },
  {
    icon: Compass,
    badge: "אנשי מקצוע",
    title: "לאדריכלים, מעצבי פנים וקבלנים",
    body: 'אתם צריכים שותף לדרך, לא עוד ספק שמעכב לכם את הפרויקט. כמפעל אלומיניום שמייצר הכל (In-House), אנחנו מבטיחים לכם דיוק מוחלט למפרט האדריכלי, יכולת ייצור לפרויקטים מורכבים במיוחד (Custom Made), ואספקה בזמנים שיאפשרו לכם למסור את המפתח ללקוח בזמן ועם ראש שקט.',
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function AudienceSegments() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-14">
          <p className="text-brand-orange font-bold text-sm md:text-base uppercase tracking-widest mb-3">
            למי אנחנו פונים
          </p>
          <h2 className="text-brand-navy-deep text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-balance">
            פתרונות אלומיניום מתקדמים,
            <br />
            <span className="text-brand-navy-light">
              למי שלא מתפשר על איכות.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {SEGMENTS.map(({ icon: Icon, badge, title, body, image }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-3xl bg-brand-navy-deep text-white shadow-xl"
            >
              <div className="absolute inset-0">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url('${image}')` }}
                  aria-hidden
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(14,31,46,0.95) 0%, rgba(14,31,46,0.75) 55%, rgba(14,31,46,0.45) 100%)",
                  }}
                />
              </div>

              <div className="relative p-8 md:p-10 min-h-[26rem] flex flex-col justify-end">
                <div className="inline-flex items-center gap-2 self-start bg-brand-orange/20 border border-brand-orange/40 backdrop-blur-sm rounded-full px-3 py-1 mb-5">
                  <Icon className="w-4 h-4 text-brand-orange-light" />
                  <span className="text-brand-orange-light font-semibold text-xs uppercase tracking-wide">
                    {badge}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold mb-4 text-balance">
                  {title}
                </h3>
                <p className="text-white/85 leading-relaxed text-pretty">
                  {body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
