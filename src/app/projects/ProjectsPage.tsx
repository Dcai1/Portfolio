"use client";

import { useEffect, useState } from "react";
import { AnimatedProject } from "../../../components/animatedproject";
import { easeIn, motion, Variants } from "framer-motion";
import { sideProjects } from "./ProjectData";
import { Highlight } from "../../../components/textmotion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

const scaleUpOnView: Variants = {
  hidden: { scale: 0.9, opacity: 0.3 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
};

export default function ProjectsPage() {
  {
    /* Ensure the web fully loads */
  }
  const [loading, setLoading] = useState(false);
  useEffect(() => setLoading(true), []);

  return (
    <main className="flex flex-col min-h-screen p-6 space-y-20 bg-scroll">
      <motion.div
        className="flex flex-col items-center justify-center h-screen p-6 space-y-6 text-center shadow-lg bg-night/90 shadow-fulvous rounded-2xl"
        initial={{ scale: 0.5 }}
        whileInView={loading ? { scale: 1.025 } : {}}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.3 }}
      >
        {/* ------------------- TITLE ------------------- */}
        <motion.h1
          className="text-6xl font-bold sm:text-9xl"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, duration: 1 }}
        >
          My{" "}
          <motion.span
            initial={{ color: "#FFFFFF" }}
            animate={{ color: "#E28413" }}
            transition={{ delay: 1, duration: 0.5, ease: easeIn }}
          >
            Projects
          </motion.span>
        </motion.h1>
        <motion.h2
          className="text-xl sm:text-2xl"
          initial={{ opacity: 0, color: "#FFFFFF" }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 1,
          }}
          whileInView={{
            y: [0, 5, 0],
            color: "#E28413",
            transition: {
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: easeIn,
            },
          }}
        >
          ↓ Scroll Down! ↓
        </motion.h2>
      </motion.div>

      {/* ------------------------- Side Projects Section ----------------------------  */}
      <motion.section
        className="flex max-w-3xl mx-auto space-y-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p className="my-auto text-xl text-gray-300 sm:text-3xl">
          These are all the projects I&apos;ve developed and deployed during my
          early career. I&apos;ve included a mix of both personal and
          professional projects.
        </p>
      </motion.section>

      {/* -------------------------- Projects Render ---------------------- */}
      <motion.section
        className="flex flex-col max-w-3xl mx-auto space-y-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="flex pb-4 mx-auto my-auto text-3xl font-bold sm:gap-6 sm:text-6xl">
          My <Highlight text="Projects" />
        </h2>
        <p className="my-auto text-xl text-gray-300 sm:text-3xl">
          Here are all of my side projects I&apos;ve built to explore modern
          software application development. Each one helped me sharpen my skills
          and knowledge with architecture, security, and real-world tools like
          Git and Automation.
        </p>
      </motion.section>

      {/* Projects Grid */}
      <section className="grid items-start max-w-6xl grid-cols-1 gap-12 m-5 mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {/* Side Projects Map */}
        {sideProjects.map((p) => (
          <div
            key={p.title}
            className="flex items-center justify-center w-full"
          >
            <AnimatedProject
              variants={scaleUpOnView}
              title={p.title}
              description={p.description}
              url={p.url}
              tags={p.tags}
              color={p.color}
            />
          </div>
        ))}
      </section>
    </main>
  );
}
