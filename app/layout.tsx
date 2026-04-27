import type { Metadata } from "next";
import { Bebas_Neue, Cormorant_Garamond, Manrope } from "next/font/google";
import "@/app/globals.css";
import SiteShell from "@/components/SiteShell";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body"
});

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"]
});

const labelFont = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-label",
  weight: "400"
});

export const metadata: Metadata = {
  title: "Litty Co.",
  description:
    "Lifestyle umbrella brand and ecosystem hub for Litty Co., JJ Totes, Great Wall of Legends, and JJ Pro Service."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable} ${labelFont.variable}`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
