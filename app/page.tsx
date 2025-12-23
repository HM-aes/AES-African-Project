import { Hero } from "@/components/Hero";
import { JointForcesSection } from "@/components/JointForcesSection";
import { InvestmentBankSection } from "@/components/InvestmentBankSection";
import { NewsHeadlines } from "@/components/NewsHeadlines";
import { AESSpotlight } from "@/components/AESSpotlight";
import { AESVision } from "@/components/AESVision";
import { AESAchievements } from "@/components/AESAchievements";
import { Section, AnimatedSectionWrapper } from "@/components/Section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section - The Visionary Leaders */}
      <Section
        background="default"
        showEndLine={true}
        endLineColor="silver"
        showGrid={true}
        gridStyle="amber"
      >
        <Hero />
      </Section>

      {/* 3. AES Joint Forces Section */}
      <AnimatedSectionWrapper
        background="alt"
        showEndLine={true}
        endLineColor="silver"
        delay={0.1}
        showGrid={true}
        gridStyle="default"
      >
        <JointForcesSection />
      </AnimatedSectionWrapper>

      {/* 4. AES Investment Bank Section */}
      <AnimatedSectionWrapper
        background="default"
        showEndLine={true}
        endLineColor="silver"
        delay={0.1}
      >
        <InvestmentBankSection />
      </AnimatedSectionWrapper>

      {/* 5. Path to Sovereignty - Military Transformation */}
      <AnimatedSectionWrapper
        background="alt"
        showEndLine={true}
        endLineColor="silver"
        delay={0.1}
        showGrid={true}
        gridStyle="default"
      >
        <AESSpotlight />
      </AnimatedSectionWrapper>

      {/* 6. Pan-African Vision - Historical Connection */}
      <AnimatedSectionWrapper
        background="default"
        showEndLine={true}
        endLineColor="silver"
        delay={0.1}
        showGrid={true}
        gridStyle="amber"
      >
        <AESVision />
      </AnimatedSectionWrapper>

      {/* 7. Achievements Timeline */}
      <AnimatedSectionWrapper
        background="alt"
        showEndLine={true}
        endLineColor="silver"
        delay={0.1}
      >
        <AESAchievements />
      </AnimatedSectionWrapper>

      {/* 8. Latest News */}
      <AnimatedSectionWrapper
        background="default"
        showEndLine={false}
        delay={0.1}
        showGrid={true}
        gridStyle="default"
      >
        <NewsHeadlines />
      </AnimatedSectionWrapper>
    </div>
  );
}
