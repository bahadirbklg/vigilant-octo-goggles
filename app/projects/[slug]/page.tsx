import type { Metadata } from "next"
import { notFound } from "next/navigation"

// Mock project data - in a real app, this would come from a CMS or API
const projects = [
  {
    slug: "kubernetes-monitoring",
    title: "Kubernetes Monitoring Solution",
    description:
      "Implemented a comprehensive monitoring solution for Kubernetes clusters using Prometheus, Grafana, and custom alerting rules.",
    keywords: ["Kubernetes", "Monitoring", "Prometheus", "Grafana", "SRE", "DevOps"],
    content: "...", // Full content would go here
  },
  // Other projects...
]

// Generate metadata for each project page
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    }
  }

  return {
    title: `${project.title} | SRE Project`,
    description: project.description,
    keywords: project.keywords.join(", "),
    alternates: {
      canonical: `/projects/${params.slug}`,
    },
  }
}

// Generate static paths for all projects
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <div className="prose max-w-none">
        {/* Project content would render here */}
        <p>{project.description}</p>
      </div>
    </div>
  )
}
