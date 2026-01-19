'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface ProjectCell {
  id: string
  title: string
  category: string
  image?: string
  description: string
}

interface ProjectPortalsProps {
  projects: ProjectCell[]
}

/**
 * Project Portals (Step 2, Project Portals #7)
 * Floating organic "cells" (blob shapes) with hover expansion
 */
export function ProjectPortals({ projects }: ProjectPortalsProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section className="relative w-full py-20 px-6 md:px-12" style={{ backgroundColor: '#F5F5F7' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1D1D1F' }}>
            Featured Work
          </h2>
          <p className="text-lg" style={{ color: 'rgba(29, 29, 31, 0.6)' }}>
            Explore our latest cinematic creations
          </p>
        </motion.div>

        {/* Blob Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-80 md:h-96"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <motion.div
                className="blob relative w-full h-full overflow-hidden cursor-pointer border"
                style={{
                  borderColor: 'rgba(29, 29, 31, 0.1)',
                  background: 'linear-gradient(135deg, rgba(135, 206, 235, 0.1), rgba(46, 139, 87, 0.1))',
                }}
                whileHover={{ scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                {/* Image Placeholder */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1), #F5F5F7, rgba(135, 206, 235, 0.1))',
                  }}
                >
                  <div className="text-center">
                    <div
                      className="w-24 h-24 rounded-full mx-auto mb-4"
                      style={{ backgroundColor: 'rgba(29, 29, 31, 0.1)' }}
                    />
                    <p style={{ color: 'rgba(29, 29, 31, 0.4)' }} className="text-sm">
                      [Image: {project.title}]
                    </p>
                  </div>
                </div>

                {/* Overlay Content */}
                <motion.div
                  className="absolute inset-0 backdrop-blur-sm p-6 flex flex-col justify-end"
                  style={{
                    backgroundColor: 'rgba(29, 29, 31, 0.9)',
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm font-semibold mb-3" style={{ color: '#FFD700' }}>
                    {project.category}
                  </p>
                  <p className="text-sm line-clamp-3" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    {project.description}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
