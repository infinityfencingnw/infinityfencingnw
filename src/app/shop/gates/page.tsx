import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Gate Hardware & Kits – Shop | Infinity Fencing NW",
  description: "Gate hardware, kits, hinges, latches, and automation components. Custom gates also available — contact us for a quote.",
};

export default function ShopGatesPage() {
  return (
    <>
      <section className="bg-brand-black pt-32 pb-16 section-padding">
        <div className="max-w-7xl mx-auto">
          <span className="section-label">Fence Supply Store</span>
          <h1 className="text-6xl md:text-8xl font-display font-900 uppercase text-brand-white leading-none">
            Gate<br />
            <span className="text-brand-amber">Hardware</span>
          </h1>
          <p className="text-brand-fog mt-6 max-w-xl text-lg">
            Hinges, latches, complete gate kits, and automation hardware from Nationwide Industries and top brands.
          </p>
        </div>
      </section>

      <section className="section-padding section-gap bg-brand-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="border-2 border-dashed border-brand-fog p-10 text-center">
              <p className="font-display font-900 text-2xl uppercase text-brand-black mb-3">Catalog Coming Soon</p>
              <p className="text-brand-iron text-sm leading-relaxed mb-6">
                Gate hardware catalog is being built out. For immediate needs, contact us — we stock Nationwide Industries hardware and can get most components quickly.
              </p>
              <Link href="/contact" className="btn-primary inline-flex">
                Request Gate Hardware <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="font-display font-900 text-3xl uppercase text-brand-black">Need a Custom Gate?</h2>
            <p className="text-brand-iron leading-relaxed">
              We build and install every gate type — wood swing, cantilever slide, fabricated steel, aluminum, and automated systems. If you need a gate built and installed, that's our specialty.
            </p>
            <Link href="/services/gates" className="btn-secondary inline-flex">
              View Gate Installation Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
