'use client'

import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      style={{
        backgroundColor: '#FF6347',
      }}
      className="relative w-full text-white"
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-tomato-red/20" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Nature Guru</h3>
                <p className="text-sm text-white/70">Crafting cinematic VFX with nature-inspired artistry</p>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-white hover:text-soul-yellow transition-colors">Twitter</a>
                <a href="#" className="text-white hover:text-soul-yellow transition-colors">Instagram</a>
                <a href="#" className="text-white hover:text-soul-yellow transition-colors">LinkedIn</a>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Services</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-white/70 hover:text-soul-yellow transition-colors text-sm">VFX Design</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-soul-yellow transition-colors text-sm">Motion Graphics</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-soul-yellow transition-colors text-sm">3D Animation</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-soul-yellow transition-colors text-sm">Compositing</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Company</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-white/70 hover:text-soul-yellow transition-colors text-sm">About Us</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-soul-yellow transition-colors text-sm">Careers</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-soul-yellow transition-colors text-sm">Contact</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-soul-yellow transition-colors text-sm">Blog</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Get In Touch</h4>
              <div className="space-y-2">
                <p className="text-sm text-white/70">hello@natureguru.studio</p>
                <p className="text-sm text-white/70">+1 (555) 123-4567</p>
                <button className="mt-4 px-6 py-2 bg-white text-tomato-red rounded-full hover:bg-soul-yellow transition-colors text-sm font-medium">
                  Let's Talk
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 pt-8 mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © {currentYear} Nature Guru Studios. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">Terms of Service</Link>
              <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
