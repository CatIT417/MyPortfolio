import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Corey — I build solutions for a better tomorrow",
    short_name: "Corey",
    description:
      "Corey is an AI-Native Full Stack Engineer with 10+ years of experience turning ideas into real-world applications with focus on impact, usability, and innovation. Based in Florida, US.",
    start_url: "/",
    display: "standalone",
    background_color: "#05010f",
    theme_color: "#05010f",
    icons: [
      {
        src: "/logo-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
