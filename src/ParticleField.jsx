import React from "react";
import { motion } from "framer-motion";

/* Subtle drifting particle background using CSS-only animation.
   Lightweight, no external lib. */
export default function ParticleField({ count = 28 }) {
  const items = React.useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const size = Math.random() * 3 + 1.5;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const dur = Math.random() * 10 + 8;
      const delay = Math.random() * 6;
      const tx = (Math.random() - 0.5) * 200;
      const ty = (Math.random() - 0.5) * 200;
      const isYellow = Math.random() > 0.55;
      return { i, size, left, top, dur, delay, tx, ty, isYellow };
    });
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" data-testid="particle-field">
      {items.map((p) => (
        <span
          key={p.i}
          className="particle particle-anim"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            top: `${p.top}%`,
            background: p.isYellow ? "#FFC300" : "#FFE066",
            boxShadow: p.isYellow
              ? "0 0 12px #FFC300, 0 0 24px rgba(255,195,0,0.5)"
              : "0 0 12px #FFC300, 0 0 24px rgba(255,195,0,0.5)",
            "--tx": `${p.tx}px`,
            "--ty": `${p.ty}px`,
            "--dur": `${p.dur}s`,
            "--delay": `${p.delay}s`,
          }}
        />
      ))}

      {/* Soft radial vignette */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(255,195,0,0.18), transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(255,195,0,0.12), transparent 55%)",
        }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
