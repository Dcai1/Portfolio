import ProjectsPage from "./ProjectsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore a collection of web development projects, from polished portfolio sites to real-world applications built with modern tools.",
};

export default function Projects() {
  return <ProjectsPage />;
}
