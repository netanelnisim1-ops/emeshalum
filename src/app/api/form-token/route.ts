import { NextResponse } from "next/server";
import { issueFormToken } from "@/lib/form-token";

export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json(issueFormToken(), {
    headers: { "Cache-Control": "no-store" },
  });
}
