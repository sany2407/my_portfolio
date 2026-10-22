import type { Metadata } from "next";
import { Chivo, Chivo_Mono, Oxanium } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-oxanium",
});

const chivo = Chivo({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500"],
  variable: "--font-chivo",
});

const chivoMono = Chivo_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-chivo-mono",
});

export const metadata: Metadata = {
  title: "Sany A — Senior Full Stack & AI Engineer",
  description: "Senior full-stack and AI engineer portfolio.",
  icons: {
    icon: "/favicon.svg",
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
      data-theme="dark"
      className={`${oxanium.variable} ${chivo.variable} ${chivoMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
