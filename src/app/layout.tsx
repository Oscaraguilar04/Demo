import type { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import { restaurant } from "@/data/restaurant";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: restaurant.seo.title,
  description: restaurant.seo.description,
  openGraph: {
    title: restaurant.seo.ogTitle,
    description: restaurant.seo.ogDescription,
    type: "website",
    locale: "en_US",
    images: [{ url: restaurant.heroImage }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body
        className="min-h-full"
        style={
          {
            "--brand-primary": restaurant.primaryColor,
            "--brand-accent": restaurant.accentColor,
            "--brand-primary-soft":
              "color-mix(in srgb, var(--brand-primary) 78%, white)",
          } as CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}
