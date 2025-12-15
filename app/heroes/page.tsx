import { HeroCard } from "@/components/ui/hero-card";

const heroes = [
  {
    name: "Thomas Sankara",
    role: "President of Burkina Faso (1983-1987)",
    country: "Burkina Faso",
    description: "A Marxist-Leninist revolutionary and Pan-Africanist theorist who led Burkina Faso. He launched programs for social, ecological, and economic change and renamed the country from Upper Volta to Burkina Faso ('Land of Incorruptible People').",
    imageUrl: "/AES/AES/ThomasSankara.jpg",
  },
  {
    name: "Patrice Lumumba",
    role: "Prime Minister of DRC (1960)",
    country: "Democratic Republic of the Congo",
    description: "A Congolese politician and independence leader who served as the first Prime Minister of the independent Democratic Republic of the Congo. He played a significant role in the transformation of the Congo from a colony of Belgium into an independent republic.",
    imageUrl: "/AES/AES/lumumba-stamp-ussr.jpg",
  },
  {
    name: "Ibrahim Traoré",
    role: "President of Burkina Faso",
    country: "Burkina Faso",
    description: "A Burkinabè military officer who has been the interim leader of Burkina Faso since the 30 September 2022 coup d'état which ousted interim president Paul-Henri Sandaogo Damiba.",
    imageUrl: "/AES/AES/ibrahim-traore.jpg",
  },
  {
    name: "Assimi Goïta",
    role: "President of Mali",
    country: "Mali",
    description: "A Malian military officer who has been serving as interim President of Mali since 2021. He was the leader of the National Committee for the Salvation of the People, a military junta that seized power from former president Ibrahim Boubacar Keïta.",
    imageUrl: "/AES/AES/pride-of-mali.jpg",
  },
  {
    name: "Abdourahamane Tchiani",
    role: "President of the National Council for the Safeguard of the Homeland",
    country: "Niger",
    description: "A Nigerien general and the commander of the Nigerien presidential guard. He played a key role in the 2023 Nigerien coup d'état by detaining President Mohamed Bazoum.",
    imageUrl: "/AES/AES/Sahel-nation.jpg",
  },
   {
    name: "Modibo Keïta",
    role: "First President of Mali",
    country: "Mali",
    description: "A Malian politician who served as the first President of Mali from 1960 to 1968. He was a pan-Africanist and a socialist who led Mali to independence from France.",
    imageUrl: "/AES/AES/sahel-mao.jpg",
  },
];

export default function HeroesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100 dark:from-stone-950 dark:to-stone-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold font-serif text-stone-900 dark:text-stone-50 tracking-tight">
            Guardians of the Sahel
          </h1>
          <p className="text-lg md:text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
            Discover the stories of the visionary leaders who shaped the destiny of the Alliance of Sahel States and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {heroes.map((hero, index) => (
            <HeroCard
              key={hero.name}
              index={index}
              {...hero}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
