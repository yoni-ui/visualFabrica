import Link from "next/link";

const CATEGORIES: {
  href: string;
  label: string;
  icon: string;
}[] = [
  { href: "/economy/birr-collapse", label: "Economy", icon: "account_balance" },
  { href: "/markets", label: "Markets", icon: "query_stats" },
  { href: "/tech", label: "Technology", icon: "memory" },
  { href: "/news", label: "News", icon: "breaking_news_alt_1" },
  { href: "/s/contact", label: "Contact", icon: "contact_support" },
  { href: "/s/about", label: "About", icon: "info" },
];

/**
 * Home-only horizontal topic row: light gray circles + Material icons, evenly spaced.
 */
export function HomeCategoryStrip() {
  return (
    <nav
      aria-label="Browse categories"
      className="border-b border-[#e4e2e1] bg-white"
    >
      <div className="mx-auto w-full px-4 py-5 md:px-8 lg:px-10">
        <ul className="no-scrollbar flex snap-x snap-mandatory flex-nowrap items-start justify-between gap-3 overflow-x-auto pb-1 sm:justify-evenly sm:gap-4 md:gap-6 md:overflow-visible md:pb-0">
          {CATEGORIES.map((c) => (
            <li
              key={`${c.href}-${c.label}`}
              className="snap-center shrink-0 first:pl-0 last:pr-0"
            >
              <Link
                href={c.href}
                prefetch={c.href.startsWith("/")}
                className="group flex w-[4.25rem] flex-col items-center gap-2.5 sm:w-[4.75rem] md:w-auto md:min-w-[5.5rem]"
              >
                <span
                  className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[#e4e2e1] bg-[#eceae9] text-[#1b1c1c] shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] transition-all duration-200 group-hover:border-primary/25 group-hover:bg-[#e2e0df] group-hover:text-primary md:h-14 md:w-14"
                  aria-hidden
                >
                  <span className="material-symbols-outlined text-[26px] md:text-[28px]">
                    {c.icon}
                  </span>
                </span>
                <span className="max-w-[5.5rem] text-center font-label text-[9px] font-bold uppercase leading-tight tracking-[0.14em] text-secondary transition-colors group-hover:text-primary">
                  {c.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
