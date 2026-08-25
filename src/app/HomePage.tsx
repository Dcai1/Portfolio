"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Highlight } from "../../components/textmotion";

import {
  AnimatePresence,
  easeIn,
  motion,
  useReducedMotion,
  Variants,
} from "framer-motion";
import { AnimatedButton } from "../../components/animatedbutton";
import { sideProjects } from "./projects/sideProjectData";

const MotionLink = motion.create(Link);

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

const featuredProjects = sideProjects.slice(0, 3);

const projectAccents = [
  {
    border: "border-fulvous/90",
    glow: "shadow-fulvous/10",
    chip: "border-fulvous/40 text-fulvous",
  },
  {
    border: "border-rose-300/80",
    glow: "shadow-cyan-300/10",
    chip: "border-cyan-300/40 text-cyan-200",
  },
  {
    border: "border-cyan-300/80",
    glow: "shadow-rose-300/10",
    chip: "border-rose-300/40 text-rose-200",
  },
];

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();
  const [openMobileIndex, setOpenMobileIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const syncMobileState = () => {
      setIsMobile(mediaQuery.matches);
    };

    syncMobileState();
    mediaQuery.addEventListener("change", syncMobileState);

    return () => mediaQuery.removeEventListener("change", syncMobileState);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setOpenMobileIndex(null);
    }
  }, [isMobile]);

  return (
    <main className="flex flex-col items-center min-h-screen pb-20 text-lg bg-scroll bg-repeat">
      {/* --------------------------------- INTRO CARD --------------------------------- */}

      {/* Grab full page height */}
      <div className="homepage-card-wrapper">
        <motion.div
          className="homepage-card bg-night/90 border-fulvous "
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
            Junior <Highlight text="Software Engineer" /> and{" "}
            <Highlight text="CyberSecurity" />
          </motion.h2>

          <motion.p
            className="mt-4 text-lg text-gray-400 sm:text-xl"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            I architect interactive fullstack applications with modern tools
            like <Highlight text="Next.js, React, TypeScript, and Python" />,
            deploying security using{" "}
            <Highlight
              text="CyberSecurity best
          practices."
            />
          </motion.p>

          <AnimatedButton
            url="/projects"
            text="View My Projects"
            variants={buttonFadeIn}
          />
        </motion.div>
      </div>
      <motion.section
        className="w-full px-4 max-w-7xl mt-14 sm:px-6 lg:px-8"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: easeIn }}
        viewport={{ once: true, amount: 0.35 }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-fulvous/90">
            Selected Work
          </p>
          <h2 className="mt-3 text-3xl font-bold text-snow sm:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-base leading-7 text-snow/70 sm:text-lg">
            My most <Highlight text="notable" /> Side Projects:
          </p>
        </div>

        {/*---------------------------------- FEATURED PROJECTS ----------------------------------- */}

        <div className="flex flex-col items-center gap-4 mt-8 sm:gap-5">
          {featuredProjects.map((project, index) => {
            const accent = projectAccents[index % projectAccents.length];
            const isExternal = /^https?:\/\//.test(project.url);
            const cardMotion = shouldReduceMotion
              ? {}
              : {
                  // PROJECT CARD HOVER ANIMATION CONFIG
                  opacity: 1,
                  scale: 1.02,
                };

            return (
              <motion.div
                key={project.title}
                className="w-full"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={
                  shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                }
                transition={{ duration: 0.6, delay: index * 0.12 }}
                viewport={{ once: true, amount: 0.35 }}
              >
                <div className="md:hidden">
                  <motion.article
                    className={`relative overflow-hidden border-2 bg-night/90 px-5 py-5 text-snow shadow-lg ${accent.border} ${accent.glow}`}
                    style={{
                      boxShadow: "0 20px 45px rgba(0, 0, 0, 0.28)",
                    }}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenMobileIndex((current) =>
                          current === index ? null : index,
                        )
                      }
                      aria-expanded={openMobileIndex === index}
                      aria-controls={`featured-project-${index}`}
                      className="flex items-start justify-between w-full gap-4 text-left focus-visible:outline-none"
                    >
                      <div className="min-w-0 space-y-3">
                        <div
                          className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.32em] ${accent.chip}`}
                        >
                          {`0${index + 1}`}
                        </div>
                        <h3 className="text-2xl font-bold leading-tight break-words">
                          {project.title}
                        </h3>
                        <p className="text-sm leading-6 text-snow/65">
                          Tap to{" "}
                          {openMobileIndex === index ? "collapse" : "expand"}{" "}
                          this project card
                        </p>
                      </div>

                      <span
                        className={`mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-lg font-semibold transition ${accent.chip} bg-white/5`}
                        aria-hidden="true"
                      >
                        {openMobileIndex === index ? "-" : "+"}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {openMobileIndex === index ? (
                        <motion.div
                          id={`featured-project-${index}`}
                          key={`featured-project-${index}`}
                          className="overflow-hidden"
                          initial={
                            shouldReduceMotion
                              ? false
                              : { height: 0, opacity: 0 }
                          }
                          animate={
                            shouldReduceMotion
                              ? { height: "auto", opacity: 1 }
                              : { height: "auto", opacity: 1 }
                          }
                          exit={
                            shouldReduceMotion
                              ? { opacity: 0 }
                              : { height: 0, opacity: 0 }
                          }
                          transition={{ duration: 0.3 }}
                        >
                          <div className="pt-5 space-y-4 border-t border-white/10">
                            <p className="text-sm leading-7 break-words text-snow/75">
                              {project.description}
                            </p>
                            <p className="text-xs font-medium uppercase tracking-[0.28em] text-snow/45">
                              Tags
                            </p>
                            <p className="text-sm leading-6 break-words text-snow/60">
                              {project.tags}
                            </p>
                            <Link
                              href={project.url}
                              target={isExternal ? "_blank" : undefined}
                              rel={
                                isExternal ? "noopener noreferrer" : undefined
                              }
                              aria-label={`Open ${project.title}${isExternal ? " in a new tab" : ""}`}
                              className="inline-flex items-center px-4 py-2 text-sm font-semibold transition border rounded-full border-white/10 bg-white/5 text-snow/90 hover:border-white/20 hover:bg-fulvous/15 hover:text-snow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fulvous focus-visible:ring-offset-2 focus-visible:ring-offset-night"
                            >
                              View Project
                            </Link>
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </motion.article>
                </div>

                <div className="hidden md:block">
                  <MotionLink
                    href={project.url}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    aria-label={`Open ${project.title}${isExternal ? " in a new tab" : ""}`}
                    className={`group relative block w-full overflow-hidden border-2 border-opacity-90 bg-night/90 px-5 py-6 text-left text-snow shadow-lg transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fulvous focus-visible:ring-offset-2 focus-visible:ring-offset-night hover:shadow-xl ${accent.border} ${accent.glow} md:mx-auto md:w-[90%] md:px-8 md:py-8`}
                    style={{
                      boxShadow: "0 20px 45px rgba(0, 0, 0, 0.28)",
                    }}
                    whileHover={shouldReduceMotion ? undefined : cardMotion}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
                  >
                    <div className="absolute inset-0 transition duration-300 bg-gradient-to-br from-white/5 via-transparent to-fulvous/5 opacity-80 group-hover:opacity-100" />
                    <div className="absolute left-0 w-1 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

                    <div className="relative flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
                      <div className="flex-1 min-w-0 space-y-3">
                        <div
                          className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.32em] ${accent.chip}`}
                        >
                          {`0${index + 1}`}
                        </div>
                        <h3 className="text-2xl font-bold leading-tight break-words sm:text-3xl">
                          {project.title}
                        </h3>
                        <p className="max-w-3xl text-sm leading-7 break-words text-snow/75 sm:text-base">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-col gap-3 lg:max-w-xs lg:items-end">
                        <p className="text-xs font-medium uppercase tracking-[0.28em] text-snow/45">
                          Side project
                        </p>
                        <p className="text-sm leading-6 break-words text-snow/60 sm:text-base lg:text-right">
                          {project.tags}
                        </p>
                        <span className="inline-flex items-center px-4 py-2 text-sm font-semibold transition border rounded-full w-fit border-white/10 bg-white/5 text-snow/90 group-hover:border-white/20 group-hover:bg-fulvous/15 group-hover:text-snow">
                          View Project
                        </span>
                      </div>
                    </div>
                  </MotionLink>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    </main>
  );
}
