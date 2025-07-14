import { motion, type HTMLMotionProps } from "motion/react";

export default function ButtonAnchor({
  children,
  className,
  ...props
}: HTMLMotionProps<"a">) {
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={[
        "layer px-4 py-2 text-zinc-200 hover:text-white transition-colors",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </motion.a>
  );
}
