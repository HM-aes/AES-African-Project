"""
Main script to generate weekly Pan-African blog posts using AI.

This script:
1. Fetches Pan-African news from multiple sources
2. Uses Pydantic AI agent to analyze and synthesize content
3. Generates a comprehensive blog post
4. Saves to /data/blogs as JSON for Next.js static generation

Usage:
    python generate_blog.py
    python generate_blog.py --model deepseek-chat
    python generate_blog.py --days 14 --max-articles 20
"""

import asyncio
import json
import os
from datetime import datetime
from pathlib import Path
from typing import List
import argparse
import logging

from pydantic_ai import Agent
from pydantic_ai.models.gemini import GeminiModel
from ai_writer import (
    BlogPost,
    NewsSource,
    AIWriterConfig,
    BLOG_WRITER_SYSTEM_PROMPT
)
from news_fetcher import fetch_pan_african_news

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


class BlogGenerator:
    """Generates weekly Pan-African blog posts using AI."""

    def __init__(self, model_name: str = "gemini-2.0-flash-exp", temperature: float = 0.7):
        """
        Initialize the blog generator.

        Args:
            model_name: LLM model to use ('gemini-2.0-flash-exp', 'deepseek-chat', etc.)
            temperature: Temperature for generation (0.0-2.0)
        """
        self.config = AIWriterConfig(model=model_name, temperature=temperature)

        # Initialize Pydantic AI agent
        logger.info(f"Initializing AI agent with model: {model_name}")

        # For Gemini models
        if model_name.startswith("gemini"):
            self.agent = Agent(
                model=model_name,
                system_prompt=BLOG_WRITER_SYSTEM_PROMPT,
            )
        # For DeepSeek or other OpenAI-compatible models
        else:
            self.agent = Agent(
                model=model_name,
                system_prompt=BLOG_WRITER_SYSTEM_PROMPT,
            )

    async def generate_blog_post(
        self,
        news_articles: List[NewsSource],
        custom_prompt: str = None
    ) -> BlogPost:
        """
        Generate a blog post from news articles using AI.

        Args:
            news_articles: List of NewsSource objects
            custom_prompt: Optional custom prompt to guide generation

        Returns:
            BlogPost object
        """
        if not news_articles:
            raise ValueError("No news articles provided for blog generation")

        # Format articles for the prompt
        articles_text = self._format_articles_for_prompt(news_articles)

        # Build the generation prompt
        prompt = custom_prompt or self._build_default_prompt(articles_text, len(news_articles))

        logger.info(f"Generating blog post from {len(news_articles)} articles...")

        try:
            # Run the agent
            result = await self.agent.run(prompt)

            # Parse the response into structured data
            blog_data = self._parse_agent_response(result.data, news_articles)

            # Create BlogPost
            blog_post = BlogPost(**blog_data)

            logger.info(f"✅ Blog post generated: '{blog_post.title}'")
            return blog_post

        except Exception as e:
            logger.error(f"Error generating blog post: {e}")
            raise

    def _format_articles_for_prompt(self, articles: List[NewsSource]) -> str:
        """Format news articles as text for the AI prompt."""
        formatted = []
        for i, article in enumerate(articles, 1):
            formatted.append(
                f"\n{i}. **{article.title}**\n"
                f"   Source: {article.source_name}\n"
                f"   Date: {article.published}\n"
                f"   URL: {article.url}\n"
                f"   Summary: {article.summary}\n"
            )
        return "\n".join(formatted)

    def _build_default_prompt(self, articles_text: str, article_count: int) -> str:
        """Build the default generation prompt."""
        week_of = datetime.now().strftime("%B %d, %Y")

        return f"""Analyze these {article_count} Pan-African news articles from the past week and write a comprehensive educational blog post.

**Articles:**
{articles_text}

**Your task:**
Write a blog post (800-1200 words) that:

1. **Opening**: Start with a compelling hook about the most significant development this week
2. **Analysis**: Synthesize the news into coherent themes (don't just summarize each article)
3. **Context**: Connect to historical Pan-African movements and the broader sovereignty narrative
4. **AES Focus**: Highlight any developments related to the Alliance of Sahel States
5. **Future Outlook**: End with what these developments mean for Africa's future

**Format requirements:**
- Use markdown with ## for main sections, ### for subsections
- Include inline citations as markdown links: [source text](url)
- Use bullet points or numbered lists where appropriate
- Write in an educational but accessible tone
- Title should be engaging and specific to this week's content

**Return your response as a JSON object with these exact keys:**
{{
  "title": "Your compelling title here",
  "content": "Full markdown blog post content here",
  "excerpt": "2-3 sentence summary of the post",
  "tags": ["relevant", "topic", "tags"]
}}

Week of: {week_of}
"""

    def _parse_agent_response(self, response: str, sources: List[NewsSource]) -> dict:
        """Parse the agent's response into BlogPost data."""
        try:
            # Try to parse as JSON first
            if isinstance(response, dict):
                data = response
            else:
                # Remove markdown code blocks if present
                response = response.strip()
                if response.startswith("```json"):
                    response = response.split("```json")[1].split("```")[0]
                elif response.startswith("```"):
                    response = response.split("```")[1].split("```")[0]

                data = json.loads(response.strip())

            # Generate slug from current date
            slug = f"week-of-{datetime.now().strftime('%Y-%m-%d')}"

            # Build complete blog post data
            blog_data = {
                "title": data.get("title", "Pan-African Weekly Review"),
                "slug": slug,
                "date": datetime.now().isoformat(),
                "content": data.get("content", ""),
                "excerpt": data.get("excerpt", ""),
                "sources": [s.model_dump() for s in sources],
                "tags": data.get("tags", ["weekly-review", "pan-african"]),
                "author": "AI-Powered Pan-African Hub",
                "status": "draft",  # Requires manual review
                "image_url": None,
            }

            return blog_data

        except json.JSONDecodeError as e:
            logger.error(f"Failed to parse agent response as JSON: {e}")
            # Fallback: create a basic blog post with the raw response
            return {
                "title": "Pan-African Weekly Review",
                "slug": f"week-of-{datetime.now().strftime('%Y-%m-%d')}",
                "date": datetime.now().isoformat(),
                "content": response,
                "excerpt": "AI-generated weekly review of Pan-African developments",
                "sources": [s.model_dump() for s in sources],
                "tags": ["weekly-review", "pan-african"],
                "author": "AI-Powered Pan-African Hub",
                "status": "draft",
            }

    async def save_blog_post(self, blog_post: BlogPost, output_dir: str = "../data/blogs") -> Path:
        """
        Save the blog post to a JSON file.

        Args:
            blog_post: BlogPost object to save
            output_dir: Directory to save to (relative to scripts/)

        Returns:
            Path to saved file
        """
        # Create output directory if it doesn't exist
        script_dir = Path(__file__).parent
        output_path = script_dir / output_dir
        output_path.mkdir(parents=True, exist_ok=True)

        # Save as JSON
        file_path = output_path / f"{blog_post.slug}.json"

        with open(file_path, "w", encoding="utf-8") as f:
            json.dump(blog_post.model_dump(), f, indent=2, ensure_ascii=False)

        logger.info(f"💾 Blog post saved to: {file_path}")
        return file_path


async def main(
    model: str = "gemini-2.0-flash-exp",
    days_back: int = 7,
    max_articles: int = 15,
    temperature: float = 0.7
):
    """
    Main function to generate weekly blog post.

    Args:
        model: LLM model to use
        days_back: Number of days to look back for news
        max_articles: Maximum number of articles to analyze
        temperature: LLM temperature setting
    """
    logger.info("🚀 Starting Pan-African blog generation...")

    # Step 1: Fetch news
    logger.info(f"📰 Fetching Pan-African news from the past {days_back} days...")
    news_articles = await fetch_pan_african_news(
        days_back=days_back,
        filter_keywords=True,
        max_articles=max_articles
    )

    if not news_articles:
        logger.error("❌ No news articles found. Exiting.")
        return

    logger.info(f"✅ Fetched {len(news_articles)} relevant articles")

    # Step 2: Generate blog post
    generator = BlogGenerator(model_name=model, temperature=temperature)
    blog_post = await generator.generate_blog_post(news_articles)

    # Step 3: Save to file
    file_path = await generator.save_blog_post(blog_post)

    # Step 4: Summary
    logger.info("\n" + "="*60)
    logger.info("✅ BLOG GENERATION COMPLETE")
    logger.info("="*60)
    logger.info(f"📝 Title: {blog_post.title}")
    logger.info(f"📅 Date: {blog_post.date}")
    logger.info(f"📊 Word count: ~{len(blog_post.content.split())} words")
    logger.info(f"⏱️  Reading time: {blog_post.reading_time} min")
    logger.info(f"🔖 Tags: {', '.join(blog_post.tags)}")
    logger.info(f"📰 Sources: {len(blog_post.sources)} articles")
    logger.info(f"💾 Saved to: {file_path}")
    logger.info(f"⚠️  Status: {blog_post.status.upper()} (requires review)")
    logger.info("\n📋 Next steps:")
    logger.info(f"   1. Review the blog at: {file_path}")
    logger.info(f"   2. Edit the JSON if needed")
    logger.info(f"   3. Change 'status' to 'published' to make it live")
    logger.info(f"   4. Commit and push to deploy")
    logger.info("="*60 + "\n")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Generate AI-powered Pan-African blog posts")
    parser.add_argument(
        "--model",
        type=str,
        default="gemini-2.0-flash-exp",
        help="LLM model to use (gemini-2.0-flash-exp, deepseek-chat, gemini-1.5-pro)"
    )
    parser.add_argument(
        "--days",
        type=int,
        default=7,
        help="Number of days to look back for news"
    )
    parser.add_argument(
        "--max-articles",
        type=int,
        default=15,
        help="Maximum number of articles to analyze"
    )
    parser.add_argument(
        "--temperature",
        type=float,
        default=0.7,
        help="LLM temperature (0.0-2.0)"
    )

    args = parser.parse_args()

    asyncio.run(main(
        model=args.model,
        days_back=args.days,
        max_articles=args.max_articles,
        temperature=args.temperature
    ))
