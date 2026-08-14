"use client";

import { motion } from "framer-motion";
import {
  AnimatedLink,
  AnimatedList,
  Highlight,
} from "../../../components/textmotion";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-white bg-gradient-to-b from-night/50 to-black/50">
      <motion.div
        className="max-w-4xl p-8 space-y-6 text-center transition-all duration-300 border shadow-xl rounded-2xl bg-night/80 border-fulvous hover:shadow-fulvous"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <motion.h1
          className="text-5xl font-bold sm:text-6xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          About <Highlight text="Me" />
        </motion.h1>

        {/* Intro */}
        <motion.p
          className="text-lg text-gray-300 sm:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Hi! I&apos;m{" "}
          <Highlight text="David" className="font-semibold text-fulvous" />, a
          Junior Full-Stack Web Developer and Software Engineer{" "}
          <Highlight
            text="passionate about creating exciting and functional applications."
            className="font-semibold"
          />{" "}
          <br /> <br />
          My journey began at a young age with curiosity in how websites worked
          behind the scenes, and it&apos;s expanded into an overall mindset to
          build software and websites that are visually-pleasing and impactful,
          like one of my real-world projects for{" "}
          <AnimatedLink
            href="https://thefoundationontherockrevival.org/"
            text="this church!"
          />
          <br /> <br />
          I&apos;m dedicated to this goal{" "}
          <Highlight
            text="to the point it excites me,"
            className="font-semibold"
          />{" "}
          and I enjoy learning and applying those new skills I learn. Thanks to
          Dan Miller&apos;s{" "}
          <AnimatedLink
            text="48 Days To The Work You Love,"
            href="https://www.amazon.ca/48-Days-Work-You-Love/dp/1433669331"
          />{" "}
          I find joy in what I do and will never see myself despising it.
          <br /> <br />
          Because of this, I&apos;m eager to fill a variety of important roles
          like development, testing, and <Highlight text="even" /> security!
          <br /> <br /> This is getting long, so I&apos;ll end this with a quote
          that has been guiding me along this journey:
        </motion.p>
        <motion.q className="italic">
          Someone who loves what they do will always learn faster than one who
          doesn&apos;t.
        </motion.q>

        {/* Skills snapshot */}
        <motion.div
          className="grid grid-cols-1 gap-4 mt-6 text-sm md:grid-cols-2 lg:grid-cols-4 sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <AnimatedList
            title="Frontend"
            items={[
              "HTML",
              "CSS",
              "JavaScript",
              "TypeScript",
              "Next.js",
              "React",
              "WordPress",
              "TailwindCSS",
              "Bootstrap",
            ]}
          />
          <AnimatedList
            title="Backend"
            items={["WordPress", "Node.js", "Prisma", "REST APIs", "SQL"]}
          />
          <AnimatedList
            title="Databases"
            items={["MySQL", "Prisma", "MongoDB", "PostgreSQL"]}
          />
          <AnimatedList
            title="Tools"
            items={[
              "SEO",
              "Git",
              "AI Workflow Optimization",
              "UI/UX Design",
              "Python Automation",
            ]}
          />
        </motion.div>

        {/* Passion / Future goals */}
        <motion.p
          className="pt-4 text-lg text-gray-300 sm:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          I love learning new skills and applying them to real-world projects.
          Right now, I&apos;m focused on seeking employment towards{" "}
          <span className="font-semibold text-fulvous">my first paid job</span>{" "}
          and
          <Highlight text=" learning CyberSecurity on Coursera" />. My goal is
          to contribute to projects that make an impact, while continuing to
          grow as a developer.
        </motion.p>

        {/* Fun Facts */}
        <motion.div
          className="mt-10 space-y-4 text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center text-fulvous">
            Fun Facts
          </h2>
          <ul className="space-y-2 text-lg text-gray-300 list-disc list-inside sm:text-xl">
            <li>
              When I&apos;m deep into dev sessions, I get too engaged until I
              achieve the end-goal. Enjoying what you do has its drawbacks!
            </li>
            <li>
              I can be seen either committing and contributing to projects on
              GitHub, or learning CyberSecurity in my free time.
            </li>
            <li>
              Outside of coding, I enjoy experimenting in dev tools on websites
              I didn&apos;t build.
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </main>
  );
}
