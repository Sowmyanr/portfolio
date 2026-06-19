import { Download, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <AnimatedSection>
          <SectionHeading title="Let's Connect" />

          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  Contact
                </h3>
                <ul className="mt-3 space-y-2">
                  <li>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                    >
                      <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                      {siteConfig.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteConfig.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                    >
                      <GitHubIcon className="h-4 w-4 shrink-0" />
                      GitHub Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteConfig.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                    >
                      <LinkedInIcon className="h-4 w-4 shrink-0" />
                      LinkedIn Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteConfig.resumeUrl}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                    >
                      <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
                      Resume (PDF)
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  Location
                </h3>
                <p className="mt-2 inline-flex items-center gap-2 text-sm text-muted">
                  <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {siteConfig.location}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {siteConfig.openToOpportunities && (
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    Open To Opportunities
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Currently seeking roles where I can build scalable systems
                    and contribute to cloud, data, and AI-focused engineering
                    teams.
                  </p>
                </div>
              )}

              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  Preferred Roles
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {siteConfig.preferredRoles.map((role) => (
                    <li
                      key={role}
                      className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground"
                    >
                      {role}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <Button
                  href={`mailto:${siteConfig.email}`}
                  variant="primary"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Email Me
                </Button>
                <Button href={siteConfig.github} external variant="secondary">
                  <GitHubIcon className="h-4 w-4" />
                  GitHub
                </Button>
                <Button href={siteConfig.resumeUrl} download variant="secondary">
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Resume
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
