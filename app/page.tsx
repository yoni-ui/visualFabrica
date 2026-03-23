import Link from "next/link";
import { stories } from "@/lib/site";

const shortcuts = [
  { href: "/markets", label: "Markets desk", hint: "Coverage stub" },
  { href: "/tech", label: "Tech desk", hint: "Coverage stub" },
  {
    href: "/economy/birr-collapse",
    label: "Economy — Birr collapse",
    hint: "Full feature",
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-[1440px] px-6 py-16 md:px-10">
      <header className="mb-16 max-w-3xl">
        <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
          Editorial hub
        </p>
        <h1 className="mt-4 font-headline text-5xl font-extrabold tracking-tighter text-on-surface md:text-7xl">
          VisualFabrica
        </h1>
        <p className="mt-6 font-body text-xl leading-relaxed text-on-surface-variant md:text-2xl">
          Stories mapped as static routes — prefetch on hover, instant navigation,
          and the Informed Architect surface system.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-12">
        <section className="bg-surface-container-low p-8 md:p-12 lg:col-span-7">
          <h2 className="font-label text-xs font-bold uppercase tracking-widest text-primary">
            Stories
          </h2>
          <ul className="mt-8 space-y-8">
            {stories.map((s) => (
              <li key={s.href}>
                <Link href={s.href} prefetch className="group block">
                  <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                    {s.section}
                  </span>
                  <span className="mt-1 block font-headline text-2xl font-bold tracking-tight group-hover:text-primary">
                    {s.label}
                  </span>
                  {s.description ? (
                    <span className="mt-2 block font-body text-lg text-on-surface-variant">
                      {s.description}
                    </span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4 lg:col-span-5">
          <h2 className="px-1 font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
            Quick map
          </h2>
          <nav aria-label="Primary sections" className="flex flex-col gap-3">
            {shortcuts.map((x) => (
              <Link
                key={x.href}
                href={x.href}
                prefetch
                className="bg-surface-container-lowest px-6 py-6 transition-transform duration-200 hover:scale-[1.02]"
              >
                <span className="font-headline text-lg font-bold text-on-surface">
                  {x.label}
                </span>
                <span className="mt-2 block font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                  {x.hint}
                </span>
              </Link>
            ))}
          </nav>
        </section>
      </div>
    </main>
  );
}
