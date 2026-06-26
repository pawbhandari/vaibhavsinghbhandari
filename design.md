# Vaibhav Singh Bhandari - Portfolio Design System

## 1. Vision & Core Aesthetic

**Theme Name:** "Cinematic Creative Studio"
**Concept:** A highly immersive, dark-mode-first aesthetic that puts video content at the forefront. The design uses deep contrasts, neon accents, and glassmorphism (frosted glass) effects to simulate the environment of professional video editing suites and modern creative studios.

The design philosophy is built around three pillars:
1. **Video-First:** Static images are secondary. The layout prioritizes video embeds, auto-playing background reels, and interactive video thumbnails.
2. **Dynamic Depth:** Using shadows, blurred background glows, and gradient borders to create depth on a 2D screen.
3. **High-Energy Professionalism:** Moving away from the muted minimalism of a standard photography portfolio to a bold, engaging experience suitable for a motion graphics artist and video editor.

---

## 2. Color Palette

The site relies on a dark base with two primary neon accent colors to create a "cyberpunk/cinematic" feel.

### Backgrounds & Surfaces
- **App Background:** `hsl(240, 10%, 4%)` (Deepest charcoal/near-black)
- **Cards/Surfaces:** `hsl(240, 10%, 6%)` (Slightly elevated dark gray)
- **Secondary Surfaces (Hover):** `hsl(240, 4%, 16%)`
- **Glassmorphism:** Achieved via `bg-card/40 backdrop-blur-md` mixed with subtle white borders `border-white/10`.

### Brand Accents
- **Brand Purple (Primary Accent):** `hsl(262, 83%, 58%)` 
  - *Usage:* Primary CTAs, active states, glowing background orbs.
- **Brand Blue (Secondary Accent):** `hsl(210, 100%, 56%)` 
  - *Usage:* Secondary highlights, gradient pairings, typography accents.

### Gradients
- **Text Gradient:** `bg-gradient-to-r from-brand-purple to-brand-blue` (Used for headers, logos, and active states).
- **Background Glows:** Large, heavily blurred circles (e.g., `blur-[120px]`) behind key sections using the brand colors at low opacity (`/10` or `/20`).

---

## 3. Typography

The typography creates a balance between bold, cinematic titles and highly readable, clean body text.

- **Primary Font (Headings/Display):** `Montserrat`
  - *Weights:* Bold (700) for section titles, Medium (500) for subtitles.
  - *Letter Spacing:* `tracking-wide` or `tracking-widest` to give a premium, expansive feel.
- **Secondary Font (Body/UI):** `Inter` (System default sans-serif)
  - *Weights:* Light (300) to Regular (400) for readability.
- **Text Hierarchy:**
  - **Hero Text:** Huge (up to 9xl), bold, sometimes using gradient text.
  - **Section Headers:** 3xl to 5xl, bold, often paired with a colored gradient underline or accent bar.
  - **Body Text:** Muted foreground (`text-muted-foreground`), easily scannable.

---

## 4. Key UI Components & Metaphors

### Glassmorphism Cards
Used for Project Cards, Contact Forms, and Services grids.
- **Styling:** `bg-card/40 backdrop-blur-md border border-white/10 shadow-2xl`
- **Interaction:** Hovering triggers a slight upward translation (`-translate-y-2`) and a colored shadow/glow (`shadow-[0_10px_40px_-10px_rgba(139,92,246,0.3)]`).

### Buttons & CTAs
- **Primary Button (Hire Me / View Work):** Solid `brand-purple` background, rounded fully (`rounded-full`), with an outer colored shadow for a neon effect.
- **Secondary Button:** Transparent background, thin border, hover effect that fills the background with a low-opacity accent color.

### Icons
- **Library:** `lucide-react`
- **Usage:** Placed inside rounded squares or circles with a highly transparent background of their respective accent color (e.g., a purple Scissors icon inside a `bg-brand-purple/10` container).

---

## 5. Page Layouts & Structure

### Header & Navigation
- **Default State:** Transparent on the hero section to allow the video to shine.
- **Scrolled State:** Turns into a frosted glass bar (`bg-background/70 backdrop-blur-xl`) with a thin bottom border.
- **Active Links:** Indicated by an animated gradient underline that expands from the center or left.

### Homepage
- **Hero:** Full-screen Vimeo video background playing silently. Large, centered gradient typography. Two main CTA buttons.
- **Creative Arsenal:** A grid of 4 glass cards highlighting core skills (Short Form, Long Form, 3D Motion, Design), replacing the traditional wall of text.
- **Featured Edits:** A 2-column grid of recent projects.

### Portfolio Page
- **Filtering:** A row of animated pill buttons (using Framer Motion) allowing the user to filter between formats (Subtitle, Documentary, Podcast, etc.).
- **Masonry/Grid:** A responsive grid that scales based on screen size, with staggered entrance animations.

### Project Detail Pages
- **Hero Embed:** The top of the page features a massive, auto-playing video embed of the final edit, wrapped in a glowing border.
- **Metadata:** Below the video, a clean layout of tags (Date, Role, Tools Used).
- **Gallery:** If multiple videos exist for a campaign, they are laid out in a grid below the description.

### About Page ("The Creator")
- **Layout:** A 2-column split. The left side features a stylized, slightly desaturated portrait that gains full color on hover, surrounded by social link badges. The right side holds the biography.
- **Tools Grid:** A pill-based list of software (Premiere Pro, After Effects, etc.).

### Contact & Footer
- **Contact:** A glowing glassmorphic form. Beside it, a "What I can help you with" checklist to reinforce value right before the client reaches out.
- **Footer:** A massive, bold logo/name with a final "Let's work together" CTA, followed by standard navigation and copyright info.

---

## 6. Animation System (Framer Motion)
- **Scroll Reveals:** Elements fade in and slide up (`y: 20` to `y: 0`) as they enter the viewport.
- **Staggered Lists:** Grids load their children one by one with a `0.1s` or `0.2s` delay (e.g., project cards popping in sequentially).
- **Micro-interactions:** Buttons scale down slightly on click (`whileTap={{ scale: 0.95 }}`), and cards scale up on hover.
