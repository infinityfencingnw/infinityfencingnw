import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { SHOP_CATEGORIES, pexelsUrl } from "@/lib/shop-categories";

export const metadata: Metadata = {
  title: "Fence Materials & Supplies – Shop | Infinity Fencing NW",
  description:
    "Shop cedar, vinyl, chain link, agricultural, ornamental fence materials, gate operators, hardware, and professional tools. Supplier-direct pricing for Kitsap County and the Pacific Northwest.",
};

export default function ShopPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-black pt-32 pb-16 section-padding">
        <div className="max-w-7xl mx-auto">
          <span className="section-label">Fence Supply Store</span>
          <h1 className="text-6xl md:text-8xl font-display font-900 uppercase text-brand-white leading-none">
            Shop
            <br />
            <span className="text-brand-amber">Materials</span>
          </h1>
          <p className="text-brand-fog mt-6 max-w-xl text-lg">
            Everything from cedar pickets to gate operators — sourced from the
            same suppliers we use on every install. Need it put up too?{" "}
            <Link href="/contact" className="text-brand-amber underline">
              Get a quote.
            </Link>
          </p>
        </div>
      </section>

      {/* Category grid */}
      <section className="section-padding py-16 bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-900 text-4xl uppercase text-brand-black mb-10">
            Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SHOP_CATEGORIES.map((cat) => {
              const href =
                cat.slug === "tools" ? "/shop/tools" : `/shop/${cat.slug}`;
              return (
                <div
                  key={cat.slug}
                  className="group border border-brand-fog hover:border-brand-amber transition-colors overflow-hidden bg-white"
                >
                  {/* Category photo */}
                  <Link href={href} className="block relative h-44 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={pexelsUrl(cat.pexelsId, 700)}
                      alt={cat.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-brand-black/30 transition-colors" />
                    <h3 className="absolute bottom-4 left-5 font-display font-900 text-xl uppercase text-white leading-tight">
                      {cat.label}
                    </h3>
                  </Link>

                  {/* Subcategory list */}
                  <div className="p-5">
                    <ul className="space-y-0 divide-y divide-brand-fog/50">
                      {cat.subcategories.map((sub) => {
                        const subHref =
                          cat.slug === "tools"
                            ? "/shop/tools"
                            : `/shop/${cat.slug}/${sub.slug}`;
                        return (
                          <li key={sub.slug}>
                            <Link
                              href={subHref}
                              className="flex items-center justify-between py-2 text-sm text-brand-iron hover:text-brand-amber transition-colors group/sub"
                            >
                              <span>{sub.label}</span>
                              <ChevronRight
                                size={14}
                                className="text-brand-fog group-hover/sub:text-brand-amber transition-colors"
                              />
                            </Link>
                            {sub.children && (
                              <ul className="pl-4 pb-1 space-y-0.5">
                                {sub.children.map((child) => (
                                  <li key={child.slug}>
                                    <Link
                                      href={
                                        cat.slug === "tools"
                                          ? "/shop/tools"
                                          : `/shop/${cat.slug}/${sub.slug}/${child.slug}`
                                      }
                                      className="text-xs text-brand-silver hover:text-brand-amber transition-colors"
                                    >
                                      {child.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                    <Link
                      href={href}
                      className="mt-4 flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-brand-amber hover:text-brand-black transition-colors"
                    >
                      View All <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Install CTA */}
      <section className="section-padding py-16 bg-brand-charcoal">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-display font-900 text-3xl uppercase text-brand-white">
              Need It Installed Too?
            </p>
            <p className="text-brand-fog text-sm mt-2">
              We install what we sell. Get materials + professional installation
              in one quote.
            </p>
          </div>
          <Link href="/contact" className="btn-primary shrink-0">
            Get Install Quote
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
