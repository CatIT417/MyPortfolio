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
  applicationName: "Corey — Portfolio",
  title: "Corey — I build solutions for a better tomorrow",
  description:
    "Corey is an AI-Native Full Stack Engineer with 10+ years of experience turning ideas into real-world applications with focus on impact, usability, and innovation. Based in Florida, US.",
  keywords: ["Corey", "developer", "portfolio", "full-stack", "Florida"],
  authors: [{ name: "Corey" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Corey — I build solutions for a better tomorrow",
    description:
      "An AI-Native Full Stack Engineer who loves turning ideas into real-world applications.",
    type: "website",
    url: "https://aakashgugilla.is-a.dev",
    siteName: "Corey — Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Corey — I build solutions for a better tomorrow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corey — I build solutions for a better tomorrow",
    description:
      "An AI-Native Full Stack Engineer who loves turning ideas into real-world applications.",
    images: ["/og.jpg"],
  },
};

// Structured data — only facts present on this website.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Corey",
      url: "https://aakashgugilla.is-a.dev",
      sameAs: ["https://github.com/catit417"],
    },
    {
      "@type": "WebSite",
      name: "Corey — I build solutions for a better tomorrow",
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
