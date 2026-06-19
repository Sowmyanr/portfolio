interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id?: string;
}

export function SectionHeading({ title, subtitle, id }: SectionHeadingProps) {
  return (
    <div className="mb-10 md:mb-12">
      <h2
        id={id}
        className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 max-w-2xl text-base text-muted md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
