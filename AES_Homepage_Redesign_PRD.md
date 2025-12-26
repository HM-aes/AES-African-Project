# AES African Project - Homepage Redesign PRD

**Project:** Alliance of Sahel States News Platform Redesign  
**Date:** December 23, 2024  
**Stack:** Next.js + TypeScript + Tailwind + GSAP (free version)  
**Goal:** Transform from info portal → modern news platform with cinematic feel

---

## 🎯 Homepage Structure Overview

```
┌─────────────────────────────────────┐
│ 1. NAVBAR (Sticky)                  │ ← Always visible
├─────────────────────────────────────┤
│ 2. NEWS TICKER (Breaking)           │ ← Live updates scroll
├─────────────────────────────────────┤
│                                     │
│ 3. HERO SECTION                     │ ← Intro Section 1
│    (Full viewport height)           │
│                                     │
├─────────────────────────────────────┤
│                                     │
│ 4. VIDEO HOLDER #1                  │ ← "AES in 90 seconds"
│    (Explainer Video)                │
│                                     │
├─────────────────────────────────────┤
│                                     │
│ 5. AES QUICK FACTS                  │ ← Intro Section 2
│    (3-col stats grid)               │
│                                     │
├─────────────────────────────────────┤
│                                     │
│ 6. LEADERS SPOTLIGHT                │ ← Intro Section 3
│    (3 leader cards horizontal)      │
│                                     │
├─────────────────────────────────────┤
│                                     │
│ 7. VIDEO HOLDER #2                  │ ← Latest video report
│    (Featured Report)                │
│                                     │
├─────────────────────────────────────┤
│                                     │
│ 8. DAILY NEWS FEED                  │ ← Main content area
│    (Infinite grid with filters)     │
│                                     │
├─────────────────────────────────────┤
│ 9. FOOTER                           │
└─────────────────────────────────────┘
```

**Layout Flow:**
- **Sections 1-6:** Intro experience (scroll-driven storytelling)
- **Sections 7-8:** Content consumption (news browsing)
- **Section 9:** Navigation/links

---

## 📐 Section 1: NAVBAR

### Design Specs

**Layout:**
```
┌────────────────────────────────────────────────────────┐
│ [🇲🇱 AES Hub]  [Links]          [Search] [🌐 EN] [☀️] │
└────────────────────────────────────────────────────────┘
```

**Structure:**
- **Left:** Flag icon + "AES Hub" logo text
- **Center:** Navigation links (horizontal)
- **Right:** Search icon, Language toggle, Theme toggle

**Navigation Items (Desktop):**
1. Home
2. Latest News
3. AES Alliance  
4. Leaders
5. About

**Mobile:** Hamburger menu (slide-in drawer)

### Visual Design

**Dimensions:**
- Height: `72px` (default) → `60px` (scrolled)
- Max-width: `100%` (full bleed)
- Padding: `px-6 lg:px-8`

**Colors:**
- Background: `bg-background/80` (semi-transparent)
- Backdrop: `backdrop-blur-lg` (12px blur)
- Border: `border-b border-border/40`
- Text: `text-foreground`

**Typography:**
- Logo: `font-bold text-lg`
- Links: `font-medium text-sm`
- Hover: `text-primary` (green accent)

### Behavior & Interactions

**Scroll Behavior:**
- Start: Transparent background, no blur
- After 50px scroll: Blur activates, height shrinks, shadow appears
- Sticky: `position: sticky; top: 0; z-index: 50;`

**Link Hover:**
- Underline animation (left to right)
- Color transition to green
- Duration: 200ms ease

**Mobile Menu:**
- Slide from right
- Backdrop overlay
- Close on link click or backdrop click

### GSAP Animations

```javascript
// Navbar scroll animation
gsap.to("nav", {
  scrollTrigger: {
    start: "50px top",
    toggleActions: "play none none reverse"
  },
  height: "60px",
  backgroundColor: "rgba(0,0,0,0.8)",
  backdropFilter: "blur(12px)",
  duration: 0.3
});
```

### Technical Notes

**Component:** `<Navbar />`  
**File:** `components/Navbar.tsx`

**Key Features:**
- `useState` for mobile menu toggle
- `useEffect` for scroll listener
- `next/link` for navigation
- `lucide-react` for icons (Menu, Search, Globe)

**Accessibility:**
- ARIA labels on icons
- Keyboard navigation
- Focus visible states

---

## 📰 Section 2: NEWS TICKER

### Purpose
Create urgency and "live newsroom" feel with breaking headlines

### Design Specs

**Layout:**
```
[🔴 LIVE] Breaking: FAMA reclaims northern territory | Nigeria apologizes for airspace violation | [→ View All]
```

**Structure:**
- **Icon:** Red pulsing dot + "LIVE" text
- **Content:** Scrolling marquee of headlines (separator: `|`)
- **CTA:** "View All" link on right (fixed position)

### Visual Design

**Dimensions:**
- Height: `40px`
- Full width
- No max-width constraint

**Colors:**
- Background: `bg-red-600/90` (urgent red)
- Text: `text-white`
- Dot: Pulsing red `animate-pulse`

**Typography:**
- Font: `text-sm font-medium`
- Line height: `leading-none`
- Uppercase: Category tags only

### Behavior & Interactions

**Scrolling:**
- Speed: 50px/second (smooth, readable)
- Direction: Right to left
- Loop: Infinite seamless
- Pause: On hover

**Click:**
- Headline click → Opens article in modal or new page
- "View All" → Navigate to `/blog`

### Content Structure

**Headline Format:**
```
[Category] Headline text (max 80 chars)
```

**Example:**
```
🇲🇱 Mali: FAMA forces secure 3 northern villages | 🇧🇫 Burkina Faso: Agricultural output up 40% | 🇳🇪 Niger: New mining deal finalized
```

**Data Source:**
- Fetch latest 5-7 posts from `/api/news/latest`
- Update: Every 5 minutes (client-side polling)
- Fallback: Static headlines if API fails

### GSAP Animation

```javascript
// Infinite marquee scroll
gsap.to(".ticker-content", {
  x: "-100%",
  duration: 30,
  ease: "none",
  repeat: -1
});

// Pause on hover
ticker.addEventListener("mouseenter", () => gsap.globalTimeline.pause());
ticker.addEventListener("mouseleave", () => gsap.globalTimeline.resume());
```

### Technical Notes

**Component:** `<NewsTicker />`  
**File:** `components/NewsTicker.tsx`

**Implementation:**
- Use GSAP `gsap.to()` for smooth scroll
- Duplicate content for seamless loop
- `useSWR` for data fetching with revalidation

**Performance:**
- GPU-accelerated: `will-change: transform`
- Debounce hover events
- Lazy load on viewport entry

---

## 🎬 Section 3: HERO SECTION

### Overview
**Type:** Full-screen cinematic intro  
**Goal:** Immediate impact with Pan-African pride + news authority  
**Layout:** 50/50 split (content left, visual right)

### Desktop Layout (1920x1080)

```
┌──────────────────────────────────────────────────┐
│                                                  │
│  ┌──────────────────┬─────────────────────┐    │
│  │                  │                      │    │
│  │  Content Area    │   Visual Area       │    │
│  │  (Left 50%)      │   (Right 50%)       │    │
│  │                  │                      │    │
│  │  🇲🇱 🇧🇫 🇳🇪        │   [Animated Map]    │    │
│  │                  │   or Video          │    │
│  │  Alliance of     │                      │    │
│  │  Sahel States    │   [Glowing borders] │    │
│  │                  │                      │    │
│  │  Breaking news...│   [Capital dots]     │    │
│  │                  │                      │    │
│  │  [Stats bar]     │                      │    │
│  │  [CTA buttons]   │                      │    │
│  │                  │                      │    │
│  └──────────────────┴─────────────────────┘    │
│                                                  │
└──────────────────────────────────────────────────┘
```

**Mobile Layout:** Stack vertically (visual top, content bottom)

### Content Area (Left Side)

#### 1. Flag Row
**Design:**
- Flags: 🇲🇱 🇧🇫 🇳🇪 (SVG or emoji)
- Size: `32px` each
- Spacing: `gap-2`
- Position: Top of content
- Animation: Fade in + scale (stagger 100ms each)

```jsx
<div className="flex gap-2 mb-6">
  <span className="text-4xl">🇲🇱</span>
  <span className="text-4xl">🇧🇫</span>
  <span className="text-4xl">🇳🇪</span>
</div>
```

#### 2. Main Headline
**Text:** "Alliance of Sahel States"

**Typography:**
- Font: `font-bold text-6xl lg:text-7xl`
- Color: `text-white`
- Line height: `leading-tight`
- Letter spacing: `tracking-tight`

**Animation (GSAP + SplitText):**
```javascript
// Split headline into words
const split = new SplitText("h1", { type: "words,chars" });

// Stagger animation
gsap.from(split.chars, {
  opacity: 0,
  y: 50,
  rotationX: -90,
  stagger: 0.02,
  duration: 0.8,
  ease: "back.out(1.7)"
});
```

**Gradient Overlay:**
```css
background: linear-gradient(to right, #fff, #22c55e);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

#### 3. Subheadline
**Text:** "Breaking news, strategic updates, and Pan-African sovereignty in real-time"

**Typography:**
- Font: `text-xl lg:text-2xl font-normal`
- Color: `text-gray-300`
- Line height: `leading-relaxed`
- Max width: `max-w-xl`

**Animation:**
```javascript
gsap.from(".subheadline", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.5,
  ease: "power2.out"
});
```

#### 4. Stats Bar
**Layout:** Horizontal row with dividers

```
3 Nations  |  50+ Years Partnership  |  Live Updates
```

**Design:**
- Font: `text-sm font-medium uppercase tracking-wider`
- Color: `text-gray-400`
- Divider: `border-l border-gray-600` between items
- Spacing: `gap-6`
- Icons: Optional (Shield, Handshake, Broadcast)

**Animation:**
```javascript
gsap.from(".stats-item", {
  opacity: 0,
  x: -20,
  stagger: 0.15,
  duration: 0.6,
  delay: 0.8,
  ease: "power2.out"
});
```

#### 5. CTA Buttons
**Primary Button:**
- Text: "Latest Updates"
- Link: `/blog`
- Style: `bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold`
- Icon: `ArrowRight` from lucide-react

**Secondary Button:**
- Text: "Explore Alliance"
- Link: `/aes`
- Style: `border-2 border-white/20 hover:border-green-500 text-white px-8 py-4 rounded-lg font-semibold`

**Layout:**
```jsx
<div className="flex gap-4 mt-8">
  <Button variant="primary">Latest Updates →</Button>
  <Button variant="secondary">Explore Alliance</Button>
</div>
```

**Animation:**
```javascript
gsap.from(".cta-buttons button", {
  opacity: 0,
  scale: 0.9,
  stagger: 0.1,
  duration: 0.5,
  delay: 1.2,
  ease: "back.out(1.7)"
});
```

### Visual Area (Right Side)

#### Option A: Animated SVG Map (RECOMMENDED)

**Design:**
- SVG map of Mali, Burkina Faso, Niger
- Glowing borders (DrawSVG plugin)
- Capital cities as pulsing dots
- Gold/green gradient glow effect

**SVG Structure:**
```jsx
<svg viewBox="0 0 500 500" className="w-full h-full">
  <defs>
    <linearGradient id="glow">
      <stop offset="0%" stopColor="#22c55e" />
      <stop offset="100%" stopColor="#fbbf24" />
    </linearGradient>
  </defs>
  
  {/* Country paths */}
  <path id="mali" d="..." fill="transparent" stroke="url(#glow)" strokeWidth="3" />
  <path id="burkina" d="..." fill="transparent" stroke="url(#glow)" strokeWidth="3" />
  <path id="niger" d="..." fill="transparent" stroke="url(#glow)" strokeWidth="3" />
  
  {/* Capital dots */}
  <circle id="bamako" cx="200" cy="250" r="6" fill="#fbbf24" />
  <circle id="ouagadougou" cx="250" cy="280" r="6" fill="#fbbf24" />
  <circle id="niamey" cx="300" cy="260" r="6" fill="#fbbf24" />
</svg>
```

**GSAP Animation:**
```javascript
// Draw borders on load
gsap.from("#mali, #burkina, #niger", {
  drawSVG: "0%",
  stagger: 0.3,
  duration: 2,
  ease: "power2.inOut"
});

// Pulse capitals
gsap.to("#bamako, #ouagadougou, #niamey", {
  scale: 1.5,
  opacity: 0.5,
  duration: 1.5,
  repeat: -1,
  yoyo: true,
  ease: "power2.inOut",
  stagger: 0.2
});

// Glow effect
gsap.to("path", {
  filter: "drop-shadow(0 0 10px rgba(34, 197, 94, 0.8))",
  duration: 2,
  repeat: -1,
  yoyo: true
});
```

#### Option B: Video Background

**Design:**
- Muted autoplay video loop
- Overlay: `bg-black/40` for readability
- Video: b-roll of AES countries (markets, cities, people)
- Duration: 30-60 seconds loop

**Fallback:** Static hero image if video fails

**Implementation:**
```jsx
<div className="relative w-full h-full">
  <video 
    autoPlay 
    loop 
    muted 
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/videos/aes-hero.mp4" type="video/mp4" />
  </video>
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
</div>
```

#### Option C: Leaders Composite Image

**Design:**
- Side-by-side photos of 3 leaders
- Blend mode overlay
- Gold border accent
- Subtle zoom animation on load

**My Recommendation:** **Option A (Animated Map)** - unique, on-brand, performant

### Background Design

**Base:**
```css
background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
```

**Overlay Gradient:**
```css
background: radial-gradient(
  ellipse at top right,
  rgba(34, 197, 94, 0.15) 0%,
  transparent 50%
);
```

**Noise Texture:**
```css
background-image: url('/images/noise.png');
opacity: 0.03;
```

**Animated Grid (Optional):**
```jsx
<div className="absolute inset-0 bg-grid-pattern opacity-10" />
```

### Scroll Behavior

**Parallax Effect:**
```javascript
gsap.to(".hero-visual", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: 1
  },
  y: 100,
  opacity: 0.5
});
```

**Content Fade:**
```javascript
gsap.to(".hero-content", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: 1
  },
  y: -50,
  opacity: 0
});
```

### Technical Implementation

**Component:** `<HeroSection />`  
**File:** `components/sections/HeroSection.tsx`

**Dependencies:**
- `gsap` - Core animations
- `gsap/ScrollTrigger` - Scroll-based animations
- `gsap/DrawSVG` - SVG path animations (if using map)
- `gsap/SplitText` - Text splitting (if animating headline)
- `lucide-react` - Icons

**Performance:**
- Lazy load hero visual
- Optimize SVG paths
- Use `will-change: transform` on animated elements
- Preload critical fonts

**Responsive Breakpoints:**
- Mobile: Stack vertically, reduce headline size
- Tablet: Maintain split but adjust ratios
- Desktop: Full 50/50 split

**Accessibility:**
- Alt text for visual elements
- Keyboard-accessible CTAs
- ARIA labels for decorative elements
- Reduced motion support (`prefers-reduced-motion`)

---

## 🎥 Section 4: VIDEO HOLDER #1

### Purpose
"AES in 90 Seconds" explainer video - quick orientation for new visitors

### Design Specs

**Layout:**
```
┌────────────────────────────────────┐
│         VIDEO THUMBNAIL            │
│                                    │
│     [▶ Watch: AES in 90 Seconds]   │
│                                    │
│  "Discover the story, mission,    │
│   and future of Pan-African unity" │
└────────────────────────────────────┘
```

**Structure:**
- Video player (16:9 ratio)
- Overlay with title + play button
- Short description below

### Visual Design

**Container:**
- Max width: `max-w-5xl mx-auto`
- Padding: `py-20 px-6`
- Background: `bg-gradient-to-b from-black/50 to-transparent`

**Video Player:**
- Aspect ratio: `16:9`
- Border: `border-2 border-green-500/30`
- Border radius: `rounded-2xl`
- Shadow: `shadow-2xl shadow-green-500/20`

**Play Overlay:**
- Centered play button (large, circular)
- Background: `bg-green-600/80 backdrop-blur-sm`
- Icon: `Play` from lucide-react
- Size: `80px` diameter
- Hover: Scale + glow effect

**Typography:**
- Title: `text-3xl font-bold text-white mb-4`
- Description: `text-lg text-gray-300 max-w-2xl mx-auto`

### Behavior & Interactions

**Play Button Click:**
- Fade out overlay
- Start video playback
- Show controls

**Video Controls:**
- Custom controls matching site theme
- Progress bar in green
- Volume, fullscreen, quality options

**Scroll Behavior:**
- Pause video when out of viewport
- Resume if user scrolls back

### GSAP Animation

```javascript
gsap.from(".video-container", {
  scrollTrigger: {
    trigger: ".video-container",
    start: "top 80%",
    end: "top 20%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  y: 50,
  scale: 0.95,
  duration: 1,
  ease: "power2.out"
});
```

### Video Embed Options

**Option A: YouTube Embed**
```jsx
<iframe 
  src="https://www.youtube.com/embed/VIDEO_ID"
  className="w-full aspect-video rounded-2xl"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media"
/>
```

**Option B: Self-hosted (Next.js)**
```jsx
<video 
  controls 
  poster="/images/video-thumbnail.jpg"
  className="w-full aspect-video rounded-2xl"
>
  <source src="/videos/aes-explainer.mp4" type="video/mp4" />
</video>
```

**My Recommendation:** Self-hosted for faster loading + no YouTube branding

### Technical Notes

**Component:** `<VideoHolder />`  
**Props:**
- `videoUrl: string`
- `title: string`
- `description: string`
- `thumbnail?: string`

**Performance:**
- Lazy load video (below fold)
- Use poster image as placeholder
- Progressive video loading

---

## 📊 Section 5: AES QUICK FACTS

### Purpose
High-level stats to establish credibility and scale

### Design Specs

**Layout:** 3-column grid (1 col mobile)

```
┌──────────────┬──────────────┬──────────────┐
│              │              │              │
│   STAT 1     │   STAT 2     │   STAT 3     │
│              │              │              │
│   Number     │   Number     │   Number     │
│   Label      │   Label      │   Label      │
│              │              │              │
└──────────────┴──────────────┴──────────────┘
```

### Content Examples

**Stat 1:**
- Number: "3"
- Label: "Sovereign Nations United"
- Icon: Shield or Flag

**Stat 2:**
- Number: "50M+"
- Label: "Citizens Represented"
- Icon: Users

**Stat 3:**
- Number: "2023"
- Label: "Alliance Established"
- Icon: Calendar

**Additional Stats (rotate or A/B test):**
- "5,000+ Joint Forces"
- "$895M Investment Bank"
- "40% Agricultural Growth"

### Visual Design

**Card Style:**
- Background: `bg-gradient-to-br from-gray-900 to-gray-800`
- Border: `border border-green-500/20`
- Padding: `p-8`
- Border radius: `rounded-xl`
- Hover: Lift effect + border glow

**Typography:**
- Number: `text-6xl font-bold text-green-400`
- Label: `text-lg text-gray-300 mt-2`
- Icon: `text-green-500 mb-4` (48px size)

**Spacing:**
- Grid gap: `gap-6 lg:gap-8`
- Container padding: `py-20 px-6`

### GSAP Animation

```javascript
gsap.from(".stat-card", {
  scrollTrigger: {
    trigger: ".stats-section",
    start: "top 70%"
  },
  opacity: 0,
  y: 50,
  stagger: 0.2,
  duration: 0.8,
  ease: "power3.out"
});

// Animated counters
gsap.to(".stat-number", {
  scrollTrigger: {
    trigger: ".stats-section",
    start: "top 70%"
  },
  textContent: (i, target) => target.dataset.count,
  duration: 2,
  ease: "power1.out",
  snap: { textContent: 1 }
});
```

### Technical Notes

**Component:** `<StatsSection />`

**Data Structure:**
```typescript
interface Stat {
  number: string;
  label: string;
  icon: LucideIcon;
}

const stats: Stat[] = [
  { number: "3", label: "Sovereign Nations", icon: Shield },
  { number: "50000000", label: "Citizens", icon: Users },
  { number: "2023", label: "Founded", icon: Calendar }
];
```

---

## 👥 Section 6: LEADERS SPOTLIGHT

### Purpose
Humanize the alliance with leader profiles

### Design Specs

**Layout:** 3-card horizontal scroll (mobile) or grid (desktop)

```
┌─────────────┬─────────────┬─────────────┐
│   Leader 1  │  Leader 2   │  Leader 3   │
│   [Photo]   │  [Photo]    │  [Photo]    │
│   Name      │  Name       │  Name       │
│   Title     │  Title      │  Title      │
│   Country   │  Country    │  Country    │
│   [Learn →] │  [Learn →]  │  [Learn →]  │
└─────────────┴─────────────┴─────────────┘
```

### Content

**Leader 1: Col. Assimi Goïta (Mali 🇲🇱)**
- Photo: `/images/goita.jpg`
- Title: "President of Transition"
- Quote: "Africa's future will be written by Africans"
- Link: `/aes#goita`

**Leader 2: Capt. Ibrahim Traoré (Burkina Faso 🇧🇫)**
- Photo: `/images/traore.jpg`
- Title: "President of Transition"
- Quote: "We choose sovereignty over dependence"
- Link: `/aes#traore`

**Leader 3: Gen. Abdourahamane Tiani (Niger 🇳🇪)**
- Photo: `/images/tiani.jpg`
- Title: "President of CNSP"
- Quote: "Our resources will serve our people first"
- Link: `/aes#tiani`

### Visual Design

**Card:**
- Background: `bg-gray-900/50 backdrop-blur-sm`
- Border: `border border-gray-800 hover:border-green-500/50`
- Padding: `p-6`
- Border radius: `rounded-2xl`
- Shadow: `shadow-xl`

**Photo:**
- Aspect ratio: `3:4` (portrait)
- Border radius: `rounded-xl`
- Grayscale filter: `grayscale(100%) hover:grayscale(0)`
- Transition: `transition-all duration-500`

**Typography:**
- Name: `text-2xl font-bold text-white`
- Title: `text-sm text-green-400 uppercase tracking-wide`
- Quote: `text-gray-300 italic text-sm mt-4`
- Country flag: `text-3xl` emoji

**CTA Link:**
- Style: `text-green-400 hover:text-green-300 flex items-center gap-2`
- Icon: `ArrowRight` from lucide-react

### GSAP Animation

```javascript
gsap.from(".leader-card", {
  scrollTrigger: {
    trigger: ".leaders-section",
    start: "top 60%"
  },
  opacity: 0,
  y: 80,
  rotationY: 15,
  stagger: 0.2,
  duration: 1,
  ease: "power3.out"
});

// Hover tilt effect
const cards = document.querySelectorAll(".leader-card");
cards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    gsap.to(card, {
      rotationY: (x / rect.width - 0.5) * 10,
      rotationX: -(y / rect.height - 0.5) * 10,
      duration: 0.3
    });
  });
});
```

### Technical Notes

**Component:** `<LeadersSection />`

**Data Structure:**
```typescript
interface Leader {
  name: string;
  title: string;
  country: string;
  flag: string;
  photo: string;
  quote: string;
  link: string;
}
```

---

## 🎥 Section 7: VIDEO HOLDER #2

### Purpose
Latest video report or featured news coverage

### Design
Same as Video Holder #1 but with:
- Title: "Latest Video Report"
- Description: "Stay updated with our newest coverage"
- Different video content (rotates weekly)

**Additional Feature:**
- Playlist sidebar (optional): Show 3-4 recent videos as thumbnails
- Auto-play next video option

---

## 📰 Section 8: DAILY NEWS FEED

### Purpose
Main content area - browsable news archive

### Layout Structure

```
┌─────────────────────────────────────────┐
│  FILTER BAR                             │
│  [All] [Mali] [Burkina] [Niger] [Search]│
├─────────────────────────────────────────┤
│  ┌─────────┬─────────┬─────────┐       │
│  │ Card 1  │ Card 2  │ Card 3  │       │
│  │ [Image] │ [Image] │ [Image] │       │
│  │ Title   │ Title   │ Title   │       │
│  │ Date    │ Date    │ Date    │       │
│  └─────────┴─────────┴─────────┘       │
│  ┌─────────┬─────────┬─────────┐       │
│  │ Card 4  │ Card 5  │ Card 6  │       │
│  └─────────┴─────────┴─────────┘       │
│                                         │
│  [Load More] or [Pagination]           │
└─────────────────────────────────────────┘
```

### Filter Bar

**Options:**
- All News
- 🇲🇱 Mali
- 🇧🇫 Burkina Faso
- 🇳🇪 Niger
- 🤝 Joint Forces
- 💰 Economy
- 🌾 Agriculture

**Design:**
- Horizontal scrollable tabs (mobile)
- Pills with active state
- Active: `bg-green-600 text-white`
- Inactive: `bg-gray-800 text-gray-300 hover:bg-gray-700`

**Search Input:**
- Icon: `Search` from lucide-react
- Placeholder: "Search news..."
- Debounced search (300ms)

### News Card Design

**Structure:**
```jsx
<article className="news-card">
  <img src={thumbnail} alt={title} />
  <div className="content">
    <span className="category">{category}</span>
    <h3 className="title">{title}</h3>
    <p className="excerpt">{excerpt}</p>
    <div className="meta">
      <span className="date">{date}</span>
      <span className="readtime">{readTime} min read</span>
    </div>
  </div>
</article>
```

**Visual:**
- Aspect ratio: `16:9` for image
- Border radius: `rounded-xl`
- Hover: Lift + border glow
- Transition: Smooth 300ms

**Typography:**
- Title: `text-xl font-bold text-white line-clamp-2`
- Excerpt: `text-gray-400 text-sm line-clamp-3`
- Meta: `text-xs text-gray-500`

### Pagination Options

**Option A: Load More Button**
- Infinite scroll trigger
- Loads 9 more cards per click
- Smooth append animation

**Option B: Classic Pagination**
- Page numbers (1, 2, 3... 10)
- Next/Previous buttons
- Shows: "Page 1 of 10"

**My Recommendation:** Load More (better UX for news browsing)

### GSAP Animation

```javascript
// Cards appear on scroll
gsap.from(".news-card", {
  scrollTrigger: {
    trigger: ".news-grid",
    start: "top 80%"
  },
  opacity: 0,
  y: 50,
  stagger: 0.1,
  duration: 0.6,
  ease: "power2.out"
});

// Load more animation
function loadMoreCards(newCards) {
  gsap.from(newCards, {
    opacity: 0,
    y: 30,
    stagger: 0.08,
    duration: 0.5
  });
}
```

### Technical Notes

**Component:** `<NewsFeed />`

**Data Fetching:**
- Initial: SSR (Next.js `getServerSideProps`)
- Pagination: Client-side (`useSWR` or React Query)
- API: `/api/news?page=1&category=mali&limit=9`

**Filtering:**
- Client-side for small datasets (<100 items)
- Server-side for large datasets

**Performance:**
- Lazy load images (`next/image`)
- Virtual scrolling for 500+ items
- Cache API responses (5min TTL)

---

## 🎨 Global Design System

### Color Palette (Pan-African Theme)

**Primary Colors:**
```css
--green-primary: #22c55e;    /* Unity, growth */
--gold-accent: #fbbf24;       /* Prosperity, sovereignty */
--red-urgent: #ef4444;        /* Breaking news */
```

**Neutral Colors:**
```css
--gray-50: #f9fafb;
--gray-900: #111827;
--black: #0a0a0a;
```

**Usage:**
- Background: Dark grays (#0a0a0a to #1a1a1a)
- Text: White to gray-300
- Accents: Green for CTAs, Gold for highlights, Red for urgent

### Typography

**Fonts:**
- Headings: `Inter` or `Outfit` (bold, modern)
- Body: `Inter` (readable, clean)
- Mono: `JetBrains Mono` (for code/stats)

**Scale:**
```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-4xl: 2.25rem;   /* 36px */
--text-6xl: 3.75rem;   /* 60px */
```

### Spacing System

```css
--spacing-4: 1rem;     /* 16px */
--spacing-6: 1.5rem;   /* 24px */
--spacing-8: 2rem;     /* 32px */
--spacing-12: 3rem;    /* 48px */
--spacing-20: 5rem;    /* 80px */
```

### Border Radius

```css
--radius-sm: 0.375rem;  /* 6px */
--radius-md: 0.5rem;    /* 8px */
--radius-lg: 0.75rem;   /* 12px */
--radius-xl: 1rem;      /* 16px */
--radius-2xl: 1.5rem;   /* 24px */
```

### Shadows

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
--shadow-glow: 0 0 20px rgba(34, 197, 94, 0.3);
```

---

## 🚀 GSAP Implementation Guide

### Installation

```bash
npm install gsap
```

### Setup (app/layout.tsx or _app.tsx)

```typescript
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVG } from "gsap/DrawSVG";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, DrawSVG, SplitText);

// Smooth scrolling (optional)
import Lenis from '@studio-freight/lenis';

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
```

### Global Animation Patterns

**1. Fade In on Scroll**
```javascript
gsap.utils.toArray(".fade-in").forEach(el => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%"
    },
    opacity: 0,
    y: 50,
    duration: 1
  });
});
```

**2. Stagger Grid Items**
```javascript
gsap.from(".grid-item", {
  scrollTrigger: ".grid-container",
  opacity: 0,
  y: 30,
  stagger: 0.1,
  duration: 0.6
});
```

**3. Parallax Background**
```javascript
gsap.to(".parallax-bg", {
  scrollTrigger: {
    scrub: 1
  },
  y: "30%"
});
```

**4. Text Reveal**
```javascript
const split = new SplitText(".reveal-text", { type: "lines,words" });
gsap.from(split.words, {
  opacity: 0,
  y: 20,
  stagger: 0.05
});
```

### Performance Tips

**DO:**
- Use `will-change: transform` on animated elements
- Batch DOM reads/writes
- Use GSAP's `quickTo()` for frequent updates
- Enable GPU acceleration with `force3D: true`

**DON'T:**
- Animate non-transformable properties (use transforms)
- Chain too many ScrollTriggers (batch them)
- Animate elements with `display: none`

---

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 640px) {
  /* Stack hero, hide parallax, simplified animations */
}

/* Tablet */
@media (min-width: 641px) and (max-width: 1024px) {
  /* Adjust grid columns, maintain split layout */
}

/* Desktop */
@media (min-width: 1025px) {
  /* Full experience with all animations */
}

/* Large Desktop */
@media (min-width: 1920px) {
  /* Max widths, more spacing */
}
```

### Mobile Optimizations

**Hero Section:**
- Stack vertically (visual top, content bottom)
- Reduce headline size: `text-4xl` instead of `text-7xl`
- Simplify animations (fewer particles, no parallax)

**News Feed:**
- 1 column grid
- Larger touch targets (min 44x44px)
- Horizontal scroll for filters

**Navigation:**
- Hamburger menu
- Full-screen drawer
- Simplified ticker (slower speed)

---

## ⚡ Performance Checklist

### Images
- [ ] Use `next/image` for all images
- [ ] Optimize with WebP format
- [ ] Lazy load below-fold content
- [ ] Proper `alt` text for accessibility
- [ ] Responsive srcsets for different viewports

### Fonts
- [ ] Preload critical fonts
- [ ] Use `font-display: swap`
- [ ] Subset fonts (Latin only if possible)
- [ ] Self-host instead of Google Fonts

### JavaScript
- [ ] Code splitting by route
- [ ] Lazy load GSAP plugins
- [ ] Defer non-critical scripts
- [ ] Tree-shake unused code

### CSS
- [ ] Purge unused Tailwind classes
- [ ] Critical CSS inline
- [ ] Minimize repaints/reflows
- [ ] Use CSS containment

### API & Data
- [ ] Implement SWR/React Query caching
- [ ] Static generation where possible (ISR)
- [ ] Compress API responses (gzip/brotli)
- [ ] Rate limit client requests

### Metrics to Monitor
- **LCP:** < 2.5s (hero image load)
- **FID:** < 100ms (button clicks)
- **CLS:** < 0.1 (no layout shifts)
- **TTI:** < 3.5s (interactive)

---

## 🎯 Next Steps

### Phase 1: Foundation (Days 1-2)
1. Set up Next.js project with TypeScript
2. Install dependencies (GSAP, Tailwind, Lucide)
3. Create basic layout (Navbar, Footer)
4. Implement design system (colors, typography)

### Phase 2: Intro Sections (Days 3-5)
1. Build Hero Section with animated map
2. Add News Ticker component
3. Create Stats Section with counters
4. Build Leaders Spotlight cards

### Phase 3: Content Sections (Days 6-7)
1. Implement Video Holders (both)
2. Build News Feed with filters
3. Add pagination/load more
4. Connect to API/CMS

### Phase 4: Animations (Days 8-9)
1. Add GSAP ScrollTrigger animations
2. Implement hover effects
3. Optimize performance
4. Test on mobile

### Phase 5: Polish (Day 10)
1. Accessibility audit
2. SEO optimization
3. Final testing
4. Deploy to production

---

## ❓ Open Questions

1. **News Ticker:** Classic scrolling marquee or expandable dropdown?
   - **Recommendation:** Scrolling marquee (more iconic)

2. **Hero Visual:** Animated map, video, or leaders composite?
   - **Recommendation:** Animated SVG map (unique, performant)

3. **Video Hosting:** YouTube embed or self-hosted?
   - **Recommendation:** Self-hosted (faster, more control)

4. **News Feed:** Infinite scroll or pagination?
   - **Recommendation:** Load More button (better UX)

5. **Color Theme:** Strictly Pan-African (red/gold/green) or more muted?
   - **Recommendation:** Use as accents, not dominant

---

## 📝 Technical Stack Summary

**Frontend:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- GSAP (with ScrollTrigger, DrawSVG, SplitText)
- Lucide React (icons)

**Data Fetching:**
- SWR or React Query
- Next.js API routes
- Static generation (ISR) where possible

**Deployment:**
- Vercel (recommended)
- Cloudflare Pages (alternative)

**Analytics:**
- Plausible or Simple Analytics (privacy-focused)

---

**Ready to start building?** Let me know which section you want to tackle first! 🚀
