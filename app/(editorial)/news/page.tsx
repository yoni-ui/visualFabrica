import type { Metadata } from "next";
import Link from "next/link";
import { STORIES_GRID_PAGE_SIZE } from "@/components/grid/constants";
import { EconomicGridStoriesGrid } from "@/components/grid/EconomicGridStoriesGrid";
import { StoriesPagination } from "@/components/grid/StoriesPagination";
import { listPublishedPage } from "@/lib/content/stories-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "News archive",
  description: "VisualFabrica editorial stories and data narratives.",
};

export default async function NewsArchivePage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const sp = await searchParams;
  const page = Math.max(1, parseInt(sp.page || "1", 10) || 1);
  const { items, page: current, totalPages } = await listPublishedPage(
    page,
    STORIES_GRID_PAGE_SIZE,
  );

  return (
    <main className="mx-auto max-w-[1920px] px-6 pb-16 pt-10 md:px-10">
      <header className="mb-12 max-w-3xl">
        <p className="mb-2 font-label text-[10px] font-bold uppercase tracking-[0.25em] text-on-surface-variant">
          Archive
        </p>
        <h1 className="font-headline text-4xl font-black tracking-tighter text-on-surface md:text-5xl">
          All stories
        </h1>
        <p className="mt-4 font-body text-lg italic text-on-surface-variant">
          Published data narratives and editorial insights. New pieces appear
          here when you publish from the admin dashboard.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block font-label text-xs font-bold uppercase tracking-widest text-primary underline-offset-4 hover:underline"
          prefetch={false}
        >
          ← Back to home
        </Link>
      </header>
      <EconomicGridStoriesGrid stories={items} />
      <StoriesPagination
        page={current}
        totalPages={totalPages}
        basePath="/news"
      />
    </main>
  );
}
