import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShoppingCart, ExternalLink, Package } from "lucide-react";
import { listProductsByCategory, SpocketProduct } from "@/lib/spocket";

export const metadata: Metadata = {
  title: "Fence Tools & Equipment – Shop | Infinity Fencing NW",
  description:
    "Professional fence installation tools — post drivers, fence staplers, pliers, wire stretchers, panel jacks, and more. Trusted brands shipped direct.",
};

// ── Try to load live products from Spocket; fall back to static data ──
async function getTools(): Promise<{
  products: SpocketProduct[] | null;
  useLive: boolean;
}> {
  if (!process.env.SPOCKET_CLIENT_ID || !process.env.SPOCKET_CLIENT_SECRET) {
    return { products: null, useLive: false };
  }
  try {
    const data = await listProductsByCategory("fence-tools", 1, 50);
    return { products: data.products, useLive: true };
  } catch (err) {
    console.error("[Shop/Tools] Spocket fetch failed, using static data:", err);
    return { products: null, useLive: false };
  }
}

const TOOL_CATEGORIES = [
  { label: "Driving & Stapling", icon: "🔨", count: 5 },
  { label: "Pliers & Cutters", icon: "🪛", count: 6 },
  { label: "Wire Stretching", icon: "↔️", count: 4 },
  { label: "Post Pulling", icon: "⬆️", count: 3 },
  { label: "Bracing & Digging", icon: "⛏️", count: 4 },
  { label: "Wire Joining", icon: "🔗", count: 3 },
];

const TOOLS = [
  // ── DRIVING & STAPLING ─────────────────────────────────
  {
    id: "st400i",
    name: "STOCKade ST400i Cordless Fencing Stapler",
    brand: "STOCKade",
    brandUrl: "https://www.stockade.com/product/st400i-cordless-post-stapler-system/",
    category: "Driving & Stapling",
    price: 549.00,
    sku: "ST400I",
    desc: "The world's first 4mm / 9-gauge cordless fencing stapler. Drives 2 staples per second. No compressor needed.",
    inStock: true,
    featured: true,
  },
  {
    id: "st400",
    name: "STOCKade ST400 Pneumatic Fencing Stapler",
    brand: "STOCKade",
    brandUrl: "https://www.stockade.com/product/st400-pneumatic-post-stapler-system/",
    category: "Driving & Stapling",
    price: 399.00,
    sku: "ST400",
    desc: "Drives 3 staples per second — 5X faster than hand stapling. The professional standard for high-volume fence builds.",
    inStock: true,
    featured: false,
  },
  {
    id: "st315i",
    name: "STOCKade ST315i Cordless Fencing Stapler",
    brand: "STOCKade",
    brandUrl: "https://www.stockade.com/product/st400i-cordless-utility-stapler-system/",
    category: "Driving & Stapling",
    price: 299.00,
    sku: "ST315I",
    desc: "10.5-gauge cordless stapler. Ideal for smaller properties, repairs, and DIY projects. Impulse technology for consistent results.",
    inStock: true,
    featured: false,
  },
  {
    id: "bump-board",
    name: "Bump Board – Wood Picket Spacing Guide",
    brand: "SWI",
    brandUrl: "https://www.swifence.com/tools-equipment/fence-tools/",
    category: "Driving & Stapling",
    price: 24.99,
    sku: "BMPBRD",
    desc: "Powder-coated red spacing guide for consistent cedar and wood picket placement. Speeds up every wood fence install.",
    inStock: true,
    featured: false,
  },
  // ── PLIERS & CUTTERS ───────────────────────────────────
  {
    id: "pliers-10-round",
    name: "10\" Round Nose Fence Pliers",
    brand: "Tool Guy",
    brandUrl: "https://toolguy.com/product-category/fence-tools/fence-pliers/",
    category: "Pliers & Cutters",
    price: 32.00,
    sku: "TG-PLR-10RN",
    desc: "Dual laser heat-treated jaws cut 9-gauge wire clean. The go-to plier for top rail and chain link tie work.",
    inStock: true,
    featured: false,
  },
  {
    id: "pliers-gator",
    name: "GATOR Series Fence Pliers",
    brand: "Tool Guy",
    brandUrl: "https://toolguy.com/product-category/fence-tools/fence-pliers/",
    category: "Pliers & Cutters",
    price: 45.00,
    sku: "TG-PLR-GATOR",
    desc: "Dual side cutters, straight-through guillotine cutter, and alligator round-nose jaw. Unmatched grip and cut for demanding installs.",
    inStock: true,
    featured: true,
  },
  {
    id: "pliers-8-round",
    name: "8\" Compact Round Nose Fence Pliers",
    brand: "Tool Guy",
    brandUrl: "https://toolguy.com/product-category/fence-tools/fence-pliers/",
    category: "Pliers & Cutters",
    price: 22.00,
    sku: "TG-PLR-8RN",
    desc: "Compact design for tight spots, top rail ties, and chain link work. Heat-treated cutting edges.",
    inStock: true,
    featured: false,
  },
  {
    id: "pliers-8-square",
    name: "8\" Square Nose Fence Pliers",
    brand: "Tool Guy",
    brandUrl: "https://toolguy.com/product-category/fence-tools/fence-pliers/",
    category: "Pliers & Cutters",
    price: 22.00,
    sku: "TG-PLR-8SN",
    desc: "Heat-treated jaws built for tying top rail, gripping wire, and professional chain link work.",
    inStock: true,
    featured: false,
  },
  // ── WIRE STRETCHING ────────────────────────────────────
  {
    id: "cam-grip-stretcher",
    name: "Cam Grip Wire Stretcher",
    brand: "Tool Guy",
    brandUrl: "https://toolguy.com/product-category/fence-tools/",
    category: "Wire Stretching",
    price: 28.00,
    sku: "TG-CAM-STRCH",
    desc: "Spring-loaded cam grip for secure wire pulling. 1/2-ton holding capacity. Works on barbed wire, smooth wire, and chain link with a come-along.",
    inStock: true,
    featured: false,
  },
  {
    id: "maasdam-stretcher",
    name: "Maasdam Pow'R Pull Wire Stretcher",
    brand: "Maasdam",
    brandUrl: "https://www.homedepot.com/b/Lumber-Composites-Fencing-Gates/N-5yc1vZbrl3",
    category: "Wire Stretching",
    price: 34.99,
    sku: "MSDM-8060",
    desc: "1,000 lb. / 1/2-ton capacity. Stretches smooth wire, chain link, and 5/16 cable. A staple on every fence crew.",
    inStock: true,
    featured: false,
  },
  // ── PANEL TOOLS ────────────────────────────────────────
  {
    id: "panel-jack",
    name: "Deluxe Heavy-Duty Panel Jack (3-Way Fence Tool)",
    brand: "Tool Guy",
    brandUrl: "https://toolguy.com/shop/deluxe-heavy-duty-panel-jack-a-3-way-fence-tool/",
    category: "Bracing & Digging",
    price: 89.00,
    sku: "TG-PNJK-DLX",
    desc: "Lifts, holds, and positions fence panels during installation. Three-way design reduces crew size needed on large jobs.",
    inStock: true,
    featured: true,
  },
  // ── WIRE JOINING ───────────────────────────────────────
  {
    id: "twist-tie-tool",
    name: "Easy Twist Tie Drill Tool",
    brand: "SWI",
    brandUrl: "https://www.swifence.com/tools-equipment/fence-tools/wire-joining/",
    category: "Wire Joining",
    price: 44.99,
    sku: "SWI-ETT",
    desc: "Precision-machined drill attachment for attaching Easy Twist ties to chain link. Faster and cleaner than hand tying standard stick ties.",
    inStock: true,
    featured: false,
  },
];

const FEATURED = TOOLS.filter((t) => t.featured);
const ALL = TOOLS;

// ── Helpers for live Spocket products ─────────────────────────────
function spocketPrice(product: SpocketProduct): string {
  const v = product.variants?.[0];
  if (!v?.price) return "—";
  return `$${parseFloat(v.price).toFixed(2)}`;
}

function spocketInStock(product: SpocketProduct): boolean {
  return product.variants?.some((v) => v.available && v.inventory_quantity > 0) ?? false;
}

function spocketSku(product: SpocketProduct): string {
  return product.variants?.[0]?.sku ?? product.id.toUpperCase().slice(0, 10);
}

export default async function ToolsPage() {
  const { products: liveProducts, useLive } = await getTools();

  // Derive featured from Spocket: first 3, or those tagged "featured"
  const liveFeatured = liveProducts
    ? liveProducts.filter((p) => p.tags?.includes("featured")).slice(0, 3).concat(
        liveProducts.filter((p) => !p.tags?.includes("featured"))
      ).slice(0, 3)
    : [];

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-black pt-32 pb-16 section-padding">
        <div className="max-w-7xl mx-auto">
          <span className="section-label">Fence Supply Store</span>
          <h1 className="text-6xl md:text-8xl font-display font-900 uppercase text-brand-white leading-none">
            Fence
            <br />
            <span className="text-brand-amber">Tools</span>
          </h1>
          <p className="text-brand-fog mt-6 max-w-xl text-lg">
            Professional-grade fence tools from STOCKade, Tool Guy, and top
            industry brands. The same tools our crew uses every day.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <span className="text-xs font-mono text-brand-fog/60 flex items-center gap-1.5">
              <Package size={12} className="text-brand-amber" /> Ships direct from supplier
            </span>
          </div>
        </div>
      </section>

      {/* Category pills */}
      <div className="section-padding py-6 bg-brand-white border-b border-brand-fog">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3">
          <Link href="/shop" className="text-xs font-mono uppercase tracking-widest text-brand-iron border border-brand-fog px-4 py-2 hover:border-brand-amber transition-colors">
            ← All Shop
          </Link>
          {TOOL_CATEGORIES.map((cat) => (
            <button
              key={cat.label}
              className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-iron border border-brand-fog px-4 py-2 hover:border-brand-amber hover:text-brand-amber transition-colors"
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Live / coming-soon banner */}
      <div className={`section-padding py-4 border-b ${useLive ? "bg-green-50 border-green-200" : "bg-brand-amber/10 border-brand-amber/30"}`}>
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          {useLive ? (
            <>
              <span className="text-green-700 font-mono text-xs uppercase tracking-widest font-700">● Live inventory</span>
              <span className="text-green-800 text-xs">Products synced from Spocket supplier catalog.</span>
            </>
          ) : (
            <>
              <span className="text-brand-amber font-mono text-xs uppercase tracking-widest font-700">Store launching soon</span>
              <span className="text-brand-iron text-xs">— We're setting up supplier accounts. Use "Request Quote" to order now or call <a href="tel:3602001005" className="text-brand-amber underline">360.200.1005</a>.</span>
            </>
          )}
        </div>
      </div>

      {/* Featured tools */}
      <section className="section-padding py-12 bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-900 text-3xl uppercase text-brand-black mb-8">
            Featured Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useLive && liveFeatured.length > 0
              ? liveFeatured.map((product) => {
                  const imgSrc = product.images?.[0]?.src;
                  const inStock = spocketInStock(product);
                  return (
                    <div key={product.id} className="border-2 border-brand-amber overflow-hidden flex flex-col bg-white">
                      <div className="h-48 bg-brand-fog/20 relative overflow-hidden">
                        {imgSrc ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={imgSrc} alt={product.images[0].alt ?? product.title} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="text-center p-6">
                              <p className="font-display font-900 text-xl uppercase text-brand-black mb-1">{product.vendor}</p>
                              <p className="font-mono text-xs text-brand-silver uppercase tracking-widest">{spocketSku(product)}</p>
                            </div>
                          </div>
                        )}
                        <div className="absolute top-3 left-3 bg-brand-amber px-2 py-1">
                          <span className="text-white font-mono text-xs uppercase tracking-widest">Featured</span>
                        </div>
                        {!inStock && (
                          <div className="absolute top-3 right-3 bg-brand-iron px-2 py-1">
                            <span className="text-white font-mono text-xs uppercase tracking-widest">Out of Stock</span>
                          </div>
                        )}
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <span className="text-xs font-mono text-brand-amber uppercase tracking-widest mb-2">{product.category || product.vendor}</span>
                        <h3 className="font-display font-800 text-lg uppercase text-brand-black mb-2 leading-tight flex-1">
                          {product.title}
                        </h3>
                        <p className="text-brand-iron text-sm leading-relaxed mb-5 line-clamp-3"
                          dangerouslySetInnerHTML={{ __html: (product.description?.replace(/<[^>]*>/g, " ").trim().slice(0, 200) ?? "") + "…" }} />
                        <div className="flex items-center justify-between">
                          <span className="font-display font-900 text-2xl text-brand-black">{spocketPrice(product)}</span>
                          <Link href="/contact"
                            className="flex items-center gap-1 bg-brand-black text-white text-xs font-mono uppercase px-4 py-2 hover:bg-brand-amber transition-colors">
                            <ShoppingCart size={11} /> Order
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })
              : FEATURED.map((tool) => (
                <div key={tool.id} className="border-2 border-brand-amber overflow-hidden flex flex-col bg-white">
                  <div className="h-48 bg-brand-fog/20 flex items-center justify-center relative">
                    <div className="text-center p-6">
                      <p className="font-display font-900 text-xl uppercase text-brand-black mb-1">{tool.brand}</p>
                      <p className="font-mono text-xs text-brand-silver uppercase tracking-widest">{tool.sku}</p>
                    </div>
                    <div className="absolute top-3 left-3 bg-brand-amber px-2 py-1">
                      <span className="text-white font-mono text-xs uppercase tracking-widest">Featured</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs font-mono text-brand-amber uppercase tracking-widest mb-2">{tool.category}</span>
                    <h3 className="font-display font-800 text-lg uppercase text-brand-black mb-2 leading-tight flex-1">
                      {tool.name}
                    </h3>
                    <p className="text-brand-iron text-sm leading-relaxed mb-5">{tool.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-display font-900 text-2xl text-brand-black">${tool.price.toFixed(2)}</span>
                      <div className="flex gap-2">
                        <a href={tool.brandUrl} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs font-mono uppercase border border-brand-fog px-3 py-2 hover:border-brand-amber text-brand-iron transition-colors">
                          <ExternalLink size={11} /> Mfr
                        </a>
                        <Link href="/contact"
                          className="flex items-center gap-1 bg-brand-black text-white text-xs font-mono uppercase px-4 py-2 hover:bg-brand-amber transition-colors">
                          <ShoppingCart size={11} /> Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* All tools */}
      <section className="section-padding pb-24 bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-900 text-3xl uppercase text-brand-black mb-8">
            {useLive && liveProducts?.length ? `All Tools (${liveProducts.length})` : "All Tools"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useLive && liveProducts?.length
              ? liveProducts.map((product) => {
                  const imgSrc = product.images?.[0]?.src;
                  const inStock = spocketInStock(product);
                  return (
                    <div key={product.id} className="border border-brand-fog hover:border-brand-amber transition-colors flex flex-col bg-white">
                      <div className="h-40 bg-brand-fog/20 relative overflow-hidden">
                        {imgSrc ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={imgSrc} alt={product.images[0].alt ?? product.title} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center px-4 text-center">
                            <div>
                              <p className="font-display font-800 text-base uppercase text-brand-black">{product.vendor}</p>
                              <p className="font-mono text-xs text-brand-silver uppercase tracking-widest mt-1">{spocketSku(product)}</p>
                            </div>
                          </div>
                        )}
                        {!inStock && (
                          <div className="absolute bottom-0 left-0 right-0 bg-brand-iron/80 py-1 text-center">
                            <span className="text-white font-mono text-xs uppercase tracking-widest">Out of Stock</span>
                          </div>
                        )}
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <span className="text-xs font-mono text-brand-amber uppercase tracking-widest mb-2">{product.category || product.vendor}</span>
                        <h3 className="font-display font-700 text-sm uppercase text-brand-black mb-2 leading-tight flex-1 line-clamp-2">
                          {product.title}
                        </h3>
                        <p className="text-brand-iron text-xs leading-relaxed mb-4 line-clamp-2"
                          dangerouslySetInnerHTML={{ __html: (product.description?.replace(/<[^>]*>/g, " ").trim().slice(0, 120) ?? "") + "…" }} />
                        <div className="flex items-center justify-between">
                          <span className="font-display font-800 text-lg text-brand-black">{spocketPrice(product)}</span>
                          <Link href="/contact"
                            className="flex items-center gap-1 bg-brand-black text-white text-xs font-mono uppercase px-3 py-1.5 hover:bg-brand-amber transition-colors">
                            Order
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })
              : ALL.map((tool) => (
                <div key={tool.id} className="border border-brand-fog hover:border-brand-amber transition-colors flex flex-col bg-white">
                  <div className="h-40 bg-brand-fog/20 flex items-center justify-center">
                    <div className="text-center px-4">
                      <p className="font-display font-800 text-base uppercase text-brand-black">{tool.brand}</p>
                      <p className="font-mono text-xs text-brand-silver uppercase tracking-widest mt-1">{tool.sku}</p>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-xs font-mono text-brand-amber uppercase tracking-widest mb-2">{tool.category}</span>
                    <h3 className="font-display font-700 text-sm uppercase text-brand-black mb-2 leading-tight flex-1 line-clamp-2">
                      {tool.name}
                    </h3>
                    <p className="text-brand-iron text-xs leading-relaxed mb-4 line-clamp-2">{tool.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-display font-800 text-lg text-brand-black">${tool.price.toFixed(2)}</span>
                      <div className="flex gap-1.5">
                        <a href={tool.brandUrl} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs font-mono border border-brand-fog px-2 py-1.5 hover:border-brand-amber text-brand-iron transition-colors">
                          <ExternalLink size={10} />
                        </a>
                        <Link href="/contact"
                          className="flex items-center gap-1 bg-brand-black text-white text-xs font-mono uppercase px-3 py-1.5 hover:bg-brand-amber transition-colors">
                          Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* Supplier note */}
      <section className="section-padding py-16 bg-brand-charcoal">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="section-label">How It Works</span>
            <h2 className="font-display font-900 text-3xl uppercase text-brand-white mb-4">
              Direct From Supplier
            </h2>
            <p className="text-brand-fog text-sm leading-relaxed">
              We source directly from manufacturers like STOCKade and Tool Guy.
              When you order a tool from us, it ships from the supplier to you —
              no middleman markup, just trade pricing passed on to you.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { brand: "STOCKade", desc: "Fence staplers & staples", url: "https://www.stockade.com/us/" },
              { brand: "Tool Guy", desc: "Fence pliers, stretchers & panel tools", url: "https://toolguy.com/" },
              { brand: "Nationwide Industries", desc: "Gate hardware & hinges", url: "https://nationwideindustries.com/" },
            ].map((s) => (
              <a key={s.brand} href={s.url} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-between border border-brand-fog/30 p-4 hover:border-brand-amber transition-colors group">
                <div>
                  <p className="font-display font-800 text-sm uppercase text-brand-white">{s.brand}</p>
                  <p className="text-brand-fog text-xs">{s.desc}</p>
                </div>
                <ExternalLink size={14} className="text-brand-silver group-hover:text-brand-amber transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-amber section-padding py-16 text-center">
        <h2 className="font-display font-900 text-4xl uppercase text-white mb-3">
          Need a Tool We Don't List?
        </h2>
        <p className="text-white/80 mb-6 max-w-md mx-auto">
          Call us or send a message — if it's fence-related we can source it.
        </p>
        <Link href="/contact"
          className="inline-flex items-center gap-2 bg-white text-brand-amber font-display font-700 uppercase tracking-wider px-10 py-5 text-sm hover:bg-brand-black hover:text-white transition-all">
          Contact Us
          <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}
