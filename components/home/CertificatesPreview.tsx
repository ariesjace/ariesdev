import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "../layout/SectionHeader";
import { certificates } from "@/lib/data";

export default function CertificatesPreview() {
  return (
    <Card className="rounded-xl">
      <CardContent className="pt-5">
        <SectionHeader title="Certificates" viewAllHref="/certificates" />
        <div className="space-y-2">
          {certificates.slice(0, 2).map((cert) => (
            <div
              key={cert.id}
              className="px-3 py-2.5 rounded-lg border border-border bg-muted/50"
            >
              <p className="text-sm font-medium text-foreground">{cert.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
