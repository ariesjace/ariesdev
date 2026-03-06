"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/lib/data";

const groupByYear = (items: typeof experience) => {
  const groups: Record<string, typeof experience> = {};
  items.forEach((item) => {
    if (!groups[item.year]) groups[item.year] = [];
    groups[item.year].push(item);
  });
  return Object.entries(groups).sort(([a], [b]) => Number(b) - Number(a));
};

export default function ExperiencePage() {
  const grouped = groupByYear(experience);

  return (
    <PageContainer>
      <Button variant="ghost" size="sm" className="-ml-2 mb-4 text-muted-foreground" asChild>
        <Link href="/"><ArrowLeft className="w-4 h-4 mr-1" />Back</Link>
      </Button>
      <h1 className="text-2xl font-semibold tracking-tight mb-1">Experience</h1>
      <p className="text-sm text-muted-foreground mb-5">My professional journey.</p>

      <div className="space-y-8">
        {grouped.map(([year, items]) => (
          <div key={year}>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              {year}
            </p>
            <div className="space-y-2">
              {items.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3, ease: "easeOut" }}
                  className="flex gap-3"
                >
                  <div className="flex flex-col items-center pt-[7px] flex-shrink-0">
                    <div
                      className={`w-2.5 h-2.5 rounded-full border-2 ${
                        item.current
                          ? "border-foreground bg-foreground"
                          : "border-border bg-card"
                      }`}
                    />
                    <div className="w-px flex-1 bg-border mt-1.5 min-h-[20px]" />
                  </div>
                  <div className="flex-1 pb-3">
                    <Card className="rounded-xl">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <div>
                            <p className="text-sm font-semibold text-foreground">{item.role}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">{item.company}</p>
                          </div>
                          {item.current && (
                            <Badge variant="outline" className="text-green-700 border-green-200 bg-green-50 text-[11px] flex-shrink-0">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1" />
                              Current
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <footer className="mt-12 pt-5 border-t border-border text-center text-xs text-muted-foreground">
        © 2026 Aries Jace Balgos. All rights reserved.
      </footer>
    </PageContainer>
  );
}
