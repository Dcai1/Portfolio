"use client";

import { motion, Variants } from "framer-motion";
import { Project } from "./project";

interface AnimatedProjectProps {
  title: string;
  description: string;
  url: string;
  tags: string;
  color?: string;
  variants: Variants;
  initial?: string;
  inView?: string;
}

export const AnimatedProject = ({
  url,
  description,
  title,
  tags,
  color,
  variants,
  initial = "hidden",
  inView = "visible",
}: AnimatedProjectProps) => {
  return (
    <div className="flex items-center justify-center w-full">
      <motion.div
        className="flex mx-auto w-fit"
        variants={variants}
        initial={initial}
        whileInView={inView}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Project
          title={title}
          url={url}
          description={description}
          tags={tags}
          color={color}
        />
      </motion.div>
    </div>
  );
};
