"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6"
          >
            <span className="text-sm font-semibold text-amber-500 uppercase tracking-wider">
              Pan-African Stories
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground dark:text-white mb-6">
            The{" "}
            <span className="bg-gradient-to-r from-amber-500 via-green-500 to-red-500 bg-clip-text text-transparent">
              AES Hub
            </span>{" "}
            Blog
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground dark:text-gray-400 max-w-3xl mx-auto">
            Weekly insights on AES achievements, Pan-African history, technology
            developments, and the truth about what&apos;s happening in Mali, Burkina
            Faso, and Niger.
          </p>

          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-amber-500 via-green-500 to-red-500 rounded-full mt-8" />
        </motion.header>

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
                  <div className="relative bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border-2 border-neutral-800 dark:border-neutral-700 shadow-[0_4px_20px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:-translate-y-2">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-amber-500/20 via-green-500/20 to-red-500/20">
                      {blog.image_url ? (
                        <Image
                          src={blog.image_url}
                          alt={blog.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 via-green-500 to-red-500 opacity-50" />
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
                              className="px-2 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-medium rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Title */}
                      <h2 className="text-xl font-heading font-bold text-foreground dark:text-white mb-3 line-clamp-2 group-hover:text-amber-500 transition-colors">
                        {blog.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-muted-foreground dark:text-gray-400 text-sm line-clamp-3 mb-4">
                        {blog.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-xs text-muted-foreground dark:text-gray-500">
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
                        <span className="flex items-center gap-1 text-amber-500 font-semibold group-hover:translate-x-1 transition-transform">
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
            className="text-center py-20"
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-500/20 via-green-500/20 to-red-500/20 flex items-center justify-center">
              <Tag className="w-10 h-10 text-amber-500" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-foreground dark:text-white mb-4">
              Coming Soon
            </h2>
            <p className="text-muted-foreground dark:text-gray-400 max-w-md mx-auto">
              We&apos;re preparing insightful articles about AES achievements and
              Pan-African history. Check back soon!
            </p>
          </motion.div>
        )}

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-br from-amber-500/10 via-green-500/10 to-red-500/10 dark:from-neutral-900 dark:to-neutral-800 border-2 border-amber-500/30 dark:border-neutral-700 rounded-2xl p-8 md:p-12 max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground dark:text-white mb-4">
              Stay Informed
            </h2>
            <p className="text-muted-foreground dark:text-gray-400 mb-6">
              Weekly updates on AES developments, Pan-African history, and the
              truth behind the headlines.
            </p>
            <p className="text-amber-500 font-semibold">
              Bookmark this page and check back weekly for new stories.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
