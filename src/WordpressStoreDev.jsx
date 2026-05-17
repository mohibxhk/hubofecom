import React from "react";
import { motion } from "framer-motion";

const services = [
  "Custom WordPress Development",
  "WooCommerce Store Setup",
  "High-Converting UI/UX Design",
  "Speed Optimization",
  "SEO Optimized Structure",
  "Mobile Responsive Design",
  "Payment Gateway Integration",
  "Premium Product Pages",
];

export default function WordpressStoreDev() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* Glow Effects */}
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
          Start Project
        </a>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 px-6 md:px-16 py-24">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-7xl"
        >

          <p className="uppercase tracking-[0.4em] text-[#FFC300] text-sm mb-6">
            // WordPress & Store Development
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-none">
            Premium
            <br />
            <span className="text-[#FFC300]">
              WordPress Stores.
            </span>
          </h1>

          <p className="mt-10 text-white/60 text-lg leading-relaxed max-w-4xl">
            We build ultra-premium WordPress and WooCommerce websites
            designed to help businesses grow faster, look more professional,
            and convert visitors into paying customers. Every website is
            custom-designed with modern UI/UX, lightning-fast performance,
            mobile responsiveness, SEO optimization, and premium animations.
          </p>

          <p className="mt-6 text-white/50 text-lg leading-relaxed max-w-4xl">
            Whether you need an eCommerce store, business website,
            portfolio, booking platform, or a custom WooCommerce solution,
            Hubofecom creates scalable websites tailored specifically
            for your brand identity and business goals.
          </p>

          {/* Cards */}
          <div className="mt-20 grid md:grid-cols-2 gap-8">

            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="p-10 rounded-3xl bg-[#0F0F0F] border border-white/10 hover:border-[#FFC300]/40 transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,195,0,0.15)]"
            >

              <h2 className="text-4xl font-black text-[#FFC300]">
                Modern Design
              </h2>

              <p className="mt-6 text-white/60 leading-relaxed text-lg">
                Stunning layouts with premium UI/UX inspired by
                world-class modern brands. Every section is carefully
                designed for trust, conversions and luxury feel.
              </p>

            </motion.div>

            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="p-10 rounded-3xl bg-[#0F0F0F] border border-white/10 hover:border-[#FFC300]/40 transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,195,0,0.15)]"
            >

              <h2 className="text-4xl font-black text-[#FFC300]">
                Fast & Optimized
              </h2>

              <p className="mt-6 text-white/60 leading-relaxed text-lg">
                Optimized for high speed performance, SEO rankings,
                mobile responsiveness and smooth user experience
                across all devices and screen sizes.
              </p>

            </motion.div>

          </div>

          {/* Services */}
          <div className="mt-28">

            <h2 className="text-5xl font-black">
              What You Get
            </h2>

            <div className="mt-14 grid md:grid-cols-2 gap-6">

              {services.map((service, i) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                  }}
                  whileHover={{
                    scale: 1.02,
                  }}
                  className="p-7 rounded-3xl bg-[#111] border border-white/10 hover:border-[#FFC300]/40 transition-all duration-300"
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

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-28 p-12 rounded-[40px] bg-gradient-to-r from-[#111] to-[#0A0A0A] border border-[#FFC300]/20"
          >

            <h2 className="text-5xl md:text-6xl font-black leading-tight">
              Ready To Build
              <br />
              <span className="text-[#FFC300]">
                Your Premium Store?
              </span>
            </h2>

            <p className="mt-8 text-white/60 text-lg max-w-3xl leading-relaxed">
              Let’s create a powerful online presence that helps your
              business stand out professionally and generate more sales.
              From design to development — everything is handled with
              premium quality and attention to detail.
            </p>

            <a
              href="/project-form"
              className="inline-block mt-10 px-10 py-5 rounded-full bg-[#FFC300] text-black font-black text-lg hover:scale-105 transition duration-300 shadow-[0_0_40px_rgba(255,195,0,0.35)]"
            >
              Start Your Project
            </a>

          </motion.div>

        </motion.div>

      </div>
    </div>
  );
}
