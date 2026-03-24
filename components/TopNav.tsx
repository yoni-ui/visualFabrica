"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { VisualFabricaLogo } from "@/components/VisualFabricaLogo";

const navLinks = [
  { href: "/markets", label: "Markets" },
  { href: "/economy/birr-collapse", label: "Economy" },
  { href: "/tech", label: "Tech" },
  { href: "/news", label: "News" },
];

export function TopNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#e4e2e1] bg-white/90 backdrop-blur-[16px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 py-4 md:px-8 lg:px-10">
        <div className="flex items-center justify-between gap-4">
          <div className="flex min-w-0 flex-1 items-center gap-8">
            <Link href="/" prefetch className="flex shrink-0 items-center">
              <VisualFabricaLogo className="h-10 w-auto min-w-[140px] shrink-0 md:h-11 md:min-w-[160px]" />
            </Link>
            <div className="hidden items-center gap-6 md:flex">
              {navLinks.map((item) => {
                const active =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    prefetch
                    className={
                      active
                        ? "border-b-2 border-primary pb-1 font-label text-sm font-bold uppercase tracking-widest text-primary"
                        : "font-label text-sm uppercase tracking-widest text-on-surface/60 transition-colors hover:text-primary"
                    }
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-3 border-t border-[#e4e2e1]/80 pt-3">
          <Breadcrumbs variant="public" />
        </div>
      </div>
    </nav>
  );
}
