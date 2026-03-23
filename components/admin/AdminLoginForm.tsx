"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function AdminLoginForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const rawFrom = searchParams.get("from");
  const redirectTo =
    rawFrom && rawFrom.startsWith("/admin") && !rawFrom.startsWith("/admin/login")
      ? rawFrom
      : "/admin/content";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPending(true);
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setPending(false);
    if (!res.ok) {
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      setError(data.error ?? "Sign-in failed");
      return;
    }
    router.push(redirectTo);
    router.refresh();
  }

  return (
    <form
      onSubmit={(e) => void onSubmit(e)}
      className="w-full max-w-md space-y-6 rounded-xl bg-surface-container-lowest p-8 shadow-[0_32px_48px_-12px_rgba(27,28,28,0.08)]"
    >
      <div className="insight-rail">
        <p className="font-label text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          VisualFabrica
        </p>
        <h1 className="mt-2 font-headline text-3xl font-extrabold tracking-tighter text-on-surface">
          Editorial Admin
        </h1>
        <p className="mt-2 font-body text-on-surface-variant">
          Sign in with the admin password. Session is stored in an httpOnly
          cookie (JWT).
        </p>
      </div>
      <div>
        <label
          htmlFor="admin-password"
          className="mb-2 block font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant"
        >
          Password
        </label>
        <input
          id="admin-password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border-none bg-surface-container-low px-4 py-3 font-label text-sm outline-none ring-primary/20 focus:ring-2"
          placeholder="••••••••"
          required
        />
      </div>
      {error ? (
        <p className="font-label text-sm text-error" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded bg-primary py-3 font-headline font-bold text-on-primary transition-all hover:opacity-90 disabled:opacity-50"
      >
        {pending ? "Signing in…" : "Sign in"}
      </button>
      {process.env.NODE_ENV !== "production" ? (
        <p className="text-center font-label text-[10px] text-on-surface-variant">
          Dev default password: <code className="text-primary">admin</code> — set{" "}
          <code className="text-primary">ADMIN_PASSWORD</code> for production.
        </p>
      ) : null}
    </form>
  );
}
