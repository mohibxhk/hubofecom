import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Award, Rocket, Zap } from "lucide-react";

const timeline = [
  {
    year: "2024 — Now",
    role: "Multi-Marketplace Operations",
    org: "Hubofecom · Global",
    desc: "Managing 7-figure Amazon, Walmart and TikTok Shop accounts for international brands. Specializing in cross-border growth and PPC scale-up.",
    icon: Rocket,
  },
  {
    year: "2022 — 2024",
    role: "eBay & Marketplace Lead",
    org: "Hubofecom Agency",
    desc: "Built and scaled 80+ eBay stores across USA, UK and AUS. Trained a 12-person ops team on listing optimization and customer support workflows.",
    icon: Briefcase,
  },
  {
    year: "2020 — 2022",
    role: "Shopify & WooCommerce Developer",
    org: "WP Studio",
    desc: "Custom Shopify themes, WooCommerce builds and headless storefronts. Drove a 38% average lift in conversion through CRO experiments.",
    icon: Award,
  },
  {
    year: "2019 — 2020",
    role: "Junior WordPress Developer",
    org: "Pixel Studio",
    desc: "Started in WordPress development. Built marketing sites, plugin integrations and the foundation for what became Hubofecom.",
    icon: Zap,
  },
];

const skills = [
  { name: "Amazon FBA / PPC", value: 95 },
  { name: "eBay Store Management", value: 96 },
  { name: "Walmart Marketplace", value: 88 },
  { name: "TikTok Shop", value: 84 },
  { name: "Shopify & WooCommerce Dev", value: 92 },
  { name: "SEO & Listing Optimization", value: 90 },
];

function Counter({ to, suffix = "", duration = 1.6 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className="font-heading font-black tabular-nums">
      {val}
      {suffix}
    </span>
  );
}

function SkillBar({ name, value, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <div ref={ref} data-testid={`skill-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
      <div className="flex justify-between mb-2">
        <span className="text-sm text-white/80 font-medium">{name}</span>
        <span className="text-sm text-[#FFC300] font-mono">{value}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : { width: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay }}
          className="h-full rounded-full bg-gradient-to-r from-[#FFE066] to-[#B8860B] shadow-[0_0_12px_rgba(255,195,0,0.6)]"
        />
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 lg:py-40 bg-[#070707]"
      data-testid="experience-section"
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
            // 03 — Experience
          </p>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter text-white">
            Six years of
            <br />
            <span className="text-gradient-red-yellow">marketplace scale.</span>
          </h2>
        </motion.div>

        {/* Counters */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Years experience", to: 6, suffix: "+" },
            { label: "Stores scaled", to: 500, suffix: "+" },
            { label: "Markets served", to: 12, suffix: "" },
            { label: "Avg. revenue lift", to: 213, suffix: "%" },
          ].map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-6 md:p-8 rounded-2xl bg-[#0F0F0F] border border-white/5 hover:border-[#FFC300]/30 transition-colors"
              data-testid={`stat-card-${i}`}
            >
              <div className="text-4xl md:text-5xl text-gradient-red-yellow">
                <Counter to={c.to} suffix={c.suffix} />
              </div>
              <div className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-white/40">
                {c.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid lg:grid-cols-12 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-7">
            <h3 className="font-heading font-bold text-2xl text-white mb-8">
              Career timeline
            </h3>
            <div className="relative">
              <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-[#FFC300] via-[#FFC300] to-transparent" />
              <ul className="space-y-10">
                {timeline.map((t, i) => {
                  const Icon = t.icon;
                  return (
                    <motion.li
                      key={t.year}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className="relative pl-14"
                      data-testid={`timeline-item-${i}`}
                    >
                      <span className="absolute left-0 top-1 w-8 h-8 rounded-full bg-[#0F0F0F] border border-[#FFC300]/50 flex items-center justify-center shadow-[0_0_16px_rgba(255,195,0,0.4)]">
                        <Icon size={14} className="text-[#FFC300]" />
                      </span>
                      <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#FFC300] mb-1">
                        {t.year}
                      </div>
                      <h4 className="font-heading font-bold text-xl text-white">
                        {t.role}
                      </h4>
                      <div className="text-white/50 text-sm mb-2">{t.org}</div>
                      <p className="text-white/60 leading-relaxed">{t.desc}</p>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Skills */}
          <div className="lg:col-span-5">
            <h3 className="font-heading font-bold text-2xl text-white mb-8">
              Core skills
            </h3>
            <div className="space-y-6 p-8 rounded-2xl bg-[#0F0F0F] border border-white/5">
              {skills.map((s, i) => (
                <SkillBar key={s.name} {...s} delay={i * 0.08} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
