import type { Metadata, Viewport } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#16314a",
  colorScheme: "light",
};

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const SITE_URL = "https://emeshalum.co.il";
const BUSINESS_NAME = "א.מ.ש אלומיניום";
const BUSINESS_PHONE = "+972559922592";
const BUSINESS_PHONE_DISPLAY = "055-992-2592";
const BUSINESS_EMAIL = "allonioffice@gmail.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "א.מ.ש אלומיניום | יצרן חלונות אלומיניום מובילים בישראל",
    template: "%s | א.מ.ש אלומיניום",
  },
  description:
    "א.מ.ש אלומיניום – יצרן בלעדי של חלונות אלומיניום, פרגולות, מקלחונים ותריסים חשמליים. למעלה מ-20 שנות ניסיון, מחירי יצרן ו-5 שנות אחריות. שירות בכל הארץ.",
  keywords: [
    "חלונות אלומיניום",
    "דלתות אלומיניום",
    "מקלחון",
    "פרגולה",
    "תריסים חשמליים",
    "ויטרינות",
    "מעקות אלומיניום",
    "פרופיל בלגי",
    "יצרן אלומיניום",
    "א.מ.ש אלומיניום",
  ],
  authors: [{ name: "נתנאל ניסים" }],
  creator: "א.מ.ש אלומיניום",
  publisher: "א.מ.ש אלומיניום",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: SITE_URL,
    siteName: BUSINESS_NAME,
    title: "א.מ.ש אלומיניום | יצרן חלונות אלומיניום מובילים בישראל",
    description:
      "יצרן בלעדי של חלונות, דלתות, פרגולות ותריסים חשמליים. הכל תחת קורת גג אחת – ייצור, צביעה והתקנה. 5 שנות אחריות.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "א.מ.ש אלומיניום – מגשימים חלומות מעוצבים",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "א.מ.ש אלומיניום | יצרן חלונות אלומיניום",
    description:
      "יצרן בלעדי של חלונות, דלתות, פרגולות ותריסים חשמליים. 20+ שנות ניסיון.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: BUSINESS_NAME,
  alternateName: "Emesh Aluminum",
  description:
    "יצרן בלעדי של חלונות אלומיניום, דלתות, פרגולות, מקלחונים ותריסים חשמליים. שירות בכל הארץ עם למעלה מ-20 שנות ניסיון.",
  url: SITE_URL,
  telephone: BUSINESS_PHONE,
  email: BUSINESS_EMAIL,
  priceRange: "$$",
  areaServed: {
    "@type": "Country",
    name: "ישראל",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "IL",
  },
  founder: {
    "@type": "Person",
    name: "נתנאל ניסים",
    jobTitle: "מנכ\"ל ובעלים",
  },
  foundingDate: "2005",
  slogan: "מגשימים חלומות מעוצבים",
  sameAs: ["https://www.instagram.com/aluminium_emesh/"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "שירותי אלומיניום",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "חלונות ודלתות אלומיניום",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "חלונות בלגיים" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "חלונות הזזה" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "ויטרינות אלומיניום" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "דלתות אלומיניום" } },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "מקלחונים, פרגולות ומעקות",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "מקלחוני זכוכית" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "פרגולות אלומיניום" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "מעקות אלומיניום" } },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "תריסים חשמליים",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "תריסי אור חשמליים" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "תריסי גלילה" } },
        ],
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${assistant.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-brand-navy-deep">
        {children}
      </body>
    </html>
  );
}

export { BUSINESS_NAME, BUSINESS_PHONE, BUSINESS_PHONE_DISPLAY, BUSINESS_EMAIL, SITE_URL };
