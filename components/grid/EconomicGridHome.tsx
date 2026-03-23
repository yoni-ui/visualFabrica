import { TopNav } from "@/components/TopNav";
import type { NewsStory } from "@/lib/content/story-types";
import { EconomicGridFooter } from "./EconomicGridFooter";
import { EconomicGridHero } from "./EconomicGridHero";
import { EconomicGridStoriesGrid } from "./EconomicGridStoriesGrid";
import { StoriesPagination } from "./StoriesPagination";

type Props = {
  stories: NewsStory[];
  page: number;
  totalPages: number;
  latestRail: Pick<
    NewsStory,
    "slug" | "title" | "category" | "publishedAt"
  >[];
  popularRail: Pick<
    NewsStory,
    "slug" | "title" | "category" | "publishedAt"
  >[];
};

/**
 * Expanded economic grid home: hero + published stories from the shared store (admin-synced).
 */
export function EconomicGridHome({
  stories,
  page,
  totalPages,
  latestRail,
  popularRail,
}: Props) {
  return (
    <>
      <TopNav />
      <main className="mx-auto max-w-[1920px]">
        <EconomicGridHero
          latestStories={latestRail}
          popularStories={popularRail}
        />
        <EconomicGridStoriesGrid stories={stories} />
        <StoriesPagination page={page} totalPages={totalPages} basePath="/" />
      </main>
      <EconomicGridFooter />
    </>
  );
}
