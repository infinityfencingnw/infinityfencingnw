import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Instagram, Facebook, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Follow Us – Social Media | Infinity Fencing NW",
  description:
    "Follow Infinity Fencing NW on Instagram, TikTok, and Facebook. Real fence builds, bad jokes, quality materials, and people who genuinely love what they do — in Poulsbo WA.",
};

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

// Paste Instagram post URLs (instagram.com/p/POSTID) here to embed them.
const INSTAGRAM_POSTS: { url: string; caption: string }[] = [];

// TikTok video IDs — extracted from @infinityfencingnw video URLs
const TIKTOK_VIDEOS = [
  "7618743801372347679",
  "7582769195033562398",
  "7582697022076046622",
  "7541899584218336543",
  "7518964948756630815",
  "7485436597542964510",
  "7471773968597257502",
  "7467057222023957791",
  "7453688516564815135",
  "7442184690976525614",
  "7435074828127800618",
];

const HIGHLIGHTS = [
  {
    label: "Nice People. Seriously.",
    desc: "We show up on time, crack a few jokes, and leave your yard cleaner than we found it. Life's too short to work with people who aren't fun.",
    icon: "😄",
  },
  {
    label: "Quality Materials",
    desc: "We don't cut corners on what goes into the ground. Every post, panel, and gate is built to outlast the neighbors' fence by a decade.",
    icon: "🪵",
  },
  {
    label: "Real Builds. No Filters.",
    desc: "Behind-the-scenes footage of actual installs — the hard work, the sweat, the satisfaction of a perfectly set post line.",
    icon: "🎬",
  },
  {
    label: "Doing What We Love",
    desc: "We genuinely love building fences. That's not a marketing line — it shows in every crew member, every project, every day.",
    icon: "❤️",
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
          <p className="text-brand-fog mt-6 max-w-2xl text-lg leading-relaxed">
            We build fences for a living and we love every minute of it. Follow
            along for real project content, the occasional terrible joke, and
            proof that quality construction and a good attitude aren't mutually
            exclusive. Nice fences. Nice people. That's the whole thing.
          </p>
        </div>
      </section>

      {/* Social profile cards */}
      <section className="section-padding section-gap bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/infinityfencingnw/"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-brand-fog hover:border-brand-amber transition-all duration-300 p-10 flex flex-col justify-between min-h-[300px] bg-gradient-to-br from-[#f9f9f9] to-white"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center">
                    <Instagram size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-brand-silver">Instagram</p>
                    <p className="font-display font-800 text-base uppercase text-brand-black">@infinityfencingnw</p>
                  </div>
                </div>
                <h2 className="font-display font-900 text-2xl uppercase text-brand-black mb-3 group-hover:text-brand-amber transition-colors leading-tight">
                  Project Photos &<br />Job Site Updates
                </h2>
                <p className="text-brand-iron text-sm leading-relaxed">
                  Completed installs, before & afters, and the kind of fence
                  photos that make your neighbors jealous. Follow for the good
                  stuff.
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
              className="group border border-brand-fog hover:border-brand-amber transition-all duration-300 p-10 flex flex-col justify-between min-h-[300px] bg-gradient-to-br from-[#f9f9f9] to-white"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-brand-black flex items-center justify-center">
                    <TikTokIcon size={22} />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-brand-silver">TikTok</p>
                    <p className="font-display font-800 text-base uppercase text-brand-black">@infinityfencingnw</p>
                  </div>
                </div>
                <h2 className="font-display font-900 text-2xl uppercase text-brand-black mb-3 group-hover:text-brand-amber transition-colors leading-tight">
                  Time-Lapses &<br />Fence Builds
                </h2>
                <p className="text-brand-iron text-sm leading-relaxed">
                  Full installs condensed into short videos — plus the crew
                  being themselves, which means a lot of laughing and very
                  straight fence lines.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-8 text-brand-amber font-mono text-xs uppercase tracking-widest">
                Follow on TikTok <ExternalLink size={12} />
              </div>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/p/Infinity-Fencing-NW-61569556457769/"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-brand-fog hover:border-brand-amber transition-all duration-300 p-10 flex flex-col justify-between min-h-[300px] bg-gradient-to-br from-[#f9f9f9] to-white"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#1877F2] flex items-center justify-center">
                    <Facebook size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-brand-silver">Facebook</p>
                    <p className="font-display font-800 text-base uppercase text-brand-black">Infinity Fencing NW</p>
                  </div>
                </div>
                <h2 className="font-display font-900 text-2xl uppercase text-brand-black mb-3 group-hover:text-brand-amber transition-colors leading-tight">
                  Updates &<br />Community
                </h2>
                <p className="text-brand-iron text-sm leading-relaxed">
                  Project updates, local community posts, and the easiest way
                  to send us a message if you want to talk fences — or just
                  say hi.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-8 text-brand-amber font-mono text-xs uppercase tracking-widest">
                Follow on Facebook <ExternalLink size={12} />
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* What we're about */}
      <section className="section-padding section-gap bg-brand-charcoal">
        <div className="max-w-7xl mx-auto">
          <span className="section-label">What We're About</span>
          <h2 className="font-display font-900 text-5xl uppercase text-brand-white mb-4">
            Work Hard.<br />
            <span className="text-brand-amber">Have Fun.</span>
          </h2>
          <p className="text-brand-fog text-lg max-w-2xl mb-12 leading-relaxed">
            We're a crew of people who genuinely enjoy what we do. Every morning
            we show up ready to build something that lasts — and every afternoon
            we're cracking jokes while the concrete sets. That's just who we are.
          </p>
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

      {/* Embedded Instagram posts */}
      {INSTAGRAM_POSTS.length > 0 && (
        <section className="section-padding section-gap bg-brand-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <Instagram size={18} className="text-brand-amber" />
              <span className="section-label" style={{ marginBottom: 0 }}>Instagram</span>
            </div>
            <h2 className="font-display font-900 text-4xl uppercase text-brand-black mb-10">Recent Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {INSTAGRAM_POSTS.map((post, i) => (
                <a key={i} href={post.url} target="_blank" rel="noopener noreferrer"
                  className="group border border-brand-fog hover:border-brand-amber transition-colors overflow-hidden">
                  <iframe src={`${post.url}embed/`} className="w-full" height="480"
                    frameBorder="0" scrolling="no" allowTransparency />
                  {post.caption && (
                    <div className="p-4">
                      <p className="text-brand-iron text-sm leading-relaxed line-clamp-2">{post.caption}</p>
                    </div>
                  )}
                </a>
              ))}
            </div>
            <div className="mt-8">
              <a href="https://www.instagram.com/infinityfencingnw/" target="_blank" rel="noopener noreferrer"
                className="btn-secondary inline-flex">
                View All on Instagram <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* TikTok videos */}
      <section className="section-padding py-16 bg-brand-fog/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <TikTokIcon size={18} />
            <span className="section-label" style={{ marginBottom: 0 }}>TikTok</span>
          </div>
          <h2 className="font-display font-900 text-4xl uppercase text-brand-black mb-2">
            Latest Videos
          </h2>
          <p className="text-brand-iron text-sm mb-10 max-w-lg">
            Real builds, real crew, real results. Watch us work — then call us to
            do yours.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TIKTOK_VIDEOS.map((videoId) => (
              <div
                key={videoId}
                className="border border-brand-fog hover:border-brand-amber transition-colors overflow-hidden bg-white"
              >
                <iframe
                  src={`https://www.tiktok.com/embed/v2/${videoId}`}
                  className="w-full"
                  height="740"
                  allow="encrypted-media"
                  allowFullScreen
                  style={{ border: "none" }}
                />
              </div>
            ))}
          </div>
          <div className="mt-10">
            <a
              href="https://www.tiktok.com/@infinityfencingnw"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex"
            >
              Follow on TikTok <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-amber section-padding py-20 text-center">
        <h2 className="font-display font-900 text-5xl uppercase text-white mb-4">
          Ready to Build?
        </h2>
        <p className="text-white/80 mb-8 max-w-md mx-auto">
          Nice people. Quality materials. Straight fence lines. Get a free
          estimate and see what the hype is about.
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
