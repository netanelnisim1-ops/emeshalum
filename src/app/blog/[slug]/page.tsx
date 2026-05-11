import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import ContactSection from "@/components/ContactSection";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { getAllSlugs, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { BUSINESS } from "@/lib/business";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: post.image ? [{ url: post.image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

const CATEGORY_LABELS: Record<string, string> = {
  guides: "מדריכים",
  comparisons: "השוואות",
  pricing: "מחירים",
  local: "אזור",
  problems: "פתרון בעיות",
  "use-cases": "שימושים",
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, post.category, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.image ? [post.image] : undefined,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      logo: { "@type": "ImageObject", url: `${BUSINESS.siteUrl}/logo.png` },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BUSINESS.siteUrl}/blog/${slug}`,
    },
    keywords: post.keyword,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow={CATEGORY_LABELS[post.category] || "מאמר"}
          title={post.title}
          subtitle={post.description}
          image={post.image}
          breadcrumbs={[
            { label: "בית", href: "/" },
            { label: "בלוג", href: "/blog" },
            { label: post.title },
          ]}
        />

        <article className="py-16 md:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-brand-mist text-sm mb-8 pb-8 border-b border-brand-stone">
              <span className="inline-flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("he-IL", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            <div
              className="article-content text-brand-graphite leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />

            <div className="mt-12 pt-8 border-t border-brand-stone bg-brand-cream rounded-2xl p-6 md:p-8 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-brand-navy-deep mb-3">
                רוצים יעוץ אישי לפרויקט שלכם?
              </h3>
              <p className="text-brand-mist mb-5">
                {BUSINESS.yearsExperience}+ שנות ניסיון, ייצור עצמי, {BUSINESS.warrantyYears} שנות אחריות. דברו ישירות עם היצרן.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-deep text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-brand-orange/30 transition-all"
              >
                לקבלת הצעת מחיר
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </article>

        {related.length > 0 && (
          <section className="py-16 bg-brand-stone">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy-deep mb-8">
                מאמרים נוספים שאתם עשויים לאהוב
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="group bg-white rounded-2xl p-6 border border-brand-stone hover:border-brand-orange/40 hover:shadow-lg transition-all"
                  >
                    <h3 className="text-lg font-bold text-brand-navy-deep mb-2 group-hover:text-brand-orange transition-colors text-balance">
                      {rel.title}
                    </h3>
                    <p className="text-sm text-brand-mist line-clamp-3 text-pretty">
                      {rel.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-brand-orange font-semibold text-sm">
                      קראו עוד
                      <ArrowLeft className="w-3 h-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <ContactSection />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
