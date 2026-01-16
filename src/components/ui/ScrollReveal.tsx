import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef, memo, useMemo } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

// Pre-defined variants for better performance
const revealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

/**
 * Reusable scroll-triggered animation component
 * Reveals content with fade and slide on scroll - memoized for performance
 */
export const ScrollReveal = memo(function ScrollReveal({ children, delay = 0, className }: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const transition = useMemo(() => ({
    duration: 0.4,
    delay,
    ease: 'easeOut' as const
  }), [delay]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={revealVariants}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
});
