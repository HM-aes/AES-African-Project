import { Hero } from "@/components/Hero";
import { AESIntroduction } from "@/components/AESIntroduction";
import { EconomicTransformation } from "@/components/EconomicTransformation";
import { DevelopmentSectors } from "@/components/DevelopmentSectors";
import { NewsHeadlines } from "@/components/NewsHeadlines";
import { AESSpotlight } from "@/components/AESSpotlight";
import { AESVision } from "@/components/AESVision";
import { AESAchievements } from "@/components/AESAchievements";
import { SectionDivider } from "@/components/SectionDivider";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* 1. Hero - The Visionary Leaders */}
      <Hero />
      <SectionDivider variant="amber" />

      {/* 2. AES Introduction - What is AES? Foundation overview */}
      <AESIntroduction />
      <SectionDivider variant="gradient" />

      {/* 3. Economic Transformation - The underdeveloped → fastest growing story */}
      <EconomicTransformation />
      <SectionDivider variant="gold" />

      {/* 4. Latest News - Current developments */}
      <NewsHeadlines />
      <SectionDivider variant="amber" />

      {/* 5. Development Sectors - Key growth areas */}
      <DevelopmentSectors />
      <SectionDivider variant="gradient" />

      {/* 6. Path to Sovereignty - Historical context & military transformation */}
      <AESSpotlight />
      <SectionDivider variant="gold" />

      {/* 7. Pan-African Vision - Connection to historical leaders */}
      <AESVision />
      <SectionDivider variant="amber" />

      {/* 8. Achievements - Summary of accomplishments */}
      <AESAchievements />
    </div>
  );
}
