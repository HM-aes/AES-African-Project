"use client";

import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import { useState } from "react";

interface VideoPlayerProps {
  videoId: string; // YouTube video ID
  title: string;
  description?: string;
  source?: string; // e.g., "Faso7"
  sourceIcon?: string; // Optional source logo/icon path
  autoPlay?: boolean;
}

export function VideoPlayer({
  videoId,
  title,
  description,
  source = "YouTube",
  sourceIcon,
  autoPlay = false,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isHovered, setIsHovered] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=${isPlaying ? 1 : 0}&rel=0`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      {/* Pan-African Gradient Border Wrapper */}
      <div className="relative rounded-3xl p-1 bg-gradient-to-r from-amber-500 via-green-500 to-red-500 shadow-[0_0_40px_rgba(245,158,11,0.3),0_0_40px_rgba(34,197,94,0.3),0_0_40px_rgba(239,68,68,0.3)]">
        <div className="relative bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden">
          
          {/* Video Container */}
          <div
            className="relative aspect-video w-full overflow-hidden bg-neutral-900"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {!isPlaying ? (
              <>
                {/* Thumbnail with Play Button Overlay */}
                <img
                  src={thumbnailUrl}
                  alt={title}
                  className="w-full h-full object-cover"
                />
                
                {/* Dark overlay on hover */}
                <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
                
                {/* Play Button */}
                <motion.button
                  onClick={() => setIsPlaying(true)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute inset-0 flex items-center justify-center group cursor-pointer"
                >
                  <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-green-500 to-red-500 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
                    
                    {/* Play button */}
                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-white dark:bg-neutral-900 border-4 border-white dark:border-neutral-800 flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.3)] group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all">
                      <Play className="w-8 h-8 md:w-10 md:h-10 text-neutral-900 dark:text-white ml-1 fill-current" />
                    </div>
                  </div>
                  
                  {/* Watch Now Text */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm px-6 py-2 rounded-full"
                  >
                    <span className="text-white font-semibold text-sm md:text-base">Watch Now</span>
                  </motion.div>
                </motion.button>

                {/* Source Badge */}
                {source && (
                  <div className="absolute top-4 right-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/80 backdrop-blur-md border border-white/20">
                    {sourceIcon && (
                      <img src={sourceIcon} alt={source} className="w-5 h-5 rounded" />
                    )}
                    <span className="text-white text-sm font-semibold">{source}</span>
                  </div>
                )}
              </>
            ) : (
              /* YouTube Iframe */
              <iframe
                src={videoUrl}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            )}
          </div>

          {/* Video Info Section */}
          <div className="p-6 md:p-8 bg-gradient-to-br from-neutral-50 via-white to-neutral-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 border-t border-neutral-200 dark:border-neutral-700">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-[#e8e8ec] mb-2">
                  {title}
                </h3>
                {description && (
                  <p className="text-sm md:text-base text-neutral-600 dark:text-[#8a8a94] leading-relaxed">
                    {description}
                  </p>
                )}
              </div>
              
              {/* Watch on YouTube Button */}
              <a
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-white text-sm font-semibold rounded-lg transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="hidden md:inline">Watch on YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
