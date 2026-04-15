import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Posts & Hardware – Shop | Infinity Fencing NW",
  description: "Fence posts, gate hardware, hinges, latches, and fencing hardware from top brands including Nationwide Industries.",
};

const HARDWARE_BRANDS = [
  {
    name: "Nationwide Industries",
    desc: "2,000+ SKUs of gate and fence hardware — hinges, latches, locks, pool hardware, and more. The most trusted name in fence hardware.",
    url: "https://nationwideindustries.com/",
    products: ["Gate Hinges", "Gate Latches", "Gate Locks", "Post Caps", "Tension Bands", "Rail Ends"],
  },
  {
    name: "Master Halco",
    desc: "North America's largest wholesale fencing distributor. Posts, rails, chain link, and all related hardware.",
    url: "https://www.masterhalco.com/",
    products: ["Line Posts", "Corner Posts", "Top Rails", "Tension Wire", "Brace Bands", "Post Caps"],
  },
];

export default function PostsHardwarePage() {
  return (
    <>
      <section className="bg-brand-black pt-32 pb-16 section-padding">
        <div className="max-w-7xl mx-auto">
          <span className="section-label">Fence Supply Store</span>
          <h1 className="text-6xl md:text-8xl font-display font-900 uppercase text-brand-white leading-none">
            Posts &<br />
            <span className="text-brand-amber">Hardware</span>
          </h1>
          <p className="text-brand-fog mt-6 max-w-xl text-lg">
            Fence posts, gate hardware, hinges, latches, and all the hardware that holds it together.
          </p>
        </div>
      </section>

      <section className="section-padding section-gap bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <div className="border-2 border-dashed border-brand-fog p-10 mb-10 text-center max-w-2xl mx-auto">
            <p className="font-display font-900 text-2xl uppercase text-brand-black mb-3">Full Catalog Coming Soon</p>
            <p className="text-brand-iron text-sm leading-relaxed">
              We're finalizing supplier agreements for our hardware catalog. Contact us for current pricing on posts, hardware, and gate components.
            </p>
            <Link href="/contact" className="btn-primary mt-6 inline-flex">
              Request Pricing <ArrowRight size={16} />
            </Link>
          </div>

          <h2 className="font-display font-900 text-3xl uppercase text-brand-black mb-8">Our Hardware Suppliers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {HARDWARE_BRANDS.map((brand) => (
              <div key={brand.name} className="border border-brand-fog p-8">
                <h3 className="font-display font-900 text-2xl uppercase text-brand-black mb-2">{brand.name}</h3>
                <p className="text-brand-iron text-sm leading-relaxed mb-5">{brand.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {brand.products.map((p) => (
                    <span key={p} className="text-xs font-mono uppercase tracking-wider text-brand-amber bg-brand-amber/10 px-2 py-1">
                      {p}
                    </span>
                  ))}
                </div>
                <a href={brand.url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-iron border border-brand-fog px-4 py-2 hover:border-brand-amber transition-colors">
                  View Manufacturer <ExternalLink size={11} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
