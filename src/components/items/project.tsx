import { Project } from "@/types";
import ButtonAnchor from "../button-anchor";
import Icon from "../icon";

export function ProjectItem({ project }: { project: Project }) {
  const { liveUrl, repoUrl, skills } = project;
  return (
    <>
      <ul className="list-disc flex flex-row flex-wrap gap-x-2 gap-y-1 mt-3 !pl-0">
        {skills.map((skill, index) => (
          <li key={skill} className="flex flex-row gap-x-2 gap-y-1">
            {skill}
            {index < skills.length - 1 && (
              <span className="text-orange-400">•</span>
            )}
          </li>
        ))}
      </ul>

      {(liveUrl || repoUrl) && (
        <div className="flex flex-row gap-3 mt-4 ">
          {liveUrl && (
            <ButtonAnchor
              href={liveUrl}
              target="_blank"
              className="flex items-center"
            >
              <Icon icon="play" className="mr-2" />
              Live Site
            </ButtonAnchor>
          )}
          {repoUrl && (
            <ButtonAnchor
              href={repoUrl}
              target="_blank"
              className="flex items-center"
            >
              <Icon icon="github" className="mr-2" />
              View Code
            </ButtonAnchor>
          )}
        </div>
      )}
    </>
  );
}
