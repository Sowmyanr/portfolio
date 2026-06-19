import { ExternalLink, GitBranch } from "lucide-react";
import type { Project } from "@/data/projects";
import { ArchitectureDiagram } from "@/components/ui/ArchitectureDiagram";
import { Button } from "@/components/ui/Button";
import { GitHubIcon } from "@/components/ui/SocialIcons";

interface ProjectCardProps {
  project: Project;
}

function CaseStudyField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
        {label}
      </h4>
      <p className="mt-1.5 text-sm leading-relaxed text-foreground md:text-base">
        {children}
      </p>
    </div>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col rounded-xl border border-border bg-card transition-colors duration-200 hover:border-accent/30">
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <span className="inline-block w-fit rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted">
          {project.category}
        </span>

        <h3 className="mt-3 text-xl font-semibold text-foreground md:text-2xl">
          {project.name}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
          {project.summary}
        </p>

        <div className="mt-6 space-y-4">
          <CaseStudyField label="Problem">{project.problem}</CaseStudyField>
          <CaseStudyField label="Solution">{project.solution}</CaseStudyField>
        </div>

        <div className="mt-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
            Architecture
          </h4>
          <div className="mt-3">
            <ArchitectureDiagram steps={project.architecture} compact />
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
            Technologies
          </h4>
          <ul
            className="mt-2 flex flex-wrap gap-2"
            aria-label="Technologies used"
          >
            {project.keyTechnologies.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
            Results
          </h4>
          <p className="mt-1.5 text-sm font-medium text-accent">
            {project.impact}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2 pt-2">
          <Button href={project.githubUrl} external variant="secondary">
            <GitHubIcon className="h-4 w-4" />
            GitHub Repository
          </Button>
          <Button href={`/projects/${project.slug}`} variant="primary">
            View Case Study
          </Button>
          <Button
            href={`/projects/${project.slug}#architecture`}
            variant="secondary"
          >
            <GitBranch className="h-4 w-4" aria-hidden="true" />
            Architecture
          </Button>
          {project.liveDemoUrl && (
            <Button href={project.liveDemoUrl} external variant="secondary">
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
