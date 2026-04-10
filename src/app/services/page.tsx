import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Fence Services – Wood, Chain Link, Vinyl & More | Infinity Fencing NW",
  description:
    "Infinity Fencing NW offers wood, chain link, vinyl, security, commercial, and temporary fence installation in Poulsbo WA & Kitsap Peninsula. Free estimates.",
};

const SERVICES = [
  {
    slug: "wood-fencing",
    label: "Wood Fencing",
    headline: "Classic Wood on Lifetime Metal Posts",
    desc: `Our signature installation combines the natural beauty of wood with the unmatched durability of lifetime metal posts. Unlike traditional wood posts that rot, heave, or lean over time, our metal posts are set in concrete and engineered to last decades without maintenance.\n\nWe can build any wood fence style — dog-ear, board-on-board, shadowbox, split rail, and more — all on our proprietary metal post system. Traditional wood post installs are also available on request.`,
    bullets: [
      "Cedar, pine, and pressure-treated options",
      "All styles available: privacy, picket, ranch rail",
      "Lifetime metal post system — our specialty",
      "Gates custom-built to match",
      "Staining and sealing available",
    ],
    badge: "Our Specialty",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
  },
  {
    slug: "chain-link",
    label: "Chain Link Fencing",
    headline: "Durable, Low-Maintenance Security",
    desc: `Chain link fencing is one of the most practical and cost-effective options for both residential and commercial properties. We install galvanized and vinyl-coated chain link in a variety of heights, gauges, and configurations.\n\nFrom backyard pet enclosures to industrial perimeter fencing, chain link is versatile, reliable, and built to last.`,
    bullets: [
      "Galvanized and vinyl-coated finishes",
      "Heights from 3ft to 12ft+",
      "Commercial and residential grades",
      "Barbed wire and razor wire options",
      "Custom gate configurations",
    ],
    badge: "Affordable",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
  },
  {
    slug: "vinyl-pvc",
    label: "Vinyl & PVC Fencing",
    headline: "Modern Look, Zero Maintenance",
    desc: `Vinyl and PVC fencing offers the clean, polished appearance of painted wood without any of the upkeep. These materials never rot, fade, warp, or require painting — just an occasional rinse and they look brand new.\n\nWe offer a wide range of styles and colors, including privacy panels, picket fences, and ornamental options.`,
    bullets: [
      "No painting or staining — ever",
      "Resistant to moisture, pests, and UV",
      "Wide selection of styles and colors",
      "Composite options available",
      "Ideal for HOA-restricted neighborhoods",
    ],
    badge: "Low Maintenance",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
  },
  {
    slug: "security",
    label: "Security Fencing",
    headline: "Protection Built to Last",
    desc: `When standard fencing isn't enough, our security fencing solutions provide the deterrence and strength needed for sensitive properties. We work with commercial clients, municipalities, and homeowners who need serious perimeter protection.`,
    bullets: [
      "High-tensile steel options",
      "Anti-climb and anti-cut configurations",
      "Welded wire mesh and palisade fencing",
      "Access control integration planning",
      "Custom heights and configurations",
    ],
    badge: "Heavy Duty",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
  },
  {
    slug: "commercial",
    label: "Commercial Fencing",
    headline: "Built for Business",
    desc: `We serve commercial, industrial, and government clients throughout Kitsap County with fencing solutions designed to handle the demands of high-traffic, high-stakes environments. From warehouse perimeters to government facilities, we understand the compliance and durability requirements of commercial work.`,
    bullets: [
      "Large-scale project experience",
      "Government and industrial specs met",
      "Prevailing wage and bonded work",
      "Project management and scheduling",
      "Ongoing maintenance contracts available",
    ],
    badge: "Commercial",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
  },
  {
    slug: "temporary",
    label: "Temporary Fencing",
    headline: "Fast Deployment, Easy Relocation",
    desc: `Construction sites, public events, and emergency response situations all benefit from fast, flexible temporary fencing. We offer panel-based temporary fence systems that install in hours and can be relocated as your project evolves.`,
    bullets: [
      "Next-day installation available",
      "Panel and stake systems",
      "Construction site grade",
      "Event and crowd control setups",
      "Rental and purchase options",
    ],
    badge: "Fast Deploy",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-black pt-32 pb-16 section-padding">
        <div className="max-w-7xl mx-auto">
          <span className="section-label">What We Build</span>
          <h1 className="text-6xl md:text-8xl font-display font-900 uppercase text-brand-white leading-none">
            Fencing
            <br />
            <span className="text-brand-amber">Services</span>
          </h1>
          <p className="text-brand-fog mt-6 max-w-xl text-lg">
            From residential wood fences to commercial security perimeters —
            quality installation backed by real experience.
          </p>
        </div>
      </section>

      {/* Services */}
      <div className="divide-y divide-brand-fog">
        {SERVICES.map((service, i) => (
          <section
            key={service.slug}
            id={service.slug}
            className={`section-padding section-gap ${
              i % 2 === 1 ? "bg-brand-white" : "bg-brand-fog/10"
            }`}
          >
            <div
              className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                i % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative h-80 md:h-[450px] overflow-hidden ${
                  i % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <Image
                  src={service.image}
                  alt={`${service.label} installation in Poulsbo WA`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-brand-amber px-3 py-1.5">
                  <span className="text-white font-mono text-xs uppercase tracking-widest">
                    {service.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div>
                <h2 className="font-display font-900 text-4xl md:text-5xl uppercase text-brand-black mb-3">
                  {service.label}
                </h2>
                <p className="text-brand-amber font-mono text-sm uppercase tracking-widest mb-6">
                  {service.headline}
                </p>

                {service.desc.split("\n\n").map((para, j) => (
                  <p
                    key={j}
                    className="text-brand-iron text-sm leading-relaxed mb-4"
                  >
                    {para}
                  </p>
                ))}

                <ul className="space-y-2 my-6">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-center gap-2 text-sm text-brand-iron"
                    >
                      <span className="text-brand-amber font-bold">→</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="btn-primary">
                  Get a Quote
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-brand-amber section-padding py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-900 text-5xl uppercase text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 mb-8">
            Every project starts with a free, no-obligation estimate. We'll come
            to your property, measure everything, and give you a clear quote.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-brand-amber font-display font-700 uppercase tracking-wider px-10 py-5 text-sm hover:bg-brand-black hover:text-white transition-all duration-200"
          >
            Request Your Free Estimate
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
