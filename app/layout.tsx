import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const redHatDisplay = Red_Hat_Display({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
