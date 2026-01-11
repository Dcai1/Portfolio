import { Metadata } from "next";
import HomePage from "./HomePage";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Entry-level web developer portfolio highlighting full-stack projects, clean UI design, and practical engineering skills.",
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
