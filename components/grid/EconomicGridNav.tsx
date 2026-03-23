import Link from "next/link";
import { VisualFabricaLogo } from "@/components/VisualFabricaLogo";

const topics: { label: string; href: string; active?: boolean }[] = [
  { label: "Economy", href: "/economy/birr-collapse", active: true },
  { label: "Markets", href: "/markets" },
  { label: "Technology", href: "/tech" },
  { label: "Money", href: "#" },
  { label: "Policy", href: "#" },
  { label: "Infrastructure", href: "#" },
  { label: "Demographics", href: "#" },
  { label: "Energy", href: "#" },
  { label: "Maps", href: "#" },
  { label: "Agriculture", href: "#" },
  { label: "Trade", href: "#" },
];

export function EconomicGridNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-surface-container-highest bg-white">
      <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between px-4 py-2">
        <div className="flex items-center gap-8">
          <Link href="/" className="shrink-0" prefetch>
            <VisualFabricaLogo className="h-10 w-auto" priority />
          </Link>
        </div>
        <div className="hidden items-center gap-4 lg:flex">
          {topics.map((t) => (
            <Link
              key={t.label}
              href={t.href}
              prefetch={t.href.startsWith("/")}
              className={`nav-link-grid border-b-2 border-transparent transition-opacity hover:opacity-100 ${
                t.active
                  ? "border-primary opacity-100"
                  : "opacity-60 hover:border-[#e4e2e1]"
              }`}
            >
              {t.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined cursor-pointer text-xl">
            search
          </span>
          <span className="material-symbols-outlined cursor-pointer text-xl lg:hidden">
            menu
          </span>
        </div>
      </div>
    </nav>
  );
}
