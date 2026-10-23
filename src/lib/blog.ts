import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type BlogPostFrontmatter = {
  title: string;
  slug: string;
  description: string;
  keyword: string;
  category: string;
  service: string;
  date: string;
  author: string;
  image?: string;
  wordCount?: number;
};

export type BlogPost = BlogPostFrontmatter & {
  content: string;
  html: string;
};

export type BlogPostSummary = BlogPostFrontmatter & {
  excerpt: string;
};

function ensureBlogDir() {
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true });
  }
}

export function getAllSlugs(): string[] {
  ensureBlogDir();
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllPosts(): BlogPostSummary[] {
  const slugs = getAllSlugs();
  const posts = slugs
    .map((slug) => {
      const file = path.join(BLOG_DIR, `${slug}.md`);
      const raw = fs.readFileSync(file, "utf-8");
      const { data, content } = matter(raw);
      const fm = data as BlogPostFrontmatter;
      const plainText = content.replace(/[#*_`]/g, "").replace(/\s+/g, " ").trim();
      const excerpt = plainText.slice(0, 180) + (plainText.length > 180 ? "..." : "");
      return { ...fm, slug, excerpt };
    })
    .filter((post) => post.date && post.title)
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return posts;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const file = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) {
    return null;
  }
  const raw = fs.readFileSync(file, "utf-8");
  const { data, content } = matter(raw);
  const fm = data as BlogPostFrontmatter;

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(content);

  return {
    ...fm,
    slug,
    content,
    html: String(processed),
  };
}

const STOP_WORDS = new Set(["אלומיניום", "של", "או", "מה", "עם", "איך", "כמה", "מחיר", "עולה", "לבית", "את", "על", "לבחור", "המדריך", "המלא"]);

function topicWords(post: BlogPostFrontmatter) {
  return new Set(
    `${post.keyword} ${post.title}`
      .replace(/["'״׳:–-]/g, " ")
      .split(/\s+/)
      .filter((w) => w.length > 1 && !STOP_WORDS.has(w)),
  );
}

// Related articles by shared topic words first, then same service, then same category,
// so every article gets linked from its neighbours (not just the newest posts).
export function getRelatedPosts(currentSlug: string, currentCategory: string, limit = 4): BlogPostSummary[] {
  const all = getAllPosts();
  const current = all.find((p) => p.slug === currentSlug);
  if (!current) return all.slice(0, limit);
  const words = topicWords(current);
  return all
    .filter((p) => p.slug !== currentSlug)
    .map((p) => {
      let score = 0;
      for (const w of topicWords(p)) if (words.has(w)) score += 3;
      if (p.service === current.service) score += 2;
      if (p.category === currentCategory) score += 1;
      return { post: p, score };
    })
    .sort((a, b) => b.score - a.score || a.post.slug.localeCompare(b.post.slug))
    .slice(0, limit)
    .map((r) => r.post);
}
