"use client";

import Image from "next/image";
import { ADMIN_MEDIA } from "@/lib/admin-mock-data";
import { useAdminUIStore } from "@/stores/admin-ui-store";

function matchesTab(
  badge: string,
  filter: string,
  placeholderIcon?: boolean,
) {
  const b = badge.toLowerCase();
  if (filter === "all") return true;
  if (filter === "charts")
    return b.includes("chart") || placeholderIcon === true;
  if (filter === "maps") return b.includes("map");
  if (filter === "images") return b.includes("image") || b.includes("header");
  if (filter === "icons") return b.includes("icon");
  return true;
}

export function MediaLibraryGrid() {
  const mediaAssetFilter = useAdminUIStore((s) => s.mediaAssetFilter);
  const q = useAdminUIStore((s) => s.topBarSearch.trim().toLowerCase());

  const items = ADMIN_MEDIA.filter((m) =>
    matchesTab(m.badge, mediaAssetFilter, m.placeholderIcon),
  ).filter((m) => !q || m.title.toLowerCase().includes(q));

  return (
    <section className="grid grid-cols-1 gap-8 pb-32 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((m) => (
        <div
          key={m.id}
          className="group flex flex-col overflow-hidden rounded-lg bg-surface-container-lowest transition-all hover:shadow-[0_32px_48px_-12px_rgba(27,28,28,0.06)]"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-surface-container">
            {m.thumb ? (
              <Image
                src={m.thumb}
                alt=""
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, 25vw"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-surface-container">
                <span className="material-symbols-outlined text-6xl text-outline-variant">
                  bar_chart
                </span>
              </div>
            )}
            <div className="absolute left-4 top-4">
              <span
                className={`px-2 py-1 font-headline text-[10px] font-bold uppercase tracking-widest ${m.badgeClass}`}
              >
                {m.badge}
              </span>
            </div>
          </div>
          <div className="flex flex-1 flex-col p-5">
            <div className="mb-2 flex items-start justify-between">
              <h3 className="font-headline text-lg font-bold leading-tight transition-colors group-hover:text-primary">
                {m.title}
              </h3>
              <button
                type="button"
                className="p-1 text-outline transition-colors hover:text-on-surface"
                aria-label="More"
              >
                <span className="material-symbols-outlined">more_horiz</span>
              </button>
            </div>
            <div className="mt-auto flex items-center justify-between border-t border-outline-variant/15 pt-4">
              <span className="font-label text-xs text-on-surface-variant">
                {m.meta}
              </span>
              <span className="font-label text-xs italic text-outline">
                {m.date}
              </span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
