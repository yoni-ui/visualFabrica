import type { Metadata } from "next";
import "./globals.css";

const googleFontsHref =
  "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400&family=Inter:wght@400;500;600;700&display=swap";

const materialSymbolsHref =
  "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap";

export const metadata: Metadata = {
  title: {
    default: "VisualFabrica | Ethiopia's Data, Visualized",
    template: "%s | VisualFabrica",
  },
  description:
    "Visualizing Ethiopia's most critical trends in business, technology, and the developing economy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link href={googleFontsHref} rel="stylesheet" />
        <link href={materialSymbolsHref} rel="stylesheet" />
      </head>
      <body
        className="min-h-full bg-white text-on-surface"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
