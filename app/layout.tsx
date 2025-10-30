import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adomi App - Travel, Discover and Invest in Ghana",
  description: "Bridging hearts, homes, and opportunities between Ghana and the global diaspora. Discover travel experiences, investment opportunities, and cultural connections.",
  keywords: ["Ghana", "travel", "investment", "diaspora", "tourism", "Africa", "community", "opportunities"],
  authors: [{ name: "Adomi App Team" }],
  creator: "Adomi App",
  publisher: "Adomi App",
  metadataBase: new URL("https://adomiapp.com"),
  openGraph: {
    title: "Adomi App - Travel, Discover and Invest in Ghana",
    description: "Bridging hearts, homes, and opportunities between Ghana and the global diaspora.",
    url: "https://adomiapp.com",
    siteName: "Adomi App",
    images: [
      {
        url: "/ghana-landscape.jpg",
        width: 1200,
        height: 630,
        alt: "Beautiful Ghana landscape featuring lakes and mountains",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adomi App - Travel, Discover and Invest in Ghana",
    description: "Bridging hearts, homes, and opportunities between Ghana and the global diaspora.",
    images: ["/ghana-landscape.jpg"],
    creator: "@adomiapp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
