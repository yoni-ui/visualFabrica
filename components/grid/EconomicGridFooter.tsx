import Link from "next/link";
import { VisualFabricaLogo } from "@/components/VisualFabricaLogo";

export function EconomicGridFooter() {
  return (
    <footer className="bg-[#1b1c1c] px-6 py-12 text-white">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-12 md:grid-cols-4">
        <div className="flex flex-col gap-6">
          <Link href="/" prefetch>
            <VisualFabricaLogo className="h-11 w-auto min-w-[156px] shrink-0 md:h-12 md:min-w-[176px]" invertForDark />
          </Link>
          <p className="font-body text-lg italic leading-snug text-white/60">
            Visualizing Ethiopia&apos;s most critical trends in business,
            technology, and the developing economy.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined cursor-pointer transition-colors hover:text-vc-green">
              brand_awareness
            </span>
            <span className="material-symbols-outlined cursor-pointer transition-colors hover:text-vc-green">
              rss_feed
            </span>
            <span className="material-symbols-outlined cursor-pointer transition-colors hover:text-vc-green">
              contact_support
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h6 className="font-sans-headline text-[10px] font-bold uppercase tracking-widest text-white">
            Company
          </h6>
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                href="/s/about"
                className="font-body italic text-white/60 transition-all hover:text-vc-green"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/s/contact"
                className="font-body italic text-white/60 transition-all hover:text-vc-green"
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                className="font-body italic text-white/60 transition-all hover:text-vc-green"
                href="#"
              >
                Masthead
              </a>
            </li>
            <li>
              <a
                className="font-body italic text-white/60 transition-all hover:text-vc-green"
                href="#"
              >
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h6 className="font-sans-headline text-[10px] font-bold uppercase tracking-widest text-white">
            Products
          </h6>
          <ul className="flex flex-col gap-3">
            {[
              "Visual Insights+",
              "Data Portal",
              "Reports",
              "Creator Program",
            ].map((label) => (
              <li key={label}>
                <a
                  className="font-body italic text-white/60 transition-all hover:text-vc-green"
                  href="#"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h6 className="font-sans-headline text-[10px] font-bold uppercase tracking-widest text-white">
            Legal
          </h6>
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                href="/s/privacy"
                className="font-body italic text-white/60 transition-all hover:text-vc-green"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/s/terms"
                className="font-body italic text-white/60 transition-all hover:text-vc-green"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex w-full max-w-[1280px] items-center justify-between border-t border-white/10 pt-8">
        <span className="font-label text-[10px] text-white/40">
          © {new Date().getFullYear()} VisualFabrica Ethiopia. All rights
          reserved.
        </span>
        <span className="font-label text-[10px] font-bold uppercase tracking-widest text-vc-green">
          Made with Visual Clarity
        </span>
      </div>
    </footer>
  );
}
