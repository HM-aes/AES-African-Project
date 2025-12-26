import { Metadata } from "next";
import { Landmark, Building2, Coins, TrendingUp, Factory, ArrowLeft, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AES Investment Bank | Alliance of Sahel States",
  description: "The Confederation Investment and Development Bank (BCID-AES) - Building economic independence with $895 million in capital for infrastructure, energy, and agriculture.",
};

export default function InvestmentBankPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/aes-investment-bank.png"
          alt="AES Investment Bank"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-6xl mx-auto">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/40 mb-4">
              <Landmark className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-amber-400 uppercase tracking-wider">
                Financial Sovereignty
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-4">
              AES Investment Bank
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-2xl">
              Building economic independence through African-owned finance
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>A Historic Step Toward Financial Independence</h2>
                <p>
                  The Confederation Investment and Development Bank (BCID-AES) represents a groundbreaking 
                  achievement in African self-determination. With an initial capital of 500 billion CFA francs 
                  (approximately $895 million), this institution will fund the infrastructure, energy, and 
                  agricultural projects that our nations need—without strings attached from external donors.
                </p>
                
                <p>
                  Funded in part by national tax revenues from Mali, Burkina Faso, and Niger, the bank 
                  embodies the AES commitment to economic sovereignty. Finance ministers view it as a 
                  strategic tool to reduce reliance on foreign financial institutions while supporting 
                  long-term regional development.
                </p>

                <h2>Investment Priorities</h2>
                <ul>
                  <li><strong>Infrastructure:</strong> Roads, bridges, and transportation networks connecting the Sahel</li>
                  <li><strong>Energy:</strong> Solar, hydroelectric, and energy distribution projects</li>
                  <li><strong>Agriculture:</strong> Irrigation, food processing, and agricultural technology</li>
                  <li><strong>Industry:</strong> Manufacturing facilities and industrial parks</li>
                  <li><strong>Trade:</strong> Financing for intra-AES commerce and regional integration</li>
                </ul>

                <h2>Breaking Free from External Dependency</h2>
                <p>
                  For decades, African development has been financed by external institutions with conditions 
                  that often served foreign interests rather than local populations. The BCID-AES changes 
                  this paradigm—offering development funding controlled entirely by African nations, 
                  with priorities set by African leaders.
                </p>
                
                <blockquote>
                  &quot;He who feeds you, controls you.&quot; — Thomas Sankara
                </blockquote>
                
                <p>
                  This bank is the materialization of Sankara&apos;s vision: African nations funding their own 
                  development, free from the influence of external powers.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Stats Card */}
              <div className="bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800">
                <h3 className="text-lg font-bold text-foreground dark:text-white mb-4">Key Figures</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Initial Capital</span>
                    <span className="font-bold text-amber-500">$895M</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">CFA Francs</span>
                    <span className="font-bold text-amber-500">500B</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Member States</span>
                    <span className="font-bold text-amber-500">3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Launched</span>
                    <span className="font-bold text-amber-500">2024</span>
                  </div>
                </div>
              </div>

              {/* Focus Areas Card */}
              <div className="bg-amber-500/10 rounded-2xl p-6 border border-amber-500/30">
                <h3 className="text-lg font-bold text-foreground dark:text-white mb-4">Focus Areas</h3>
                <ul className="space-y-3">
                  {[
                    { icon: Building2, text: "Infrastructure" },
                    { icon: Factory, text: "Industry" },
                    { icon: Coins, text: "Trade Finance" },
                    { icon: TrendingUp, text: "Development" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-amber-500" />
                      <span className="text-sm text-foreground dark:text-neutral-300">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Card */}
              <div className="bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800">
                <h3 className="text-lg font-bold text-foreground dark:text-white mb-2">Latest News</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Stay updated with the latest developments in AES economic initiatives.
                </p>
                <Link
                  href="/blog?tag=investment-bank"
                  className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-semibold text-sm"
                >
                  View All Updates
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
