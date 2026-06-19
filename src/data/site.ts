export const siteConfig = {
  name: "Sowmya N R",
  title: "Software Engineer",
  tagline: "Data Engineering • Cloud • AI",
  description:
    "I build cloud-native applications, scalable backend systems, automation pipelines and machine learning solutions.",
  about: [
    "Computer Science Engineering student with experience in backend development, cloud computing, data engineering and machine learning.",
    "Focused on building scalable systems that solve practical problems through automation, cloud technologies and intelligent applications.",
  ],
  email: "sowmya130302@gmail.com",
  github: "https://github.com/Sowmyanr",
  linkedin: "https://www.linkedin.com/in/sowmya-n-r-b8b388257",
  resumeUrl: "/resume.pdf",
  url: "https://sowmyanr.dev",
  location: "Bangalore, India",
  openToOpportunities: true,
  preferredRoles: [
    "Software Engineer",
    "Cloud Engineer",
    "Data Engineer",
    "AI/ML Engineer",
  ],
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: "/resume.pdf", download: true },
] as const;
