import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Instagram, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Follow Us – Instagram & TikTok | Infinity Fencing NW",
  description:
    "Follow Infinity Fencing NW on Instagram and TikTok for project photos, fence tips, and behind-the-scenes content from Poulsbo WA and Kitsap County.",
};

// TikTok icon since lucide doesn't include it
function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.74a4.85 4.85 0 01-1.01-.05z" />
    </svg>
  );
}

// To embed specific posts, paste Instagram post URLs (instagram.com/p/POSTID)
// or TikTok video URLs (tiktok.com/@infinityfencingnw/video/VIDEOID) here.
// Leave the array empty to hide that section.
const INSTAGRAM_POSTS: { url: string; caption: string }[] = [
  // Example: { url: "https://www.instagram.com/p/POSTID/", caption: "Caption here" }
];

const TIKTOK_POSTS: { url: string; caption: string }[] = [
  // Example: { url: "https://www.tiktok.com/@infinityfencingnw/video/VIDEOID", caption: "Caption here" }
];

const HIGHLIGHTS = [
  {
    label: "Project Photos",
    desc: "Before & after shots from recent installs across Kitsap County.",
    icon: "📸",
  },
  {
    label: "Fence Tips",
    desc: "Quick tips on maintenance, materials, and what to look for when hiring a contractor.",
    icon: "💡",
  },
  {
    label: "Behind the Scenes",
    desc: "The crew, the process, and what goes into building a fence that lasts decades.",
    icon: "🎬",
  },
  {
    label: "Time-Lapses",
    desc: "Full fence installs condensed into satisfying short clips on TikTok.",
    icon: "⚡",
  },
];

export default function SocialPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-black pt-32 pb-16 section-padding">
        <div className="max-w-7xl mx-auto">
          <span className="section-label">Social Media</span>
          <h1 className="text-6xl md:text-8xl font-display font-900 uppercase text-brand-white leading-none">
            Follow
            <br />
            <span className="text-brand-amber">Along</span>
          </h1>
          <p className="text-brand-fog mt-6 max-w-xl text-lg">
            Project photos, fence tips, and behind-the-scenes content from our
            crew in Poulsbo WA and Kitsap County.
          </p>
        </div>
      </section>

      {/* Social profile cards */}
      <section className="section-padding section-gap bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/infinityfencingnw/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden border border-brand-fog hover:border-brand-amber transition-all duration-300 p-10 flex flex-col justify-between min-h-[320px] bg-gradient-to-br from-[#f9f9f9] to-white"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] flex items-center justify-center">
                    <Instagram size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-brand-silver">
                      Instagram
                    </p>
                    <p className="font-display font-800 text-lg uppercase text-brand-black">
                      @infinityfencingnw
                    </p>
                  </div>
                </div>
                <h2 className="font-display font-900 text-3xl uppercase text-brand-black mb-4 group-hover:text-brand-amber transition-colors leading-tight">
                  Project Photos &<br />Job Site Updates
                </h2>
                <p className="text-brand-iron text-sm leading-relaxed max-w-sm">
                  Follow our Instagram for completed fence installs, before &
                  after photos, and project highlights from across Kitsap County.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-8 text-brand-amber font-mono text-xs uppercase tracking-widest">
                Follow on Instagram <ExternalLink size={12} />
              </div>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@infinityfencingnw"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden border border-brand-fog hover:border-brand-amber transition-all duration-300 p-10 flex flex-col justify-between min-h-[320px] bg-gradient-to-br from-[#f9f9f9] to-white"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-brand-black flex items-center justify-center">
                    <TikTokIcon size={22} />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-brand-silver">
                      TikTok
                    </p>
                    <p className="font-display font-800 text-lg uppercase text-brand-black">
                      @infinityfencingnw
                    </p>
                  </div>
                </div>
                <h2 className="font-display font-900 text-3xl uppercase text-brand-black mb-4 group-hover:text-brand-amber transition-colors leading-tight">
                  Time-Lapses &<br />Fence Builds
                </h2>
                <p className="text-brand-iron text-sm leading-relaxed max-w-sm">
                  Watch full fence installs condensed into short videos. Chain
                  link runs, wood privacy panels, gate builds — all on TikTok.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-8 text-brand-amber font-mono text-xs uppercase tracking-widest">
                Follow on TikTok <ExternalLink size={12} />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* What we post */}
      <section className="section-padding section-gap bg-brand-charcoal">
        <div className="max-w-7xl mx-auto">
          <span className="section-label">What We Post</span>
          <h2 className="font-display font-900 text-5xl uppercase text-brand-white mb-12">
            What to Expect
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIGHLIGHTS.map((item) => (
              <div key={item.label} className="border-t-2 border-brand-amber pt-6">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="font-display font-900 text-xl uppercase text-brand-white mb-3">
                  {item.label}
                </h3>
                <p className="text-brand-fog text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Instagram posts — populated when INSTAGRAM_POSTS has entries */}
      {INSTAGRAM_POSTS.length > 0 && (
        <section className="section-padding section-gap bg-brand-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <Instagram size={18} className="text-brand-amber" />
              <span className="section-label" style={{ marginBottom: 0 }}>
                Instagram
              </span>
            </div>
            <h2 className="font-display font-900 text-4xl uppercase text-brand-black mb-10">
              Recent Posts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {INSTAGRAM_POSTS.map((post, i) => (
                <a
                  key={i}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border border-brand-fog hover:border-brand-amber transition-colors overflow-hidden"
                >
                  <iframe
                    src={`${post.url}embed/`}
                    className="w-full"
                    height="480"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency
                  />
                  {post.caption && (
                    <div className="p-4">
                      <p className="text-brand-iron text-sm leading-relaxed line-clamp-2">
                        {post.caption}
                      </p>
                    </div>
                  )}
                </a>
              ))}
            </div>
            <div className="mt-8">
              <a
                href="https://www.instagram.com/infinityfencingnw/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex"
              >
                View All on Instagram
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Embedded TikTok posts — populated when TIKTOK_POSTS has entries */}
      {TIKTOK_POSTS.length > 0 && (
        <section className="section-padding section-gap bg-brand-fog/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <TikTokIcon size={18} />
              <span className="section-label" style={{ marginBottom: 0 }}>
                TikTok
              </span>
            </div>
            <h2 className="font-display font-900 text-4xl uppercase text-brand-black mb-10">
              Latest Videos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {TIKTOK_POSTS.map((post, i) => (
                <a
                  key={i}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border border-brand-fog hover:border-brand-amber transition-colors overflow-hidden"
                >
                  <div className="aspect-[9/16] bg-brand-charcoal flex items-center justify-center relative overflow-hidden">
                    <div className="text-center text-white p-8">
                      <TikTokIcon size={40} />
                      <p className="mt-4 font-mono text-xs uppercase tracking-widest text-brand-fog">
                        Watch on TikTok
                      </p>
                    </div>
                  </div>
                  {post.caption && (
                    <div className="p-4">
                      <p className="text-brand-iron text-sm leading-relaxed line-clamp-2">
                        {post.caption}
                      </p>
                    </div>
                  )}
                </a>
              ))}
            </div>
            <div className="mt-8">
              <a
                href="https://www.tiktok.com/@infinityfencingnw"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex"
              >
                View All on TikTok
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-brand-amber section-padding py-20 text-center">
        <h2 className="font-display font-900 text-5xl uppercase text-white mb-4">
          Ready to Build?
        </h2>
        <p className="text-white/80 mb-8 max-w-md mx-auto">
          Like what you see on social? Get a free estimate and let's plan your
          project in Kitsap County.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-white text-brand-amber font-display font-700 uppercase tracking-wider px-10 py-5 text-sm hover:bg-brand-black hover:text-white transition-all"
        >
          Get a Free Estimate
          <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}
