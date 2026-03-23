"use client";

import { usePathname } from "next/navigation";
import { useAdminUIStore } from "@/stores/admin-ui-store";

export function AdminTopBar() {
  const pathname = usePathname();
  const topBarSearch = useAdminUIStore((s) => s.topBarSearch);
  const setTopBarSearch = useAdminUIStore((s) => s.setTopBarSearch);

  const isEditor = pathname.startsWith("/admin/editor");
  const searchPlaceholder = pathname.startsWith("/admin/media")
    ? "Search the library..."
    : isEditor
      ? "Search stories..."
      : "Search stories, authors, or tags...";

  const showUpload = pathname.startsWith("/admin/media");

  return (
    <header className="fixed right-0 top-0 z-40 ml-64 flex h-16 w-[calc(100%-16rem)] items-center justify-between border-b border-slate-200/15 bg-white/80 px-8 shadow-sm backdrop-blur-xl dark:border-slate-800/15 dark:bg-slate-950/80 dark:shadow-none">
      <div className="flex flex-1 items-center gap-6">
        <div className="relative w-full max-w-md">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-400">
            search
          </span>
          <input
            type="search"
            value={topBarSearch}
            onChange={(e) => setTopBarSearch(e.target.value)}
            className="w-full rounded-lg border-none bg-surface-container-low py-2 pl-10 pr-4 font-label text-sm outline-none ring-blue-500/20 transition-all focus:ring-2"
            placeholder={searchPlaceholder}
            aria-label="Search"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        {isEditor ? (
          <>
            <div className="flex items-center gap-2 rounded-full bg-surface-container px-3 py-1">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                Live Draft
              </span>
            </div>
            <button
              type="button"
              className="rounded bg-primary px-6 py-2 font-label text-sm font-bold tracking-tight text-on-primary transition-all hover:opacity-90 active:scale-95"
            >
              Publish
            </button>
            <div className="mx-2 h-8 w-px bg-slate-200" />
          </>
        ) : null}
        {showUpload ? (
          <>
            <button
              type="button"
              className="rounded bg-primary px-5 py-2 font-headline text-sm font-bold tracking-tight text-on-primary transition-all hover:opacity-90 active:scale-95"
            >
              Upload New Media
            </button>
            <div className="mx-2 h-8 w-px bg-slate-200" />
          </>
        ) : null}
        <button
          type="button"
          className="p-2 text-slate-500 outline-none transition-all hover:text-blue-700 focus:ring-2 focus:ring-blue-500/20"
          aria-label="Notifications"
        >
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button
          type="button"
          className="p-2 text-slate-500 outline-none transition-all hover:text-blue-700 focus:ring-2 focus:ring-blue-500/20"
          aria-label="Settings"
        >
          <span className="material-symbols-outlined">settings</span>
        </button>
      </div>
    </header>
  );
}
