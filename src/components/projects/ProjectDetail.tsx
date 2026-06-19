import { ExternalLink } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { ArchitectureDiagram } from "@/components/ui/ArchitectureDiagram";
import { Button } from "@/components/ui/Button";
import { GitHubIcon } from "@/components/ui/SocialIcons";

interface ProjectDetailProps {
  project: Project;
}

function DetailSection({
  title,
  id,
  children,
}: {
  title: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-20 border-b border-border py-10 last:border-b-0 md:py-12"
    >
      <h2 className="text-lg font-semibold text-foreground md:text-xl">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-sm leading-relaxed text-muted md:text-base"
        >
          <span
            className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent"
            aria-hidden="true"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <article>
      <div className="border-b border-border bg-card/50">
        <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded text-sm text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            ← Back to Projects
          </Link>

          <span className="mt-8 inline-block rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted">
            {project.category}
          </span>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {project.name}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            {project.summary}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 pb-20">
        <DetailSection title="Problem">
          <p className="text-sm leading-relaxed text-muted md:text-base">
            {project.problem}
          </p>
        </DetailSection>

        <DetailSection title="Solution">
          <p className="text-sm leading-relaxed text-muted md:text-base">
            {project.solution}
          </p>
        </DetailSection>

        <DetailSection title="Architecture" id="architecture">
          <ArchitectureDiagram steps={project.architecture} />
        </DetailSection>

        <DetailSection title="Technologies">
          <ul className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Button href={project.githubUrl} external variant="secondary">
              <GitHubIcon className="h-4 w-4" />
              GitHub Repository
            </Button>
          </div>
        </DetailSection>

        <DetailSection title="Challenges">
          <BulletList items={project.challenges} />
        </DetailSection>

        <DetailSection title="Results">
          <BulletList items={project.results} />
          <div className="mt-6 rounded-lg border border-accent/20 bg-accent/5 px-4 py-3">
            <p className="text-sm font-medium text-accent">{project.impact}</p>
          </div>
        </DetailSection>

        <DetailSection title="What I Learned">
          <BulletList items={project.learned} />
        </DetailSection>

        <DetailSection title="Future Improvements">
          <BulletList items={project.futureImprovements} />
        </DetailSection>

        <DetailSection title="GitHub Repository">
          <div className="flex flex-wrap gap-2">
            <Button href={project.githubUrl} external variant="primary">
              <GitHubIcon className="h-4 w-4" />
              GitHub Repository
            </Button>
            {project.liveDemoUrl && (
              <Button href={project.liveDemoUrl} external variant="secondary">
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Live Demo
              </Button>
            )}
          </div>
        </DetailSection>
      </div>
    </article>
  );
}
