import { Card, CardContent } from "@/components/ui/card";

export default function AboutCard() {
  return (
    <Card className="rounded-[14px] border-transparent shadow-sm hover:border-border hover:shadow-md transition-all duration-200">
      <CardContent className="p-5">
        <h2 className="text-[0.9375rem] font-semibold tracking-tight mb-3">About</h2>
        <div className="space-y-2.5 text-sm text-muted-foreground leading-relaxed">
          <p>I'm a software developer focused on building modern, scalable web applications using JavaScript and Python.</p>
          <p>I create custom systems and high-performance websites that help businesses streamline operations and grow efficiently.</p>
          <p>Integrating AI capabilities into web applications to build smarter, more automated, and future-ready software solutions.</p>
        </div>
      </CardContent>
    </Card>
  );
}