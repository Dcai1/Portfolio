import { Metadata } from "next";
import HomePage from "./HomePage";

export const metadata: Metadata = {
  title: "Home | David's Portfolio",
  description:
    "A full-stack portfolio that highlights responsive web apps, thoughtful UI design, and real-world engineering projects.",
  openGraph: {
    title: "Home | David's Portfolio",
    description:
      "A full-stack portfolio that highlights responsive web apps, thoughtful UI design, and real-world engineering projects.",
    url: "https://davids-portfolio-3828.vercel.app/",
    siteName: "Home | David's Portfolio",
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
    title: "Home | David's Portfolio",
    description:
      "A full-stack portfolio that highlights responsive web apps, thoughtful UI design, side projects and real-world engineering projects.",
    images: ["/images/name.png"],
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
