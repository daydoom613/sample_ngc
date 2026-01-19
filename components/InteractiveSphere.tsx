'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

// Add floating animation styles
if (typeof window !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = `
    @keyframes float {
      0% {
        transform: translateY(100vh) translateX(0);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        transform: translateY(-100vh) translateX(100px);
        opacity: 0;
      }
    }
  `
  document.head.appendChild(style)
}

/**
 * Interactive Sphere Component
 * Displays 3 images from public/sphere folder arranged on an interactive 3D sphere
 */
export function InteractiveSphere() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sphereContainerRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('rotateX(0deg) rotateY(0deg)')
  const [isDragging, setIsDragging] = useState(false)
  const [autoRotate, setAutoRotate] = useState({ x: 0, y: 0 })
  const [hoveredItemIndex, setHoveredItemIndex] = useState<number | null>(null)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [shouldAutoRotate, setShouldAutoRotate] = useState(true)
  const dragRef = useRef({ startX: 0, startY: 0, currentX: 0, currentY: 0 })
  const rotationRef = useRef({ x: 0, y: 0 })

  const images = [
    '/sphere/1.webp',
    '/sphere/2.jpg',
    '/sphere/3.png',
  ]

  // Movie data for hover cards
  const movieData = [
    {
      title: 'Ethereal Canvas',
      description: 'A breathtaking exploration of visual effects blending nature with digital artistry, creating immersive environments.',
    },
    {
      title: 'Digital Horizons',
      description: 'Cinematic VFX work showcasing cutting-edge techniques in motion graphics and 3D composition design.',
    },
    {
      title: 'Nature\'s Echo',
      description: 'Stunning visual effects that capture the essence of natural phenomena through advanced rendering techniques.',
    },
  ]

  // Create 9 items arranged in a circle
  const items = Array.from({ length: 9 }, (_, i) => ({
    id: i,
    image: images[i % 3],
  }))

  // Auto-rotation effect
  useEffect(() => {
    let animationId: NodeJS.Timeout
    const autoRotateSpeed = 0.5

    const animate = () => {
      if (shouldAutoRotate && !isDragging) {
        rotationRef.current.y += autoRotateSpeed
      }

      if (!isDragging) {
        const rotateX = rotationRef.current.x
        const rotateY = rotationRef.current.y
        setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`)
      }

      animationId = setTimeout(animate, 50)
    }

    animate()

    return () => clearTimeout(animationId)
  }, [isDragging, shouldAutoRotate])

  // Handle mouse move inside container
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Track cursor position for hover card
    setCursorPos({ x: e.clientX, y: e.clientY })

    if (!sphereContainerRef.current) return

    const rect = sphereContainerRef.current.getBoundingClientRect()
    const isInsideBorder =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom

    if (isDragging && isInsideBorder) {
      const deltaX = e.clientX - dragRef.current.startX
      const deltaY = e.clientY - dragRef.current.startY

      dragRef.current.currentX = deltaX
      dragRef.current.currentY = deltaY

      rotationRef.current.x += -deltaY * 0.3
      rotationRef.current.y += deltaX * 0.3

      dragRef.current.startX = e.clientX
      dragRef.current.startY = e.clientY

      const rotateX = rotationRef.current.x
      const rotateY = rotationRef.current.y
      setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`)
    }
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sphereContainerRef.current) return

    const rect = sphereContainerRef.current.getBoundingClientRect()
    const isInsideBorder =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom

    if (isInsideBorder) {
      setIsDragging(true)
      dragRef.current.startX = e.clientX
      dragRef.current.startY = e.clientY
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp)
    return () => document.removeEventListener('mouseup', handleMouseUp)
  }, [])

  const getTransform = (index: number) => {
    const positions = [
      'rotateY(0deg) translateZ(554px)',
      'rotateY(40deg) translateZ(554px)',
      'rotateY(80deg) translateZ(554px)',
      'rotateY(120deg) translateZ(554px)',
      'rotateY(160deg) translateZ(554px)',
      'rotateY(200deg) translateZ(554px)',
      'rotateY(240deg) translateZ(554px)',
      'rotateY(280deg) translateZ(554px)',
      'rotateY(320deg) translateZ(554px)',
    ]
    return positions[index % positions.length]
  }

  return (
    <section className="w-full min-h-screen px-6 md:px-12 bg-cinema relative overflow-hidden flex flex-col items-center justify-center">
      {/* Section Title */}
      <div className="absolute top-20 z-20 text-center">
        <h2 className="text-5xl md:text-7xl font-bold text-slate-grey">Our Previous Works</h2>
      </div>

      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            style={{
              position: 'absolute',
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 20 + 15}s linear infinite`,
              filter: 'blur(1px)',
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Film Grain Overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' result='noise' /%3E%3C/filter%3E%3Crect width='400' height='400' fill='rgba(0,0,0,0.05)' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          pointerEvents: 'none',
          zIndex: 10,
          opacity: 0.05,
        }}
      />
      {/* Sphere Container with Invisible Border */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        className="w-full h-screen flex justify-center items-center cursor-grab active:cursor-grabbing"
      >
        <div
          ref={sphereContainerRef}
          className="w-full h-full flex items-center justify-center relative"
          style={{
            perspective: '1200px',
          }}
        >
          {/* Podium Platform - Polished Concrete/Marble Base */}
          <div
            style={{
              position: 'absolute',
              bottom: '15%',
              width: '800px',
              height: '120px',
              borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              background: `
                radial-gradient(ellipse at 30% 30%, rgba(255, 255, 255, 0.8), rgba(200, 200, 200, 0.6) 20%, rgba(150, 150, 150, 0.4) 50%, rgba(100, 100, 100, 0.3) 100%),
                repeating-linear-gradient(
                  45deg,
                  rgba(255, 255, 255, 0.1),
                  rgba(255, 255, 255, 0.1) 2px,
                  transparent 2px,
                  transparent 4px
                ),
                linear-gradient(180deg, rgba(200, 195, 190, 0.9), rgba(150, 145, 140, 0.85))
              `,
              boxShadow: `
                inset 0 2px 8px rgba(255, 255, 255, 0.6),
                inset 0 -2px 8px rgba(0, 0, 0, 0.3),
                0 30px 60px rgba(0, 0, 0, 0.3)
              `,
              border: '1px solid rgba(255, 255, 255, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Logo in center */}
            <img
              src="/logo_2.png"
              alt="Logo"
              style={{
                width: '10000px',
                height: '10000px',
                objectFit: 'contain',
                filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))',
                pointerEvents: 'none',
                position: 'absolute',
                bottom: 'calc(15% + 120px)',
                left: '50%',
                transform: 'translateX(-50%) translateZ(2000px)',
              }}
            />
            
            {/* Inner Ring Detail */}
            <div
              style={{
                position: 'absolute',
                inset: '20px',
                borderRadius: '50%',
                border: '2px solid rgba(0, 0, 0, 0.1)',
                boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.2)',
                pointerEvents: 'none',
              }}
            />
          </div>

          {/* Rotating Shadow beneath the sphere */}
          <div
            style={{
              position: 'absolute',
              bottom: '8%',
              width: '600px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: 'rgba(0, 0, 0, 0.15)',
              filter: 'blur(40px)',
              transform: transform.includes('rotateY') 
                ? `scaleX(${1 + Math.sin(Math.random() * Math.PI) * 0.1})` 
                : 'none',
              transition: isDragging ? 'none' : 'transform 0.1s ease-out',
              pointerEvents: 'none',
            }}
          />
          {/* Sphere */}
          <div
            style={{
              transformStyle: 'preserve-3d',
              transform: transform,
              transition: isDragging ? 'none' : 'transform 0.1s ease-out',
              width: 'min(100vh, 100vw)',
              height: 'min(100vh, 100vw)',
              position: 'relative',
            }}
          >
            {items.map((item, index) => (
              <div
                key={item.id}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: getTransform(index),
                  position: 'absolute',
                  width: '282px',
                  height: '282px',
                  left: '50%',
                  top: '50%',
                  marginLeft: '-141px',
                  marginTop: '-141px',
                  perspective: '1000px',
                }}
                className={`cursor-pointer transition-all ${
                  hoveredItemIndex !== null && hoveredItemIndex !== index
                    ? 'brightness-50 blur-sm'
                    : 'brightness-100'
                }`}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = getTransform(index) + ' scale(1.15)'
                  setHoveredItemIndex(index)
                  setShouldAutoRotate(false)
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = getTransform(index)
                  setHoveredItemIndex(null)
                  setShouldAutoRotate(true)
                }}
              >
                {/* Sundial Shadow - Fixed Direction (Nature Light) */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-60px',
                    left: '10px',
                    width: '100%',
                    height: '80px',
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), transparent)',
                    borderRadius: '50% 50% 0 0',
                    filter: 'blur(15px)',
                    transform: 'perspective(600px) rotateX(75deg) skewX(-10deg)',
                    transformOrigin: 'center bottom',
                    pointerEvents: 'none',
                  }}
                />
                {/* Front Face */}
                <div
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    transformStyle: 'preserve-3d',
                    transform: 'translateZ(20px)',
                  }}
                  className="rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl"
                >
                  <img
                    src={item.image}
                    alt={`Sphere item ${item.id}`}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                </div>

                {/* Right Side Edge (Depth) */}
                <div
                  style={{
                    position: 'absolute',
                    right: -20,
                    top: 0,
                    width: '20px',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.3))',
                    transformStyle: 'preserve-3d',
                    transform: 'rotateY(90deg) translateZ(0)',
                    borderRadius: '0 8px 8px 0',
                    boxShadow: 'inset -5px 0 15px rgba(0, 0, 0, 0.7)',
                  }}
                />

                {/* Left Side Edge (Depth) */}
                <div
                  style={{
                    position: 'absolute',
                    left: -20,
                    top: 0,
                    width: '20px',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    backgroundImage: 'linear-gradient(to left, rgba(0,0,0,0.8), rgba(0,0,0,0.2))',
                    transformStyle: 'preserve-3d',
                    transform: 'rotateY(-90deg) translateZ(0)',
                    borderRadius: '8px 0 0 8px',
                    boxShadow: 'inset 5px 0 15px rgba(0, 0, 0, 0.6)',
                  }}
                />

                {/* Bottom Side Edge (Depth) */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: -20,
                    left: 0,
                    width: '100%',
                    height: '20px',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.9))',
                    transformStyle: 'preserve-3d',
                    transform: 'rotateX(90deg) translateZ(0)',
                    borderRadius: '0 0 8px 8px',
                    boxShadow: 'inset 0 -5px 15px rgba(0, 0, 0, 0.8)',
                  }}
                />

                {/* Reflection */}
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transform: 'scaleY(-1)',
                    opacity: 0.3,
                    maskImage: 'linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(255,255,255,0))',
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(255,255,255,0))',
                    pointerEvents: 'none',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>



      {/* Hover Card */}
      {hoveredItemIndex !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          style={{
            position: 'fixed',
            left: `${cursorPos.x + 20}px`,
            top: `${cursorPos.y + 20}px`,
            pointerEvents: 'none',
            zIndex: 50,
          }}
          className="w-80 bg-black/90 border border-slate-grey/20 rounded-lg overflow-hidden shadow-2xl"
        >
          {/* Image */}
          <div className="w-full h-56 overflow-hidden">
            <img
              src={images[hoveredItemIndex % 3]}
              alt="Hover card"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Title */}
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                {movieData[hoveredItemIndex % 3].title}
              </h3>
            </div>

            {/* Description */}
            <div>
              <p className="text-white text-sm leading-relaxed">
                {movieData[hoveredItemIndex % 3].description}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  )
}
