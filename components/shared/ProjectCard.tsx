"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.06, ease: "easeOut" }}
      whileHover={{ y: -2 }}
    >
      <Link href={`/projects/${project.slug}`}>
        <Card className="group rounded-xl hover:shadow-md transition-all duration-300 cursor-pointer h-full">
          <CardContent className="p-4 flex flex-col gap-2.5 h-full">
            <div className="w-full h-[116px] rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
              <div className="w-7 h-7 rounded-md bg-border" />
            </div>
            <p className="text-sm font-semibold text-foreground group-hover:text-muted-foreground transition-colors">
              {project.name}
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 flex-1">
              {project.shortDescription}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
