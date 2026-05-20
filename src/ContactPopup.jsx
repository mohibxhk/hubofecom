import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Instagram, MessageCircle } from "lucide-react";

export default function ContactPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center px-6"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative w-full max-w-md rounded-3xl border border-[#FFC300]/20 bg-[#0A0A0A] p-8 shadow-[0_0_60px_rgba(255,195,0,0.15)] overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-[#FFC300]/20 blur-3xl rounded-full" />

            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors"
            >
              <X size={22} />
            </button>

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-[#FFC300] flex items-center justify-center mb-6">
                <span className="text-black text-3xl font-black">H</span>
              </div>

              <p className="uppercase tracking-[0.3em] text-[#FFC300] text-xs mb-4">
                // Contact First
              </p>

              <h2 className="text-3xl font-black text-white leading-tight">
                Let’s Discuss Your Project First.
              </h2>

              <p className="mt-4 text-white/60 leading-relaxed">
                Before placing any order or starting your project,
                kindly contact us first so we can understand your
                requirements properly and guide you professionally.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                
                <a
                  href="https://wa.me/923000000000"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 rounded-2xl bg-[#FFC300] text-black font-bold py-4 hover:scale-[1.02] transition-transform"
                >
                  <MessageCircle size={22} />
                  Contact on WhatsApp
                </a>

                <a
                  href="https://instagram.com/hubofecom"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 text-white py-4 hover:border-[#FFC300]/40 hover:text-[#FFC300] transition-all"
                >
                  <Instagram size={22} />
                  Visit Instagram
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
