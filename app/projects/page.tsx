"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import ProjectCard from "@/components/shared/ProjectCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { projects } from "@/lib/data";

const categories = ["All", "AI", "Frontend", "Backend", "Tools"];

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = projects.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || p.category === activeCategory || p.tags.includes(activeCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <PageContainer>
      <div className="mb-5">
        <Button variant="ghost" size="sm" className="mb-3 -ml-2 text-muted-foreground" asChild>
          <Link href="/"><ArrowLeft className="w-4 h-4 mr-1" />Back</Link>
        </Button>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground mb-1">Projects</h1>
        <p className="text-sm text-muted-foreground">A collection of things I've built.</p>
      </div>

      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      <div className="flex gap-2 flex-wrap mb-5">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={activeCategory === cat ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-sm text-muted-foreground">No projects found.</div>
      )}

      <footer className="mt-12 pt-5 border-t border-border text-center text-xs text-muted-foreground">
        © 2026 Aries Jace Balgos. All rights reserved.
      </footer>
    </PageContainer>
  );
}
