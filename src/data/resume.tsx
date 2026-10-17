import { Github, Linkedin, Mail, UserRound, Layers3 } from "lucide-react";

export const PROFILE = {
  name: "Meyyarivu",
  initials: "M",
  title: "Aspiring AI Engineer | Machine Learning Engineer | Generative AI Developer",
  headline: "Building Intelligent Systems with AI.",
  description:
    "I'm an aspiring AI Engineer passionate about Machine Learning, Deep Learning, Generative AI, Large Language Models, and intelligent automation. I build practical AI applications that solve real-world problems using Python, modern AI frameworks, and full-stack technologies.",
  summary:
    "I'm an entry-level AI Engineer focused on building practical, thoughtful applications with machine learning. Through hands-on projects, I explore model development in Python, Generative AI, and useful applications of large language models. I enjoy turning ideas into working software, learning new tools, and solving problems by iterating on real applications.",
  links: {
    github: "https://github.com/Meyyarivu",
    linkedin: "https://www.linkedin.com/in/meyy-arivu-j-57804828b/",
    email: "meyyarivu409@gmail.com",
    resume: "/resume.pdf",
  },
};

export const SKILL_GROUPS = [
  { title: "AI & Machine Learning", skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Generative AI", "LLMs", "RAG", "Prompt Engineering"] },
  { title: "AI Workflow Automation", skills: ["n8n", "AI Workflow Automation", "Workflow Integration"] },
  { title: "Programming", skills: ["Python", "SQL", "JavaScript", "TypeScript"] },
  { title: "AI/ML Libraries", skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy", "OpenCV"] },
  { title: "LLM & Backend", skills: ["LangChain", "Vector Embeddings", "ChromaDB", "Pinecone", "FastAPI"] },
  { title: "Frontend & Tools", skills: ["Next.js", "React", "Streamlit", "Git", "GitHub", "Docker", "VS Code", "Jupyter Notebook"] },
];

// Compatibility data for the template's existing blog and section components.
export const DATA = {
  ...PROFILE,
  url: "https://example.com", // TODO: Replace with your portfolio domain.
  avatarUrl: "/me.png",
  skills: SKILL_GROUPS.flatMap((group) => group.skills.map((name) => ({ name }))),
  navbar: [
    { href: "/#about", label: "About", icon: UserRound },
    { href: "/#projects", label: "Projects", icon: Layers3 },
    { href: "/#contact", label: "Contact", icon: Mail },
  ],
  contact: {
    email: PROFILE.links.email,
    tel: "",
    social: {
      GitHub: { name: "GitHub", url: PROFILE.links.github, icon: Github, navbar: false },
      LinkedIn: { name: "LinkedIn", url: PROFILE.links.linkedin, icon: Linkedin, navbar: false },
      email: { name: "Email", url: PROFILE.links.email ? `mailto:${PROFILE.links.email}` : "", icon: Mail, navbar: false },
    },
  },
  work: [] as { company: string; title: string; logoUrl: string; start: string; end?: string; description: string }[],
  education: [] as { school: string; href: string; degree: string; logoUrl?: string; start: string; end: string }[],
  projects: [] as { title: string; href: string; description: string; dates: string; technologies: string[]; image: string; video?: string; links: { type: string; href: string; icon: React.ReactNode }[] }[],
  hackathons: [] as { title: string; dates: string; location: string; description: string; image?: string; links: { title: string; href: string; icon: React.ReactNode }[] }[],
};
