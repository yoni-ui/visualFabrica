"use client";

import Image from "next/image";
import { useState } from "react";

export function StoryEditorClient() {
  const [title, setTitle] = useState("The Birr Collapse");

  return (
    <div className="flex w-full flex-col lg:flex-row">
      <div className="mx-auto flex max-w-4xl flex-1 flex-col overflow-y-auto p-8 lg:p-12">
        <div className="mb-12 flex items-start gap-8">
          <div className="mt-4 h-32 w-1.5 shrink-0 rounded-full bg-primary-container" />
          <div className="flex-1">
            <label className="mb-3 block font-label text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              Lead Narrative
            </label>
            <input
              className="w-full border-none bg-transparent p-0 font-headline text-5xl font-extrabold tracking-tighter text-on-surface placeholder:text-surface-dim focus:ring-0 md:text-7xl"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title..."
            />
            <p className="mt-6 font-body text-xl italic text-on-surface-variant">
              A visual investigation into emerging market liquidity.
            </p>
          </div>
        </div>

        <div className="editorial-shadow mb-12 overflow-hidden rounded-lg bg-surface-container-lowest">
          <div className="flex items-center gap-4 border-b border-outline-variant/10 bg-surface-container-low px-6 py-3">
            {["format_bold", "format_italic", "format_quote"].map((icon) => (
              <button
                key={icon}
                type="button"
                className="rounded p-1.5 hover:bg-surface-container-highest"
              >
                <span className="material-symbols-outlined text-xl">{icon}</span>
              </button>
            ))}
            <div className="mx-1 h-6 w-px bg-outline-variant/30" />
            {["format_list_bulleted", "link"].map((icon) => (
              <button
                key={icon}
                type="button"
                className="rounded p-1.5 hover:bg-surface-container-highest"
              >
                <span className="material-symbols-outlined text-xl">{icon}</span>
              </button>
            ))}
            <div className="mx-1 h-6 w-px bg-outline-variant/30" />
            <button
              type="button"
              className="flex items-center gap-2 rounded px-3 py-1 font-label text-xs font-bold hover:bg-surface-container-highest"
            >
              Newsreader Serif
              <span className="material-symbols-outlined text-sm">
                expand_more
              </span>
            </button>
          </div>
          <div className="min-h-[400px] p-10 focus:outline-none">
            <p className="mb-6 font-body text-2xl leading-relaxed text-on-surface">
              The recent volatility in the Ethiopian Birr has sent shockwaves
              through the Horn of Africa’s financial ecosystem. What began as a
              controlled float quickly spiraled into a systemic devaluation that
              has challenged decades of monetary orthodoxy.
            </p>
            <p className="mb-6 font-body text-2xl leading-relaxed text-on-surface">
              To understand the collapse, one must look past the simple exchange
              rate charts and into the underlying mechanics of sovereign debt and
              hard currency reserves.
            </p>
            <div className="my-10 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-outline-variant bg-surface-container-low/50 p-8 text-on-surface-variant">
              <span className="material-symbols-outlined mb-4 text-4xl">
                add_chart
              </span>
              <p className="font-label font-medium">
                Click to insert Data Visualization Block
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12 rounded-xl bg-surface-container-low p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h3 className="font-headline text-xl font-bold tracking-tight">
                Data Visualization Block
              </h3>
              <p className="font-label text-sm text-on-surface-variant">
                Interactive chart configuration
              </p>
            </div>
            <div className="flex gap-2 rounded-lg bg-surface-container-highest p-1">
              <button
                type="button"
                className="flex items-center gap-2 rounded bg-primary px-4 py-2 font-bold text-xs text-on-primary"
              >
                <span className="material-symbols-outlined text-sm">
                  show_chart
                </span>
                Line Chart
              </button>
              <button
                type="button"
                className="flex items-center gap-2 rounded px-4 py-2 font-bold text-xs text-on-surface-variant transition-all hover:bg-surface"
              >
                <span className="material-symbols-outlined text-sm">
                  bar_chart
                </span>
                Bar Chart
              </button>
              <button
                type="button"
                className="flex items-center gap-2 rounded px-4 py-2 font-bold text-xs text-on-surface-variant transition-all hover:bg-surface"
              >
                <span className="material-symbols-outlined text-sm">public</span>
                Map
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="rounded-lg border border-outline-variant/15 bg-surface-container-lowest p-6">
                <label className="mb-4 block text-[10px] font-black uppercase tracking-widest text-on-surface-variant">
                  Source Data
                </label>
                <div className="group flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-outline-variant/30 p-10 transition-all hover:border-primary/40">
                  <span className="material-symbols-outlined mb-3 text-3xl text-outline transition-colors group-hover:text-primary">
                    cloud_upload
                  </span>
                  <p className="text-xs font-bold text-on-surface-variant">
                    Upload CSV or JSON
                  </p>
                  <p className="mt-1 text-[10px] text-outline">
                    Max file size: 10MB
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex h-full min-h-[200px] flex-col rounded-lg border border-outline-variant/15 bg-surface-container-lowest p-6">
                <label className="mb-4 block text-[10px] font-black uppercase tracking-widest text-on-surface-variant">
                  Preview Analysis
                </label>
                <div className="flex flex-1 flex-col items-center justify-center opacity-40">
                  <div className="relative mb-4 h-32 w-full">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBykIoEK4ExuPiKC-e9aCQUL4R2uuG6BeuFmqcLyJYPiavlW2e8l6tJ0Fs-wlKOAtLqQT2wEfXLnPAKAhxcby80hELAD_bhuuhjyhKtbY8hEvIxOOYlJqXSLbNUiKtiU6NDWwpNcUWPkfNuPP1ncewMSzo6U992R3sI56yORtKuhUubo6QM4lJj_rclmnUFIR5r4QPhmjyCVwz4JiABo2lFz6kfQMr03Ql3AIWh9WYLLBbMgAbiPLKawMknl6HxbdfqzJ1vQfXylA"
                      alt=""
                      fill
                      className="object-contain grayscale"
                    />
                  </div>
                  <p className="font-body text-xs italic">
                    Connect data to generate preview
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <aside className="no-scrollbar w-full shrink-0 overflow-y-auto border-t border-outline-variant/10 bg-surface-container-low p-8 font-label lg:h-[calc(100vh-8rem)] lg:w-80 lg:border-l lg:border-t-0 lg:sticky lg:top-24">
        <div className="space-y-10">
          <section>
            <div className="mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-xl text-primary">
                search_check
              </span>
              <h4 className="font-headline text-sm font-bold tracking-tight">
                SEO Metadata
              </h4>
            </div>
            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-[10px] font-bold uppercase text-on-surface-variant">
                  Slug
                </label>
                <input
                  className="w-full rounded border-none bg-surface-container-lowest p-3 text-xs focus:ring-1 focus:ring-primary/20"
                  defaultValue="the-birr-collapse-2024"
                />
              </div>
              <div>
                <label className="mb-2 block text-[10px] font-bold uppercase text-on-surface-variant">
                  Meta Description
                </label>
                <textarea
                  className="h-24 w-full resize-none rounded border-none bg-surface-container-lowest p-3 text-xs leading-relaxed focus:ring-1 focus:ring-primary/20"
                  defaultValue="An in-depth data study of the Ethiopian Birr's recent market fluctuations and economic implications for the regional trade block."
                />
              </div>
            </div>
          </section>
          <section>
            <div className="mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-xl text-primary">
                label
              </span>
              <h4 className="font-headline text-sm font-bold tracking-tight">
                Taxonomy &amp; Tags
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {["ECONOMY", "CURRENCY", "AFRICA"].map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 rounded-full bg-secondary-container px-3 py-1 font-label text-[10px] font-bold text-on-secondary-container"
                >
                  {tag}
                  <span className="material-symbols-outlined cursor-pointer text-[10px]">
                    close
                  </span>
                </span>
              ))}
              <button
                type="button"
                className="rounded-full border border-outline-variant/30 px-3 py-1 font-label text-[10px] font-bold transition-colors hover:bg-surface-container-highest"
              >
                + ADD TAG
              </button>
            </div>
          </section>
          <section className="rounded-xl bg-surface-container-lowest p-6">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-headline text-xs font-bold">Download PDF</span>
              <div className="relative inline-flex cursor-pointer items-center">
                <input type="checkbox" className="peer sr-only" defaultChecked />
                <div className="peer relative h-5 w-9 rounded-full bg-outline-variant/30 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all peer-checked:bg-primary peer-checked:after:translate-x-full" />
              </div>
            </div>
            <p className="text-[10px] leading-tight text-on-surface-variant">
              Enable full-quality infographic exports for registered subscribers.
            </p>
          </section>
          <div className="border-t border-outline-variant/10 pt-6">
            <div className="mb-2 flex justify-between text-xs">
              <span className="font-medium text-on-surface-variant">
                Word Count
              </span>
              <span className="font-bold">1,248</span>
            </div>
            <div className="mb-2 flex justify-between text-xs">
              <span className="font-medium text-on-surface-variant">
                Read Time
              </span>
              <span className="font-bold">6 min</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="font-medium text-on-surface-variant">
                Visual Assets
              </span>
              <span className="font-bold text-primary">4 active</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
