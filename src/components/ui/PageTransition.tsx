import { motion } from 'framer-motion';
import { ReactNode, memo } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

// Optimized transition variants - reduced duration for snappier feel
const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 }
};

const pageTransition = {
  duration: 0.25,
  ease: 'easeOut' as const
};

/**
 * Page transition wrapper for smooth route changes
 * Provides consistent fade and slide animations - memoized for performance
 */
export const PageTransition = memo(function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
});
