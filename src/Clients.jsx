import abdelReal from "./assets/abdel-real.jpg";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Marquee from "react-fast-marquee";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const clientLogos = [
  "Amazon",
  "eBay",
  "Walmart",
  "TikTok Shop",
  "Shopify",
  "WooCommerce",
  "BigCommerce",
  "Etsy",
  "Wayfair",
  "Magento",
];

const testimonials = [
  {
    name: "Abdel Amiche",
    role: "Founder · ProximEcom",
    quote:
      "Hub of Ecom delivered an elegant premium website exactly how we envisioned it. The UI feels luxurious, smooth, and professional. Their communication and execution were excellent throughout the project.",
    rating: 5,
    image: abdelReal,
  },
  {
    name: "James Okafor",
    role: "Director · Helix Apparel (UK)",
    quote:
      "Best agency we've ever hired. Listings, PPC, customer support — all handled, all scaled. We finally focus on product while Hubofecom drives growth.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "CEO · Stratosphere Goods (AUS)",
    quote:
      "From a struggling eBay account to a top-rated seller in 6 months. The TikTok Shop launch alone added a six-figure revenue stream.",
    rating: 5,
  },
  {
    name: "Marco Rinaldi",
    role: "Founder · Onyx Brands (CA)",
    quote:
      "Premium Shopify build, flawless WooCommerce migration, and ongoing PPC management. Hubofecom is the operational backbone of our brand.",
    rating: 5,
  },
];

export default function Clients() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((a) => (a + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="clients"
      className="relative py-24 md:py-32 lg:py-40"
      data-testid="clients-section"
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
            // 04 — Trusted globally
          </p>

          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter text-white">
            Brands selling on every
            <br />
            <span className="text-gradient-red-yellow">
              marketplace that matters.
            </span>
          </h2>
        </motion.div>

        {/* Logos Marquee */}
        <div className="mt-16 py-8 border-y border-white/5 bg-black/30 rounded-2xl overflow-hidden">
          <Marquee gradient gradientColor="#0A0A0A" speed={40} pauseOnHover>
            {clientLogos.map((l, i) => (
              <div
                key={i}
                className="mx-12 font-heading font-black text-2xl md:text-3xl tracking-tight text-white/30 hover:text-[#FFC300] transition-colors duration-500"
                data-testid={`client-logo-${i}`}
              >
                {l}
                <span className="text-[#FFC300]">.</span>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Testimonial Carousel */}
        <div className="mt-20 relative">
          <div className="absolute -top-6 left-8 text-[#FFC300]/15">
            <Quote size={120} strokeWidth={1} />
          </div>

          <div className="relative glass-panel rounded-3xl p-8 md:p-14 overflow-hidden">
            {/* Top glow border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFC300] to-transparent" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                data-testid={`testimonial-${active}`}
              >
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({
                    length: testimonials[active].rating,
                  }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-[#FFC300] text-[#FFC300]"
                    />
                  ))}
                </div>

                <blockquote className="font-heading font-light text-2xl md:text-3xl lg:text-4xl tracking-tight text-white leading-tight">
                  "{testimonials[active].quote}"
                </blockquote>

                <div className="mt-8 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden">
                    {testimonials[active].image ? (
                      <img
                        src={testimonials[active].image}
                        alt={testimonials[active].name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#FFE066] to-[#B8860B] flex items-center justify-center text-black font-heading font-black text-lg">
                        {testimonials[active].name[0]}
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="font-heading font-bold text-white">
                      {testimonials[active].name}
                    </div>

                    <div className="text-sm text-white/50">
                      {testimonials[active].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="mt-10 flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Testimonial ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === active
                        ? "w-10 bg-gradient-to-r from-[#FFE066] to-[#B8860B]"
                        : "w-3 bg-white/15"
                    }`}
                    data-testid={`testimonial-dot-${i}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() =>
                    setActive(
                      (a) => (a - 1 + testimonials.length) % testimonials.length
                    )
                  }
                  className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-[#FFC300] hover:border-[#FFC300]/40 transition-colors"
                  data-testid="testimonial-prev"
                  aria-label="Previous"
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  onClick={() =>
                    setActive((a) => (a + 1) % testimonials.length)
                  }
                  className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-[#FFC300] hover:border-[#FFC300]/40 transition-colors"
                  data-testid="testimonial-next"
                  aria-label="Next"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
