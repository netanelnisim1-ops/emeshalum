import { Phone, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export default function StickyMobileCTA() {
  const whatsappUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(
    "היי, אני מתעניין בייצור והתקנת אלומיניום. אשמח לדבר.",
  )}`;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden">
      <div className="bg-white border-t border-brand-stone shadow-[0_-8px_24px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-2 gap-0">
          <a
            href={`tel:${BUSINESS.phone}`}
            className="flex items-center justify-center gap-2 py-3.5 bg-brand-orange text-white font-bold active:bg-brand-orange-deep"
          >
            <Phone className="w-5 h-5" strokeWidth={2.5} />
            <span>התקשרו</span>
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3.5 bg-[#25d366] text-white font-bold active:bg-[#1eaa53]"
          >
            <MessageCircle className="w-5 h-5" strokeWidth={2.5} />
            <span>וואטסאפ</span>
          </a>
        </div>
      </div>
    </div>
  );
}
