import { Phone, Mail, MapPin, Clock, Calendar } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-14 md:py-20 bg-brand-navy-deep text-white overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(14,31,46,0.96) 0%, rgba(22,49,74,0.92) 100%)",
        }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-brand-orange-light font-bold text-sm md:text-base uppercase tracking-widest mb-3">
              דברו איתנו
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-balance mb-6">
              מוכנים להפוך את התוכניות
              <br />
              <span className="text-brand-orange-light">למציאות?</span>
            </h2>
            <p className="text-white/85 text-lg leading-relaxed text-pretty mb-10">
              אל תסגרו את עבודות האלומיניום שלכם לפני שדיברתם איתנו. השאירו
              פרטים, והצוות המקצועי שלנו (ולא נציג מכירות חיצוני) יחזור אליכם
              עם ייעוץ ראשוני ללא התחייבות.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-brand-orange-light" />
                </div>
                <div>
                  <div className="text-white/60 text-sm">טלפון</div>
                  <div
                    dir="ltr"
                    className="text-xl font-bold select-text"
                  >
                    {BUSINESS.phoneDisplay}
                  </div>
                </div>
              </div>

              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                  <Mail className="w-5 h-5 text-brand-orange-light group-hover:text-white" />
                </div>
                <div>
                  <div className="text-white/60 text-sm">אימייל</div>
                  <div
                    dir="ltr"
                    className="text-base md:text-lg font-bold group-hover:text-brand-orange-light transition-colors break-all"
                  >
                    {BUSINESS.email}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-brand-orange-light" />
                </div>
                <div>
                  <div className="text-white/60 text-sm">אזור פעילות</div>
                  <div className="text-base md:text-lg font-bold">
                    {BUSINESS.serviceArea}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-brand-orange-light" />
                </div>
                <div>
                  <div className="text-white/60 text-sm">זמן תגובה</div>
                  <div className="text-base md:text-lg font-bold">
                    נחזור אליכם עד 24 שעות
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-brand-orange-light" />
                </div>
                <div>
                  <div className="text-white/60 text-sm">שעות פעילות שירות לקוחות</div>
                  <ul className="text-base md:text-lg font-bold space-y-1 mt-1">
                    <li>א'-ה': 9:00-17:00</li>
                    <li>יום ו': 9:00-12:00</li>
                    <li>שבת: סגור</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl">
            <h3 className="text-2xl font-bold mb-2">השאירו פרטים</h3>
            <p className="text-white/70 mb-8">
              נחזור אליכם עם ייעוץ ראשוני, ללא התחייבות.
            </p>
            <ContactForm variant="dark" />
          </div>
        </div>
      </div>
    </section>
  );
}
