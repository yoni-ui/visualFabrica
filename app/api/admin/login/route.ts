import { timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  createAdminSessionToken,
  getAdminCookieSecure,
  getAdminPassword,
} from "@/lib/admin-auth";

export async function POST(request: Request) {
  let body: { password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  let expected: string;
  try {
    expected = getAdminPassword();
  } catch {
    return NextResponse.json(
      {
        error:
          "Admin sign-in is not configured. Set ADMIN_PASSWORD in your hosting environment.",
      },
      { status: 503 },
    );
  }

  const submitted = String(body.password ?? "").trim();
  const a = Buffer.from(submitted, "utf8");
  const b = Buffer.from(expected, "utf8");
  const ok =
    submitted.length > 0 &&
    a.length === b.length &&
    timingSafeEqual(a, b);

  if (!ok) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  let token: string;
  try {
    token = await createAdminSessionToken();
  } catch {
    return NextResponse.json(
      {
        error:
          "JWT secret missing or too short. Set ADMIN_AUTH_SECRET (16+ characters) in production.",
      },
      { status: 503 },
    );
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_SESSION_COOKIE, token, {
    httpOnly: true,
    secure: getAdminCookieSecure(),
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return res;
}
