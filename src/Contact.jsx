import React from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-black text-white pt-32 pb-24 overflow-hidden"
    >
      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,196,0,0.08),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(255,0,80,0.08),transparent_25%)]" />

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

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-20 mt-24">
          
          {/* LEFT FORM */}
          <motion.form
            action="https://api.web3forms.com/submit"
            method="POST"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <input
              type="hidden"
              name="access_key"
              value="fb710372-b6f6-44cb-a6c7-c7218bb8c842"
            />

            <div className="grid md:grid-cols-2 gap-10">
              
              <div>
                <label className="block mb-5 text-[11px] tracking-[0.35em] text-white/35 uppercase">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Jane Doe"
                  required
                  className="w-full bg-transparent border-0 border-b border-white/10 pb-5 text-white text-[17px] placeholder:text-white/25 outline-none focus:border-[#FFC300] transition-all duration-300"
                />
              </div>

              <div>
                <label className="block mb-5 text-[11px] tracking-[0.35em] text-white/35 uppercase">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="jane@company.com"
                  required
                  className="w-full bg-transparent border-0 border-b border-white/10 pb-5 text-white text-[17px] placeholder:text-white/25 outline-none focus:border-[#FFC300] transition-all duration-300"
                />
              </div>

            </div>

            <div>
              <label className="block mb-5 text-[11px] tracking-[0.35em] text-white/35 uppercase">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                placeholder="New project / Question / Collab"
                className="w-full bg-transparent border-0 border-b border-white/10 pb-5 text-white text-[17px] placeholder:text-white/25 outline-none focus:border-[#FFC300] transition-all duration-300"
              />
            </div>

            <div>
              <label className="block mb-5 text-[11px] tracking-[0.35em] text-white/35 uppercase">
                Message
              </label>

              <textarea
                name="message"
                placeholder="Tell me about your project, timeline and goals..."
                required
                className="w-full min-h-[170px] bg-transparent border-0 border-b border-white/10 pb-5 text-white text-[17px] placeholder:text-white/25 outline-none resize-none focus:border-[#FFC300] transition-all duration-300"
              />
            </div>

            <button
              type="submit"
              className="mt-4 px-9 py-4 rounded-full bg-[#FFC300] text-black font-semibold hover:scale-105 hover:shadow-[0_0_30px_rgba(255,195,0,0.35)] transition-all duration-300 inline-flex items-center gap-3"
            >
              Send message
              <Send size={18} />
            </button>
          </motion.form>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(255,196,0,0.08)]"
          >
            
            {/* MAP IMAGE */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=2070&auto=format&fit=crop')",
              }}
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/55" />

            {/* RED/YELLOW GLOW */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,196,0,0.12),transparent_40%)]" />

            {/* CONTENT */}
            <div className="relative z-10 flex flex-col justify-end h-full min-h-[650px] p-10">
              
              {/* GLASS BOX */}
              <div className="bg-black/55 backdrop-blur-md border border-white/10 rounded-3xl p-8">
                
                <p className="text-xs uppercase tracking-[0.35em] text-[#FFC300] mb-8">
                  Get In Touch
                </p>

                <div className="space-y-6 text-white/80">
                  
                  <div className="flex items-center gap-4">
                    <Mail size={20} className="text-[#FFC300]" />
                    <p className="text-lg">sales@hubofecom.com</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <Phone size={20} className="text-[#FFC300]" />
                    <p className="text-lg">+39 350 079 4831</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <MapPin size={20} className="text-[#FFC300]" />
                    <p className="text-lg">
                      Italy · Serving USA, UK, AUS, CA
                    </p>
                  </div>
                </div>

                {/* SOCIALS */}
                <div className="flex gap-4 mt-10 pt-8 border-t border-white/10">
                  
                  {[Github, Linkedin, Twitter, Instagram].map(
                    (Icon, index) => (
                      <button
                        key={index}
                        className="w-12 h-12 rounded-full border border-white/10 bg-black/40 flex items-center justify-center hover:bg-[#FFC300] hover:text-black transition-all duration-300"
                      >
                        <Icon size={18} />
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
