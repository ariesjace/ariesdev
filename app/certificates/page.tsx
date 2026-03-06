"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { certificates } from "@/lib/data";

export default function CertificatesPage() {
  return (
    <PageContainer>
      <Button variant="ghost" size="sm" className="-ml-2 mb-4 text-muted-foreground" asChild>
        <Link href="/"><ArrowLeft className="w-4 h-4 mr-1" />Back</Link>
      </Button>
      <h1 className="text-2xl font-semibold tracking-tight mb-1">Certificates</h1>
      <p className="text-sm text-muted-foreground mb-5">Certifications and credentials I've earned.</p>

      <div className="space-y-3">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07, duration: 0.3, ease: "easeOut" }}
            whileHover={{ y: -2 }}
          >
            <Card className="rounded-xl hover:shadow-md transition-all duration-300">
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground mb-1">{cert.title}</p>
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="text-xs text-muted-foreground">{cert.issuer}</span>
                      <span className="w-1 h-1 rounded-full bg-border" />
                      <span className="text-xs text-muted-foreground">{cert.date}</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{cert.description}</p>
                  </div>
                  {cert.url && (
                    <Button variant="outline" size="icon" className="flex-shrink-0 h-8 w-8" asChild>
                      <a href={cert.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${cert.title}`}>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <footer className="mt-12 pt-5 border-t border-border text-center text-xs text-muted-foreground">
        © 2026 Aries Jace Balgos. All rights reserved.
      </footer>
    </PageContainer>
  );
}
