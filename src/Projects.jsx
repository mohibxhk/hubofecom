import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, Sparkles, CheckCircle2, TrendingUp } from "lucide-react";
import Navigation from "./Navigation"; // Path fixed (same folder)

const projectsData = [
  {
    id: 1,
    title: "Aura Luxury E-Commerce",
    category: "Shopify",
    description: "High-converting luxury fashion & lifestyle store build with custom Liquid sections, instant search, and headless performance.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    tags: ["Shopify Plus", "Liquid", "Tailwind CSS", "CRO"],
    stats: "+145% Revenue Growth",
    link: "https://example.com",
    featured: true,
  },
  {
    id: 2,
    title: "Luxe Living Interiors",
    category: "Custom React",
    description: "Custom landscape & architecture booking platform built with Next.js/React, interactive 3D view, and real-time appointment system.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Node.js"],
    stats: "3.2x Conversion Rate",
    link: "https://example.com",
    featured: false,
  },
  {
    id: 3,
    title: "Urban Threads Apparel",
    category: "WooCommerce",
    description: "Scalable global street-wear storefront integrated with multi-currency checkout, automated inventory & TikTok Shop sync.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    tags: ["WooCommerce", "WordPress", "TikTok Shop", "Stripe"],
    stats: "$250K+ Monthly GMV",
    link: "https://example.com",
    featured: false,
  },
  {
    id: 4,
    title: "Apex Fitness Equipment",
    category: "Shopify",
    description: "Custom fitness store redesign focused on speed optimization, subscription upsells, and sub-second page loads.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
    tags: ["Shopify", "Klaviyo", "Recharge", "SEO"],
    stats: "98 PageSpeed Score",
    link: "https://example.com",
    featured: false,
  },
  {
    id: 5,
    title: "Velox SaaS Analytics",
    category: "Custom React",
    description: "E-commerce dashboard web application providing real-time store metrics, customer analytics, and revenue prediction.",
    image: "https://images.unsplash.com/photo-1542744094-3a3121699563?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "TypeScript", "Chart.js", "Tailwind"],
    stats: "10k+ Active Users",
    link: "https://example.com",
    featured: false,
  },
  {
    id: 6,
    title: "Glow Essentials Cosmetics",
    category: "Growth & SEO",
    description: "End-to-end e-commerce optimization, custom UI layout redesign, and targeted funnel optimization for viral skincare brand.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
    tags: ["Shopify", "Growth UI", "SEO", "Meta Ads"],
    stats: "4.8x ROI Delivered",
    link: "https://example.com",
    featured: false,
  },
];

const categories = ["All", "Shopify", "Custom React", "WooCommerce", "Growth & SEO"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  const featuredProject = projectsData.find((p) => p.featured);

  return (
    <div className="min-h-screen bg-[#050816] text-white selection:bg-[#FFC300] selection:text-black">
      <Navigation />

      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        
        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E3A8A]/20 border border-[#FFC300]/30 text-[#FFC300] text-xs font-semibold uppercase tracking-wider shadow-[0_0_20px_rgba(255,195,0,0.15)]"
          >
            <Sparkles className="w-4 h-4" /> Selected Portfolio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight leading-tight"
          >
            Crafting Digital Success for{" "}
            <span className="bg-gradient-to-r from-[#FFD84D] via-[#FFC300] to-[#B8860B] bg-clip-text text-transparent">
              Global Brands.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70 text-base md:text-lg leading-relaxed"
          >
            Explore our high-converting e-commerce builds, custom web applications, and brand scaling projects crafted with modern frameworks and strategy.
          </motion.p>
        </div>

        {/* CATEGORY FILTER TABS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center items-center gap-3"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-[#FFC300] to-[#FFB800] text-black shadow-[0_0_25px_rgba(255,195,0,0.35)] scale-105"
                  : "bg-[#0b1026] text-white/70 border border-[#1E3A8A]/30 hover:border-[#FFC300]/50 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* FEATURED CASE STUDY */}
        {activeCategory === "All" && featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 group relative rounded-3xl bg-gradient-to-br from-[#0b102b] via-[#050816] to-[#0d1436] border border-[#FFC300]/30 p-6 md:p-10 overflow-hidden shadow-[0_0_50px_rgba(0,80,255,0.15)] hover:border-[#FFC300] transition-all duration-500"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFC300]/10 text-[#FFC300] text-xs font-bold uppercase tracking-wider">
                  Featured Case Study
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white group-hover:text-[#FFC300] transition-colors">
                  {featuredProject.title}
                </h2>
                <p className="text-white/70 text-base leading-relaxed">
                  {featuredProject.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-md bg-[#131b3e] text-white/80 border border-[#1E3A8A]/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-[#1E3A8A]/30">
                  <div className="flex items-center gap-2 text-[#FFC300] font-bold text-sm">
                    <TrendingUp className="w-5 h-5" />
                    <span>{featuredProject.stats}</span>
                  </div>
                  <a
                    href={featuredProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFC300] text-black font-bold text-sm hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,195,0,0.3)]"
                  >
                    View Project <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 relative overflow-hidden rounded-2xl bg-[#131b3e] border border-[#1E3A8A]/30 group-hover:scale-[1.02] transition-transform duration-500">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-80 object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* PROJECTS GRID */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#0b1026] border border-[#1E3A8A]/30 rounded-3xl overflow-hidden hover:border-[#FFC300]/60 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(0,80,255,0.2)]"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-[#131b3e]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-[#050816]/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-[#FFC300] border border-[#FFC300]/30">
                    {project.category}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#FFC300] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-xs rounded bg-[#131b3e] text-white/70 border border-[#1E3A8A]/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 mt-4 border-t border-[#1E3A8A]/20 flex items-center justify-between">
                <span className="text-xs font-bold text-[#FFC300] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {project.stats}
                </span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#FFC300] transition-colors"
                >
                  Live Demo <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-28 relative rounded-3xl bg-gradient-to-r from-[#0b102b] via-[#121b44] to-[#0b102b] border border-[#FFC300]/40 p-10 md:p-16 text-center overflow-hidden shadow-[0_0_60px_rgba(255,195,0,0.15)]"
        >
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white">
              Ready to Turn Your Vision into Reality?
            </h2>
            <p className="text-white/70 text-base md:text-lg">
              Let’s build a stunning, high-converting e-commerce platform or custom website for your business.
            </p>
            <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
              <a
                href="/#contact"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FFC300] to-[#FFB800] text-black font-bold text-base hover:scale-105 hover:shadow-[0_0_35px_rgba(255,195,0,0.5)] transition-all duration-300"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </motion.div>

      </main>
    </div>
  );
}
