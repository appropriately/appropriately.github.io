import { motion } from "motion/react";

export default function MotionComponent({
  as,
  children,
  ...props
}: {
  as: React.ElementType;
  children: React.ReactNode;
  [key: string]: unknown;
}) {
  const ChildrenComponent = motion.create(as, {
    forwardMotionProps: true,
  });
  return <ChildrenComponent {...props}>{children}</ChildrenComponent>;
}
