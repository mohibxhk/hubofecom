import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, Sparkles } from "lucide-react";
import ParticleField from "./ParticleField";

const HERO_BG =
  "https://static.prod-images.emergentagent.com/jobs/8ff3f2b7-ffbe-49df-8f10-f35a16dfc9ed/images/7bdf3ef87184796ba7114e3487199c2bd3996c6cdaf51dec5607b8630381fdb8.png";

const HERO_PORTRAIT =
  "https://images.unsplash.com/photo-1774804819708-61c4481d193d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMGRhcmslMjBtb2Rlcm58ZW58MHx8fHwxNzc4Nzk4NDYwfDA&ixlib=rb-4.1.0&q=85";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden pt-28 md:pt-32"
      data-testid="hero-section"
    >
      {/* Background image w/ overlay */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0A0A0A]" />
        <div className="absolute inset-0 grid-bg" />
      </div>

      <ParticleField count={32} />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 items-center min-h-[calc(100vh-7rem)]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="lg:col-span-7"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel">
            <Sparkles size={14} className="text-[#FFC300]" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#FFC300]">
              Global eCommerce and Website Development Agency · Since 2019
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mt-6 font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tighter text-white"
          >
            Scaling <span className="text-gradient-red-yellow">eCommerce Brands</span>
            <br />
            <span className="italic font-light text-white/80">Worldwide.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-xl text-base md:text-lg text-white/60 leading-relaxed"
          >
            We build premium websites using reat, CSS Tailwind, Modern Frame, node.js, Java Script and scale eCommerce brands through Shopify, WooCommerce, Amazon, eBay, Walmart & TikTok Shop with modern UI/UX, development and growth strategies worldwide.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-4">
            <button
             onClick={() => go("contact")}
              className="group relative inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-[#FFE066] to-[#B8860B] text-black font-semibold hover:shadow-[0_0_36px_rgba(255,195,0,0.55)] transition-all duration-300"
              data-testid="hero-cta-primary"
            >
              Get Started
              <ArrowDownRight size={18} className="group-hover:rotate-45 transition-transform" />
            </button>
            <button
              onClick={() => go("services")}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/15 text-white font-semibold hover:border-[#FFC300] hover:text-[#FFC300] transition-colors"
              data-testid="hero-cta-secondary"
            >
              View Services
            </button>
            <button
              onClick={() => go("contact")}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-[#FFC300]/30 text-[#FFC300] font-semibold hover:bg-[#FFC300]/10 transition-colors"
              data-testid="hero-cta-contact"
            >
              Contact Us
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-14 flex flex-wrap gap-8 md:gap-12 font-mono text-xs uppercase tracking-[0.2em] text-white/40">
            <div><span className="block text-3xl text-white font-heading font-black">6+</span>years</div>
            <div><span className="block text-3xl text-white font-heading font-black">500+</span>stores</div>
            <div><span className="block text-3xl text-white font-heading font-black">4</span>continents</div>
          </motion.div>
        </motion.div>

        {/* Portrait visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto animate-float-y">
            {/* Glow ring */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#FFE066]/30 via-transparent to-[#B8860B]/30 blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10">
              <img
                src={HERO_PORTRAIT}
                alt="Portrait"
                className="w-full h-full object-cover grayscale-[15%] contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              {/* Floating badge */}
              <div className="absolute bottom-5 left-5 right-5 glass-panel rounded-2xl p-4 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#FFC300] animate-pulse-glow" />
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
                 PREMIUM ECOMMERCE & WEB SOLUTIONS
                </div>
              </div>
            </div>
            {/* Corner accents */}
            <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-[#FFC300]" />
            <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-[#FFC300]" />
          </div>
        </motion.div>
      </div>

      {/* Bottom marquee strip */}
      <div className="relative mt-12 border-y border-white/5 bg-black/40 overflow-hidden">
        <div className="flex gap-12 py-4 whitespace-nowrap animate-marquee font-mono text-xs uppercase tracking-[0.3em] text-white/40">
          {Array.from({ length: 2 }).map((_, j) => (
            <React.Fragment key={j}>
              {[
                "Amazon",
                "eBay",
                "Walmart",
                "TikTok Shop",
                "Shopify",
                "WooCommerce",
                "USA · UK · AUS · CA",
                "Multi-channel",
              ].map((t, i) => (
                <span key={`${j}-${i}`} className="flex items-center gap-12">
                  {t}
                  <span className="text-[#FFC300]">◆</span>
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
