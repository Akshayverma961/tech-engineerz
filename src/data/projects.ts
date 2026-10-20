
import type { LucideIcon } from "lucide-react";
import { Bot, Code2, Smartphone } from "lucide-react";

export type ProjectType = "website" | "dashboard" | "mobile";

export type ProjectStatus = "concept" | "in-progress" | "live";

export type Project = {
  number: string;
  slug: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  type: ProjectType;
  icon: LucideIcon;
  accent: string;
  label: string;
  image: string | null;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  status: ProjectStatus;
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "nexus-digital",
    category: "WEB DEVELOPMENT",
    title: "Nexus Digital",
    description:
      "A modern digital studio concept built around bold typography, clear messaging, and a polished user experience.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    type: "website",
    icon: Code2,
    accent: "from-cyan-400/20 via-blue-500/10 to-transparent",
    label: "Website concept",

    image: null,
    liveUrl: "",
    githubUrl: "",
    
    // image: "/images/nexus-digital.png",
    // liveUrl: "https://your-live-demo-url.com",
    // githubUrl: "https://github.com/your-username/nexus-digital",

    featured: true,
    status: "concept",
  },
  {
    number: "02",
    slug: "flowpilot-ai",
    category: "AI & AUTOMATION",
    title: "FlowPilot AI",
    description:
      "An AI workflow dashboard concept bringing tasks, intelligent assistants, and business processes together.",
    tags: ["AI", "Automation", "Dashboard UI"],
    type: "dashboard",
    icon: Bot,
    accent: "from-violet-500/20 via-blue-500/10 to-transparent",
    label: "Dashboard concept",
    image: null,
    liveUrl: "",
    githubUrl: "",
    featured: true,
    status: "concept",
  },
  {
    number: "03",
    slug: "orbit-mobile",
    category: "UI/UX DESIGN",
    title: "Orbit Mobile",
    description:
      "A mobile product concept focused on intuitive navigation, thoughtful interactions, and a consistent design system.",
    tags: ["Figma", "UI/UX", "Responsive"],
    type: "mobile",
    icon: Smartphone,
    accent: "from-sky-400/20 via-cyan-500/10 to-transparent",
    label: "Mobile app concept",

    image: null,
    liveUrl: "",
    githubUrl: "",

    // image: "/images/nexus-digital.png",
    // liveUrl: "https://your-live-demo-url.com",
    // githubUrl: "https://github.com/your-username/nexus-digital",

    featured: true,
    status: "concept",
  },
];
