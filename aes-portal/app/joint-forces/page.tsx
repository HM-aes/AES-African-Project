import { Metadata } from "next";
import { motion } from "framer-motion";
import { Shield, Users, Target, Globe, Zap, ArrowLeft, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AES Joint Forces | Alliance of Sahel States",
  description: "Learn about the unified military command securing the Sahel through collective strength. Elite forces from Mali, Burkina Faso, and Niger united under one command.",
};

export default function JointForcesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="/aes/AES/aes-leaders-walk.jpg"
          alt="AES Joint Forces"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-6xl mx-auto">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/40 mb-4">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">
                Unified Defense
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-4">
              AES Joint Forces
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-2xl">
              Securing the Sahel through collective strength and African-led defense
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
                <h2>A New Era of African Security</h2>
                <p>
                  The AES Joint Force represents a historic departure from dependency on foreign military 
                  powers. For the first time, three Sahelian nations have united their elite forces under 
                  a single command structure, demonstrating that African nations can effectively secure 
                  their own territories.
                </p>
                
                <p>
                  Comprising over 5,000 personnel from Mali, Burkina Faso, and Niger, the Joint Force 
                  conducts coordinated operations against terrorism, secures borders, and provides rapid 
                  response capabilities across the Sahel region.
                </p>

                <h2>Strategic Objectives</h2>
                <ul>
                  <li><strong>Counter-Terrorism:</strong> Coordinated operations against armed groups threatening regional stability</li>
                  <li><strong>Border Security:</strong> Unified patrols and intelligence sharing along shared borders</li>
                  <li><strong>Rapid Response:</strong> Quick deployment capabilities for emerging threats</li>
                  <li><strong>Training & Development:</strong> Building professional, well-equipped African forces</li>
                </ul>

                <h2>Partnership with Africa Corps</h2>
                <p>
                  The AES has forged a strategic military partnership with Russia, receiving modern equipment, 
                  training, and technical support. This partnership is based on mutual respect and sovereignty—
                  with no conditions attached that compromise African independence.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Stats Card */}
              <div className="bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800">
                <h3 className="text-lg font-bold text-foreground dark:text-white mb-4">Key Statistics</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Personnel</span>
                    <span className="font-bold text-emerald-500">5,000+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Member States</span>
                    <span className="font-bold text-emerald-500">3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Established</span>
                    <span className="font-bold text-emerald-500">2023</span>
                  </div>
                </div>
              </div>

              {/* Features Card */}
              <div className="bg-emerald-500/10 rounded-2xl p-6 border border-emerald-500/30">
                <h3 className="text-lg font-bold text-foreground dark:text-white mb-4">Capabilities</h3>
                <ul className="space-y-3">
                  {[
                    { icon: Users, text: "Unified Command" },
                    { icon: Target, text: "Joint Operations" },
                    { icon: Globe, text: "Intelligence Network" },
                    { icon: Zap, text: "Rapid Response" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-emerald-500" />
                      <span className="text-sm text-foreground dark:text-neutral-300">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Card */}
              <div className="bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800">
                <h3 className="text-lg font-bold text-foreground dark:text-white mb-2">Latest News</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Stay updated with the latest developments in AES security operations.
                </p>
                <Link
                  href="/blog?tag=joint-forces"
                  className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 font-semibold text-sm"
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
