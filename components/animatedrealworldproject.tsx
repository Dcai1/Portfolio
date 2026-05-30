"use client";

import { motion, Variants } from "framer-motion";
import { RealWorldProject } from "./realworldproject";

interface AnimatedRealWorldProjectProps {
  title: string;
  description: string;
  url: string;
  tags: string;
  color?: string;
  icons?: string | string[];
  variants: Variants;
  initial?: string;
  inView?: string;
}

export const AnimatedRealWorldProject = ({
  url,
  description,
  title,
  tags,
  color,
  icons,
  variants,
  initial = "hidden",
  inView = "visible",
}: AnimatedRealWorldProjectProps) => {
  return (
    <div className="flex items-center justify-center w-full">
      <motion.div
        className="flex mx-auto w-fit"
        variants={variants}
        initial={initial}
        whileInView={inView}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <RealWorldProject
          title={title}
          url={url}
          description={description}
          tags={tags}
          color={color}
          icons={icons}
        />
      </motion.div>
    </div>
  );
};
