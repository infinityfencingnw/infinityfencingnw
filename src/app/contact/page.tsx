import type { Metadata } from "next";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Fence Estimate – Contact Infinity Fencing NW | Vancouver WA",
  description:
    "Get a free fence installation estimate from Infinity Fencing NW. Serving Vancouver WA, Clark County & SW Washington. Call 360.200.1005 or fill out our quick form.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-black pt-32 pb-16 section-padding">
        <div className="max-w-7xl mx-auto">
          <span className="section-label">Get in Touch</span>
          <h1 className="text-6xl md:text-8xl font-display font-900 uppercase text-brand-white leading-none">
            Free
            <br />
            <span className="text-brand-amber">Estimate</span>
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding section-gap bg-brand-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="font-display font-900 text-3xl uppercase text-brand-black mb-8">
              Tell Us About Your Project
            </h2>

            {/*
              NOTE FOR CLAUDE CODE:
              Wire this form to a serverless function (e.g., /api/contact) or
              a service like Resend, Nodemailer, or Formspree.
              
              Recommended: Resend (resend.com) + a Next.js route handler at
              src/app/api/contact/route.ts
            */}
            <form
              action="/api/contact"
              method="POST"
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-brand-iron mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="input-field"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-brand-iron mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="input-field"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-brand-iron mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="input-field"
                  placeholder="(360) 555-0000"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-brand-iron mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="input-field"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-brand-iron mb-2">
                  City / Zip Code
                </label>
                <input
                  type="text"
                  name="location"
                  className="input-field"
                  placeholder="Vancouver, WA or 98660"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-brand-iron mb-2">
                  Fence Type
                </label>
                <select name="fenceType" className="input-field">
                  <option value="">Select a type...</option>
                  <option value="wood">Wood Fencing</option>
                  <option value="chain-link">Chain Link</option>
                  <option value="vinyl">Vinyl / PVC</option>
                  <option value="security">Security Fencing</option>
                  <option value="commercial">Commercial</option>
                  <option value="temporary">Temporary</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-brand-iron mb-2">
                  Estimated Linear Feet (if known)
                </label>
                <input
                  type="text"
                  name="linearFeet"
                  className="input-field"
                  placeholder="e.g., 150 ft"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-brand-iron mb-2">
                  Project Details
                </label>
                <textarea
                  name="message"
                  rows={5}
                  className="input-field resize-none"
                  placeholder="Tell us about your project — existing fence removal, terrain, timeline, etc."
                />
              </div>

              <button type="submit" className="btn-primary w-full justify-center">
                Submit Request
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-display font-900 text-3xl uppercase text-brand-black mb-6">
                Contact Info
              </h2>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-amber flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-brand-silver mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:3602001005"
                      className="font-display font-700 text-xl uppercase text-brand-black hover:text-brand-amber transition-colors"
                    >
                      360.200.1005
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-amber flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-brand-silver mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:build@infinityfencingnw.com"
                      className="font-display font-700 text-lg uppercase text-brand-black hover:text-brand-amber transition-colors"
                    >
                      build@infinityfencingnw.com
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-amber flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-brand-silver mb-1">
                      Hours
                    </p>
                    <p className="font-body text-brand-black">
                      Monday – Sunday
                      <br />
                      8:00 AM – 6:00 PM
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-amber flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-brand-silver mb-1">
                      Service Area
                    </p>
                    <p className="font-body text-brand-black text-sm leading-relaxed">
                      Vancouver · Camas · Washougal
                      <br />
                      Battle Ground · Ridgefield · La Center
                      <br />
                      Clark County & SW Washington
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Trust block */}
            <div className="bg-brand-charcoal p-8">
              <p className="font-display font-900 text-2xl uppercase text-brand-white mb-4">
                What to Expect
              </p>
              <ul className="space-y-3 text-sm text-brand-fog">
                {[
                  "We respond within 1 business day",
                  "On-site estimate — we measure it ourselves",
                  "No obligation, no pressure",
                  "Clear written quote before any work begins",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-brand-amber mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
