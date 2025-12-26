"use client";

import { motion } from "framer-motion";
import { Wheat, Pickaxe, Building, Zap, GraduationCap, Cpu, ChevronRight } from "lucide-react";
import { useState } from "react";

interface Sector {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  color: string;
  bgGradient: string;
  borderColor: string;
  achievements: string[];
  projects: string[];
  stats: { label: string; value: string }[];
}

const sectors: Sector[] = [
  {
    id: "agriculture",
    title: "Agriculture & Food Security",
    subtitle: "From imports to self-sufficiency",
    icon: Wheat,
    color: "text-green-500",
    bgGradient: "from-green-500/20 to-green-600/10",
    borderColor: "border-green-500/40",
    achievements: [
      "Launched 'Produce What We Eat' campaign",
      "Distributed modern farming equipment",
      "Built irrigation systems across arid regions",
      "Created farmer cooperatives for better pricing",
    ],
    projects: [
      "1 Million Hectares Irrigation Project (Mali)",
      "National Food Reserve Program (Burkina)",
      "Agricultural Mechanization Initiative (Niger)",
    ],
    stats: [
      { label: "Hectares irrigated", value: "500K+" },
      { label: "Food self-sufficiency", value: "75%" },
      { label: "Farmer income increase", value: "+60%" },
    ],
  },
  {
    id: "mining",
    title: "Mining & Resources",
    subtitle: "Taking control of our wealth",
    icon: Pickaxe,
    color: "text-amber-500",
    bgGradient: "from-amber-500/20 to-amber-600/10",
    borderColor: "border-amber-500/40",
    achievements: [
      "Renegotiated mining contracts with foreign firms",
      "Established state-owned mining companies",
      "Increased revenue share from 15% to 80%",
      "Built local gold refineries",
    ],
    projects: [
      "National Gold Refinery (Mali)",
      "Uranium Revenue Renegotiation (Niger)",
      "Artisanal Mining Formalization (Burkina)",
    ],
    stats: [
      { label: "Revenue retained", value: "80%" },
      { label: "Jobs created", value: "150K+" },
      { label: "New mines operational", value: "12" },
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure & Transport",
    subtitle: "Connecting our nations",
    icon: Building,
    color: "text-orange-500",
    bgGradient: "from-orange-500/20 to-orange-600/10",
    borderColor: "border-orange-500/40",
    achievements: [
      "Trans-Sahel Highway construction underway",
      "New hospitals and schools in rural areas",
      "Airport modernization projects",
      "Cross-border trade facilitation",
    ],
    projects: [
      "Bamako-Niamey-Ouagadougou Highway",
      "Rural Electrification Program",
      "AES Rail Network (Planned)",
    ],
    stats: [
      { label: "Roads built (km)", value: "2,400+" },
      { label: "Schools constructed", value: "800+" },
      { label: "Hospitals opened", value: "45" },
    ],
  },
  {
    id: "energy",
    title: "Energy & Power",
    subtitle: "Lighting up the Sahel",
    icon: Zap,
    color: "text-yellow-500",
    bgGradient: "from-yellow-500/20 to-yellow-600/10",
    borderColor: "border-yellow-500/40",
    achievements: [
      "Solar power plants across all three nations",
      "Rural electrification reaching remote villages",
      "Hydroelectric dam projects",
      "Energy independence from former colonizers",
    ],
    projects: [
      "Sahel Solar Initiative (500MW)",
      "Kandadji Dam (Niger)",
      "National Grid Interconnection",
    ],
    stats: [
      { label: "Population with electricity", value: "52%" },
      { label: "Renewable capacity (MW)", value: "850+" },
      { label: "Villages electrified", value: "3,200+" },
    ],
  },
  {
    id: "education",
    title: "Education & Training",
    subtitle: "Investing in our future",
    icon: GraduationCap,
    color: "text-blue-500",
    bgGradient: "from-blue-500/20 to-blue-600/10",
    borderColor: "border-blue-500/40",
    achievements: [
      "Free primary education initiatives",
      "Technical training centers for youth",
      "University scholarship programs",
      "Curriculum reform emphasizing African history",
    ],
    projects: [
      "AES Technical University",
      "Pan-African Youth Skills Program",
      "Digital Literacy Initiative",
    ],
    stats: [
      { label: "School enrollment", value: "68%" },
      { label: "Teachers trained", value: "25K+" },
      { label: "Scholarships awarded", value: "10K+" },
    ],
  },
  {
    id: "technology",
    title: "Technology & Innovation",
    subtitle: "Leapfrogging into the future",
    icon: Cpu,
    color: "text-purple-500",
    bgGradient: "from-purple-500/20 to-purple-600/10",
    borderColor: "border-purple-500/40",
    achievements: [
      "Digital government services rollout",
      "Tech incubators in major cities",
      "Mobile banking expansion",
      "Cybersecurity infrastructure development",
    ],
    projects: [
      "AES Digital Identity System",
      "Sahel Tech Hub Network",
      "E-Government Platform",
    ],
    stats: [
      { label: "Internet penetration", value: "35%" },
      { label: "Mobile money users", value: "15M+" },
      { label: "Tech startups launched", value: "200+" },
    ],
  },
];

export function DevelopmentSectors() {
  const [expandedSector, setExpandedSector] = useState<string | null>(null);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-radial from-amber-500/10 via-transparent to-transparent blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-radial from-green-500/10 via-transparent to-transparent blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6"
          >
            <Building className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-semibold text-amber-500 uppercase tracking-wider">
              Building the Future
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground dark:text-white mb-6">
            Sectors of{" "}
            <span className="bg-gradient-to-r from-amber-500 via-green-500 to-blue-500 bg-clip-text text-transparent">
              Growth
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Real development across every sector—driven by African solutions for African challenges.
          </p>

          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-amber-500 via-green-500 to-blue-500 rounded-full mt-8" />
        </motion.div>

        {/* Sectors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                layout
                onClick={() => setExpandedSector(expandedSector === sector.id ? null : sector.id)}
                className={`relative bg-white dark:bg-neutral-900 backdrop-blur-sm border-2 border-neutral-800 dark:border-neutral-600 rounded-2xl overflow-hidden cursor-pointer hover:border-amber-500 dark:hover:border-amber-500 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_15px_rgba(0,0,0,0.3)]`}
              >
                {/* Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl ${sector.bgGradient}`}>
                      <sector.icon className={`w-6 h-6 ${sector.color}`} />
                    </div>
                    <motion.div
                      animate={{ rotate: expandedSector === sector.id ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className={`w-5 h-5 ${sector.color}`} />
                    </motion.div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground dark:text-white mb-1">
                    {sector.title}
                  </h3>
                  <p className="text-sm text-muted-foreground dark:text-gray-400">
                    {sector.subtitle}
                  </p>

                  {/* Stats Preview */}
                  <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-white/10">
                    {sector.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <p className={`text-lg font-bold ${sector.color}`}>{stat.value}</p>
                        <p className="text-[10px] text-muted-foreground dark:text-gray-500 uppercase">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expanded Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedSector === sector.id ? "auto" : 0,
                    opacity: expandedSector === sector.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 space-y-4">
                    {/* Achievements */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground dark:text-white mb-2">
                        Key Achievements
                      </h4>
                      <ul className="space-y-1.5">
                        {sector.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground dark:text-gray-400">
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${sector.color.replace('text-', 'bg-')}`} />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Major Projects */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground dark:text-white mb-2">
                        Major Projects
                      </h4>
                      <ul className="space-y-1.5">
                        {sector.projects.map((project, i) => (
                          <li key={i} className={`text-sm ${sector.color} font-medium`}>
                            → {project}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground dark:text-gray-400 mb-6">
            Click on any sector to explore detailed achievements and ongoing projects
          </p>
          <motion.a
            href="/aes"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-600 to-green-600 hover:from-amber-500 hover:to-green-500 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Full AES Story
            <ChevronRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
