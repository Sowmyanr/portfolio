import { technologies } from "@/data/technologies";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <AnimatedSection>
          <SectionHeading title="Skills" />
        </AnimatedSection>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((category, index) => (
            <AnimatedSection key={category.name} delay={index * 0.04}>
              <div className="rounded-xl border border-border bg-card p-5 md:p-6">
                <h3 className="text-sm font-semibold text-foreground">
                  {category.name}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
