const HE_TO_EN = {
  א: "a", ב: "b", ג: "g", ד: "d", ה: "h", ו: "v", ז: "z",
  ח: "ch", ט: "t", י: "y", כ: "k", ך: "k", ל: "l", מ: "m",
  ם: "m", נ: "n", ן: "n", ס: "s", ע: "a", פ: "p", ף: "f",
  צ: "ts", ץ: "ts", ק: "k", ר: "r", ש: "sh", ת: "t",
};

export function transliterateHebrew(text) {
  return text
    .split("")
    .map((ch) => HE_TO_EN[ch] ?? ch)
    .join("");
}

export function makeSlug(keyword, existingSlugs = []) {
  let base = transliterateHebrew(keyword)
    .toLowerCase()
    .replace(/["']/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 70);

  if (!base) base = "article";

  let slug = base;
  let suffix = 2;
  while (existingSlugs.includes(slug)) {
    slug = `${base}-${suffix}`;
    suffix += 1;
  }
  return slug;
}
