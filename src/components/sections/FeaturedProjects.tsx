import { projects } from "@/data/projects";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function FeaturedProjects() {
  return (
    <section id="projects" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <AnimatedSection>
          <SectionHeading
            title="Featured Projects"
            subtitle="Technical case studies in cloud, data engineering, and machine learning."
          />
        </AnimatedSection>

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.slug} delay={index * 0.06}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
