import { Hero } from "@/components/Hero";
import { AESSpotlight } from "@/components/AESSpotlight";
import { AESAchievements } from "@/components/AESAchievements";
import { AESVision } from "@/components/AESVision";
import { SectionDivider } from "@/components/SectionDivider";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Hero />
      <SectionDivider variant="amber" />
      <AESSpotlight />
      <SectionDivider variant="gold" />
      <AESVision />
      <SectionDivider variant="gradient" />
      <AESAchievements />
    </div>
  );
}
