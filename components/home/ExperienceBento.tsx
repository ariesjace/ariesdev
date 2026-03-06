import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { experience } from "@/lib/data";

export default function ExperienceBento() {
  return (
    <Card className="rounded-[14px] border-transparent shadow-sm hover:border-border hover:shadow-md transition-all duration-200 h-full">
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[0.9375rem] font-semibold tracking-tight">
            Experience
          </h2>
          <Link
            href="/experience"
            className="text-[0.8125rem] text-muted-foreground hover:text-foreground transition-colors"
          >
            View All &rsaquo;
          </Link>
        </div>
        <div>
          {experience.map((e, i) => (
            <div key={e.id} className="flex gap-[11px]">
              <div className="flex flex-col items-center pt-[3px]">
                <div
                  className={`w-[11px] h-[11px] rounded-full border-2 flex-shrink-0 ${
                    e.current
                      ? "border-foreground bg-foreground"
                      : "border-border bg-card"
                  }`}
                />
                {i < experience.length - 1 && (
                  <div className="w-px flex-1 bg-border mt-[3px] min-h-[8px]" />
                )}
              </div>
              <div className="flex-1 pb-4">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <p className="text-[0.8125rem] font-medium text-foreground leading-snug">
                      {e.role}
                    </p>
                    <p className="text-[0.73rem] text-muted-foreground mt-[2px]">
                      {e.company}
                    </p>
                  </div>
                  <span className="text-[0.72rem] text-muted-foreground flex-shrink-0 mt-[2px]">
                    {e.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
