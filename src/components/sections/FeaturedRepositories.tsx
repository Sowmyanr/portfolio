import { featuredRepositories } from "@/data/repositories";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { GitHubIcon } from "@/components/ui/SocialIcons";

export function FeaturedRepositories() {
  return (
    <section id="repositories" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <AnimatedSection>
          <SectionHeading
            title="Featured Repositories"
            subtitle="Direct access to source code and implementation details."
          />
        </AnimatedSection>

        <div className="grid gap-4 sm:grid-cols-2">
          {featuredRepositories.map((repo, index) => (
            <AnimatedSection key={repo.name} delay={index * 0.06}>
              <article className="flex h-full flex-col rounded-xl border border-border bg-card p-5 md:p-6">
                <h3 className="break-all font-mono text-sm font-semibold text-foreground">
                  {repo.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {repo.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {repo.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-border bg-background px-2 py-0.5 text-xs font-medium text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <Button href={repo.githubUrl} external variant="secondary">
                    <GitHubIcon className="h-4 w-4" />
                    GitHub
                  </Button>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
