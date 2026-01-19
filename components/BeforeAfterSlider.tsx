'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

/**
 * Before/After Liquid Slider (Step 2, Before/After Liquid Slider #6)
 * Interactive section with horizontal slider and liquid-physics divider line
 */
export function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const newPosition = ((e.clientX - rect.left) / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, newPosition)))
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mouseup', handleMouseUp)
      return () => document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging])

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-cinema">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-grey mb-4">
            VFX Breakdown
          </h2>
          <p className="text-lg text-slate-grey/60">
            Drag to explore before and after transformations
          </p>
        </motion.div>

        {/* Before/After Container */}
        <motion.div
          ref={containerRef}
          className="relative w-full overflow-hidden rounded-2xl h-96 md:h-[500px] cursor-col-resize select-none"
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseLeave={() => setIsDragging(false)}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left Side: Before */}
          <div className="absolute inset-0 bg-cover bg-center flex items-center justify-center">
            <img
              src="/after.png"
              alt="Before"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side: After (Revealed by slider) */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center flex items-center justify-center"
            style={{
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            }}
          >
            <img
              src="/before.png"
              alt="After"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Liquid Physics Divider Line */}
          <motion.div
            className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-tomato-red to-transparent"
            style={{
              left: `${sliderPosition}%`,
              filter: isDragging
                ? 'drop-shadow(0 0 20px rgba(255, 99, 71, 0.8))'
                : 'drop-shadow(0 0 10px rgba(255, 99, 71, 0.6))',
            }}
            animate={{
              boxShadow: isDragging
                ? '0 0 30px rgba(255, 99, 71, 1)'
                : '0 0 15px rgba(255, 99, 71, 0.6)',
            }}
            transition={{ duration: 0.2 }}
          />

          {/* Draggable Handle */}
          <motion.button
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-14 h-14 bg-tomato-red rounded-full flex items-center justify-center shadow-2xl z-10 hover:scale-125 transition-transform"
            style={{
              left: `${sliderPosition}%`,
            }}
            whileHover={{ scale: 1.3 }}
            whileDrag={{ scale: 1.2 }}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </motion.div>

        {/* Info Text */}
        <div className="flex justify-between mt-6 text-sm text-slate-grey/60">
          <span>← Drag to compare →</span>
          <span>{Math.round(sliderPosition)}% revealed</span>
        </div>
      </div>
    </section>
  )
}
