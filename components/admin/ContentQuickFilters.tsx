"use client";

import { useAdminUIStore } from "@/stores/admin-ui-store";

const FILTERS = [
  { id: "all", label: "All Stories" },
  { id: "economy", label: "Economy" },
  { id: "tech", label: "Tech" },
  { id: "digital", label: "Digital Frontier" },
  { id: "infrastructure", label: "Infrastructure" },
];

export function ContentQuickFilters() {
  const contentQuickFilter = useAdminUIStore((s) => s.contentQuickFilter);
  const setContentQuickFilter = useAdminUIStore((s) => s.setContentQuickFilter);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="mr-2 font-label text-xs font-bold uppercase text-on-surface-variant">
        Quick Filters:
      </span>
      {FILTERS.map((f) => {
        const active = contentQuickFilter === f.id;
        return (
          <button
            key={f.id}
            type="button"
            onClick={() => setContentQuickFilter(f.id)}
            className={
              active
                ? "rounded-full bg-primary px-4 py-1.5 font-label text-xs font-medium text-on-primary"
                : "rounded-full bg-surface-container-highest px-4 py-1.5 font-label text-xs font-medium text-on-surface-variant transition-colors hover:bg-surface-container-high"
            }
          >
            {f.label}
          </button>
        );
      })}
    </div>
  );
}
