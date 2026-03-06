import { Button } from "@/components/ui/button";

interface SocialIconButtonProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}

export default function SocialIconButton({ icon, label, href }: SocialIconButtonProps) {
  return (
    <Button variant="outline" size="icon" asChild aria-label={label}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    </Button>
  );
}
