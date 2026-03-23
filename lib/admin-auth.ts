import { SignJWT, jwtVerify } from "jose";

export const ADMIN_SESSION_COOKIE = "vf_admin_session";

function getJwtSecret(): Uint8Array {
  const raw =
    process.env.ADMIN_AUTH_SECRET ??
    (process.env.NODE_ENV === "production"
      ? ""
      : "dev-only-admin-secret-min-32-chars!");
  if (!raw || raw.length < 16) {
    throw new Error(
      "Set ADMIN_AUTH_SECRET (16+ characters) in production.",
    );
  }
  return new TextEncoder().encode(raw);
}

export async function createAdminSessionToken(): Promise<string> {
  return new SignJWT({ sub: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(getJwtSecret());
}

export async function verifyAdminSessionToken(
  token: string | undefined,
): Promise<boolean> {
  if (!token) return false;
  try {
    await jwtVerify(token, getJwtSecret());
    return true;
  } catch {
    return false;
  }
}

export function getAdminPassword(): string {
  const p = process.env.ADMIN_PASSWORD;
  if (p) return p;
  if (process.env.NODE_ENV === "production") {
    throw new Error("Set ADMIN_PASSWORD in production.");
  }
  return "admin";
}
