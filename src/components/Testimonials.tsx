import { Star, ExternalLink } from "lucide-react";

// Real reviews from the Google Business Profile only. Copy them exactly as written on Google
// (first name + initial is fine) and update the rating/count when new reviews come in.
const GOOGLE_RATING = 5.0;
const GOOGLE_REVIEW_COUNT = 5;
// Official Google reviews URLs by place ID (the g.page short link opened a blank search page on mobile).
// Direct share link of OUR Business Profile (Maps > the profile > Share). A name search lands on a list
// that also shows the old rented-site profile and competitors, so leave empty until we have the real link.
const GOOGLE_REVIEWS_URL = "https://search.google.com/local/reviews?placeid=ChIJ4Ru8GGnurqYRZz68zWiGAmQ";
// Short "write a review" link from the Business Profile ("קבלת ביקורות נוספות"). Empty until we have it.
const WRITE_REVIEW_URL = "https://search.google.com/local/writereview?placeid=ChIJ4Ru8GGnurqYRZz68zWiGAmQ";

type GoogleReview = { author: string; rating: number; text: string; when?: string };
const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    author: "",
    rating: 5,
    text: "שרות מעולה, מקצועי אדיב ועונה מיד. סופר מרוצה מהתוצאה 🌼🌼",
  },
  {
    author: "משה קאזן",
    rating: 5,
    text: "שירות אדיב ומקצועי ... ולמרות שהייתה לי בעיה שלא קשורה אליו הוא הצליח לפתור לי אותה במקום.",
  },
  {
    author: "Hadas De-Vir",
    rating: 5,
    text: "שרות מעל ומעבר עם חיוך. נתנאל התקין לנו בדירה את כל חלונות האלומיניום. וגם תריסים חשמליים. והכל בלי לסחוב זמן. תוצאה מהממת ומחירים ממש הוגנים",
  },
  {
    author: "dudu arviv",
    rating: 5,
    text: "עשינו אצלו כמעט את כל החלונות בבית. מדובר בבחור מקצועי, מגדיל ראש...",
  },
  {
    author: "אליקים כרוב",
    rating: 5,
    text: "נתנאל עשה עבודה מקצועית איכותית ויפה. ברמה גבוהה. והכל באווירה טובה ונעימה. מומלץ!",
  },
];

function Stars({ count, size = "w-5 h-5" }: { count: number; size?: string }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${count} כוכבים`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${size} ${i < Math.round(count) ? "fill-brand-orange text-brand-orange" : "text-brand-stone"}`}
          aria-hidden
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-14 md:py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-brand-orange font-bold text-sm md:text-base uppercase tracking-widest mb-3">
            ביקורות בגוגל
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-navy-deep leading-tight tracking-tight text-balance">
            מה אומרים{" "}
            <span className="text-brand-orange">הלקוחות שלנו</span>
          </h2>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-2xl border border-brand-stone p-6 text-center mb-10">
          <div className="text-5xl font-extrabold text-brand-navy-deep">
            {GOOGLE_RATING.toFixed(1)}
          </div>
          <div className="flex justify-center my-2">
            <Stars count={GOOGLE_RATING} size="w-6 h-6" />
          </div>
          <div className="text-brand-mist">
            {GOOGLE_REVIEW_COUNT} ביקורות בגוגל
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-5">
            {GOOGLE_REVIEWS_URL && (
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-orange font-semibold hover:underline"
              >
                לכל הביקורות בגוגל
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {WRITE_REVIEW_URL && (
              <a
                href={WRITE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-deep text-white font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                עבדנו יחד? נשמח לביקורת
              </a>
            )}
          </div>
        </div>

        {GOOGLE_REVIEWS.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {GOOGLE_REVIEWS.map((r) => (
              <figure
                key={r.author + r.text.slice(0, 20)}
                className="bg-white rounded-2xl p-6 md:p-7 border border-brand-stone"
              >
                <Stars count={r.rating} />
                <blockquote className="text-brand-graphite text-base leading-relaxed my-5 text-pretty">
                  {r.text}
                </blockquote>
                <figcaption className="pt-4 border-t border-brand-stone flex items-center justify-between">
                  <span className="font-bold text-brand-navy-deep">{r.author || "לקוח/ה"}</span>
                  <span className="text-brand-mist text-sm">
                    {r.when ? `${r.when} · ` : ""}ביקורת בגוגל
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
