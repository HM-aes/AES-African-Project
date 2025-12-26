"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TechPage() {
  return (
    <div className="min-h-screen bg-background py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-gray-200 mb-6">
              AES <span className="text-gray-400">Tech News</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Showcasing groundbreaking achievements in AI, robotics, and technology across the Alliance of Sahel States
            </p>
          </motion.div>
        </header>

        {/* Featured Story - Burkina Faso Robotics */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="mb-4">
            <span className="px-4 py-2 bg-blue-500/20 text-blue-400 text-sm font-semibold rounded-full border border-blue-500/30">
              Featured Story
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-200 mt-8 mb-6">
            🤖 Burkina Faso's Rising Stars: AI & Robotics Achievements
          </h2>

          {/* Presidential Recognition Image */}
          <div className="my-8 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/Users/hm/.gemini/antigravity/brain/46550c41-b2ac-499f-9a8c-5b33d98a6472/uploaded_image_1765646510000.jpg"
              alt="Captain Ibrahim Traoré awarding robotics winners"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
            <p className="text-sm text-gray-400 mt-2 text-center italic bg-slate-800/40 py-2">
              Captain Ibrahim Traoré personally awards Burkina Faso's robotics champions
            </p>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Under the visionary leadership of <strong className="text-gray-200">Captain Ibrahim Traoré</strong>, 
              Burkina Faso's youth are making history on the global tech stage. This is the kind of achievement 
              mainstream media won't tell you about—but we will.
            </p>

            {/* Scrollable Achievement Cards */}
            <div className="overflow-x-auto pb-4 my-12">
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
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 rounded-xl p-8 my-12">
              <h3 className="text-2xl font-bold text-gray-200 mb-6">🇧🇫 Why This Matters</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1 text-xl">▸</span>
                  <span><strong className="text-gray-200">Presidential Support:</strong> Traoré personally receives and celebrates winners, elevating STEM to national priority</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1 text-xl">▸</span>
                  <span><strong className="text-gray-200">Practical Solutions:</strong> GobeLab engineers design robots for biodiversity restoration and sanitation—solving local challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1 text-xl">▸</span>
                  <span><strong className="text-gray-200">Tech Sovereignty:</strong> Building homegrown AI and robotics capabilities, reducing dependence on foreign technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1 text-xl">▸</span>
                  <span><strong className="text-gray-200">Youth Empowerment:</strong> Discovering and nurturing hidden talents across the nation through Faso Andubè platform</span>
                </li>
              </ul>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              While Western media focuses on challenges, <strong className="text-gray-200">Burkina Faso is building the future</strong>. 
              These aren't just competitions—they're proof that African youth, when supported by visionary leadership, 
              can compete and win on the global stage. This is the AES difference.
            </p>

            {/* Detailed Story Section */}
            <div className="mt-16 space-y-8">
              <h3 className="text-3xl font-heading font-bold text-gray-200">The Full Story</h3>
              
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-gray-200">International Recognition</h4>
                <p className="text-gray-300 leading-relaxed">
                  In 2025, Burkinabe youth teams participated in two major global competitions, securing prestigious awards 
                  that demonstrate their technical prowess and problem-solving abilities. The FIRST Global Challenge, an 
                  Olympics-style international robotics competition bringing together youth from over 190 nations, saw 
                  Burkina Faso's team win the coveted Judges Award Gold Medal.
                </p>
                
                <h4 className="text-2xl font-bold text-gray-200">Presidential Leadership</h4>
                <p className="text-gray-300 leading-relaxed">
                  Captain Traoré's support goes beyond symbolic gestures. His government has launched the "Digital Revolution," 
                  integrating coding, robotics, electronics, and AI into school curricula nationwide. The Faso Andubè digital 
                  platform actively discovers and nurtures technological talents across the country, ensuring no young innovator 
                  is left behind.
                </p>
                
                <h4 className="text-2xl font-bold text-gray-200">Real-World Applications</h4>
                <p className="text-gray-300 leading-relaxed">
                  The GobeLab engineers representing Burkina Faso aren't just building robots for competition—they're creating 
                  solutions for biodiversity restoration, sanitation, and other pressing challenges facing the Sahel region. 
                  This practical focus ensures technology serves the people's needs, not just academic exercises.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-700/30 rounded-2xl p-8 my-12 text-center">
              <h3 className="text-3xl font-heading font-bold text-gray-200 mb-4">
                This is Just the Beginning
              </h3>
              <p className="text-xl text-gray-300 mb-6">
                Follow AES Tech News for weekly updates on technological achievements, AI breakthroughs, 
                and innovation across Mali, Burkina Faso, and Niger.
              </p>
              <p className="text-gray-400">
                The future is being built in the Sahel. Stay informed.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
