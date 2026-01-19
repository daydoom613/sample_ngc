'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

/**
 * Video Preloader
 * Full-screen video background that fades out as site loads
 */
export function ParticlePreloader() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Auto-hide the preloader after video completes (7 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 7000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 z-[9998] bg-cinema overflow-hidden"
      animate={{ 
        opacity: isLoading ? 1 : 0, 
        pointerEvents: isLoading ? 'auto' : 'none'
      }}
      transition={{ duration: 1 }}
    >
      {/* Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  )
}
