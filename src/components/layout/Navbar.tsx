"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown, ChevronUp } from "lucide-react";
import { clsx } from "clsx";

const NAV_LINKS = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Wood Fencing", href: "/services/wood-fencing" },
      { label: "Chain Link", href: "/services/chain-link" },
      { label: "Vinyl & PVC", href: "/services/vinyl-pvc" },
      { label: "Gates", href: "/services/gates" },
      { label: "Commercial", href: "/services/commercial" },
      { label: "Temporary Fencing", href: "/services/temporary" },
      { label: "Disposal & Hauling", href: "/services/disposal" },
    ],
  },
  {
    label: "Shop",
    href: "/shop",
    children: [
      { label: "Cedar Fence", href: "/shop/cedar-fence" },
      { label: "Vinyl Fence", href: "/shop/vinyl-fence" },
      { label: "Chain Link Fence", href: "/shop/chain-link" },
      { label: "Agricultural Fence", href: "/shop/agricultural" },
      { label: "Gate Operators", href: "/shop/gate-operators" },
      { label: "Ornamental Fences", href: "/shop/ornamental" },
      { label: "Hardware", href: "/shop/hardware" },
      { label: "Tools & Equipment", href: "/shop/tools" },
      { label: "Other", href: "/shop/other" },
    ],
  },
  { label: "Our Work", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Social", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-brand-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      )}
    >
      {/* Top bar */}
      <div className="bg-brand-black text-brand-fog text-xs font-mono py-2 section-padding flex justify-between items-center">
        <span>Veteran Owned & Operated · Licensed & Insured · Serving Kitsap Peninsula</span>
        <a
          href="tel:3602001005"
          className="flex items-center gap-1 text-brand-amber hover:text-brand-amber-light transition-colors"
        >
          <Phone size={12} />
          360.200.1005
        </a>
      </div>

      {/* Main nav */}
      <nav className="section-padding flex items-center justify-between h-24 bg-brand-white border-b border-brand-fog">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Infinity Fencing NW"
            width={400}
            height={120}
            className="h-20 w-auto"
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <li key={link.label} className="relative">
                <button
                  className="nav-link flex items-center gap-1"
                  onMouseEnter={() => setOpenMenu(link.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  {link.label}
                  <ChevronDown size={14} />
                </button>
                <div
                  onMouseEnter={() => setOpenMenu(link.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                  className={clsx(
                    "absolute top-full left-0 pt-2 min-w-[210px] transition-all duration-200",
                    openMenu === link.label
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  )}
                >
                  <div className="bg-brand-white border border-brand-fog shadow-lg py-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-5 py-2.5 text-sm font-body text-brand-iron hover:bg-brand-black hover:text-brand-white transition-colors"
                        onClick={() => setOpenMenu(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            ) : (
              <li key={link.label}>
                <Link href={link.href} className="nav-link">
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/contact" className="btn-primary text-xs py-3 px-6">
            Free Estimate
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="lg:hidden p-2 text-brand-black"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={clsx(
          "lg:hidden bg-brand-white border-b border-brand-fog overflow-hidden transition-all duration-300",
          mobileOpen ? "max-h-screen" : "max-h-0"
        )}
      >
        <div className="section-padding py-6 flex flex-col gap-1">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  className="w-full flex items-center justify-between nav-link text-base py-3 border-b border-brand-fog"
                  onClick={() =>
                    setOpenMobileSection(
                      openMobileSection === link.label ? null : link.label
                    )
                  }
                >
                  {link.label}
                  {openMobileSection === link.label ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>
                {openMobileSection === link.label && (
                  <div className="pl-4 py-2 flex flex-col gap-1 border-b border-brand-fog">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="text-sm text-brand-iron py-2 hover:text-brand-amber transition-colors"
                        onClick={() => {
                          setMobileOpen(false);
                          setOpenMobileSection(null);
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="nav-link text-base py-3 border-b border-brand-fog"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="btn-primary justify-center mt-4"
            onClick={() => setMobileOpen(false)}
          >
            Free Estimate
          </Link>
        </div>
      </div>
    </header>
  );
}
