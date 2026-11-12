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
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tnxmd.io.vn"),
  title: {
    default: "TNxMD | Cổng Mua/Bán Mod Game Online",
    template: "%s | TNxMD",
  },
  description:
    "Truy cập khám phá và trải nghiệm các chức năng thú vị đến từ đội ngũ siêu hạng",
  keywords: [
    "TNxMD",
    "tnxmd.io.vn",
    "cổng mua bán mod game online",
    "mod game ios",
    "kho game mod",
    "hỗ trợ game trực tiếp",
  ],
  authors: [{ name: "TNxMD" }],
  creator: "TNxMD",
  publisher: "TNxMD",
  alternates: {
    canonical: "https://tnxmd.io.vn",
  },
  openGraph: {
    title: "TNxMD | Cổng Mua/Bán Mod Game Online",
    description:
      "Truy cập khám phá và trải nghiệm các chức năng thú vị đến từ đội ngũ siêu hạng",
    url: "https://tnxmd.io.vn",
    siteName: "TNxMD",
    type: "website",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary",
    title: "TNxMD | Cổng Mua/Bán Mod Game Online",
    description:
      "Truy cập khám phá và trải nghiệm các chức năng thú vị đến từ đội ngũ siêu hạng",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#05070f",
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
      <head>
        <link
          rel="preconnect"
          href="https://is1-ssl.mzstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://is1-ssl.mzstatic.com" />
      </head>
      <body className="min-h-screen bg-[#05070f] pb-20 sm:pb-0 text-slate-100 flex flex-col antialiased selection:bg-cyan-500/40 selection:text-white font-sans">
        <ViewportZoomLock />

        {/* Fixed Multi-Radial Aurora Light Stage (0 Gaussian Blur Passes, powers real Glassmorphism 2.0 refraction) */}
        <div
          aria-hidden="true"
          className="fixed inset-0 z-0 pointer-events-none bg-aurora-stage"
        />

        <ToastProvider>
          <div className="relative z-10 flex flex-col min-h-screen">
            <Header />
            {children}
            <Footer />
            <MobileBottomDock />
          </div>
        </ToastProvider>
      </body>
    </html>
  );
}
