export interface Repository {
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string;
}

export const featuredRepositories: Repository[] = [
  {
    name: "serverless-ai-diagnostic-pipeline",
    description:
      "AWS serverless ML inference platform with API Gateway, Lambda, and SageMaker.",
    technologies: ["AWS Lambda", "SageMaker", "DynamoDB", "Python"],
    githubUrl: "https://github.com/Sowmyanr/ai-log-classifier",
  },
  {
    name: "user-analytics-recommendation-platform",
    description:
      "Full-stack analytics and recommendation platform with dashboards, APIs, and ML-powered personalization.",
    technologies: ["React.js", "Python", "FastAPI", "Machine Learning"],
    githubUrl:
      "https://github.com/Sowmyanr/user-analytics-and-recommendation-system",
  },
  {
    name: "cyberguard-browser-extension",
    description:
      "TensorFlow-based browser extension for real-time malicious URL detection.",
    technologies: ["TensorFlow", "Python", "JavaScript"],
    githubUrl: "https://github.com/Sowmyanr/cybergaurd_nammasuraksha",
  },
];
