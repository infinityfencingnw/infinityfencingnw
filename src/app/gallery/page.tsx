import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Fence Installation Gallery – Our Work | Infinity Fencing NW",
  description:
    "Browse completed fence projects by Infinity Fencing NW in Poulsbo WA and Kitsap County. Wood, chain link, vinyl, and security fencing examples.",
};

const GALLERY = [
  {
    src: "/gallery/g05.jpg",
    alt: "Cedar privacy fence with Infinity Fencing NW sign – Poulsbo WA",
    type: "Wood Fencing",
    location: "Poulsbo, WA",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/gallery/g01.jpg",
    alt: "Black vinyl-coated chain link fence through trees – Poulsbo WA",
    type: "Chain Link",
    location: "Poulsbo, WA",
    span: "",
  },
  {
    src: "/gallery/g04.jpg",
    alt: "Cedar cap & trim privacy fence – Bremerton WA",
    type: "Wood Fencing",
    location: "Bremerton, WA",
    span: "",
  },
  {
    src: "/gallery/g02.jpg",
    alt: "Modern cedar horizontal slat fence – Poulsbo WA",
    type: "Wood Fencing",
    location: "Poulsbo, WA",
    span: "col-span-2",
  },
  {
    src: "/gallery/g03.jpg",
    alt: "Cedar privacy fence with matching double gate – Silverdale WA",
    type: "Gates",
    location: "Silverdale, WA",
    span: "",
  },
  {
    src: "/gallery/g06.jpg",
    alt: "Black vinyl chain link fence, side yard install – Kitsap County",
    type: "Chain Link",
    location: "Kitsap County, WA",
    span: "",
  },
  {
    src: "/gallery/g11.jpg",
    alt: "Cedar privacy fence long residential run – Bainbridge Island WA",
    type: "Wood Fencing",
    location: "Bainbridge Island, WA",
    span: "col-span-2",
  },
  {
    src: "/gallery/g07.jpg",
    alt: "Cedar board fence along driveway – Port Orchard WA",
    type: "Wood Fencing",
    location: "Port Orchard, WA",
    span: "",
  },
  {
    src: "/gallery/g09.jpg",
    alt: "Cedar privacy fence with decorative lattice top – Kingston WA",
    type: "Wood Fencing",
    location: "Kingston, WA",
    span: "",
  },
  {
    src: "/gallery/g08.jpg",
    alt: "Custom cedar horizontal sliding gate – Poulsbo WA",
    type: "Gates",
    location: "Poulsbo, WA",
    span: "col-span-2",
  },
  {
    src: "/gallery/g10.jpg",
    alt: "Custom steel gate fabrication in progress – Kitsap County",
    type: "Gates",
    location: "Kitsap County, WA",
    span: "",
  },
];

const FILTER_TYPES = [
  "All",
  "Wood Fencing",
  "Chain Link",
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
