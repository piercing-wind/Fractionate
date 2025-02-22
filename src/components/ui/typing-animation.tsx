"use client";
import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
}

export default function TypingAnimation({
  text,
  duration = 20, // Increased typing speed
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      setDisplayedText("");
      setI(0);
    }
  }, [isInView]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const typingEffect = () => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        setI((prev) => prev + 1);
        timeoutId = setTimeout(typingEffect, duration);
      }
    };

    if (isInView) {
      timeoutId = setTimeout(typingEffect, duration);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [i, text, duration, isInView]);

  return (
    <h2
      ref={ref}
      className={cn(
        "",
        className,
      )}
    >
      {displayedText}
    </h2>
  );
}