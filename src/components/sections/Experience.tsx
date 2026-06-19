import { experience } from "@/data/experience";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <AnimatedSection>
          <SectionHeading title="Experience" />
        </AnimatedSection>

        <div className="relative">
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-border md:left-[11px]"
            aria-hidden="true"
          />

          {experience.map((item, index) => (
            <AnimatedSection key={item.company} delay={index * 0.1}>
              <div className="relative pl-8 md:pl-10">
                <div
                  className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full border-2 border-accent bg-background md:h-4 md:w-4"
                  aria-hidden="true"
                />

                <div className="rounded-xl border border-border bg-card p-6 md:p-8">
                  <h3 className="text-lg font-semibold text-foreground md:text-xl">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {item.company}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {item.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-start gap-2.5 text-sm text-muted md:text-base"
                      >
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
