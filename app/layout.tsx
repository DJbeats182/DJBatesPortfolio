import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE = {
  name: "Builder Portfolio",
  title: "Full-Stack Builder & Automation Architect",
  description:
    "I turn business problems into scalable, AI-powered digital products. Full-stack builder shipping with Next.js, Supabase, and autonomous coding agents on a PRD-to-Production pipeline.",
};

export const metadata: Metadata = {
  title: `${SITE.title} — ${SITE.name}`,
  description: SITE.description,
  keywords: [
    "Full-Stack Developer",
    "Automation Architect",
    "AI-Native Workflow",
    "Next.js",
    "Supabase",
    "Vercel",
    "Healthcare Tech",
  ],
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#05070a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
