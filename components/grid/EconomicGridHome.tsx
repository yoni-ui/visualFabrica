import type { NewsStory } from "@/lib/content/story-types";
import { EconomicGridFooter } from "./EconomicGridFooter";
import { EconomicGridHero } from "./EconomicGridHero";
import { EconomicGridNav } from "./EconomicGridNav";
import { EconomicGridStoriesGrid } from "./EconomicGridStoriesGrid";
import { StoriesPagination } from "./StoriesPagination";

type Props = {
  stories: NewsStory[];
  page: number;
  totalPages: number;
};

/**
 * Expanded economic grid home: hero + published stories from the shared store (admin-synced).
 */
export function EconomicGridHome({ stories, page, totalPages }: Props) {
  return (
    <>
      <EconomicGridNav />
      <main className="mx-auto max-w-[1920px]">
        <EconomicGridHero />
        <EconomicGridStoriesGrid stories={stories} />
        <StoriesPagination page={page} totalPages={totalPages} basePath="/" />
      </main>
      <EconomicGridFooter />
    </>
  );
}
