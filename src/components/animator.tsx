'use client'
import { motion, useInView, Variants } from 'framer-motion';
import React, { useRef, useMemo } from 'react';

interface FadeUpAnimatorProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  duration?: number;
  delay?: number;
  hoverScale?: number;
  hoverFlip?: boolean;
  amount?: number;
  framerProps?: Partial<{
    hidden: { opacity?: number; [key: string]: any };
    visible: { opacity?: number; [key: string]: any };
  }>;
}

const Animator: React.FC<FadeUpAnimatorProps> = ({
  children,
  direction = 'up',
  className,
  duration = 1,
  delay = 0,
  amount = 0.5,
  hoverScale = 1,
  hoverFlip = false,
  framerProps = {
    hidden: { opacity: 0 , transformOrigin : 'center'},
    visible: { opacity: 1, transformOrigin : 'center', transition: { type: 'spring', stiffness: 100, damping: 10 } },
  },
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: amount });

  const directionOffset = useMemo(() => {
    const map = { up: 50, down: -50, left: -50, right: 50 };
    return map[direction];
  }, [direction]);

  const axis = direction === 'up' || direction === 'down' ? 'y' : 'x';

  const variants: Variants = {
    hidden: {
      ...(framerProps.hidden ?? {}),
      opacity: framerProps.hidden?.opacity ?? 0,
      [axis]: framerProps.hidden?.[axis] ?? directionOffset,
    },
    visible: {
      ...(framerProps.visible ?? {}),
      opacity: framerProps.visible?.opacity ?? 1,
      [axis]: framerProps.visible?.[axis] ?? 0,
      transformOrigin: framerProps.hidden?.transformOrigin ?? 'center',
      transition: {
        ...(framerProps.visible?.transition ?? {}),
        duration: framerProps.visible?.transition?.duration ?? duration,
        delay: framerProps.visible?.transition?.delay ?? delay,
        
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
      whileHover={{ scale: hoverScale, 
         scaleX: hoverFlip ? -1 : 1,
         transition: { duration: 0.5, ease: 'easeInOut', stiffness: 100, damping: 10 } 
      }}
      whileTap={{
         scale: hoverScale,
         scaleX: hoverFlip ? -1 : 1,
         transition: { duration: 0.5, ease: 'easeInOut' },
       }}
    >
      {children}
    </motion.div>
  );
};

export default Animator;


interface ZoomAnimatorProps {
   children: React.ReactNode;
   className?: string;
   duration?: number;
   delay?: number;
   amount?: number;
   zoomIn?: boolean;
   initial?: number;
   hoverScale?: number;
   hoverFlip?: boolean;
   final?: number;
   framerProps?: Partial<{
     hidden: { opacity?: number; scale?: number; transformOrigin?: string; [key: string]: any };
     visible: { opacity?: number; scale?: number | number[]; transformOrigin?: string; [key: string]: any };
   }>;
 }
 
 export const ZoomAnimator: React.FC<ZoomAnimatorProps> = ({
   children,
   className,
   duration = 0.7,
   delay = 0,
   amount = 0,
   zoomIn = true,
   initial = 0.8,
   hoverScale = 1,
   hoverFlip = false,
   final = 1,
   framerProps = {
     hidden: { opacity: 0, scale: initial, transformOrigin: 'center' },
     visible: { opacity: 1, scale: final, transformOrigin: 'center', transition: { type: 'tween', ease: 'easeInOut' } },
   },
 }) => {
   const ref = useRef(null);
   const inView = useInView(ref, { once: true, amount });
 
   const variants: Variants = {
     hidden: {
       ...(framerProps.hidden ?? {}),
       opacity: framerProps.hidden?.opacity ?? 0,
       scale: zoomIn ? initial : final,
       transformOrigin: framerProps.hidden?.transformOrigin ?? 'center',
     },
     visible: {
       ...(framerProps.visible ?? {}),
       opacity: framerProps.visible?.opacity ?? 1,
       scale: 1,
       transformOrigin: framerProps.visible?.transformOrigin ?? 'center',
       transition: {
         ...(framerProps.visible?.transition ?? {}),
         duration: framerProps.visible?.transition?.duration ?? duration,
         delay: framerProps.visible?.transition?.delay ?? delay,
         type: framerProps.visible?.transition?.type ?? 'spring',
         ease: framerProps.visible?.transition?.ease ?? 'easeInOut',
       },
     },
   };
 
   return (
     <motion.div
       ref={ref}
       initial="hidden"
       animate={inView ? 'visible' : 'hidden'}
       variants={variants}
       whileHover={{ scale: hoverScale, 
         scaleX: hoverFlip ? -1 : 1,
         transition: { duration: 0.5, ease: 'easeInOut' } 
      }}
      whileTap={{
         scale: hoverScale,
         scaleX: hoverFlip ? -1 : 1,
         transition: { duration: 0.5, ease: 'easeInOut' },
       }}
       className={className}
     >
       {children}
     </motion.div>
   );
 };
 
