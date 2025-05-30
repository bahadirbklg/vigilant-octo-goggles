import type { MetadataRoute } from "next"

// Base URL for your site
const baseUrl = "https://bahadirbakkaloglu.tech"

// Define your site's pages
const pages = [
  {
    url: "/",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1.0,
  },
  {
    url: "/#about",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: "/#experience",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: "/#certifications",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: "/#skills",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: "/#contact",
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.6,
  },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: page.priority,
  }))
}
