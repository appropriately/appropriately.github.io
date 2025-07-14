import { motion, type HTMLMotionProps } from "motion/react";
import { type ButtonHTMLAttributes } from "react";

export default function Button({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & HTMLMotionProps<"button">) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={[
        "layer px-4 py-2 text-zinc-200 hover:text-white transition-colors cursor-pointer",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </motion.button>
  );
}
