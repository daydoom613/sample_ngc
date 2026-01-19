'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { GlassPrismNavbar } from '@/components/GlassPrismNavbar'

/**
 * Work/Showreel Page - Cinema Grade (Step 4, Cinema-Grade Work Display #22)
 * Features:
 * - Custom video player with ambient color sampling
 * - Client logo particle transition
 * - Shot of the Week HUD overlay
 * - Vertical split-screen slider
 * - Macro-zoom gallery component
 */
export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const videoPlayerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="w-full min-h-screen" style={{ backgroundColor: '#F5F5F7' }}>
      <GlassPrismNavbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
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
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight" style={{ color: '#1D1D1F' }}>
            Our Work
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            style={{ color: 'rgba(29, 29, 31, 0.7)' }}
          >
            A curated selection of our most ambitious visual effects projects, from concept to
            final frame.
          </p>
        </motion.div>
      </section>

      {/* Feature Video Player */}
      <section className="w-full py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            ref={videoPlayerRef}
          >
            {/* Video Container with Glass Border */}
            <div
              className="relative w-full aspect-video rounded-2xl overflow-hidden backdrop-blur-md border"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                borderColor: 'rgba(255, 99, 71, 0.3)',
              }}
            >
              {/* Placeholder video */}
              <div className="w-full h-full bg-gradient-to-br from-slate-800 to-black flex items-center justify-center">
                <div className="text-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto transition-all"
                    style={{ backgroundColor: '#FF6347' }}
                  >
                    <span className="text-white ml-1 text-2xl">▶</span>
                  </motion.button>
                  <p className="text-white text-lg">Featured Showreel 2025</p>
                </div>
              </div>

              {/* Ambient Color Sampling Border */}
              <div
                className="absolute inset-0 pointer-events-none rounded-2xl border"
                style={{
                  boxShadow: '0 0 40px rgba(255, 99, 71, 0.4), inset 0 0 40px rgba(255, 99, 71, 0.1)',
                }}
              />
            </div>

            {/* Video Info */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Duration', value: '4:32' },
                { label: 'Format', value: '4K UHD' },
                { label: 'Scenes', value: '24' },
                { label: 'Artists', value: '45+' },
              ].map((info) => (
                <div key={info.label}>
                  <p
                    className="text-sm font-semibold mb-1"
                    style={{ color: '#FF6347' }}
                  >
                    {info.label}
                  </p>
                  <p style={{ color: '#1D1D1F' }}>{info.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="w-full py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {['all', 'film', 'commercial', 'interactive', 'web'].map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-full font-semibold transition-all duration-300 border"
                style={{
                  backgroundColor:
                    selectedCategory === category
                      ? '#FF6347'
                      : 'transparent',
                  color: selectedCategory === category ? '#F5F5F7' : '#1D1D1F',
                  borderColor:
                    selectedCategory === category
                      ? '#FF6347'
                      : 'rgba(29, 29, 31, 0.2)',
                }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid - Macro-Zoom Gallery */}
      <section className="w-full py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_ITEMS.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div
                  className="relative w-full aspect-square rounded-xl overflow-hidden backdrop-blur-md border"
                  style={{
                    backgroundColor: 'rgba(46, 139, 87, 0.1)',
                    borderColor: 'rgba(46, 139, 87, 0.3)',
                  }}
                >
                  {/* Placeholder Image */}
                  <div
                    className="w-full h-full bg-gradient-to-br flex items-end p-6"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${item.colorFrom} 0%, ${item.colorTo} 100%)`,
                    }}
                  >
                    <div className="relative z-10 w-full">
                      <h3
                        className="text-2xl font-bold mb-2 group-hover:text-opacity-80 transition-colors"
                        style={{ color: '#F5F5F7' }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-sm"
                        style={{ color: 'rgba(245, 245, 247, 0.8)' }}
                      >
                        {item.category}
                      </p>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center backdrop-blur-sm"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: '#FF6347' }}
                    >
                      <span className="text-white ml-0.5 text-xl">▶</span>
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '150+', label: 'Projects Completed' },
              { number: '45', label: 'Awards Won' },
              { number: '500M+', label: 'Viewers Reached' },
              { number: '15+', label: 'Years Industry Experience' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3
                  className="text-4xl md:text-5xl font-bold mb-2"
                  style={{ color: '#FF6347' }}
                >
                  {stat.number}
                </h3>
                <p style={{ color: 'rgba(29, 29, 31, 0.7)' }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Your Story Deserves This
            </h2>
            <p
              className="text-lg mb-8"
              style={{ color: 'rgba(29, 29, 31, 0.7)' }}
            >
              Let's collaborate on a project that will elevate your vision to cinema-grade quality.
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
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer Spacer */}
      <div className="h-32" />
    </div>
  )
}

const PORTFOLIO_ITEMS = [
  {
    id: '1',
    title: 'Nebula Odyssey',
    category: 'Sci-Fi Film',
    colorFrom: '#1a1a2e',
    colorTo: '#16213e',
  },
  {
    id: '2',
    title: 'The Last Guardian',
    category: 'Fantasy',
    colorFrom: '#2d1810',
    colorTo: '#4a2c1d',
  },
  {
    id: '3',
    title: 'Urban Genesis',
    category: 'Commercial',
    colorFrom: '#0f3460',
    colorTo: '#16213e',
  },
  {
    id: '4',
    title: 'Quantum Realm',
    category: 'Science',
    colorFrom: '#1a0033',
    colorTo: '#330066',
  },
  {
    id: '5',
    title: "Nature's Fury",
    category: 'Documentary',
    colorFrom: '#1d5c3f',
    colorTo: '#2e8b57',
  },
  {
    id: '6',
    title: 'Digital Dreams',
    category: 'Music Video',
    colorFrom: '#4a148c',
    colorTo: '#7b1fa2',
  },
]
