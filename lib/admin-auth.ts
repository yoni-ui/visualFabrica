import { SignJWT, jwtVerify } from "jose";

export const ADMIN_SESSION_COOKIE = "vf_admin_session";

/** Strip whitespace and optional wrapping quotes from env values (Vercel/UI paste issues). */
function normalizeEnvValue(value: string | undefined): string {
  if (value === undefined) return "";
  let s = value.trim();
  if (
    (s.startsWith('"') && s.endsWith('"')) ||
    (s.startsWith("'") && s.endsWith("'"))
  ) {
    s = s.slice(1, -1).trim();
  }
  return s;
}

function getJwtSecret(): Uint8Array {
  const fromEnv = normalizeEnvValue(process.env.ADMIN_AUTH_SECRET);
  const raw =
    fromEnv ||
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
  const p = normalizeEnvValue(process.env.ADMIN_PASSWORD);
  if (p.length > 0) return p;
  if (process.env.NODE_ENV === "production") {
    throw new Error("Set ADMIN_PASSWORD in production.");
  }
  return "admin";
}

/**
 * Session cookie `Secure` flag. Default: true in production (HTTPS).
 * Set ADMIN_COOKIE_SECURE=false if you terminate TLS elsewhere and the app sees HTTP.
 */
export function getAdminCookieSecure(): boolean {
  const v = normalizeEnvValue(process.env.ADMIN_COOKIE_SECURE).toLowerCase();
  if (v === "0" || v === "false" || v === "no") return false;
  if (v === "1" || v === "true" || v === "yes") return true;
  return process.env.NODE_ENV === "production";
}
