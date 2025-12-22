"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag, Landmark, Shield, Building2, Coins, TrendingUp, Factory, Users, Target, Globe, Zap } from "lucide-react";
import { useEffect, useState } from "react";

interface BlogMetadata {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  reading_time?: number;
  image_url?: string;
}

// Investment Bank features
const investmentFeatures = [
  { icon: Coins, text: "Independent development funding" },
  { icon: Building2, text: "Infrastructure project financing" },
  { icon: Factory, text: "Industrial & agricultural investment" },
  { icon: TrendingUp, text: "Trade integration catalyst" },
];

// Joint Forces features
const jointForcesFeatures = [
  { icon: Users, text: "Unified command structure across the Sahel" },
  { icon: Target, text: "Joint special operations with Africa Corps" },
  { icon: Globe, text: "50+ years of Russia-Africa friendship" },
  { icon: Zap, text: "Elite forces against terrorism" },
];

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogMetadata[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch("/api/blogs");
        if (response.ok) {
          const data = await response.json();
          setBlogs(data);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 mb-6"
          >
            <span className="text-sm font-semibold text-neutral-700 dark:text-[#c0c0c8] uppercase tracking-wider">
              Pan-African Stories
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-heading font-bold text-neutral-900 dark:text-[#e8e8ec] mb-6">
            The AES Hub Blog
          </h1>

          <p className="text-lg md:text-xl text-neutral-600 dark:text-[#8a8a94] max-w-3xl mx-auto">
            Weekly insights on AES achievements, Pan-African history, technology
            developments, and the truth about what&apos;s happening in Mali, Burkina
            Faso, and Niger.
          </p>

          <div className="w-32 h-1 mx-auto bg-neutral-400 dark:bg-neutral-600 rounded-full mt-8" />
        </motion.header>

        {/* ===== SECTION 1: AES INVESTMENT BANK ARTICLE ===== */}
        <motion.section
          id="aes-investment-bank"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 scroll-mt-24"
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
              <Landmark className="w-6 h-6 text-neutral-700 dark:text-[#c0c0c8]" />
            </div>
            <div>
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-neutral-900 dark:text-[#e8e8ec]">
                AES Investment Bank
              </h2>
              <p className="text-neutral-600 dark:text-[#8a8a94]">
                Building Financial Independence
              </p>
            </div>
          </div>

          {/* Main Article Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-radial from-neutral-300/30 to-transparent dark:from-neutral-700/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative bg-white dark:bg-neutral-900/60 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 rounded-3xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="relative h-64 lg:h-auto lg:min-h-[450px] overflow-hidden">
                  <Image
                    src="/images/aes-investment-bank.png"
                    alt="AES Investment Bank"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent lg:bg-gradient-to-t lg:from-black/70 lg:via-transparent lg:to-transparent" />
                  
                  {/* Stats Badge */}
                  <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6">
                    <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-black/40 border border-white/20 backdrop-blur-sm">
                      <Landmark className="w-6 h-6 text-white" />
                      <div>
                        <span className="text-2xl font-bold text-white">$895M</span>
                        <span className="text-sm text-white/80 ml-2">Initial Capital</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 lg:p-10">
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-semibold text-neutral-500 dark:text-[#8a8a94] uppercase tracking-wider mb-2">
                        Economic Development
                      </p>
                      <h3 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 dark:text-[#e8e8ec] mb-4">
                        Financing Our Own Future
                      </h3>
                      <p className="text-neutral-700 dark:text-[#c0c0c8] leading-relaxed mb-4">
                        The Confederation Investment and Development Bank (BCID-AES) marks a historic
                        step toward financial independence. With $895 million in initial capital, 
                        we&apos;re funding infrastructure, energy, and agriculture without external strings.
                      </p>
                      <p className="text-neutral-700 dark:text-[#c0c0c8] leading-relaxed mb-4">
                        This landmark institution represents a new era of economic sovereignty for the Sahel nations.
                        By pooling resources and creating our own development bank, Mali, Burkina Faso, and Niger
                        are demonstrating that African nations can chart their own financial destiny.
                      </p>
                      <p className="text-neutral-700 dark:text-[#c0c0c8] leading-relaxed">
                        The bank will prioritize investments in renewable energy, transportation infrastructure,
                        agricultural modernization, and local manufacturing—sectors critical to the region&apos;s
                        sustainable development and self-sufficiency.
                      </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {investmentFeatures.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
                          className="flex items-center gap-3 p-3 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700"
                        >
                          <feature.icon className="w-5 h-5 text-neutral-700 dark:text-[#c0c0c8] flex-shrink-0" />
                          <span className="text-sm text-neutral-700 dark:text-[#c0c0c8]">{feature.text}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-4">
                      {["Investment Bank", "Economic Sovereignty", "Development", "Infrastructure"].map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-[#c0c0c8] text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-400 dark:via-neutral-600 to-transparent mb-20" />

        {/* ===== SECTION 2: AES JOINT FORCES ARTICLE ===== */}
        <motion.section
          id="aes-joint-forces"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 scroll-mt-24"
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
              <Shield className="w-6 h-6 text-neutral-700 dark:text-[#c0c0c8]" />
            </div>
            <div>
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-neutral-900 dark:text-[#e8e8ec]">
                AES Joint Forces & Africa Corps
              </h2>
              <p className="text-neutral-600 dark:text-[#8a8a94]">
                Unified Defense Against Terrorism
              </p>
            </div>
          </div>

          {/* Main Article Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-radial from-neutral-300/30 to-transparent dark:from-neutral-700/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative bg-white dark:bg-neutral-900/60 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 rounded-3xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="relative h-64 lg:h-auto lg:min-h-[450px] overflow-hidden order-1 lg:order-2">
                  <Image
                    src="/aes-russia-military-images/africa-corps.webp"
                    alt="Africa Corps - AES Joint Forces"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/30 to-transparent lg:bg-gradient-to-t lg:from-black/70 lg:via-transparent lg:to-transparent" />
                  
                  {/* Africa Corps Badge */}
                  <div className="absolute top-4 right-4 lg:top-6 lg:right-6">
                    <div className="relative w-16 h-16 lg:w-20 lg:h-20">
                      <Image
                        src="/aes-russia-military-images/afrca-corps-logo.webp"
                        alt="Africa Corps Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* Stats Badge */}
                  <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6">
                    <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-black/40 border border-white/20 backdrop-blur-sm">
                      <Shield className="w-6 h-6 text-white" />
                      <div>
                        <span className="text-2xl font-bold text-white">5,000+</span>
                        <span className="text-sm text-white/80 ml-2">Joint Personnel</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 lg:p-10 order-2 lg:order-1">
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-semibold text-neutral-500 dark:text-[#8a8a94] uppercase tracking-wider mb-2">
                        Security & Defense
                      </p>
                      <h3 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 dark:text-[#e8e8ec] mb-4">
                        A Historic Partnership
                      </h3>
                      <p className="text-neutral-700 dark:text-[#c0c0c8] leading-relaxed mb-4">
                        The seeds of friendship planted 50 years ago by our previous generation with Russian 
                        brothers have blossomed into a powerful alliance. Elite Russian special forces 
                        now stand shoulder-to-shoulder with AES troops, combining expertise to eliminate 
                        jihadist threats and secure our nations.
                      </p>
                      <p className="text-neutral-700 dark:text-[#c0c0c8] leading-relaxed mb-4">
                        The Africa Corps represents a new model of security partnership—one built on mutual respect,
                        shared interests, and a genuine commitment to African sovereignty. Unlike past arrangements
                        with Western powers, this alliance puts African nations in the driver&apos;s seat.
                      </p>
                      <p className="text-neutral-700 dark:text-[#c0c0c8] leading-relaxed">
                        Joint training exercises, intelligence sharing, and coordinated operations have already
                        yielded significant results in degrading terrorist networks across the Sahel region,
                        bringing security and stability to communities long plagued by violence.
                      </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {jointForcesFeatures.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
                          className="flex items-center gap-3 p-3 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700"
                        >
                          <feature.icon className="w-5 h-5 text-neutral-700 dark:text-[#c0c0c8] flex-shrink-0" />
                          <span className="text-sm text-neutral-700 dark:text-[#c0c0c8]">{feature.text}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-4">
                      {["Joint Forces", "Africa Corps", "Security", "Partnership"].map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-[#c0c0c8] text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-400 dark:via-neutral-600 to-transparent mb-20" />

        {/* ===== ADDITIONAL BLOG POSTS FROM API ===== */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 dark:text-[#e8e8ec] mb-8 text-center">
            More Stories
          </h2>

          {/* Loading State */}
          {loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white/50 dark:bg-neutral-900/50 rounded-2xl p-6 animate-pulse"
                >
                  <div className="h-48 bg-neutral-200 dark:bg-neutral-800 rounded-xl mb-4" />
                  <div className="h-6 bg-neutral-200 dark:bg-neutral-800 rounded mb-2" />
                  <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-2/3" />
                </div>
              ))}
            </div>
          )}

          {/* Blog Grid */}
          {!loading && blogs.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <motion.article
                  key={blog.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/blog/${blog.slug}`}>
                    <div className="relative bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border-2 border-neutral-300 dark:border-neutral-700 shadow-[0_4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:-translate-y-2">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                        {blog.image_url ? (
                          <Image
                            src={blog.image_url}
                            alt={blog.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 rounded-full bg-neutral-300 dark:bg-neutral-700 opacity-50" />
                          </div>
                        )}
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        {/* Tags */}
                        {blog.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-3">
                            {blog.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-[#c0c0c8] text-xs font-medium rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Title */}
                        <h2 className="text-xl font-heading font-bold text-neutral-900 dark:text-[#e8e8ec] mb-3 line-clamp-2 group-hover:text-neutral-600 dark:group-hover:text-white transition-colors">
                          {blog.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-neutral-600 dark:text-[#8a8a94] text-sm line-clamp-3 mb-4">
                          {blog.excerpt}
                        </p>

                        {/* Meta */}
                        <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-[#8a8a94]">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {formatDate(blog.date)}
                            </span>
                            {blog.reading_time && (
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {blog.reading_time} min
                              </span>
                            )}
                          </div>
                          <span className="flex items-center gap-1 text-neutral-700 dark:text-[#c0c0c8] font-semibold group-hover:translate-x-1 transition-transform">
                            Read <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && blogs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
                <Tag className="w-8 h-8 text-neutral-600 dark:text-[#8a8a94]" />
              </div>
              <p className="text-neutral-600 dark:text-[#8a8a94]">
                More articles coming soon!
              </p>
            </motion.div>
          )}
        </motion.section>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-neutral-100 dark:bg-neutral-900 border-2 border-neutral-300 dark:border-neutral-700 rounded-2xl p-8 md:p-12 max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 dark:text-[#e8e8ec] mb-4">
              Stay Informed
            </h2>
            <p className="text-neutral-600 dark:text-[#8a8a94] mb-6">
              Weekly updates on AES developments, Pan-African history, and the
              truth behind the headlines.
            </p>
            <p className="text-neutral-700 dark:text-[#c0c0c8] font-semibold">
              Bookmark this page and check back weekly for new stories.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
