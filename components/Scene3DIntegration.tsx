'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Object3D } from './Object3D'
import { Coral } from './Coral'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei'

/**
 * 3D Integration Section (Step 2)
 * Combines 3D object with dynamic lighting and footer coral
 * Includes fallback loading state
 */
export function Scene3DIntegration() {
  return (
    <section className="relative w-full py-20 px-6 md:px-12" style={{ backgroundColor: '#F5F5F7' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1D1D1F' }}>
            Our Creative Process
          </h2>
          <p className="text-lg" style={{ color: 'rgba(29, 29, 31, 0.6)' }}>
            Real-time rendering showcasing our 3D expertise
          </p>
        </div>

        {/* 3D Canvas */}
        <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden border" style={{ borderColor: 'rgba(29, 29, 31, 0.1)' }}>
          <Canvas
            camera={{
              position: [0, 3, 8],
              fov: 50,
              far: 1000,
            }}
          >
            <Suspense
              fallback={
                <mesh>
                  <boxGeometry args={[2, 2, 2]} />
                  <meshBasicMaterial color={0xcccccc} wireframe />
                </mesh>
              }
            >
              <PerspectiveCamera makeDefault position={[0, 2, 8]} fov={50} />
              <Object3D />
              <OrbitControls
                autoRotate
                autoRotateSpeed={2}
                enableZoom={true}
                enablePan={true}
                rotateSpeed={0.5}
              />
            </Suspense>

            {/* Lighting Setup */}
            <color attach="background" args={['#F5F5F7']} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1} castShadow />
          </Canvas>
        </div>

        {/* Description */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-3" style={{ color: '#1D1D1F' }}>
              Real-Time 3D Rendering
            </h3>
            <p style={{ color: 'rgba(29, 29, 31, 0.7)' }}>
              Our workflow integrates Three.js for real-time visualization. Objects are rendered with physically-based materials, dynamic lighting, and real-time shadows casting on soft backgrounds—creating depth and dimensionality in the browser.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3" style={{ color: '#1D1D1F' }}>
              Interactive Exploration
            </h3>
            <p style={{ color: 'rgba(29, 29, 31, 0.7)' }}>
              Hover and drag to rotate. Scroll your mouse wheel to zoom. Each model is optimized for web performance with LOD (Level of Detail) culling and efficient shader systems. This is your space to see our work in motion.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
