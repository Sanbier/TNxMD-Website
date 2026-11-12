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
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
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
      <body className="min-h-screen bg-[#05070f] pb-20 sm:pb-0 text-slate-100 flex flex-col antialiased selection:bg-cyan-500/40 selection:text-white font-sans">
        <ViewportZoomLock />

        {/* Fixed Multi-Orb Aurora Light Stage (powers real refraction behind Glassmorphism 2.0 surfaces) */}
        <div
          aria-hidden="true"
          className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-glass-mesh"
        >
          <div className="aurora-orb-1 absolute -top-24 -left-20 w-[360px] sm:w-[560px] h-[360px] sm:h-[560px] rounded-full bg-sky-500/[0.17] blur-[120px]" />
          <div className="aurora-orb-2 absolute top-[8%] -right-24 w-[340px] sm:w-[520px] h-[340px] sm:h-[520px] rounded-full bg-purple-600/[0.18] blur-[130px]" />
          <div className="aurora-orb-1 absolute top-[46%] left-[12%] w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] rounded-full bg-cyan-500/[0.12] blur-[130px]" />
          <div className="aurora-orb-2 absolute bottom-[-10%] right-[15%] w-[360px] sm:w-[560px] h-[360px] sm:h-[560px] rounded-full bg-indigo-600/[0.16] blur-[135px]" />
        </div>

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
