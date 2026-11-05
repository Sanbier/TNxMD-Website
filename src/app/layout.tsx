import type { Metadata, Viewport } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tnxmd.io.vn"),
  title: {
    default: "TNxMD | Elite Gaming Catalog & Direct Support",
    template: "%s | TNxMD",
  },
  description:
    "TNxMD is a premium dark gaming catalog featuring verified high-performance title profiles, 24/7 direct operator contact via Discord, Telegram, Zalo, and Facebook.",
  keywords: [
    "TNxMD",
    "tnxmd.io.vn",
    "gaming catalog",
    "game library",
    "tactical gaming",
    "discord gaming",
    "telegram gaming support",
  ],
  authors: [{ name: "TNxMD Engineering Team" }],
  creator: "TNxMD",
  publisher: "TNxMD",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "TNxMD | Elite Gaming Catalog & Direct Support",
    description:
      "Explore verified game titles, high-performance profiles, and instant direct access channels at tnxmd.io.vn.",
    url: "https://tnxmd.io.vn",
    siteName: "TNxMD",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#07070a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700;900&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#07070a] text-gray-100 flex flex-col antialiased selection:bg-purple-600 selection:text-white bg-ambient-grid">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
