import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Fence Panels – Shop | Infinity Fencing NW",
  description: "Shop fence panels — wood, vinyl, chain link, and more. Quality materials shipped direct or available for installation by our crew.",
};

export default function FencePanelsPage() {
  return (
    <>
      <section className="bg-brand-black pt-32 pb-16 section-padding">
        <div className="max-w-7xl mx-auto">
          <span className="section-label">Fence Supply Store</span>
          <h1 className="text-6xl md:text-8xl font-display font-900 uppercase text-brand-white leading-none">
            Fence<br />
            <span className="text-brand-amber">Panels</span>
          </h1>
          <p className="text-brand-fog mt-6 max-w-xl text-lg">
            Wood, vinyl, chain link, and composite fence panels — sourced from the same suppliers we use on every install.
          </p>
        </div>
      </section>

      <section className="section-padding section-gap bg-brand-white text-center">
        <div className="max-w-2xl mx-auto">
          <div className="border-2 border-dashed border-brand-fog p-16 mb-8">
            <p className="font-display font-900 text-3xl uppercase text-brand-black mb-3">Coming Soon</p>
            <p className="text-brand-iron leading-relaxed">
              We're building out our fence panel catalog with direct supplier pricing.
              In the meantime, call or email us for pricing on cedar, pine, vinyl, and chain link panels.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Request Pricing <ArrowRight size={16} />
            </Link>
            <Link href="/shop/tools" className="btn-secondary">
              Shop Fence Tools
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
