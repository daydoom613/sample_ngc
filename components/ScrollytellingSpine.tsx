'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface PipelineStage {
  id: string
  label: string
  description: string
}

const PIPELINE_STAGES: PipelineStage[] = [
  {
    id: 'previs',
    label: 'Pre-vis',
    description: 'Concept exploration and storyboarding',
  },
  {
    id: 'modeling',
    label: 'Modeling',
    description: 'High-fidelity 3D asset creation',
  },
  {
    id: 'rigging',
    label: 'Rigging',
    description: 'Skeletal structures and deformation',
  },
  {
    id: 'animation',
    label: 'Animation',
    description: 'Motion capture and keyframe animation',
  },
  {
    id: 'rendering',
    label: 'Rendering',
    description: 'Ray tracing and compositing',
  },
]

/**
 * Scrollytelling Spine (Step 3, Scrollytelling Spine #21)
 * Vertical line with pulse animation traveling down as user scrolls
 * Lights up pipeline stages (Pre-vis, Modeling, Rigging, etc.)
 */
export function ScrollytellingSpine() {
  const containerRef = useRef<HTMLDivElement>(null)
  const spineRef = useRef<HTMLDivElement>(null)
  const [activeStage, setActiveStage] = useState(0)

  useEffect(() => {
    if (!containerRef.current || !spineRef.current) return

    // Track scroll position to light up stages
    const handleScroll = () => {
      const containerTop = containerRef.current!.getBoundingClientRect().top
      const containerHeight = containerRef.current!.offsetHeight
      const viewportCenter = window.innerHeight / 2

      const scrollProgress = Math.max(
        0,
        Math.min(1, (viewportCenter - containerTop) / containerHeight)
      )

      setActiveStage(Math.floor(scrollProgress * PIPELINE_STAGES.length))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative w-full py-32 px-6 md:px-12"
      style={{ backgroundColor: '#F5F5F7' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1D1D1F' }}>
            Our Pipeline
          </h2>
          <p className="text-lg" style={{ color: 'rgba(29, 29, 31, 0.6)' }}>
            Scroll down to see our production workflow
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative flex gap-8">
          {/* Spine Line */}
          <div className="relative w-1" style={{ backgroundColor: 'rgba(255, 99, 71, 0.2)' }}>
            {/* Animated Pulse */}
            <motion.div
              ref={spineRef}
              className="absolute left-0 right-0 w-full spine-pulse"
              style={{
                top: `${(activeStage / PIPELINE_STAGES.length) * 100}%`,
                height: '100px',
              }}
              animate={{
                boxShadow: [
                  '0 0 10px rgba(255, 99, 71, 0.5)',
                  '0 0 30px rgba(255, 99, 71, 0.8)',
                  '0 0 10px rgba(255, 99, 71, 0.5)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>

          {/* Stages */}
          <div className="flex flex-col gap-16 pb-16">
            {PIPELINE_STAGES.map((stage, index) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connector dot */}
                <motion.div
                  className="absolute -left-6 top-2 w-4 h-4 rounded-full"
                  style={{
                    backgroundColor: activeStage >= index ? '#FF6347' : 'rgba(29, 29, 31, 0.2)',
                  }}
                  animate={{
                    scale: activeStage >= index ? 1.2 : 1,
                    boxShadow:
                      activeStage >= index
                        ? '0 0 15px rgba(255, 99, 71, 0.6)'
                        : 'none',
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Content Card */}
                <motion.div
                  className="pl-4 md:pl-8 glass-card"
                  animate={{
                    borderColor: activeStage >= index ? 'rgba(255, 99, 71, 0.5)' : 'rgba(255, 255, 255, 0.2)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#1D1D1F' }}>
                    {stage.label}
                  </h3>
                  <p style={{ color: 'rgba(29, 29, 31, 0.7)' }}>
                    {stage.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
