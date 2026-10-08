import Link from "next/link";
import {
  CITY_KEYWORDS,
  CITY_KEYWORD_LABELS,
  joinWithB,
} from "@/lib/city-keywords";

// "Where we install" block for a service page, built from the city keyword research.
export default function ServiceCities({ products }: { products: string[] }) {
  return (
    <section className="py-14 md:py-20 bg-brand-cream">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-navy-deep mb-6">
          איפה אנחנו מתקינים
        </h2>
        <div className="space-y-4 text-brand-navy-deep leading-relaxed">
          {products.map((p) => (
            <p key={p} className="text-pretty">
              <strong>{CITY_KEYWORD_LABELS[p]}</strong>{" "}
              {joinWithB(CITY_KEYWORDS[p])}.
            </p>
          ))}
        </div>
        <Link
          href="/areas"
          className="inline-block mt-6 text-brand-orange font-semibold hover:underline"
        >
          לכל הערים והיישובים שאנחנו מגיעים אליהם
        </Link>
      </div>
    </section>
  );
}
