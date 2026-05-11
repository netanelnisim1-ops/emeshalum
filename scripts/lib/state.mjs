import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const STATE_FILE = path.join(ROOT, "content", "blog-state.json");

export function loadState() {
  if (!fs.existsSync(STATE_FILE)) {
    return { usedKeywords: [], history: [] };
  }
  try {
    return JSON.parse(fs.readFileSync(STATE_FILE, "utf-8"));
  } catch {
    return { usedKeywords: [], history: [] };
  }
}

export function saveState(state) {
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2), "utf-8");
}

export function markKeywordUsed(state, keyword, slug, category) {
  if (!state.usedKeywords.includes(keyword)) {
    state.usedKeywords.push(keyword);
  }
  state.history.push({
    keyword,
    slug,
    category,
    publishedAt: new Date().toISOString(),
  });
}

export function pickNextKeyword(state, allKeywords, options = {}) {
  const { categoryRotation = ["guides", "pricing", "comparisons", "problems", "local", "use-cases", "pricing", "guides"] } = options;

  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000,
  );
  const preferredCategory = categoryRotation[dayOfYear % categoryRotation.length];

  const usedSet = new Set(state.usedKeywords);

  const available = allKeywords.filter((kw) => !usedSet.has(kw.keyword));
  if (available.length === 0) {
    throw new Error("All keywords exhausted! Add more to keywords.json");
  }

  const preferred = available.filter((kw) => kw.category === preferredCategory);
  const pool = preferred.length > 0 ? preferred : available;
  return pool[0];
}

export function flattenKeywords(keywordsData) {
  const out = [];
  for (const [categoryKey, category] of Object.entries(keywordsData.categories)) {
    for (const item of category.keywords) {
      out.push({
        ...item,
        category: categoryKey,
        categoryIntent: category.intent,
        categoryPriority: category.priority,
      });
    }
  }
  return out;
}
