import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "../layout/SectionHeader";
import TimelineItem from "../shared/TimelineItem";
import { experience } from "@/lib/data";

export default function ExperiencePreview() {
  return (
    <Card className="h-full rounded-xl">
      <CardContent className="pt-5">
        <SectionHeader title="Experience" viewAllHref="/experience" />
        <div>
          {experience.map((item, i) => (
            <TimelineItem
              key={item.id}
              role={item.role}
              company={item.company}
              year={item.year}
              current={item.current}
              index={i}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
