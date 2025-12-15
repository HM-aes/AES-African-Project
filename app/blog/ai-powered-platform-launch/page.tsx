import Image from "next/image";

export default function AILaunchBlogPost() {
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

          {/* Section 2: Why Now? */}
          <h2 className="text-3xl font-heading font-bold text-gray-200 mt-12 mb-6">
            Why Now? The AES Story Deserves to Be Told
          </h2>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <Image
              src="/images/aes_agriculture_boom.png"
              alt="Agricultural development in the Sahel"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto object-cover"
            />
            <Image
              src="/images/aes_joint_forces.png"
              alt="AES Joint Special Forces"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>

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

          <div className="my-8 rounded-xl overflow-hidden">
            <Image
              src="/AES/AES/ThomasSankara.jpg"
              alt="Thomas Sankara"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
            <p className="text-sm text-gray-400 mt-2 text-center italic">
              Thomas Sankara - Revolutionary leader whose spirit lives on in today's AES movement
            </p>
          </div>

          <p className="text-gray-300 leading-relaxed mb-6">
            Every week, we'll educate readers about the giants upon whose shoulders we stand:
          </p>

          <div className="space-y-6 mb-8">
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-200 mb-3">🇨🇩 Patrice Lumumba</h3>
              <p className="text-gray-300">
                The first democratically elected Prime Minister of Congo, whose vision for African independence 
                and resource sovereignty cost him his life but inspired generations.
              </p>
            </div>

            <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-200 mb-3">🇸🇳 Cheikh Anta Diop</h3>
              <p className="text-gray-300">
                The brilliant historian who proved that ancient Egyptian civilization was African, 
                restoring pride and correcting centuries of historical distortion.
              </p>
            </div>

            <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-200 mb-3">⚓ The Mansa Musa Voyages</h3>
              <p className="text-gray-300">
                Evidence suggests Malian explorers reached the Americas in the 14th century, long before 
                Columbus. These forgotten truths will be explored in depth.
              </p>
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
