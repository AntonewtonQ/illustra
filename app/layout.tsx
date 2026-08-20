import type { Metadata } from "next";
import { Figtree, Geist_Mono } from "next/font/google";

import { cn } from "@/lib/utils";

import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://illustra.site"),
  title: {
    default: "Illustra — Estúdio digital de produtos",
    template: "%s — Illustra",
  },
  description:
    "Estratégia, design e engenharia para transformar ideias em produtos digitais claros, úteis e impactantes.",
  applicationName: "Illustra",
  keywords: [
    "design de produto",
    "engenharia de software",
    "desenvolvimento web",
    "aplicações mobile",
    "estúdio digital",
  ],
  authors: [{ name: "Illustra", url: "https://illustra.site" }],
  creator: "Illustra",
  publisher: "Illustra",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_AO",
    url: "/",
    siteName: "Illustra",
    title: "Illustra — Estúdio digital de produtos",
    description:
      "Transformamos ideias em produtos digitais através de estratégia, design e engenharia.",
  },
  twitter: {
    card: "summary",
    title: "Illustra — Estúdio digital de produtos",
    description:
      "Transformamos ideias em produtos digitais através de estratégia, design e engenharia.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt"
      className={cn("h-full", figtree.variable, geistMono.variable)}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
