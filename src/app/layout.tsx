import type { Metadata, Viewport } from "next";
import { Playfair_Display, Cormorant } from "next/font/google";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";
import InstallPrompt from "@/components/InstallPrompt";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "LESURMESURE — Bespoke Tailoring, Casablanca",
  description:
    "Luxury custom tailoring for men in Casablanca, Morocco. Handcrafted suits, shirts, and garments made to your exact measurements.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "LESURMESURE",
  },
  icons: {
    icon: "/icon-192.png",
    apple: "/icon-512.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#c9a96e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${cormorant.variable} antialiased`}
      >
        {children}
        <ServiceWorkerRegistration />
        <InstallPrompt />
      </body>
    </html>
  );
}
