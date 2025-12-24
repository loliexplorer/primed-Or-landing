# Project Planning: Primed'Or Brand Story Landing Page

## Executive Summary
Primed'Or is a premium Vietnamese brand specializing in natural gifts and home relaxation products (scented candles, essential oils). The new landing page will serve as a digital flagship store entrance, focusing purely on telling the "Brand Story" - highlighting the fusion of nature, tradition, and modern science. The primary goal is to build brand awareness and trust, guiding users to the main e-commerce site (primedor.com) for purchase after they have emotionally connected with the brand values.

## Problem Statement
Currently, `primedor.com` functions effectively as a sales catalog but lacks a dedicated narrative space to convey the brand's premium positioning and "Soul of Nature" philosophy. New visitors may not immediately grasp the depth of quality, the "Art of Gifting" concept, or the meticulous craftsmanship behind the products. This missed emotional connection can lead to lower conversion rates for high-ticket items and lower brand loyalty.

## Proposed Solution
Develop a high-aesthetics "Brand Story" Landing Page that serves as a prequel to the shopping experience.
*   **Visual Strategy:** Cinematic visuals, slow-motion video backgrounds (ingredients, pouring candles), and an elegant, minimalist layout using the brand's gold/earth tone palette.
*   **Content Strategy:** Focus on "The Journey of Scents" and "The Gift of Nature". Sections will introduce the philosophy, the ingredients, and the feeling of the products rather than just listing specs.
*   **User Flow:** Visitors land -> Absorb the Brand Story -> "Discover the Collection" (CTA) -> Redirect to main `primedor.com` catalog.
*   **Key Differentiator:** Emotional storytelling over transactional efficiency.

## Trade-off Analysis: Aesthetics vs. Performance (Elicitation Insight)
Creating a moody, cinematic "Brand Story" page often conflicts with web performance best practices. We must consciously manage this trade-off.

*   **The Conflict:** High-resolution full-screen videos and uncompressed images create the desired emotional impact but significantly slow down Largest Contentful Paint (LCP), potentially causing user drop-off on mobile devices.
*   **Strategic Decision:** We prioritize **Visual Integrity** but employ aggressive **Technical Optimization** to mitigate performance penalties. We accept a slightly heavier page weight in exchange for the premium brand feel, as our target users are likely on decent connections (office/wifi).
*   **Mitigation Strategy:**
    *   **Lazy Loading:** Only load media above the fold initially.
    *   **Modern Formats:** Use WebM for video and WebP/AVIF for static images.
    *   **Video Placeholders:** Show high-quality blurhashes/static images while heavy video assets load in the background.
    *   **Mobile Optimizations:** Serve completely different, lighter assets for mobile users (responsive art direction) rather than just resizing desktop assets.

## Technical Considerations
*   **Platform:** Responsive Web App (works on all modern browsers).
*   **Key Constraint:** Page Load Speed under 2.5s despite heavy assets.
*   **Technology Preferences:**
    *   **Frontend:** React (Next.js) or Vue (Nuxt) for server-side rendering (SEO) and optimized image handling.
    *   **Styling:** TailwindCSS for rapid, performance-oriented styling.
    *   **Hosting:** Vercel or Netlify (Global CDN is critical for image delivery).
*   **Integration:** None required for the landing page itself, simply links to `primedor.com`.

## Target Users
*   **Primary Segment: The "Soulful Gifter"**
    *   **Profile:** Women 25-45, office workers or business owners, appreciates aesthetics, mindfulness, and quality.
    *   **Needs:** Wants gifts that embrace sophistication and care (not just "stuff"). seeks reassurance of quality and origin.
    *   **Behavior:** research-heavy, influenced by brand visuals and "mood".

*   **Secondary Segment: Corporate/Event Buyers**
    *   **Profile:** HR, Event planners looking for bulk gifts.
    *   **Needs:** Trustworthiness, premium packaging, brand prestige to reflect well on their company.

## Goals & Success Metrics
*   **Business Objectives:**
    *   Connect emotionally with potential customers before they see the price tag.
    *   Establish Primed'Or as a "Top of Mind" brand for premium natural gifts.
    *   Increase the quality of traffic sent to the main sales site.
*   **Success Metrics (KPIs):**
    *   **Click-Through Rate (CTR):** > 15% of visitors clicking "Discover Collection" / "Shop Now".
    *   **Average Time on Page:** > 45 seconds (indicates they are reading/watching the story).
    *   **Bounce Rate:** < 60% (for a single-page storytelling site).

## MVP Scope
The MVP will be a **Single Page Application (SPA)** with scroll-triggered storytelling sections.

### Core Sections (Must Have)
1.  **Cinematic Hero Section:**
    *   Full-screen slow-motion video background (e.g., ingredients being picked or candle flame flickering).
    *   Minimal Headline: "Primed'Or - Tinh hoa Quà tặng Thiên nhiên".
    *   Primary CTA: "Khám phá Câu chuyện" (Scroll down).

2.  **The Philosophy ("Soul of Nature"):**
    *   Split layout: Image + Text.
    *   Story about the blend of Tradition (Bí quyết cổ truyền) & Modern Science.
    *   Emphasis on "Lành & Thật" (Natural & Authentic).

3.  **The Ingredients ("From Earth to Soul"):**
    *   Interactive slider or grid showing key ingredients (Goat Milk, Saffron, Essential Oils).
    *   Hover effects revealing benefits/origin.

4.  **The Collections (Visual Showcase):**
    *   **Home Relax:** Visual focus on Scented Candles & Diffusers in a living space context.
    *   **Daily Care:** Visual focus on Skincare textures (serum drops, cream).
    *   CTA for each: "Xem chi tiết" (Links to specific collection on primedor.com).

5.  **Trust & Social Proof:**
    *   Footer area with certification icons (Organic, Ecocert, etc. - if applicable).
    *   Quote/Testimonial from a KOL or "Happy Customer" representing the target persona.

6.  **"Mood Playlist" Integration (Creative Feature):**
    *   Simple "Play Mood" button associated with each Collection (Home Relax / Daily Care).
    *   Plays unobtrusive ambient audio (Nature sounds, soft piano) to enhance the immersive experience.
    *   Default State: OFF (User must initiate).

7.  **Footer & Conversion:**
    *   Simple footer with links to Social Media.
    *   Final CTA: "Bắt đầu hành trình của bạn" -> Link to `primedor.com`.

### Out of Scope (MVP)
*   Direct purchasing capability (Add to Cart).
*   User account login/registration (happens on main site).
*   Complex interactive games or quizzes.
