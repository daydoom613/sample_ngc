'use client'

import { motion } from 'framer-motion'

interface NewsItem {
  id: string
  title: string
  category: string
  date: string
  excerpt: string
  image?: string
}

interface NewsCardsProps {
  news: NewsItem[]
}

/**
 * News Section (Step 2, News Section #11, #14)
 * Frosted glass cards with massive decorative "CREATING WORLDS" texture behind
 */
export function NewsCards({ news }: NewsCardsProps) {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-grey mb-4">
            Latest News
          </h2>
          <p className="text-lg text-slate-grey/60">
            Industry updates and studio announcements
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card group hover:border-tomato-red/50 transition-all cursor-pointer h-full flex flex-col"
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(255, 99, 71, 0.1)' }}
            >
              {/* Image Placeholder */}
              <div className="relative w-full h-40 bg-gradient-to-br from-atmosphere-blue/20 to-canopy-green/20 rounded-lg mb-4 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-slate-grey/10" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-slate-grey/30 text-xs">
                  [Thumbnail]
                </div>
              </div>

              {/* Category & Date */}
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-semibold text-tomato-red uppercase tracking-widest">
                  {item.category}
                </span>
                <span className="text-xs text-slate-grey/50">{item.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-grey mb-3 line-clamp-2 group-hover:text-tomato-red transition-colors">
                {item.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-slate-grey/70 line-clamp-3 mb-4 flex-grow">
                {item.excerpt}
              </p>

              {/* Read More Link */}
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-grey hover:text-tomato-red transition-colors"
                whileHover={{ x: 4 }}
              >
                Read More
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.a>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Decorative Background Text (Step 2, News Section #14) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none">
        <h1 className="text-8xl md:text-[12rem] font-serif font-bold whitespace-nowrap" style={{ color: 'rgba(255, 99, 71, 0.25)', textShadow: '0 0 50px rgba(255, 99, 71, 0.4)' }}>
          CREATING WORLDS
        </h1>
      </div>
    </section>
  )
}
