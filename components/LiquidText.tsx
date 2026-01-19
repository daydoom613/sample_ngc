'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

interface LiquidTextProps {
  children: string
  className?: string
}

/**
 * Liquid Text Effect (Step 1, Interaction Heartbeat #15)
 * SVG-based liquid fill animation transitioning text from Slate Grey to Tomato Red
 * Animates left to right on hover
 */
export function LiquidText({ children, className = '' }: LiquidTextProps) {
  const [isHovered, setIsHovered] = useState(false)
  const svgRef = useRef<SVGSVGElement>(null)

  return (
    <div
      className={`relative inline-block cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        ref={svgRef}
        viewBox="0 0 1000 120"
        className="absolute inset-0 w-full h-full overflow-visible"
        style={{ pointerEvents: 'none' }}
      >
        {/* Define liquid fill pattern */}
        <defs>
          <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6347" />
            <stop offset="50%" stopColor="#FF8C69" />
            <stop offset="100%" stopColor="#FF6347" />
          </linearGradient>

          {/* Wavy filter for liquid effect */}
          <filter id="liquidWave">
            <feTurbulence
              type="fractalNoise"
              baseFrequency={isHovered ? '0.03' : '0.01'}
              numOctaves="3"
              result="noise"
              seed={Date.now() * 0.001}
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={isHovered ? '8' : '2'}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>

        {/* Animated text outline for fill effect */}
        <motion.text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="80"
          fontWeight="bold"
          fontFamily="system-ui, -apple-system, sans-serif"
          fill="url(#liquidGradient)"
          filter="url(#liquidWave)"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          style={{
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          }}
        >
          {children}
        </motion.text>
      </svg>

      {/* Static text underneath */}
      <motion.span
        className="block text-4xl md:text-5xl font-bold"
        style={{ color: '#1D1D1F' }}
        animate={{
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.span>
    </div>
  )
}
