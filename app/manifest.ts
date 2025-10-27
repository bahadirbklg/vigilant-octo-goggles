import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bahadir Bakkaloglu - Site Reliability Engineer Portfolio",
    short_name: "Bahadir Bakkaloglu",
    description:
      "Professional Site Reliability Engineer specializing in cloud infrastructure, Kubernetes, Docker, and DevOps automation",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
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
  }
}
