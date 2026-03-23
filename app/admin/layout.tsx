import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Admin — VisualFabrica",
    default: "Admin",
  },
};

export default function AdminRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
