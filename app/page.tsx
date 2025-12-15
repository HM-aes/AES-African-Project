import { Hero } from "@/components/Hero";
import { AESSpotlight } from "@/components/AESSpotlight";
import { AESAchievements } from "@/components/AESAchievements";
import { AESVision } from "@/components/AESVision";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Hero />
      <AESSpotlight />
      <AESVision />
      <AESAchievements />
    </div>
  );
}
