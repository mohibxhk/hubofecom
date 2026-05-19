import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectForm() {

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const params = new URLSearchParams(window.location.search);
  const service = params.get("service");

  const serviceQuestions = {
    website: {
      title: "Website Development Project",
      questions: (
        <>
          <select
            name="website_type"
            className="w-full bg-[#111] border border-white/10 rounded-2xl px-6 py-5"
          >
            <option>What type of website do you need?</option>
            <option>eCommerce Website</option>
            <option>Portfolio Website</option>
            <option>Business Website</option>
            <option>Booking Website</option>
          </select>

          <select
            name="technology"
            className="w-full bg-[#111] border border-white/10 rounded-2xl px-6 py-5"
          >
            <option>Preferred Technology</option>
            <option>React.js</option>
            <option>Shopify</option>
            <option>WooCommerce</option>
            <option>WordPress</option>
          </select>
        </>
      ),
    },

    amazon: {
      title: "Amazon Store Management",
      questions: (
        <>
          <select
            name="amazon_model"
            className="w-full bg-[#111] border border-white/10 rounded-2xl px-6 py-5"
          >
            <option>FBA or FBM?</option>
            <option>FBA</option>
            <option>FBM</option>
            <option>Both</option>
          </select>

          <input
            type="text"
            name="products"
            placeholder="How many products do you have?"
            className="w-full bg-[#111] border border-white/10 rounded-2xl px-6 py-5"
          />
        </>
      ),
    },

    shopify: {
      title: "Shopify Store Development",
      questions: (
        <>
          <input
            type="text"
            name="products"
            placeholder="Number of products"
            className="w-full bg-[#111] border border-white/10 rounded-2xl px-6 py-5"
          />

          <select
            name="theme"
            className="w-full bg-[#111] border border-white/10 rounded-2xl px-6 py-5"
          >
            <option>Need custom design?</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </>
      ),
    },

    walmart: {
      title: "Walmart Marketplace Management",
      questions: (
        <>
          <input
            type="text"
            name="skus"
            placeholder="Number of SKUs"
            className="w-full bg-[#111] border border-white/10 rounded-2xl px-6 py-5"
          />

          <select
            name="ads"
            className="w-full bg-[#111] border border-white/10 rounded-2xl px-6 py-5"
          >
            <option>Need Walmart Ads?</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </>
      ),
    },

    tiktok: {
      title: "TikTok Shop Management",
      questions: (
        <>
          <input
            type="text"
            name="followers"
            placeholder="Current followers count"
            className="w-full bg-[#111] border border-white/10 rounded-2xl px-6 py-5"
          />

          <select
            name="affiliate"
            className="w-full bg-[#111] border border-white/10 rounded-2xl px-6 py-5"
          >
            <option>Need affiliate marketing?</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </>
      ),
    },

    woocommerce: {
      title: "WooCommerce Development",
      questions: (
        <>
          <select
            name="wordpress"
            className="w-full bg-[#111] border border-white/10 rounded-2xl px-6 py-5"
          >
            <option>Existing WordPress website?</option>
            <option>Yes</option>
            <option>No</option>
          </select>

          <input
            type="text"
            name="plugins"
            placeholder="Required plugins/features"
            className="w-full bg-[#111] border border-white/10 rounded-2xl px-6 py-5"
          />
        </>
      ),
    },
  };

  const currentService = serviceQuestions[service] || serviceQuestions.website;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.target);

    formData.append(
      "access_key",
      "fb710372-b6f6-44cb-a6c7-c7218bb8c842"
    );

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();

    setLoading(false);

    if (result.success) {
      setSuccess(true);
      e.target.reset();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-20">

      <div className="max-w-4xl mx-auto">

        <p className="uppercase tracking-[0.4em] text-[#FFC300] text-sm mb-4">
          // Client Project Form
        </p>

        <h1 className="text-5xl md:text-7xl font-black leading-tight">
          {currentService.title}
        </h1>

        {success && (
          <div className="mt-8 bg-green-500/10 border border-green-500 text-green-400 px-6 py-4 rounded-2xl">
            Your project request has been submitted successfully.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-14 space-y-8"
        >

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="bg-[#111] border border-white/10 rounded-2xl px-6 py-5"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Business Email"
              className="bg-[#111] border border-white/10 rounded-2xl px-6 py-5"
            />

          </div>

          <input
            type="text"
            name="brand"
            placeholder="Business / Brand Name"
            className="w-full bg-[#111] border border-white/10 rounded-2xl px-6 py-5"
          />

          {currentService.questions}

          <textarea
            name="project_details"
            rows="5"
            placeholder="Describe your project..."
            className="w-full bg-[#111] border border-white/10 rounded-2xl px-6 py-5"
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            disabled={loading}
            className="mt-4 px-10 py-5 rounded-full bg-[#FFC300] text-black font-bold text-lg"
          >
            {loading ? "Submitting..." : "Submit Project Request"}
          </motion.button>

        </form>

      </div>

    </div>
  );
}
