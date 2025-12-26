/**
 * Utility functions for loading and managing AI-generated blog posts.
 */

import fs from 'fs';
import path from 'path';
import { BlogPost, BlogMetadata } from '@/types/blog';

/**
 * Get all AI-generated blogs from /data/blogs directory.
 * Only returns published blogs, sorted by date (newest first).
 */
export async function getAIGeneratedBlogs(): Promise<BlogMetadata[]> {
  const blogsDir = path.join(process.cwd(), 'data', 'blogs');

  // Return empty array if directory doesn't exist yet
  if (!fs.existsSync(blogsDir)) {
    return [];
  }

  try {
    const files = fs.readdirSync(blogsDir);

    const blogs = files
      .filter(file => file.endsWith('.json'))
      .map(file => {
        const filePath = path.join(blogsDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const blog: BlogPost = JSON.parse(content);

        // Only return published blogs
        if (blog.status !== 'published') {
          return null;
        }

        // Return metadata only (not full content for list view)
        return {
          slug: blog.slug,
          title: blog.title,
          excerpt: blog.excerpt,
          date: blog.date,
          tags: blog.tags,
          reading_time: blog.reading_time,
          image_url: blog.image_url,
        } as BlogMetadata;
      })
      .filter((blog): blog is BlogMetadata => blog !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return blogs;
  } catch (error) {
    console.error('Error reading blog files:', error);
    return [];
  }
}

/**
 * Get a single blog post by slug.
 */
export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  const blogsDir = path.join(process.cwd(), 'data', 'blogs');
  const filePath = path.join(blogsDir, `${slug}.json`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const blog: BlogPost = JSON.parse(content);

    // Only return if published
    if (blog.status !== 'published') {
      return null;
    }

    return blog;
  } catch (error) {
    console.error(`Error reading blog ${slug}:`, error);
    return null;
  }
}

/**
 * Get all blog slugs for static generation.
 */
export async function getAllBlogSlugs(): Promise<string[]> {
  const blogsDir = path.join(process.cwd(), 'data', 'blogs');

  if (!fs.existsSync(blogsDir)) {
    return [];
  }

  try {
    const files = fs.readdirSync(blogsDir);

    return files
      .filter(file => file.endsWith('.json'))
      .map(file => file.replace('.json', ''));
  } catch (error) {
    console.error('Error reading blog slugs:', error);
    return [];
  }
}
