import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/lib/data";

export default function ProjectsPreview() {
  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-[0.9375rem] font-semibold tracking-tight">Projects</h2>
        <Link href="/projects" className="text-[0.8125rem] text-muted-foreground hover:text-foreground transition-colors">
          View All &rsaquo;
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[10px]">
        {projects.slice(0, 6).map(p => (
          <Link key={p.slug} href={`/projects/${p.slug}`}>
            <Card className="rounded-[14px] border-transparent shadow-sm hover:border-border hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer min-h-[108px]">
              <CardContent className="p-4 flex flex-col gap-1.5 h-full">
                <p className="text-[0.8125rem] font-semibold text-foreground">{p.name}</p>
                <p className="text-[0.72rem] text-muted-foreground leading-relaxed line-clamp-2 flex-1">{p.shortDescription}</p>
                <div className="flex flex-wrap gap-1 pt-1">
                  {p.tags.slice(0,3).map(t => <Badge key={t} variant="secondary">{t}</Badge>)}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
