import type { Metadata } from "next";
import { Caveat, Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aakashgugilla.is-a.dev"),
  applicationName: "Aakash — Portfolio",
  title: "Aakash — I build solutions for a better tomorrow",
  description:
    "Aakash is a passionate developer turning ideas into real-world applications with focus on impact, usability, and innovation. Based in Hyderabad, India.",
  keywords: ["Aakash", "developer", "portfolio", "full-stack", "Hyderabad"],
  authors: [{ name: "Aakash" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aakash — I build solutions for a better tomorrow",
    description:
      "A passionate developer who loves turning ideas into real-world applications.",
    type: "website",
    url: "https://aakashgugilla.is-a.dev",
    siteName: "Aakash — Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Aakash — I build solutions for a better tomorrow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aakash — I build solutions for a better tomorrow",
    description:
      "A passionate developer who loves turning ideas into real-world applications.",
    images: ["/og.jpg"],
  },
};

// Structured data — only facts present on this website.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Aakash",
      url: "https://aakashgugilla.is-a.dev",
      sameAs: [
        "https://github.com/Gugilla-Aakash",
        "https://www.linkedin.com/in/gugilla-aakash",
      ],
    },
    {
      "@type": "WebSite",
      name: "Aakash — I build solutions for a better tomorrow",
      url: "https://aakashgugilla.is-a.dev",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} ${caveat.variable} h-full`}>
      <body className="min-h-full bg-[#05010f] text-[#f4f2ff] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
