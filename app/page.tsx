import PageContainer from "@/components/layout/PageContainer";
import HeaderSection from "@/components/home/HeaderSection";
import AboutCard from "@/components/home/AboutCard";
import TechStackCard from "@/components/home/TechStackCard";
import ExperienceBento from "@/components/home/ExperienceBento";
import ProjectsPreview from "@/components/home/ProjectsPreview";

export default function HomePage() {
  return (
    <PageContainer>
      <HeaderSection />

      {/*
        Left col:  About (top) + TechStack (bottom), stacked vertically
        Right col: Experience with h-full — bottoms align via items-stretch
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-stretch mb-3">
        <div className="flex flex-col gap-3">
          <AboutCard />
          <TechStackCard />
        </div>
        <ExperienceBento />
      </div>

      <ProjectsPreview />

      <footer className="mt-11 pt-5 border-t border-border text-center text-xs text-muted-foreground">
        © 2026 Aries Jace Balgos. All rights reserved.
      </footer>
    </PageContainer>
  );
}