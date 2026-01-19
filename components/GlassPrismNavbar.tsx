'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Philosophy', href: '/philosophy' },
  { label: 'Work', href: '/work' },
  { label: 'Collaborations', href: '/collaborations' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]

export function GlassPrismNavbar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showAnimation, setShowAnimation] = useState(false)

  useEffect(() => {
    // Start navbar animation after preloader fades out (7s video + 1s fade = 8s)
    const animationTimer = setTimeout(() => {
      setShowAnimation(true)
    }, 8000)

    return () => clearTimeout(animationTimer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Collapse on scroll down (Freeze)
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsCollapsed(true)
      }
      // Expand on scroll up (Unfreeze)
      else if (currentScrollY < lastScrollY) {
        setIsCollapsed(false)
      }

      setScrollY(currentScrollY)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <motion.nav
      className="glass-prism fixed top-8 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-8 py-4 md:py-6 rounded-full shadow-2xl w-4/5"
      style={{
        backdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        border: '1.5px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.2), 0 0 30px rgba(255, 255, 255, 0.15)',
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: showAnimation ? 0 : -100, opacity: showAnimation ? 1 : 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Logo */}
      <motion.div
        className="flex-shrink-0 w-16 h-16"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: showAnimation ? 0 : -50, opacity: showAnimation ? 1 : 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: showAnimation ? 0.1 : 0 }}
        whileHover={{ scale: 1.05 }}
      >
        <Link href="/">
          <img src="/logo.png" alt="Nature Guru Logo" className="w-full h-full object-contain" />
        </Link>
      </motion.div>

      {/* Navigation Links */}
      <div className="flex-1 flex justify-center">
        <motion.div
          className="flex gap-6 md:gap-12 items-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: showAnimation ? 0 : -50, opacity: showAnimation ? 1 : 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: showAnimation ? 0.2 : 0 }}
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: showAnimation ? 0 : -50, opacity: showAnimation ? 1 : 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: showAnimation ? 0.25 + index * 0.05 : 0 }}
              whileHover={{ y: -2 }}
            >
              <Link
                href={item.href}
                className="text-lg md:text-xl font-medium whitespace-nowrap hover:drop-shadow-lg transition-all"
                style={{
                  color: '#FF6347',
                  textShadow: '0 0 20px rgba(255, 99, 71, 0.5)',
                }}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Menu Button (visible when collapsed) */}
      {/* CTA Button */}
      <motion.div
        className="flex-shrink-0 ml-4 md:ml-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: showAnimation ? 0 : -50, opacity: showAnimation ? 1 : 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: showAnimation ? 0.6 : 0 }}
        whileHover={{ scale: 1.05 }}
      >
        <button className="px-4 md:px-6 py-2 md:py-3 text-white rounded-lg font-medium text-sm md:text-base hover:opacity-90 transition-all" style={{ backgroundColor: '#FF6347' }}>
          Let's Talk
        </button>
      </motion.div>
    </motion.nav>
  )
}
