import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Instagram, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const MAP_BG =
  "https://static.prod-images.emergentagent.com/jobs/8ff3f2b7-ffbe-49df-8f10-f35a16dfc9ed/images/8178303afe4164fff5ba26fa2f662c6626314eab814d61fb1a10244ed20fd872.png";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const socials = [
  { Icon: Github, href: "https://github.com", label: "GitHub" },
  { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in your name, email and message.");
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/contact`, form);
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      toast.success("Message sent. I'll get back within 24 hours.");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 lg:py-40 bg-[#070707]"
      data-testid="contact-section"
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
            // 05 — Let's talk
          </p>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter text-white">
            Ready to scale
            <br />
            <span className="text-gradient-red-yellow">your store?</span>
          </h2>
          <p className="mt-6 text-lg text-white/60 max-w-xl">
            Tell us about your marketplace, your goals and your numbers — we'll reply
            within 24 hours with a strategy worth your time.
          </p>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-12 gap-10">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={onSubmit}
            className="lg:col-span-7 space-y-8"
            data-testid="contact-form"
          >
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <label className="block font-mono text-xs uppercase tracking-[0.2em] text-white/40 mb-2">
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  className="input-neon"
                  placeholder="Jane Doe"
                  data-testid="contact-name-input"
                  required
                />
              </div>
              <div>
                <label className="block font-mono text-xs uppercase tracking-[0.2em] text-white/40 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  className="input-neon"
                  placeholder="jane@company.com"
                  data-testid="contact-email-input"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block font-mono text-xs uppercase tracking-[0.2em] text-white/40 mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={onChange}
                className="input-neon"
                placeholder="New project / Question / Collab"
                data-testid="contact-subject-input"
              />
            </div>

            <div>
              <label className="block font-mono text-xs uppercase tracking-[0.2em] text-white/40 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                rows={5}
                className="input-neon resize-none"
                placeholder="Tell me about your project, timeline and goals..."
                data-testid="contact-message-input"
                required
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#FFC300] to-[#FFA500] text-white font-semibold hover:shadow-[0_0_36px_rgba(255,195,0,0.55)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              data-testid="contact-submit-button"
            >
              {submitting ? (
                "Sending..."
              ) : sent ? (
                <>
                  <CheckCircle2 size={18} /> Sent — Send another?
                </>
              ) : (
                <>
                  Send message <Send size={16} />
                </>
              )}
            </button>
          </motion.form>

          {/* Contact card with map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[5/6] rounded-3xl overflow-hidden border border-white/10">
              <img src={MAP_BG} alt="" className="absolute inset-0 w-full h-full object-cover opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />

              {/* Pulse marker */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <span className="absolute inset-0 rounded-full bg-[#FFC300] animate-ping opacity-75 w-5 h-5" />
                  <span className="relative block w-5 h-5 rounded-full bg-[#FFC300] shadow-[0_0_24px_#FFC300]" />
                </div>
              </div>

              {/* Floating contact card */}
              <div className="absolute bottom-6 left-6 right-6 glass-panel rounded-2xl p-6 space-y-4">
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#FFC300]">
                  Get in touch
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-3 text-white/80">
                    <Mail size={16} className="text-[#FFC300]" />
                    sales@hubofecom.com
                  </li>
                  <li className="flex items-center gap-3 text-white/80">
                    <Phone size={16} className="text-[#FFC300]" />
                    +39 350 079 4831
                  </li>
                  <li className="flex items-center gap-3 text-white/80">
                    <MapPin size={16} className="text-[#FFC300]" />
                    Italy · Serving USA, UK, AUS, CA
                  </li>
                </ul>
                <div className="pt-3 border-t border-white/10 flex items-center gap-3">
                  {socials.map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      data-testid={`social-${label.toLowerCase()}`}
                      className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-[#FFC300] hover:border-[#FFC300]/40 transition-colors"
                    >
                      <Icon size={15} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
