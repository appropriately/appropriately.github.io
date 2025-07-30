export interface PortfolioItem {
  id: string;
  title: string;
  subtitle?: string;
  type: "project" | "experience" | "education";
  startDate: Date;
  endDate?: Date;
  ongoing?: boolean;
  mainImage?: string;
  videoUrl?: string;
  shortDescription?: string;
  longDescription?: string;
}

export interface Project extends PortfolioItem {
  type: "project";
  skills: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface Education extends PortfolioItem {
  type: "education";
}

export interface Experience extends PortfolioItem {
  type: "experience";
}
