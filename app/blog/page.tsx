"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BlogPage() {
  // Hero carousel state
  const [activeCategory, setActiveCategory] = useState("aes");
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  // Heroes data organized by category
  const heroesData = {
    aes: [
      {
        name: "Colonel Assimi Goïta",
        title: "President of Mali",
        description: "Architect of sovereignty, leading Mali's transformation from external dependence to self-determination.",
        image: "/aes/AES/pride-of-mali.jpg",
        flag: "🇲🇱"
      },
      {
        name: "Captain Ibrahim Traoré",
        title: "President of Burkina Faso",
        description: "Champion of the people, driving agricultural revolution and fighting for true independence.",
        image: "/aes/AES/ibrahim-traore.jpg",
        flag: "🇧🇫"
      },
      {
        name: "General Abdourahamane Tiani",
        title: "President of Niger",
        description: "Guardian of independence, securing Niger's sovereignty and dignity.",
        image: "/aes/AES/Sahel-nation.jpg",
        flag: "🇳🇪"
      }
    ],
    icons: [
      {
        name: "Patrice Lumumba",
        title: "First Prime Minister of Congo",
        description: "Visionary for African independence and resource sovereignty, martyred for his beliefs.",
        image: "/AES/AES/lumumba-stamp-ussr.jpg",
        flag: "🇨🇩"
      },
      {
        name: "Kwame Nkrumah",
        title: "First President of Ghana",
        description: "Pan-African pioneer who envisioned a United States of Africa.",
        image: "/AES/AES/sahel-mao.jpg",
        flag: "🇬🇭"
      },
      {
        name: "Thomas Sankara",
        title: "Revolutionary Leader of Burkina Faso",
        description: "Upright man who transformed Upper Volta into Burkina Faso, championing self-reliance.",
        image: "/AES/AES/ThomasSankara.jpg",
        flag: "🇧🇫"
      }
    ],
    scientists: [
      {
        name: "Cheikh Anta Diop",
        title: "Historian & Physicist",
        description: "Proved ancient Egypt was African civilization, restoring our history and pride.",
        image: "/AES/AES/lumumba-stamp-ussr.jpg",
        flag: "🇸🇳"
      },
      {
        name: "Philip Emeagwali",
        title: "Computer Scientist",
        description: "Pioneered supercomputing, making calculations for oil fields and weather forecasting.",
        image: "/aes/AES/pride-of-mali.jpg",
        flag: "🇳🇬"
      },
      {
        name: "Thomas Mensah",
        title: "Chemical Engineer & Inventor",
        description: "Invented fiber optic manufacturing process, revolutionizing modern communication.",
        image: "/aes/AES/ibrahim-traore.jpg",
        flag: "🇬🇭"
      }
    ]
  };

  const categories = [
    { id: "aes", label: "AES Leaders", icon: "🛡️" },
    { id: "icons", label: "Pan-African Icons", icon: "⭐" },
    { id: "scientists", label: "Scientists & Inventors", icon: "🔬" }
  ];

  const currentHeroes = heroesData[activeCategory as keyof typeof heroesData];
  const currentHero = currentHeroes[currentHeroIndex];

  const nextHero = () => {
    setCurrentHeroIndex((prev) => (prev + 1) % currentHeroes.length);
  };

  const prevHero = () => {
    setCurrentHeroIndex((prev) => (prev - 1 + currentHeroes.length) % currentHeroes.length);
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setCurrentHeroIndex(0);
  };

  return (
    <article className="min-h-screen bg-background py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <div className="mb-4">
            <span className="px-4 py-2 bg-slate-700/40 text-gray-300 text-sm font-semibold rounded-full border border-slate-600/30">
              Platform Announcement
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-200 mb-6 leading-tight">
            Launching Our AI-Powered News Platform: Celebrating AES Leadership & Pan-African Truth
          </h1>
          <div className="flex items-center gap-4 text-gray-400">
            <time dateTime="2024-12-13">December 13, 2024</time>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12 rounded-xl overflow-hidden">
          <Image
            src="/aes/AES/pride-of-mali.jpg"
            alt="AES Leadership"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
          <p className="text-sm text-gray-400 mt-2 text-center italic">
            The leaders of the Alliance of Sahel States charting a new path for African sovereignty
          </p>
        </div>

        {/* Article Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          {/* Introduction */}
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Today marks a historic milestone. We are proud to announce the launch of our AI-powered, 
            LLM-driven news and education platform dedicated to one mission: <strong className="text-gray-200">showcasing 
            the extraordinary achievements of the Alliance of Sahel States (AES), debunking fake news, 
            and celebrating the heroes of Pan-African history</strong>.
          </p>

          {/* Section 1: Our Mission */}
          <h2 className="text-3xl font-heading font-bold text-gray-200 mt-12 mb-6">
            Our Mission: Truth, Achievement, and Education
          </h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            In an era of misinformation and biased narratives, our platform stands as a beacon of truth. 
            We leverage cutting-edge artificial intelligence and large language models to bring you 
            accurate, timely, and inspiring content about what's really happening in Mali, Burkina Faso, 
            and Niger under the visionary leadership of <strong className="text-gray-200">Colonel Assimi Goïta, 
            Captain Ibrahim Traoré, and General Abdourahamane Tiani</strong>.
          </p>

          <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-6 my-8">
            <h3 className="text-xl font-bold text-gray-200 mb-4">What We Cover Weekly:</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">🌾</span>
                <span><strong className="text-gray-200">Agricultural Revolution:</strong> Food sovereignty, farming innovations, and APSA-Sahel initiatives</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">🤖</span>
                <span><strong className="text-gray-200">AI & Tech Development:</strong> Digital transformation and technological advancement across the Sahel</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">🚁</span>
                <span><strong className="text-gray-200">Drone Technology:</strong> Modern defense capabilities and surveillance systems protecting our nations</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">💼</span>
                <span><strong className="text-gray-200">Economic Development:</strong> Infrastructure projects, trade partnerships, and resource sovereignty</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">🛡️</span>
                <span><strong className="text-gray-200">Security & Defense:</strong> Military modernization, AES Joint Special Forces, and territorial victories</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">📚</span>
                <span><strong className="text-gray-200">Pan-African Education:</strong> Weekly features on heroes like Patrice Lumumba, Cheikh Anta Diop, and forgotten truths like Mali reaching the Americas before Columbus</span>
              </li>
            </ul>
          </div>

          {/* Section 2: Burkina Faso's Rising Stars in AI & Robotics */}
          <h2 className="text-3xl font-heading font-bold text-gray-200 mt-12 mb-6">
            🤖 Burkina Faso's Rising Stars: AI & Robotics Achievements
          </h2>

          {/* Presidential Recognition Image */}
          <div className="my-8 rounded-xl overflow-hidden">
            <Image
              src="/Users/hm/.gemini/antigravity/brain/46550c41-b2ac-499f-9a8c-5b33d98a6472/uploaded_image_1765646510000.jpg"
              alt="Captain Ibrahim Traoré awarding robotics winners"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
            <p className="text-sm text-gray-400 mt-2 text-center italic">
              Captain Ibrahim Traoré personally awards Burkina Faso's robotics champions
            </p>
          </div>

          <p className="text-gray-300 leading-relaxed mb-6">
            Under the visionary leadership of <strong className="text-gray-200">Captain Ibrahim Traoré</strong>, 
            Burkina Faso's youth are making history on the global tech stage. This is the kind of achievement 
            mainstream media won't tell you about—but we will.
          </p>

          {/* Scrollable Achievement Cards */}
          <div className="overflow-x-auto pb-4 my-8">
            <div className="flex gap-6 min-w-max">
              {/* Achievement Card 1 - FIRST Global Challenge */}
              <div className="w-80 bg-slate-800/60 backdrop-blur-lg border border-slate-700/50 rounded-xl p-6 flex-shrink-0 hover:bg-slate-800/80 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">🥇</span>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-bold rounded-full border border-yellow-500/30">
                    2025
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-200 mb-2">FIRST Global Challenge</h3>
                <p className="text-sm text-gray-400 mb-3">Panama City, Panama</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-yellow-400">Gold Medal - Judges Award</strong> among 190+ nations. 
                  Recognized for exceptional teamwork, innovation, and embodying the spirit of global robotics collaboration.
                </p>
              </div>

              {/* Achievement Card 2 - Robotics for Good */}
              <div className="w-80 bg-slate-800/60 backdrop-blur-lg border border-slate-700/50 rounded-xl p-6 flex-shrink-0 hover:bg-slate-800/80 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">🥉</span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-bold rounded-full border border-orange-500/30">
                    2025
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-200 mb-2">Robotics for Good Youth Challenge</h3>
                <p className="text-sm text-gray-400 mb-3">ITU AI for Good Initiative</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-orange-400">Bronze Medal (3rd Place)</strong> for designing robots focused on 
                  disaster response and humanitarian applications—real solutions for real problems.
                </p>
              </div>

              {/* Achievement Card 3 - Digital Revolution */}
              <div className="w-80 bg-slate-800/60 backdrop-blur-lg border border-slate-700/50 rounded-xl p-6 flex-shrink-0 hover:bg-slate-800/80 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">🚀</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-full border border-blue-500/30">
                    Ongoing
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-200 mb-2">National Digital Revolution</h3>
                <p className="text-sm text-gray-400 mb-3">Burkina Faso</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Traoré launches "Coup in Technology"—integrating AI, robotics, and coding into school curriculum. 
                  <strong className="text-blue-400"> Faso Andubè</strong> platform discovers hidden tech talents nationwide.
                </p>
              </div>

              {/* Achievement Card 4 - ASI TALK */}
              <div className="w-80 bg-slate-800/60 backdrop-blur-lg border border-slate-700/50 rounded-xl p-6 flex-shrink-0 hover:bg-slate-800/80 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">👨‍💻</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full border border-green-500/30">
                    500+ Youth
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-200 mb-2">ASI TALK Training Program</h3>
                <p className="text-sm text-gray-400 mb-3">Digital Skills Initiative</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Launched August 2025 to train <strong className="text-green-400">500 young people</strong> in digital innovation, 
                  AI, and robotics—building the next generation of African tech leaders.
                </p>
              </div>
            </div>
          </div>

          {/* Key Highlights Box */}
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 rounded-xl p-6 my-8">
            <h3 className="text-xl font-bold text-gray-200 mb-4">🇧🇫 Why This Matters</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-3 mt-1">▸</span>
                <span><strong className="text-gray-200">Presidential Support:</strong> Traoré personally receives and celebrates winners, elevating STEM to national priority</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-3 mt-1">▸</span>
                <span><strong className="text-gray-200">Practical Solutions:</strong> GobeLab engineers design robots for biodiversity restoration and sanitation—solving local challenges</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-3 mt-1">▸</span>
                <span><strong className="text-gray-200">Tech Sovereignty:</strong> Building homegrown AI and robotics capabilities, reducing dependence on foreign technology</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-3 mt-1">▸</span>
                <span><strong className="text-gray-200">Youth Empowerment:</strong> Discovering and nurturing hidden talents across the nation through Faso Andubè platform</span>
              </li>
            </ul>
          </div>

          <p className="text-gray-300 leading-relaxed mb-6">
            While Western media focuses on challenges, <strong className="text-gray-200">Burkina Faso is building the future</strong>. 
            These aren't just competitions—they're proof that African youth, when supported by visionary leadership, 
            can compete and win on the global stage. This is the AES difference.
          </p>

          {/* Why Now - AES Achievements */}
          <h2 className="text-3xl font-heading font-bold text-gray-200 mt-12 mb-6">
            Why Now? The Full AES Story
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            For too long, mainstream media has ignored or misrepresented the incredible transformation 
            happening in the Sahel. While international outlets focus on challenges, they deliberately 
            overlook the <strong className="text-gray-200">groundbreaking achievements</strong> of AES leadership:
          </p>

          <ul className="space-y-4 text-gray-300 mb-6">
            <li className="pl-6 border-l-4 border-slate-600">
              <strong className="text-gray-200">Food Self-Sufficiency:</strong> Burkina Faso's agricultural 
              offensive is transforming the region's food security, with mechanization and innovation 
              leading to record harvests
            </li>
            <li className="pl-6 border-l-4 border-slate-600">
              <strong className="text-gray-200">Military Sovereignty:</strong> The creation of unified 
              defense forces and partnerships with allies like Russia have led to significant territorial 
              gains against terrorism
            </li>
            <li className="pl-6 border-l-4 border-slate-600">
              <strong className="text-gray-200">Infrastructure Renaissance:</strong> From the Niamey-Bamako 
              highway to new university hospitals, massive projects are connecting and modernizing the region
            </li>
            <li className="pl-6 border-l-4 border-slate-600">
              <strong className="text-gray-200">True Independence:</strong> Withdrawal from ECOWAS and 
              exploitative foreign agreements, choosing self-determination over external control
            </li>
          </ul>

          {/* Section 3: Debunking Fake News */}
          <h2 className="text-3xl font-heading font-bold text-gray-200 mt-12 mb-6">
            Debunking Fake News with AI-Powered Analysis
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            One of our core missions is to counter misinformation. Using advanced AI analysis, we'll 
            fact-check claims, provide context, and present evidence-based reporting. When Western media 
            publishes misleading narratives about the AES nations, we'll be here with the <strong className="text-gray-200">truth</strong>, 
            backed by data, verified sources, and on-the-ground realities.
          </p>

          {/* Section 4: Celebrating Pan-African Heroes */}
          <h2 className="text-3xl font-heading font-bold text-gray-200 mt-12 mb-6">
            Weekly Hero Spotlights: Reclaiming Our History
          </h2>

          <p className="text-gray-300 leading-relaxed mb-8">
            Every week, we'll educate readers about the giants upon whose shoulders we stand. 
            Explore our heroes by category:
          </p>

          {/* Hero Carousel */}
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 md:p-8 my-12">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-slate-600 text-gray-100"
                      : "bg-slate-700/50 text-gray-400 hover:bg-slate-600/50"
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.label}
                </button>
              ))}
            </div>

            {/* Hero Card */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeCategory}-${currentHeroIndex}`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col md:flex-row gap-6"
                >
                  {/* Hero Image */}
                  <div className="md:w-1/2">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                      <Image
                        src={currentHero.image}
                        alt={currentHero.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Hero Info */}
                  <div className="md:w-1/2 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="text-4xl mb-2 block">{currentHero.flag}</span>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-200 mb-2">
                        {currentHero.name}
                      </h3>
                      <p className="text-lg text-gray-400 mb-4">{currentHero.title}</p>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {currentHero.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <div className="flex items-center justify-between mt-6">
                <button
                  onClick={prevHero}
                  className="p-3 rounded-full bg-slate-700 hover:bg-slate-600 text-gray-200 transition-colors"
                  aria-label="Previous hero"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Indicator Dots */}
                <div className="flex gap-2">
                  {currentHeroes.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentHeroIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentHeroIndex
                          ? "bg-gray-200 w-8"
                          : "bg-slate-600 hover:bg-slate-500"
                      }`}
                      aria-label={`Go to hero ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextHero}
                  className="p-3 rounded-full bg-slate-700 hover:bg-slate-600 text-gray-200 transition-colors"
                  aria-label="Next hero"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Section 5: How We Use AI */}
          <h2 className="text-3xl font-heading font-bold text-gray-200 mt-12 mb-6">
            AI & LLM Technology: Our Competitive Edge
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            Our platform uses state-of-the-art artificial intelligence to:
          </p>

          <ul className="space-y-3 text-gray-300 mb-6 list-disc list-inside">
            <li>Aggregate news from multiple verified sources across the Sahel region</li>
            <li>Analyze trends in agriculture, technology, economics, and security</li>
            <li>Generate comprehensive, well-researched articles with proper citations</li>
            <li>Fact-check claims and identify misinformation patterns</li>
            <li>Translate content to reach global audiences</li>
            <li>Create educational content about Pan-African history</li>
          </ul>

          <p className="text-gray-300 leading-relaxed mb-6">
            Every piece of content is reviewed for accuracy and context, ensuring we maintain the 
            highest journalistic standards while leveraging AI's power to scale our impact.
          </p>

          {/* Call to Action */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 my-12 text-center">
            <h2 className="text-3xl font-heading font-bold text-gray-200 mb-4">
              Join Us on This Journey
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              This is just the beginning. Every week, we'll publish new content celebrating achievements, 
              sharing truth, and educating the world about Pan-African greatness.
            </p>
            <p className="text-lg text-gray-400 mb-6">
              Bookmark this site. Share our stories. Help us spread the truth about what's really 
              happening in Mali, Burkina Faso, and Niger.
            </p>
            <p className="text-2xl font-bold text-gray-200">
              The future is being written in the Sahel. We're here to tell that story.
            </p>
          </div>

          {/* Footer */}
          <div className="border-t border-slate-700 pt-8 mt-12">
            <p className="text-gray-400 text-center">
              <strong className="text-gray-200">Next Week:</strong> Agricultural Innovation in Burkina Faso - How Ibrahim Traoré's 
              farming offensive is changing food security forever
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
