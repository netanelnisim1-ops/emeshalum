#!/usr/bin/env node
/**
 * generate-article.mjs
 *
 * מערכת אוטומטית לכתיבת מאמרים יומית לאתר א.מ.ש אלומיניום.
 *
 * שימוש:
 *   ANTHROPIC_API_KEY=sk-ant-xxx node scripts/generate-article.mjs
 *
 * דגלים אופציונליים:
 *   --keyword "מילה ספציפית"    כפיית בחירת מילת מפתח
 *   --dry-run                    בלי לכתוב לקובץ, רק להציג בקונסולה
 *   --model claude-sonnet-4-6    שינוי מודל (ברירת מחדל: claude-sonnet-4-6)
 */

import Anthropic from "@anthropic-ai/sdk";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  loadState,
  saveState,
  markKeywordUsed,
  pickNextKeyword,
  flattenKeywords,
} from "./lib/state.mjs";
import { makeSlug } from "./lib/slug.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const KEYWORDS_FILE = path.join(ROOT, "content", "keywords", "keywords.json");
const BLOG_DIR = path.join(ROOT, "content", "blog");

const args = process.argv.slice(2);
const arg = (flag) => {
  const idx = args.indexOf(flag);
  return idx >= 0 ? args[idx + 1] : undefined;
};
const dryRun = args.includes("--dry-run");
const forceKeyword = arg("--keyword");
const model = arg("--model") || "claude-sonnet-4-6";

const apiKey = process.env.ANTHROPIC_API_KEY;
if (!apiKey) {
  console.error("\n❌ ANTHROPIC_API_KEY חסר.\n");
  console.error("   קבלי מפתח ב-https://console.anthropic.com/settings/keys");
  console.error("   והגדירי במשתנה הסביבה:");
  console.error("   export ANTHROPIC_API_KEY=sk-ant-xxxx\n");
  process.exit(1);
}

const BUSINESS = {
  name: "א.מ.ש אלומיניום",
  slogan: "מגשימים חלומות מעוצבים",
  founderName: "נתנאל ניסים",
  founderRole: 'מנכ"ל ובעלים',
  yearsExperience: 20,
  warrantyYears: 5,
  phone: "055-992-2592",
  email: "allonioffice@gmail.com",
  serviceArea: "כל הארץ",
  usp: "יצרן בלעדי של כל חלקי החלון תחת קורת גג אחת – פרופיל, זכוכית, צביעה ופרזול. בלי תלות בספקים חיצוניים, בלי תיווך, מחירי יצרן.",
};

function buildSystemPrompt() {
  return `אתה כתב SEO מומחה בעולם האלומיניום בישראל. אתה כותב מאמרים מקצועיים, מעמיקים ואותנטיים ל-${BUSINESS.name} – יצרן אלומיניום ותיק עם ${BUSINESS.yearsExperience}+ שנות ניסיון.

## אישיות הכתיבה
- מקצועי אך נגיש – לא בשפה גבוהה מדי, לא יומרני
- אמין ושקוף – לא משתמש בקלישאות שיווקיות מוגזמות
- מבוסס מומחיות – שולף ידע אמיתי מתחום האלומיניום
- כותב בלשון "אנחנו" (לא "אני") כי זה צוות החברה
- מצדיק טענות במספרים ופרטים טכניים, לא ב"הכי טוב"

## בידול ייחודי לחברה (USP)
${BUSINESS.usp}

## כללים קריטיים לכתיבה
1. **כתוב בעברית בלבד**. אסור באנגלית (חוץ ממונחים טכניים סטנדרטיים כמו "PVC").
2. **2000-3000 מילים** למאמר.
3. **5-8 כותרות משנה H2** (## בסימון Markdown) שמכסות את הנושא לעומקו.
4. **אסור על אימוג'ים בטקסט** (לא בכותרות, לא בפסקאות). מותר רק ב-checkmark של רשימות אם רלוונטי (✓).
5. **אסור על "במאמר זה נדבר על..." או "לסיכום, ראינו ש..."** – פתח ישר עם תוכן.
6. **טבלאות מחיר אם רלוונטי** (אינטנט מסחרי) – פורמט Markdown table.
7. **רשימות עם bullets** במקום פסקאות ארוכות כשמתאים.
8. **CTA פעיל מובלע** – לא מכירתי, אבל מזכיר את החברה בהקשר רלוונטי. למשל: "בא.מ.ש אלומיניום אנחנו מייצרים את כל הפרופילים בעצמנו, וזה מאפשר לנו..." – ולא "תזמינו עכשיו!".
9. **קישורים פנימיים** – באופן טבעי, הזכר ובלינק את עמודי השירות:
   - /services/windows-doors (חלונות, דלתות, ויטרינות)
   - /services/showers-pergolas-railings (מקלחונים, פרגולות, מעקות)
   - /services/electric-shutters (תריסים חשמליים)
   - /services (סקירת שירותים)
   - /contact (יצירת קשר)
   - /gallery (גלריית פרויקטים)
10. **אסור** להשתמש ב-em-dash (—) פתחי או סוגרי משפטים. השתמש בנקודה, סוגריים או פסיק.
11. **אסור** למלא בביטויים גנריים כמו "בעולמינו המודרני", "כפי שכולנו יודעים", "אין ספק ש-".

## מבנה המאמר (חובה)
1. **פסקת פתיחה** (60-100 מילים) – זווית מעניינת, לא הקדמה משמימה. נקודת כאב אמיתית או עובדה מפתיעה.
2. **5-8 סקציות H2** עם תוכן עמוק לכל אחת
3. **לפחות 1 טבלה** (אם רלוונטי לנושא – מחירים, השוואות, מפרטים)
4. **סקציית "שאלות נפוצות"** בסוף עם 3-5 שאלות (H3 לכל שאלה)
5. **פסקת סיום** (50-80 מילים) – לא "לסיכום" אלא הצעת פעולה בטון מקצועי

## פלט
הפלט שלך = רק תוכן המאמר ב-Markdown. בלי frontmatter, בלי אזהרות, בלי הקדמות. רק תוכן הגוף שיתחיל מהפסקה הראשונה.`;
}

function buildUserPrompt(item) {
  return `כתוב מאמר SEO על הנושא הבא:

## מילת מפתח ראשית
**${item.keyword}**

## פרטים
- **קטגוריה**: ${item.category} (${item.categoryIntent})
- **שירות מרכזי מקושר**: ${item.primaryService}
- **אורך יעד**: ~${item.wordCount} מילים
- **קהל יעד**: בעלי בתים פרטיים, זוגות שמשפצים, אדריכלים בישראל

## הנחיות נוספות לפי קטגוריה

${getCategoryGuidance(item.category)}

עכשיו כתוב את המאמר השלם בעברית.`;
}

function getCategoryGuidance(category) {
  switch (category) {
    case "guides":
      return `- מאמר חינוכי-מעשי. הקורא רוצה ללמוד.
- פתח בבעיה אמיתית: "אם הגעת לכאן כי..."
- תוכן עם 5-7 צעדים מפורטים או 4-5 שיקולים עיקריים
- אזהרות לטעויות נפוצות
- שלב נסיון של בעלי המקצוע ("ראינו לקוחות שעשו את הטעות הזו")`;
    case "comparisons":
      return `- השוואה ניטרלית והוגנת. אל תהיה מוטה לאופציה אחת.
- טבלת השוואה ברורה בסקציה הראשונה
- נקודה לכל אופציה
- "מתי X עדיף" + "מתי Y עדיף"
- המלצה בסוף לפי תרחיש, לא "X הכי טוב"`;
    case "pricing":
      return `- אינטנט מסחרי גבוה - הקורא רוצה לדעת כמה זה עולה.
- **טבלת מחירים מפורטת חובה** בסקציה הראשונה או השנייה
- מחירים אמיתיים מהשוק הישראלי 2026 (לדוגמה: ₪800-2500 למ"ר)
- מה משפיע על המחיר (גודל, פרופיל, זכוכית, צבע, פרזול)
- "מתי שווה לשלם יותר" + "איפה לחסוך"
- סיים בהזמנה רכה ליצירת קשר להצעת מחיר מדויקת`;
    case "local":
      return `- דף אזורי. כתוב כאילו אתה מומחה מקומי באזור הספציפי.
- הזכר את המאפיינים של האזור (אקלים, סגנון בנייה אופייני, סוגי דירות נפוצים)
- "אנחנו פועלים ב[אזור] כבר ${BUSINESS.yearsExperience} שנים"
- 3-5 פרויקטים שעשינו באזור (בלי שמות אמיתיים אלא תיאור: "וילה ב[שכונה], חלונות בלגיים שחורים")
- מרחק מהמפעל, זמני אספקה לאזור`;
    case "problems":
      return `- הקורא נמצא במצב לחץ – יש לו בעיה אמיתית.
- פתח עם הזדהות: "תריס שלא יורד יכול לקלקל לכם את היום"
- אבחון: 4-6 סיבות אפשריות בסדר מהקל לכבד
- מה אפשר לעשות לבד (זהיר!) ומתי לקרוא לטכנאי
- אזהרות בטיחות אם רלוונטי
- "אנחנו מטפלים במקרים האלה בכל הארץ" – CTA רך`;
    case "use-cases":
      return `- תרחיש שימוש ספציפי. הקורא יודע מה הוא רוצה, רוצה את ההתאמה האידיאלית.
- מאפייני התרחיש (מידות נפוצות, אילוצים)
- ההמלצה המקצועית שלנו
- 2-3 חלופות שונות לפי תקציב
- דוגמאות לפרויקטים דומים שביצענו`;
    default:
      return "- כתוב מאמר מעמיק, מקצועי ומועיל.";
  }
}

async function generateArticle(item) {
  console.log(`\n🤖 מייצר מאמר עבור: "${item.keyword}"`);
  console.log(`   קטגוריה: ${item.category} | יעד מילים: ${item.wordCount}\n`);

  const client = new Anthropic({ apiKey });

  const response = await client.messages.create({
    model,
    max_tokens: 8000,
    system: [{ type: "text", text: buildSystemPrompt(), cache_control: { type: "ephemeral" } }],
    messages: [{ role: "user", content: buildUserPrompt(item) }],
  });

  const content = response.content
    .filter((block) => block.type === "text")
    .map((block) => block.text)
    .join("");

  return { content, usage: response.usage };
}

function deriveDescriptionFromContent(keyword, content) {
  const firstParagraph = content.split("\n\n").find((p) => p.trim() && !p.startsWith("#")) || "";
  const cleaned = firstParagraph.replace(/[*_`]/g, "").trim();
  if (cleaned.length <= 160) return cleaned;
  return cleaned.slice(0, 157).replace(/\s+\S*$/, "") + "...";
}

function deriveTitleFromKeyword(keyword) {
  const variants = [
    `${keyword}: המדריך המלא | א.מ.ש אלומיניום`,
    `${keyword}: כל מה שצריך לדעת | א.מ.ש אלומיניום`,
    `${keyword} – ייצור והתקנה | א.מ.ש אלומיניום`,
  ];
  return variants[0];
}

function buildFrontmatter(item, slug, content) {
  const title = deriveTitleFromKeyword(item.keyword);
  const description = deriveDescriptionFromContent(item.keyword, content);
  const date = new Date().toISOString().split("T")[0];
  const wordCount = content.split(/\s+/).filter((w) => w.length > 0).length;

  return {
    title,
    slug,
    description,
    keyword: item.keyword,
    category: item.category,
    service: item.primaryService,
    date,
    author: BUSINESS.founderName,
    wordCount,
  };
}

function frontmatterToYaml(fm) {
  const lines = ["---"];
  for (const [key, value] of Object.entries(fm)) {
    const escaped = String(value).replace(/"/g, '\\"');
    lines.push(`${key}: "${escaped}"`);
  }
  lines.push("---");
  return lines.join("\n");
}

function getExistingSlugs() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

async function main() {
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true });
  }

  const keywordsData = JSON.parse(fs.readFileSync(KEYWORDS_FILE, "utf-8"));
  const allKeywords = flattenKeywords(keywordsData);
  const state = loadState();

  let item;
  if (forceKeyword) {
    item = allKeywords.find((kw) => kw.keyword === forceKeyword);
    if (!item) {
      console.error(`❌ מילת המפתח "${forceKeyword}" לא נמצאה ב-keywords.json`);
      process.exit(1);
    }
  } else {
    item = pickNextKeyword(state, allKeywords);
  }

  const existingSlugs = getExistingSlugs();
  const slug = makeSlug(item.keyword, existingSlugs);

  const { content, usage } = await generateArticle(item);

  const fm = buildFrontmatter(item, slug, content);
  const output = `${frontmatterToYaml(fm)}\n\n${content.trim()}\n`;
  const filePath = path.join(BLOG_DIR, `${slug}.md`);

  console.log(`\n📊 שימוש ב-API:`);
  console.log(`   input tokens:  ${usage.input_tokens}`);
  console.log(`   output tokens: ${usage.output_tokens}`);
  console.log(`   cached read:   ${usage.cache_read_input_tokens || 0}`);
  console.log(`   cached write:  ${usage.cache_creation_input_tokens || 0}\n`);
  console.log(`📝 מאמר נוצר:`);
  console.log(`   כותרת: ${fm.title}`);
  console.log(`   מילים: ${fm.wordCount}`);
  console.log(`   slug:  ${slug}\n`);

  if (dryRun) {
    console.log("🟡 dry-run – לא נכתב לקובץ");
    console.log("\n--- תצוגה מקדימה (200 תווים ראשונים) ---");
    console.log(content.slice(0, 200) + "...\n");
    return;
  }

  fs.writeFileSync(filePath, output, "utf-8");
  markKeywordUsed(state, item.keyword, slug, item.category);
  saveState(state);

  console.log(`✅ נשמר: ${filePath}`);
  console.log(`   /blog/${slug}\n`);
}

main().catch((err) => {
  console.error("\n❌ שגיאה:", err.message);
  if (err.stack) console.error(err.stack);
  process.exit(1);
});
