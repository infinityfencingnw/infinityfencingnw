import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// Service data — extend this or move to a CMS/lib file
const SERVICES: Record<
  string,
  {
    title: string;
    metaTitle: string;
    metaDescription: string;
    badge: string;
    headline: string;
    intro: string;
    details: string[];
    bullets: string[];
    faq: { q: string; a: string }[];
    image: string;
  }
> = {
  "wood-fencing": {
    title: "Wood Fencing",
    metaTitle:
      "Wood Fence Installation Vancouver WA | Infinity Fencing NW",
    metaDescription:
      "Expert wood fence installation in Poulsbo WA and Kitsap County. Our specialty: wood fencing on lifetime metal posts. Cedar, pine, all styles. Free estimates.",
    badge: "Our Specialty",
    headline: "Wood Beauty. Metal Strength.",
    intro:
      "Wood fencing is the most requested style in Kitsap County — and for good reason. It's classic, versatile, and can be built to any height, style, or configuration. We take it further with our signature metal post system that eliminates the #1 cause of wood fence failure: post rot.",
    details: [
      "Traditional wood posts are the weak link in any wood fence. They absorb moisture, begin to rot from the bottom up, and typically fail within 7–12 years in the Pacific Northwest's wet climate.",
      "Our solution: set every fence on lifetime galvanized steel posts, anchored in concrete. The wood panels attach to the posts and can be replaced if they ever weather out — but the structural foundation stays solid indefinitely.",
      "We build every wood fence style: dog-ear, board-on-board, shadowbox, split rail, ranch rail, and custom designs. We work with cedar, pine, and pressure-treated lumber. Staining and sealing services are available.",
    ],
    bullets: [
      "Lifetime galvanized steel posts — standard on every install",
      "Cedar, pine, and pressure-treated options",
      "All styles: privacy, picket, shadowbox, ranch rail",
      "Custom gate fabrication to match",
      "Traditional wood posts available on request",
      "Staining and sealing services",
      "Kitsap County permit handling included if required",
    ],
    faq: [
      {
        q: "How long does a wood fence last on metal posts vs. wood posts?",
        a: "Wood posts in NW Washington typically last 8–12 years before rotting at the base. Our lifetime metal posts won't rot, heave, or lean — they're designed to outlast the wood panels themselves.",
      },
      {
        q: "What wood species do you use?",
        a: "We primarily use western red cedar for its natural rot resistance and appearance. We also work with pine and pressure-treated lumber depending on budget and application.",
      },
      {
        q: "Can you match my existing fence style?",
        a: "Yes. Bring us a photo or description and we'll match the style, height, and spacing as closely as possible.",
      },
      {
        q: "Do I need a permit for a wood fence in Kitsap County?",
        a: "Most standard residential wood fences (under 6ft in side/back yard) don't require a permit. We'll flag any requirements during your estimate and handle the application if needed.",
      },
    ],
    image:
      "https://images.pexels.com/photos/5126304/pexels-photo-5126304.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  "chain-link": {
    title: "Chain Link Fencing",
    metaTitle:
      "Chain Link Fence Installation Vancouver WA | Infinity Fencing NW",
    metaDescription:
      "Professional chain link fence installation in Poulsbo WA and Kitsap County. Galvanized and vinyl-coated options, residential and commercial. Free estimates.",
    badge: "Affordable & Durable",
    headline: "Built Tough. Built to Last.",
    intro:
      "Chain link fencing is one of the most practical choices for both residential and commercial properties. It's durable, low-maintenance, and significantly more affordable than most alternatives — without sacrificing security or longevity.",
    details: [
      "We install galvanized chain link (the standard silver finish) and vinyl-coated chain link in black, green, or brown for a more polished look. Vinyl-coated is popular in residential settings and holds up exceptionally well in the Pacific Northwest climate.",
      "Heights range from 3 feet for garden borders to 12+ feet for commercial and industrial applications. We work with multiple gauges depending on security requirements.",
      "Gates, barbed wire toppers, privacy slats, and tension wire options are all available to customize your installation.",
    ],
    bullets: [
      "Galvanized and vinyl-coated finishes",
      "Heights from 3ft to 12ft+",
      "Privacy slats available in multiple colors",
      "Barbed wire and razor wire topper options",
      "Custom gate configurations",
      "Residential and commercial grades",
      "Dog kennel and enclosure installs",
    ],
    faq: [
      {
        q: "What's the difference between galvanized and vinyl-coated chain link?",
        a: "Galvanized chain link has a natural silver zinc finish — it's the most common and most affordable. Vinyl-coated chain link has a PVC coating in colors like black or green, which looks cleaner and provides additional corrosion protection.",
      },
      {
        q: "Can chain link fencing look good in a residential yard?",
        a: "Yes — especially with black vinyl coating and privacy slats. Many homeowners are surprised by how clean a black vinyl chain link fence looks next to landscaping.",
      },
      {
        q: "How long does chain link fencing last?",
        a: "Galvanized chain link typically lasts 20+ years with minimal maintenance. Vinyl-coated can last even longer due to the additional corrosion protection.",
      },
    ],
    image:
      "https://images.pexels.com/photos/2381712/pexels-photo-2381712.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  "vinyl-pvc": {
    title: "Vinyl & PVC Fencing",
    metaTitle:
      "Vinyl Fence Installation Vancouver WA | Infinity Fencing NW",
    metaDescription:
      "Vinyl and PVC fence installation in Poulsbo WA and Kitsap County. No painting, no rot, no maintenance. Privacy, picket, and ornamental styles. Free estimates.",
    badge: "Low Maintenance",
    headline: "Clean Look. Zero Upkeep.",
    intro:
      "Vinyl fencing gives you the look of a freshly painted wood fence — permanently. No painting, no staining, no rot, and no annual maintenance beyond an occasional rinse. It's the low-effort, high-curb-appeal choice.",
    details: [
      "Vinyl and PVC are engineered to resist moisture, UV degradation, pest damage, and temperature swings — all common challenges in NW Washington. The material won't warp, crack, or fade like wood can.",
      "We offer privacy panels, picket styles, three-rail ranch fences, and ornamental designs in white, tan, gray, and other colors. Many styles are HOA-compliant and popular in newer subdivisions.",
      "Composite fencing — a blend of wood fiber and PVC — is also available and offers a more natural wood-grain appearance while retaining the maintenance benefits of vinyl.",
    ],
    bullets: [
      "Never needs painting, staining, or sealing",
      "Resistant to moisture, UV, rot, and pests",
      "Available in white, tan, gray, and more",
      "HOA-friendly styles available",
      "Privacy panels, picket, ranch rail, ornamental",
      "Composite wood-grain options available",
      "Manufacturer warranties on materials",
    ],
    faq: [
      {
        q: "Does vinyl fencing hold up in cold winters?",
        a: "Modern vinyl fencing is designed to handle freeze-thaw cycles. Quality vinyl — which is what we install — won't crack or become brittle in normal Pacific Northwest winters.",
      },
      {
        q: "Can vinyl fencing be repaired if damaged?",
        a: "Yes, individual panels and posts can be replaced without replacing the entire fence. This is one of the structural advantages of vinyl systems.",
      },
      {
        q: "Is vinyl fencing more expensive than wood?",
        a: "The upfront cost is typically 20–40% higher than wood, but when you factor in zero maintenance costs over 20+ years, vinyl often wins on total cost of ownership.",
      },
    ],
    image:
      "https://images.pexels.com/photos/11693890/pexels-photo-11693890.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  gates: {
    title: "Gates",
    metaTitle: "Gate Installation Poulsbo WA – Automated, Wood & Metal | Infinity Fencing NW",
    metaDescription:
      "Custom gate installation in Poulsbo WA and Kitsap County. Automated, cantilever, fabricated steel, wood swing gates and more. Built to match your fence. Free estimates.",
    badge: "Custom Built",
    headline: "Every Gate Style, Custom Built.",
    intro:
      "A fence is only as good as its gate. We design, fabricate, and install every type of gate — from a simple wood swing gate to a fully automated driveway system with keypad or remote access. Every gate is built to match your fence and your property.",
    details: [
      "We work with wood, steel, aluminum, and vinyl to build gates in any configuration. Swing gates, slide gates, cantilever gates, bi-parting gates — we've built them all across Kitsap County.",
      "For automated gates, we partner with top gate operator brands to install reliable motorized systems with remote controls, keypads, loop detectors, and access control integration. We handle the full install from the post to the operator.",
    ],
    bullets: [
      "Automated & motorized gate operators",
      "Cantilever sliding gates",
      "Fabricated steel & iron entry gates",
      "Custom wood swing & slide gates",
      "Aluminum ornamental gate systems",
      "Vinyl gate panels to match fence",
      "Single & double driveway configurations",
      "Keypad, remote & loop detector access",
    ],
    faq: [
      {
        q: "Can you automate an existing gate?",
        a: "In many cases yes — if the existing gate is structurally sound and the opening is compatible with an operator, we can add automation without replacing the gate itself.",
      },
      {
        q: "What gate types work best for driveways?",
        a: "It depends on your driveway width, grade, and how much space you have on each side. Cantilever slide gates work great on flat ground with side clearance. Swing gates need room to open. We'll assess your site during the estimate and recommend the right type.",
      },
      {
        q: "Do you fabricate custom metal gates?",
        a: "Yes. We can fabricate steel and iron gates to custom dimensions and designs — including decorative elements, arches, and powder-coat finishes.",
      },
    ],
    image:
      "https://images.pexels.com/photos/48246/pexels-photo-48246.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  commercial: {
    title: "Commercial Fencing",
    metaTitle:
      "Commercial Fence Contractor Vancouver WA | Infinity Fencing NW",
    metaDescription:
      "Commercial and government fence installation in Poulsbo WA and Kitsap County. Experienced with large-scale projects, government specs, and commercial requirements.",
    badge: "Commercial Grade",
    headline: "Built for Business.",
    intro:
      "Commercial fencing projects require a different level of planning, coordination, and compliance than residential work. We've handled everything from warehouse perimeters to government facility fencing in Kitsap County.",
    details: [
      "We understand commercial timelines, permit processes, and the need to minimize disruption to ongoing operations. We coordinate closely with project managers and GCs to deliver on schedule.",
      "Our commercial clients include distribution centers, retail properties, schools, municipalities, and government contractors. We're comfortable with prevailing wage work and bonded project requirements.",
    ],
    bullets: [
      "Large-scale project management",
      "Prevailing wage and bonded work",
      "Government and municipal specs met",
      "Coordination with GCs and project managers",
      "Comprehensive permitting support",
      "Ongoing maintenance contracts available",
      "All fence types and heights",
    ],
    faq: [
      {
        q: "Are you experienced with government fencing contracts?",
        a: "Yes. We've completed fencing work on government and municipal properties in Kitsap County and understand the compliance, documentation, and inspection requirements involved.",
      },
      {
        q: "Can you handle multi-phase projects?",
        a: "Absolutely. We can work in phases to accommodate ongoing operations or construction timelines.",
      },
    ],
    image:
      "https://images.pexels.com/photos/683402/pexels-photo-683402.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  temporary: {
    title: "Temporary Fencing",
    metaTitle:
      "Temporary Fence Rental Vancouver WA | Infinity Fencing NW",
    metaDescription:
      "Temporary fence installation and rental in Poulsbo WA and Kitsap County. Construction sites, events, emergency needs. Fast deployment. Call 360.200.1005.",
    badge: "Fast Deployment",
    headline: "Up Fast. Down Easy.",
    intro:
      "Temporary fencing protects people, property, and job sites without a permanent footprint. We offer fast deployment for construction sites, public events, utility work, and emergency situations throughout Kitsap County.",
    details: [
      "Our temporary fence systems use chain-link panels on weighted or staked bases that can be installed in hours and relocated as your project evolves — no concrete, no digging.",
      "We offer both rental and purchase options. For longer-term construction projects, rental packages include installation, periodic inspections, and takedown.",
    ],
    bullets: [
      "Same-day or next-day installation available",
      "Panel-based systems — no concrete needed",
      "Construction site and event configurations",
      "Rental and purchase options",
      "Crowd control and pedestrian barrier setups",
      "Emergency and storm response installs",
      "Full takedown and removal service",
    ],
    faq: [
      {
        q: "How quickly can temporary fencing be installed?",
        a: "For most sites, we can have temporary fencing up within 24 hours of booking. For emergency situations, call us directly to discuss same-day options.",
      },
      {
        q: "Do you offer temporary fence rental?",
        a: "Yes — rental packages include delivery, installation, and pickup at the end of your project. Monthly rates are available for longer-term needs.",
      },
    ],
    image:
      "https://images.pexels.com/photos/951408/pexels-photo-951408.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = SERVICES[params.slug];
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export async function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({ slug }));
}

export default function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = SERVICES[params.slug];

  if (!service) {
    return (
      <div className="pt-40 section-padding text-center">
        <h1 className="font-display font-900 text-4xl uppercase">
          Service Not Found
        </h1>
        <Link href="/services" className="btn-secondary mt-8 inline-flex">
          All Services
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
            "@type": "Service",
            name: `${service.title} Installation`,
            description: service.metaDescription,
            provider: {
              "@type": "LocalBusiness",
              name: "Infinity Fencing NW LLC",
              url: "https://www.infinityfencingnw.com",
              telephone: "+13602001005",
            },
            areaServed: "Kitsap County, WA",
          }),
        }}
      />

      {/* Hero */}
      <section className="relative bg-brand-black pt-32 pb-20 section-padding overflow-hidden">
        <div className="absolute inset-0">
          <Image src={service.image} alt={service.title} fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <Link
            href="/services"
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-silver hover:text-brand-amber transition-colors mb-8"
          >
            ← All Services
          </Link>
          <span className="section-label">{service.badge}</span>
          <h1 className="text-6xl md:text-8xl font-display font-900 uppercase text-brand-white leading-none mb-4">
            {service.title}
          </h1>
          <p className="text-brand-amber font-mono text-lg uppercase tracking-widest">
            {service.headline}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding section-gap bg-brand-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main content */}
          <div className="lg:col-span-2">
            <p className="text-brand-iron text-lg leading-relaxed mb-8 border-l-4 border-brand-amber pl-6">
              {service.intro}
            </p>
            {service.details.map((para, i) => (
              <p key={i} className="text-brand-iron leading-relaxed mb-5">
                {para}
              </p>
            ))}

            {/* FAQ */}
            <div className="mt-14">
              <h2 className="font-display font-900 text-3xl uppercase text-brand-black mb-8">
                Common Questions
              </h2>
              <div className="space-y-6">
                {service.faq.map((item) => (
                  <div key={item.q} className="border-b border-brand-fog pb-6">
                    <h3 className="font-display font-800 text-lg uppercase text-brand-black mb-2">
                      {item.q}
                    </h3>
                    <p className="text-brand-iron text-sm leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Bullets */}
            <div className="bg-brand-charcoal p-8">
              <h3 className="font-display font-900 text-xl uppercase text-brand-white mb-5">
                What's Included
              </h3>
              <ul className="space-y-3">
                {service.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-brand-fog">
                    <CheckCircle2 size={16} className="text-brand-amber mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-brand-amber p-8">
              <h3 className="font-display font-900 text-2xl uppercase text-white mb-3">
                Get a Free Quote
              </h3>
              <p className="text-white/80 text-sm mb-6">
                We'll come to your property, measure, and give you a clear
                written estimate. No obligation.
              </p>
              <Link
                href="/contact"
                className="inline-flex w-full justify-center items-center gap-2 bg-white text-brand-amber font-display font-700 uppercase tracking-wider px-6 py-4 text-sm hover:bg-brand-black hover:text-white transition-all"
              >
                Request Estimate
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Phone */}
            <div className="border border-brand-fog p-6 text-center">
              <p className="text-xs font-mono uppercase tracking-widest text-brand-silver mb-2">
                Prefer to Call?
              </p>
              <a
                href="tel:3602001005"
                className="font-display font-900 text-3xl uppercase text-brand-black hover:text-brand-amber transition-colors"
              >
                360.200.1005
              </a>
              <p className="text-xs text-brand-silver mt-1">
                Mon–Sun, 8am–6pm
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
