# AI-Powered Blog Generation Backend

This directory contains the Python backend for generating AI-powered Pan-African blog posts using Pydantic AI, DeepSeek, and Gemini models.

## Directory Structure

```
backend/
├── ai_writer.py         # Pydantic models for blog posts and news sources
├── news_fetcher.py      # RSS feed aggregation and news filtering
├── generate_blog.py     # Main script to generate weekly blog posts
├── requirements.txt     # Python dependencies
├── .env.example         # Example environment variables
└── README.md           # This file
```

## Setup

### 1. Install Dependencies

```bash
cd backend
pip install -r requirements.txt
```

### 2. Configure API Keys

Copy `.env.example` to `.env` and add your API keys:

```bash
cp .env.example .env
```

Edit `.env` and add your keys:

```env
# Google Gemini (recommended)
GEMINI_API_KEY=your_gemini_api_key_here

# DeepSeek (alternative)
DEEPSEEK_API_KEY=your_deepseek_api_key_here
```

### Getting API Keys:
- **Gemini**: https://makersuite.google.com/app/apikey
- **DeepSeek**: https://platform.deepseek.com/

## Usage

### Generate a Weekly Blog Post

Basic usage with Gemini (default):
```bash
python generate_blog.py
```

Using DeepSeek instead:
```bash
python generate_blog.py --model deepseek-chat
```

### Command Options

```bash
python generate_blog.py [OPTIONS]

Options:
  --model TEXT            LLM model to use
                          (gemini-2.0-flash-exp, deepseek-chat, gemini-1.5-pro)
                          Default: gemini-2.0-flash-exp

  --days INTEGER          Number of days to look back for news
                          Default: 7

  --max-articles INTEGER  Maximum number of articles to analyze
                          Default: 15

  --temperature FLOAT     LLM temperature (0.0-2.0)
                          Default: 0.7
```

### Examples

Generate blog from last 14 days of news:
```bash
python generate_blog.py --days 14
```

Use more articles for analysis:
```bash
python generate_blog.py --max-articles 25
```

More creative writing (higher temperature):
```bash
python generate_blog.py --temperature 0.9
```

Combine options:
```bash
python generate_blog.py --model deepseek-chat --days 10 --temperature 0.8
```

## Workflow

1. **Generate Draft**: Run `generate_blog.py` to create a draft blog post
2. **Review**: Check the generated JSON file in `../data/blogs/`
3. **Edit** (optional): Manually edit the JSON if needed
4. **Publish**: Change `"status": "draft"` to `"status": "published"`
5. **Deploy**: Commit and push to trigger Vercel deployment

## Output

Generated blogs are saved to:
```
../data/blogs/week-of-YYYY-MM-DD.json
```

Each blog includes:
- Title and excerpt
- Full markdown content
- Source articles with URLs
- Tags and metadata
- Reading time estimate

## Testing

Test the news fetcher:
```bash
python news_fetcher.py
```

This will display recent Pan-African news articles found.

## News Sources

The system aggregates news from:
- AllAfrica.com
- Africanews.com
- Other Pan-African news outlets

Keywords filtered:
- Alliance of Sahel States (AES)
- Mali, Burkina Faso, Niger
- Pan-Africanism
- African sovereignty
- Ibrahim Traoré, Assimi Goïta, etc.

## Customization

### Add New News Sources

Edit `news_fetcher.py` and add to `NEWS_SOURCES`:

```python
NEWS_SOURCES = {
    "rss_feeds": [
        {
            "url": "https://example.com/rss",
            "name": "Example News",
            "topics": ["general"]
        },
        # ... add more
    ],
}
```

### Modify AI Prompt

Edit `ai_writer.py` and update `BLOG_WRITER_SYSTEM_PROMPT`:

```python
BLOG_WRITER_SYSTEM_PROMPT = """Your custom prompt here..."""
```

### Change Default Model

Edit `.env`:
```env
DEFAULT_MODEL=deepseek-chat
```

## Cost Estimates

**Per blog post** (800-1200 words):

| Model | Approx. Cost |
|-------|-------------|
| Gemini 2.0 Flash | $0.01 - $0.05 |
| DeepSeek Chat | $0.02 - $0.08 |
| Gemini 1.5 Pro | $0.10 - $0.30 |

**Monthly** (4 posts):
- Gemini Flash: ~$0.20/month
- DeepSeek: ~$0.30/month
- Gemini Pro: ~$1.20/month

## Automation (Optional)

### GitHub Actions

See `../.github/workflows/weekly-blog.yml` (to be created)

Schedule automatic weekly generation:
```yaml
on:
  schedule:
    - cron: '0 9 * * 0'  # Every Sunday 9 AM
```

### Local Cron

Add to crontab:
```bash
0 9 * * 0 cd /path/to/backend && python generate_blog.py
```

## Troubleshooting

### No news articles found
- Check internet connection
- Verify RSS feeds are accessible
- Try increasing `--days` parameter

### API errors
- Verify API keys in `.env`
- Check API quotas/limits
- Try alternative model with `--model`

### Import errors
- Run `pip install -r requirements.txt`
- Ensure Python 3.11+ is installed

## Next Steps

1. Generate your first blog: `python generate_blog.py`
2. Review the output in `../data/blogs/`
3. Publish by changing status to "published"
4. Set up weekly automation (optional)

## Support

For issues or questions, refer to the main project README or open an issue in the repository.
