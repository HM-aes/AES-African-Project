import { Hero } from "@/components/Hero";
import { AESIntroduction } from "@/components/AESIntroduction";
import { EconomicTransformation } from "@/components/EconomicTransformation";
import { DevelopmentSectors } from "@/components/DevelopmentSectors";
import { NewsHeadlines } from "@/components/NewsHeadlines";
import { AESSpotlight } from "@/components/AESSpotlight";
import { AESVision } from "@/components/AESVision";
import { AESAchievements } from "@/components/AESAchievements";
import { Section, AnimatedSectionWrapper } from "@/components/Section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section - The Visionary Leaders */}
      <Section background="default" showEndLine={true} endLineColor="amber">
        <Hero />
      </Section>

      {/* 2. AES Introduction - What is AES? */}
      <AnimatedSectionWrapper
        background="amber"
        showEndLine={true}
        endLineColor="gradient"
        delay={0.1}
      >
        <AESIntroduction />
      </AnimatedSectionWrapper>

      {/* 3. Economic Transformation - Growth Story */}
      <AnimatedSectionWrapper
        background="green"
        showEndLine={true}
        endLineColor="green"
        delay={0.1}
      >
        <EconomicTransformation />
      </AnimatedSectionWrapper>

      {/* 4. Latest News - Breaking Headlines */}
      <AnimatedSectionWrapper
        background="alt"
        showEndLine={true}
        endLineColor="amber"
        delay={0.1}
      >
        <NewsHeadlines />
      </AnimatedSectionWrapper>

      {/* 5. Development Sectors - Key Growth Areas */}
      <AnimatedSectionWrapper
        background="gradient-1"
        showEndLine={true}
        endLineColor="gradient"
        delay={0.1}
      >
        <DevelopmentSectors />
      </AnimatedSectionWrapper>

      {/* 6. Path to Sovereignty - Military Transformation */}
      <AnimatedSectionWrapper
        background="dark"
        showEndLine={true}
        endLineColor="red"
        delay={0.1}
      >
        <AESSpotlight />
      </AnimatedSectionWrapper>

      {/* 7. Pan-African Vision - Historical Connection */}
      <AnimatedSectionWrapper
        background="gradient-2"
        showEndLine={true}
        endLineColor="amber"
        delay={0.1}
      >
        <AESVision />
      </AnimatedSectionWrapper>

      {/* 8. Achievements - Summary */}
      <AnimatedSectionWrapper
        background="default"
        showEndLine={false}
        delay={0.1}
      >
        <AESAchievements />
      </AnimatedSectionWrapper>
    </div>
  );
}
