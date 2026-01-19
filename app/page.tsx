'use client'

import { HeroSection } from '@/components/HeroSection'
import { InteractiveSphere } from '@/components/InteractiveSphere'
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider'
import { NewsCards } from '@/components/NewsCards'
import { Scene3DIntegration } from '@/components/Scene3DIntegration'
import { Footer } from '@/components/Footer'
import { ShowReel } from '@/components/ShowReel'

// Sample data - move to `/data` later
const FEATURED_PROJECTS = [
  {
    id: '1',
    title: 'Nebula Odyssey',
    category: 'Sci-Fi Film',
    image: '/projects/nebula.jpg',
    description: 'A journey through space exploring distant galaxies and cosmic phenomena.',
  },
  {
    id: '2',
    title: 'The Last Guardian',
    category: 'Fantasy',
    image: '/projects/guardian.jpg',
    description: 'Epic creature animation and visual effects for a dark fantasy narrative.',
  },
  {
    id: '3',
    title: 'Urban Genesis',
    category: 'Commercial',
    image: '/projects/urban.jpg',
    description: 'Photorealistic city simulation and procedural environment generation.',
  },
  {
    id: '4',
    title: 'Quantum Realm',
    category: 'Science',
    image: '/projects/quantum.jpg',
    description: 'Visualization of subatomic particles and quantum mechanics phenomena.',
  },
  {
    id: '5',
    title: 'Nature\'s Fury',
    category: 'Documentary',
    image: '/projects/nature.jpg',
    description: 'Cinematic natural disaster sequences with hyper-realistic physics.',
  },
  {
    id: '6',
    title: 'Digital Dreams',
    category: 'Music Video',
    image: '/projects/dreams.jpg',
    description: 'Abstract motion graphics synchronized with electronica soundtrack.',
  },
]

const NEWS_ITEMS = [
  {
    id: '1',
    title: 'Nature Guru Wins Golden Globe for VFX Excellence',
    category: 'Award',
    date: 'Jan 15, 2026',
    excerpt: 'Our work on "Nebula Odyssey" receives international recognition for groundbreaking visual effects and cinematography.',
  },
  {
    id: '2',
    title: 'Expanding Our Studio: Meet the New Talent',
    category: 'Studio',
    date: 'Jan 10, 2026',
    excerpt: 'We\'re excited to welcome 25 new artists and technicians to the Nature Guru family this quarter.',
  },
  {
    id: '3',
    title: 'AI-Assisted Rendering: Our New Pipeline',
    category: 'Technology',
    date: 'Jan 5, 2026',
    excerpt: 'Introducing our proprietary ML-assisted rendering engine that reduces render times by 40%.',
  },
  {
    id: '4',
    title: 'Collaboration with Netflix on Limited Series',
    category: 'Partnership',
    date: 'Dec 28, 2025',
    excerpt: 'Partnering with Netflix to deliver visual effects for an upcoming limited series set to premiere in Q2 2026.',
  },
  {
    id: '5',
    title: 'Behind the Scenes: The Making of Quantum Realm',
    category: 'Behind the Scenes',
    date: 'Dec 20, 2025',
    excerpt: 'A deep dive into our 18-month production journey creating realistic subatomic particle visualizations.',
  },
  {
    id: '6',
    title: 'Nature Guru Academy: Now Open for Enrollment',
    category: 'Training',
    date: 'Dec 15, 2025',
    excerpt: 'Our new mentorship program is accepting applications for the upcoming cohort of emerging VFX artists.',
  },
]

export default function Home() {
  return (
    <>
      <ShowReel />
      <InteractiveSphere />
      <HeroSection />
      <BeforeAfterSlider />
      <NewsCards news={NEWS_ITEMS} />
      <Scene3DIntegration />

      {/* Spacer for demonstration */}
      <section className="w-full h-96 flex items-center justify-center bg-gradient-to-b from-cinema to-atmosphere-blue/10">
        <div className="text-center">
        </div>
      </section>

      <Footer />
    </>
  )
}
