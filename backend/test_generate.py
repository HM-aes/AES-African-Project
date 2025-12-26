#!/usr/bin/env python3
"""
Test script to generate a blog post with mock news sources.
This demonstrates the blog generation workflow when RSS feeds are unavailable.
"""

import os
import json
from datetime import datetime, timedelta
from pathlib import Path
import sys

# Add parent directory to path to import modules
sys.path.insert(0, str(Path(__file__).parent))

from ai_writer import BlogPost, NewsSource
from pydantic_ai import Agent
from openai import OpenAI
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Mock news sources for testing
MOCK_NEWS = [
    NewsSource(
        title="AES Confederation Expands Regional Defense Cooperation",
        url="https://example.com/aes-defense-2025-12-08",
        published=datetime.now().isoformat(),
        summary="The Alliance of Sahel States announces new joint military exercises and defense equipment sharing between Mali, Burkina Faso, and Niger to strengthen regional security.",
        source_name="Pan-African News"
    ),
    NewsSource(
        title="Economic Progress in Sahel Region Shows Promise",
        url="https://example.com/sahel-economy-2025-12-08",
        published=(datetime.now() - timedelta(days=1)).isoformat(),
        summary="Trade between AES member states increases by 15% as regional economic integration efforts bear fruit, with new infrastructure projects connecting the three nations.",
        source_name="African Economic Review"
    ),
    NewsSource(
        title="Pan-African Youth Conference Highlights Sovereignty Movement",
        url="https://example.com/youth-conference-2025-12-08",
        published=(datetime.now() - timedelta(days=2)).isoformat(),
        summary="Young leaders from across Africa gather to discuss the importance of economic sovereignty and the role of the AES in inspiring continental change.",
        source_name="Continental News Network"
    ),
]

def test_blog_generation():
    """Generate a test blog post using DeepSeek."""
    print("🧪 Testing blog generation with mock news sources...\n")

    # Get API key
    api_key = os.getenv("DEEPSEEK_API_KEY")
    if not api_key:
        print("❌ DEEPSEEK_API_KEY not found in .env file")
        return

    print(f"✅ API key found: {api_key[:10]}...")
    print(f"📰 Using {len(MOCK_NEWS)} mock news sources\n")

    # Create OpenAI client for DeepSeek
    client = OpenAI(
        api_key=api_key,
        base_url="https://api.deepseek.com"
    )

    # Create Pydantic AI agent
    agent = Agent(
        'openai:deepseek-chat',
        result_type=BlogPost,
        system_prompt="""You are an expert Pan-African journalist and educator.

Create an educational blog post that:
1. Highlights developments in African sovereignty and self-determination
2. Focuses on the Alliance of Sahel States (AES) and regional cooperation
3. Provides balanced, well-researched analysis
4. Connects current events to historical Pan-African movements
5. Uses accessible language for general audiences

Format requirements:
- 600-800 words
- Markdown formatting with headers (##, ###)
- Include a compelling introduction
- Use bullet points for clarity
- End with a forward-looking conclusion
""",
        deps_type=OpenAI
    )

    # Prepare news summaries
    news_context = "\n\n".join([
        f"**{news.title}** ({news.source_name}, {news.published})\n{news.summary}"
        for news in MOCK_NEWS
    ])

    prompt = f"""Based on these recent news articles about Pan-African developments, write a comprehensive weekly blog post:

{news_context}

Requirements:
- Title should be compelling and focus on Pan-African themes
- Slug should be 'week-of-{datetime.now().strftime('%Y-%m-%d')}'
- Date should be today's date in ISO format
- Include the provided news sources in the sources list
- Tags should include relevant topics like 'weekly-review', 'aes', 'sovereignty', 'pan-africanism'
- Status should be 'published'
"""

    print("🤖 Generating blog post with DeepSeek...\n")

    try:
        # Run the agent
        result = agent.run_sync(prompt, deps=client)
        blog_post = result.data

        print("✅ Blog post generated successfully!\n")
        print(f"📝 Title: {blog_post.title}")
        print(f"🔗 Slug: {blog_post.slug}")
        print(f"📅 Date: {blog_post.date}")
        print(f"📊 Reading time: {blog_post.reading_time} minutes")
        print(f"🏷️  Tags: {', '.join(blog_post.tags)}")
        print(f"📰 Sources: {len(blog_post.sources)}")
        print(f"\n✍️  Excerpt:\n{blog_post.excerpt}\n")

        # Update sources with our mock news
        blog_post.sources = MOCK_NEWS

        # Save to file
        output_dir = Path(__file__).parent.parent / "data" / "blogs"
        output_dir.mkdir(parents=True, exist_ok=True)

        output_file = output_dir / f"{blog_post.slug}.json"

        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(blog_post.model_dump(mode='json'), f, indent=2, ensure_ascii=False)

        print(f"💾 Saved to: {output_file}")
        print("\n✅ Test completed successfully!")
        print("\n📖 You can now view this blog post at:")
        print(f"   http://localhost:3000/blog/{blog_post.slug}")

        return blog_post

    except Exception as e:
        print(f"❌ Error generating blog: {e}")
        import traceback
        traceback.print_exc()
        return None

if __name__ == "__main__":
    test_blog_generation()
