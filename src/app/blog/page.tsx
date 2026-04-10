import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Fence Tips & Guides – Blog | Infinity Fencing NW",
  description:
    "Fence installation tips, material guides, and advice for homeowners in Vancouver WA and Clark County. Expert insight from Infinity Fencing NW.",
};

/*
  BLOG & SEO STRATEGY — NOTES FOR CLAUDE CODE
  ─────────────────────────────────────────────
  These blog posts are your LOCAL SEO engine. Target:
  
  HIGH-VALUE LOCAL KEYWORDS TO WRITE ABOUT:
  - "fence contractor Vancouver WA" 
  - "how much does a fence cost in Washington"
  - "wood fence vs vinyl fence Pacific Northwest"
  - "fence permit Clark County WA"
  - "best fence for rainy climate"
  - "how long does a wood fence last in Washington"
  - "chain link fence cost per foot Vancouver WA"
  - "wood fence on metal posts pros cons"
  - "dog fence ideas Vancouver WA"
  - "commercial fencing Clark County"

  RECOMMENDED CMS OPTIONS:
  1. Contentlayer + MDX (file-based, free, great for dev)
     - npm install contentlayer next-contentlayer
     - Write posts as .mdx files in /content/blog/
  
  2. Sanity.io (headless CMS, free tier)
     - Great for client to add posts without code
     - npm install next-sanity
  
  3. Notion + notion-to-md
     - Write in Notion, auto-publish to site
  
  EACH POST SHOULD HAVE:
  - Keyword-rich title and description
  - Local city/county mentions naturally throughout
  - Internal links to relevant service pages
  - A call to action at the end (free estimate)
  - FAQ section (boosts featured snippet chances)
  - 800-1500 words minimum
  ─────────────────────────────────────────────
*/

const POSTS = [
  {
    slug: "wood-fence-metal-posts-vs-wood-posts",
    title: "Wood Posts vs. Metal Posts: Which Lasts Longer in SW Washington?",
    excerpt:
      "Clark County's wet winters are hard on fence posts. We break down why lifetime metal posts outperform wood posts and what the real cost difference looks like over 10 years.",
    category: "Wood Fencing",
    date: "2025-03-15",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=70",
  },
  {
    slug: "fence-permit-clark-county-wa",
    title: "Do You Need a Permit to Build a Fence in Clark County, WA?",
    excerpt:
      "The short answer is: sometimes. Here's when you need a permit, how to get one, and how Infinity Fencing NW handles the paperwork for you.",
    category: "Guides",
    date: "2025-02-28",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=70",
  },
  {
    slug: "fence-cost-guide-vancouver-wa-2025",
    title: "How Much Does a Fence Cost in Vancouver, WA? (2025 Guide)",
    excerpt:
      "A realistic breakdown of fence installation costs in Clark County — including materials, labor, and what factors drive the price up or down.",
    category: "Cost Guides",
    date: "2025-02-10",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=70",
  },
  {
    slug: "vinyl-vs-wood-fence-pacific-northwest",
    title: "Vinyl vs. Wood Fencing in the Pacific Northwest: Which Is Right for You?",
    excerpt:
      "Both have real advantages. We compare maintenance, cost, lifespan, and aesthetics to help you make the right call for your property.",
    category: "Materials",
    date: "2025-01-22",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=70",
  },
  {
    slug: "chain-link-fence-residential-guide",
    title: "Is Chain Link Fencing Right for Your Home? A Homeowner's Guide",
    excerpt:
      "Chain link has a reputation problem it doesn't deserve. Here's when it's the smartest choice — and how to make it look better than you'd expect.",
    category: "Chain Link",
    date: "2025-01-08",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=70",
  },
  {
    slug: "best-fence-for-dogs-vancouver-wa",
    title: "The Best Fence Types for Dogs in Vancouver, WA",
    excerpt:
      "Dogs are escape artists. We've seen it all — here are the fencing solutions that actually keep them in, depending on your breed and yard size.",
    category: "Guides",
    date: "2024-12-19",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=70",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-black pt-32 pb-16 section-padding">
        <div className="max-w-7xl mx-auto">
          <span className="section-label">Knowledge Base</span>
          <h1 className="text-6xl md:text-8xl font-display font-900 uppercase text-brand-white leading-none">
            Fence
            <br />
            <span className="text-brand-amber">Guides</span>
          </h1>
          <p className="text-brand-fog mt-6 max-w-xl">
            Tips, cost guides, and local advice for homeowners and businesses in
            Vancouver WA and SW Washington.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="section-padding pt-16 bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <Link
            href={`/blog/${POSTS[0].slug}`}
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 group border border-brand-fog hover:border-brand-amber transition-colors overflow-hidden"
          >
            <div className="relative h-64 lg:h-auto min-h-[320px] overflow-hidden">
              <Image
                src={POSTS[0].image}
                alt={POSTS[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-10 flex flex-col justify-center bg-brand-charcoal">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-amber bg-brand-amber/10 px-2 py-1">
                  {POSTS[0].category}
                </span>
                <span className="text-xs font-mono text-brand-silver">
                  Featured
                </span>
              </div>
              <h2 className="font-display font-900 text-3xl uppercase text-brand-white mb-4 leading-tight group-hover:text-brand-amber transition-colors">
                {POSTS[0].title}
              </h2>
              <p className="text-brand-fog text-sm leading-relaxed mb-6">
                {POSTS[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs font-mono text-brand-silver">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {POSTS[0].date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {POSTS[0].readTime} read
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Post grid */}
      <section className="section-padding py-16 pb-24 bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {POSTS.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group border border-brand-fog hover:border-brand-amber transition-colors overflow-hidden flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs font-mono uppercase tracking-widest text-brand-amber mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-display font-800 text-xl uppercase text-brand-black mb-3 leading-tight group-hover:text-brand-amber transition-colors flex-1">
                    {post.title}
                  </h3>
                  <p className="text-brand-iron text-sm leading-relaxed mb-5">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs font-mono text-brand-silver">
                      <span className="flex items-center gap-1">
                        <Calendar size={11} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-brand-amber flex items-center gap-1">
                      Read <ArrowRight size={11} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
