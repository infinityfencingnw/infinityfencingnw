import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Wrench,
  Star,
  ArrowRight,
  CheckCircle2,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Fence Installation Poulsbo WA | Infinity Fencing NW – Licensed & Insured",
  description:
    "Veteran-owned fence contractor serving Poulsbo WA & Kitsap County. Wood, chain link, vinyl, security & commercial fencing. Free estimates. Call 360.200.1005.",
};

const SERVICES = [
  {
    id: "wood",
    label: "Wood Fencing",
    tagline: "Our Specialty",
    desc: "Classic wood beauty on lifetime metal posts for unmatched strength and longevity. Every style available.",
    href: "/services/wood-fencing",
    images: [
      "https://images.pexels.com/photos/5126304/pexels-photo-5126304.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/14306688/pexels-photo-14306688.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
  },
  {
    id: "chain-link",
    label: "Chain Link",
    tagline: "Durable & Affordable",
    desc: "Galvanized or vinyl-coated. Ideal for residential and commercial security with clear sightlines.",
    href: "/services/chain-link",
    images: [
      "https://images.pexels.com/photos/2381712/pexels-photo-2381712.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/5860835/pexels-photo-5860835.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
  },
  {
    id: "vinyl",
    label: "Vinyl & PVC",
    tagline: "Low Maintenance",
    desc: "Modern clean lines that resist fading, cracking, and pests. No painting, no staining, ever.",
    href: "/services/vinyl-pvc",
    images: [
      "https://images.pexels.com/photos/11693890/pexels-photo-11693890.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
  },
  {
    id: "gates",
    label: "Gates",
    tagline: "Automated & Custom",
    desc: "Automated, cantilever, fabricated metal, and wood gates. Custom-built to match your fence and property.",
    href: "/services/gates",
    images: [
      "https://images.pexels.com/photos/48246/pexels-photo-48246.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
  },
  {
    id: "commercial",
    label: "Commercial",
    tagline: "Business & Government",
    desc: "Reliable, durable fencing for facilities, government sites, and large-scale projects.",
    href: "/services/commercial",
    images: [
      "https://images.pexels.com/photos/683402/pexels-photo-683402.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
  },
  {
    id: "temporary",
    label: "Temporary Fencing",
    tagline: "Fast Deployment",
    desc: "Construction sites, events, and emergency needs. Quick install and easy relocation.",
    href: "/services/temporary",
    images: [
      "https://images.pexels.com/photos/951408/pexels-photo-951408.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
  },
];

const TRUST_ITEMS = [
  "Licensed & Insured",
  "Veteran Owned",
  "Free Estimates",
  "Quality Materials",
  "Kitsap County & NW WA",
  "Satisfaction Guaranteed",
];

const STATS = [
  { value: "500+", label: "Projects Completed" },
  { value: "5★", label: "Average Rating", href: "https://share.google/CgI9tSklZHsSa0cno" },
  { value: "10+", label: "Years Combined Experience" },
  { value: "100%", label: "Licensed & Insured", href: "https://secure.lni.wa.gov/verify/Detail.aspx?UBI=605601618&LIC=INFINFN764OO&SAW=" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end pb-16 md:pb-24 pt-32 overflow-hidden bg-brand-black">
        {/* Hero background image – replace with real project photo */}
        <div className="absolute inset-0">
          <Image
            src="/landing.jpg"
            alt="Fence installation in Poulsbo WA"
            fill
            priority
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent" />
        </div>

        <div className="relative z-10 section-padding w-full">
          <div className="max-w-5xl">
            <span className="section-label">Poulsbo, WA & Kitsap Peninsula</span>
            <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-display font-900 uppercase text-brand-white leading-none mb-6">
              Nice Fences.
              <br />
              <span className="text-brand-amber">Nice People.</span>
            </h1>
            <p className="text-brand-fog text-lg md:text-xl max-w-xl mb-10 font-body font-300 leading-relaxed">
              Veteran-owned fence contractor serving Kitsap Peninsula. Licensed,
              insured, and built on doing the job right — the first time.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/contact" className="btn-primary">
                Get a Free Estimate
                <ArrowRight size={16} />
              </Link>
              <Link href="/gallery" className="btn-ghost">
                View Our Work
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {TRUST_ITEMS.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 text-xs font-mono text-brand-fog/70"
                >
                  <CheckCircle2 size={12} className="text-brand-amber" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-2 text-brand-silver">
          <span className="text-xs font-mono tracking-widest rotate-90 origin-center translate-x-6">
            scroll
          </span>
          <div className="w-px h-16 bg-brand-silver/30" />
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────── */}
      <section className="bg-brand-amber">
        <div className="section-padding py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((stat) =>
            stat.href ? (
              <a
                key={stat.label}
                href={stat.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <p className="font-display font-900 text-4xl text-white leading-none group-hover:text-white/80 transition-colors">
                  {stat.value}
                </p>
                <p className="text-white/70 text-xs font-mono uppercase tracking-widest mt-1 group-hover:text-white/90 transition-colors underline underline-offset-2 decoration-white/30">
                  {stat.label}
                </p>
              </a>
            ) : (
              <div key={stat.label}>
                <p className="font-display font-900 text-4xl text-white leading-none">
                  {stat.value}
                </p>
                <p className="text-white/70 text-xs font-mono uppercase tracking-widest mt-1">
                  {stat.label}
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* ── SERVICES GRID ────────────────────────────── */}
      <section className="section-padding section-gap">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="section-label">What We Do</span>
              <h2 className="text-5xl md:text-6xl font-display font-900 uppercase text-brand-black">
                Fencing
                <br />
                Services
              </h2>
            </div>
            <Link
              href="/services"
              className="btn-secondary self-start md:self-auto"
            >
              All Services
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group border border-brand-fog hover:border-brand-amber transition-colors overflow-hidden flex flex-col bg-white"
              >
                {/* Photos */}
                <div className={`grid gap-0.5 h-44 overflow-hidden ${service.images.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                  {service.images.map((src, i) => (
                    <div key={i} className="relative overflow-hidden">
                      <Image
                        src={src}
                        alt={`${service.label} example`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs font-mono uppercase tracking-widest text-brand-amber bg-brand-amber/10 px-2 py-1 self-start mb-3">
                    {service.tagline}
                  </span>
                  <h3 className="font-display font-800 text-2xl uppercase text-brand-black mb-3 group-hover:text-brand-amber transition-colors">
                    {service.label}
                  </h3>
                  <p className="text-brand-iron text-sm leading-relaxed flex-1">
                    {service.desc}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-amber">
                    Learn More <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────── */}
      <section className="bg-brand-charcoal section-padding section-gap">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative h-[500px] overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/5126304/pexels-photo-5126304.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Infinity Fencing NW – veteran owned fence contractor"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-6 left-6 bg-brand-amber px-6 py-4">
              <p className="font-display font-900 text-2xl text-white uppercase leading-none">
                Veteran
              </p>
              <p className="font-display font-700 text-sm text-white/80 uppercase tracking-widest">
                Owned & Operated
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="section-label">Why Infinity Fencing NW</span>
            <h2 className="text-5xl font-display font-900 uppercase text-brand-white mb-6">
              Built on
              <br />
              Integrity
            </h2>
            <p className="text-brand-fog leading-relaxed mb-8">
              We're not just installing fences — we're building trust with every
              post we set. As a veteran-owned business, we bring discipline,
              attention to detail, and pride in our work to every project.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Wood fencing on lifetime metal posts — our signature install",
                "Fully licensed, bonded, and insured in Washington State",
                "Transparent pricing — no hidden fees, ever",
                "We stand behind our work with real warranties",
                "Local to Kitsap County — we know the terrain and codes",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-brand-fog text-sm"
                >
                  <CheckCircle2
                    size={18}
                    className="text-brand-amber mt-0.5 shrink-0"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex gap-4">
              <Link href="/about" className="btn-primary">
                Our Story
              </Link>
              <a
                href="tel:3602001005"
                className="btn-ghost flex items-center gap-2"
              >
                <Phone size={16} />
                360.200.1005
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SHOP TEASER ──────────────────────────────── */}
      <section className="section-padding section-gap bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div>
              <span className="section-label">Fence Supply Store</span>
              <h2 className="text-5xl md:text-6xl font-display font-900 uppercase text-brand-black">
                Shop
                <br />
                Materials
              </h2>
            </div>
            <div>
              <p className="text-brand-iron max-w-sm text-sm leading-relaxed mb-4">
                Need materials for a DIY project? Browse our online store for
                quality fencing panels, posts, gates, and hardware shipped
                direct to you.
              </p>
              <Link href="/shop" className="btn-secondary">
                Browse All Products
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Placeholder product grid — replace with real product components */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Cedar Privacy Panel", price: "$89.99", category: "Wood" },
              {
                name: "Galvanized Post Kit",
                price: "$34.99",
                category: "Hardware",
              },
              {
                name: "Chain Link Roll 50ft",
                price: "$129.00",
                category: "Chain Link",
              },
              { name: "Vinyl Gate 4ft", price: "$219.00", category: "Gates" },
            ].map((product) => (
              <div key={product.name} className="card-product">
                <div className="h-48 bg-brand-fog/30 flex items-center justify-center">
                  {/* Replace with actual product images */}
                  <span className="text-brand-silver font-mono text-xs">
                    Product Image
                  </span>
                </div>
                <div className="p-5">
                  <span className="text-xs font-mono text-brand-amber uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="font-display font-700 text-lg uppercase mt-1 mb-2 text-brand-black group-hover:text-brand-amber transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="font-display font-800 text-xl text-brand-black">
                      {product.price}
                    </span>
                    <button className="bg-brand-black text-brand-white text-xs font-mono uppercase px-3 py-2 hover:bg-brand-amber transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY TEASER ───────────────────────────── */}
      <section className="section-padding section-gap bg-brand-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div>
              <span className="section-label">Our Portfolio</span>
              <h2 className="text-5xl md:text-6xl font-display font-900 uppercase text-brand-white">
                Our
                <br />
                Work
              </h2>
            </div>
            <Link href="/gallery" className="btn-primary self-start md:self-auto">
              Full Gallery
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Gallery grid placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className={`relative overflow-hidden bg-brand-steel aspect-square ${
                  i === 0 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <Image
                  src={[
                    "https://images.pexels.com/photos/5126304/pexels-photo-5126304.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "https://images.pexels.com/photos/14306688/pexels-photo-14306688.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "https://images.pexels.com/photos/2381712/pexels-photo-2381712.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "https://images.pexels.com/photos/11693890/pexels-photo-11693890.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "https://images.pexels.com/photos/9581523/pexels-photo-9581523.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "https://images.pexels.com/photos/5860835/pexels-photo-5860835.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "https://images.pexels.com/photos/951408/pexels-photo-951408.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "https://images.pexels.com/photos/48246/pexels-photo-48246.jpeg?auto=compress&cs=tinysrgb&w=600",
                  ][i]}
                  alt={`Fence installation project ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────── */}
      <section className="section-padding section-gap bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4">
            <div>
              <span className="section-label">Customer Reviews</span>
              <h2 className="text-5xl font-display font-900 uppercase text-brand-black">
                What Clients Say
              </h2>
            </div>
            <a
              href="https://share.google/CgI9tSklZHsSa0cno"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-brand-amber text-brand-amber font-mono text-xs uppercase tracking-widest px-5 py-3 hover:bg-brand-amber hover:text-white transition-all shrink-0 self-start sm:self-auto mb-8 sm:mb-0"
            >
              <Star size={13} className="fill-brand-amber" />
              Read Our Google Reviews
            </a>
          </div>
          <div className="mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Allison Odenthal",
                location: "Google Review",
                text: "Nicest people ever! And amazing craftsmanship! These guys know fences and worked with me on everything. Every interaction was thoughtful and professional. I can't recommend them enough!",
                stars: 5,
              },
              {
                name: "Shawn Moffat",
                location: "Google Review",
                text: "Daniel & Tyler worked hard to quickly install basic mesh border fencing on a very hot day as well as rebuild our deteriorated driveway gate. Great guys with good attitudes. Company charged a very reasonable fee for the work challenges presented. We are very happy with the results. Thank you!",
                stars: 5,
              },
              {
                name: "Quinn Freeman",
                location: "Google Review",
                text: "We had fence damage during the recent big wind storms. I called Infinity Fencing and they quickly came out and gave me an estimate. Within a week my fence was fixed. Great work, great service, great team to work with. I highly recommend.",
                stars: 5,
              },
            ].map((review) => (
              <div
                key={review.name}
                className="border border-brand-fog p-8 bg-white"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-brand-amber fill-brand-amber"
                    />
                  ))}
                </div>
                <p className="text-brand-iron text-sm leading-relaxed mb-6 italic">
                  "{review.text}"
                </p>
                <div>
                  <p className="font-display font-700 text-sm uppercase text-brand-black">
                    {review.name}
                  </p>
                  <p className="text-xs font-mono text-brand-silver">
                    {review.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCAL SEO AREA SECTION ───────────────────── */}
      <section className="section-padding py-16 bg-brand-fog/20 border-t border-brand-fog">
        <div className="max-w-7xl mx-auto">
          <span className="section-label">Service Area</span>
          <h2 className="text-3xl font-display font-900 uppercase text-brand-black mb-4">
            Serving Kitsap Peninsula
          </h2>
          <p className="text-brand-iron text-sm max-w-2xl leading-relaxed mb-6">
            Infinity Fencing NW provides professional fence installation
            throughout Kitsap County and NW Washington — including{" "}
            <strong>Poulsbo</strong>, <strong>Bremerton</strong>,{" "}
            <strong>Silverdale</strong>, <strong>Kingston</strong>,{" "}
            <strong>Bainbridge Island</strong>, and <strong>Port Orchard</strong>. Contact
            us if you're unsure whether we serve your area.
          </p>
          <Link href="/contact" className="btn-secondary">
            Check Your Area
          </Link>
        </div>
      </section>
    </>
  );
}
