import React from "react";
import { motion } from "framer-motion";

const channels = [
  "Amazon",
  "eBay",
  "Walmart",
  "TikTok Shop",
  "Shopify",
  "WooCommerce",
];

export default function MultiChannelExpertise() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FFC300]/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FFC300]/5 blur-[120px]" />

      {/* Navbar */}
      <div className="relative z-10 px-6 md:px-16 py-8 flex items-center justify-between border-b border-white/5">

        <a
          href="/"
          className="flex items-center gap-3"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFE066] to-[#B8860B] flex items-center justify-center text-black font-black text-2xl shadow-[0_0_30px_rgba(255,195,0,0.35)]">
            H
          </div>

          <h1 className="text-3xl font-black tracking-tight">
            Hubofecom<span className="text-[#FFC300]">.</span>
          </h1>
        </a>

        <a
          href="/project-form"
          className="px-7 py-3 rounded-full bg-[#FFC300] text-black font-bold hover:scale-105 transition duration-300"
        >
          Hire Me
        </a>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 px-6 md:px-16 py-24">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl"
        >

          <p className="uppercase tracking-[0.4em] text-[#FFC300] text-sm mb-6">
            // Multi-Channel Expertise
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-none">
            Multi-Channel
            <br />
            <span className="text-[#FFC300]">
              eCommerce Experts.
            </span>
          </h1>

          <p className="mt-10 text-white/60 text-lg leading-relaxed max-w-4xl">
            We help brands scale across multiple marketplaces and eCommerce
            platforms with complete management, optimization, automation,
            listing creation, advertising strategies, store development
            and conversion-focused experiences.
          </p>

          {/* Platforms */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">

            {channels.map((channel, i) => (
              <motion.div
                key={channel}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="p-8 rounded-3xl bg-[#0F0F0F] border border-white/10 hover:border-[#FFC300]/40 hover:shadow-[0_0_40px_rgba(255,195,0,0.15)] transition-all duration-500"
              >

                <h2 className="text-4xl font-black text-[#FFC300]">
                  {channel}
                </h2>

                <p className="mt-4 text-white/55 leading-relaxed">
                  Professional marketplace management, optimization,
                  scaling and growth solutions for {channel} businesses.
                </p>

              </motion.div>
            ))}

          </div>

          {/* Services */}
          <div className="mt-24">

            <h2 className="text-4xl md:text-5xl font-black">
              What We Manage
            </h2>

            <div className="mt-12 grid md:grid-cols-2 gap-6">

              {[
                "Store Setup & Development",
                "Product Listing Optimization",
                "SEO & Conversion Optimization",
                "Marketplace Management",
                "PPC & Advertising",
                "Inventory & Order Management",
              ].map((service, i) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                  }}
                  className="p-7 rounded-3xl bg-[#111] border border-white/10"
                >

                  <div className="flex items-center gap-4">

                    <div className="w-4 h-4 rounded-full bg-[#FFC300]" />

                    <h3 className="text-2xl font-bold">
                      {service}
                    </h3>

                  </div>

                </motion.div>
              ))}

            </div>

          </div>

          {/* Bottom Stats */}
          <div className="mt-24 grid md:grid-cols-3 gap-6">

            <div className="p-10 rounded-3xl bg-[#111] border border-white/10">
              <h2 className="text-5xl font-black text-[#FFC300]">
                6+
              </h2>

              <p className="mt-4 text-white/60">
                Platforms Managed
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-[#111] border border-white/10">
              <h2 className="text-5xl font-black text-[#FFC300]">
                Global
              </h2>

              <p className="mt-4 text-white/60">
                Marketplace Experience
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-[#111] border border-white/10">
              <h2 className="text-5xl font-black text-[#FFC300]">
                24/7
              </h2>

              <p className="mt-4 text-white/60">
                Business Growth Focus
              </p>
            </div>

          </div>

        </motion.div>
      </div>
    </div>
  );
}
