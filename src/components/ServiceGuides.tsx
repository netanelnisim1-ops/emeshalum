import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

const GROUP_LABELS: Record<string, string> = {
  guides: "מדריכים",
  pricing: "מחירים",
  comparisons: "השוואות",
  "use-cases": "פתרונות לפי שימוש",
  problems: "תקלות נפוצות",
  local: "אזורים",
};

// Every article written for this service, grouped by type, so each one is linked from a service page.
export default function ServiceGuides({ service }: { service: string }) {
  const posts = getAllPosts().filter((p) => p.service === service);
  if (posts.length === 0) return null;

  const groups = Object.keys(GROUP_LABELS)
    .map((key) => ({
      key,
      label: GROUP_LABELS[key],
      posts: posts
        .filter((p) => p.category === key)
        .sort((a, b) => a.title.localeCompare(b.title, "he")),
    }))
    .filter((g) => g.posts.length > 0);

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-navy-deep mb-8">
          מדריכים ומאמרים
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.map((g) => (
            <div key={g.key}>
              <h3 className="font-bold text-brand-navy-deep mb-3">{g.label}</h3>
              <ul className="space-y-2">
                {g.posts.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="text-brand-graphite hover:text-brand-orange transition-colors"
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
