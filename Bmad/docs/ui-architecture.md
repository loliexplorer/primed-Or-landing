# Primed'Or Frontend Architecture Document

## Change Log
| Date | Version | Description | Author |
| -- | -- | -- | -- |
| 2025-12-19 | 0.1 | Initial Draft | Architect Agent |

## Template and Framework Selection

### Framework Decision: Next.js (React)
Based on the Project Brief's requirement for a "Cinematic Brand Story" with high-performance metrics (LCP < 2.5s), **Next.js** is the recommended framework.
*   **Why Next.js?**
    *   **Image Optimization:** Built-in `next/image` component is critical for handling the heavy visual assets (product photos, textures) without killing performance.
    *   **SSR/SSG:** Essential for SEO (indexing the brand story) and initial load speed.
    *   **Routing:** File-system based routing simplifies the landing page structure.

### Starter Template: Standard `create-next-app`
We will use the standard **Next.js App Router** starter, specifically configured for:
*   **TypeScript:** For type safety and better developer experience.
*   **Tailwind CSS:** Pre-configured for rapid styling.
*   **ESLint:** Standard code quality checks.

We will **NOT** use a heavy UI kit (like Material UI or AntD) because the design needs to be highly custom and "premium", which is harder to override in pre-built kits. We will build bespoke components using Tailwind.

## Frontend Tech Stack

| Category | Technology | Version | Purpose | Rationale |
| -- | -- | -- | -- | -- |
| **Framework** | Next.js | 14.x (App Router) | Core React Framework | Industry standard, best-in-class performance features. |
| **Language** | TypeScript | 5.x | Development Language | Type safety prevents bugs in interactive logic. |
| **Styling** | Tailwind CSS | 3.4+ | Styling Engine | Utility-first approach allows rapid custom design implementation. |
| **Animation** | **Framer Motion** | Latest | Cinematic Animations | Critical for the "Brand Story" feel (scroll reveals, smooth transitions). |
| **State** | **Zustand** | Latest | State Management | Lightweight state for "Mood Playlist" and simple UI interactions. |
| **Icons** | Lucide React | Latest | Iconography | Clean, modern, consistent SVG icons. |
| **Video** | Native `<video>` / `next-video` | - | Background Video | Direct control over playback/poster for performance. |
| **Testing** | Vitest + React Testing Library | Latest | Unit/Integration Tests | Faster than Jest, integrates well with Vite-based workflows (if applicable) or Next.js. |

### Rationale & Trade-offs
*   **Framer Motion vs GSAP:** Framer Motion is more "React-native" and easier to maintain for component-level animations. GSAP is more powerful for complex timelines but overkill for this specific landing page scope.

## Project Structure

We will follow the **Next.js App Router** structure with a clear separation between generic UI components and feature-specific sections.

```plaintext
src/
├── app/                        # App Router Directories
│   ├── layout.tsx              # Root Layout (Fonts, Metadata, GLOBAL Providers)
│   ├── page.tsx                # Main Landing Page Composition
│   ├── globals.css             # Tailwind Directives & CSS Variables
│   └── error.tsx               # Global Error Boundary
├── components/
│   ├── ui/                     # Generic, reusable UI atoms (Button, Card, Modal) - shadcn-like
│   │   ├── button.tsx
│   │   └── section-container.tsx
│   ├── features/               # Experience-specific blocks (The actual "Story" parts)
│   │   ├── hero/               # Hero Video Section
│   │   ├── philosophy/         # "Soul of Nature" Section
│   │   ├── ingredients/        # "Earth to Soul" Slider
│   │   ├── collections/        # Product Showcases
│   │   └── mood-playlist/      # Audio Player Component
│   └── layout/                 # Global Layout areas
│       ├── header.tsx
│       └── footer.tsx
├── lib/
│   ├── utils.ts                # cn() helper for Tailwind merging
│   └── store.ts                # Zustand global store (MoodState, etc.)
├── constants/
│   └── content.ts              # Hardcoded strings/data for the story (Easy to edit later)
└── public/
    ├── images/                 # Optimized static images
    └── videos/                 # Background loops
```

## Component Standards

### Component Template
All components must use TypeScript interfaces and `cn()` for class merging.

```typescript
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  className?: string;
  // Feature specific props
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section className={cn('relative h-screen w-full overflow-hidden', className)}>
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
         {/* Video Element */}
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-4xl text-primary-gold md:text-6xl"
        >
          Primed'Or
        </motion.h1>
      </div>
    </section>
  );
}
```

### Naming Conventions
*   **Directories:** `kebab-case` (e.g., `components/mood-playlist`)
*   **Files:** `kebab-case` (e.g., `mood-player.tsx`)
*   **Components:** `PascalCase` (e.g., `MoodPlayer`)
*   **Interfaces:** `PascalCase` (e.g., `MoodPlayerProps`)

## State Management (Zustand)

### Store Structure
We will use a single store for the landing page since state needs are minimal.

**`src/lib/store.ts`**
```typescript
import { create } from 'zustand';

interface AppState {
  isMusicPlaying: boolean;
  toggleMusic: () => void;
  setMusicPlaying: (playing: boolean) => void;
  // Add active collection section tracking if needed for scroll spy
}

export const useAppStore = create<AppState>((set) => ({
  isMusicPlaying: false,
  toggleMusic: () => set((state) => ({ isMusicPlaying: !state.isMusicPlaying })),
  setMusicPlaying: (playing) => set({ isMusicPlaying: playing }),
}));
```

## Styling Guidelines

### Styling Approach
*   **Tailwind CSS:** Primary styling engine.
*   **Utility-First:** Use utility classes for layout, spacing, sizing.
*   **Arbitrary Values:** Avoid `w-[123px]`. Use theme values.

### Global Theme Variables (`globals.css`)
Define the brand colors as CSS variables to allow easy tweaking of the "Gold" and "Earth" tones.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Brand Palette - Earthy & Premium */
    --background: 20 14% 4%;      /* Deep Brown/Black #0E0B0A */
    --foreground: 40 20% 97%;     /* Off-White #F9F7F5 */
    
    --primary-gold: 42 45% 65%;   /* Muted Gold #C8B278 */
    --primary-gold-hover: 42 50% 55%;
    
    --accent-sage: 120 15% 35%;   /* Deep Green accent */
    
    --font-serif: var(--font-playfair); /* Google Font: Playfair Display */
    --font-sans: var(--font-inter);     /* Google Font: Inter */
  }
}
```

## Frontend Developer Standards

### Critical Coding Rules
1.  **NO `console.log`:** All logs must be removed before commit.
2.  **Strict Image Optimization:**
    *   ALWAYS use `next/image` for static assets.
    *   NEVER use generic `<img>` tags unless explicitly justified (e.g., external CDN issues).
    *   ALWAYS provide `alt` text.
3.  **Responsive First:** Build for Mobile (375px) first, then scale up to Desktop (1440px).
4.  **Semantic HTML:** Use `<section>`, `<article>`, `<header>`, `<footer>` appropriately.
5.  **Type Safety:** NO `any` types. Define interfaces for all props and data.
6.  **Performance:**
    *   Lazy load components that are not in the viewport.
    *   Use `dynamic()` imports for heavy non-critical interactions.
