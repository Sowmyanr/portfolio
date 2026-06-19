export interface Project {
  slug: string;
  name: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  keyTechnologies: string[];
  technologies: string[];
  impact: string;
  githubUrl: string;
  liveDemoUrl?: string;
  architecture: string[];
  challenges: string[];
  results: string[];
  learned: string[];
  futureImprovements: string[];
}

export const projects: Project[] = [
  {
    slug: "serverless-ai-diagnostic-pipeline",
    name: "Serverless AI Diagnostic Pipeline",
    category: "Cloud + AI",
    summary:
      "Cloud-native machine learning inference platform built on AWS.",
    problem:
      "Deploy image classification models without managing infrastructure.",
    solution:
      "Designed a serverless architecture using API Gateway, Lambda, SageMaker, S3 and DynamoDB.",
    keyTechnologies: [
      "AWS Lambda",
      "SageMaker",
      "DynamoDB",
      "API Gateway",
    ],
    technologies: [
      "AWS Lambda",
      "API Gateway",
      "SageMaker",
      "S3",
      "DynamoDB",
    ],
    impact: "Reduced inference latency by 30%.",
    githubUrl:
      "https://github.com/Sowmyanr/ai-log-classifier",
    architecture: [
      "User",
      "API Gateway",
      "Lambda",
      "SageMaker",
      "Prediction",
      "DynamoDB",
    ],
    challenges: [
      "Managing cold starts on Lambda while keeping latency acceptable for real-time inference.",
      "Designing an efficient request flow between API Gateway, Lambda, and SageMaker endpoints.",
      "Storing and retrieving prediction metadata at scale without over-provisioning database capacity.",
    ],
    results: [
      "Reduced inference latency by 30% through optimized request routing and endpoint configuration.",
      "Eliminated manual server provisioning and maintenance entirely.",
      "Achieved automatic scaling from zero to peak traffic without intervention.",
    ],
    learned: [
      "Serverless architecture patterns and when to use them over traditional hosting",
      "AWS IAM roles and least-privilege access between services",
      "Cloud security practices for ML inference endpoints",
      "ML model deployment with SageMaker and serverless orchestration",
      "Backend scalability through event-driven, pay-per-use design",
    ],
    futureImprovements: [
      "Implement AWS Step Functions for multi-stage orchestration",
      "Add CloudWatch monitoring with automated alerting",
      "Introduce CI/CD pipelines for model and infrastructure updates",
      "Improve scalability with provisioned concurrency for latency-sensitive paths",
    ],
  },
  {
    slug: "user-analytics-recommendation-platform",
    name: "User Analytics & Recommendation Platform",
    category: "Full Stack + Data Engineering + Machine Learning",
    summary:
      "Built a full-stack analytics and recommendation platform that tracks user behavior, processes engagement data, visualizes insights through dashboards, and generates personalized recommendations.",
    problem:
      "Organizations need better visibility into user engagement and personalized recommendations to improve user experience.",
    solution:
      "Developed a full-stack platform with frontend dashboards, backend APIs, analytics processing pipelines, and recommendation algorithms.",
    keyTechnologies: [
      "React.js",
      "Python",
      "FastAPI",
      "Collaborative Filtering",
    ],
    technologies: [
      "React.js",
      "Python",
      "FastAPI",
      "Pandas",
      "NumPy",
      "Collaborative Filtering",
      "Genetic Algorithms",
      "Analytics Dashboards",
      "Data Processing Pipelines",
    ],
    impact: "Delivered an end-to-end analytics and recommendation platform that transformed raw user activity into actionable insights and personalized recommendations.",
    githubUrl:
      "https://github.com/Sowmyanr/user-analytics-and-recommendation-system",
    architecture: [
      "User Events",
      "Data Ingestion",
      "ETL Pipeline",
      "Feature Store",
      "Recommendation Engine",
      "Personalized Output",
    ],
    challenges: [
      "Handling sparse user-item interaction matrices common in early-stage platforms.",
      "Balancing recommendation diversity with relevance to avoid filter bubbles.",
      "Processing behavioral data from multiple sources into a unified feature representation.",
    ],
    results: [
      "Delivered an end-to-end analytics and recommendation platform.",
      "Enabled data-driven understanding of user engagement patterns.",
      "Created a reusable pipeline architecture for future model experimentation.",
    ],
    learned: [
      "Full-stack application architecture",
      "Frontend-backend integration",
      "Data analytics workflows",
      "Recommendation systems",
      "API design",
      "User behavior analysis",
    ],
    futureImprovements: [
      "Migrate feature storage to a dedicated data warehouse",
      "Add A/B testing infrastructure for recommendation variants",
      "Implement real-time streaming for immediate personalization updates",
      "Introduce automated data quality checks in the ETL pipeline",
    ],
  },
  {
    slug: "cyberguard-browser-extension",
    name: "CyberGuard Browser Extension",
    category: "Machine Learning",
    summary: "Real-time browser security tool for malicious URL detection.",
    problem: "Users are exposed to phishing and malicious websites.",
    solution:
      "Developed a TensorFlow-based classification system to analyze URLs and detect threats.",
    keyTechnologies: [
      "TensorFlow",
      "Python",
      "Machine Learning",
      "Browser Extension",
    ],
    technologies: [
      "TensorFlow",
      "Python",
      "Machine Learning",
      "Browser Extension",
    ],
    impact: "Achieved 92% classification accuracy.",
    githubUrl: "https://github.com/Sowmyanr/cybergaurd_nammasuraksha",
    architecture: [
      "Browser",
      "Extension",
      "URL Extractor",
      "Feature Analysis",
      "TensorFlow Model",
      "Threat Alert",
    ],
    challenges: [
      "Extracting meaningful features from URLs without slowing down the browsing experience.",
      "Achieving high classification accuracy while minimizing false positives that erode user trust.",
      "Integrating a ML model into a lightweight browser extension with strict performance constraints.",
    ],
    results: [
      "Achieved 92% classification accuracy on the evaluation dataset.",
      "Provided real-time threat detection with minimal impact on page load times.",
      "Delivered a practical security tool accessible to non-technical users.",
    ],
    learned: [
      "URL feature engineering for phishing and malware detection",
      "Training and evaluating TensorFlow classification models",
      "Building performant browser extensions with ML inference constraints",
      "Balancing model accuracy against false positive rates in security tools",
      "Integrating ML models into client-side applications",
    ],
    futureImprovements: [
      "Add ensemble models for improved detection accuracy",
      "Implement a feedback loop for user-reported false positives",
      "Integrate periodic model retraining with updated threat datasets",
      "Add automated testing for model regression on new URL patterns",
    ],
  },

];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
