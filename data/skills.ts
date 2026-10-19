import type { ComponentType } from "react";
import {
  SiC,
  SiDocker,
  SiFastapi,
  SiGit,
  SiGraphql,
  SiLinux,
  SiMysql,
  SiNextdotjs,
  SiOpenjdk,
  SiPython,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Binary, Bot, Brain, DatabaseZap, Network } from "lucide-react";
import { TbApi } from "react-icons/tb";

export type SkillCategory =
  | "Programming"
  | "Frontend"
  | "Backend"
  | "API"
  | "AI"
  | "Data"
  | "Developer Tools"
  | "Operating Systems"
  | "Databases"
  | "DevOps"
  | "Architecture"
  | "Computer Science";

export interface Skill {
  id: string;
  name: string;
  percent: number;
  category: SkillCategory;
  Icon: ComponentType<{ className?: string }>;
  iconColor: string;
  /** Shown on the default "All" tab so the section fits one screen.
      Remaining skills reveal when their category pill is clicked. */
  featured?: boolean;
}

export const SKILLS: Skill[] = [
  { id: "python", name: "Python", percent: 90, category: "Programming", Icon: SiPython, iconColor: "#3776AB", featured: true },
  { id: "nextjs", name: "Next.js", percent: 75, category: "Frontend", Icon: SiNextdotjs, iconColor: "#ffffff", featured: true },
  { id: "typescript", name: "TypeScript", percent: 75, category: "Programming", Icon: SiTypescript, iconColor: "#3178C6", featured: true },
  { id: "react", name: "React", percent: 70, category: "Frontend", Icon: SiReact, iconColor: "#61DAFB", featured: true },
  { id: "tailwind", name: "Tailwind CSS", percent: 80, category: "Frontend", Icon: SiTailwindcss, iconColor: "#38BDF8", featured: true },
  { id: "fastapi", name: "FastAPI", percent: 90, category: "Backend", Icon: SiFastapi, iconColor: "#009688", featured: true },
  { id: "restapi", name: "RestAPI", percent: 80, category: "API", Icon: TbApi, iconColor: "#38BDF8" },
  { id: "graphql", name: "GraphQL", percent: 60, category: "API", Icon: SiGraphql, iconColor: "#E535AB" },
  { id: "ai", name: "Artificial Intelligence", percent: 80, category: "AI", Icon: Brain, iconColor: "#c084fc" },
  { id: "ml", name: "Machine Learning", percent: 85, category: "AI", Icon: Bot, iconColor: "#a78bfa", featured: true },
  { id: "datascience", name: "Data Science", percent: 80, category: "Data", Icon: DatabaseZap, iconColor: "#67e8f9" },
  { id: "git", name: "Git", percent: 95, category: "Developer Tools", Icon: SiGit, iconColor: "#F05032", featured: true },
  { id: "linux", name: "Linux", percent: 90, category: "Operating Systems", Icon: SiLinux, iconColor: "#FCC624" },
  { id: "mysql", name: "MySQL", percent: 75, category: "Databases", Icon: SiMysql, iconColor: "#4479A1" },
  { id: "redis", name: "Redis", percent: 80, category: "Databases", Icon: SiRedis, iconColor: "#DC382D" },
  { id: "docker", name: "Docker", percent: 75, category: "DevOps", Icon: SiDocker, iconColor: "#2496ED" },
  { id: "c", name: "C", percent: 75, category: "Programming", Icon: SiC, iconColor: "#A8B9CC" },
  { id: "systemdesign", name: "System Design", percent: 60, category: "Architecture", Icon: Network, iconColor: "#818cf8" },
  { id: "dsa", name: "DSA", percent: 75, category: "Computer Science", Icon: Binary, iconColor: "#a78bfa" },
  { id: "java", name: "Java", percent: 50, category: "Programming", Icon: SiOpenjdk, iconColor: "#ED8B00" },
];

export const SKILL_FILTERS: { label: string; value: SkillCategory | "All" }[] = [
  { label: "All", value: "All" },
  { label: "Programming", value: "Programming" },
  { label: "Frontend", value: "Frontend" },
  { label: "Backend", value: "Backend" },
  { label: "API", value: "API" },
  { label: "AI", value: "AI" },
  { label: "Data", value: "Data" },
  { label: "Developer Tools", value: "Developer Tools" },
  { label: "Operating Systems", value: "Operating Systems" },
  { label: "Databases", value: "Databases" },
  { label: "DevOps", value: "DevOps" },
  { label: "Architecture", value: "Architecture" },
  { label: "Computer Science", value: "Computer Science" },
];
