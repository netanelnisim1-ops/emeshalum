# מערכת AI לכתיבת מאמרים יומיים

מערכת אוטומטית שמייצרת מאמר SEO חדש בעברית **כל יום** באמצעות Claude API ומפרסמת אותו לאתר.

## איך זה עובד

```
GitHub Actions (יומי 06:00)
       ↓
  בוחר מילת מפתח הבאה מהרשימה
       ↓
  שולח ל-Claude עם prompt מפורט
       ↓
  Claude מחזיר מאמר 2000+ מילים בעברית
       ↓
  שומר כקובץ .md ב-content/blog/
       ↓
  Commit + Push לגיט
       ↓
  Vercel בונה אוטומטית
       ↓
  מאמר חי באתר תוך 2 דקות
```

## מבנה הקבצים

```
emeshalum/
├── content/
│   ├── keywords/
│   │   └── keywords.json          # 240+ מילות מפתח
│   ├── blog/                      # כל המאמרים שנוצרו
│   │   ├── eyak-lbchwr-chlwn-aluminium.md
│   │   └── ...
│   └── blog-state.json            # אילו מילות מפתח כבר נוצלו
├── scripts/
│   ├── generate-article.mjs       # הסקריפט הראשי
│   └── lib/
│       ├── state.mjs              # ניהול מצב
│       └── slug.mjs               # יצירת slug
└── .github/workflows/
    └── daily-article.yml          # הגדרת cron יומי
```

## התקנה ראשונית (חד-פעמית)

### 1. הגדרת ANTHROPIC_API_KEY כ-GitHub Secret

1. כניסה ל-https://console.anthropic.com/settings/keys
2. יצירת API Key חדש בשם `emeshalum-blog`
3. העתקת המפתח (`sk-ant-xxxxx`)
4. כניסה ל-https://github.com/netanelnisim1-ops/emeshalum/settings/secrets/actions
5. **New repository secret**
   - Name: `ANTHROPIC_API_KEY`
   - Value: `sk-ant-xxxxx`
   - Save

### 2. בדיקה ידנית ראשונה

לפני שמפעילים את ה-cron, תעשו הרצה ידנית כדי לוודא שהכל עובד:

1. כניסה ל-https://github.com/netanelnisim1-ops/emeshalum/actions
2. בחירת workflow "Daily Blog Article"
3. **Run workflow** → Run workflow (השאירו ברירות מחדל)
4. ממתינים 2-5 דקות

אם הכל ירוק → מאמר נוצר ונדחף. אם אדום → קוראים את הלוג ומתקנים.

## הרצה ידנית מהמחשב המקומי (לבדיקות)

```bash
# התקנת תלויות (פעם אחת)
npm install

# הרצה - בוחר מילת מפתח אוטומטית
ANTHROPIC_API_KEY=sk-ant-xxxxx node scripts/generate-article.mjs

# הרצה עם מילת מפתח ספציפית
ANTHROPIC_API_KEY=sk-ant-xxxxx node scripts/generate-article.mjs --keyword "כמה עולה חלון אלומיניום"

# Dry-run (לא שומר קובץ, רק מציג בקונסולה)
ANTHROPIC_API_KEY=sk-ant-xxxxx node scripts/generate-article.mjs --dry-run

# שינוי מודל
ANTHROPIC_API_KEY=sk-ant-xxxxx node scripts/generate-article.mjs --model claude-opus-4-7
```

## עלות חודשית משוערת

עם **claude-sonnet-4-6** (ברירת מחדל) ו-1 מאמר ביום:

| | ערך |
|---|------|
| Input tokens/מאמר | ~2,000 |
| Output tokens/מאמר | ~5,000 |
| עלות/מאמר | ~$0.10 |
| **עלות חודשית (30 מאמרים)** | **~$3** (₪10) |
| עלות שנתית | ~$36 (₪120) |

עם **claude-opus-4-7** (איכותי יותר, יקר יותר):
- עלות/מאמר: ~$0.40
- עלות חודשית: ~$12 (₪40)

**Recommendation**: התחילי עם Sonnet. אם איכות המאמרים לא מספקת – שדרגי ל-Opus.

## ניטור ובקרה

### לראות את כל המאמרים שנוצרו
```bash
ls -la content/blog/
```

### לראות אילו מילות מפתח כבר נוצלו
```bash
cat content/blog-state.json | jq '.usedKeywords'
```

### לבטל מאמר שנוצר (לא לפרסם)
1. מחיקת הקובץ: `rm content/blog/[slug].md`
2. הסרת המפתח מ-`content/blog-state.json` (אם רוצים שיווצר מאמר אחר על אותה מילת מפתח)
3. `git add . && git commit -m "remove draft article" && git push`

### עריכת מאמר לפני פרסום (אופציה)
המאמרים מתפרסמים מיד אחרי שהם נוצרים. אם רוצים workflow של "ערוך לפני פרסום":
- צריך לשנות את `daily-article.yml` כך שיפתח PR במקום לדחוף לread main
- לאחר אישור ה-PR → המאמר עולה לאוויר

## בעיות נפוצות

### "ANTHROPIC_API_KEY חסר"
- וודאי שהוספת את ה-secret ב-GitHub
- שם המשתנה חייב להיות בדיוק `ANTHROPIC_API_KEY`

### "All keywords exhausted"
- כל 240+ מילות המפתח נוצלו! 🎉
- הוסיפי עוד מילים ל-`content/keywords/keywords.json`
- או הריצי את הסקריפט עם `--keyword` ספציפי

### המאמרים נראים שטחיים/AI-ish
- שדרגי ל-`claude-opus-4-7` (יקר יותר אבל איכותי בהרבה)
- ערכי את ה-system prompt ב-`scripts/generate-article.mjs`
- הוסיפי הנחיות ספציפיות בקטגוריה ב-`getCategoryGuidance()`

### Vercel לא בונה את האתר אחרי commit חדש
- וודאי שהפרויקט ב-Vercel מחובר ל-branch `main`
- וודאי ש-Auto Deploy מופעל ב-Vercel Settings

## תוספות עתידיות

- [ ] תמונות אוטומטיות (DALL-E / Stable Diffusion על Claude API)
- [ ] טווח אנושי לפני פרסום (PR workflow)
- [ ] טריגר חיצוני לסטטיסטיקות Google Search Console
- [ ] התאמת נושאים לפי דירוג Google הקיים
- [ ] שיתוף אוטומטי לפייסבוק/אינסטגרם

## הערות אבטחה

- **ה-API key לא נמצא בקוד** – רק ב-GitHub Secrets המוצפן
- **GitHub Actions לא יכול להדפיס את ה-secret** בלוג (gh מפוץ אוטומטית)
- **rate limit של Anthropic** מגן מפני שימוש מוגזם בטעות
