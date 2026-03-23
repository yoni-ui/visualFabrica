"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
    <nav className="sticky top-0 z-50 w-full bg-surface/80 backdrop-blur-[16px]">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-10">
        <div className="flex items-center gap-8">
          <Link href="/" prefetch className="flex shrink-0 items-center">
            <VisualFabricaLogo className="h-8 w-auto md:h-9" />
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
    </nav>
  );
}
