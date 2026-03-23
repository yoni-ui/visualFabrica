import { SiteFooter } from "@/components/SiteFooter";
import { TopNav } from "@/components/TopNav";

export default function EditorialLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TopNav />
      {children}
      <SiteFooter />
    </>
  );
}
