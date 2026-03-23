import type { Metadata } from "next";
import Link from "next/link";
import { ContentQuickFilters } from "@/components/admin/ContentQuickFilters";
import { ContentStoriesTable } from "@/components/admin/ContentStoriesTable";

export const metadata: Metadata = {
  title: "Content",
};

export default function AdminContentPage() {
  return (
    <>
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="space-y-2">
          <p className="font-label text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Editorial Management
          </p>
          <h2 className="font-headline text-4xl font-extrabold tracking-tighter text-on-surface md:text-5xl">
            Content Repository
          </h2>
          <div className="insight-rail mt-4 max-w-2xl">
            <p className="max-w-2xl font-body text-xl italic text-on-surface-variant">
              Overseeing the narrative arc of VisualFabrica&apos;s daily insights
              and structural investigative reporting.
            </p>
          </div>
        </div>
        <Link
          href="/admin/editor"
          className="flex items-center gap-2 rounded bg-primary px-6 py-3 font-headline font-bold text-on-primary shadow-lg shadow-primary/10 transition-all hover:scale-[1.02] hover:bg-primary-container"
        >
          <span className="material-symbols-outlined text-sm">add</span>
          Create New Story
        </Link>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-4">
        <div className="flex flex-wrap items-center gap-3 md:col-span-3">
          <ContentQuickFilters />
        </div>
        <div className="flex items-center justify-between rounded-lg bg-surface-container-low p-4">
          <div>
            <p className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant">
              Live Content
            </p>
            <p className="font-headline text-2xl font-black tracking-tighter text-primary">
              1,284
            </p>
          </div>
          <span className="material-symbols-outlined text-3xl text-primary/30">
            cloud_done
          </span>
        </div>
      </div>

      <ContentStoriesTable />

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="space-y-4 rounded-xl bg-primary-container/10 p-8">
          <span className="material-symbols-outlined text-3xl text-primary">
            trending_up
          </span>
          <h4 className="font-headline text-xl font-bold text-primary">
            Virality Score
          </h4>
          <p className="font-body leading-relaxed text-on-surface-variant">
            Stories categorized under{" "}
            <span className="font-bold italic text-primary">Economy</span> have
            seen a 42% uptick in engagement this week.
          </p>
        </div>
        <div className="space-y-4 rounded-xl bg-surface-container-lowest p-8 shadow-sm">
          <span className="material-symbols-outlined text-3xl text-tertiary">
            history_edu
          </span>
          <h4 className="font-headline text-xl font-bold text-on-surface">
            Editorial Queue
          </h4>
          <p className="font-body leading-relaxed text-on-surface-variant">
            There are 12 pending drafts awaiting final chief editor approval
            before the weekend release cycle.
          </p>
        </div>
        <div className="space-y-4 rounded-xl bg-surface-dim/40 p-8">
          <span className="material-symbols-outlined text-3xl text-on-surface-variant">
            assignment_ind
          </span>
          <h4 className="font-headline text-xl font-bold text-on-surface">
            Contributor Health
          </h4>
          <p className="font-body leading-relaxed text-on-surface-variant">
            Active contributing authors reached 45 this week, a new record for
            VisualFabrica&apos;s remote newsroom.
          </p>
        </div>
      </div>
    </>
  );
}
