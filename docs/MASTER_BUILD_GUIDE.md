# IFC Institutional Website - Master Build Guide

## Complete Step-by-Step AI Prompt for Rebuilding This Website

This document provides comprehensive instructions for an AI model to reliably recreate this exact institutional website from scratch.

---

## 1. PROJECT OVERVIEW

### Technology Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion
- **Routing**: React Router DOM v6
- **UI Components**: shadcn/ui (Radix primitives)
- **Icons**: Lucide React

### Project Purpose
A professional institutional website for the International Finance Corporation (IFC), featuring:
- Corporate, government-facing aesthetic
- Multi-page structure with smooth navigation
- Premium animations and parallax effects
- Responsive design for all devices

---

## 2. DESIGN SYSTEM

### Color Palette (HSL Values)

```css
/* Primary Navy Palette */
--primary: 213 58% 17%;           /* #0F2A47 - Deep Navy */
--primary-foreground: 0 0% 100%;  /* White */

/* Background & Surfaces */
--background: 0 0% 100%;          /* Pure White */
--foreground: 213 40% 15%;        /* Dark Navy Text */
--card: 210 20% 98%;              /* Light Gray Card */
--card-foreground: 213 40% 15%;   /* Dark Navy */
--secondary: 210 14% 95%;         /* Light Slate */
--secondary-foreground: 213 40% 20%;

/* Muted */
--muted: 210 14% 96%;
--muted-foreground: 215 16% 47%;  /* Medium Gray */

/* Accent - Gold */
--accent: 43 74% 49%;             /* #D4A84B - Gold */
--accent-foreground: 213 58% 12%; /* Dark Navy */

/* Borders */
--border: 214 20% 88%;
--input: 214 20% 88%;
--ring: 213 58% 17%;

/* Custom Tokens */
--navy-deep: 213 58% 12%;         /* #0A1929 */
--navy-medium: 213 50% 25%;       /* #1E3A5F */
--navy-light: 213 40% 35%;        /* #3D5A80 */
--gold: 43 74% 49%;               /* #D4A84B */
--gold-light: 43 74% 60%;         /* #E0BC6D */
--slate-warm: 210 14% 97%;        /* #F7F8F9 */
```

### Gradients

```css
--gradient-navy: linear-gradient(135deg, hsl(213 58% 12%) 0%, hsl(213 50% 22%) 100%);
--gradient-hero: linear-gradient(180deg, hsl(213 58% 12% / 0.95) 0%, hsl(213 50% 18% / 0.98) 100%);
--gradient-gold: linear-gradient(135deg, hsl(43 74% 49%) 0%, hsl(43 74% 55%) 100%);
```

### Shadows

```css
--shadow-sm: 0 1px 2px 0 hsl(213 58% 12% / 0.05);
--shadow-md: 0 4px 6px -1px hsl(213 58% 12% / 0.08), 0 2px 4px -2px hsl(213 58% 12% / 0.05);
--shadow-lg: 0 10px 15px -3px hsl(213 58% 12% / 0.1), 0 4px 6px -4px hsl(213 58% 12% / 0.05);
--shadow-card: 0 4px 20px -2px hsl(213 58% 12% / 0.08);
```

---

## 3. TYPOGRAPHY

### Font Families

```css
/* Primary Sans-Serif - Body Text */
font-family: 'Inter', system-ui, sans-serif;

/* Serif - Headings */
font-family: 'Playfair Display', Georgia, serif;
```

### Google Fonts Import

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
```

### Typography Scale

| Element | Font | Size | Weight | Color |
|---------|------|------|--------|-------|
| H1 (Hero) | Playfair Display | 4xl-7xl responsive | Bold (700) | white |
| H2 (Section) | Playfair Display | 3xl-4xl | Semibold (600) | --primary |
| H3 (Card) | Sans-serif | xl (1.25rem) | Semibold (600) | --foreground |
| Body Large | Inter | lg (1.125rem) | Regular (400) | --muted-foreground |
| Body | Inter | base (1rem) | Regular (400) | --muted-foreground |
| Small/Label | Inter | sm (0.875rem) | Medium (500) | --muted-foreground |
| Eyebrow | Inter | sm | Medium (500) | --accent |

---

## 4. SPACING & LAYOUT

### Container

```css
.container-section {
  max-width: 80rem; /* 1280px */
  margin: 0 auto;
  padding: 4rem 1rem;  /* py-16 px-4 */
}

@media (min-width: 640px) { padding: 4rem 1.5rem; }
@media (min-width: 1024px) { padding: 6rem 2rem; } /* py-24 */
```

### Grid System
- Mobile: 1 column
- Tablet (md): 2 columns
- Desktop (lg): 4 columns for cards, 2 columns for content sections

### Spacing Scale (Tailwind)
- Section padding: py-16 md:py-24
- Card padding: p-6 md:p-8
- Component gaps: gap-4, gap-6, gap-8
- Text spacing: mb-4, mb-6, mb-8

---

## 5. COMPONENT SPECIFICATIONS

### Header
- **Height**: h-20 (80px)
- **Position**: Fixed top, z-50
- **Background**: bg-background/95 with backdrop-blur-md
- **Logo**: 48x48 circle with IFC text
- **Nav Items**: text-sm font-medium, hover:text-primary

### Hero Section
- **Min Height**: min-h-[90vh]
- **Background**: Full-width image with gradient overlay
- **Gradient**: from-primary/80 via-primary/70 to-primary/90
- **Parallax**: Image moves at 30% scroll speed

### Cards
- **Background**: bg-background
- **Border Radius**: rounded-xl (12px)
- **Shadow**: shadow-card
- **Hover**: shadow-lg, -translate-y-1 or -translate-y-2
- **Transition**: duration-300

### Buttons

```tsx
// Variants
hero: "bg-accent text-accent-foreground hover:bg-accent/90"
heroOutline: "border-2 border-white/50 text-white bg-transparent hover:bg-white/10"
gold: "bg-accent text-accent-foreground hover:bg-accent/90"
navy: "bg-primary text-primary-foreground hover:bg-primary/90"

// Sizes
default: "h-10 px-4 py-2"
lg: "h-12 px-8 text-base"
xl: "h-14 px-10 text-lg"
```

### Footer
- **Background**: bg-primary
- **Text**: text-white, text-white/60 for secondary
- **Layout**: 4-column grid on desktop

---

## 6. ANIMATION SPECIFICATIONS

### Framer Motion Animations

```tsx
// Fade In Up (most common)
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: "easeOut" },
};

// Stagger Container
const staggerContainer = {
  initial: {},
  whileInView: {
    transition: { staggerChildren: 0.15 },
  },
  viewport: { once: true },
};

// Hero Parallax
const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
```

### CSS Animations

```css
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
}

.animation-delay-100 { animation-delay: 100ms; }
.animation-delay-200 { animation-delay: 200ms; }
.animation-delay-300 { animation-delay: 300ms; }
```

---

## 7. PAGE STRUCTURE

### Pages (6 total)
1. **Home** (`/`) - Hero, Stats, About preview, Services, Why Partner, CTA
2. **About** (`/about`) - Story, Mission, Values, Milestones
3. **Services** (`/services`) - Investment services, Advisory, Sector expertise
4. **News** (`/news`) - Featured article, Article grid, Newsletter signup
5. **Eligibility** (`/eligibility`) - Criteria, Process steps, Disclaimers
6. **Contact** (`/contact`) - Contact info, Form, Map placeholder

### Route Configuration

```tsx
<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/about" element={<About />} />
  <Route path="/services" element={<Services />} />
  <Route path="/news" element={<News />} />
  <Route path="/eligibility" element={<Eligibility />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

---

## 8. CONTENT BLOCKS

### Hero Section Pattern

```tsx
<section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
  {/* Parallax Background */}
  <motion.div style={{ y: heroImageY, scale: heroScale }}>
    <img src={heroImage} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />
  </motion.div>
  
  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
    <p className="text-accent uppercase tracking-wider mb-4">Eyebrow</p>
    <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
      Main Heading
    </h1>
    <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
      Subheading text
    </p>
    <div className="flex gap-4 justify-center">
      <Button variant="hero">Primary CTA</Button>
      <Button variant="heroOutline">Secondary CTA</Button>
    </div>
  </div>
</section>
```

### Section Header Pattern

```tsx
<div className="text-center mb-16">
  <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">
    Section Label
  </p>
  <h2 className="section-header inline-block border-0 pb-0">
    Section Title
  </h2>
  <p className="section-subheader mx-auto mt-4">
    Section description text explaining the purpose.
  </p>
</div>
```

### Card Pattern

```tsx
<motion.div
  className="bg-background p-8 rounded-xl shadow-card"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ y: -8 }}
  transition={{ duration: 0.5 }}
>
  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
    <Icon className="w-7 h-7 text-primary" />
  </div>
  <h3 className="text-xl font-semibold text-foreground mb-3">Card Title</h3>
  <p className="text-muted-foreground">Card description text.</p>
</motion.div>
```

---

## 9. IMAGE SPECIFICATIONS

### Hero Images
- **Aspect**: 16:9 or wider
- **Size**: 1920x1080 minimum
- **Style**: Professional, global development themed
- **Overlay**: Navy gradient at 70-90% opacity

### Content Images
- **Aspect**: 4:3 or 3:2
- **Style**: Clean, professional, development focused
- **Border Radius**: rounded-xl (12px)
- **Shadow**: shadow-lg

### AI Image Prompts

```
Hero Image: "Ultra high resolution 16:9 aspect ratio corporate institutional photography, 
global finance network visualization, world map with connection points, deep navy blue and 
gold color scheme, professional corporate atmosphere, subtle lens flare effects, 
premium quality, photorealistic"

About Image: "Ultra high resolution professional corporate photography, sustainable 
development and global finance theme, modern office building with global map, 
warm lighting, corporate institutional style"
```

---

## 10. SEO CONFIGURATION

### Meta Tags

```html
<title>International Finance Corporation | Global Development Finance</title>
<meta name="description" content="IFC is the largest global development institution focused on the private sector in emerging and developing markets. Member of the World Bank Group.">
<meta name="keywords" content="IFC, International Finance Corporation, World Bank Group, development finance, emerging markets, private sector development">
<meta property="og:title" content="International Finance Corporation">
<meta property="og:description" content="Driving Private Sector Growth in Emerging and Developing Markets">
<meta property="og:type" content="website">
```

---

## 11. FILE STRUCTURE

```
src/
├── assets/
│   ├── hero-global.jpg
│   └── about-development.jpg
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   └── ui/
│       ├── button.tsx (with hero, gold, navy variants)
│       └── [other shadcn components]
├── pages/
│   ├── Index.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── News.tsx
│   ├── Eligibility.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
├── App.tsx
├── index.css (design tokens)
└── main.tsx
```

---

## 12. BUILD INSTRUCTIONS

### Step 1: Initialize Project
```bash
npm create vite@latest ifc-website -- --template react-ts
cd ifc-website
npm install
```

### Step 2: Install Dependencies
```bash
# Core dependencies
npm install react-router-dom@6 framer-motion lucide-react

# Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# shadcn/ui setup
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card
```

### Step 3: Configure Design Tokens
- Copy the CSS variables to `src/index.css`
- Update `tailwind.config.ts` with custom colors and fonts

### Step 4: Build Components
1. Create Layout components (Header, Footer, Layout)
2. Add button variants to button.tsx
3. Create pages in order: Index → About → Services → News → Eligibility → Contact

### Step 5: Add Animations
- Import framer-motion in pages
- Add parallax to hero sections
- Add scroll-triggered animations to content sections

### Step 6: Generate/Add Images
- Create hero and content images with specified prompts
- Place in src/assets/
- Import using ES6 imports

---

## 13. QUALITY CHECKLIST

- [ ] All colors use HSL design tokens, no hardcoded values
- [ ] Typography follows the defined scale
- [ ] All pages have proper SEO meta tags
- [ ] Animations are smooth and performant
- [ ] Responsive design works on all breakpoints
- [ ] Navigation links work correctly
- [ ] Hero parallax effect functions properly
- [ ] Cards have proper hover states
- [ ] Footer contains all required links
- [ ] Images are optimized and properly sized

---

## 14. CONTENT TONE GUIDELINES

- **Voice**: Professional, authoritative, trustworthy
- **Tone**: Corporate but approachable, informative
- **Avoid**: Promises of outcomes, casual language, jargon
- **Include**: Data points, institutional credibility, global scope

---

This guide provides everything needed to recreate the exact IFC institutional website with consistent design, animations, and functionality.
