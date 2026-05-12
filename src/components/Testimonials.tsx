import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "רונית ברקוביץ'",
    location: "וילה ברעננה",
    project: "חלונות בלגיים + ויטרינה לסלון",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    quote:
      "עבדנו עם הרבה בעלי מקצוע במהלך בניית הבית, אבל את א.מ.ש אלומיניום אני ממליצה בלי היסוס. נתנאל הגיע למדידה, הסביר כל פרט, והתוצאה הסופית עברה את הציפיות. החלונות הבלגיים בסלון הפכו את המראה של כל הבית. אחרי שנתיים – אפס תקלות.",
    rating: 5,
  },
  {
    name: "אבי לוי",
    location: "פנטהאוז בתל אביב",
    project: "סגירת מרפסת + תריסים חשמליים",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    quote:
      "הזמנו 3 הצעות מחיר לסגירת המרפסת. א.מ.ש לא היה הזול ביותר, אבל היה היחיד שהסביר לי בדיוק מה אני מקבל - איזה פרופיל, איזה זכוכית, ולמה זה משנה. ההתקנה נעשתה בדיוק בזמן שהובטח, צוות מסודר ונקי. ההבדל בקור ובבידוד אקוסטי בלתי נתפס.",
    rating: 5,
  },
  {
    name: "מיכל אדרי",
    location: "בית פרטי בכפר סבא",
    project: "פרגולת אלומיניום למרפסת",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    quote:
      "פרגולת האלומיניום שא.מ.ש בנו לנו פשוט שינתה את החיים בבית. אנחנו יושבים במרפסת גם בקיץ הכי חם וגם בחורף עם הגשם. העבודה היתה מקצועית מהרגע הראשון, צוות מנומס ועומד בלוחות זמנים. בלי הפתעות.",
    rating: 5,
  },
  {
    name: "דוד שמואלי",
    location: "דופלקס ברמת השרון",
    project: "החלפת חלונות בכל הבית",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    quote:
      "החלפנו 14 חלונות בבית של 25 שנה. נתנאל בא, מדד, הציע פתרונות חכמים לפתחים לא סטנדרטיים, ונתן לוח זמנים ברור. הייצור והייצוא היו ב-3 שבועות בדיוק כמו שהובטח. ההבדל בחשבון החשמל מורגש כבר אחרי חודשיים. ממליץ בלב שלם.",
    rating: 5,
  },
  {
    name: "תמר אבולעפיה",
    location: "בית פרטי בהרצליה פיתוח",
    project: "מקלחון זכוכית מותאם אישית",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    quote:
      "חיפשתי מקלחון לחדר אמבטיה עם זוויות לא רגילות. כל מי שפניתי אליו הציע פשרות. א.מ.ש ייצרו לי בדיוק את מה שרציתי, עם זכוכית מחוסמת ופרזול שיוצא מן הכלל. עבודת אומן.",
    rating: 5,
  },
  {
    name: "אלון ושירה כהן",
    location: "בית חדש במודיעין",
    project: "פתרון אלומיניום כולל לבית",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=80",
    quote:
      "עברנו אצלם תהליך של ייעוץ, מדידה, ייצור והתקנה לכל הבית - חלונות, דלתות, מקלחונים ופרגולה. יתרון אדיר לעבוד עם ספק אחד שאחראי על הכל. גם המחיר היה משתלם משמעותית מקבלן רגיל. אחריות 10 שנים זה מה שנותן ראש שקט אמיתי.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-14 md:py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-brand-orange font-bold text-sm md:text-base uppercase tracking-widest mb-3">
            לקוחות ממליצים
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-navy-deep leading-tight tracking-tight text-balance">
            מה אומרים{" "}
            <span className="text-brand-orange">הלקוחות שלנו</span>
          </h2>
          <p className="text-brand-mist text-base md:text-lg mt-4 max-w-2xl mx-auto text-pretty">
            למעלה מ-1000 פרויקטים, אלפי לקוחות מרוצים. הנה מה שאומרים על העבודה איתנו:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="bg-white rounded-2xl p-6 md:p-7 border border-brand-stone hover:border-brand-orange/40 hover:shadow-xl hover:shadow-brand-navy/5 transition-all relative"
            >
              <Quote
                className="absolute top-5 left-5 w-9 h-9 text-brand-orange/15"
                aria-hidden
              />

              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-brand-orange text-brand-orange"
                    aria-hidden
                  />
                ))}
              </div>

              <blockquote className="text-brand-graphite text-base leading-relaxed mb-6 text-pretty">
                "{t.quote}"
              </blockquote>

              <figcaption className="flex items-center gap-4 pt-5 border-t border-brand-stone">
                <div
                  className="w-14 h-14 rounded-full bg-cover bg-center shrink-0 border-2 border-brand-orange/30"
                  style={{ backgroundImage: `url('${t.image}')` }}
                  role="img"
                  aria-label={`תמונת ${t.name}`}
                />
                <div>
                  <div className="font-bold text-brand-navy-deep">{t.name}</div>
                  <div className="text-brand-mist text-sm">{t.location}</div>
                  <div className="text-brand-orange text-xs font-semibold mt-0.5">
                    {t.project}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
