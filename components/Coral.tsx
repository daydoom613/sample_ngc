'use client'

import { useRef, useEffect, useState, ReactNode } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * 3D Footer Coral (Step 2, Footer Ecosystem #20)
 * Procedurally growing coral/plant structure based on scroll depth
 * Green theme, grows taller as user scrolls down
 */
export function Coral() {
  const groupRef = useRef<THREE.Group>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = docHeight > 0 ? scrollTop / docHeight : 0
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Animate rotation
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0005
      groupRef.current.rotation.x = Math.sin(Date.now() * 0.0003) * 0.1
    }
  })

  // Generate procedural coral branches
  const coralSegments = 8
  const segments: ReactNode[] = []

  for (let i = 0; i < coralSegments; i++) {
    const angleOffset = (i / coralSegments) * Math.PI * 2
    const height = scrollProgress * 3 + 1 // Grows with scroll
    const x = Math.cos(angleOffset) * 0.8
    const z = Math.sin(angleOffset) * 0.8

    segments.push(
      <mesh
        key={i}
        position={[x, height * 0.5, z]}
        castShadow
        receiveShadow
      >
        <cylinderGeometry args={[0.15, 0.25, height, 8]} />
        <meshStandardMaterial
          color={0x2E8B57}
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>
    )

    // Add branches
    for (let j = 0; j < 3; j++) {
      const branchAngle = angleOffset + (j * Math.PI) / 3
      const branchX = x + Math.cos(branchAngle) * 0.3
      const branchZ = z + Math.sin(branchAngle) * 0.3
      const branchHeight = height * 0.6

      segments.push(
        <mesh
          key={`branch-${i}-${j}`}
          position={[branchX, height * 0.6, branchZ]}
          rotation={[Math.PI / 6, branchAngle, 0]}
          castShadow
        >
          <cylinderGeometry args={[0.05, 0.1, branchHeight, 6]} />
          <meshStandardMaterial
            color={0x3AA566}
            roughness={0.8}
            metalness={0}
          />
        </mesh>
      )
    }
  }

  return (
    <group ref={groupRef} position={[0, -2, 0]}>
      {/* Base */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[1.2, 1.5, 0.3, 16]} />
        <meshStandardMaterial
          color={0x1D5C3F}
          roughness={0.8}
        />
      </mesh>

      {/* Coral branches */}
      {segments}

      {/* Lighting for this section */}
      <pointLight position={[0, 3, 0]} intensity={0.8} color={0xFFD700} />
    </group>
  )
}
