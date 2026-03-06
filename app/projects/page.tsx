"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import ProjectCard from "@/components/shared/ProjectCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "WordPress", "Frontend", "Desktop"];

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setCategory] = useState("All");

  const filtered = projects.filter((p) => {
    const q = search.toLowerCase();
    const matchSearch =
      p.name.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q));
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    return matchSearch && matchCat;
  });

  return (
    <PageContainer>
      <div className="mb-5">
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          asChild
        >
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back
          </Link>
        </Button>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground mb-1">
          Projects
        </h1>
        <p className="text-sm text-muted-foreground">
          {projects.length} projects — WordPress sites, Next.js apps, and
          desktop tools.
        </p>
      </div>

      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      <div className="flex gap-2 flex-wrap mb-5">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={cn(
              "h-8 px-3 rounded-lg border text-[0.8125rem] font-medium transition-all",
              activeCategory === cat
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border text-muted-foreground bg-background hover:border-foreground/30 hover:text-foreground",
            )}
          >
            {cat}
            <span
              className={cn(
                "ml-1.5 text-[0.68rem]",
                activeCategory === cat
                  ? "text-primary-foreground/70"
                  : "text-muted-foreground/60",
              )}
            >
              {cat === "All"
                ? projects.length
                : projects.filter((p) => p.category === cat).length}
            </span>
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-sm text-muted-foreground">
          No projects found.
        </div>
      )}

      <footer className="mt-12 pt-5 border-t border-border text-center text-xs text-muted-foreground">
        © 2026 Aries Jace Balgos. All rights reserved.
      </footer>
    </PageContainer>
  );
}
