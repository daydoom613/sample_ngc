'use client'

import { motion } from 'framer-motion'

/**
 * Hero Section (Step 2, Hero Section #2)
 * Full-viewport video background with centered typography using Golden Ratio
 */
export function HeroSection() {
  const goldenRatio = 1.618

  return (
    <section className="relative w-full overflow-hidden pt-20" style={{ minHeight: '100vh' }}>
      {/* Video Background Placeholder */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(245, 245, 247, 0.2), #F5F5F7)' }}>
        {/* Placeholder: High-key bright VFX landscape reel - mountain clouds */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div style={{ color: 'rgba(29, 29, 31, 0.3)' }} className="text-lg">
            [Video Placeholder: VFX Landscape Reel]
          </div>
        </div>
      </div>

      {/* Hero Content - Centered using Golden Ratio */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center z-10"
        style={{
          top: `${100 / goldenRatio}%`,
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Main Typography */}
        <motion.div
          className="text-center max-w-4xl px-6"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4 leading-tight" style={{ color: '#1D1D1F' }}>
            Scientists of
          </h1>
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6"
            style={{
              backgroundImage: 'linear-gradient(to right, #FFD700, #2E8B57, #87CEEB)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
            animate={{ backgroundPosition: '200% 0' }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            Emotion
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl font-light mt-8"
            style={{ color: 'rgba(29, 29, 31, 0.7)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Creating worlds where imagination meets technical mastery
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg
            className="w-6 h-10"
            style={{ color: 'rgba(29, 29, 31, 0.5)' }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
