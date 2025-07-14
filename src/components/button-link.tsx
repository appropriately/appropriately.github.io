import { Link, type LinkProps } from "@tanstack/react-router";
import { type ButtonHTMLAttributes } from "react";
import MotionComponent from "./motion-component";

export default function ButtonLink({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & LinkProps) {
  return (
    <MotionComponent
      as={Link}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={[
        "layer px-4 py-2 text-zinc-200 hover:text-white transition-colors",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
