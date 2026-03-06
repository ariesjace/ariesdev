import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { techStack } from "@/lib/data";

export default function TechStackCard() {
  const fe = techStack.filter((t) => t.category === "Frontend").slice(0, 4);
  const be = techStack.filter((t) => t.category === "Backend").slice(0, 4);

  return (
    <Card className="rounded-[14px] border-transparent shadow-sm hover:border-border hover:shadow-md transition-all duration-200">
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-[0.9375rem] font-semibold tracking-tight">
            Tech Stack
          </h2>
          <Link
            href="/tech-stack"
            className="text-[0.8125rem] text-muted-foreground hover:text-foreground transition-colors"
          >
            View All &rsaquo;
          </Link>
        </div>
        <div className="space-y-3">
          <div>
            <p className="text-[0.72rem] font-medium text-muted-foreground mb-2">
              Front End
            </p>
            <div className="flex flex-wrap gap-[5px]">
              {fe.map((t) => (
                <Badge key={t.name} variant="secondary">
                  {t.name}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[0.72rem] font-medium text-muted-foreground mb-2">
              Back End
            </p>
            <div className="flex flex-wrap gap-[5px]">
              {be.map((t) => (
                <Badge key={t.name} variant="secondary">
                  {t.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
