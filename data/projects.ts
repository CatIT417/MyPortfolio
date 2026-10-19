export type ProjectCategory = "Web Apps" | "AI / ML" | "Tools" | "Open Source";

export interface Project {
  id: string;
  name: string;
  oneliner: string;
  liveUrl: string;
  githubUrl: string;
  category: ProjectCategory;
  tags: [string, string, string];
  image: string;
  featured?: boolean;
}

// Order: HakiAPI featured first, then Docs, Analyzer, ShieldSense, Resume, Weather
export const PROJECTS: Project[] = [
  {
    id: "hakiapi",
    name: "HakiAPI",
    oneliner:
      "Production-grade Python API SDK framework — auth, retries, circuit breaker, pagination, sync + async.",
    liveUrl: "https://pypi.org/project/hakiapi/",
    githubUrl: "https://github.com/Gugilla-Aakash/hakiapi",
    category: "Open Source",
    tags: ["Python SDK", "API Client", "Async"],
    image: "/project-hakiapi.png",
    featured: true,
  },
  {
    id: "hakiapi-docs",
    name: "HakiAPI Docs",
    oneliner: "Documentation site for the HakiAPI Python SDK framework.",
    liveUrl: "https://hakiapi-docs.hakiapi.workers.dev/",
    githubUrl: "https://github.com/Gugilla-Aakash/hakiapi-docs",
    category: "Tools",
    tags: ["Documentation", "Web App", "Dev Tools"],
    image: "/project-hakiapi-docs.png",
  },
  {
    id: "github-analyzer",
    name: "AI GitHub Profile Analyzer",
    oneliner:
      "AI-powered GitHub developer intelligence — audits, scores, and lets you chat about any profile.",
    liveUrl: "https://ai-git-hub-profile-analyzer.vercel.app/",
    githubUrl: "https://github.com/Gugilla-Aakash/AI-GitHub-Profile-Analyzer",
    category: "AI / ML",
    tags: ["Full-Stack", "AI Chatbot", "Dev Tools"],
    image: "/project-github-analyzer.png",
  },
  {
    id: "shieldsense",
    name: "ShieldSense",
    oneliner:
      "AI-powered threat scanner — paste a URL, file, email or text and get risk scoring with plain-English explanations.",
    liveUrl: "https://shieldsense-pink.vercel.app/",
    githubUrl: "https://github.com/Gugilla-Aakash/shieldsense",
    category: "AI / ML",
    tags: ["Cybersecurity", "AI Chatbot", "Threat Intel"],
    image: "/project-shieldsense.png",
  },
  {
    id: "resume-matcher",
    name: "Resume Matcher",
    oneliner:
      "NLP-powered resume-to-job matcher with TF-IDF similarity scoring and skill extraction.",
    liveUrl: "https://resume-screening-ml-xnnbsouaxd4onthir8k27g.streamlit.app/",
    githubUrl: "https://github.com/Gugilla-Aakash/resume-screening-ml",
    category: "AI / ML",
    tags: ["NLP", "Machine Learning", "Web App"],
    image: "/project-resume.png",
  },
  {
    id: "weather",
    name: "LiveWeatherWatch",
    oneliner:
      "Security-first weather dashboard with a serverless API proxy and real-time AQI data.",
    liveUrl: "https://weather-dashboard-two-iota.vercel.app/",
    githubUrl: "https://github.com/Gugilla-Aakash/weather-dashboard",
    category: "Web Apps",
    tags: ["Web App", "Vanilla JS", "Serverless"],
    image: "/project-weather.png",
  },
];

export const FILTERS: { label: string; value: ProjectCategory | "All" }[] = [
  { label: "All Projects", value: "All" },
  { label: "Web Apps", value: "Web Apps" },
  { label: "AI / ML", value: "AI / ML" },
  { label: "Tools", value: "Tools" },
  { label: "Open Source", value: "Open Source" },
];
