import { NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  getAdminCookieSecure,
} from "@/lib/admin-auth";

export async function POST() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_SESSION_COOKIE, "", {
    httpOnly: true,
    secure: getAdminCookieSecure(),
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
  return res;
}
