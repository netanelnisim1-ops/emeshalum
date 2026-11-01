import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PRODUCT_PAGES } from "@/lib/product-pages";

// Grid of the dedicated product pages under a service, so each is one click from its parent.
export default function ProductLinks({ parent }: { parent: string }) {
  const products = PRODUCT_PAGES.filter((p) => p.parent === parent);
  if (products.length === 0) return null;

  return (
    <section className="py-14 md:py-20 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-navy-deep mb-8">
          המוצרים שלנו
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/services/${p.slug}`}
              className="group flex items-center justify-between bg-white rounded-xl border border-brand-stone px-5 py-4 hover:border-brand-orange/50 hover:shadow-md transition-all"
            >
              <span className="font-semibold text-brand-navy-deep group-hover:text-brand-orange transition-colors">
                {p.keyword}
              </span>
              <ArrowLeft className="w-4 h-4 text-brand-orange" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
