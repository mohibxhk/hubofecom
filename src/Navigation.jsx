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
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);

    if (window.location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }

    setTimeout(() => {
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 150);
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050816]/90 backdrop-blur-2xl border-b border-[#1E3A8A]/20 shadow-[0_10px_40px_rgba(0,80,255,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

        {/* LOGO */}
<button
  onClick={() => {
    window.location.href = "/";
  }}
  className="flex items-center gap-4"
>
  <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFD84D] to-[#B8860B] shadow-[0_0_30px_rgba(255,195,0,0.35)] text-black text-3xl font-black">
  H
</span>
    

  <span className="text-white text-[38px] font-black tracking-tight leading-none">
    Hubofecom
    <span className="text-[#FFC300]">.</span>
  </span>
</button>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-2">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className="relative px-4 py-2 text-sm text-white/70 hover:text-white font-medium transition-all duration-300 group"
              >
                {l.label}

                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#3B82F6] to-[#FFC300] group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => go("contact")}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#FFC300] to-[#FFB800] text-black text-sm font-bold hover:scale-105 hover:shadow-[0_0_30px_rgba(255,195,0,0.45)] transition-all duration-300"
          >
            Hire Me
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-[#050816]/98 backdrop-blur-2xl border-t border-[#1E3A8A]/20"
          >
            <ul className="px-6 py-6 space-y-4">
              {links.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className="w-full text-left text-white/80 hover:text-[#FFC300] transition-colors text-lg font-medium"
                  >
                    {l.label}
                  </button>
                </li>
              ))}

              <li className="pt-4">
                <button
                  onClick={() => go("contact")}
                  className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-[#FFC300] to-[#FFB800] text-black font-bold"
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
