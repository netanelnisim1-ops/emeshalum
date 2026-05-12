import { NextResponse } from "next/server";

const OWNER = "netanelnisim1-ops";
const REPO = "emeshalum";
const WORKFLOW = "daily-article.yml";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const auth = request.headers.get("authorization");
  const expected = `Bearer ${process.env.CRON_SECRET}`;
  if (!process.env.CRON_SECRET || auth !== expected) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const token = process.env.GH_PAT;
  if (!token) {
    return NextResponse.json(
      { ok: false, error: "GH_PAT env var missing" },
      { status: 500 },
    );
  }

  const res = await fetch(
    `https://api.github.com/repos/${OWNER}/${REPO}/actions/workflows/${WORKFLOW}/dispatches`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      body: JSON.stringify({ ref: "main" }),
    },
  );

  if (!res.ok) {
    const text = await res.text();
    return NextResponse.json(
      { ok: false, status: res.status, error: text },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    triggeredAt: new Date().toISOString(),
    workflow: WORKFLOW,
  });
}
