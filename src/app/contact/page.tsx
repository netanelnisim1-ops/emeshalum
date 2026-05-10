import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "צור קשר | א.מ.ש אלומיניום – ייעוץ והצעת מחיר",
  description:
    "השאירו פרטים לקבלת הצעת מחיר ישירות מיצרן האלומיניום. ייעוץ ראשוני ללא התחייבות, צוות מקצועי שלנו (לא נציג מכירות חיצוני) חוזר אליכם בתוך 24 שעות.",
  alternates: { canonical: "/contact" },
};

const whatsappUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(
  "היי, אני מתעניין בייצור והתקנת אלומיניום. אשמח לדבר.",
)}`;

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="צור קשר"
          title="דברו ישירות עם היצרן."
          subtitle="ללא נציגי מכירות, ללא תיווך. הצוות המקצועי שלנו חוזר אליכם עם ייעוץ ראשוני והצעת מחיר ראשונית – בתוך 24 שעות בימי עבודה."
          breadcrumbs={[
            { label: "בית", href: "/" },
            { label: "צור קשר" },
          ]}
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-3 gap-6 mb-14">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="group bg-brand-navy-deep text-white rounded-2xl p-7 hover:bg-brand-navy transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-orange flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <p className="text-white/60 text-sm mb-1">חייגו עכשיו</p>
                <p
                  dir="ltr"
                  className="text-2xl font-bold group-hover:text-brand-orange-light transition-colors"
                >
                  {BUSINESS.phoneDisplay}
                </p>
                <p className="text-white/60 text-sm mt-2">
                  ימים א'-ה' 8:00-18:00
                </p>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#25d366] text-white rounded-2xl p-7 hover:bg-[#1eaa53] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <p className="text-white/70 text-sm mb-1">וואטסאפ</p>
                <p className="text-2xl font-bold">שלחו הודעה</p>
                <p className="text-white/70 text-sm mt-2">
                  תגובה מהירה, 7 ימים בשבוע
                </p>
              </a>

              <a
                href={`mailto:${BUSINESS.email}`}
                className="group bg-brand-cream rounded-2xl p-7 border border-brand-stone hover:border-brand-orange transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-orange flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <p className="text-brand-mist text-sm mb-1">אימייל</p>
                <p
                  dir="ltr"
                  className="text-base md:text-lg font-bold text-brand-navy-deep group-hover:text-brand-orange transition-colors break-all"
                >
                  {BUSINESS.email}
                </p>
                <p className="text-brand-mist text-sm mt-2">
                  לפניות מפורטות ותכתובת
                </p>
              </a>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
              <div>
                <h2 className="text-brand-navy-deep text-3xl md:text-4xl font-extrabold mb-6 text-balance">
                  השאירו פרטים – נחזור אליכם.
                </h2>
                <p className="text-brand-graphite text-lg leading-relaxed mb-8">
                  מלאו את הטופס וצוות מקצועי שלנו יחזור אליכם תוך 24 שעות בימי
                  עבודה. נשמח להגיע אליכם הביתה למדידה והצעת מחיר ראשונית – ללא
                  התחייבות וללא עלות.
                </p>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-brand-orange" />
                    </div>
                    <div>
                      <p className="font-bold text-brand-navy-deep">
                        אזור פעילות
                      </p>
                      <p className="text-brand-mist">
                        שירות בכל הארץ – צפון, מרכז ודרום.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-brand-orange" />
                    </div>
                    <div>
                      <p className="font-bold text-brand-navy-deep">
                        זמני מענה
                      </p>
                      <p className="text-brand-mist">
                        ימים א'-ה' 8:00-18:00, יום ו' 8:00-13:00. תגובה לפניה
                        בתוך 24 שעות.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-brand-stone rounded-3xl p-6 md:p-10">
                <h3 className="text-2xl font-bold text-brand-navy-deep mb-6">
                  טופס יצירת קשר
                </h3>
                <ContactForm variant="light" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
