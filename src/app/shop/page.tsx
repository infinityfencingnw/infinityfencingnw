import type { Metadata } from "next";
import Link from "next/link";
import { ShoppingCart, Filter, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Fence Materials & Supplies – Online Store | Infinity Fencing NW",
  description:
    "Shop fence panels, posts, hardware, and gates online. Quality fencing materials shipped direct to Vancouver WA and the Pacific Northwest.",
};

/*
  ─────────────────────────────────────────────────────────────────
  DROPSHIP ECOMMERCE SETUP — NOTES FOR CLAUDE CODE
  ─────────────────────────────────────────────────────────────────

  RECOMMENDED STACK:
  Option A (Best for dropship): Shopify Storefront API + Next.js
    - Create a Shopify store (can use Shopify Lite at $9/mo)
    - Add dropship suppliers as "vendors" via Shopify
    - Use Shopify Storefront API to pull products into Next.js
    - Install: npm install @shopify/hydrogen-react

  Option B: Medusa.js (open source, self-hosted)
    - Free, runs on Railway/Render
    - Needs more setup but no monthly fees

  Option C: Simple product JSON + Stripe
    - Great for starting small
    - Products defined in /src/lib/products.ts
    - Checkout via Stripe Payment Links or Checkout Sessions

  FOR DROPSHIPPING:
  - Common suppliers: Wicki Fence, Hoover Fence, Master Halco
  - Look for suppliers with API/EDI integration
  - Or use Faire, Stocky, or DSers to manage dropship inventory

  IMPLEMENT:
  1. src/lib/shopify.ts — Shopify client + queries
  2. src/app/shop/[category]/page.tsx — category pages
  3. src/app/shop/product/[slug]/page.tsx — product detail
  4. src/app/api/cart/ — cart API routes
  5. src/components/shop/ — CartDrawer, ProductCard, etc.
  ─────────────────────────────────────────────────────────────────
*/

// Placeholder product data — replace with real Shopify/DB queries
const CATEGORIES = [
  { label: "Fence Tools", href: "/shop/tools", count: 12, icon: "🔧" },
  { label: "Fence Panels", href: "/shop/fence-panels", count: 0, icon: "🪵" },
  { label: "Posts & Hardware", href: "/shop/posts-hardware", count: 0, icon: "🔩" },
  { label: "Gate Hardware", href: "/shop/gates", count: 0, icon: "🚪" },
];

const FEATURED_PRODUCTS = [
  {
    id: "1",
    name: "Cedar Privacy Panel 6x8",
    price: 89.99,
    compareAt: null,
    category: "Wood Panels",
    sku: "CDP-6x8-NAT",
    inStock: true,
    slug: "cedar-privacy-panel-6x8",
  },
  {
    id: "2",
    name: "Galvanized Line Post 2\" x 8ft",
    price: 34.99,
    compareAt: 42.0,
    category: "Posts & Hardware",
    sku: "GLP-2-8FT",
    inStock: true,
    slug: "galvanized-line-post-2-8ft",
  },
  {
    id: "3",
    name: "Chain Link Roll 11.5ga 50ft",
    price: 129.0,
    compareAt: null,
    category: "Chain Link",
    sku: "CLR-115-50",
    inStock: true,
    slug: "chain-link-roll-115ga-50ft",
  },
  {
    id: "4",
    name: "Vinyl Flat Top Gate 4ft",
    price: 219.0,
    compareAt: 259.0,
    category: "Gates",
    sku: "VFT-GATE-4",
    inStock: false,
    slug: "vinyl-flat-top-gate-4ft",
  },
  {
    id: "5",
    name: "Post Cap Round Black 2-3/8\"",
    price: 4.99,
    compareAt: null,
    category: "Hardware",
    sku: "PCR-238-BLK",
    inStock: true,
    slug: "post-cap-round-black-238",
  },
  {
    id: "6",
    name: "Wood Fence Post 4x4x8 PT",
    price: 19.99,
    compareAt: null,
    category: "Posts & Hardware",
    sku: "WFP-4x4x8-PT",
    inStock: true,
    slug: "wood-fence-post-4x4x8-pt",
  },
  {
    id: "7",
    name: "Chain Link Tension Bar 48\"",
    price: 8.5,
    compareAt: null,
    category: "Hardware",
    sku: "CLT-48",
    inStock: true,
    slug: "chain-link-tension-bar-48",
  },
  {
    id: "8",
    name: "Cedar Picket 1x4x6 Dog-Ear",
    price: 3.79,
    compareAt: null,
    category: "Wood Panels",
    sku: "CP-1x4x6-DE",
    inStock: true,
    slug: "cedar-picket-1x4x6-dog-ear",
  },
];

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
          <p className="text-brand-fog mt-6 max-w-xl">
            Quality fence panels, posts, hardware, and gates — shipped direct or
            available for pickup. Need installation too?{" "}
            <Link href="/contact" className="text-brand-amber underline">
              Get a quote.
            </Link>
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding py-12 bg-brand-white border-b border-brand-fog">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                className="flex items-center gap-4 p-5 border border-brand-fog hover:border-brand-amber hover:bg-brand-amber/5 transition-all group"
              >
                <span className="text-3xl">{cat.icon}</span>
                <div>
                  <p className="font-display font-800 uppercase text-sm text-brand-black group-hover:text-brand-amber transition-colors">
                    {cat.label}
                  </p>
                  <p className="text-xs font-mono text-brand-silver">
                    {cat.count} products
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding section-gap bg-brand-white">
        <div className="max-w-7xl mx-auto">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display font-900 text-3xl uppercase text-brand-black">
              All Products
            </h2>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-iron border border-brand-fog px-4 py-2 hover:border-brand-amber transition-colors">
                <Filter size={14} />
                Filter
              </button>
              <select className="text-xs font-mono uppercase tracking-wider border border-brand-fog px-4 py-2 text-brand-iron bg-white focus:border-brand-amber focus:outline-none">
                <option>Sort: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_PRODUCTS.map((product) => (
              <div key={product.id} className="card-product">
                {/* Product image */}
                <Link href={`/shop/product/${product.slug}`}>
                  <div className="relative h-52 bg-brand-fog/20 overflow-hidden">
                    {/* Replace with actual product image */}
                    <div className="absolute inset-0 flex items-center justify-center text-brand-silver font-mono text-xs">
                      Product Image
                    </div>
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
                        <span className="font-mono text-xs uppercase tracking-widest text-brand-iron">
                          Out of Stock
                        </span>
                      </div>
                    )}
                    {product.compareAt && (
                      <div className="absolute top-3 left-3 bg-brand-amber px-2 py-1 text-white font-mono text-xs uppercase">
                        Sale
                      </div>
                    )}
                  </div>
                </Link>

                <div className="p-5">
                  <span className="text-xs font-mono text-brand-amber uppercase tracking-wider">
                    {product.category}
                  </span>
                  <Link href={`/shop/product/${product.slug}`}>
                    <h3 className="font-display font-700 text-base uppercase mt-1 mb-1 text-brand-black hover:text-brand-amber transition-colors line-clamp-2 leading-tight">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-xs font-mono text-brand-silver mb-3">
                    SKU: {product.sku}
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-display font-800 text-xl text-brand-black">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.compareAt && (
                        <span className="text-sm text-brand-silver line-through ml-2">
                          ${product.compareAt.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <button
                      disabled={!product.inStock}
                      className="flex items-center gap-1.5 bg-brand-black text-white text-xs font-mono uppercase px-3 py-2 hover:bg-brand-amber transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <ShoppingCart size={12} />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination placeholder */}
          <div className="flex justify-center gap-2 mt-12">
            {[1, 2, 3, "..."].map((page) => (
              <button
                key={page}
                className={`w-10 h-10 font-mono text-sm border transition-colors ${
                  page === 1
                    ? "bg-brand-amber border-brand-amber text-white"
                    : "border-brand-fog text-brand-iron hover:border-brand-amber"
                }`}
              >
                {page}
              </button>
            ))}
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
