import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://bahadirbakkaloglu.tech",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://bahadirbakkaloglu.tech/#about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://bahadirbakkaloglu.tech/#experience",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://bahadirbakkaloglu.tech/#certifications",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://bahadirbakkaloglu.tech/#skills",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://bahadirbakkaloglu.tech/#contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ]
}
