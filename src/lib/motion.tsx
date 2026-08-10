import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import type { CSSProperties, ReactNode } from "react";
import type { Variants } from "framer-motion";

export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.45, ease: EASE },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: EASE },
  },
};

export const staggerParent: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const springItem: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 130, damping: 18 },
  },
};

export const viewportOnce = { once: true, amount: 0.15 };

export const MotionLink = motion.create(Link);

type RevealProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  y?: number;
  amount?: number;
  delay?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  style,
  y = 24,
  amount = 0.15,
  delay = 0,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.55, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

type RevealSectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  style?: CSSProperties;
  y?: number;
  amount?: number;
  delay?: number;
};

export function RevealSection({
  children,
  id,
  className,
  style,
  y = 24,
  amount = 0.1,
  delay = 0,
}: RevealSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </motion.section>
  );
}
