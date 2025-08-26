"use client";

import { useRef, useEffect } from "react";
import { AnimatePresence, motion, Variants, useInView, useAnimation } from "framer-motion";

import { cn } from "@/lib/utils";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

export default function GradualSpacing({
  text,
  duration = 0.5,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
}: GradualSpacingProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.set("hidden"); // Reset to initial state
      controls.start("visible"); // Start the animation
    } else {
      controls.stop();
    }
  }, [inView, controls]);

  return (
    <div ref={ref} className="flex flex-wrap items-start justify-start">
      <AnimatePresence>
        {text.split(" ").map((word, i) => (
          <motion.h1
            key={i}
            initial="hidden"
            animate={controls}
            exit="hidden"
            variants={framerProps}
            transition={{ duration, delay: i * delayMultiple }}
            className={cn("drop-shadow-sm", className)}
          >
            {word.split("").map((char, j) => (
              <span key={j}>
                {char === " " ? <span>&nbsp;</span> : char}
              </span>
            ))}
            &nbsp;
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
}