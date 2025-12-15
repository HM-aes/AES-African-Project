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

- **Framework:** Next.js 15.5.9 (App Router with Turbopack)
- **React:** v19.0.0
- **TypeScript:** Target ES2017, strict mode enabled, module resolution: bundler
- **Styling:** Tailwind CSS v3.4.17 with tailwindcss-animate plugin
- **Animations:**
  - Framer Motion v11 (declarative animations)
  - GSAP v3 with @gsap/react (scroll-based animations)
  - Both require `"use client"` directive
- **UI Components:** shadcn/ui with extended registries (@aceternity, @tailark, @magicui)
- **3D Graphics:** Three.js v0.181, React Three Fiber, @react-three/drei, Cobe, three-globe
- **Theme:** next-themes (defaults to dark mode)
- **Icons:** lucide-react

## Architecture

### App Structure
```
app/
├── layout.tsx          # Root layout with theme, navigation, footer
├── page.tsx            # Home page (Hero + AES sections)
├── heroes/page.tsx     # Hero cards gallery
├── aes/page.tsx        # AES-specific page
├── russia/page.tsx     # Russia-AES relations page
├── about/page.tsx      # About page
├── blog/page.tsx       # Blog listing
├── legacy-about/       # Legacy about page
├── osmo-demo/          # Osmo card demo page
└── hover-reveal-demo/  # Hover reveal card demo page
```

### Component Architecture

**Client vs Server Components:**
- Most components use `"use client"` directive for interactivity (Framer Motion, GSAP)
- Animation-heavy components (Hero, HeroCard, ProfileCard) are client components
- Static page layouts can be server components

**Key Components:**
- `Hero.tsx` - Main landing hero section with animated text
- `OsmoHero.tsx` - Alternative hero component with Osmo card effects
- `HeroCard.tsx` - Individual hero profile cards with GSAP scroll animations
- `ProfileCard.tsx` - AES leader profile cards with Framer Motion
- `BlogCard.tsx` - Blog post cards
- `Timeline.tsx` - Historical timeline component wrapper
- `Navigation.tsx` - Site navigation
- `Footer.tsx` - Site footer
- `AESSpotlight.tsx` - Highlights AES leaders
- `AESAchievements.tsx` - AES achievements section
- `theme-provider.tsx` - Wraps app for theme context
- `HydrationFix.tsx` - Handles client/server hydration
- `ScrollToTop.tsx` - Scroll to top button

**UI Components** (`components/ui/`):
- Uses shadcn/ui component system with extended registries (@aceternity, @tailark, @magicui)
- Custom animated UI components:
  - `border-beam.tsx`, `comet-card.tsx`, `hover-border-gradient.tsx`
  - `hover-reveal-card.tsx`, `osmo-card.tsx`, `lamp.tsx`
  - `floating-navbar.tsx`, `sticky-scroll-reveal.tsx`
  - `sliding-image-gallery.tsx`, `pixelated-canvas.tsx`
  - `timeline.tsx` (for historical timelines)
  - `globe.tsx` (3D globe using Three.js)
- Base components: `card.tsx`, `hero-card.tsx`

### Path Aliases
The project uses a single TypeScript path alias:
```typescript
"@/*" → "./*"
```
Use `@/` imports for all internal code (e.g., `@/components/Hero`, `@/lib/utils`).

### Styling Patterns

**Tailwind CSS v3.4:**
- Config in `tailwind.config.ts` with `darkMode: ["class"]`
- CSS variables in `globals.css` for shadcn/ui theming (light/dark via `.dark` class)
- Custom Pan-African colors: `pan-red`, `pan-black`, `pan-green`, `pan-gold` (using OKLCH)
- Custom animations: `gradient-shift`, `glow-pulse`, `shimmer`

**Common Patterns:**
- Background gradients: `linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%)`
- Dark overlay on images: `bg-gradient-to-t from-black/80 via-black/20 to-transparent`
- Backdrop blur: `backdrop-blur-sm`

**Typography:**
- Sans: Inter (var: `--font-sans`)
- Heading: Playfair Display (var: `--font-heading`)
- Use `font-heading` for titles and hero text

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
    {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom-=100",
      }
    }
  );
}, []);
```

### 3D Components Pattern

The project uses React Three Fiber for 3D visualizations (e.g., globe in `components/ui/globe.tsx`):
```tsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function ThreeScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <OrbitControls />
      {/* 3D objects */}
    </Canvas>
  )
}
```
Always wrap Three.js components in Canvas and ensure they are client components.

### Data Structure

**Hero Profiles:**
Hero profiles are defined as arrays of objects in page files:
```typescript
{
  name: string;
  role: string;
  country: string;
  description: string;
  imageUrl: string; // Located in /public/aes/AES/
}
```

**Blog System:**
Blog posts are stored as JSON in `data/blogs/` and rendered via Next.js:
- `lib/blog-utils.ts` - Server-side utilities to read blog JSON files
- `app/blog/` - Blog listing and detail pages using `BlogCard.tsx`
- See `types/blog.ts` for blog post type definitions

## Product Requirements

The project follows a detailed PRD located at `../Product Requirements Document (PRD)_ Pan-African Heroes Educational Website.md`:

**Key Requirements:**
- Card-based UI for hero profiles
- Filter by Historical Heroes vs Contemporary Leaders
- Factual, educational content about Pan-Africanism
- Responsive, mobile-first design
- Performance: Lighthouse 90+ scores
- Production-ready TypeScript with strict mode

**Featured Heroes:**
- Historical: Thomas Sankara, Patrice Lumumba, Kwame Nkrumah, Modibo Keïta
- Contemporary: Ibrahim Traoré, Assimi Goïta, Abdourahamane Tchiani

## Code Standards

### TypeScript
- Strict mode enabled (`strict: true` in tsconfig.json)
- All components must have proper type definitions
- Use interfaces for props (e.g., `HeroCardProps`, `ProfileCardProps`)

### Component Props Pattern
```typescript
interface ComponentProps {
  prop1: string;
  prop2: number;
  index?: number; // For stagger animations (optional)
}

export function Component({ prop1, prop2, index = 0 }: ComponentProps) {
  // Use index for GSAP/Framer stagger delays: delay: index * 0.1
}
```

**Common Prop Patterns:**
- `index` prop for staggered animations (see `HeroCard.tsx`)
- All animation components must be client components (`"use client"`)

### Adding UI Components

```bash
npx shadcn@latest add [component-name]              # Default shadcn/ui
npx shadcn@latest add @aceternity/[component-name]  # Animated components
npx shadcn@latest add @magicui/[component-name]     # Magic UI
npx shadcn@latest add @tailark/[component-name]     # Tailark
```

Components install to `components/ui/` and import via `@/components/ui/[name]`

## Asset Management

### Images
Images are organized in multiple directories:
- `/public/aes/AES/` - Primary AES leader images
- `/public/aes/Images-AES-Leaders/` - Additional AES leader photos
- `/public/images/` - General site images (logos, achievements, infrastructure)
- `/public/aes-russia-military-images/` - Russia-AES relations imagery

**Usage with Next.js Image:**
```tsx
<Image
  src="/aes/AES/filename.jpg" // or /images/filename.png
  alt="descriptive text"
  fill // or width/height
  className="object-cover"
/>
```

**Remote Images:**
- Unsplash images are allowed via `next.config.ts` remote patterns

## Future Considerations (V2)

From the PRD, out of scope for V1.0 but planned:
- CMS integration (Strapi/Contentful)
- Interactive map of AES countries
- Multilingual support (French, Swahili, Portuguese)
- User feedback/contribution system
- Public API for hero data

## Directory Structure

```
my-app/
├── app/                # Next.js App Router pages
├── components/         # React components
│   ├── ui/            # shadcn/ui components
│   └── *.tsx          # Page-level components
├── data/              # Static data (blog JSON files)
├── lib/               # Utilities (utils.ts, blog-utils.ts)
├── public/            # Static assets (images in /aes/, /images/)
├── types/             # TypeScript type definitions
└── components.json    # shadcn/ui configuration
```

## Important Notes

- **Theme:** Site defaults to dark mode, suppresses hydration warnings via `suppressHydrationWarning`
- **Performance:** Heavy use of animations (Framer Motion, GSAP, Three.js) - monitor bundle size
- **Content:** Maintain factual accuracy per PRD requirements
- **Accessibility:** shadcn/ui provides accessible base components
