import React from "react";
import { motion } from "framer-motion";
import { Globe2, Award, Layers, Code2 } from "lucide-react";

const pillars = [
  {
    icon: Award,
    title: "6 Years Experience",
    desc: "Battle-tested marketplace strategies refined since 2019.",
    link: "/experience-journey",
  },
  {
    icon: Globe2,
    title: "International Clients",
    desc: "Serving sellers across USA, UK, Australia, Canada & EU.",
    link: "/international-clients",
  },
  {
    icon: Layers,
    title: "Multi-Channel Expertise",
    desc: "Amazon, eBay, Walmart, TikTok Shop — managed end-to-end.",
    link: "/multi-channel-expertise",
  },
  {
    icon: Code2,
    title: "WordPress & Store Dev",
    desc: "Custom Shopify, WooCommerce & headless commerce builds.",
    link: "/wordpress-store-dev",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 lg:py-40 bg-[#070707]"
      data-testid="about-section"
    >
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FFC300] mb-4">
            // 01 — About Hubofecom
          </p>

          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter text-white leading-tight">
            Built for{" "}
            <span className="text-[#FFC300]">
              global commerce.
            </span>
          </h2>

          <p className="mt-6 text-base md:text-lg text-white/65 leading-relaxed">
            Hubofecom is a successful eCommerce development and management agency
            helping businesses grow across USA, UK, AUS, CA, and international
            online marketplaces. We specialize in building, scaling, and managing
            profitable eCommerce stores for global clients.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {["USA", "UK", "AUS", "CA", "EU"].map((m) => (
              <span
                key={m}
                className="px-4 py-2 rounded-full border border-[#FFC300]/25 bg-[#FFC300]/5 text-[#FFC300] text-xs font-mono uppercase tracking-[0.2em]"
              >
                {m}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">

          {pillars.map((p, i) => {
            const Icon = p.icon;

            return (
              <motion.a
                href={p.link}
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group relative p-7 rounded-3xl bg-[#0F0F0F] border border-white/5 hover:border-[#FFC300]/40 hover:shadow-[0_0_50px_rgba(255,195,0,0.15)] transition-all duration-500 overflow-hidden cursor-pointer"
              >

                <div className="absolute inset-0 bg-gradient-to-br from-[#FFC300]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative z-10">

                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFE066] to-[#B8860B] mb-5 shadow-[0_0_24px_rgba(255,195,0,0.3)] group-hover:scale-110 transition duration-500">
                    <Icon
                      size={24}
                      className="text-black"
                      strokeWidth={2.5}
                    />
                  </div>

                  <h3 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-[#FFC300] transition duration-300">
                    {p.title}
                  </h3>

                  <p className="text-sm text-white/55 leading-relaxed">
                    {p.desc}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-[#FFC300] text-sm font-medium opacity-0 group-hover:opacity-100 transition duration-500">
                    View Details
                    <span className="group-hover:translate-x-1 transition duration-300">
                      →
                    </span>
                  </div>

                </div>

              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
