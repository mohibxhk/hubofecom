import React from "react";
import { motion } from "framer-motion";

export default function ExperienceJourney() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-20">

      <a
        href="/"
        className="inline-flex items-center gap-3 mb-16"
      >
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFE066] to-[#B8860B] flex items-center justify-center text-black font-black text-2xl shadow-[0_0_30px_rgba(255,195,0,0.35)]">
          H
        </div>

        <h1 className="text-3xl font-black tracking-tight">
          Hubofecom<span className="text-[#FFC300]">.</span>
        </h1>
      </a>

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl"
      >
        <p className="uppercase tracking-[0.4em] text-[#FFC300] text-sm mb-5">
          // 6 Years Journey
        </p>

        <h1 className="text-6xl md:text-8xl font-black leading-none">
          6 Years
          <br />
          Experience
        </h1>

        <p className="mt-10 text-white/60 text-lg leading-relaxed max-w-3xl">
          Since 2019, we have helped international brands scale their
          eCommerce businesses across Amazon, eBay, Shopify, Walmart,
          WooCommerce and TikTok Shop marketplaces.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-6">

          <div className="p-8 rounded-3xl bg-[#111] border border-white/10">
            <h2 className="text-[#FFC300] text-5xl font-black">150+</h2>
            <p className="mt-4 text-white/60">
              Successful Projects Delivered
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#111] border border-white/10">
            <h2 className="text-[#FFC300] text-5xl font-black">20+</h2>
            <p className="mt-4 text-white/60">
              International Clients
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#111] border border-white/10">
            <h2 className="text-[#FFC300] text-5xl font-black">6</h2>
            <p className="mt-4 text-white/60">
              Years of Marketplace Experience
            </p>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
