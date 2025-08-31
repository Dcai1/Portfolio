"use client";

import { easeIn, motion, Variants } from "framer-motion";
import { AnimatedButton } from "../../components/animatedbutton";

{
  /**Color Pallets
   * Night: #161313
   * Snow: #FBF5F3
   * Fulvous: #E28413
   */
}

const buttonFadeIn: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    rotate: [-3, 3, -3],
    transition: { repeat: Infinity, repeatType: "mirror", duration: 1 },
  },
  effect: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 3,
      duration: 0.65,
    },
  },
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-lg bg-scroll bg-repeat">
      {/* Main */}

      <motion.div
        className="flex flex-col items-center max-w-3xl p-8 text-center border-2 shadow-lg bg-night/90 border-fulvous rounded-2xl"
        initial={{ opacity: 0, y: -45, rotate: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        whileHover={{
          rotate: [-1, 2, -1, 1, 0],
          transition: { duration: 0.6, ease: easeIn },
        }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.h1
          className="text-5xl font-bold text-white sm:text-7xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeIn, delay: 0.3 }}
        >
          Hi, I&apos;m{" "}
          <motion.span
            className="underline text-fulvous underline-offset-8"
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            David
          </motion.span>
        </motion.h1>

        <motion.h2
          className="mt-4 text-2xl font-medium text-gray-300 sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Fullstack Web Developer
        </motion.h2>

        <motion.p
          className="mt-4 text-lg text-gray-400 sm:text-xl"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          I build interactive fullstack applications with modern tools like
          Next.js, React, and Prisma.
        </motion.p>

        <AnimatedButton
          url="/projects"
          text="View My Projects"
          variants={buttonFadeIn}
        />
      </motion.div>
    </main>
  );
}
