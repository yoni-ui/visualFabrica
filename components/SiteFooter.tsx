import Link from "next/link";
import { VisualFabricaLogo } from "@/components/VisualFabricaLogo";

const footerLinks = [
  { href: "/s/about", label: "About" },
  { href: "/s/contact", label: "Contact" },
  { href: "/s/privacy", label: "Privacy Policy" },
  { href: "/s/terms", label: "Terms of Service" },
  { href: "/news", label: "Archive" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto w-full bg-surface-dim">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 px-6 py-16 md:grid-cols-2 md:px-10">
        <div>
          <Link href="/" prefetch className="mb-4 inline-block">
            <VisualFabricaLogo className="h-9 w-auto" />
          </Link>
          <p className="font-label text-xs font-medium uppercase leading-loose tracking-widest text-on-surface/50">
            © {new Date().getFullYear()} VisualFabrica Editorial. All rights
            reserved. Data provided by global indices.
          </p>
        </div>
        <div className="flex flex-wrap items-end gap-x-8 gap-y-4 md:justify-end">
          {footerLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              prefetch={false}
              className="font-label text-xs font-medium uppercase tracking-widest text-on-surface/50 transition-colors hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
