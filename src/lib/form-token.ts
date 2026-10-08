import { createHmac, timingSafeEqual } from "node:crypto";

// Signed timestamp handed to the browser when the form mounts.
// Bots that post straight to the server action never fetch one.
const MIN_FILL_MS = 3_000;
const MAX_AGE_MS = 2 * 60 * 60 * 1000;

function secret() {
  return process.env.FORM_SECRET || process.env.RESEND_API_KEY || "emeshalum-dev";
}

function sign(ts: string) {
  return createHmac("sha256", secret()).update(ts).digest("hex");
}

export function issueFormToken() {
  const ts = String(Date.now());
  return { ts, sig: sign(ts) };
}

export function verifyFormToken(ts: string, sig: string): boolean {
  if (!/^\d{13}$/.test(ts) || !/^[0-9a-f]{64}$/.test(sig)) return false;
  const expected = Buffer.from(sign(ts), "hex");
  if (!timingSafeEqual(expected, Buffer.from(sig, "hex"))) return false;
  const age = Date.now() - Number(ts);
  return age >= MIN_FILL_MS && age <= MAX_AGE_MS;
}
