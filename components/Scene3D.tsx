'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei'

interface Scene3DProps {
  children: React.ReactNode
  cameraPosition?: [number, number, number]
  autoRotate?: boolean
  showControls?: boolean
}

/**
 * Wrapper component for 3D scenes using React Three Fiber
 * Handles loading states and basic camera/control setup
 */
export function Scene3D({
  children,
  cameraPosition = [0, 0, 8],
  autoRotate = true,
  showControls = true,
}: Scene3DProps) {
  return (
    <div className="w-full h-full">
      <Suspense fallback={<div className="w-full h-full bg-cinema flex items-center justify-center">Loading 3D Scene...</div>}>
        <Canvas>
          <PerspectiveCamera makeDefault position={cameraPosition} fov={75} />
          <color attach="background" args={['#F5F5F7']} />

          {/* Lighting */}
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 10]} intensity={1} castShadow />
          <pointLight position={[-10, -10, 10]} intensity={0.5} />

          {/* Render children */}
          {children}

          {/* Controls */}
          {showControls && <OrbitControls autoRotate={autoRotate} autoRotateSpeed={4} />}
        </Canvas>
      </Suspense>
    </div>
  )
}
