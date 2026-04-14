import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us – Veteran Owned Fence Contractor | Infinity Fencing NW",
  description:
    "Infinity Fencing NW is a veteran-owned, licensed & insured fence contractor serving Poulsbo WA and Kitsap County. Learn our story and what sets us apart.",
};

const VALUES = [
  {
    title: "Integrity",
    desc: "We say what we'll do and do what we say. No hidden charges, no surprises on install day.",
  },
  {
    title: "Craftsmanship",
    desc: "Every post is set plumb, every panel is level. We don't cut corners because our name is on every fence.",
  },
  {
    title: "Service",
    desc: "We answer the phone, show up on time, and leave the job site cleaner than we found it.",
  },
  {
    title: "Community",
    desc: "We live and work in Kitsap County. Taking care of our neighbors isn't a tagline — it's how we operate.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-black pt-32 pb-20 section-padding overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-zL1sJUhNeww?w=1600&q=70"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="section-label">Our Story</span>
          <h1 className="text-6xl md:text-8xl font-display font-900 uppercase text-brand-white leading-none">
            Built on
            <br />
            <span className="text-brand-amber">Service</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding section-gap bg-brand-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-gyOmQE2vzWs?w=900&q=80"
              alt="Infinity Fencing NW – veteran owned fence contractor Poulsbo WA"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-6 left-6 bg-brand-amber px-6 py-4">
              <p className="font-display font-900 text-xl text-white uppercase leading-none">
                Veteran
              </p>
              <p className="font-display font-600 text-xs text-white/80 uppercase tracking-widest">
                Owned & Operated
              </p>
            </div>
          </div>

          <div>
            <span className="section-label">Who We Are</span>
            <h2 className="font-display font-900 text-5xl uppercase text-brand-black mb-6">
              Infinity Fencing NW
            </h2>
            <div className="space-y-4 text-brand-iron leading-relaxed">
              <p>
                Infinity Fencing NW was founded by a US veteran who came home
                and decided to put that same discipline, attention to detail, and
                commitment to doing things right into building a fencing company
                Kitsap County could count on.
              </p>
              <p>
                We're not a franchise. We're not a national chain with a
                call-center in another state. We're local — we know the soil,
                the weather, the codes, and most importantly, we know our
                customers by name.
              </p>
              <p>
                Our signature install — wood fencing on lifetime metal posts —
                came from years of seeing wood posts rot, lean, and fail. We
                built a better system, and now it's what we're known for. You
                get the look of wood and the permanence of steel.
              </p>
              <p>
                Whether it's a 50-foot backyard privacy fence or a
                multi-thousand-foot commercial perimeter, we bring the same
                standard to every job: show up when we say, work hard, and leave
                something we're proud of.
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <Link href="/contact" className="btn-primary">
                Get a Free Estimate
                <ArrowRight size={16} />
              </Link>
              <Link href="/gallery" className="btn-secondary">
                Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding section-gap bg-brand-charcoal">
        <div className="max-w-7xl mx-auto">
          <span className="section-label">What Drives Us</span>
          <h2 className="font-display font-900 text-5xl uppercase text-brand-white mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((v) => (
              <div key={v.title} className="border-t-2 border-brand-amber pt-6">
                <h3 className="font-display font-900 text-2xl uppercase text-brand-white mb-3">
                  {v.title}
                </h3>
                <p className="text-brand-fog text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-padding section-gap bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <span className="section-label">Credentials</span>
          <h2 className="font-display font-900 text-5xl uppercase text-brand-black mb-10">
            Licensed &amp; Insured
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {[
              "Washington State Licensed Contractor",
              "Fully Bonded & Insured",
              "Veteran Owned & Operated",
              "Kitsap County Permit-Ready",
              "Residential & Commercial Certified",
              "Free Estimates – No Obligation",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 border border-brand-fog p-5">
                <CheckCircle2 size={20} className="text-brand-amber shrink-0" />
                <span className="font-display font-700 uppercase text-sm text-brand-black">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
