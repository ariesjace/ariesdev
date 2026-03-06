import { Badge } from "@/components/ui/badge";

interface TechBadgeProps {
  name: string;
}

export default function TechBadge({ name }: TechBadgeProps) {
  return <Badge variant="secondary">{name}</Badge>;
}
