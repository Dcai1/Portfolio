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

export interface AnimatedLinkProps {
  href: string;
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export const AnimatedLink = ({
  href,
  text,
  className = "font-semibold underline transition hover:no-underline transition-300 text-fulvous underline-offset-8",
  delay = 0,
  duration = 0.8,
}: AnimatedLinkProps) => {
  return (
    <motion.a
      href={href}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration }}
      rel="noopener noreferrer"
    >
      {text}
    </motion.a>
  );
};

export interface AnimatedListProps {
  title: string;
  items: string[];
  className?: string;
  hoverSize?: number;
  tapSize?: number;
}

export const AnimatedList = ({
  title = "Undefined",
  items,
  className = "text-2xl font-semibold text-fulvous",
  hoverSize = 1.05,
  tapSize = 0.95,
}: AnimatedListProps) => {
  return (
    <motion.div
      className="relative flex items-center justify-center w-full max-w-sm min-w-[12rem] mx-auto my-auto overflow-hidden border rounded-3xl shadow-xl max-h-80 min-h-[14rem] bg-night/70 border-fulvous hover:shadow-fulvous"
      initial="idle"
      whileHover="hover"
      whileTap="tap"
      variants={{
        idle: { scale: 1 },
        hover: { scale: hoverSize },
        tap: { scale: tapSize },
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div className="absolute inset-0 flex items-center justify-center px-4">
        <motion.h2
          className={`text-center capitalize ${className}`}
          variants={{
            idle: { opacity: 1 },
            hover: { opacity: 0 },
          }}
          transition={{ duration: 0.25 }}
        >
          {title}
        </motion.h2>
      </motion.div>

      <motion.ul
        className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center"
        variants={{
          idle: { opacity: 0 },
          hover: {
            opacity: 1,
            transition: { delay: 0.25, staggerChildren: 0.05 },
          },
        }}
      >
        {items.map((item, index) =>
          item ? (
            <motion.li
              key={index}
              className="w-full text-base font-medium text-gray-100 sm:text-md"
              variants={{
                idle: { opacity: 0, y: 10 },
                hover: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.2 }}
            >
              {item}
            </motion.li>
          ) : null,
        )}
      </motion.ul>
    </motion.div>
  );
};
