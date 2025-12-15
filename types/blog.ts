/**
 * TypeScript types for AI-generated blog posts.
 * These match the Pydantic models in scripts/ai_writer.py
 */

export interface NewsSource {
  title: string;
  url: string;
  published: string; // ISO format date
  summary: string;
  source_name?: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  date: string; // ISO format date
  content: string; // Markdown content
  excerpt: string;
  sources: NewsSource[];
  tags: string[];
  author: string;
  status: "draft" | "published";
  image_url?: string;
  reading_time?: number; // Minutes
}

export interface BlogMetadata {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  reading_time?: number;
  image_url?: string;
}
