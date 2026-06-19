interface ArchitectureDiagramProps {
  steps: string[];
  compact?: boolean;
}

export function ArchitectureDiagram({
  steps,
  compact = false,
}: ArchitectureDiagramProps) {
  if (compact) {
    return (
      <div
        className="rounded-lg border border-border bg-background px-4 py-3"
        role="img"
        aria-label={`Architecture flow: ${steps.join(" to ")}`}
      >
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {steps.map((step, index) => (
            <span key={step} className="inline-flex items-center gap-2">
              <span className="rounded-md border border-border bg-card px-2.5 py-1 text-xs font-medium text-foreground">
                {step}
              </span>
              {index < steps.length - 1 && (
                <span className="text-xs text-muted" aria-hidden="true">
                  →
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="rounded-xl border border-border bg-card p-6 md:p-8"
      role="img"
      aria-label={`Architecture flow: ${steps.join(" to ")}`}
    >
      <div className="flex flex-col items-center gap-0">
        {steps.map((step, index) => (
          <div key={step} className="flex w-full max-w-xs flex-col items-center">
            <div className="w-full rounded-lg border border-border bg-background px-4 py-3 text-center text-sm font-medium text-foreground">
              {step}
            </div>
            {index < steps.length - 1 && (
              <div className="flex flex-col items-center py-1" aria-hidden="true">
                <div className="h-4 w-px bg-border" />
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  className="text-muted"
                >
                  <path d="M6 8L0 0h12L6 8z" fill="currentColor" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
