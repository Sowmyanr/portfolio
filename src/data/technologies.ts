export interface TechCategory {
  name: string;
  items: string[];
}

export const technologies: TechCategory[] = [
  {
    name: "Languages",
    items: ["Python", "Java", "JavaScript", "SQL"],
  },
  {
    name: "Backend",
    items: ["FastAPI", "Node.js", "REST APIs"],
  },
  {
    name: "Cloud",
    items: ["AWS", "Lambda", "S3", "DynamoDB", "SageMaker"],
  },
  {
    name: "Data",
    items: ["Pandas", "NumPy", "ETL"],
  },
  {
    name: "Machine Learning",
    items: ["TensorFlow", "Recommendation Systems"],
  },
  {
    name: "Frontend",
    items: ["React"],
  },
  {
    name: "Git & Tools",
    items: ["Git", "GitHub"],
  },
];
