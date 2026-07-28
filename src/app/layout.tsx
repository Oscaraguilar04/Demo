import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { restaurant } from "@/data/restaurant";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const body = Outfit({
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
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
              "color-mix(in srgb, var(--brand-primary) 82%, white)",
          } as CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}
