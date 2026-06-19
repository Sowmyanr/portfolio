import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center">
      <h1 className="text-2xl font-semibold text-foreground">Page not found</h1>
      <p className="mt-2 text-muted">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-6 text-sm font-medium text-accent hover:text-accent/80"
      >
        Return home
      </Link>
    </div>
  );
}
