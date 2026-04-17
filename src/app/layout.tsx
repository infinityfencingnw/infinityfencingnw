import type { Metadata } from "next";
import "../styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.infinityfencingnw.com"),
  title: {
    default: "Infinity Fencing NW | Fence Installation – Poulsbo, WA & Kitsap Peninsula",
    template: "%s | Infinity Fencing NW",
  },
  description:
    "Veteran-owned fence contractor serving Poulsbo WA, Kitsap County & NW Washington. Wood, chain link, vinyl, gates, and hauling. Free estimates. Licensed & insured.",
  keywords: [
    "fence contractor Poulsbo WA",
    "fence installation Kitsap County",
    "wood fence Poulsbo Washington",
    "chain link fence installer Kitsap Peninsula",
    "vinyl fence contractor",
    "gate installation Poulsbo WA",
    "fence removal disposal Kitsap County",
    "junk hauling Poulsbo WA",
    "commercial fencing Kitsap County",
    "temporary fence rental Poulsbo WA",
    "veteran owned fence company",
    "metal post wood fence",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.infinityfencingnw.com",
    siteName: "Infinity Fencing NW",
    title: "Infinity Fencing NW | Fence Installation – Poulsbo, WA",
    description:
      "Veteran-owned fence contractor. Wood, chain link, vinyl & gates & hauling. Serving Poulsbo WA & Kitsap Peninsula. Free estimates.",
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
    title: "Infinity Fencing NW | Fence Contractor Poulsbo WA",
    description:
      "Veteran-owned fence contractor. Wood, chain link, vinyl & gates & hauling. Free estimates.",
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
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
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
                "Veteran-owned fence contractor specializing in wood, chain link, vinyl, and gates & hauling in Poulsbo WA and the Kitsap Peninsula.",
              url: "https://www.infinityfencingnw.com",
              telephone: "+13602001005",
              email: "build@infinityfencingnw.com",
              geo: {
                "@type": "GeoCoordinates",
                latitude: 47.7348,
                longitude: -122.6488,
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
                "Poulsbo, WA",
                "Kitsap County, WA",
                "Bremerton, WA",
                "Silverdale, WA",
                "Kingston, WA",
                "Bainbridge Island, WA",
                "Port Orchard, WA",
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
                      name: "Gate Installation",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Fence Removal & Hauling",
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
