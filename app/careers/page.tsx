'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { GlassPrismNavbar } from '@/components/GlassPrismNavbar'

/**
 * Careers Page - The Academy (Step 6, The Academy #24)
 * Features:
 * - Bento grid job listings
 * - Mentor cards with profiles
 * - Career growth timeline
 * - Culture highlights
 */
export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null)

  return (
    <div className="w-full min-h-screen" style={{ backgroundColor: '#F5F5F7' }}>
      <GlassPrismNavbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" /%3E%3C/filter%3E%3Crect width="400" height="400" filter="url(%23noiseFilter)" /%3E%3C/svg%3E")',
            backgroundSize: '200px 200px',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl text-center"
        >
          <h1
            className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ color: '#1D1D1F' }}
          >
            Join the Academy
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            style={{ color: 'rgba(29, 29, 31, 0.7)' }}
          >
            Shape the future of visual effects. Become part of a team obsessed with excellence,
            innovation, and mentoring the next generation.
          </p>
        </motion.div>
      </section>

      {/* Culture Section */}
      <section className="w-full py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
            style={{ color: '#1D1D1F' }}
          >
            Our Culture
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CULTURE_PILLARS.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl backdrop-blur-md border"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  borderColor: 'rgba(46, 139, 87, 0.2)',
                }}
              >
                <div
                  className="text-4xl mb-4"
                  style={{ color: pillar.color }}
                >
                  {pillar.icon}
                </div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: '#1D1D1F' }}
                >
                  {pillar.title}
                </h3>
                <p style={{ color: 'rgba(29, 29, 31, 0.7)' }}>
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Job Listings */}
      <section className="w-full py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12"
            style={{ color: '#1D1D1F' }}
          >
            Open Positions
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-max">
            {JOB_LISTINGS.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                onClick={() => setSelectedRole(selectedRole === job.id ? null : job.id)}
                className={`cursor-pointer p-6 rounded-xl backdrop-blur-md border transition-all duration-300 ${
                  job.featured ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  borderColor:
                    selectedRole === job.id
                      ? 'rgba(255, 99, 71, 0.5)'
                      : 'rgba(46, 139, 87, 0.2)',
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3
                      className="text-xl md:text-2xl font-bold"
                      style={{ color: '#1D1D1F' }}
                    >
                      {job.title}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: 'rgba(29, 29, 31, 0.6)' }}
                    >
                      {job.department}
                    </p>
                  </div>
                  {job.featured && (
                    <div
                      className="px-3 py-1 rounded-full text-xs font-bold"
                      style={{
                        backgroundColor: 'rgba(255, 99, 71, 0.2)',
                        color: '#FF6347',
                      }}
                    >
                      Featured
                    </div>
                  )}
                </div>

                <p
                  className="mb-4 text-sm"
                  style={{ color: 'rgba(29, 29, 31, 0.7)' }}
                >
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 rounded text-xs"
                      style={{
                        backgroundColor: 'rgba(46, 139, 87, 0.2)',
                        color: '#2E8B57',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span
                    className="text-sm"
                    style={{ color: 'rgba(29, 29, 31, 0.6)' }}
                  >
                    {job.location}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 rounded font-semibold text-sm transition-all"
                    style={{
                      backgroundColor: '#FF6347',
                      color: '#F5F5F7',
                    }}
                  >
                    Apply
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor Cards */}
      <section className="w-full py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
            style={{ color: '#1D1D1F' }}
          >
            Your Mentors
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MENTORS.map((mentor, index) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div
                  className="p-6 rounded-xl backdrop-blur-md border transition-all duration-300 group-hover:border-opacity-100"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    borderColor: 'rgba(255, 99, 71, 0.2)',
                  }}
                >
                  {/* Avatar */}
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold text-white mb-4 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: mentor.color }}
                  >
                    {mentor.avatar}
                  </div>

                  <h3
                    className="text-xl font-bold mb-1"
                    style={{ color: '#1D1D1F' }}
                  >
                    {mentor.name}
                  </h3>
                  <p
                    className="text-sm mb-4 font-semibold"
                    style={{ color: '#FF6347' }}
                  >
                    {mentor.role}
                  </p>

                  <p
                    className="text-sm mb-4 leading-relaxed"
                    style={{ color: 'rgba(29, 29, 31, 0.7)' }}
                  >
                    {mentor.bio}
                  </p>

                  <div className="space-y-2">
                    <p
                      className="text-xs font-semibold"
                      style={{ color: '#2E8B57' }}
                    >
                      Specialties:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {mentor.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="text-xs px-2 py-1 rounded"
                          style={{
                            backgroundColor: 'rgba(46, 139, 87, 0.2)',
                            color: '#2E8B57',
                          }}
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Growth Timeline */}
      <section className="w-full py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
            style={{ color: '#1D1D1F' }}
          >
            Your Path Forward
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full"
              style={{ backgroundColor: 'rgba(255, 99, 71, 0.2)' }}
            />

            {/* Timeline Items */}
            <div className="space-y-16">
              {CAREER_TIMELINE.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className="w-1/2 px-6">
                    <div
                      className="p-6 rounded-xl backdrop-blur-md border"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.06)',
                        borderColor: 'rgba(46, 139, 87, 0.2)',
                      }}
                    >
                      <h3
                        className="text-xl font-bold mb-2"
                        style={{ color: '#1D1D1F' }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-sm"
                        style={{ color: 'rgba(29, 29, 31, 0.7)' }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="w-8 flex items-center justify-center">
                    <div
                      className="w-4 h-4 rounded-full border-4"
                      style={{
                        backgroundColor: '#FF6347',
                        borderColor: '#F5F5F7',
                      }}
                    />
                  </div>

                  {/* Spacer */}
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: '#1D1D1F' }}
            >
              Ready to Learn?
            </h2>
            <p
              className="text-lg mb-8"
              style={{ color: 'rgba(29, 29, 31, 0.7)' }}
            >
              Apply now to join our mentorship program or explore open positions across the studio.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              style={{
                backgroundColor: '#FF6347',
                color: '#F5F5F7',
              }}
            >
              Explore Opportunities
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer Spacer */}
      <div className="h-32" />
    </div>
  )
}

const CULTURE_PILLARS = [
  {
    id: '1',
    icon: '🎨',
    title: 'Creative Excellence',
    color: '#FF6347',
    description:
      'We push boundaries and challenge conventions. Every project is an opportunity to innovate and inspire.',
  },
  {
    id: '2',
    icon: '🤝',
    title: 'Mentorship First',
    color: '#2E8B57',
    description:
      'Knowledge sharing and growth are core to who we are. We invest in developing the next generation.',
  },
  {
    id: '3',
    icon: '🚀',
    title: 'Technical Mastery',
    color: '#87CEEB',
    description:
      'State-of-the-art tools and techniques. We stay ahead of the curve in technology and methodology.',
  },
]

const JOB_LISTINGS = [
  {
    id: '1',
    featured: true,
    title: 'Senior VFX Supervisor',
    department: 'Leadership',
    description: 'Lead our VFX team on major feature films. Shape our creative direction and mentor junior artists.',
    skills: ['VFX', 'Leadership', 'Supervision'],
    location: 'Los Angeles',
  },
  {
    id: '2',
    featured: false,
    title: '3D Generalist',
    department: 'Modeling & Animation',
    description: 'Create and animate 3D assets. Work across modeling, rigging, and animation.',
    skills: ['Maya', 'Blender', 'ZBrush'],
    location: 'Remote',
  },
  {
    id: '3',
    featured: false,
    title: 'Compositor',
    department: 'Post-Production',
    description: 'Composite and color-grade VFX shots. Bring final creative vision to life.',
    skills: ['Nuke', 'After Effects', 'Color'],
    location: 'Los Angeles',
  },
  {
    id: '4',
    featured: false,
    title: 'Technical Director',
    department: 'Engineering',
    description: 'Build pipelines and tools. Optimize rendering and production workflows.',
    skills: ['Python', 'C++', 'Pipeline'],
    location: 'Remote',
  },
  {
    id: '5',
    featured: false,
    title: 'Concept Artist',
    department: 'Previs',
    description: 'Design creatures, environments, and visual concepts for upcoming projects.',
    skills: ['Digital Art', 'Design', 'Animation'],
    location: 'Los Angeles',
  },
  {
    id: '6',
    featured: false,
    title: 'Motion Capture Specialist',
    department: 'Capture',
    description: 'Manage and optimize motion capture sessions for character animation.',
    skills: ['MotionBuilder', 'Animation', 'Tech'],
    location: 'Los Angeles',
  },
]

const MENTORS = [
  {
    id: '1',
    name: 'Alex Rivera',
    role: 'VFX Director',
    color: '#2E8B57',
    avatar: '🎬',
    bio: '15+ years in VFX. Led effects on 30+ feature films. Passionate about mentoring emerging talent.',
    specialties: ['VFX Direction', 'Creature Design', 'Lighting'],
  },
  {
    id: '2',
    name: 'Jordan Chen',
    role: 'Technical Director',
    color: '#87CEEB',
    avatar: '⚙️',
    bio: 'Expert in pipeline development and optimization. Loves solving complex technical challenges.',
    specialties: ['Pipeline', 'Python', 'Rendering'],
  },
  {
    id: '3',
    name: 'Sofia Andersen',
    role: 'Lead Animator',
    color: '#FFD700',
    avatar: '✨',
    bio: 'Award-winning animator focused on character movement and realism. Mentor to 10+ artists.',
    specialties: ['Animation', 'Rigging', 'Motion Capture'],
  },
]

const CAREER_TIMELINE = [
  {
    id: '1',
    title: 'Month 1-3: Onboarding',
    description: 'Get up to speed with our tools, pipelines, and team. Shadowing and foundational training.',
  },
  {
    id: '2',
    title: 'Month 3-6: First Project',
    description: 'Join your first production team. Contribute to shots with mentorship and support.',
  },
  {
    id: '3',
    title: 'Month 6-12: Growing Responsibility',
    description: 'Lead sequences and mentor junior team members. Build expertise in your specialty.',
  },
  {
    id: '4',
    title: 'Year 2+: Leadership',
    description: 'Potential to lead teams, mentor mentors, and shape the direction of our studio.',
  },
]
