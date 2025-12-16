# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Pan-African Heroes Educational Website** built with Next.js 15, showcasing historical Pan-African figures and contemporary AES (Alliance of Sahel States) leaders. The project aims to educate users about Pan-Africanism, sovereignty movements, and the continuity between historical independence movements and modern Sahel leadership.

## Development Commands

```bash
npm run dev          # Start dev server with Turbopack (http://localhost:3000)
npm run dev:webpack  # Start dev server with Webpack (fallback)
npm run build        # Production build
npm start            # Start production server
npm run lint         # Run ESLint
npm run clean        # Clear .next and node_modules/.cache
```

## Tech Stack

- **Framework:** Next.js 15 (App Router with Turbopack)
- **React:** v19
- **TypeScript:** Strict mode, ES2017 target, bundler module resolution
- **Styling:** Tailwind CSS v3.4 with tailwindcss-animate plugin
- **Animations:** Framer Motion v11 (declarative), GSAP v3 (scroll-based) - both require `"use client"`
- **UI Components:** shadcn/ui (new-york style, stone base) with registries: @aceternity, @tailark, @magicui, @react-bits
- **3D Graphics:** Three.js, React Three Fiber, @react-three/drei, Cobe, three-globe
- **Theme:** next-themes (defaults to dark mode)
- **Icons:** lucide-react

## Architecture

### App Structure
```
app/
├── layout.tsx              # Root layout with theme, navigation, footer
├── page.tsx                # Home page (Hero + AES sections)
├── heroes/page.tsx         # Hero cards gallery
├── aes/page.tsx            # AES-specific page
├── russia/page.tsx         # Russia-AES relations page
├── about/page.tsx          # About page
├── tech/page.tsx           # Technology page
├── blog/
│   ├── page.tsx            # Blog listing
│   └── [slug]/page.tsx     # Dynamic blog post pages
```

### Component Architecture

**Client vs Server Components:**
- Most components use `"use client"` for interactivity (Framer Motion, GSAP, Three.js)
- Static page layouts can remain server components
- Blog utilities (`lib/blog-utils.ts`) are server-only (uses `fs`)

**Key Components:**
- `Hero.tsx` - Landing hero with animated text
- `ProfileCard.tsx` - AES leader cards (Framer Motion)
- `BlogCard.tsx` - Blog post cards
- `Navigation.tsx`, `Footer.tsx` - Site layout
- `AESSpotlight.tsx`, `AESAchievements.tsx` - AES content sections
- `theme-provider.tsx` - Theme context wrapper
- `HydrationFix.tsx` - Client/server hydration handling

**UI Components** (`components/ui/`):
- shadcn/ui base components plus animated components from extended registries
- Notable: `globe.tsx` (3D), `timeline.tsx`, `osmo-card.tsx`, `hover-reveal-card.tsx`

### Path Alias
```typescript
"@/*" → "./*"
```
Use `@/` imports for all internal code (e.g., `@/components/Hero`, `@/lib/utils`).

### Styling Patterns

**Tailwind CSS:**
- `darkMode: ["class"]` - theme toggled via `.dark` class
- CSS variables in `globals.css` for shadcn/ui theming (hex values, not HSL)
- Custom Pan-African colors: `pan-red`, `pan-black`, `pan-green`, `pan-gold` (OKLCH in CSS)
- Custom animations: `gradient-shift`, `glow-pulse`, `shimmer`
- Utility classes in globals.css: `perspective-distant`, `transform-3d`, `custom-scrollbar`, `hero-card-scrollbar`

**Typography:**
- Sans: Inter (`font-sans`, `--font-sans`)
- Heading: Playfair Display (`font-heading`, `--font-heading`)

### Animation Patterns

**Framer Motion:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
```

**GSAP + ScrollTrigger:**
```tsx
useGSAP(() => {
  gsap.fromTo(ref.current,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, scrollTrigger: { trigger: ref.current, start: "top bottom-=100" } }
  );
}, []);
```

### 3D Components

Three.js components must be client components. The project uses `empty-module.js` as a canvas polyfill for Turbopack compatibility (configured in `next.config.ts`).

```tsx
import { Canvas } from '@react-three/fiber'
// Always wrap Three.js content in Canvas
```

**SSR Note:** Three.js libraries (`three`, `three-globe`) are in `serverExternalPackages` in next.config.ts to avoid SSR issues.

### Data Structure

**Hero Profiles:** Defined inline in page files as arrays of objects with `name`, `role`, `country`, `description`, `imageUrl`.

**Blog System:**
- JSON files in `data/blogs/` with structure defined in `types/blog.ts`
- `lib/blog-utils.ts` - Server-side utilities (`getAIGeneratedBlogs`, `getBlogBySlug`, `getAllBlogSlugs`)
- Only `status: "published"` posts are returned

## Code Standards

**TypeScript:** Strict mode enabled. Use interfaces for component props.

**Component Pattern:**
```typescript
interface ComponentProps {
  name: string;
  index?: number; // For stagger animations
}

export function Component({ name, index = 0 }: ComponentProps) {
  // delay: index * 0.1 for staggered effects
}
```

### Adding UI Components

```bash
npx shadcn@latest add [component-name]              # Default shadcn/ui
npx shadcn@latest add @aceternity/[component-name]  # Animated components
npx shadcn@latest add @magicui/[component-name]     # Magic UI
npx shadcn@latest add @tailark/[component-name]     # Tailark
npx shadcn@latest add @react-bits/[component-name]  # React Bits
```

## Asset Management

**Image Directories:**
- `/public/aes/AES/` - Primary AES leader images
- `/public/aes/Images-AES-Leaders/` - Additional AES leader photos
- `/public/images/` - General site images
- `/public/aes-russia-military-images/` - Russia-AES relations imagery

**Remote Images:** Unsplash and Spline domains allowed via `next.config.ts` remote patterns.

## Important Notes

- **Theme:** Defaults to dark mode, uses `suppressHydrationWarning` on html/body
- **Turbopack:** Uses `empty-module.js` canvas polyfill for Three.js compatibility
- **Content:** Maintain factual accuracy - educational focus on Pan-Africanism
- **Featured Heroes:** Thomas Sankara, Patrice Lumumba, Kwame Nkrumah, Modibo Keïta (historical); Ibrahim Traoré, Assimi Goïta, Abdourahamane Tchiani (contemporary)
