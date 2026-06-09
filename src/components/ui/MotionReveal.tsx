import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  /** Verzögerung in Sekunden (für Stagger: 0.12 pro Element). */
  delay?: number;
  className?: string;
};

/**
 * Entrance-Animation laut Plan: Fade + Rise 24px, 600–900ms, ease-out cubic.
 * React-Island (client:visible). Respektiert prefers-reduced-motion.
 */
export default function MotionReveal({ children, delay = 0, className }: Props) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.75, ease: [0.33, 1, 0.68, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
