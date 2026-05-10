"use client";

import { useActionState } from "react";
import { CircleCheck, CircleAlert, LoaderCircle, ArrowLeft } from "lucide-react";
import {
  submitContactForm,
  type ContactFormState,
} from "@/app/actions/contact";

const initialState: ContactFormState = { status: "idle", message: "" };

export default function ContactForm({
  variant = "dark",
}: {
  variant?: "dark" | "light";
}) {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState,
  );

  const isDark = variant === "dark";

  const labelCls = isDark
    ? "text-white/85 font-semibold text-sm mb-2 block"
    : "text-brand-navy-deep font-semibold text-sm mb-2 block";

  const inputCls = isDark
    ? "w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:bg-white/15 transition-all"
    : "w-full bg-brand-cream border border-brand-stone text-brand-navy-deep placeholder-brand-mist rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all";

  return (
    <form action={formAction} className="space-y-5">
      <input
        type="text"
        name="website"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden
        style={{ position: "absolute", left: "-9999px", width: 0, height: 0 }}
      />

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelCls}>
            שם מלא *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="שם פרטי ומשפחה"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>
            טלפון *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            placeholder="050-0000000"
            dir="ltr"
            className={`${inputCls} text-right`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="city" className={labelCls}>
          עיר
        </label>
        <input
          id="city"
          name="city"
          type="text"
          autoComplete="address-level2"
          placeholder="לדוגמה: תל אביב"
          className={inputCls}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelCls}>
          ספרו לנו על הפרויקט (לא חובה)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="לדוגמה: שיפוץ דירת 4 חדרים, מעוניין בחלונות בלגיים..."
          className={inputCls}
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full inline-flex items-center justify-center gap-3 bg-brand-orange hover:bg-brand-orange-deep disabled:bg-brand-orange/60 disabled:cursor-not-allowed text-white font-bold px-8 py-4 rounded-xl text-base md:text-lg shadow-lg shadow-brand-orange/30 transition-all"
      >
        {pending ? (
          <>
            <LoaderCircle className="w-5 h-5 animate-spin" />
            שולח...
          </>
        ) : (
          <>
            קבלו הצעת מחיר ישירות מהיצרן
            <ArrowLeft className="w-5 h-5" />
          </>
        )}
      </button>

      {state.status === "success" && (
        <div className="flex items-start gap-3 bg-green-500/10 border border-green-500/30 rounded-lg p-4">
          <CircleCheck className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
          <p className={isDark ? "text-green-300" : "text-green-700"}>
            {state.message}
          </p>
        </div>
      )}

      {state.status === "error" && (
        <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 rounded-lg p-4">
          <CircleAlert className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <p className={isDark ? "text-red-300" : "text-red-700"}>
            {state.message}
          </p>
        </div>
      )}

      <p
        className={
          isDark
            ? "text-white/50 text-xs leading-relaxed"
            : "text-brand-mist text-xs leading-relaxed"
        }
      >
        בלחיצה על שליחה אתם מסכימים שניצור איתכם קשר בנושא בקשתכם. הפרטים שלכם
        שמורים אצלנו ולא מועברים לצדדים שלישיים.
      </p>
    </form>
  );
}
