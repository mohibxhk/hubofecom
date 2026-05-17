import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-black text-white pt-32 pb-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,60,255,0.08),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(255,196,0,0.06),transparent_25%)]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-[#FFC300] mb-5">
            // Contact Hubofecom
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
            Ready To Scale
            <br />
            Your Store?
          </h2>

          <p className="mt-8 text-white/55 text-lg leading-relaxed">
            Tell us about your marketplace, your goals and your numbers —
            we'll reply within 24 hours with a strategy worth your time.
          </p>
        </motion.div>

        {/* FORM + CARD */}
        <div className="grid lg:grid-cols-2 gap-20 mt-24">
          
          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-14"
          >
            <div className="grid md:grid-cols-2 gap-10">
              
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-white/35 mb-3 block">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder:text-white/30 outline-none focus:border-[#FFC300] transition-all duration-300"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-white/35 mb-3 block">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="jane@company.com"
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder:text-white/30 outline-none focus:border-[#FFC300] transition-all duration-300"
                />
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-white/35 mb-3 block">
                Subject
              </label>

              <input
                type="text"
                placeholder="New project / Question / Collaboration"
                className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder:text-white/30 outline-none focus:border-[#FFC300] transition-all duration-300"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-white/35 mb-3 block">
                Message
              </label>

              <textarea
                placeholder="Tell me about your project, timeline and goals..."
                className="w-full bg-transparent border-b border-white/10 py-4 min-h-[140px] text-white placeholder:text-white/30 outline-none resize-none focus:border-[#FFC300] transition-all duration-300"
              />
            </div>

            <button
              type="submit"
              className="mt-6 px-8 py-4 rounded-full bg-[#FFC300] text-black font-semibold hover:scale-105 hover:shadow-[0_0_30px_rgba(255,195,0,0.35)] transition-all duration-300 inline-flex items-center gap-3"
            >
              Send Message
              <Send size={18} />
            </button>
          </motion.form>

          {/* CONTACT CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative rounded-[32px] overflow-hidden border border-white/10 bg-[#070707]"
          >
            <img
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />

            <div className="relative z-10 p-10 flex flex-col justify-end h-full min-h-[650px] bg-black/40 backdrop-blur-sm">
              
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-[#FFC300] mb-8">
                  Get In Touch
                </p>

                <div className="space-y-5 text-white/75">
                  <p className="text-lg">sales@hubofecom.com</p>
                  <p className="text-lg">+39 350 079 4831</p>
                  <p className="text-lg">
                    Italy · Serving USA, UK, AUS, CA
                  </p>
                </div>
              </div>

              <div className="flex gap-4 mt-12">
                {["Github", "LinkedIn", "Twitter", "Instagram"].map((item) => (
                  <button
                    key={item}
                    className="w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-[#FFC300] hover:text-black transition-all duration-300 text-sm"
                  >
                    {item[0]}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
