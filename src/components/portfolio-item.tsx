import "@/styles/markdown.css";
import { type PortfolioItem, type Project } from "@/types";
import { dateAsMonthYear } from "@/utils/date";
import { getImageUrl } from "@/utils/images";
import { motion } from "framer-motion";
import Markdown from "react-markdown";
import { ProjectItem } from "./items/project";

export default function PortfolioItem({ item }: { item: PortfolioItem }) {
  const {
    title,
    id,
    shortDescription,
    subtitle,
    type,
    startDate,
    endDate,
    mainImage,
    ongoing,
  } = item;

  return (
    <section
      id={id}
      className={`snap-start${
        mainImage ? " min-h-screen" : ""
      } py-25 flex items-center relative`}
    >
      {mainImage && (
        <motion.img
          src={getImageUrl(mainImage)}
          alt={title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 0.5 }}
          className={`w-full h-full object-cover absolute inset-0 z-0`}
        />
      )}

      <div className="container mx-auto px-6 relative z-10">
        <div className="layer p-4 md:max-w-4/5 lg:max-w-3/5">
          <h2 className="!mb-0">{title}</h2>

          {subtitle && <h3 className="text-gray-300">{subtitle}</h3>}

          <hr className="my-2 border-white/30" />

          {/* handle when dates are the same */}
          <p className="text-gray-300">
            {ongoing
              ? `${dateAsMonthYear(startDate)} - Present`
              : endDate
                ? startDate.getTime() === endDate.getTime()
                  ? `${dateAsMonthYear(startDate)}`
                  : `${dateAsMonthYear(startDate)} - ${dateAsMonthYear(endDate)}`
                : `${dateAsMonthYear(startDate)}`}
          </p>

          {shortDescription && (
            <div className="markdown mt-3">
              <Markdown>{shortDescription}</Markdown>
            </div>
          )}

          {type === "project" && <ProjectItem project={item as Project} />}
        </div>
      </div>
    </section>
  );
}
