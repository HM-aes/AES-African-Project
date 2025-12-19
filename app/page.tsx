import { Hero } from "@/components/Hero";
import { AESIntroduction } from "@/components/AESIntroduction";
import { EconomicTransformation } from "@/components/EconomicTransformation";
import { DevelopmentSectors } from "@/components/DevelopmentSectors";
import { NewsHeadlines } from "@/components/NewsHeadlines";
import { AESSpotlight } from "@/components/AESSpotlight";
import { AESVision } from "@/components/AESVision";
import { AESAchievements } from "@/components/AESAchievements";
import { SectionDivider } from "@/components/SectionDivider";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* 1. Hero - The Visionary Leaders (no animation - immediately visible) */}
      <Hero />
      <SectionDivider variant="amber" />

      {/* 2. AES Introduction - What is AES? Foundation overview */}
      <AnimatedSection variant="slideUp" delay={0.1}>
        <AESIntroduction />
      </AnimatedSection>
      <SectionDivider variant="gradient" />

      {/* 3. Economic Transformation - The underdeveloped → fastest growing story */}
      <AnimatedSection variant="slideUp" delay={0.1}>
        <EconomicTransformation />
      </AnimatedSection>
      <SectionDivider variant="gold" />

      {/* 4. Latest News - Current developments */}
      <AnimatedSection variant="slideUp" delay={0.1}>
        <NewsHeadlines />
      </AnimatedSection>
      <SectionDivider variant="amber" />

      {/* 5. Development Sectors - Key growth areas */}
      <AnimatedSection variant="slideUp" delay={0.1}>
        <DevelopmentSectors />
      </AnimatedSection>
      <SectionDivider variant="gradient" />

      {/* 6. Path to Sovereignty - Historical context & military transformation */}
      <AnimatedSection variant="scaleUp" delay={0.1}>
        <AESSpotlight />
      </AnimatedSection>
      <SectionDivider variant="gold" />

      {/* 7. Pan-African Vision - Connection to historical leaders */}
      <AnimatedSection variant="blur" delay={0.1}>
        <AESVision />
      </AnimatedSection>
      <SectionDivider variant="amber" />

      {/* 8. Achievements - Summary of accomplishments */}
      <AnimatedSection variant="slideUp" delay={0.1}>
        <AESAchievements />
      </AnimatedSection>
    </div>
  );
}
