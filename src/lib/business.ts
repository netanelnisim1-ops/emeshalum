export const BUSINESS = {
  name: "א.מ.ש אלומיניום",
  slogan: "מגשימים חלומות מעוצבים",
  tagline: "יצרני חלונות אלומיניום מובילים בישראל",
  founderName: "נתנאל ניסים",
  founderRole: 'מנכ"ל ובעלים',
  yearsExperience: 20,
  warrantyYears: 5,
  phone: "+972559922592",
  phoneDisplay: "055-992-2592",
  whatsapp: "972559922592",
  email: "jobs@aloni-alum.co.il",
  instagram: "https://www.instagram.com/aluminium_emesh/",
  siteUrl: "https://emeshalum.vercel.app",
  serviceArea: "כל הארץ",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "בית" },
  { href: "/services", label: "שירותים" },
  { href: "/gallery", label: "גלריה" },
  { href: "/about", label: "אודות" },
  { href: "/contact", label: "צור קשר" },
] as const;

export const SERVICE_PAGES = [
  {
    slug: "windows-doors",
    title: "חלונות, דלתות וויטרינות אלומיניום",
    shortTitle: "חלונות ודלתות",
    description:
      "ייצור והתקנה של חלונות אלומיניום בלגיים, חלונות הזזה, ויטרינות ענק ודלתות אלומיניום במידות מותאמות אישית.",
    keywords: "חלונות אלומיניום, דלתות אלומיניום, חלונות בלגיים, ויטרינות, פרופיל בלגי",
  },
  {
    slug: "showers-pergolas-railings",
    title: "מקלחונים, פרגולות ומעקות",
    shortTitle: "מקלחונים ופרגולות",
    description:
      "מקלחוני זכוכית מעוצבים, פרגולות אלומיניום עמידות לכל מזג אוויר ומעקות אלומיניום בטיחותיים ויפים.",
    keywords: "מקלחון, פרגולה אלומיניום, מעקות אלומיניום, סגירת מרפסת",
  },
  {
    slug: "electric-shutters",
    title: "תריסים חשמליים ומערכות הצללה",
    shortTitle: "תריסים חשמליים",
    description:
      "תריסי אור חשמליים, תריסי גלילה ורשתות נגד יתושים – משולבים באופן הרמוני עם החלונות.",
    keywords: "תריסים חשמליים, תריס חשמלי, תריס גלילה, מערכות הצללה",
  },
] as const;
