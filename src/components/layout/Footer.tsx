import Link from "next/link";
import { Phone, Mail, Clock, MapPin, Facebook, Instagram } from "lucide-react";

const SERVICES = [
  { label: "Wood Fencing", href: "/services/wood-fencing" },
  { label: "Chain Link", href: "/services/chain-link" },
  { label: "Vinyl & PVC", href: "/services/vinyl-pvc" },
  { label: "Security Fencing", href: "/services/security" },
  { label: "Commercial Fencing", href: "/services/commercial" },
  { label: "Temporary Fencing", href: "/services/temporary" },
];

const SHOP_LINKS = [
  { label: "Fence Panels", href: "/shop/fence-panels" },
  { label: "Posts & Hardware", href: "/shop/posts-hardware" },
  { label: "Gates", href: "/shop/gates" },
  { label: "Tools & Accessories", href: "/shop/tools" },
];

const SERVICE_AREAS = [
  "Vancouver, WA",
  "Camas, WA",
  "Washougal, WA",
  "Battle Ground, WA",
  "Ridgefield, WA",
  "La Center, WA",
];

export function Footer() {
  return (
    <footer className="bg-brand-black text-brand-fog">
      {/* CTA Strip */}
      <div className="bg-brand-amber">
        <div className="section-padding py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-3xl font-900 uppercase text-white leading-none">
              Ready to Get Started?
            </p>
            <p className="text-white/80 font-body mt-1 text-sm">
              Free estimates · No obligation · Fast response
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-brand-amber font-display font-700 uppercase tracking-wider px-8 py-4 text-sm hover:bg-brand-black hover:text-white transition-all duration-200"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:3602001005"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-display font-700 uppercase tracking-wider px-8 py-4 text-sm hover:bg-white hover:text-brand-amber transition-all duration-200"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="section-padding py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <p className="font-display font-900 text-2xl uppercase text-brand-white mb-4">
            Infinity<span className="text-brand-amber"> Fencing</span> NW
          </p>
          <p className="text-sm text-brand-silver leading-relaxed mb-6">
            Veteran-owned fence contractor serving Vancouver WA and SW
            Washington. Quality work, honest pricing, and craftsmanship you can
            count on.
          </p>
          <div className="flex gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 border border-brand-steel flex items-center justify-center text-brand-silver hover:text-brand-amber hover:border-brand-amber transition-colors"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 border border-brand-steel flex items-center justify-center text-brand-silver hover:text-brand-amber hover:border-brand-amber transition-colors"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <p className="font-display font-700 uppercase text-xs tracking-widest text-brand-silver mb-5">
            Services
          </p>
          <ul className="space-y-2">
            {SERVICES.map((s) => (
              <li key={s.label}>
                <Link
                  href={s.href}
                  className="text-sm text-brand-fog hover:text-brand-amber transition-colors"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Shop */}
        <div>
          <p className="font-display font-700 uppercase text-xs tracking-widest text-brand-silver mb-5">
            Shop
          </p>
          <ul className="space-y-2 mb-6">
            {SHOP_LINKS.map((s) => (
              <li key={s.label}>
                <Link
                  href={s.href}
                  className="text-sm text-brand-fog hover:text-brand-amber transition-colors"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="font-display font-700 uppercase text-xs tracking-widest text-brand-silver mb-3 mt-6">
            Service Areas
          </p>
          <ul className="space-y-1">
            {SERVICE_AREAS.map((area) => (
              <li key={area} className="text-sm text-brand-fog">
                {area}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="font-display font-700 uppercase text-xs tracking-widest text-brand-silver mb-5">
            Contact
          </p>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3 text-brand-fog">
              <Clock size={16} className="text-brand-amber mt-0.5 shrink-0" />
              <span>Mon – Sun, 8:00 AM – 6:00 PM</span>
            </li>
            <li>
              <a
                href="tel:3602001005"
                className="flex items-center gap-3 text-brand-fog hover:text-brand-amber transition-colors"
              >
                <Phone size={16} className="text-brand-amber shrink-0" />
                360.200.1005
              </a>
            </li>
            <li>
              <a
                href="mailto:build@infinityfencingnw.com"
                className="flex items-center gap-3 text-brand-fog hover:text-brand-amber transition-colors"
              >
                <Mail size={16} className="text-brand-amber shrink-0" />
                build@infinityfencingnw.com
              </a>
            </li>
            <li className="flex items-start gap-3 text-brand-fog">
              <MapPin size={16} className="text-brand-amber mt-0.5 shrink-0" />
              <span>Vancouver, WA & SW Washington</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-steel section-padding py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-brand-iron">
        <p>© {new Date().getFullYear()} Infinity Fencing NW LLC. All rights reserved.</p>
        <div className="flex gap-5">
          <Link href="/privacy-policy" className="hover:text-brand-silver transition-colors">
            Privacy Policy
          </Link>
          <Link href="/sitemap.xml" className="hover:text-brand-silver transition-colors">
            Sitemap
          </Link>
        </div>
      </div>
    </footer>
  );
}
