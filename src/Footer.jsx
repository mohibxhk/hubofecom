import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "clients", label: "Clients" },
  { id: "contact", label: "Contact" },
];

const socials = [
  { href: "https://github.com", label: "Github" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://twitter.com", label: "Twitter" },
  { href: "https://instagram.com", label: "Instagram" },
];

export default function Footer() {
  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="relative pt-24 md:pt-32 pb-10 border-t border-white/5 overflow-hidden" data-testid="footer">
      {/* Background grain + glow */}
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[80%] h-80 rounded-full bg-[#FFC300]/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onClick={() => go("contact")}
          className="group block text-left"
          data-testid="footer-cta"
        >
          <span className="font-heading font-black text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.9] tracking-tighter text-white">
            LET'S <span className="text-gradient-red-yellow italic">TALK</span>
            <ArrowUpRight
              size={80}
              className="inline-block -mt-4 ml-2 text-[#FFC300] group-hover:rotate-45 transition-transform duration-500"
              strokeWidth={1.5}
            />
          </span>
        </motion.button>

        <div className="mt-20 grid md:grid-cols-12 gap-10 pb-10 border-b border-white/5">
          <div className="md:col-span-5">
           <div className="flex items-center gap-4">
  <div className="w-14 h-14 rounded-2xl bg-[#FFC300] flex items-center justify-center shadow-[0_0_30px_rgba(255,195,0,0.35)]">
    <span className="text-black font-black text-2xl">H</span>
  </div>

  <h2 className="text-4xl font-black tracking-tight text-white">
    Hubofecom<span className="text-[#FFC300]">.</span>
  </h2>
</div>
            <p className="mt-4 text-white/50 text-sm max-w-sm">
              Premium eCommerce development & marketplace management for global brands.
              Amazon · eBay · Walmart · TikTok Shop · Shopify · WooCommerce.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-white/40 mb-4">
              Navigate
            </div>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className="text-white/70 hover:text-[#FFC300] text-sm transition-colors"
                    data-testid={`footer-link-${l.id}`}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-white/40 mb-4">
              Social
            </div>
            <ul className="space-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/70 hover:text-[#FFC300] text-sm transition-colors inline-flex items-center gap-1"
                  >
                    {s.label} <ArrowUpRight size={12} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 font-mono">
            © {new Date().getFullYear()} HUBOFECOM — All rights reserved.
          </p>
          <p className="text-xs text-white/40 font-mono">
            sales@hubofecom.com · +39 350 079 4831
          </p>
        </div>
      </div>
    </footer>
  );
}
