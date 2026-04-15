import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ChevronRight, Phone } from "lucide-react";
import {
  SHOP_CATEGORIES,
  getCategoryBySlug,
  getSubCategoryBySlug,
  pexelsUrl,
} from "@/lib/shop-categories";

interface Props {
  params: { category: string; subcategory: string };
}

export function generateStaticParams() {
  return SHOP_CATEGORIES.filter((c) => c.slug !== "tools").flatMap((cat) =>
    cat.subcategories.map((sub) => ({
      category: cat.slug,
      subcategory: sub.slug,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cat = getCategoryBySlug(params.category);
  const sub = getSubCategoryBySlug(params.category, params.subcategory);
  if (!cat || !sub) return { title: "Not Found" };
  return {
    title: `${sub.label} – ${cat.label} | Infinity Fencing NW`,
    description: `Shop ${sub.label} for ${cat.label} — ${cat.description}`,
  };
}

export default function SubCategoryPage({ params }: Props) {
  const cat = getCategoryBySlug(params.category);
  if (!cat) notFound();

  const sub = getSubCategoryBySlug(params.category, params.subcategory);
  if (!sub) notFound();

  // Other subcategories in this category (for sidebar nav)
  const siblings = cat.subcategories.filter((s) => s.slug !== sub.slug);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-black pt-32 pb-16 section-padding overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={pexelsUrl(cat.pexelsId, 1400)}
            alt={cat.label}
            className="w-full h-full object-cover opacity-25"
          />
        </div>
        <div className="relative max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-mono text-brand-fog/60 mb-6 flex-wrap">
            <Link href="/shop" className="hover:text-brand-amber transition-colors">
              Shop
            </Link>
            <ChevronRight size={12} />
            <Link
              href={`/shop/${cat.slug}`}
              className="hover:text-brand-amber transition-colors"
            >
              {cat.label}
            </Link>
            <ChevronRight size={12} />
            <span className="text-brand-fog">{sub.label}</span>
          </nav>

          <span className="section-label">{cat.label}</span>
          <h1 className="text-5xl md:text-7xl font-display font-900 uppercase text-brand-white leading-none mt-2">
            {sub.label}
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding py-14 bg-brand-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">

          {/* Sidebar: other subcategories */}
          <aside className="lg:col-span-1 order-2 lg:order-1">
            <p className="font-display font-800 text-xs uppercase text-brand-black tracking-widest mb-4 border-b border-brand-fog pb-3">
              {cat.label}
            </p>
            <ul className="space-y-0 divide-y divide-brand-fog/40">
              {cat.subcategories.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/shop/${cat.slug}/${s.slug}`}
                    className={`flex items-center justify-between py-2.5 text-sm transition-colors ${
                      s.slug === sub.slug
                        ? "text-brand-amber font-700"
                        : "text-brand-iron hover:text-brand-amber"
                    }`}
                  >
                    {s.label}
                    {s.slug === sub.slug && (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-amber" />
                    )}
                  </Link>
                  {s.slug === sub.slug && s.children && (
                    <ul className="pl-4 pb-2 space-y-1">
                      {s.children.map((child) => (
                        <li key={child.slug}>
                          <span className="text-xs text-brand-silver font-mono">
                            {child.label}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </aside>

          {/* Main: coming soon + siblings */}
          <main className="lg:col-span-3 order-1 lg:order-2">
            {/* Sub-subcategories if present */}
            {sub.children && sub.children.length > 0 && (
              <div className="mb-10">
                <h2 className="font-display font-800 text-lg uppercase text-brand-black mb-5">
                  {sub.label} Types
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {sub.children.map((child) => (
                    <div
                      key={child.slug}
                      className="border border-brand-fog p-5 text-center hover:border-brand-amber transition-colors"
                    >
                      <p className="font-display font-700 text-sm uppercase text-brand-black">
                        {child.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Coming soon card */}
            <div className="border-2 border-dashed border-brand-fog p-12 text-center mb-8">
              <p className="font-display font-900 text-3xl uppercase text-brand-black mb-3">
                Coming Soon
              </p>
              <p className="text-brand-iron text-sm leading-relaxed max-w-md mx-auto">
                We're adding {sub.label.toLowerCase()} to our online catalog now.
                Call or email for current inventory and pricing — we can source
                and ship most items direct.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
                <Link href="/contact" className="btn-primary text-xs py-3 px-6">
                  Request Pricing <ArrowRight size={14} />
                </Link>
                <a
                  href="tel:3602001005"
                  className="btn-secondary text-xs py-3 px-6 flex items-center justify-center gap-2"
                >
                  <Phone size={13} />
                  360.200.1005
                </a>
              </div>
            </div>

            {/* Other subcategories in this section */}
            {siblings.length > 0 && (
              <div>
                <h3 className="font-display font-700 text-sm uppercase text-brand-black tracking-widest mb-4">
                  Also in {cat.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {siblings.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/shop/${cat.slug}/${s.slug}`}
                      className="text-xs font-mono uppercase tracking-wider border border-brand-fog px-4 py-2 text-brand-iron hover:border-brand-amber hover:text-brand-amber transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </main>
        </div>
      </section>

      {/* Back to category */}
      <section className="section-padding py-8 bg-brand-fog/20 border-t border-brand-fog">
        <div className="max-w-7xl mx-auto flex items-center gap-6">
          <Link
            href={`/shop/${cat.slug}`}
            className="text-xs font-mono uppercase tracking-widest text-brand-iron hover:text-brand-amber transition-colors"
          >
            ← Back to {cat.label}
          </Link>
          <Link
            href="/shop"
            className="text-xs font-mono uppercase tracking-widest text-brand-iron hover:text-brand-amber transition-colors"
          >
            All Categories
          </Link>
        </div>
      </section>
    </>
  );
}
