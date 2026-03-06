"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { techStack } from "@/lib/data";

const filters = ["All", "Frontend", "Backend", "AI", "Tools"] as const;
type Filter = (typeof filters)[number];

export default function TechStackPage() {
  const [active, setActive] = useState<Filter>("All");

  const cats = filters.slice(1).filter((cat) =>
    active === "All" || cat === active
  );

  return (
    <PageContainer>
      <Button variant="ghost" size="sm" className="-ml-2 mb-4 text-muted-foreground" asChild>
        <Link href="/"><ArrowLeft className="w-4 h-4 mr-1" />Back</Link>
      </Button>
      <h1 className="text-2xl font-semibold tracking-tight mb-1">Tech Stack</h1>
      <p className="text-sm text-muted-foreground mb-5">Technologies and tools I work with.</p>

      <div className="flex gap-2 flex-wrap mb-7">
        {filters.map((f) => (
          <Button
            key={f}
            variant={active === f ? "default" : "outline"}
            size="sm"
            onClick={() => setActive(f)}
          >
            {f}
          </Button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2 }}
          className="space-y-7"
        >
          {cats.map((cat) => {
            const items = techStack.filter((t) => t.category === cat);
            if (!items.length) return null;
            return (
              <section key={cat}>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  {cat}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {items.map((t, i) => (
                    <motion.div
                      key={t.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.03 }}
                    >
                      <Badge variant="secondary" className="text-sm py-1 px-3">{t.name}</Badge>
                    </motion.div>
                  ))}
                </div>
              </section>
            );
          })}
        </motion.div>
      </AnimatePresence>

      <footer className="mt-12 pt-5 border-t border-border text-center text-xs text-muted-foreground">
        © 2026 Aries Jace Balgos. All rights reserved.
      </footer>
    </PageContainer>
  );
}
