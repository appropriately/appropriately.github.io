import portfolioItems from "@/assets/items";
import Button from "@/components/button";
import PortfolioItem from "@/components/portfolio-item";
import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const SKILLS = [
  "Python",
  "GoLang",
  "Typescript",
  "Vue",
  "Node.js",
  "Kubernetes",
];

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="snap-container"
      ref={scrollRef}
      className="snap-y snap-mandatory overflow-y-auto h-screen"
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-zinc-300 z-50 shadow-lg"
        style={{ scaleX, transformOrigin: "0%" }}
      />

      <section
        id="hero"
        className="snap-start min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center text-white z-10"
          >
            <motion.h1
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-bold mb-6"
            >
              Sean Lewis
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-300 mb-4"
            >
              Results-driven technology leader with 8+ years of expertise
            </motion.p>

            <ul className="list-disc flex flex-row flex-wrap gap-x-2 gap-y-1 mt-2 !pl-0 text-gray-300 text-md md:text-lg mb-8 justify-center">
              {SKILLS.map((skill, index) => (
                <li key={skill} className="flex flex-row gap-x-2 gap-y-1">
                  {skill}
                  {index < SKILLS.length - 1 && (
                    <span className="text-orange-400">•</span>
                  )}
                </li>
              ))}
            </ul>

            <Button
              onClick={() => scrollToSection("portfolio")}
              className="text-xl"
            >
              Explore Portfolio
            </Button>
          </motion.div>
        </div>
      </section>

      <section id="portfolio">
        {portfolioItems
          .sort((a, b) => {
            const date1 = a.endDate ?? a.startDate;
            const date2 = b.endDate ?? b.startDate;
            return date2.getTime() - date1.getTime();
          })
          .map((item) => (
            <PortfolioItem key={item.id} item={item} />
          ))}
      </section>
    </div>
  );
}
