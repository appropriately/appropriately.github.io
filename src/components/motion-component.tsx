import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import type { ReactNode } from "react";

const MotionLink = motion.create(Link, { forwardMotionProps: true });

export default function MotionComponent({
  children,
  ...props
}: {
  children: ReactNode;
  className?: string;
  [key: string]: unknown;
}) {
  return <MotionLink {...props}>{children}</MotionLink>;
}
