# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev          # Dev server with Turbopack (http://localhost:3000)
npm run dev:webpack  # Dev server with Webpack (fallback for compatibility issues)
npm run build        # Production build
npm run lint         # ESLint
npm run clean        # Clear .next and node_modules/.cache
```

## Key Patterns

### Client vs Server Components
- Most components use `"use client"` for interactivity (Framer Motion, GSAP, Three.js)
- `lib/blog-utils.ts` is server-only (uses `fs`)
- Three.js/Spline components must be client components
- Use `HydrationFix.tsx` pattern for hydration mismatches

### Path Alias
```typescript
"@/*" → "./*"  // Use @/components/Hero, @/lib/utils
```

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
- **Pan-African colors**: `pan-red`, `pan-black`, `pan-green`, `pan-gold` (defined as OKLCH in globals.css)
- **Custom animations**: `gradient-shift`, `glow-pulse`, `shimmer` (in tailwind.config.ts)
- **Layout**: Fixed navbar (72px height), news ticker at `top-[72px]`

## Configuration Notes

- **Turbopack**: Uses `empty-module.js` canvas polyfill for Three.js (in next.config.ts)
- **SSR**: `three` and `three-globe` in `serverExternalPackages` to avoid SSR issues
- **Remote images**: Unsplash and Spline domains allowed in next.config.ts
- **shadcn/ui**: new-york style, stone base color, registries configured in components.json

## Blog System

- JSON files in `data/blogs/week-of-YYYY-MM-DD.json`
- `lib/blog-utils.ts`: `getAIGeneratedBlogs()`, `getBlogBySlug()`, `getAllBlogSlugs()`
- Only posts with `status: "published"` are served
- Type definitions in `types/blog.ts`

## Asset Directories

- `/public/aes/AES/` - Primary AES leader images
- `/public/aes/Images-AES-Leaders/` - Additional leader photos
- `/public/images/` - General site images
- `/public/aes-russia-military-images/` - Russia-AES relations imagery
