"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type FAQItem = { q: string; a: string };

export default function ServiceFAQ({
  items,
  title = "שאלות נפוצות",
}: {
  items: FAQItem[];
  title?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-20 bg-brand-stone">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <h2 className="text-brand-navy-deep text-3xl md:text-4xl font-extrabold mb-10 text-balance">
          {title}
        </h2>
        <div className="space-y-3">
          {items.map((item, i) => (
            <div
              key={item.q}
              className="bg-white rounded-xl border border-brand-stone overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="w-full flex items-center justify-between gap-4 p-5 text-right hover:bg-brand-cream transition-colors"
              >
                <span className="font-bold text-brand-navy-deep text-base md:text-lg">
                  {item.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-orange shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-brand-graphite leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
