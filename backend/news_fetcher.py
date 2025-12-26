"""
News fetcher module for aggregating Pan-African news from multiple sources.
"""

import feedparser
import asyncio
from typing import List, Dict, Optional
from datetime import datetime, timedelta
from ai_writer import NewsSource
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


# Pan-African news sources
NEWS_SOURCES = {
    "rss_feeds": [
        {
            "url": "https://allafrica.com/tools/headlines/rss/latest/",
            "name": "AllAfrica",
            "topics": ["general"]
        },
        {
            "url": "https://www.africanews.com/rss",
            "name": "Africanews",
            "topics": ["general"]
        },
        {
            "url": "https://allafrica.com/tools/headlines/rss/africa/headlines.rss",
            "name": "AllAfrica Headlines",
            "topics": ["headlines"]
        },
    ],
    "keywords": [
        "Alliance of Sahel States",
        "AES",
        "Mali",
        "Burkina Faso",
        "Niger",
        "Ibrahim Traoré",
        "Assimi Goïta",
        "Abdourahamane Tchiani",
        "Pan-Africanism",
        "African sovereignty",
        "ECOWAS",
        "African Union",
        "Sahel",
    ]
}


class NewsFetcher:
    """Fetches and filters Pan-African news from multiple sources."""

    def __init__(self, days_back: int = 7):
        """
        Initialize the news fetcher.

        Args:
            days_back: Number of days to look back for news articles
        """
        self.days_back = days_back
        self.cutoff_date = datetime.now() - timedelta(days=days_back)

    def fetch_rss_feed(self, feed_url: str, source_name: str) -> List[NewsSource]:
        """
        Fetch articles from an RSS feed.

        Args:
            feed_url: RSS feed URL
            source_name: Name of the news source

        Returns:
            List of NewsSource objects
        """
        try:
            logger.info(f"Fetching RSS feed: {source_name}")
            feed = feedparser.parse(feed_url)

            articles = []
            for entry in feed.entries[:20]:  # Limit to 20 most recent
                try:
                    # Parse publication date
                    pub_date = None
                    if hasattr(entry, 'published_parsed') and entry.published_parsed:
                        pub_date = datetime(*entry.published_parsed[:6])
                    elif hasattr(entry, 'updated_parsed') and entry.updated_parsed:
                        pub_date = datetime(*entry.updated_parsed[:6])

                    # Skip if too old
                    if pub_date and pub_date < self.cutoff_date:
                        continue

                    # Create NewsSource object
                    article = NewsSource(
                        title=entry.get('title', 'Untitled'),
                        url=entry.get('link', ''),
                        published=pub_date.isoformat() if pub_date else datetime.now().isoformat(),
                        summary=entry.get('summary', entry.get('description', ''))[:500],
                        source_name=source_name
                    )
                    articles.append(article)

                except Exception as e:
                    logger.warning(f"Error parsing entry from {source_name}: {e}")
                    continue

            logger.info(f"Fetched {len(articles)} articles from {source_name}")
            return articles

        except Exception as e:
            logger.error(f"Error fetching RSS feed {source_name}: {e}")
            return []

    def filter_by_keywords(self, articles: List[NewsSource], keywords: List[str]) -> List[NewsSource]:
        """
        Filter articles by keywords in title or summary.

        Args:
            articles: List of NewsSource objects
            keywords: List of keywords to search for

        Returns:
            Filtered list of NewsSource objects
        """
        filtered = []
        keywords_lower = [k.lower() for k in keywords]

        for article in articles:
            text = f"{article.title} {article.summary}".lower()
            if any(keyword in text for keyword in keywords_lower):
                filtered.append(article)

        return filtered

    async def fetch_all_sources(self, filter_keywords: bool = True) -> List[NewsSource]:
        """
        Fetch news from all configured sources.

        Args:
            filter_keywords: Whether to filter by Pan-African keywords

        Returns:
            List of all fetched NewsSource objects
        """
        all_articles = []

        # Fetch from RSS feeds
        for feed_config in NEWS_SOURCES["rss_feeds"]:
            articles = self.fetch_rss_feed(
                feed_config["url"],
                feed_config["name"]
            )
            all_articles.extend(articles)

        # Filter by keywords if requested
        if filter_keywords:
            all_articles = self.filter_by_keywords(
                all_articles,
                NEWS_SOURCES["keywords"]
            )

        # Remove duplicates based on title similarity
        unique_articles = self._deduplicate_articles(all_articles)

        # Sort by date (newest first)
        unique_articles.sort(
            key=lambda x: datetime.fromisoformat(x.published),
            reverse=True
        )

        logger.info(f"Total unique articles fetched: {len(unique_articles)}")
        return unique_articles

    def _deduplicate_articles(self, articles: List[NewsSource]) -> List[NewsSource]:
        """
        Remove duplicate articles based on title similarity.

        Args:
            articles: List of NewsSource objects

        Returns:
            Deduplicated list
        """
        seen_titles = set()
        unique = []

        for article in articles:
            # Normalize title for comparison
            normalized_title = article.title.lower().strip()

            if normalized_title not in seen_titles:
                seen_titles.add(normalized_title)
                unique.append(article)

        return unique


async def fetch_pan_african_news(
    days_back: int = 7,
    filter_keywords: bool = True,
    max_articles: int = 15
) -> List[NewsSource]:
    """
    Main function to fetch Pan-African news.

    Args:
        days_back: Number of days to look back
        filter_keywords: Whether to filter by Pan-African keywords
        max_articles: Maximum number of articles to return

    Returns:
        List of NewsSource objects
    """
    fetcher = NewsFetcher(days_back=days_back)
    articles = await fetcher.fetch_all_sources(filter_keywords=filter_keywords)

    # Return top N most recent articles
    return articles[:max_articles]


# For testing
if __name__ == "__main__":
    async def test():
        articles = await fetch_pan_african_news(days_back=7, max_articles=10)
        print(f"\n📰 Fetched {len(articles)} Pan-African news articles:\n")
        for i, article in enumerate(articles, 1):
            print(f"{i}. {article.title}")
            print(f"   Source: {article.source_name}")
            print(f"   Date: {article.published}")
            print(f"   URL: {article.url}\n")

    asyncio.run(test())
