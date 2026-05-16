import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "clients", label: "Clients" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-panel border-b border-white/5" : "bg-transparent"
      }`}
      data-testid="main-navigation"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
      <button
  onClick={() => go("home")}
  className="flex items-center gap-3 font-heading font-black text-lg md:text-xl tracking-tighter"
  data-testid="nav-logo"
>
  <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFD84D] to-[#B8860B] shadow-[0_0_25px_rgba(255,195,0,0.35)] text-black text-2xl font-black leading-none">
    H
  </span>

  <span className="text-white text-3xl font-black tracking-tight leading-none">
    Hubofecom<span className="text-[#FFC300]">.</span>
  </span>
</button>

        <ul className="hidden md:flex items-center gap-2">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className="px-4 py-2 text-sm text-white/70 hover:text-white font-medium transition-colors relative group"
                data-testid={`nav-link-${l.id}`}
              >
                {l.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-[#FFE066] to-[#B8860B] group-hover:w-3/4 transition-all duration-300" />
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <button
            onClick={() => go("contact")}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FFC300] to-[#FFA500] text-white text-sm font-semibold hover:shadow-[0_0_24px_rgba(255,195,0,0.6)] transition-shadow"
            data-testid="nav-cta-button"
          >
            Hire Me
          </button>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          data-testid="nav-mobile-toggle"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#070707]/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
            data-testid="nav-mobile-menu"
          >
            <ul className="px-6 py-4 space-y-2">
              {links.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className="w-full text-left py-3 text-white/80 hover:text-[#FFC300] transition-colors font-medium"
                    data-testid={`nav-mobile-link-${l.id}`}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => go("contact")}
                  className="w-full mt-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#FFC300] to-[#FFA500] text-white text-sm font-semibold"
                >
                  Hire Me
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
