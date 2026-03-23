import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analytics",
};

export default function AdminAnalyticsPage() {
  return (
    <>
      <p className="font-label text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        Coming soon
      </p>
      <h2 className="mt-2 font-headline text-4xl font-extrabold tracking-tighter text-on-surface md:text-5xl">
        Analytics
      </h2>
      <p className="mt-4 max-w-xl font-body text-lg text-on-surface-variant">
        Traffic, engagement, and conversion dashboards will plug in here. Route
        is already mapped at{" "}
        <code className="text-primary">/admin/analytics</code>.
      </p>
    </>
  );
}
