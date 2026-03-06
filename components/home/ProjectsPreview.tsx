import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

function StatusDot({ status }: { status?: string }) {
  if (!status || status === "live") return null;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 text-[0.63rem] font-semibold px-1.5 py-0.5 rounded-full border flex-shrink-0",
        status === "in-progress"
          ? "bg-amber-50 text-amber-700 border-amber-200"
          : "bg-secondary text-muted-foreground border-border",
      )}
    >
      {status === "in-progress" ? (
        <>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          WIP
        </>
      ) : (
        <>Local</>
      )}
    </span>
  );
}

const PREVIEW = projects.filter((p) => p.status !== "local").slice(0, 6);

export default function ProjectsPreview() {
  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-[0.9375rem] font-semibold tracking-tight">
          Projects
        </h2>
        <Link
          href="/projects"
          className="text-[0.8125rem] text-muted-foreground hover:text-foreground transition-colors"
        >
          View All &rsaquo;
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[10px]">
        {PREVIEW.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`}>
            <Card className="rounded-[14px] border-transparent shadow-sm hover:border-border hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
              <CardContent className="p-4 flex flex-col gap-1.5 min-h-[100px]">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-[0.8125rem] font-semibold text-foreground leading-snug">
                    {p.name}
                  </p>
                  <StatusDot status={p.status} />
                </div>
                <p className="text-[0.72rem] text-muted-foreground leading-relaxed line-clamp-2 flex-1">
                  {p.shortDescription}
                </p>
                <div className="flex flex-wrap gap-1 pt-0.5">
                  {p.tags
                    .filter((t) => t !== "In Progress")
                    .slice(0, 3)
                    .map((t) => (
                      <Badge key={t} variant="secondary">
                        {t}
                      </Badge>
                    ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
