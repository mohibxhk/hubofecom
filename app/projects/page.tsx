import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Mock Projects Data
const projects = [
  {
    id: 1,
    title: "E-Commerce Luxury Fashion Store",
    category: "Shopify / React / Tailwind",
    description: "Custom Shopify storefront build with high-converting UI/UX and seamless checkout experience.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    link: "https://example.com",
  },
  {
    id: 2,
    title: "Global Brands Scaling Platform",
    category: "WooCommerce / Web Development",
    description: "Full e-commerce platform redesign for scaling international multi-currency sales.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    link: "https://example.com",
  },
  {
    id: 3,
    title: "Landscape Architecture Agency",
    category: "Next.js / Custom Web App",
    description: "Modern, high-performance web presentation built for premium service providers.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    link: "https://example.com",
  },
  {
    id: 4,
    title: "SaaS Analytics Dashboard",
    category: "React / Node.js / Tailwind",
    description: "Interactive client portal tracking store analytics, sales conversion, and growth metrics.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
    link: "https://example.com",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white py-16 px-4 sm:px-8 lg:px-16">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full border border-[#facc15]/30 bg-[#facc15]/10 text-[#facc15] text-xs font-semibold tracking-widest uppercase mb-4">
          Our Portfolio
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Featured <span className="text-[#facc15]">Projects & Work.</span>
        </h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
          Explore our recent custom web development, e-commerce builds, and brand scaling solutions delivered worldwide.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-[#121212] border border-neutral-800 rounded-2xl overflow-hidden hover:border-[#facc15]/50 transition-all duration-300 flex flex-col"
          >
            {/* Project Image */}
            <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-neutral-900">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
              <div>
                <span className="text-xs font-medium text-[#facc15] uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mt-2 text-white group-hover:text-[#facc15] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-neutral-800/80 flex justify-between items-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#facc15] transition-colors"
                >
                  View Live Site <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action Banner */}
      <div className="max-w-6xl mx-auto mt-20 p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-neutral-900 via-[#18181b] to-neutral-900 border border-neutral-800 text-center relative overflow-hidden">
        <h2 className="text-2xl sm:text-4xl font-bold">Have a project in mind?</h2>
        <p className="text-gray-400 mt-2 max-w-xl mx-auto">
          Let’s build something extraordinary together and scale your brand to the next level.
        </p>
        <Link
          href="/#contact"
          className="inline-block mt-6 px-8 py-3.5 bg-[#facc15] text-black font-bold rounded-full hover:bg-[#eab308] transition-colors"
        >
          Start A Project
        </Link>
      </div>
    </main>
  );
}
