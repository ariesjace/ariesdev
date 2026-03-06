import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Check, Monitor } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/data";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

function StatusBadge({ status }: { status?: string }) {
  if (!status || status === "live") return null;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border",
        status === "in-progress"
          ? "bg-amber-50 text-amber-700 border-amber-200"
          : "bg-secondary text-muted-foreground border-border",
      )}
    >
      {status === "in-progress" ? (
        <>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          In Development
        </>
      ) : (
        <>
          <Monitor className="w-3 h-3" />
          Local / Desktop
        </>
      )}
    </span>
  );
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const liveBtnLabel =
    project.category === "WordPress"
      ? "Visit Site"
      : project.status === "in-progress"
        ? "Preview"
        : project.status === "local"
          ? ""
          : "Live Demo";

  return (
    <PageContainer>
      <Button
        variant="ghost"
        size="sm"
        className="-ml-2 mb-5 text-muted-foreground"
        asChild
      >
        <Link href="/projects">
          <ArrowLeft className="w-4 h-4 mr-1" />
          All Projects
        </Link>
      </Button>

      <div className="mb-6">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {project.tags
            .filter((t) => t !== "In Progress")
            .map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          <StatusBadge status={project.status} />
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">
          {project.name}
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mb-4">
          {project.shortDescription}
        </p>

        <div className="flex gap-2.5 flex-wrap">
          {project.liveUrl && liveBtnLabel && (
            <Button size="sm" asChild>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4" />
                {liveBtnLabel}
              </a>
            </Button>
          )}
          {project.status === "local" && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-secondary text-xs text-muted-foreground">
              <Monitor className="w-3.5 h-3.5" />
              Desktop application — no live link
            </div>
          )}
          {project.status === "in-progress" && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-amber-200 bg-amber-50 text-xs text-amber-700">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Currently in development
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-5">
          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">
              Overview
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.longDescription}
            </p>
          </section>
          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">
              Key Features
            </h2>
            <ul className="space-y-2">
              {project.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div>
          <Card className="rounded-[14px]">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Tech Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((t) => (
                  <Badge key={t} variant="secondary">
                    {t}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <footer className="mt-12 pt-5 border-t border-border text-center text-xs text-muted-foreground">
        © 2026 Aries Jace Balgos. All rights reserved.
      </footer>
    </PageContainer>
  );
}
