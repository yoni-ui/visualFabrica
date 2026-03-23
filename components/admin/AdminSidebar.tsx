"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const nav = [
  { href: "/admin/content", label: "Content", icon: "article" },
  { href: "/admin/analytics", label: "Analytics", icon: "analytics" },
  { href: "/admin/media", label: "Media", icon: "perm_media" },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-64 flex-col overflow-y-auto border-r-0 bg-slate-50 p-4 dark:bg-slate-900">
      <div className="mb-8 px-4">
        <Link
          href="/"
          className="font-headline text-xl font-bold tracking-tighter text-slate-900 dark:text-slate-100"
        >
          VisualFabrica
        </Link>
        <p className="mt-1 font-label text-xs uppercase tracking-widest text-slate-500">
          Editorial Admin
        </p>
      </div>
      <nav className="flex-grow space-y-1">
        {nav.map((item) => {
          const active =
            pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                active
                  ? "flex items-center gap-3 rounded-lg bg-blue-50 px-4 py-3 font-semibold text-blue-700 transition-colors duration-200 dark:bg-blue-900/30 dark:text-blue-300"
                  : "flex items-center gap-3 rounded-lg px-4 py-3 text-slate-600 transition-colors duration-200 hover:bg-slate-200/50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-slate-100"
              }
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="font-label text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto space-y-4 border-t border-slate-200/50 pt-6">
        <Link
          href="/admin/editor"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-label font-semibold text-on-primary transition-all hover:opacity-90"
        >
          <span className="material-symbols-outlined text-sm">add</span>
          Create New Story
        </Link>
        <div className="flex items-center gap-3 px-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-container font-headline text-sm font-bold text-primary">
            AM
          </div>
          <div className="min-w-0">
            <p className="truncate font-headline text-sm font-bold text-on-surface">
              Alex Mercer
            </p>
            <p className="font-label text-xs text-on-surface-variant">
              Chief Editor
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => void logout()}
          className="w-full rounded-lg border border-slate-200 px-4 py-2 font-label text-xs font-semibold uppercase tracking-widest text-slate-600 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
        >
          Sign out
        </button>
      </div>
    </aside>
  );
}
