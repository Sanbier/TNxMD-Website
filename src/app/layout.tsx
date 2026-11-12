import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, JetBrains_Mono, Orbitron } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBottomDock } from "@/components/MobileBottomDock";
import { ToastProvider } from "@/components/Toast";
import { ViewportZoomLock } from "@/components/ViewportZoomLock";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["vietnamese", "latin"],
  display: "swap",
  variable: "--font-be-vietnam",
});

const orbitron = Orbitron({
  weight: ["700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tnxmd.io.vn"),
  title: {
    default: "TNxMD | Elite Gaming Catalog & Direct Support",
    template: "%s | TNxMD",
  },
  description:
    "TNxMD is a premium dark gaming catalog featuring verified high-performance title profiles, 24/7 direct operator contact via Telegram, Zalo, and Facebook.",
  keywords: [
    "TNxMD",
    "tnxmd.io.vn",
    "gaming catalog",
    "game library",
    "tactical gaming",
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
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      className={`dark ${beVietnamPro.variable} ${orbitron.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-[#07070a] pb-20 sm:pb-0 text-gray-100 flex flex-col antialiased selection:bg-purple-600 selection:text-white bg-ambient-grid font-sans">
        <ViewportZoomLock />
        <ToastProvider>
          <Header />
          {children}
          <Footer />
          <MobileBottomDock />
        </ToastProvider>
      </body>
    </html>
  );
}
