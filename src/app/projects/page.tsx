import ProjectsPage from "./ProjectsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Portfolio section showcasing full-stack projects built using Next.js, WordPress, React, TypeScript, and other frameworks.",
};

export default function Projects() {
  return <ProjectsPage />;
}
