import AboutPage from "./AboutPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Hey there! I'm David, a full-stack web developer who enjoys building interactive, functional applications with clear design.",
};

export default function About() {
  return <AboutPage />;
}
