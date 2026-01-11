import AboutPage from "./AboutPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Hey there! I'm David, a full-stack web developer passionate about creating interactive and functional applications.",
};

export default function About() {
  return <AboutPage />;
}
