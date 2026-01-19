import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Color Tokens (Organic Tech Aesthetic)
        'cinema': '#F5F5F7', // Base background (Apple-style)
        'slate-grey': '#1D1D1F', // Primary text & neutrals
        'tomato-red': '#FF6347', // Interaction & hover states
        'canopy-green': '#2E8B57', // Nature semantic
        'atmosphere-blue': '#87CEEB', // Sky/ethereal
        'soul-yellow': '#FFD700', // Accent, golden ratio
      },
      typography: {
        // Custom typography scale
        'hero': {
          fontSize: ['4rem', { lineHeight: '1.1' }],
          fontWeight: '700',
          letterSpacing: '-0.02em',
        },
        'display': {
          fontSize: ['2.5rem', { lineHeight: '1.2' }],
          fontWeight: '600',
          letterSpacing: '-0.01em',
        },
        'headline': {
          fontSize: ['1.875rem', { lineHeight: '1.3' }],
          fontWeight: '600',
        },
        'subheading': {
          fontSize: ['1.25rem', { lineHeight: '1.4' }],
          fontWeight: '500',
        },
        'body': {
          fontSize: ['1rem', { lineHeight: '1.6' }],
          fontWeight: '400',
        },
        'caption': {
          fontSize: ['0.875rem', { lineHeight: '1.5' }],
          fontWeight: '500',
        },
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
      },
      animation: {
        'grain': 'grain 8s steps(10) infinite',
        'pulse-tomato': 'pulse-tomato 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'drift': 'drift 6s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        grain: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '100px 100px' },
        },
        'pulse-tomato': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        drift: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'grain-pattern': `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' seed='2' /%3E%3C/filter%3E%3Crect width='100' height='100' fill='%23F5F5F7' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E")`,
      },
      spacing: {
        // Asymmetrical grid spacing
        'gutter': '1.5rem',
        'rhythm': '2rem',
      },
      transitionTimingFunction: {
        'liquid': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}

export default config
