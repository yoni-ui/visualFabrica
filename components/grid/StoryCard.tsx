import Image from "next/image";
import Link from "next/link";
import type { NewsStory } from "@/lib/content/story-types";

type Props = { story: Pick<NewsStory, "slug" | "title" | "excerpt" | "category" | "thumb"> };

export function StoryCard({ story }: Props) {
  return (
    <Link
      href={`/news/${encodeURIComponent(story.slug)}`}
      className="grid-item group block cursor-pointer text-left"
    >
      <div className="relative mb-4 aspect-video overflow-hidden bg-surface-container-low">
        <Image
          src={story.thumb}
          alt=""
          fill
          className="object-cover transition-all duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, 25vw"
        />
      </div>
      <span className="mb-2 block font-label text-[9px] font-bold uppercase tracking-widest text-secondary">
        {story.category}
      </span>
      <h3 className="mb-3 font-headline text-lg font-extrabold leading-tight transition-colors group-hover:text-primary">
        {story.title}
      </h3>
      <p className="line-clamp-2 font-body text-sm leading-relaxed text-secondary">
        {story.excerpt}
      </p>
    </Link>
  );
}
