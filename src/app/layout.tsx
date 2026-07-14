import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | David's Portfolio",
    default: "Portfolio",
  },
  description:
    "A personal portfolio showcasing side projects, engineering work, and polished web experiences.",
  openGraph: {
    title: "David's Portfolio",
    description:
      "A personal portfolio showcasing side projects, engineering work, and polished web experiences.",
    url: "https://davids-portfolio-3828.vercel.app/",
    siteName: "David's Portfolio",
    images: [
      {
        url: "/images/name.png",
        width: 1200,
        height: 630,
        alt: "David's Portfolio preview image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "David's Portfolio",
    description:
      "A personal portfolio showcasing side projects, engineering work, and polished web experiences.",
    images: ["/images/name.png"],
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
