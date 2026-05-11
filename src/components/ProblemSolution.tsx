import { Factory, Truck, Wallet, ShieldCheck } from "lucide-react";

const ADVANTAGES = [
  {
    icon: Factory,
    title: "הכל תחת קורת גג אחת",
    body: "ייצור הפרופיל, חיתוך הזכוכית, עבודת הצבע והפרזול – הכל קורה במפעל שלנו.",
  },
  {
    icon: Truck,
    title: "אספקה מהירה וישירה",
    body: "בלי תלות בגורמים חיצוניים, בלי צווארי בקבוק. אנחנו מתחייבים ללוחות זמנים ועומדים בהם.",
  },
  {
    icon: Wallet,
    title: "מחירי יצרן הוגנים",
    body: "אתם מדלגים על פערי התיווך וקונים ישירות מהיצרן, מבלי להתפשר על מילימטר של איכות.",
  },
  {
    icon: ShieldCheck,
    title: "כתובת אחת לאחריות",
    body: "10 שנות אחריות מקיפה. יש בעיה? טלפון אחד אלינו, ואנחנו מטפלים בהכל.",
  },
];

export default function ProblemSolution() {
  return (
    <section className="py-14 md:py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-14">
          <p className="text-brand-orange font-bold text-sm md:text-base uppercase tracking-widest mb-3">
            למה אנחנו
          </p>
          <h2 className="text-brand-navy-deep text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-balance mb-6">
            בונים? משפצים?
            <br />
            <span className="text-brand-navy-light">
              אנחנו יודעים בדיוק מה עובר עליכם.
            </span>
          </h2>
          <div className="space-y-4 text-brand-graphite text-lg leading-relaxed">
            <p>
              תהליך של בנייה או שיפוץ בית יכול להיות מתיש. מול קבלן האלומיניום,
              לרוב מתגלה בעיה כואבת: הוא תלוי בספק הזכוכית, שולח את הפרופילים
              למצבעה חיצונית, ומזמין את הפרזול ממקום אחר. התוצאה?{" "}
              <strong className="text-brand-navy-deep">
                עיכובים בזמנים, מחירים שמתנפחים, וכשיש תקלה – כולם מאשימים את
                כולם.
              </strong>
            </p>
            <p className="text-xl md:text-2xl font-semibold text-brand-navy-deep">
              בא.מ.ש אלומיניום, שינינו את חוקי המשחק.
            </p>
            <p>
              אנחנו לא רק "מתקינים". אנחנו{" "}
              <strong className="text-brand-orange">
                היצרנים הבלעדיים של כל חלקי החלון שלכם.
              </strong>{" "}
              מה זה אומר עבורכם?
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {ADVANTAGES.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group relative bg-white rounded-2xl p-7 border border-brand-stone hover:border-brand-orange/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute -top-4 right-7 w-14 h-14 bg-brand-orange rounded-xl flex items-center justify-center shadow-lg shadow-brand-orange/30 group-hover:scale-110 transition-transform">
                <Icon className="w-7 h-7 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-brand-navy-deep mt-8 mb-3">
                {title}
              </h3>
              <p className="text-brand-mist leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
