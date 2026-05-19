import React from "react";
import { motion } from "framer-motion";
import {
  Store,
  Puzzle,
  CreditCard,
  Zap,
} from "lucide-react";

export default function WooCommerceDevelopment() {
  const features = [
    {
      icon: Store,
      title: "Custom WooCommerce Stores",
      desc: "Modern responsive WordPress eCommerce development.",
    },
    {
      icon: Puzzle,
      title: "Plugin Customization",
      desc: "Advanced plugin setup and custom functionality integration.",
    },
    {
      icon: CreditCard,
      title: "Payment Integrations",
      desc: "Secure payment gateway and checkout system setup.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      desc: "Fast loading stores optimized for SEO and conversions.",
    },
  ];

  return (
    <>
      <div className="fixed top-6 left-6 z-50">
        <a href="/" className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-2xl bg-[#FFC300] flex items-center justify-center shadow-[0_0_30px_rgba(255,195,0,0.35)]">
            <span className="text-black font-black text-2xl">H</span>
          </div>

          <h2 className="text-3xl font-black tracking-tight text-white">
            Hubofecom<span className="text-[#FFC300]">.</span>
          </h2>
        </a>
      </div>

      <div className="min-h-screen bg-black text-white overflow-hidden">

        {/* Hero Section */}
        <section className="relative px-6 md:px-16 py-28">

          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500 blur-[120px]" />
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-500 blur-[120px]" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 max-w-5xl"
          >
            <p className="uppercase tracking-[0.4em] text-[#FFC300] text-sm mb-6">
              // WooCommerce Development
            </p>

            <h1 className="text-[46px] sm:text-6xl md:text-8xl font-black leading-[0.9] break-words max-w-[95%]">
              Advanced
              <br />
              <span className="text-[#FFC300]">
                WooCommerce
              </span>
              <br />
              Solutions
            </h1>

            <p className="mt-8 text-lg text-white/60 max-w-2xl leading-relaxed">
              Professional WooCommerce development services including custom WordPress
              eCommerce stores, payment gateway integration, speed optimization,
              plugin customization and scalable online store solutions.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/project-form?service=woocommerce"
              className="inline-block mt-10 px-8 py-4 rounded-full bg-[#FFC300] text-black font-bold shadow-[0_0_40px_rgba(255,195,0,0.35)]"
            >
              Start Your Project
            </motion.a>
          </motion.div>
        </section>

        {/* Features */}
        <section className="px-6 md:px-16 pb-24">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="relative bg-[#0F0F0F] border border-white/10 rounded-3xl p-10 overflow-hidden hover:border-[#FFC300]/40 transition-all duration-500"
                >
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-500/20 blur-3xl" />

                  <div className="w-16 h-16 rounded-2xl bg-[#FFC300] flex items-center justify-center mb-6">
                    <Icon className="text-black" size={30} />
                  </div>

                  <h3 className="text-3xl font-bold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-white/60 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
