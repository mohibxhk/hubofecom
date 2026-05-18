import React from "react";
import { motion } from "framer-motion";

const countries = [
  {
    name: "USA",
    description:
      "Helping American eCommerce brands scale with high-converting Shopify stores, Amazon growth strategies, and premium web solutions.",
  },
  {
    name: "United Kingdom",
    description:
      "Providing modern eCommerce development and conversion-focused websites for UK businesses and online brands.",
  },
  {
    name: "Canada",
    description:
      "Delivering powerful Shopify, WooCommerce, and custom web experiences for fast-growing Canadian companies.",
  },
  {
    name: "Germany",
    description:
      "Building sleek, performance-driven eCommerce stores and business websites tailored for the German market.",
  },
  {
    name: "France",
    description:
      "Creating premium digital commerce solutions and modern websites for ambitious brands across France.",
  },
  {
    name: "Italy",
    description:
      "Supporting Italian businesses with responsive websites, branding solutions, and scalable online stores.",
  },
  {
    name: "Australia",
    description:
      "Helping Australian brands grow online with custom eCommerce experiences and advanced website development.",
  },
  {
    name: "UAE",
    description:
      "Delivering luxury-style eCommerce stores and premium web development services for businesses in the UAE.",
  },
];

export default function InternationalClients() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">

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

      {/* Hero */}
      <div className="relative z-10 px-6 md:px-16 py-24">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl"
        >

          <p className="uppercase tracking-[0.4em] text-[#FFC300] text-sm mb-6">
            // International Clients
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-none">
            Trusted by
            <br />
            <span className="text-[#FFC300]">
              Global Clients.
            </span>
          </h1>

          <p className="mt-10 text-white/60 text-lg leading-relaxed max-w-4xl">
            Over the years, Hubofecom has successfully worked with clients
            from multiple countries including the United States, United Kingdom,
            Canada, Germany, France, Italy, Australia and UAE.
            We help brands grow through premium eCommerce development,
            marketplace management, Shopify stores, WooCommerce solutions,
            Amazon optimization and modern web experiences.
          </p>

          <div className="mt-16 grid md:grid-cols-4 gap-5">

            {countries.map((country, i) => (
              <motion.div
                key={country.name}
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
                <h2 className="text-3xl font-black text-[#FFC300]">
                  {country.name}
                </h2>

                <p className="mt-4 text-white/55 text-sm leading-relaxed">
                  {country.description}
                </p>
              </motion.div>
            ))}

          </div>

          {/* Bottom Stats */}
          <div className="mt-24 grid md:grid-cols-3 gap-6">

            <div className="p-10 rounded-3xl bg-[#111] border border-white/10">
              <h2 className="text-5xl font-black text-[#FFC300]">
                20+
              </h2>

              <p className="mt-4 text-white/60">
                International Brands Served
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-[#111] border border-white/10">
              <h2 className="text-5xl font-black text-[#FFC300]">
                98%
              </h2>

              <p className="mt-4 text-white/60">
                Client Satisfaction Rate
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-[#111] border border-white/10">
              <h2 className="text-5xl font-black text-[#FFC300]">
                Global
              </h2>

              <p className="mt-4 text-white/60">
                Multi-country Experience
              </p>
            </div>

          </div>

        </motion.div>
      </div>
    </div>
  );
}
