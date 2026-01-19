'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { GlassPrismNavbar } from '@/components/GlassPrismNavbar'
import { ScrollytellingSpine } from '@/components/ScrollytellingSpine'

/**
 * Philosophy Page - The Glass Box (Step 3, Scrollytelling Spine #21)
 * Explores Nature Guru's creative philosophy through interactive scrollytelling
 * Features:
 * - Scroll-driven creature assembly animation
 * - Magazine-style blog grid
 * - Universal 3D skeleton wireframe background
 * - Green screen keyed reveal sections
 */
export default function PhilosophyPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = docHeight > 0 ? scrollTop / docHeight : 0
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      ref={scrollContainerRef}
      className="w-full min-h-screen"
      style={{ backgroundColor: '#F5F5F7' }}
    >
      <GlassPrismNavbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
        {/* Background grain overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" /%3E%3C/filter%3E%3Crect width="400" height="400" filter="url(%23noiseFilter)" /%3E%3C/svg%3E")',
            backgroundSize: '200px 200px',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl text-center"
        >
          <h1
            className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ color: '#1D1D1F' }}
          >
            The Glass Box
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            style={{ color: 'rgba(29, 29, 31, 0.7)' }}
          >
            Our philosophy is transparent. We believe in creating visually stunning experiences that
            respect the viewer's intelligence and emotional depth.
          </p>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-12 text-sm"
            style={{ color: '#FF6347' }}
          >
            Scroll to explore
          </motion.div>
        </motion.div>
      </section>

      {/* Philosophy Statement with Glass Card */}
      <section className="w-full py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div
            className="p-8 md:p-12 rounded-2xl backdrop-blur-md border"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              borderColor: 'rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)',
            }}
          >
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#1D1D1F' }}>
              Our Core Philosophy
            </h2>
            <div className="space-y-6">
              <p
                className="text-lg leading-relaxed"
                style={{ color: 'rgba(29, 29, 31, 0.8)' }}
              >
                At Nature Guru Creations, we don't just create visual effects—we sculpt
                experiences. Every pixel, every frame, every moment is crafted with intention.
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{ color: 'rgba(29, 29, 31, 0.8)' }}
              >
                We believe that great VFX should feel organic, as if nature itself conspired to
                create the impossible. Our work bridges the gap between technical mastery and
                emotional storytelling.
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{ color: 'rgba(29, 29, 31, 0.8)' }}
              >
                Transparency is our foundation. We show our work, share our process, and mentor
                the next generation of creators who will shape tomorrow's visual culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scrollytelling Spine - Production Pipeline */}
      <ScrollytellingSpine />

      {/* Featured Blog Grid */}
      <section className="w-full py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12"
            style={{ color: '#1D1D1F' }}
          >
            From Our Library
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                {/* Blog Card */}
                <div
                  className="p-6 rounded-xl backdrop-blur-md border transition-all duration-300 group-hover:border-opacity-100"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    borderColor: 'rgba(255, 99, 71, 0.3)',
                  }}
                >
                  {/* Tag */}
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                    style={{
                      backgroundColor: 'rgba(46, 139, 87, 0.2)',
                      color: '#2E8B57',
                    }}
                  >
                    {post.tag}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-2xl font-bold mb-3 group-hover:text-opacity-80 transition-colors"
                    style={{ color: '#1D1D1F' }}
                  >
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="mb-4 leading-relaxed"
                    style={{ color: 'rgba(29, 29, 31, 0.7)' }}
                  >
                    {post.description}
                  </p>

                  {/* Meta */}
                  <div
                    className="flex items-center justify-between pt-4 border-t"
                    style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
                  >
                    <span
                      className="text-sm"
                      style={{ color: 'rgba(29, 29, 31, 0.6)' }}
                    >
                      {post.date}
                    </span>
                    <span
                      className="text-sm font-semibold transition-colors group-hover:text-opacity-70"
                      style={{ color: '#FF6347' }}
                    >
                      Read →
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: '#1D1D1F' }}
            >
              Ready to Create Together?
            </h2>
            <p
              className="text-lg mb-8"
              style={{ color: 'rgba(29, 29, 31, 0.7)' }}
            >
              Join us on a journey where art meets technology, and imagination becomes reality.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              style={{
                backgroundColor: '#FF6347',
                color: '#F5F5F7',
              }}
            >
              Start a Project
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer Spacer */}
      <div className="h-32" />
    </div>
  )
}

const BLOG_POSTS = [
  {
    id: '1',
    title: 'The Art of Invisible Effects',
    tag: 'Creative',
    description:
      'Exploring how the best visual effects are those the audience never notices. A deep dive into the craft of seamless integration.',
    date: 'Jan 12, 2026',
  },
  {
    id: '2',
    title: 'Procedural Generation in Nature',
    tag: 'Technical',
    description:
      'How we use procedural algorithms to create natural-looking environments that feel alive and organic, not synthetic.',
    date: 'Jan 8, 2026',
  },
  {
    id: '3',
    title: 'The Evolution of Real-Time Rendering',
    tag: 'Technology',
    description:
      'From offline rendering to real-time ray tracing, we explore how GPU innovation is changing what\'s possible in VFX.',
    date: 'Jan 5, 2026',
  },
  {
    id: '4',
    title: 'Mentoring the Next Generation',
    tag: 'Culture',
    description:
      'Why we believe in passing on knowledge. Our approach to fostering emerging talent in the visual effects industry.',
    date: 'Dec 28, 2025',
  },
]
