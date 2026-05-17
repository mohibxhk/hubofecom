import React from "react";
import { motion } from "framer-motion";

export default function ProjectForm() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-20">
      
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <p className="uppercase tracking-[0.4em] text-[#FFC300] text-sm mb-4">
          // Client Project Form
        </p>

        <h1 className="text-5xl md:text-7xl font-black leading-tight">
          Let’s Build
          <br />
          Your Dream Website
        </h1>

        <p className="mt-6 text-white/60 text-lg max-w-2xl">
          Fill out the details below so we can understand your project,
          business goals and design vision.
        </p>

        <div className="mt-14 space-y-8">

          <div className="grid md:grid-cols-2 gap-6">
            <input
              placeholder="Your Name"
              className="bg-[#111] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-[#FFC300]"
            />

            <input
              placeholder="Business Email"
              className="bg-[#111] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-[#FFC300]"
            />
          </div>

          <input
            placeholder="Business / Brand Name"
            className="w-full bg-[#111] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-[#FFC300]"
          />

          <select className="w-full bg-[#111] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-[#FFC300]">
            <option>What type of website do you need?</option>
            <option>eCommerce Website</option>
            <option>Portfolio Website</option>
            <option>Business Website</option>
            <option>Booking Website</option>
            <option>Custom Web App</option>
          </select>

          <select className="w-full bg-[#111] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-[#FFC300]">
            <option>Preferred Technology</option>
            <option>React.js</option>
            <option>Shopify</option>
            <option>WooCommerce</option>
            <option>WordPress</option>
            <option>I need recommendation</option>
          </select>

          <textarea
            rows="5"
            placeholder="Describe your project and required features..."
            className="w-full bg-[#111] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-[#FFC300]"
          />

          <textarea
            rows="3"
            placeholder="Reference websites you like..."
            className="w-full bg-[#111] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-[#FFC300]"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <select className="bg-[#111] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-[#FFC300]">
              <option>Project Budget</option>
              <option>$500 - $1000</option>
              <option>$1000 - $3000</option>
              <option>$3000 - $10000</option>
              <option>$10000+</option>
            </select>

            <select className="bg-[#111] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-[#FFC300]">
              <option>Timeline</option>
              <option>1 Week</option>
              <option>2-4 Weeks</option>
              <option>1-2 Months</option>
              <option>Flexible</option>
            </select>
          </div>

          <motion.button
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.96 }}
  onClick={() => {
    alert("Project Request Submitted Successfully!");
  }}
  className="mt-4 px-10 py-5 rounded-full bg-[#FFC300] text-black font-bold text-lg shadow-[0_0_40px_rgba(255,195,0,0.35)]"
>
  Submit Project Request
</motion.button>

        </div>
      </motion.div>
    </div>
  );
}
