"use server";

import { Resend } from "resend";
import { BUSINESS } from "@/lib/business";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const TARGET_EMAIL = process.env.LEAD_TARGET_EMAIL || "allonioffice@gmail.com";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const city = String(formData.get("city") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const honeypot = String(formData.get("website") || "").trim();

  if (honeypot) {
    return { status: "success", message: "תודה! נחזור אליכם בקרוב." };
  }

  if (!name || name.length < 2) {
    return { status: "error", message: "שם חייב להכיל לפחות 2 תווים" };
  }
  const phoneDigits = phone.replace(/\D/g, "");
  if (phoneDigits.length < 9 || phoneDigits.length > 12) {
    return { status: "error", message: "מספר טלפון לא תקין" };
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn(
      "[contact] RESEND_API_KEY not set — logging lead instead of emailing",
      { name, phone, city, message },
    );
    return {
      status: "success",
      message: "תודה! נחזור אליכם בהקדם.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: `א.מ.ש אלומיניום אתר <${FROM_EMAIL}>`,
      to: [TARGET_EMAIL],
      replyTo: undefined,
      subject: `🔔 ליד חדש מהאתר – ${name}${city ? ` (${city})` : ""}`,
      html: buildEmailHtml({ name, phone, city, message }),
    });

    return {
      status: "success",
      message: "תודה! קיבלנו את הפנייה ונחזור אליכם בהקדם.",
    };
  } catch (error) {
    console.error("[contact] failed to send", error);
    return {
      status: "error",
      message: "אירעה תקלה. אנא חייגו ישירות 055-992-2592",
    };
  }
}

function buildEmailHtml({
  name,
  phone,
  city,
  message,
}: {
  name: string;
  phone: string;
  city: string;
  message: string;
}) {
  return `
    <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fafaf7; padding: 24px;">
      <div style="background: #16314a; color: white; padding: 24px; border-radius: 12px 12px 0 0;">
        <h1 style="margin: 0; font-size: 24px;">🔔 ליד חדש מהאתר</h1>
        <p style="margin: 6px 0 0; opacity: 0.85;">${BUSINESS.name}</p>
      </div>
      <div style="background: white; padding: 28px; border-radius: 0 0 12px 12px; border: 1px solid #f1efeb;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1efeb; width: 100px; color: #6b7280;">שם:</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1efeb; font-weight: 600;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1efeb; color: #6b7280;">טלפון:</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1efeb; font-weight: 600;">
              <a href="tel:${escapeHtml(phone)}" style="color: #e85d1f; text-decoration: none;" dir="ltr">${escapeHtml(phone)}</a>
            </td>
          </tr>
          ${city ? `
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1efeb; color: #6b7280;">עיר:</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1efeb; font-weight: 600;">${escapeHtml(city)}</td>
          </tr>
          ` : ""}
          ${message ? `
          <tr>
            <td style="padding: 12px 0; color: #6b7280; vertical-align: top;">הודעה:</td>
            <td style="padding: 12px 0; line-height: 1.6;">${escapeHtml(message).replace(/\n/g, "<br>")}</td>
          </tr>
          ` : ""}
        </table>
        <p style="margin: 24px 0 0; padding: 14px; background: #fafaf7; border-radius: 8px; color: #6b7280; font-size: 14px;">
          התקבל מהאתר ${BUSINESS.siteUrl} בתאריך ${new Date().toLocaleString("he-IL")}
        </p>
      </div>
    </div>
  `;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
