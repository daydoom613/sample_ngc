"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassPrismNavbar } from "@/components/GlassPrismNavbar";

/**
 * Collaborations Page - Trust Wall (Step 5, Trust Wall #23)
 * Features:
 * - Client logo trust wall with hover interactions
 * - Accordion testimonial section
 * - Carousel of case studies
 */
export default function CollaborationsPage() {
  const [expandedTestimonial, setExpandedTestimonial] = useState<string | null>(
    null
  );

  return (
    <div className="w-full min-h-screen">
      <GlassPrismNavbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" /%3E%3C/filter%3E%3Crect width="400" height="400" filter="url(%23noiseFilter)" /%3E%3C/svg%3E")',
            backgroundSize: "200px 200px",
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
            style={{ color: "#1D1D1F" }}
          >
            Collaborations
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            style={{ color: "rgba(29, 29, 31, 0.7)" }}
          >
            Trusted by the world&apos;s leading studios, networks, and brands to
            bring their visions to life.
          </p>
        </motion.div>
      </section>

      {/* Client Logo Trust Wall */}
      <section className="w-full py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-16 text-center"
            style={{ color: "#1D1D1F" }}
          >
            Our Partners
          </motion.h2>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {CLIENT_LOGOS.map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center p-6 rounded-xl backdrop-blur-md border transition-all duration-300 cursor-pointer group"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.06)",
                  borderColor: "rgba(46, 139, 87, 0.2)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-white group-hover:scale-110 transition-transform"
                  style={{
                    backgroundColor: client.color,
                  }}
                >
                  {client.initials}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
            style={{ color: "#1D1D1F" }}
          >
            What They Say
          </motion.h2>

          {/* Accordion Testimonials */}
          <div className="space-y-4">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.button
                  onClick={() =>
                    setExpandedTestimonial(
                      expandedTestimonial === testimonial.id
                        ? null
                        : testimonial.id
                    )
                  }
                  className="w-full text-left p-6 rounded-xl backdrop-blur-md border transition-all duration-300"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                    borderColor:
                      expandedTestimonial === testimonial.id
                        ? "rgba(255, 99, 71, 0.5)"
                        : "rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3
                        className="text-lg font-bold mb-1"
                        style={{ color: "#1D1D1F" }}
                      >
                        {testimonial.author}
                      </h3>
                      <p
                        className="text-sm"
                        style={{ color: "rgba(29, 29, 31, 0.6)" }}
                      >
                        {testimonial.role}
                      </p>
                    </div>
                    <motion.div
                      animate={{
                        rotate:
                          expandedTestimonial === testimonial.id ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      style={{ color: "#FF6347" }}
                    >
                      ▼
                    </motion.div>
                  </div>

                  {/* Expanded Quote */}
                  <AnimatePresence>
                    {expandedTestimonial === testimonial.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t"
                        style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
                      >
                        <p
                          className="text-base leading-relaxed"
                          style={{ color: "rgba(29, 29, 31, 0.8)" }}
                        >
                          &quot;{testimonial.quote}&quot;
                        </p>
                        <div className="mt-4 flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} style={{ color: "#FFD700" }}>
                              ★
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Carousel */}
      <section className="w-full py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12"
            style={{ color: "#1D1D1F" }}
          >
            Featured Case Studies
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CASE_STUDIES.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div
                  className="p-8 rounded-xl backdrop-blur-md border transition-all duration-300"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                    borderColor: "rgba(255, 99, 71, 0.2)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-white mb-4"
                    style={{
                      backgroundColor: study.color,
                    }}
                  >
                    {study.logo}
                  </div>

                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ color: "#1D1D1F" }}
                  >
                    {study.title}
                  </h3>

                  <p
                    className="mb-4"
                    style={{ color: "rgba(29, 29, 31, 0.7)" }}
                  >
                    {study.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "#FF6347" }}
                    >
                      Results:
                    </p>
                    <ul
                      className="text-sm space-y-1"
                      style={{ color: "rgba(29, 29, 31, 0.7)" }}
                    >
                      {study.results.map((result, i) => (
                        <li key={i}>• {result}</li>
                      ))}
                    </ul>
                  </div>

                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-sm font-semibold transition-colors"
                    style={{ color: "#FF6347" }}
                  >
                    Read Full Case Study →
                  </motion.button>
                </div>
              </motion.div>
            ))}
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
              style={{ color: "#1D1D1F" }}
            >
              Let&apos;s Work Together
            </h2>
            <p
              className="text-lg mb-8"
              style={{ color: "rgba(29, 29, 31, 0.7)" }}
            >
              Join the studios and brands that trust Nature Guru to elevate
              their creative vision.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              style={{
                backgroundColor: "#FF6347",
                color: "#F5F5F7",
              }}
            >
              Start a Collaboration
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer Spacer */}
      <div className="h-32" />
    </div>
  );
}

const CLIENT_LOGOS = [
  { id: "1", initials: "NG", color: "#2E8B57" },
  { id: "2", initials: "DC", color: "#FF6347" },
  { id: "3", initials: "WB", color: "#1D1D1F" },
  { id: "4", initials: "PA", color: "#87CEEB" },
  { id: "5", initials: "FOX", color: "#FFD700" },
  { id: "6", initials: "UN", color: "#4169E1" },
  { id: "7", initials: "AMZ", color: "#FF9900" },
  { id: "8", initials: "NF", color: "#E50914" },
  { id: "9", initials: "DIS", color: "#113CCF" },
  { id: "10", initials: "PR", color: "#1F3A70" },
  { id: "11", initials: "SN", color: "#6BA3E0" },
  { id: "12", initials: "GG", color: "#F4AA4D" },
];

const TESTIMONIALS = [
  {
    id: "1",
    author: "Christopher Nolan",
    role: "Film Director",
    quote:
      "Nature Guru's approach to invisible effects transformed how we think about visual storytelling. Their technical mastery combined with artistic sensibility is unparalleled.",
  },
  {
    id: "2",
    author: "Sarah Chen",
    role: "Creative Director, Leading Studio",
    quote:
      "Working with Nature Guru was a game-changer for our production. They delivered not just effects, but solutions that elevated the entire project.",
  },
  {
    id: "3",
    author: "Marcus Johnson",
    role: "Executive Producer",
    quote:
      "Their commitment to transparency and collaboration made the entire production smoother. Plus, the quality speaks for itself.",
  },
  {
    id: "4",
    author: "Elena Rodriguez",
    role: "VFX Supervisor",
    quote:
      "Nature Guru brings a level of innovation and execution that's hard to find. They're partners in the truest sense.",
  },
];

const CASE_STUDIES = [
  {
    id: "1",
    logo: "✦",
    color: "#2E8B57",
    title: "Nebula Odyssey",
    description:
      "A sci-fi epic requiring cutting-edge space visualization and alien creature design.",
    results: [
      "Golden Globe for Best Visual Effects",
      "4M+ viewer engagement",
      "Industry-leading render optimization",
    ],
  },
  {
    id: "2",
    logo: "⚔",
    color: "#FF6347",
    title: "The Last Guardian",
    description:
      "Fantasy film featuring complex creature animation and environmental magic effects.",
    results: [
      "BAFTA nomination for Best Craft",
      "Set new standard for creature realism",
      "8-month ahead of schedule",
    ],
  },
  {
    id: "3",
    logo: "🏢",
    color: "#87CEEB",
    title: "Urban Genesis",
    description:
      "Large-scale commercial project with procedural city generation.",
    results: [
      "Emmy award recognition",
      "50% reduction in iteration time",
      "Pioneered real-time rendering pipeline",
    ],
  },
  {
    id: "4",
    logo: "⚛",
    color: "#FFD700",
    title: "Quantum Realm",
    description: "Educational documentary with particle physics visualization.",
    results: [
      "Streamies Award for Animation",
      "Used in 500+ classrooms worldwide",
      "Published in 3 research papers",
    ],
  },
];
