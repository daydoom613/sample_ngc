'use client'

import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

/**
 * Placeholder 3D Object (Step 2, 3D Object Integration #9)
 * Creates a geometric form with real-time shadow casting on background
 * In production, replace with useGLTF('/models/creature.glb')
 */
export function Object3D() {
  const meshRef = useRef<THREE.Mesh>(null)
  const shadowCameraRef = useRef<THREE.OrthographicCamera>(null)
  const { gl, scene } = useThree()

  useEffect(() => {
    // Enable shadow mapping
    gl.shadowMap.enabled = true
    gl.shadowMap.type = THREE.PCFShadowMap
  }, [gl])

  useFrame(({ camera }) => {
    if (meshRef.current) {
      // Subtle rotation
      meshRef.current.rotation.x += 0.001
      meshRef.current.rotation.y += 0.002
    }
  })

  return (
    <>
      {/* Placeholder Creature: Icosahedron (replace with model) */}
      <mesh
        ref={meshRef}
        castShadow
        position={[0, 0, 0]}
        scale={2}
      >
        <icosahedronGeometry args={[1, 4]} />
        <meshPhongMaterial
          color={0x2E8B57}
          shininess={100}
          wireframe={false}
        />
      </mesh>

      {/* Alternative: Torus Knot for visual interest */}
      <mesh castShadow position={[0, -0.5, 0]}>
        <torusKnotGeometry args={[1.2, 0.4, 128, 16]} />
        <meshPhongMaterial
          color={0xFF6347}
          opacity={0.7}
          transparent
          wireframe={false}
        />
      </mesh>

      {/* Directional Light with Shadow */}
      <directionalLight
        position={[10, 20, 10]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={100}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />

      {/* Fill Lights */}
      <pointLight position={[-15, 10, 10]} intensity={0.6} color={0x87CEEB} />
      <pointLight position={[15, 10, -10]} intensity={0.4} color={0xFFD700} />

      {/* Ambient for overall brightness */}
      <ambientLight intensity={0.4} />
    </>
  )
}
