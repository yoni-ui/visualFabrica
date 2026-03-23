import Image from "next/image";
import Link from "next/link";
import type { NewsStory } from "@/lib/content/story-types";
import { BIRR_HERO_IMG } from "./constants";

type RailStory = Pick<NewsStory, "slug" | "title" | "category" | "publishedAt">;

function formatRailDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
    }).format(new Date(iso));
  } catch {
    return "";
  }
}

function HeroStoryRail({
  label,
  kicker,
  stories,
}: {
  label: string;
  kicker: string;
  stories: RailStory[];
}) {
  return (
    <div className="grid-item flex flex-col bg-black py-6 text-white">
      <div className="slanted-label w-fit !bg-vc-green !text-xs !text-black">
        {label}
      </div>
      <ul className="mt-6 flex flex-1 flex-col gap-0 border-t border-white/20 pt-4">
        {stories.length === 0 ? (
          <li className="py-3 text-sm italic text-white/50">
            No published stories yet. Add one in the admin editor.
          </li>
        ) : (
          stories.map((s) => (
            <li
              key={s.slug}
              className="border-b border-white/10 last:border-b-0"
            >
              <Link
                href={`/news/${encodeURIComponent(s.slug)}`}
                className="group block py-3 transition-colors hover:bg-white/5"
                prefetch={false}
              >
                <span className="font-label text-[9px] font-bold uppercase tracking-widest text-vc-green">
                  {s.category}
                </span>
                <span className="mt-1 line-clamp-2 block font-headline text-sm font-bold leading-snug text-white group-hover:text-vc-green">
                  {s.title}
                </span>
                <span className="mt-1.5 font-label text-[9px] uppercase tracking-wider text-white/40">
                  {formatRailDate(s.publishedAt)}
                </span>
              </Link>
            </li>
          ))
        )}
      </ul>
      <div className="mt-4 border-t border-white/20 pt-3">
        <span className="font-label text-[10px] uppercase tracking-widest text-white/40">
          {kicker}
        </span>
      </div>
    </div>
  );
}

type Props = {
  latestStories: RailStory[];
  popularStories: RailStory[];
};

export function EconomicGridHero({ latestStories, popularStories }: Props) {
  return (
    <div className="dense-grid border-t border-[#e4e2e1]">
      <article className="grid-item group cursor-pointer border-r border-[#e4e2e1] lg:col-span-2">
        <Link href="/economy/birr-collapse" className="flex h-full flex-col" prefetch>
          <div className="relative mb-6 aspect-[16/9] overflow-hidden bg-surface-container-low">
            <Image
              src={BIRR_HERO_IMG}
              alt="Birr Collapse Chart"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 66vw"
              priority
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-8">
              <div className="text-white">
                <div className="mb-1 font-headline text-4xl font-bold">-78.4%</div>
                <div className="font-label text-xs uppercase tracking-widest opacity-80">
                  Value lost vs USD since 2015
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3 flex items-center gap-2">
            <span className="font-label text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Economy / Currency
            </span>
            <span className="font-label text-xs text-secondary">
              / Latest Analysis
            </span>
          </div>
          <h1 className="editorial-title mb-4 font-headline text-4xl text-on-surface">
            The Birr Has Lost Over 75% of Its Value Since 2015
          </h1>
          <p className="mb-auto font-body text-lg italic text-on-surface-variant">
            A decade of devaluations and the recent shift to a market-based
            exchange rate has fundamentally reshaped Ethiopia&apos;s
            macroeconomic landscape.
          </p>
        </Link>
      </article>
      <HeroStoryRail
        label="Latest"
        kicker="New from the newsroom"
        stories={latestStories}
      />
      <HeroStoryRail
        label="Popular"
        kicker="Deep reads and data features"
        stories={popularStories}
      />
    </div>
  );
}
