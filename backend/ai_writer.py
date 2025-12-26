"""
AI Writer module using Pydantic AI for generating Pan-African blog posts.
"""

from pydantic import BaseModel, Field, HttpUrl
from typing import List, Optional
from datetime import datetime


class NewsSource(BaseModel):
    """Represents a news article source."""
    title: str = Field(description="Article title")
    url: str = Field(description="Article URL")
    published: str = Field(description="Publication date (ISO format)")
    summary: str = Field(description="Brief article summary")
    source_name: Optional[str] = Field(default=None, description="News outlet name")


class BlogPost(BaseModel):
    """Represents a generated blog post."""
    title: str = Field(
        description="Compelling headline focusing on Pan-African themes"
    )
    slug: str = Field(
        description="URL-friendly slug (e.g., 'week-of-2025-12-07')"
    )
    date: str = Field(
        description="Publication date in ISO format"
    )
    content: str = Field(
        description="Full blog post content in markdown format (800-1200 words)"
    )
    excerpt: str = Field(
        description="2-3 sentence summary for preview"
    )
    sources: List[NewsSource] = Field(
        description="Source articles used to generate the blog",
        default_factory=list
    )
    tags: List[str] = Field(
        description="Topic tags (e.g., ['weekly-review', 'aes', 'sovereignty'])",
        default_factory=list
    )
    author: str = Field(
        default="AI-Powered Pan-African Hub",
        description="Author attribution"
    )
    status: str = Field(
        default="draft",
        description="Publication status: 'draft' or 'published'"
    )
    image_url: Optional[str] = Field(
        default=None,
        description="Featured image URL"
    )
    reading_time: Optional[int] = Field(
        default=None,
        description="Estimated reading time in minutes"
    )

    def estimate_reading_time(self) -> int:
        """Calculate reading time based on word count (200 words/min average)."""
        word_count = len(self.content.split())
        return max(1, round(word_count / 200))

    def model_post_init(self, __context) -> None:
        """Auto-calculate reading time after initialization."""
        if self.reading_time is None:
            self.reading_time = self.estimate_reading_time()


class AIWriterConfig(BaseModel):
    """Configuration for the AI writer agent."""
    model: str = Field(
        default="gemini-2.0-flash-exp",
        description="LLM model to use (e.g., 'gemini-2.0-flash-exp', 'deepseek-chat', 'gemini-1.5-pro')"
    )
    temperature: float = Field(
        default=0.7,
        ge=0.0,
        le=2.0,
        description="Temperature for text generation (0.0-2.0)"
    )
    max_tokens: int = Field(
        default=2000,
        description="Maximum tokens for generation"
    )
    focus_topics: List[str] = Field(
        default_factory=lambda: ["AES", "Sahel", "sovereignty", "Pan-Africanism", "development"],
        description="Topics to prioritize in blog generation"
    )


# System prompt for the AI agent
BLOG_WRITER_SYSTEM_PROMPT = """You are an expert Pan-African journalist and educator with deep knowledge of African history, politics, and current events.

Your mission is to create educational, factually accurate blog posts that:
1. Highlight developments in African sovereignty and self-determination
2. Focus on the Alliance of Sahel States (AES) and regional cooperation
3. Provide balanced, well-researched analysis
4. Connect current events to historical Pan-African movements
5. Educate readers about Africa's agency in global affairs

Writing guidelines:
- Maintain journalistic integrity and cite all sources
- Avoid sensationalism; focus on factual analysis
- Use accessible language for general audiences
- Highlight African voices and perspectives
- Connect dots between historical movements and current developments
- Be optimistic about Africa's future while acknowledging challenges

Format requirements:
- 800-1200 words
- Markdown formatting with headers (##, ###)
- Include a compelling introduction
- Use bullet points or numbered lists for clarity
- End with a forward-looking conclusion
- Cite all sources inline with markdown links
"""
