import { motion } from "motion/react";
import ButtonAnchor from "./button-anchor";
import ButtonLink from "./button-link";
import Icon from "./icon";

export default function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40"
    >
      <div className="layer p-2">
        <div className="flex space-x-3">
          <ButtonLink
            to="/"
            onClick={() => {
              const scrollContainer = document.querySelector("#snap-container");
              if (scrollContainer)
                scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Home
          </ButtonLink>

          <ButtonAnchor
            href="https://github.com/Appropriately"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <Icon icon="github" className="mr-2" />
            GitHub
          </ButtonAnchor>

          <ButtonAnchor
            href="https://www.linkedin.com/in/sean-alan-lewis/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <Icon icon="linkedin" className="mr-2" />
            LinkedIn
          </ButtonAnchor>
        </div>
      </div>
    </motion.nav>
  );
}
