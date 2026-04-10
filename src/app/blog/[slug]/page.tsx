import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";

// Placeholder — replace with real CMS/MDX data fetching
const POST_DATA: Record<
  string,
  {
    title: string;
    description: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    content: string;
  }
> = {
  "fence-permit-clark-county-wa": {
    title: "Do You Need a Permit to Build a Fence in Clark County, WA?",
    description:
      "The short answer is: sometimes. Here's when you need a permit to build a fence in Clark County WA, how to get one, and what Infinity Fencing NW handles for you.",
    category: "Guides",
    date: "February 28, 2025",
    readTime: "4 min",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    content: `
Clark County has specific rules about when a fence permit is required, and getting it wrong can mean expensive corrections or problems when you sell your home. Here's what you need to know.

## When You DO Need a Permit

In Clark County, you generally need a permit if your fence:

- Is **over 6 feet tall** anywhere on your property
- Is located in a **front yard and over 4 feet tall**
- Is part of a **pool enclosure** (required by state law)
- Is on a **corner lot** and could obstruct sightlines

## When You DON'T Need a Permit

Most standard residential fences don't require a permit. If your fence is:

- 6 feet or under in height in your side or backyard
- Under 4 feet in the front yard
- Not enclosing a pool

…you're likely fine without one in most Clark County jurisdictions.

## City vs. County Rules

Clark County's unincorporated areas follow county code, but if you're in **Vancouver, Camas, Washougal, Battle Ground**, or another incorporated city, the city's rules apply. Some cities are stricter on setbacks and height — always verify with your city's planning department.

## What About HOA Rules?

Your HOA may have additional requirements on top of permit rules — specific materials, colors, or height limits. Always check your CC&Rs before choosing a fence style.

## How Infinity Fencing NW Handles It

When we do your estimate, we'll flag whether your project likely needs a permit. If it does, we handle the permit application as part of our service. You don't need to navigate the county building department yourself.

**Have questions about your specific project?** [Contact us for a free estimate](/contact) — we'll walk you through what's required.
    `.trim(),
  },
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = POST_DATA[params.slug];
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [{ url: post.image }],
      type: "article",
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = POST_DATA[params.slug];

  // Fallback for posts not yet written
  if (!post) {
    return (
      <div className="pt-40 section-padding text-center">
        <h1 className="font-display font-900 text-4xl uppercase text-brand-black mb-4">
          Post Coming Soon
        </h1>
        <p className="text-brand-iron mb-8">
          This article is being written. Check back soon.
        </p>
        <Link href="/blog" className="btn-secondary">
          <ArrowLeft size={16} />
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            image: post.image,
            datePublished: post.date,
            author: {
              "@type": "Organization",
              name: "Infinity Fencing NW",
              url: "https://www.infinityfencingnw.com",
            },
            publisher: {
              "@type": "Organization",
              name: "Infinity Fencing NW",
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-brand-black pt-32 pb-0">
        <div className="section-padding pb-12 max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-silver hover:text-brand-amber transition-colors mb-8"
          >
            <ArrowLeft size={12} />
            All Posts
          </Link>
          <span className="section-label">{post.category}</span>
          <h1 className="text-4xl md:text-6xl font-display font-900 uppercase text-brand-white leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm font-mono text-brand-silver">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.readTime} read
            </span>
          </div>
        </div>
        <div className="relative h-64 md:h-96 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover opacity-60"
          />
        </div>
      </section>

      {/* Content */}
      <section className="section-padding py-16 bg-brand-white">
        <div className="max-w-3xl mx-auto">
          {/* Prose content — replace with MDX renderer when using real CMS */}
          <div className="prose prose-lg max-w-none text-brand-iron [&_h2]:font-display [&_h2]:font-900 [&_h2]:uppercase [&_h2]:text-3xl [&_h2]:text-brand-black [&_h2]:mt-10 [&_h2]:mb-4 [&_strong]:text-brand-black [&_a]:text-brand-amber [&_a]:underline [&_a]:hover:text-brand-amber-light">
            {post.content.split("\n\n").map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <h2 key={i} className="font-display font-900 text-3xl uppercase text-brand-black mt-10 mb-4">
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              if (block.startsWith("- ")) {
                const items = block.split("\n").filter((l) => l.startsWith("- "));
                return (
                  <ul key={i} className="space-y-2 my-4 pl-4">
                    {items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-brand-iron">
                        <span className="text-brand-amber mt-1.5 shrink-0">→</span>
                        <span dangerouslySetInnerHTML={{ __html: item.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p
                  key={i}
                  className="text-brand-iron leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{
                    __html: block
                      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-brand-amber underline hover:text-brand-amber-light">$1</a>'),
                  }}
                />
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-brand-charcoal p-8">
            <h3 className="font-display font-900 text-2xl uppercase text-brand-white mb-3">
              Ready for Your Free Estimate?
            </h3>
            <p className="text-brand-fog text-sm mb-6">
              Serving Vancouver WA, Clark County, and SW Washington. Licensed,
              insured, and veteran owned.
            </p>
            <Link href="/contact" className="btn-primary">
              Get a Free Quote
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
