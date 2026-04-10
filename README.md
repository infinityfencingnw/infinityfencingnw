# Infinity Fencing NW — Website

Next.js website for Infinity Fencing NW LLC. Includes service pages, SEO infrastructure, contact form, gallery, blog, and ecommerce scaffolding.

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Animations | Framer Motion (add as needed) |
| Hosting | Vercel |
| Source Control | GitHub |
| Email (contact form) | Resend (recommended) |
| Ecommerce | Shopify Storefront API (recommended) |

---

## Getting Started

```bash
# 1. Clone and install
npm install

# 2. Set up environment
cp .env.example .env.local
# Fill in values in .env.local

# 3. Run dev server
npm run dev
# → http://localhost:3000
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout — SEO metadata + Schema.org
│   ├── page.tsx            # Homepage
│   ├── about/
│   ├── blog/
│   │   ├── page.tsx        # Blog index
│   │   └── [slug]/         # Individual posts
│   ├── contact/
│   ├── gallery/
│   ├── services/
│   │   ├── page.tsx        # All services
│   │   └── [slug]/         # Individual service pages
│   ├── shop/
│   │   └── page.tsx        # Shop / ecommerce
│   ├── api/
│   │   └── contact/        # Form submission handler
│   ├── sitemap.ts          # Auto-generated XML sitemap
│   └── robots.ts           # robots.txt
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/           # (add homepage section components here)
│   └── ui/                 # (add shared UI components here)
├── lib/                    # (add Shopify client, utils here)
└── styles/
    └── globals.css
```

---

## SEO Strategy

### Pages with SEO targets

| Page | Primary Keyword |
|---|---|
| Homepage | "fence contractor Vancouver WA" |
| /services/wood-fencing | "wood fence installation Vancouver WA" |
| /services/chain-link | "chain link fence Vancouver WA" |
| /services/vinyl-pvc | "vinyl fence installation Vancouver WA" |
| /services/security | "security fencing Vancouver WA" |
| /services/commercial | "commercial fencing Clark County" |
| /services/temporary | "temporary fence rental Vancouver WA" |
| /blog/* | long-tail local keywords |

### What's already built
- `<title>` and `<meta description>` on every page via Next.js Metadata API
- `LocalBusiness` Schema.org JSON-LD in root layout
- `Service` schema on each service page
- `BlogPosting` schema on blog posts
- Auto-generated `/sitemap.xml`
- Auto-generated `/robots.txt`
- OpenGraph + Twitter card tags

### What to add next
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Business Profile (critical for local SEO)
- [ ] Add real photos with descriptive `alt` tags
- [ ] Write 8–12 blog posts targeting local keywords (see /blog/page.tsx for keyword list)
- [ ] Get reviews on Google (embed or link from homepage)
- [ ] Set up Google Analytics 4 (env var: NEXT_PUBLIC_GA_MEASUREMENT_ID)

---

## Contact Form Setup

The form at `/contact` posts to `/api/contact/route.ts`.

**Option 1 — Resend (recommended):**
```bash
npm install resend
```
1. Sign up at [resend.com](https://resend.com) — free tier is plenty
2. Add `RESEND_API_KEY` to `.env.local`
3. Uncomment the Resend block in `/src/app/api/contact/route.ts`
4. Verify your domain in Resend dashboard

**Option 2 — Formspree (zero-code):**
1. Sign up at [formspree.io](https://formspree.io)
2. Replace `action="/api/contact"` on the form with your Formspree URL
3. No backend changes needed

---

## Ecommerce / Dropship Setup

The shop is scaffolded at `/shop`. Here's how to wire it up:

### Option A: Shopify Storefront API (recommended for dropship)

```bash
npm install @shopify/hydrogen-react
# or just use the Storefront API directly with fetch
```

1. Create a Shopify store (Shopify Basic at minimum)
2. Settings → Apps and sales channels → Develop apps
3. Create app → Configure Storefront API scopes
4. Copy domain + token to `.env.local`
5. Create `src/lib/shopify.ts` with GraphQL client
6. Replace placeholder product data in `/shop/page.tsx` with real queries

**Sample Shopify query file to create: `src/lib/shopify.ts`**
```typescript
const SHOPIFY_STOREFRONT_API = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json`;

export async function getProducts() {
  const res = await fetch(SHOPIFY_STOREFRONT_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token":
        process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
    },
    body: JSON.stringify({
      query: `{
        products(first: 20) {
          nodes {
            id title handle
            priceRange { minVariantPrice { amount } }
            images(first: 1) { nodes { url altText } }
          }
        }
      }`,
    }),
    next: { revalidate: 60 }, // ISR — revalidate every 60s
  });
  const data = await res.json();
  return data.data.products.nodes;
}
```

### Dropship Suppliers to Research
- **Master Halco** — largest fence wholesale distributor in NA
- **Hoover Fence** — ships nationwide, wide catalog
- **Wicki Fence** — wholesale panels and materials
- **Stocky / DSers** — dropship order management if needed

---

## Deployment (Vercel + GitHub)

```bash
# One-time setup
# 1. Push to GitHub
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/YOUR_USER/infinity-fencing-nw.git
git push -u origin main

# 2. Import to Vercel
# → vercel.com/new → Import GitHub repo
# → Add environment variables from .env.example
# → Deploy
```

**Automatic deploys:** Every push to `main` auto-deploys. PRs get preview URLs.

**Region:** Set to `pdx1` (Portland) in `vercel.json` for lowest latency to Pacific Northwest visitors.

---

## Next Steps Checklist

### Immediate
- [ ] Replace Unsplash placeholder images with real project photos
- [ ] Add real logo (update Navbar and Footer)
- [ ] Set up contact form email delivery (Resend)
- [ ] Update Google Search Console token in `layout.tsx`
- [ ] Set up Google Business Profile

### Short term
- [ ] Connect Shopify for ecommerce
- [ ] Write first 3–5 blog posts targeting local keywords
- [ ] Add Google Analytics 4
- [ ] Add real customer reviews with photos

### Growth
- [ ] Add product individual pages (`/shop/product/[slug]`)
- [ ] Add cart drawer component
- [ ] Add gallery filter functionality (client component)
- [ ] Add live chat widget (Tidio or Crisp — free tiers available)
- [ ] Set up email marketing (Klaviyo or Mailchimp for post-purchase flows)

---

## Brand Tokens

```
Font: Barlow Condensed (display) + Barlow (body) + IBM Plex Mono (labels)

Colors:
  Black:        #0D0D0D
  Charcoal:     #1A1A1A  
  Steel:        #2C2C2C
  Amber:        #C8831A  ← primary accent
  Amber Light:  #E09B2A
  White:        #F5F4F0
  Silver:       #8A8A8A
```

---

## Questions?

Contact: build@infinityfencingnw.com | 360.200.1005
