import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "בלוג מקצועי | טיפים, מדריכים ומחירים – א.מ.ש אלומיניום",
  description:
    "מאמרים ומדריכים על חלונות אלומיניום, פרגולות, מקלחונים ותריסים חשמליים. טיפים מבעלי הניסיון, השוואות, מחירים והמלצות מקצועיות.",
  alternates: { canonical: "/blog" },
};

const CATEGORY_LABELS: Record<string, string> = {
  guides: "מדריכים",
  comparisons: "השוואות",
  pricing: "מחירים",
  local: "אזור",
  problems: "פתרון בעיות",
  "use-cases": "שימושים",
};

const CATEGORY_COLORS: Record<string, string> = {
  guides: "bg-blue-100 text-blue-800",
  comparisons: "bg-purple-100 text-purple-800",
  pricing: "bg-green-100 text-green-800",
  local: "bg-yellow-100 text-yellow-800",
  problems: "bg-red-100 text-red-800",
  "use-cases": "bg-indigo-100 text-indigo-800",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="בלוג מקצועי"
          title="מדריכים, טיפים ומחירים מעולם האלומיניום"
          subtitle={`${BUSINESS.yearsExperience}+ שנות ניסיון בתחום, שמכנסים לכל מאמר. תוכן אמיתי מבעלי המקצוע — לא העתקות מהאינטרנט.`}
          breadcrumbs={[{ label: "בית", href: "/" }, { label: "בלוג" }]}
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            {posts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-brand-mist text-lg">
                  עדיין לא הועלו מאמרים. חזרו בקרוב!
                </p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group bg-white border border-brand-stone hover:border-brand-orange/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                  >
                    {post.image && (
                      <div className="relative h-48 overflow-hidden bg-brand-stone">
                        <div
                          className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                          style={{ backgroundImage: `url('${post.image}')` }}
                          aria-hidden
                        />
                      </div>
                    )}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-3 text-xs">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-semibold ${CATEGORY_COLORS[post.category] || "bg-gray-100 text-gray-800"}`}
                        >
                          <Tag className="w-3 h-3" />
                          {CATEGORY_LABELS[post.category] || post.category}
                        </span>
                        <span className="inline-flex items-center gap-1 text-brand-mist">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString("he-IL", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-brand-navy-deep mb-3 text-balance group-hover:text-brand-orange transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-brand-mist text-sm leading-relaxed mb-4 flex-1 text-pretty">
                        {post.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-brand-orange font-semibold text-sm mt-auto group-hover:gap-3 transition-all">
                        קראו את המאמר המלא
                        <ArrowLeft className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
