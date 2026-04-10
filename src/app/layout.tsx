import type { Metadata } from "next";
import "../styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.infinityfencingnw.com"),
  title: {
    default: "Infinity Fencing NW | Fence Installation – Vancouver, WA & SW Washington",
    template: "%s | Infinity Fencing NW",
  },
  description:
    "Veteran-owned fence contractor serving Vancouver WA, Clark County & SW Washington. Wood, chain link, vinyl, and security fencing. Free estimates. Licensed & insured.",
  keywords: [
    "fence contractor Vancouver WA",
    "fence installation Clark County",
    "wood fence Vancouver Washington",
    "chain link fence installer SW Washington",
    "vinyl fence contractor",
    "security fencing Vancouver WA",
    "commercial fencing Clark County",
    "temporary fence rental Vancouver WA",
    "veteran owned fence company",
    "metal post wood fence",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.infinityfencingnw.com",
    siteName: "Infinity Fencing NW",
    title: "Infinity Fencing NW | Fence Installation – Vancouver, WA",
    description:
      "Veteran-owned fence contractor. Wood, chain link, vinyl & security fencing. Serving Vancouver WA & SW Washington. Free estimates.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Infinity Fencing NW – Quality Fence Installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Infinity Fencing NW | Fence Contractor Vancouver WA",
    description:
      "Veteran-owned fence contractor. Wood, chain link, vinyl & security fencing. Free estimates.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN", // Replace after setup
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Local Business Schema – critical for local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.infinityfencingnw.com/#business",
              name: "Infinity Fencing NW LLC",
              description:
                "Veteran-owned fence contractor specializing in wood, chain link, vinyl, and security fencing in Vancouver WA and SW Washington.",
              url: "https://www.infinityfencingnw.com",
              telephone: "+13602001005",
              email: "build@infinityfencingnw.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Vancouver",
                addressRegion: "WA",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 45.6387,
                longitude: -122.6615,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "08:00",
                closes: "18:00",
              },
              priceRange: "$$",
              areaServed: [
                "Vancouver, WA",
                "Clark County, WA",
                "Camas, WA",
                "Washougal, WA",
                "Battle Ground, WA",
                "Ridgefield, WA",
                "La Center, WA",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Fencing Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Wood Fence Installation",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Chain Link Fence Installation",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Vinyl Fence Installation",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Security Fencing",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
