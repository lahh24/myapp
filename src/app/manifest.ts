import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LESURMESURE — Bespoke Tailoring",
    short_name: "LESURMESURE",
    description:
      "Luxury custom tailoring for men in Casablanca, Morocco. Handcrafted suits, shirts, and garments made to your exact measurements.",
    start_url: "/",
    display: "standalone",
    background_color: "#0c0b09",
    theme_color: "#c9a96e",
    orientation: "portrait-primary",
    categories: ["lifestyle", "shopping"],
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
