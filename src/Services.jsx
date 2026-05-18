import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Store,
  ShoppingBag,
  Music2,
  ShoppingCart,
  Globe,
  Search,
  ListChecks,
  Headphones,
  Package,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "Website Development",
    desc: "Modern responsive websites using React, Tailwind CSS, JavaScript, Framer Motion, Node.js and Vercel deployment.",
    link: "/website-development",
  },

  {
    title: "Amazon Store Management",
    desc: "FBA/FBM operations, PPC campaigns, A+ content and Brand Registry mastery.",
    link: "/amazon-store-management",
  },

  {
    title: "Walmart Marketplace Management",
    desc: "Approval, catalog onboarding, repricing and Walmart Connect ad management.",
    link: "/walmart-marketplace-management",
  },

  {
    title: "TikTok Shop Management",
    desc: "Affiliate seeding, live-shopping setup and viral content commerce strategy.",
    link: "/tiktok-shop-management",
  },

  {
    title: "Shopify Store Development",
    desc: "Premium custom themes, headless storefronts and full-stack Shopify Plus builds.",
    link: "/shopify-store-development",
  },

  {
    title: "WooCommerce Development",
    desc: "WordPress eCommerce, custom plugins, payment integrations and speed tuning.",
    link: "/woocommerce-development",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 lg:py-40"
      data-testid="services-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FFC300] mb-4">
            // 02 — What we do
          </p>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter text-white">
            Full-stack eCommerce,
            <br />
            <span className="text-gradient-red-yellow">end to end.</span>
          </h2>
          <p className="mt-6 text-lg text-white/60 max-w-xl">
            From marketplace approval to seven-figure scale — every channel,
            every store, one accountable agency partner.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                whileHover={{ y: -8 }}
                className="group relative p-8 md:p-10 rounded-2xl bg-[#0F0F0F] border border-white/5 overflow-hidden hover:border-[#FFC300]/40 hover:shadow-[0_0_40px_rgba(255,195,0,0.15)] transition-all duration-500"
                data-testid={`service-card-${i}`}
              >
                <div className={`pointer-events-none absolute -top-20 -right-20 w-56 h-56 rounded-full bg-gradient-to-br ${s.accent} opacity-0 group-hover:opacity-25 blur-3xl transition-opacity duration-700`} />

                <div className={`relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${s.accent} mb-6 shadow-[0_0_24px_rgba(255,195,0,0.35)]`}>
                  <Icon size={26} className="text-black" strokeWidth={2.5} />
                </div>

                <h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-3">
                  {s.title}
                </h3>
                <p className="text-white/55 leading-relaxed text-sm md:text-base">
                  {s.desc}
                </p>

                <a
                  href={s.link}
  className="mt-8 flex items-center gap-2 text-white/40 group-hover:text-[#FFC300] transition-colors font-mono text-xs uppercase tracking-[0.2em]"
>
  Learn more
  <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform" />
</a>

                <div className="absolute top-6 right-8 font-mono text-xs text-white/15">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
