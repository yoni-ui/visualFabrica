"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import type { NewsStory } from "@/lib/content/story-types";
import { useAdminUIStore } from "@/stores/admin-ui-store";

function categoryPill(style: NewsStory["categoryStyle"], label: string) {
  const map = {
    economy: "bg-tertiary/10 text-tertiary",
    digital: "bg-primary/10 text-primary",
    tech: "bg-slate-200 text-slate-700",
  } as const;
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 font-label text-[10px] font-black uppercase ${map[style]}`}
    >
      {label}
    </span>
  );
}

function matchesFilter(row: NewsStory, filter: string) {
  if (filter === "all") return true;
  if (filter === "economy") return row.categoryStyle === "economy";
  if (filter === "tech") return row.categoryStyle === "tech";
  if (filter === "digital") return row.categoryStyle === "digital";
  if (filter === "infrastructure") return false;
  return true;
}

function formatModified(iso: string) {
  const d = new Date(iso);
  return {
    date: d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
    time: d.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    }),
  };
}

type Props = { initialStories: NewsStory[] };

export function ContentStoriesTable({ initialStories }: Props) {
  const contentQuickFilter = useAdminUIStore((s) => s.contentQuickFilter);
  const q = useAdminUIStore((s) => s.topBarSearch.trim().toLowerCase());

  const rows = useMemo(
    () =>
      initialStories
        .filter((r) => matchesFilter(r, contentQuickFilter))
        .filter(
          (r) =>
            !q ||
            r.title.toLowerCase().includes(q) ||
            r.author.toLowerCase().includes(q) ||
            r.slug.toLowerCase().includes(q),
        ),
    [initialStories, contentQuickFilter, q],
  );

  return (
    <div className="overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm">
      <div className="border-b border-surface-container p-6">
        <div className="flex items-center justify-between">
          <h3 className="font-headline text-lg font-bold">Recent Stories</h3>
          <div className="flex gap-2">
            <button
              type="button"
              className="rounded p-2 text-on-surface-variant transition-colors hover:bg-surface-container"
              aria-label="Filter"
            >
              <span className="material-symbols-outlined text-xl">
                filter_list
              </span>
            </button>
            <button
              type="button"
              className="rounded p-2 text-on-surface-variant transition-colors hover:bg-surface-container"
              aria-label="Sort"
            >
              <span className="material-symbols-outlined text-xl">sort</span>
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-surface-container-low/50">
              <th className="px-8 py-4 font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                Headline &amp; Author
              </th>
              <th className="px-8 py-4 text-center font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                Category
              </th>
              <th className="px-8 py-4 text-center font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                Status
              </th>
              <th className="px-8 py-4 text-right font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                Last Modified
              </th>
              <th className="px-8 py-4" />
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-container">
            {rows.map((row) => {
              const { date, time } = formatModified(row.updatedAt);
              return (
                <tr
                  key={row.id}
                  className="group transition-colors hover:bg-surface-container-low"
                >
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded bg-surface-container">
                        <Image
                          src={row.thumb}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                      <div>
                        <Link
                          href={`/admin/editor?id=${encodeURIComponent(row.id)}`}
                          className="font-body text-xl font-bold leading-tight text-on-surface transition-colors group-hover:text-primary"
                        >
                          {row.title}
                        </Link>
                        <p className="mt-1 font-label text-xs text-on-surface-variant">
                          By{" "}
                          <span className="font-medium text-on-surface">
                            {row.author}
                          </span>
                          {" · "}
                          <span className="text-on-surface-variant/80">
                            /news/{row.slug}
                          </span>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-center">
                    {categoryPill(row.categoryStyle, row.category)}
                  </td>
                  <td className="px-8 py-6 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span
                        className={`h-2 w-2 rounded-full ${row.status === "published" ? "bg-green-500" : "bg-amber-500"}`}
                      />
                      <span className="font-label text-xs font-semibold text-on-surface">
                        {row.status === "published" ? "Published" : "Draft"}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <p className="font-label text-xs font-medium text-on-surface">
                      {date}
                    </p>
                    <p className="font-label text-[10px] uppercase text-on-surface-variant">
                      {time}
                    </p>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex items-center justify-end gap-1">
                      {row.status === "published" ? (
                        <Link
                          href={`/news/${encodeURIComponent(row.slug)}`}
                          className="rounded p-2 text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary"
                          aria-label="View live"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="material-symbols-outlined text-xl">
                            open_in_new
                          </span>
                        </Link>
                      ) : null}
                      <Link
                        href={`/admin/editor?id=${encodeURIComponent(row.id)}`}
                        className="rounded p-2 text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary"
                        aria-label="Edit"
                      >
                        <span className="material-symbols-outlined text-xl">
                          edit
                        </span>
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between border-t border-surface-container bg-surface-container-low/30 px-8 py-4">
        <p className="font-label text-xs text-on-surface-variant">
          Showing <span className="font-bold text-on-surface">{rows.length}</span>{" "}
          of {initialStories.length}{" "}
          {initialStories.length === 1 ? "story" : "stories"}
        </p>
      </div>
    </div>
  );
}
