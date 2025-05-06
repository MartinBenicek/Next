import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const redHatDisplay = Red_Hat_Display({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "Mariáš počítadlo",
  description: "Nástroj pro počítání karet a her s možností vedení historie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={redHatDisplay.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
