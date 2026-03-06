import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, ExternalLink, Check } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/lib/data";

interface Props { params: { slug: string }; }

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <PageContainer>
      <Button variant="ghost" size="sm" className="-ml-2 mb-5 text-muted-foreground" asChild>
        <Link href="/projects"><ArrowLeft className="w-4 h-4 mr-1" />All Projects</Link>
      </Button>

      <div className="mb-6">
        <div className="flex flex-wrap gap-1.5 mb-2.5">
          {project.tags.map((tag) => <Badge key={tag} variant="outline">{tag}</Badge>)}
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">{project.name}</h1>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mb-4">
          {project.shortDescription}
        </p>
        <div className="flex gap-2.5">
          {project.githubUrl && (
            <Button size="sm" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />GitHub
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button size="sm" variant="outline" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>

      <div className="w-full h-56 sm:h-64 rounded-xl bg-muted border border-border flex items-center justify-center mb-7">
        <div className="w-12 h-12 rounded-xl bg-border" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-5">
          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">Overview</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.longDescription}</p>
          </section>
          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">Key Features</h2>
            <ul className="space-y-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />{f}
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div>
          <Card className="rounded-xl">
            <CardHeader><CardTitle className="text-sm">Tech Stack</CardTitle></CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((t) => <Badge key={t} variant="secondary">{t}</Badge>)}
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
