import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { techStack } from "@/lib/data";

export default function AboutTechBento() {
  const fe = techStack.filter(t => t.category === "Frontend").slice(0, 4);
  const be = techStack.filter(t => t.category === "Backend").slice(0, 4);

  return (
    <Card className="rounded-[14px] border-transparent shadow-sm hover:border-border hover:shadow-md transition-all duration-200 h-full">
      <CardContent className="p-5 flex flex-col h-full">
        {/* About */}
        <h2 className="text-[0.9375rem] font-semibold tracking-tight mb-3">About</h2>
        <div className="space-y-2.5 text-sm text-muted-foreground leading-relaxed">
          <p>I'm a software developer focused on building modern, scalable web applications using JavaScript and Python.</p>
          <p>I create custom systems and high-performance websites that help businesses streamline operations and grow efficiently.</p>
          <p>Integrating AI capabilities into web applications to build smarter, more automated, and future-ready software solutions.</p>
        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-border opacity-50" />

        {/* Tech Stack */}
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-[0.9375rem] font-semibold tracking-tight">Tech Stack</h2>
          <Link href="/tech-stack" className="text-[0.8125rem] text-muted-foreground hover:text-foreground transition-colors">
            View All &rsaquo;
          </Link>
        </div>
        <div className="space-y-3">
          <div>
            <p className="text-[0.72rem] font-medium text-muted-foreground mb-1.5">Front End</p>
            <div className="flex flex-wrap gap-[5px]">
              {fe.map(t => <Badge key={t.name} variant="secondary">{t.name}</Badge>)}
            </div>
          </div>
          <div>
            <p className="text-[0.72rem] font-medium text-muted-foreground mb-1.5">Back End</p>
            <div className="flex flex-wrap gap-[5px]">
              {be.map(t => <Badge key={t.name} variant="secondary">{t.name}</Badge>)}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
