import type { NewsStory } from "@/lib/content/story-types";
import { denseGridTrailingFillers } from "./constants";
import { StoryCard } from "./StoryCard";

type Props = { stories: NewsStory[] };

export function EconomicGridStoriesGrid({ stories }: Props) {
  if (stories.length === 0) {
    return (
      <div className="dense-grid">
        <p className="col-span-full px-6 py-16 font-body text-secondary md:px-10">
          No published stories yet. Add one from the{" "}
          <a href="/admin/editor" className="text-primary underline-offset-4 hover:underline">
            admin editor
          </a>
          .
        </p>
      </div>
    );
  }
  const fillers = denseGridTrailingFillers(stories.length);

  return (
    <div className="dense-grid">
      {stories.map((s) => (
        <StoryCard key={s.id} story={s} />
      ))}
      {Array.from({ length: fillers }, (_, i) => (
        <div
          key={`grid-fill-${i}`}
          className="grid-item min-h-[1px] bg-white"
          aria-hidden
        />
      ))}
    </div>
  );
}
