import Link from "next/link";

interface SectionHeaderProps {
  title: string;
  viewAllHref?: string;
  viewAllLabel?: string;
}

export default function SectionHeader({
  title,
  viewAllHref,
  viewAllLabel = "View All >",
}: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">
        {title}
      </h2>
      {viewAllHref && (
        <Link
          href={viewAllHref}
          className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          {viewAllLabel}
        </Link>
      )}
    </div>
  );
}
