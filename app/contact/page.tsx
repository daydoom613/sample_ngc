"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GlassPrismNavbar } from "@/components/GlassPrismNavbar";

/**
 * Contact Page
 * Simple contact form with location information and social links
 */
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "film",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "film",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

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
            Let&apos;s Create
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            style={{ color: "rgba(29, 29, 31, 0.7)" }}
          >
            Have a project in mind? We&apos;d love to hear about it. Get in touch
            with our team today.
          </p>
        </motion.div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="w-full py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl font-bold mb-8"
              style={{ color: "#1D1D1F" }}
            >
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "#1D1D1F" }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg backdrop-blur-md border transition-all focus:outline-none focus:border-opacity-100"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    color: "#1D1D1F",
                  }}
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "#1D1D1F" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg backdrop-blur-md border transition-all focus:outline-none focus:border-opacity-100"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    color: "#1D1D1F",
                  }}
                  placeholder="john@example.com"
                />
              </div>

              {/* Company */}
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "#1D1D1F" }}
                >
                  Company / Studio
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg backdrop-blur-md border transition-all focus:outline-none focus:border-opacity-100"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    color: "#1D1D1F",
                  }}
                  placeholder="Your Company"
                />
              </div>

              {/* Project Type */}
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "#1D1D1F" }}
                >
                  Project Type
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg backdrop-blur-md border transition-all focus:outline-none focus:border-opacity-100"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    color: "#1D1D1F",
                  }}
                >
                  <option value="film">Film / Narrative</option>
                  <option value="commercial">Commercial / Brand</option>
                  <option value="documentary">Documentary</option>
                  <option value="music">Music Video</option>
                  <option value="interactive">Interactive / Web</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "#1D1D1F" }}
                >
                  Tell us about your project
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg backdrop-blur-md border transition-all focus:outline-none focus:border-opacity-100 resize-none"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    color: "#1D1D1F",
                  }}
                  placeholder="Describe your project, timeline, and vision..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-3 rounded-lg font-semibold text-white transition-all"
                style={{ backgroundColor: "#FF6347" }}
              >
                {submitted ? "✓ Message Sent!" : "Send Message"}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Office */}
            <div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "#1D1D1F" }}
              >
                Los Angeles Studio
              </h3>
              <div
                className="p-6 rounded-xl backdrop-blur-md border"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.06)",
                  borderColor: "rgba(46, 139, 87, 0.2)",
                }}
              >
                <p style={{ color: "rgba(29, 29, 31, 0.8)" }} className="mb-3">
                  <strong>Address:</strong>
                  <br />
                  1234 Sunset Boulevard
                  <br />
                  Los Angeles, CA 90028
                </p>
                <p style={{ color: "rgba(29, 29, 31, 0.8)" }} className="mb-3">
                  <strong>Phone:</strong>
                  <br />
                  +1 (310) 555-0123
                </p>
                <p style={{ color: "rgba(29, 29, 31, 0.8)" }}>
                  <strong>Email:</strong>
                  <br />
                  hello@natureguru.com
                </p>
              </div>
            </div>

            {/* Remote Options */}
            <div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "#1D1D1F" }}
              >
                Remote Collaboration
              </h3>
              <div
                className="p-6 rounded-xl backdrop-blur-md border"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.06)",
                  borderColor: "rgba(46, 139, 87, 0.2)",
                }}
              >
                <p style={{ color: "rgba(29, 29, 31, 0.8)" }}>
                  We work with studios and creators globally. Whether you&apos;re in
                  Los Angeles, London, or Tokyo, we can collaborate seamlessly
                  through our remote-first pipeline.
                </p>
                <div className="mt-4 space-y-2">
                  <p style={{ color: "rgba(29, 29, 31, 0.7)" }}>
                    ✓ Real-time collaboration tools
                  </p>
                  <p style={{ color: "rgba(29, 29, 31, 0.7)" }}>
                    ✓ Cloud-based asset management
                  </p>
                  <p style={{ color: "rgba(29, 29, 31, 0.7)" }}>
                    ✓ Timezone flexibility
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "#1D1D1F" }}
              >
                Follow Us
              </h3>
              <div className="flex gap-4">
                {["Instagram", "LinkedIn", "Vimeo", "Twitter"].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-lg flex items-center justify-center backdrop-blur-md border transition-all"
                    style={{
                      backgroundColor: "rgba(255, 99, 71, 0.1)",
                      borderColor: "rgba(255, 99, 71, 0.3)",
                      color: "#FF6347",
                    }}
                  >
                    {social[0]}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Spacer */}
      <div className="h-32" />
    </div>
  );
}
