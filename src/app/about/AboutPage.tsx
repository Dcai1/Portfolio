"use client";

import { motion } from "framer-motion";

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
          About{" "}
          <motion.span
            initial={{ color: "#FFFFFF" }}
            animate={{ color: "#E28413" }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Me
          </motion.span>
        </motion.h1>

        {/* Intro */}
        <motion.p
          className="text-lg text-gray-300 sm:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Hi! I&apos;m{" "}
          <motion.span
            className="font-semibold text-fulvous"
            initial={{ color: "#FFFFFF" }}
            animate={{ color: "#E28413" }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            David
          </motion.span>
          , a full-stack web developer{" "}
          <motion.strong
            initial={{ color: "#FFFFFF" }}
            animate={{ color: "#E28413" }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            passionate about creating interactive and functional applications.
          </motion.strong>{" "}
          My journey began at a young age with curiosity in how websites worked
          behind the scenes, and it&apos;s grown into a drive to build
          meaningful projects with both design and functionality. <br />I am
          passionate at what I do,{" "}
          <motion.strong
            initial={{ color: "#FFFFFF" }}
            animate={{ color: "#E28413" }}
            transition={{ delay: 2.1, duration: 0.5 }}
          >
            to the point of feeling excitement,
          </motion.strong>{" "}
          and I enjoy learning and applying new skills. I believe I am capable
          of learning on the job should the situation require it. <br /> This is
          getting long, so I&apos;ll end this with a quote that has been guiding
          me along this journey:
        </motion.p>
        <motion.q className="italic">
          Someone who loves what they do will always learn faster than one who
          doesn&apos;t.
        </motion.q>

        {/* Skills snapshot */}
        <motion.div
          className="grid grid-cols-2 gap-4 mt-6 text-sm sm:grid-cols-4 sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <motion.div
            className="p-4 border rounded-lg shadow-xl bg-night/70 border-fulvous hover:shadow-fulvous"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="font-semibold text-fulvous sm:text-2xl">Frontend</h2>
            <p>React, Next.js, Tailwind</p>
          </motion.div>
          <motion.div
            className="p-4 border rounded-lg shadow-xl bg-night/70 border-fulvous hover:shadow-fulvous"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="font-semibold text-fulvous sm:text-2xl">Backend</h2>
            <p>Node.js, Prisma</p>
          </motion.div>
          <motion.div
            className="p-4 border rounded-lg shadow-xl bg-night/70 border-fulvous hover:shadow-fulvous"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="font-semibold text-fulvous sm:text-2xl">
              Databases
            </h2>
            <p>MySQL, Prisma, MongoDB</p>
          </motion.div>
          <motion.div
            className="p-4 border rounded-lg shadow-xl bg-night/70 border-fulvous hover:shadow-fulvous"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="font-semibold text-fulvous sm:text-2xl">Tools</h2>
            <p>GitHub</p>
          </motion.div>
        </motion.div>

        {/* Passion / Future goals */}
        <motion.p
          className="pt-4 text-lg text-gray-300 sm:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          I love learning new technologies and applying them to real-world
          projects. Right now, I&apos;m focused on improving my skills in{" "}
          <span className="font-semibold text-fulvous">
            backend development
          </span>{" "}
          and building scalable applications. My goal is to contribute to
          impactful projects while continuing to grow as a developer.
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
              When I&apos;m deep into dev sessions, I get too engaged (to the
              point I forget to eat or use the washroom) until I achieve the
              end-goal. Enjoying what you do has its cons!
            </li>
            <li>
              Adding onto my curiousity for web dev at a young age, I was
              playing around with web development, experimenting with HTML and
              CSS. I only began taking it seriously at the age of 20.
            </li>
            <li>
              Outside of coding, I enjoy playing around in dev tools on websites
              I didn&apos;t make. There are things you can learn even in there!
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </main>
  );
}
