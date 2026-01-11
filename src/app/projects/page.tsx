import ProjectsPage from "./ProjectsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Portfolio section showcasing full-stack projects built with Next.js, React, TypeScript, UI Design, and other skills.",
};

export default function Projects() {
  return <ProjectsPage />;
}
