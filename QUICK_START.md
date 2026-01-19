# Nature Guru Creations - Quick Start Guide

## 🚀 Getting Started

### Project Location
```
C:\Users\qwew6\Desktop\aa\nature-guru
```

### Start Development Server
```bash
cd C:\Users\qwew6\Desktop\aa\nature-guru
npm run dev
```

**Website will be available at**: `http://localhost:3000`

---

## 📁 Key Files & Components

### Pages
- `app/page.tsx` - Home page with hero, projects, before/after slider, news

### Components
```
components/
├── GlassPrismNavbar.tsx     → Collapsible navbar with scroll detection
├── ParticlePreloader.tsx    → WebGL particle animation preloader
├── HeroSection.tsx          → Full-viewport hero with typography
├── ProjectPortals.tsx       → Floating blob project cells
├── BeforeAfterSlider.tsx    → Interactive liquid divider slider
├── NewsCards.tsx            → Frosted glass news card grid
└── Scene3D.tsx              → React Three Fiber 3D wrapper
```

### Styling
- `app/globals.css` - All animations, design system classes, CSS variables
- `tailwind.config.ts` - Custom colors and theme configuration

---

## 🎨 Using Color Variables

All components use CSS custom properties. To reference a color:

```tsx
// Option 1: Inline style
style={{ backgroundColor: '#FF6347' }}  // Tomato Red
style={{ color: '#1D1D1F' }}            // Slate Grey

// Option 2: CSS Variable (from globals.css)
style={{ backgroundColor: 'var(--tomato-red)' }}
```

**Available Variables:**
```css
--cinema: #F5F5F7         /* Background */
--slate-grey: #1D1D1F     /* Text */
--tomato-red: #FF6347     /* Accent */
--canopy-green: #2E8B57   /* Nature */
--atmosphere-blue: #87CEEB/* Sky */
--soul-yellow: #FFD700    /* Gold */
```

---

## 🎬 Adding Content

### Add a New Project
Edit `app/page.tsx` in the `FEATURED_PROJECTS` array:

```typescript
{
  id: '7',
  title: 'Your Project Title',
  category: 'Category Name',
  image: '/projects/your-image.jpg',
  description: 'Brief project description...',
}
```

### Add News Item
Edit `app/page.tsx` in the `NEWS_ITEMS` array:

```typescript
{
  id: '7',
  title: 'News Title',
  category: 'News Category',
  date: 'Jan 20, 2026',
  excerpt: 'News summary text...',
}
```

---

## 📦 Build & Deploy

### Production Build
```bash
npm run build
npm run start
```

### Deployment (Vercel)
```bash
npm install -g vercel
vercel
```

---

## ⚙️ Configuration Files

- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript settings (strict mode enabled)
- `tailwind.config.ts` - Tailwind CSS customization
- `postcss.config.mjs` - PostCSS plugins
- `eslint.config.mjs` - ESLint rules
- `package.json` - Dependencies & scripts

---

## 🔗 Useful Imports

```typescript
// Animations
import { motion } from 'framer-motion'
import gsap from 'gsap'

// 3D
import { Canvas } from '@react-three/fiber'
import { useGLTF, PerspectiveCamera, OrbitControls } from '@react-three/drei'

// Our components
import { GlassPrismNavbar } from '@/components/GlassPrismNavbar'
import { HeroSection } from '@/components/HeroSection'
// ... etc
```

---

## 🛠️ Common Tasks

### Add a New Page
Create file: `app/philosophy/page.tsx`

```typescript
'use client'

export default function Philosophy() {
  return (
    <main>
      {/* Your content */}
    </main>
  )
}
```

### Add a New Component
Create file: `components/MyComponent.tsx`

```typescript
'use client'

import { motion } from 'framer-motion'

export function MyComponent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Content */}
    </motion.div>
  )
}
```

### Add 3D Model
1. Place `.glb` or `.gltf` file in `public/models/`
2. Use in component:

```typescript
import { useGLTF } from '@react-three/drei'

const { scene } = useGLTF('/models/my-model.glb')
```

---

## 📊 Asset Guidelines

### Images
- Use Next.js `<Image>` component for optimization
- Place in `public/` directory
- Recommended formats: WebP, PNG, JPG

### Videos
- Optimize video files (H.264 codec)
- Consider hosting on Vimeo or AWS S3
- Reference via URL in components

### 3D Models
- Format: `.glb` (binary GLTF) - most optimized
- Max file size: 5MB (consider compression)
- Place in `public/models/`

---

## 📚 Documentation Links

- **Next.js**: https://nextjs.org/docs
- **React Three Fiber**: https://docs.pmnd.rs/react-three-fiber/
- **Framer Motion**: https://www.framer.com/motion/
- **GSAP**: https://gsap.com/docs/v3/
- **Tailwind CSS**: https://tailwindcss.com/docs

---

## 🐛 Troubleshooting

### Dev server won't start
```bash
# Clear cache and reinstall
rm -r .next node_modules
npm install
npm run dev
```

### Build errors
```bash
# Clear cache
rm -r .next
npm run build
```

### TypeScript errors
```bash
# Check for type issues
npm run lint
```

---

## 🎯 Next Steps

1. **Add more pages** (Philosophy, Work, Collaborations, Careers)
2. **Implement GSAP ScrollTrigger** for scrollytelling
3. **Add 3D models** via React Three Fiber
4. **Create data structure** for projects/news (move to `/data` folder)
5. **Optimize images & videos** for production
6. **Deploy to Vercel** for live preview

---

## 📞 Quick Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint --fix   # Auto-fix issues

# Other
npm install          # Install dependencies
npm update           # Update packages
```

---

**Status**: ✅ Ready for development  
**Last Updated**: January 17, 2026  
**Next Milestone**: Phase 2 - Advanced Home Elements
