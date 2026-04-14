import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Fence Installation Gallery – Our Work | Infinity Fencing NW",
  description:
    "Browse completed fence projects by Infinity Fencing NW in Poulsbo WA and Kitsap County. Wood, chain link, vinyl, and security fencing examples.",
};

// Replace src values with real project photos
const GALLERY = [
  {
    src: "https://images.pexels.com/photos/5126304/pexels-photo-5126304.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Wood privacy fence on metal posts – Poulsbo WA",
    type: "Wood Fencing",
    location: "Poulsbo, WA",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.pexels.com/photos/2381712/pexels-photo-2381712.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Chain link fence installation – Kitsap County",
    type: "Chain Link",
    location: "Bremerton, WA",
    span: "",
  },
  {
    src: "https://images.pexels.com/photos/11693890/pexels-photo-11693890.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "White vinyl privacy fence – Silverdale WA",
    type: "Vinyl Fencing",
    location: "Silverdale, WA",
    span: "",
  },
  {
    src: "https://images.pexels.com/photos/5860835/pexels-photo-5860835.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Security fence – Kitsap County",
    type: "Security",
    location: "Bainbridge Island, WA",
    span: "",
  },
  {
    src: "https://images.pexels.com/photos/14306688/pexels-photo-14306688.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Board-on-board cedar fence – Poulsbo WA",
    type: "Wood Fencing",
    location: "Poulsbo, WA",
    span: "",
  },
  {
    src: "https://images.pexels.com/photos/9581523/pexels-photo-9581523.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Shadowbox wood fence on metal posts",
    type: "Wood Fencing",
    location: "Kingston, WA",
    span: "col-span-2",
  },
  {
    src: "https://images.pexels.com/photos/48246/pexels-photo-48246.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Custom wood gate installation",
    type: "Gates",
    location: "Poulsbo, WA",
    span: "",
  },
  {
    src: "https://images.pexels.com/photos/951408/pexels-photo-951408.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Residential wood fence",
    type: "Wood Fencing",
    location: "Port Orchard, WA",
    span: "",
  },
  {
    src: "https://images.pexels.com/photos/683402/pexels-photo-683402.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Custom wood fence close detail",
    type: "Wood Fencing",
    location: "Silverdale, WA",
    span: "",
  },
  {
    src: "https://images.pexels.com/photos/683402/pexels-photo-683402.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Commercial chain link perimeter fence",
    type: "Commercial",
    location: "Bremerton, WA",
    span: "col-span-2",
  },
];

const FILTER_TYPES = [
  "All",
  "Wood Fencing",
  "Chain Link",
  "Vinyl Fencing",
  "Security",
  "Commercial",
  "Gates",
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-black pt-32 pb-16 section-padding">
        <div className="max-w-7xl mx-auto">
          <span className="section-label">Portfolio</span>
          <h1 className="text-6xl md:text-8xl font-display font-900 uppercase text-brand-white leading-none">
            Our
            <br />
            <span className="text-brand-amber">Work</span>
          </h1>
          <p className="text-brand-fog mt-6 max-w-xl">
            Every fence we build becomes part of our portfolio. Browse completed
            projects across Kitsap County and NW Washington.
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="section-padding py-6 bg-brand-white border-b border-brand-fog">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2">
          {FILTER_TYPES.map((type) => (
            <button
              key={type}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-widest border transition-colors ${
                type === "All"
                  ? "bg-brand-black text-white border-brand-black"
                  : "border-brand-fog text-brand-iron hover:border-brand-amber"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="section-padding section-gap bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[220px]">
            {GALLERY.map((item, i) => (
              <div
                key={i}
                className={`relative overflow-hidden group ${item.span}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/60 transition-all duration-300 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100">
                  <span className="text-brand-amber font-mono text-xs uppercase tracking-widest">
                    {item.type}
                  </span>
                  <p className="text-white font-display font-700 text-sm uppercase">
                    {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-amber section-padding py-20 text-center">
        <h2 className="font-display font-900 text-4xl uppercase text-white mb-4">
          Like What You See?
        </h2>
        <p className="text-white/80 mb-8 max-w-md mx-auto">
          Get a free estimate and let's plan your project. We serve all of
          Kitsap County and NW Washington.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-white text-brand-amber font-display font-700 uppercase tracking-wider px-10 py-5 text-sm hover:bg-brand-black hover:text-white transition-all"
        >
          Start My Project
          <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}
