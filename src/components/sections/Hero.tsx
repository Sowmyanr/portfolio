import { ArrowRight, Download } from "lucide-react";
import { siteConfig } from "@/data/site";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 grid-background opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-32">
        <AnimatedSection>
          <p className="mb-4 text-sm font-medium text-accent">
            {siteConfig.tagline}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mt-3 text-xl text-muted md:text-2xl">
            {siteConfig.title}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {siteConfig.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="#projects" variant="primary">
              View Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href={siteConfig.resumeUrl} download variant="secondary">
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </Button>
            <Button href={siteConfig.github} external variant="secondary">
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </Button>
            <Button href={siteConfig.linkedin} external variant="secondary">
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
