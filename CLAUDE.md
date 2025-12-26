# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Pan-African Educational Hub - a full-stack project showcasing the Alliance of Sahel States (AES), Pan-African history, and contemporary leadership. Contains a Next.js 15 frontend (`aes-portal/`) and a Python AI blog generation backend (`backend/`).

## Development Commands

### Frontend (aes-portal/)
```bash
cd aes-portal
npm install
npm run dev          # Dev server with Turbopack (http://localhost:3000)
npm run dev:webpack  # Dev server with Webpack fallback
npm run build        # Production build
npm start            # Production server
npm run lint         # ESLint
npm run clean        # Clear .next and node_modules/.cache
```

### Backend (backend/)
```bash
cd backend
pip install -r requirements.txt

# Generate blog posts
python generate_blog.py                              # Default: Gemini
python generate_blog.py --model deepseek-chat       # Use DeepSeek
python generate_blog.py --days 14 --max-articles 25 # Custom lookback
python generate_blog.py --temperature 0.9           # More creative

# Test news fetcher
python news_fetcher.py

# Test blog generation with mock data
python test_generate.py
```

Backend options: `--model` (gemini-2.0-flash-exp, deepseek-chat, gemini-1.5-pro), `--days` (default 7), `--max-articles` (default 15), `--temperature` (0.0-2.0, default 0.7)

### Environment Setup
- Frontend: Create `aes-portal/.env.local`
- Backend: Create `backend/.env` with `GEMINI_API_KEY` and/or `DEEPSEEK_API_KEY`

## Architecture

### Monorepo Structure
```
aes-portal/           # Next.js 15 frontend
├── app/              # App Router pages (blog/, heroes/, aes/, russia/, etc.)
├── components/       # React components (30+)
│   ├── ui/           # shadcn/ui components
│   └── agent-ai/     # AI agent components
├── lib/              # Utilities (blog-utils.ts, i18n/, utils.ts)
├── types/            # TypeScript interfaces (BlogPost, etc.)
├── data/             # Generated data (blogs/, leaders.ts)
└── public/           # Static assets (images, SVGs)

backend/              # Python blog generation
├── generate_blog.py  # Main CLI orchestrator
├── ai_writer.py      # Pydantic models & AI prompts
└── news_fetcher.py   # RSS feed aggregation
```

### Data Flow: Blog System
1. Backend generates JSON to `aes-portal/data/blogs/week-of-YYYY-MM-DD.json` as drafts
2. Frontend reads via `lib/blog-utils.ts` (server-only, uses `fs`)
3. API endpoint: `GET /api/blogs` returns published posts
4. Only posts with `status: "published"` are served

### API Routes
- **`GET /api/blogs`** - Returns all published blog posts from `data/blogs/` directory
  - Uses `getAIGeneratedBlogs()` from `lib/blog-utils.ts`
  - Filters for `status: "published"` only
  - Returns JSON array of BlogPost objects
  - Error handling returns empty array with 500 status

### Frontend Tech Stack
- **Next.js 15** (App Router, Turbopack)
- **React 19**, TypeScript (strict mode)
- **Tailwind CSS 3.4** with tailwindcss-animate
- **Animations**: Framer Motion 11 (declarative), GSAP 3 (scroll-based) - both require `"use client"`
- **3D**: Three.js, React Three Fiber, Cobe, three-globe, Spline - must be client components
- **UI**: shadcn/ui (new-york style) with registries: @aceternity, @magicui, @tailark, @react-bits, @cult-ui
- **Smooth scrolling**: Lenis library
- **i18n**: Custom context in `lib/i18n/` (English/French)
- **Theme**: next-themes (defaults to dark mode)
- **Performance target**: 90+ Lighthouse scores (Performance, Accessibility, SEO)

### Backend Tech Stack
- **Python 3.11+**
- **Pydantic AI 0.0.14+** for LLM integration
- **Google Generative AI** (Gemini) / OpenAI SDK (DeepSeek)
- **feedparser** for RSS parsing

### TypeScript Configuration
- **Strict mode enabled** - Full type safety
- **Path alias**: `@/*` maps to `./*` (e.g., `@/components/Hero`)
- **Target**: ES2017 for broad compatibility
- **Module resolution**: Bundler mode for Next.js optimization

## Key Patterns

### Path Alias
```typescript
"@/*" → "./*"  // Use @/components/Hero, @/lib/utils
```

### Client vs Server Components
- Most components use `"use client"` for interactivity
- `lib/blog-utils.ts` is server-only (uses `fs`)
- Three.js/Spline components must be client components
- Use `HydrationFix.tsx` pattern for hydration mismatches

### Animations
```tsx
// Framer Motion (declarative)
<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} />

// GSAP + ScrollTrigger (scroll-based)
useGSAP(() => {
  gsap.fromTo(ref.current, { opacity: 0 }, { opacity: 1, scrollTrigger: { trigger: ref.current } });
}, []);

// Stagger pattern: use index * 0.1 delay
```

### i18n Usage
```tsx
import { useTranslation } from "@/lib/i18n";
const { t, locale, setLocale } = useTranslation();
// Dot notation: t("nav.home"), t("hero.visionaryLeaders")
// Locale persisted to localStorage, updates document.documentElement.lang
```

### Adding UI Components
```bash
npx shadcn@latest add [component]              # Default shadcn/ui
npx shadcn@latest add @aceternity/[component]  # Aceternity (animated)
npx shadcn@latest add @magicui/[component]     # Magic UI
npx shadcn@latest add @cult-ui/[component]     # Cult UI
```

## Styling

- **Dark mode default** via `darkMode: ["class"]`
- **Fonts**: Inter (`font-sans`), Playfair Display (`font-heading`)
- **Pan-African colors**: `pan-red`, `pan-black`, `pan-green`, `pan-gold` (OKLCH in globals.css)
- **Layout**: Fixed navbar (72px height), news ticker at `top-[72px]`
- **Custom animations**: `gradient-shift`, `glow-pulse`, `shimmer` (in tailwind.config.ts)

## Configuration Notes

- **Turbopack**: Uses `empty-module.js` canvas polyfill for Three.js compatibility
  - `empty-module.js` is an empty export (`export default {}`) that replaces the `canvas` module
  - Prevents "canvas module not found" errors when using Three.js/Spline in browser
  - Configured in `next.config.ts` via `turbopack.resolveAlias`
- **SSR**: Three.js packages (`three`, `three-globe`) in `serverExternalPackages`
  - Prevents server-side rendering issues with 3D libraries
  - Forces client-side only rendering for these packages
- **Remote images**: Unsplash and Spline domains allowed in next.config.ts
- **Deployment**: Vercel configuration
  - Region: `iad1` (US East - Washington, D.C.)
  - CSP headers allow Spline domains for 3D content
  - CORS enabled with `Access-Control-Allow-Origin: *`
  - Auto-deploys on push to main branch
- **ESLint**: Config in eslint.config.mjs (new flat config format)
  - Rules set to "warn" instead of "error" for development flexibility
  - Extends `next/core-web-vitals` and `next/typescript`
- **shadcn/ui**: new-york style, stone base color, registries in components.json

## Blog Workflow

1. Run `python backend/generate_blog.py` (creates draft)
2. Review JSON in `aes-portal/data/blogs/`
3. Change `"status": "draft"` to `"status": "published"`
4. Commit and push (Vercel auto-deploys)

## Asset Directories

- `/public/aes/AES/` - Primary AES leader images
- `/public/aes/Images-AES-Leaders/` - Additional leader photos
- `/public/images/` - General site images
- `/public/aes-russia-military-images/` - Russia-AES relations imagery
