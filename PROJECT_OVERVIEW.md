# Nature Guru Creations - VFX Portfolio Website

A premium, high-fidelity visual effects portfolio website built with Next.js 15, React, Three.js, GSAP, and Framer Motion.

## 🎬 Project Overview

**Nature Guru Creations** is an award-winning visual effects studio portfolio that showcases cutting-edge VFX work through an interactive, cinematic web experience. The site embodies the studio's philosophy of "Organic Tech" - merging Apple's minimalism with cinematic grandeur.

### Core Aesthetic
- **Cinema Light** (#F5F5F7) - Clean, professional base
- **Slate Grey** (#1D1D1F) - Primary text and structure
- **Tomato Red** (#FF6347) - Interactive elements and CTAs
- **Canopy Green** (#2E8B57) - Organic, nature-inspired accents
- **Atmosphere Blue** (#87CEEB) - Technical and atmospheric elements
- **Soul Yellow** (#FFD700) - Highlight and accent color

## 🛠️ Technology Stack

### Frontend
- **Next.js 15** with App Router and Turbopack
- **TypeScript** (strict mode)
- **React 19** with Server Components
- **Tailwind CSS** for styling

### 3D & Animation
- **Three.js** for 3D graphics
- **React Three Fiber** for React + Three.js integration
- **Framer Motion** for gesture, scroll, and layout animations
- **GSAP 3** with ScrollTrigger for scroll-based animations
- **Matter.js** for physics simulations

### Utilities
- **clsx** for conditional class names
- **tailwind-merge** for Tailwind utility merging

## 📁 Project Structure

```
nature-guru/
├── app/
│   ├── globals.css                 # Design system, animations, variables
│   ├── layout.tsx                  # Root layout with navbar/preloader
│   ├── page.tsx                    # Home page
│   ├── philosophy/page.tsx         # Philosophy page (The Glass Box)
│   ├── work/page.tsx               # Work/Showreel page (Cinema Grade)
│   ├── collaborations/page.tsx     # Collaborations page (Trust Wall)
│   ├── careers/page.tsx            # Careers page (The Academy)
│   └── contact/page.tsx            # Contact page
├── components/
│   ├── GlassPrismNavbar.tsx        # Scroll-triggered collapse navbar
│   ├── ParticlePreloader.tsx       # Canvas particle swarm animation
│   ├── HeroSection.tsx             # Full-viewport hero with Golden Ratio
│   ├── ProjectPortals.tsx          # 6 floating blob project cells
│   ├── BeforeAfterSlider.tsx       # Liquid divider slider
│   ├── NewsCards.tsx               # Frosted glass news grid
│   ├── Scene3D.tsx                 # React Three Fiber wrapper
│   ├── Object3D.tsx                # 3D geometric object with shadows
│   ├── Coral.tsx                   # Procedural coral growth (scroll-based)
│   ├── Scene3DIntegration.tsx      # Full 3D scene with controls
│   ├── LiquidText.tsx              # SVG liquid text effect
│   └── ScrollytellingSpine.tsx     # Scroll-triggered pipeline animation
├── hooks/
│   └── useScrollTrigger.ts         # GSAP ScrollTrigger custom hooks
├── data/
│   ├── projects.json               # Portfolio projects data
│   ├── news.json                   # News/blog articles
│   └── mentors.json                # Team mentors data
├── public/
│   └── [assets]
├── tailwind.config.ts              # Tailwind configuration with colors
└── [config files]
```

## 🚀 Pages Overview

### 1. **Home** (`/`)
The landing page introducing Nature Guru with:
- Particle Preloader (WebGL particle swarm)
- Glass Prism Navbar (scroll-triggered collapse)
- Full-viewport Hero Section (Golden Ratio composition)
- 6 Project Portal Cells (floating blobs with hover)
- Before/After Slider (liquid divider effect)
- News Grid (frosted glass cards)
- 3D Scene Integration (Three.js canvas with controls)
- Scrollytelling Spine (production pipeline)

### 2. **Philosophy** (`/philosophy`)
"The Glass Box" - Explores creative philosophy:
- Transparent philosophy statement (glass card)
- Scrollytelling Spine with pulse animation
- Featured blog grid (4 articles)
- CTA to start a project

### 3. **Work** (`/work`)
"Cinema Grade" - Portfolio showcase:
- Featured video player (4K UHD with ambient color sampling)
- Category filter (All, Film, Commercial, Interactive, Web)
- 3x2 macro-zoom portfolio grid
- Studio statistics (150+ projects, 45 awards, 500M+ viewers)
- CTA for project collaboration

### 4. **Collaborations** (`/collaborations`)
"Trust Wall" - Client partnerships:
- 12-logo client trust wall (6x2 grid)
- 4-item accordion testimonials with star ratings
- 4 featured case studies with results
- CTA for collaboration

### 5. **Careers** (`/careers`)
"The Academy" - Hiring & mentorship:
- 3-pillar culture cards (Excellence, Mentorship, Mastery)
- Bento grid job listings (6 positions, 1 featured 2x2)
- 3 mentor cards with specialties
- 4-stage career growth timeline
- CTA to explore opportunities

### 6. **Contact** (`/contact`)
Direct communication:
- Contact form (name, email, company, project type, message)
- Los Angeles office info
- Remote collaboration details
- Social media links

## 🎨 Key Components

### GlassPrismNavbar
- Scroll-triggered collapse animation
- Glassmorphism design with blur effect
- Responsive navigation links
- CTA button (Let's Talk)

### ParticlePreloader
- WebGL-based particle system
- Swarm behavior animation
- Loading screen integration

### HeroSection
- Golden Ratio composition
- Full-viewport height
- Motion-driven text animations

### ProjectPortals
- 6 floating blob shapes
- Hover expand animation
- Smooth opacity transitions

### ScrollytellingSpine
- Vertical timeline with pulse animation
- 5 production pipeline stages
- Scroll-triggered active states

### Scene3DIntegration
- Three.js Canvas wrapper
- OrbitControls for interaction
- Automatic rotation
- Shadow mapping enabled

## 🎯 Design System

### Colors
```typescript
const colors = {
  'cinema': '#F5F5F7',        // Cinema Light - Background
  'slate-grey': '#1D1D1F',    // Slate Grey - Text
  'tomato-red': '#FF6347',    // Tomato Red - Interactive
  'canopy-green': '#2E8B57',  // Canopy Green - Organic
  'atmosphere-blue': '#87CEEB', // Atmosphere Blue - Tech
  'soul-yellow': '#FFD700',    // Soul Yellow - Highlight
}
```

### Animations
- **Glass**: Glassmorphism cards with backdrop blur
- **Grain**: Subtle texture overlay (CSS filter)
- **Drift**: Organic floating movement
- **Blob**: SVG blob shape animations
- **Liquid**: SVG liquid fill effects

### Typography
- **Headings**: Bold, modern sans-serif
- **Body**: Clean, readable sans-serif
- **Liquid Text**: Custom SVG with motion effects

## 📊 Data Structure

### projects.json
```json
[
  {
    "id": "1",
    "title": "Project Title",
    "category": "Film / Commercial / Documentary",
    "description": "...",
    "year": 2025,
    "studio": "Partner Studio",
    "awards": ["Award 1", "Award 2"],
    "tags": ["tag1", "tag2"]
  }
]
```

### news.json
```json
[
  {
    "id": "1",
    "title": "Article Title",
    "category": "Award / Studio / Technology",
    "date": "Jan 15, 2026",
    "excerpt": "...",
    "author": "Author Name",
    "featured": true
  }
]
```

### mentors.json
```json
[
  {
    "id": "1",
    "name": "Mentor Name",
    "role": "Title",
    "bio": "...",
    "specialties": ["Specialty 1", "Specialty 2"],
    "image": "/path/to/image.jpg",
    "email": "mentor@natureguru.com"
  }
]
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm or yarn

### Installation

```bash
# Clone repository
git clone [repository-url]
cd nature-guru

# Install dependencies
npm install

# Start development server
npm run dev

# Navigate to http://localhost:3000
```

### Build for Production

```bash
# Create optimized build
npm run build

# Start production server
npm start
```

### Linting & Formatting

```bash
# Run ESLint
npm run lint

# Check TypeScript
npm run type-check
```

## 🎬 Animations & Effects

### Scroll Triggers
- Hero section reveal on page load
- Project portal hover expansion
- News card fade-in on scroll
- ScrollytellingSpine stage activation
- Coral growth based on scroll depth

### Gesture Interactions
- Button hover scale (1.05x)
- Link underline animation
- Card border color transition
- Modal expand/collapse

### 3D Integration
- Three.js scene with shadow casting
- Procedural coral generation
- OrbitControls for camera interaction
- Real-time rotation and animation

## 📈 Performance Optimizations

- **Lazy Loading**: Components load on scroll
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Route-based splitting
- **CSS-in-JS**: Tailwind purging unused styles
- **3D Optimization**: LOD (Level of Detail) for 3D assets
- **Caching**: Static page generation (SSG)

## 🔧 Configuration Files

### tailwind.config.ts
Custom colors and theme configuration with all studio colors.

### next.config.ts
Next.js 15 configuration with Turbopack build optimization.

### tsconfig.json
TypeScript strict mode with path aliases for imports.

## 📝 Development Notes

### Adding New Projects
1. Add entry to `data/projects.json`
2. Project automatically appears in Work page grid
3. Update portfolio items array in `app/work/page.tsx` if adding featured items

### Customizing Animations
- Global animations: `app/globals.css`
- Component-level: Framer Motion `animate` props
- Scroll-based: `useScrollTrigger` hook

### 3D Model Integration
Replace placeholder geometries in `components/Object3D.tsx`:
```tsx
// Current: icosahedronGeometry
// Production: useGLTF('/models/creature.glb')
```

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Three.js Docs](https://threejs.org/docs/)
- [GSAP Documentation](https://gsap.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## 📄 License

All rights reserved. Nature Guru Creations © 2026.

---

**Built with ❤️ for award-winning visual effects.**
