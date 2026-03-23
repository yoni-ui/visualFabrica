import type { Metadata } from "next";
import { MediaFilterBar } from "@/components/admin/MediaFilterBar";
import { MediaLibraryGrid } from "@/components/admin/MediaLibraryGrid";

export const metadata: Metadata = {
  title: "Media",
};

export default function AdminMediaPage() {
  return (
    <>
      <header className="mb-10 flex items-end justify-between">
        <div className="max-w-2xl">
          <div className="mb-2 flex items-center gap-3">
            <div className="h-6 w-1 bg-primary-container" />
            <span className="font-label text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Resource Manager
            </span>
          </div>
          <h2 className="font-headline text-4xl font-extrabold tracking-tighter text-on-background md:text-5xl">
            Media Library
          </h2>
          <p className="mt-4 font-body text-xl leading-relaxed text-on-surface-variant">
            Manage VisualFabrica&apos;s editorial assets, interactive charts, and
            high-fidelity graphics from a central architectural hub.
          </p>
        </div>
      </header>

      <section className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-4">
        {[
          { label: "Total Assets", value: "2,842", bar: "bg-primary" },
          { label: "Charts Created", value: "412", bar: "bg-tertiary" },
          { label: "Images Uploaded", value: "1,904", bar: "bg-outline" },
          {
            label: "Storage Used",
            value: "84.2 GB",
            bar: "bg-primary",
            progress: true,
          },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-lg bg-surface-container-lowest p-6 transition-transform duration-300 hover:scale-[1.01]"
          >
            <p className="mb-1 font-label text-xs font-medium uppercase tracking-widest text-secondary">
              {s.label}
            </p>
            <p className="font-headline text-3xl font-black text-on-background">
              {s.value}
            </p>
            {s.progress ? (
              <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-surface-container-high">
                <div className="h-full w-[65%] bg-primary" />
              </div>
            ) : (
              <div className={`mt-4 h-1 w-12 ${s.bar}`} />
            )}
          </div>
        ))}
      </section>

      <section className="mb-8">
        <MediaFilterBar />
      </section>

      <MediaLibraryGrid />
    </>
  );
}
