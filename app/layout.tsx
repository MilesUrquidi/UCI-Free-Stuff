import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "ZotDeals",
  description: "Every free tool, subscription, and perk available to UCI students — in one place.",
  openGraph: {
    title: "ZotDeals",
    description: "Every free tool, subscription, and perk available to UCI students — in one place.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "ZotDeals",
    description: "Every free tool, subscription, and perk available to UCI students — in one place.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
