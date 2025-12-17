import { Hero } from "@/components/Hero";
import { AESSpotlight } from "@/components/AESSpotlight";
import { AESAchievements } from "@/components/AESAchievements";
import { AESVision } from "@/components/AESVision";
import { SectionDivider } from "@/components/SectionDivider";
import { NewsTicker } from "@/components/NewsTicker";
import { NewsHeadlines } from "@/components/NewsHeadlines";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* News Ticker - Right below navbar */}
      <NewsTicker />
      
      <Hero />
      <SectionDivider variant="amber" />
      
      {/* News Headlines Section */}
      <NewsHeadlines />
      <SectionDivider variant="gold" />
      
      <AESSpotlight />
      <SectionDivider variant="gradient" />
      <AESVision />
      <SectionDivider variant="amber" />
      <AESAchievements />
    </div>
  );
}
