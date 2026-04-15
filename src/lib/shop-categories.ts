/**
 * Shop category taxonomy — mirrors SWI Fence Supply structure.
 * Used by: /shop, /shop/[category], /shop/[category]/[subcategory]
 */

export interface SubSubCategory {
  label: string;
  slug: string;
}

export interface ShopSubCategory {
  label: string;
  slug: string;
  children?: SubSubCategory[];
}

export interface ShopCategory {
  label: string;
  slug: string;
  description: string;
  pexelsId: number;
  subcategories: ShopSubCategory[];
}

export const SHOP_CATEGORIES: ShopCategory[] = [
  {
    label: "Cedar Fence",
    slug: "cedar-fence",
    description:
      "Western red cedar rails, pickets, posts, and everything you need for a classic cedar privacy fence.",
    pexelsId: 5126304,
    subcategories: [
      {
        label: "Rails",
        slug: "rails",
        children: [{ label: "Pressure Treated", slug: "pressure-treated" }],
      },
      { label: "Fence Pickets", slug: "fence-pickets" },
      { label: "Fasteners", slug: "fasteners" },
      { label: "Posts", slug: "posts" },
      { label: "Gate Hardware", slug: "gate-hardware" },
      { label: "Post Brackets", slug: "post-brackets" },
      {
        label: "Stain & Seal",
        slug: "stain-and-seal",
        children: [
          { label: "Semi Transparent", slug: "semi-transparent" },
          { label: "Transparent", slug: "transparent" },
          { label: "200 Series Low VOC", slug: "200-series-low-voc" },
          { label: "Semi Solid Latex", slug: "semi-solid-latex" },
          { label: "Tools & Cleaner", slug: "tools-and-cleaner" },
        ],
      },
    ],
  },
  {
    label: "Vinyl Fence",
    slug: "vinyl-fence",
    description:
      "Low-maintenance vinyl fence systems in white and tan — panels, posts, rails, gates, and matching hardware.",
    pexelsId: 11693890,
    subcategories: [
      { label: "Posts", slug: "posts" },
      { label: "Rails", slug: "rails" },
      { label: "Pickets & Panels", slug: "pickets-and-panels" },
      { label: "Gates", slug: "gates" },
      { label: "Gate Hardware", slug: "gate-hardware" },
      { label: "Post Caps", slug: "post-caps" },
      { label: "Fasteners", slug: "fasteners" },
    ],
  },
  {
    label: "Chain Link Fence",
    slug: "chain-link",
    description:
      "Galvanized and vinyl-coated chain link fabric, line posts, terminal posts, top rail, fittings, and gates.",
    pexelsId: 2381712,
    subcategories: [
      { label: "Fabric & Mesh", slug: "fabric-and-mesh" },
      { label: "Posts", slug: "posts" },
      { label: "Top Rail", slug: "top-rail" },
      { label: "Fittings & Hardware", slug: "fittings-and-hardware" },
      { label: "Gates", slug: "gates" },
      { label: "Barbed Wire", slug: "barbed-wire" },
      { label: "Privacy Slats", slug: "privacy-slats" },
    ],
  },
  {
    label: "Agricultural Fence",
    slug: "agricultural",
    description:
      "T-posts, woven wire, barbed wire, electric fence systems, and farm gate hardware for rural properties.",
    pexelsId: 951408,
    subcategories: [
      { label: "T-Posts", slug: "t-posts" },
      { label: "Woven Wire", slug: "woven-wire" },
      { label: "Barbed Wire", slug: "barbed-wire" },
      { label: "Electric Fence", slug: "electric-fence" },
      { label: "Gates", slug: "gates" },
      { label: "Clips & Staples", slug: "clips-and-staples" },
      { label: "Posts", slug: "posts" },
    ],
  },
  {
    label: "Gate Operators",
    slug: "gate-operators",
    description:
      "Automated slide and swing gate operators, keypad and loop detector access control, and safety beam devices.",
    pexelsId: 48246,
    subcategories: [
      { label: "Slide Gate Operators", slug: "slide-gate" },
      { label: "Swing Gate Operators", slug: "swing-gate" },
      { label: "Access Control", slug: "access-control" },
      { label: "Safety Devices", slug: "safety-devices" },
      { label: "Wiring & Accessories", slug: "wiring-and-accessories" },
    ],
  },
  {
    label: "Ornamental Fences",
    slug: "ornamental",
    description:
      "Aluminum and steel ornamental fence panels, posts, gates, and decorative post caps for commercial and residential use.",
    pexelsId: 683402,
    subcategories: [
      { label: "Panels", slug: "panels" },
      { label: "Posts", slug: "posts" },
      { label: "Gates", slug: "gates" },
      { label: "Post Caps", slug: "post-caps" },
      { label: "Hardware", slug: "hardware" },
    ],
  },
  {
    label: "Hardware",
    slug: "hardware",
    description:
      "Post caps, hinges, latches, tension bands, wire ties, fasteners, and fence brackets for every fence type.",
    pexelsId: 9581523,
    subcategories: [
      { label: "Post Caps", slug: "post-caps" },
      { label: "Hinges & Latches", slug: "hinges-and-latches" },
      { label: "Wire & Fasteners", slug: "wire-and-fasteners" },
      { label: "Brackets & Connectors", slug: "brackets-and-connectors" },
      { label: "Tension Products", slug: "tension-products" },
      { label: "Locks & Security", slug: "locks-and-security" },
    ],
  },
  {
    label: "Tools & Equipment",
    slug: "tools",
    description:
      "Professional fence installation tools — staplers, pliers, wire stretchers, panel jacks, and more.",
    pexelsId: 14306688,
    subcategories: [
      { label: "Driving & Stapling", slug: "driving-and-stapling" },
      { label: "Pliers & Cutters", slug: "pliers-and-cutters" },
      { label: "Wire Stretching", slug: "wire-stretching" },
      { label: "Post Pulling", slug: "post-pulling" },
      { label: "Bracing & Digging", slug: "bracing-and-digging" },
      { label: "Wire Joining", slug: "wire-joining" },
    ],
  },
  {
    label: "Other",
    slug: "other",
    description:
      "Safety equipment, fence signs, property markers, surveying tools, and gift cards.",
    pexelsId: 5860835,
    subcategories: [
      { label: "Safety Equipment", slug: "safety-equipment" },
      { label: "Signs & Markers", slug: "signs-and-markers" },
      { label: "Surveying Tools", slug: "surveying-tools" },
      { label: "Gift Cards", slug: "gift-cards" },
    ],
  },
];

// ── Lookup helpers ────────────────────────────────────────────────

export function getCategoryBySlug(slug: string): ShopCategory | undefined {
  return SHOP_CATEGORIES.find((c) => c.slug === slug);
}

export function getSubCategoryBySlug(
  categorySlug: string,
  subSlug: string
): ShopSubCategory | undefined {
  return getCategoryBySlug(categorySlug)?.subcategories.find(
    (s) => s.slug === subSlug
  );
}

export function pexelsUrl(id: number, w = 900): string {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
}
