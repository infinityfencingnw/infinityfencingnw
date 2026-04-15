import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import {
  SHOP_CATEGORIES,
  getCategoryBySlug,
  pexelsUrl,
} from "@/lib/shop-categories";

interface Props {
  params: { category: string };
}

export function generateStaticParams() {
  return SHOP_CATEGORIES.filter((c) => c.slug !== "tools").map((c) => ({
    category: c.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cat = getCategoryBySlug(params.category);
  if (!cat) return { title: "Not Found" };
  return {
    title: `${cat.label} – Shop | Infinity Fencing NW`,
    description: cat.description,
  };
}

export default function CategoryPage({ params }: Props) {
  const cat = getCategoryBySlug(params.category);
  if (!cat) notFound();

  // "Tools & Equipment" has its own specialized page at /shop/tools
  // — this route won't fire for that slug due to static route priority,
  // but guard anyway.
  if (cat.slug === "tools") {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-black pt-32 pb-20 section-padding overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={pexelsUrl(cat.pexelsId, 1400)}
            alt={cat.label}
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-mono text-brand-fog/60 mb-6">
            <Link href="/shop" className="hover:text-brand-amber transition-colors">
              Shop
            </Link>
            <ChevronRight size={12} />
            <span className="text-brand-fog">{cat.label}</span>
          </nav>

          <span className="section-label">Fence Supply Store</span>
          <h1 className="text-5xl md:text-7xl font-display font-900 uppercase text-brand-white leading-none mt-2">
            {cat.label}
          </h1>
          <p className="text-brand-fog mt-4 max-w-lg text-base">{cat.description}</p>
        </div>
      </section>

      {/* Subcategory grid */}
      <section className="section-padding py-14 bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-900 text-2xl uppercase text-brand-black mb-8">
            Browse {cat.label}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {cat.subcategories.map((sub) => (
              <div key={sub.slug} className="flex flex-col">
                <Link
                  href={`/shop/${cat.slug}/${sub.slug}`}
                  className="group block border border-brand-fog hover:border-brand-amber transition-colors overflow-hidden"
                >
                  {/* Photo */}
                  <div className="relative h-36 overflow-hidden bg-brand-fog/20">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={pexelsUrl(cat.pexelsId, 500)}
                      alt={sub.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    />
                    <div className="absolute inset-0 bg-brand-black/30 group-hover:bg-brand-black/20 transition-colors" />
                  </div>
                  {/* Label */}
                  <div className="p-4">
                    <p className="font-display font-800 text-sm uppercase text-brand-black group-hover:text-brand-amber transition-colors leading-tight">
                      {sub.label}
                    </p>
                    {sub.children && (
                      <ul className="mt-2 space-y-0.5">
                        {sub.children.map((child) => (
                          <li
                            key={child.slug}
                            className="text-xs text-brand-silver font-mono"
                          >
                            {child.label}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon notice */}
      <section className="section-padding py-10 bg-brand-fog/20 border-y border-brand-fog">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="flex-1">
            <p className="font-display font-800 text-lg uppercase text-brand-black mb-1">
              Store Launching Soon
            </p>
            <p className="text-brand-iron text-sm leading-relaxed">
              We're loading the catalog now. Call or email us for current
              inventory and pricing — we can source and ship most fence
              materials direct.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link href="/contact" className="btn-primary text-xs py-3 px-6">
              Request Pricing <ArrowRight size={14} />
            </Link>
            <a
              href="tel:3602001005"
              className="btn-secondary text-xs py-3 px-6"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Back to shop */}
      <section className="section-padding py-10 bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-iron hover:text-brand-amber transition-colors"
          >
            ← Back to All Categories
          </Link>
        </div>
      </section>
    </>
  );
}
