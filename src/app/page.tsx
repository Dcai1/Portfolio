import { Metadata } from "next";
import HomePage from "./HomePage";

export const metadata: Metadata = {
  title: "Home | David's Portfolio",
  description:
    "My Full-Stack web developer portfolio showcasing full-stack projects, clean UI design, and practical engineering skills.",
  openGraph: {
    title: "Home | David's Portfolio",
    description:
      "My Full-Stack web developer portfolio showcasing full-stack projects, clean UI design, and practical engineering skills.",
    url: "https://davids-portfolio-3828.vercel.app/",
    siteName: "Home | David's Portfolio",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Preview image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home | David's Portfolio",
    description:
      "My Full-Stack web developer portfolio showcasing full-stack projects, clean UI design, and practical engineering skills.",
    images: ["/favicon.ico"],
  },
};

{
  /**Color Pallets
   * Night: #161313
   * Snow: #FBF5F3
   * Fulvous: #E28413
   */
}

export default function Home() {
  return <HomePage />;
}
