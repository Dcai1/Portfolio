"use client";

import { motion } from "framer-motion";

export interface HighlightProps {
  text: string;
  className?: string;
  initialColor?: string;
  animateColor?: string;
  delay?: number;
  duration?: number;
}

export const Highlight = ({
  text,
  className = "font-semibold text-fulvous",
  initialColor = "#FFFFFF",
  animateColor = "#E28413",
  delay = 1,
  duration = 0.5,
}: HighlightProps) => {
  return (
    <motion.span
      className={className}
      initial={{ color: initialColor }}
      animate={{ color: animateColor }}
      transition={{ delay, duration }}
    >
      {text}
    </motion.span>
  );
};

export interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export const AnimatedText = ({
  text,
  className = "text-lg text-gray-300 sm:text-xl",
  delay = 0,
  duration = 0.8,
}: AnimatedTextProps) => {
  return (
    <motion.p
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration }}
    >
      {text}
    </motion.p>
  );
};

export interface AnimatedQuoteProps {
  text: string;
  className?: string;
  delay?: number;
}

export const AnimatedQuote = ({
  text,
  className = "italic",
  delay = 0,
}: AnimatedQuoteProps) => {
  return (
    <motion.q
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
    >
      {text}
    </motion.q>
  );
};
