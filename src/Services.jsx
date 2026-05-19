import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Store,
  ShoppingBag,
  Music2,
  ShoppingCart,
  Globe,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "Website Development",
    price: "€500",
    desc: "Modern responsive websites using React, Tailwind CSS, JavaScript, Framer Motion, Node.js and Vercel deployment.",
    link: "/website-development",
    payment: "https://buy.stripe.com/test_4gM9AU6IY8j4ceO6zl83C00",
    icon: Code2,
    accent: "from-[#FFD84D] to-[#B8860B]",
  },

  {
    title: "Amazon Store Management",
    price: "€400",
    desc: "FBA/FBM operations, PPC campaigns, A+ content and Brand Registry mastery.",
    link: "/amazon-store-management",
    payment: "https://buy.stripe.com/test_28EfZi2sI7f05Qq0aX83C01",
    icon: Store,
    accent: "from-[#FFD84D] to-[#B8860B]",
  },

  {
    title: "Walmart Marketplace Management",
    price: "€400",
    desc: "Approval, catalog onboarding, repricing and Walmart Connect ad management.",
    link: "/walmart-marketplace-management",
    payment: "https://buy.stripe.com/test_3cI7sMaZearcfr07Dp83C02",
    icon: ShoppingBag,
    accent: "from-[#FFD84D] to-[#B8860B]",
  },

  {
    title: "TikTok Shop Management",
    price: "€300",
    desc: "Affiliate seeding, live-shopping setup and viral content commerce strategy.",
    link: "/tiktok-shop-management",
    payment: "https://buy.stripe.com/test_5kQ7sMd7m9n8fr03n983C03",
    icon: Music2,
    accent: "from-[#FFD84D] to-[#B8860B]",
  },

  {
    title: "Shopify Store Development",
    price: "€450",
    desc: "Premium custom themes, headless storefronts and full-stack Shopify Plus builds.",
    link: "/shopify-store-development",
    payment: "https://buy.stripe.com/test_7sY9AU5EUeHs7Yyg9V83C04",
    icon: ShoppingCart,
    accent: "from-[#FFD84D] to-[#B8860B]",
  },

  {
    title: "WooCommerce Development",
    price: "€700",
    desc: "WordPress eCommerce, custom plugins, payment integrations and speed tuning.",
    link: "/woocommerce-development",
    payment: "https://buy.stripe.com/test_6oU3cw6IY1UG0w6aPB83C05",
    icon: Globe,
    accent: "from-[#FFD84D] to-[#B8860B]",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 lg:py-40"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FFC300] mb-4">
            // 02 — What we do
          </p>

          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter text-white">
            Full-stack eCommerce,
            <br />
            <span className="text-[#FFC300]">end to end.</span>
          </h2>

          <p className="mt-6 text-lg text-white/60 max-w-xl">
            From marketplace approval to seven-figure scale — every channel,
            every store, one accountable agency partner.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;

            return (
              <motion.article
                key={s.title}
                whileHover={{ y: -8 }}
                className="group relative p-8 md:p-10 rounded-2xl bg-[#0F0F0F] border border-white/5 overflow-hidden hover:border-[#FFC300]/40 hover:shadow-[0_0_40px_rgba(255,195,0,0.15)] transition-all duration-500"
              >
                <div
                  className={`pointer-events-none absolute -top-20 -right-20 w-56 h-56 rounded-full bg-gradient-to-br ${s.accent} opacity-0 group-hover:opacity-25 blur-3xl transition-opacity duration-700`}
                />

                <div
                  className={`relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${s.accent} mb-6 shadow-[0_0_24px_rgba(255,195,0,0.35)]`}
                >
                  <Icon
                    size={26}
                    className="text-black"
                    strokeWidth={2.5}
                  />
                </div>

                <h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-2">
                  {s.title}
                </h3>

                <div className="text-[#FFC300] text-lg font-bold mb-4">
                  Starting From {s.price}
                </div>

                <p className="text-white/55 leading-relaxed text-sm md:text-base">
                  {s.desc}
                </p>

                <div className="mt-8 flex gap-3 flex-wrap">

                  <a
                    href={s.payment}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#FFD84D] to-[#B8860B] text-black font-semibold hover:scale-105 transition-transform"
                  >
                    Pay Now
                  </a>

                  <a
                    href={s.link}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 text-white/70 hover:text-[#FFC300] hover:border-[#FFC300]/40 transition-all"
                  >
                    Learn More

                    <ArrowUpRight
                      size={14}
                      className="group-hover:rotate-45 transition-transform"
                    />
                  </a>

                </div>

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
