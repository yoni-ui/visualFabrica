"use client";

import { useAdminUIStore } from "@/stores/admin-ui-store";

const TABS = [
  { id: "all", label: "All" },
  { id: "charts", label: "Charts" },
  { id: "maps", label: "Maps" },
  { id: "images", label: "Images" },
  { id: "icons", label: "Icons" },
];

export function MediaFilterBar() {
  const mediaAssetFilter = useAdminUIStore((s) => s.mediaAssetFilter);
  const setMediaAssetFilter = useAdminUIStore((s) => s.setMediaAssetFilter);

  return (
    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
      <div className="flex items-center gap-2 rounded-lg bg-surface-container-low p-1">
        {TABS.map((t) => {
          const active = mediaAssetFilter === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setMediaAssetFilter(t.id)}
              className={
                active
                  ? "rounded px-6 py-2 font-label text-sm font-semibold text-on-surface shadow-sm transition-all bg-surface-container-lowest"
                  : "rounded px-6 py-2 font-label text-sm font-medium text-on-surface-variant transition-all hover:bg-surface-container-high"
              }
            >
              {t.label}
            </button>
          );
        })}
      </div>
      <div className="flex items-center gap-3">
        <span className="font-label text-xs font-medium text-on-surface-variant">
          Sort by:
        </span>
        <button
          type="button"
          className="flex items-center gap-2 font-label text-sm font-bold text-on-surface hover:text-primary"
        >
          Recently Added
          <span className="material-symbols-outlined text-sm">
            keyboard_arrow_down
          </span>
        </button>
      </div>
    </div>
  );
}
