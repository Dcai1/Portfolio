"use client";

import { useEffect, useState } from "react";
import { AnimatedProject } from "../../../components/animatedproject";
import { AnimatedRealWorldProject } from "../../../components/animatedrealworldproject";
import { easeIn, motion, Variants } from "framer-motion";
import { realWorldProjects } from "./realWorldData";

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

      {/* Side Projects Section */}
      <motion.section
        className="flex max-w-3xl mx-auto space-y-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p className="my-auto text-xl text-gray-300 sm:text-3xl">
          These are the projects I&apos;ve worked on and/or helped ship during
          my early career. I&apos;ve included a mix of both personal and
          professional projects.
        </p>
      </motion.section>

      {/* Real World Projects — subtle background band + elevated cards */}
      <section className="relative py-8">
        <div className="absolute left-0 right-0 top-0 bottom-0 pointer-events-none flex justify-center">
          <div
            className="w-full max-w-6xl h-full rounded-2xl"
            style={{
              background:
                "linear-gradient(180deg, rgba(226,132,19,0.04), rgba(0,0,0,0))",
            }}
          />
        </div>

        <div className="relative z-10">
          <motion.section
            className="flex flex-col space-x-6 my-auto pb-6 max-w-3xl mx-auto space-y-6 text-center mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <h2 className="flex mx-auto my-auto text-3xl sm:gap-6 sm:text-6xl pb-4 font-bold">
              Real World Projects
            </h2>
            <p className="flex my-auto text-md sm:text-2xl text-gray-300">
              High-Impact Websites in Production and fast-paced projects I
              worked on or helped ship.
            </p>
          </motion.section>

          <section className="grid max-w-6xl grid-cols-1 items-start gap-12 mx-auto sm:grid-cols-2 lg:grid-cols-3 m-5">
            {realWorldProjects.map((p) => (
              <div
                key={p.title}
                className="flex items-center justify-center w-full"
              >
                <AnimatedRealWorldProject
                  variants={scaleUpOnView}
                  title={p.title}
                  description={p.description}
                  url={p.url}
                  tags={p.tags}
                  color={p.color}
                  icons={p.icons}
                />
              </div>
            ))}
          </section>
        </div>
      </section>

      {/* Side Projects Section */}
      <motion.section
        className="flex flex-col max-w-3xl mx-auto space-y-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="flex mx-auto my-auto text-3xl sm:gap-6 sm:text-6xl pb-4 font-bold">
          Side Projects
        </h2>
        <p className="my-auto text-xl text-gray-300 sm:text-3xl">
          Here are all of my (earlier) side projects I&apos;ve built to explore
          modern fullstack development. Each one helped me sharpen my skills
          with real-world tools.
        </p>
      </motion.section>

      {/* Projects Grid */}
      <section className="grid max-w-6xl grid-cols-1 items-start gap-12 mx-auto sm:grid-cols-2 lg:grid-cols-3 m-5">
        <AnimatedProject
          variants={scaleUpOnView}
          title="Portfolio Website"
          description="The site you're currently viewing, built with Next.js, Framer Motion, and Tailwind."
          url="/"
          tags="#React #FramerMotion #NextJs #Tailwind #Frontend"
          color="text-fulvous"
        />
        <AnimatedProject
          variants={scaleUpOnView}
          title="PokéWeb"
          description="A Pokémon database site using API data. Displays detailed stats and locations."
          url="https://pokeweb-site.vercel.app/"
          tags="#React #API #NextJs #Frontend #Backend #Tailwind"
          color="text-red-500"
        />
        <AnimatedProject
          variants={scaleUpOnView}
          title="SpeedList"
          description="A shopping list app with CRUD operations backed by a database. Built for quick, on-the-go use."
          url="https://speedlist.vercel.app/"
          tags="#React #API #NextJs #Prisma #Backend #Tailwind"
          color="text-gray-200"
        />

        <AnimatedProject
          variants={scaleUpOnView}
          title="YourBlog"
          description="Anyone can read and create posts with an account. Created using authentication, authorization and an extensive use of APIs."
          url="https://your-blog-jet.vercel.app/"
          tags="#REST #Prisma #Bootstrap #Sass #React #NextJs"
          color="text-yourblog"
        />
      </section>
    </main>
  );
}
