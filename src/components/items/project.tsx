import { Project } from "@/types";
import ButtonAnchor from "../button-anchor";
import Icon from "../icon";
import { PlayModal } from "./play-modal";

export function ProjectItem({ project }: { project: Project }) {
  const { liveUrl, repoUrl, videoUrl, skills } = project;
  return (
    <>
      <div className="mt-3">
        {skills.map((skill, index) => (
          <span key={skill} className="inline-block">
            {skill}
            {index < skills.length - 1 && (
              <span className="text-orange-400 mx-2">•</span>
            )}
          </span>
        ))}
      </div>

      {(liveUrl || repoUrl) && (
        <div className="flex flex-row gap-3 mt-4 ">
          {liveUrl && (
            <ButtonAnchor
              href={liveUrl}
              target="_blank"
              className="flex items-center"
            >
              <Icon icon="globe" className="mr-2" />
              Live Site
            </ButtonAnchor>
          )}
          {videoUrl && <PlayModal videoUrl={videoUrl} />}
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
