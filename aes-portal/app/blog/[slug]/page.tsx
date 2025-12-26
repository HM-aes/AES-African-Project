import { notFound } from "next/navigation";
import { getBlogBySlug, getAllBlogSlugs } from "@/lib/blog-utils";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Pan-African Educational Hub`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  // Format date
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-black py-20 px-6">
      <article className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Stories
        </Link>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 pb-8 border-b border-gray-800">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formattedDate}</span>
            </div>

            {post.reading_time && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.reading_time} min read</span>
              </div>
            )}

            <div className="flex items-center gap-2">
              <span className="text-gray-500">by</span>
              <span className="text-white">{post.author}</span>
            </div>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex items-center gap-2 mt-6 flex-wrap">
              <Tag className="w-4 h-4 text-gray-400" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs font-medium rounded-full border border-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Content */}
        <div
          className="prose prose-invert prose-lg max-w-none
            prose-headings:font-heading prose-headings:text-white
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-nano-purple prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white prose-strong:font-semibold
            prose-ul:text-gray-300 prose-ul:my-6
            prose-ol:text-gray-300 prose-ol:my-6
            prose-li:my-2
            prose-blockquote:border-l-4 prose-blockquote:border-nano-purple
            prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-400"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
        />

        {/* Sources */}
        {post.sources.length > 0 && (
          <section className="mt-16 pt-12 border-t border-gray-800">
            <h2 className="text-2xl font-heading font-bold text-white mb-6">
              Sources
            </h2>
            <div className="space-y-4">
              {post.sources.map((source, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-semibold hover:text-nano-purple transition-colors"
                      >
                        {source.title}
                      </a>
                      <p className="text-gray-400 text-sm mt-2">
                        {source.summary}
                      </p>
                      <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                        {source.source_name && (
                          <span>{source.source_name}</span>
                        )}
                        <span>
                          {new Date(source.published).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Back to blog */}
        <div className="mt-16 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-nano-purple hover:bg-nano-purple/80 text-white font-semibold rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Stories
          </Link>
        </div>
      </article>
    </div>
  );
}

// Simple markdown to HTML converter (basic implementation)
function renderMarkdown(markdown: string): string {
  let html = markdown;

  // Headers
  html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.+)$/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.+)$/gm, "<h1>$1</h1>");

  // Bold and italic
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");

  // Links
  html = html.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');

  // Lists
  html = html.replace(/^- (.+)$/gm, "<li>$1</li>");
  html = html.replace(/^(\d+)\. (.+)$/gm, "<li>$2</li>");

  // Wrap consecutive list items in ul/ol
  html = html.replace(/(<li>.*<\/li>\n?)+/g, (match) => {
    return "<ul>" + match + "</ul>";
  });

  // Paragraphs (lines separated by blank lines)
  const lines = html.split("\n");
  const paragraphs: string[] = [];
  let currentParagraph = "";

  for (const line of lines) {
    if (line.trim() === "") {
      if (currentParagraph.trim()) {
        // Don't wrap if it's already an HTML tag
        if (
          !currentParagraph.trim().startsWith("<") ||
          currentParagraph.trim().startsWith("<a")
        ) {
          paragraphs.push(`<p>${currentParagraph.trim()}</p>`);
        } else {
          paragraphs.push(currentParagraph.trim());
        }
        currentParagraph = "";
      }
    } else {
      currentParagraph += line + " ";
    }
  }

  if (currentParagraph.trim()) {
    if (
      !currentParagraph.trim().startsWith("<") ||
      currentParagraph.trim().startsWith("<a")
    ) {
      paragraphs.push(`<p>${currentParagraph.trim()}</p>`);
    } else {
      paragraphs.push(currentParagraph.trim());
    }
  }

  html = paragraphs.join("\n");

  return html;
}
