import { siteConfig } from "@/data/site";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <AnimatedSection>
          <SectionHeading title="About" />
          <div className="max-w-3xl space-y-4">
            {siteConfig.about.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-base leading-relaxed text-muted md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
