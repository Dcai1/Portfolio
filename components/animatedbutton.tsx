"use client";
import { motion, Variants } from "framer-motion";
import { Button } from "./button";

interface AnimatedButtonProps {
  url: string;
  text: string;
  variants: Variants;
  initial?: string;
  animate?: string;
  inView?: string;
}

export const AnimatedButton = ({
  url,
  text,
  variants,
  initial = "hidden",
  animate = "effect",
  inView = "visible",
}: AnimatedButtonProps) => {
  return (
    <motion.div
      className="items-center justify-center mx-auto mt-4"
      variants={variants}
      initial={initial}
      animate={animate}
      whileTap={{ scale: 0.9 }}
      whileInView={inView}
    >
      <Button url={url} text={text} />
    </motion.div>
  );
};
