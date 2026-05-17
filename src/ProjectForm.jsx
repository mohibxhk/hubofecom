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

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="mt-14 space-y-8"
        >
          <input
            type="hidden"
            name="access_key"
            value="fb710372-b6f6-44cb-a6c7-c7218bb8c842"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <input
              name="name"
              placeholder="Your Name"
              className="bg-[#111] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-[#FFC300]"
            />

            <input
              name="email"
              placeholder="Business Email"
              className="bg-[#111] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-[#FFC300]"
            />
          </div>

          <input
            name="brand"
            placeholder="Business / Brand Name"
            className="w-full bg-[#111] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-[#FFC300]"
          />

          <select
            name="website_type"
            className="w-full bg-[#111] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-[#FFC300]"
          >
            <option>What type of website do you need?</option>
            <option>eCommerce Website</option>
            <option>Portfolio Website</option>
            <option>Business Website</option>
            <option>Booking Website</option>
            <option>Custom Web App</option>
          </select>

          <select
            name="technology"
            className="w-full bg-[#111] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-[#FFC300]"
          >
            <option>Preferred Technology</option>
            <option>React.js</option>
            <option>Shopify</option>
            <option>WooCommerce</option>
            <option>WordPress</option>
            <option>I need recommendation</option>
          </select>

          <textarea
            name="project_details"
            rows="5"
            placeholder="Describe your project and required features..."
            className="w-full bg-[#111] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-[#FFC300]"
          />

          <textarea
            name="references"
            rows="3"
            placeholder="Reference websites you like..."
            className="w-full bg-[#111] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-[#FFC300]"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <select
              name="budget"
              className="bg-[#111] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-[#FFC300]"
            >
              <option>Project Budget</option>
              <option>$500 - $1000</option>
              <option>$1000 - $3000</option>
              <option>$3000 - $10000</option>
              <option>$10000+</option>
            </select>

            <select
              name="timeline"
              className="bg-[#111] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-[#FFC300]"
            >
              <option>Timeline</option>
              <option>1 Week</option>
              <option>2-4 Weeks</option>
              <option>1-2 Months</option>
              <option>Flexible</option>
            </select>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="mt-4 px-10 py-5 rounded-full bg-[#FFC300] text-black font-bold text-lg shadow-[0_0_40px_rgba(255,195,0,0.35)]"
          >
            Submit Project Request
          </motion.button>

        </form>
      </motion.div>
    </div>
  );
}
