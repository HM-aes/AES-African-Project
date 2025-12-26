"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface HeroCardProps {
  name: string;
  role: string;
  country: string;
  description: string;
  imageUrl: string;
  index: number;
}

export function HeroCard({
  name,
  role,
  country,
  description,
  imageUrl,
  index,
}: HeroCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.1, // Stagger effect
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [index]);

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full border-none shadow-lg bg-white/5 backdrop-blur-sm dark:bg-black/20 dark:border-white/10 group">
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-1">
              {country}
            </p>
            <h3 className="text-2xl font-bold font-serif leading-tight">
              {name}
            </h3>
          </div>
        </div>

        <CardContent className="pt-6">
          <p className="text-sm font-semibold text-muted-foreground mb-2">
            {role}
          </p>
          <p className="text-muted-foreground line-clamp-3">
            {description}
          </p>
        </CardContent>

        <CardFooter>
          <Button 
            variant="ghost" 
            className="w-full justify-between group/btn hover:bg-gray-50 dark:hover:bg-gray-900/20 hover:text-gray-600 dark:hover:text-gray-400"
          >
            Learn Story
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
