"use client"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Infrastructure Monitoring Dashboard",
    description:
      "Built comprehensive monitoring solution using Prometheus, Grafana, and custom alerting rules. Reduced MTTR by 60% and improved system visibility.",
    tech: ["Prometheus", "Grafana", "Docker", "Kubernetes", "Python"],
    metrics: "99.9% uptime achieved",
    image: "/project-monitoring.png",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Automated CI/CD Pipeline",
    description:
      "Designed and implemented GitOps-based deployment pipeline with automated testing, security scanning, and rollback capabilities.",
    tech: ["Jenkins", "GitLab CI", "Terraform", "Ansible", "AWS"],
    metrics: "50% faster deployments",
    image: "/project-cicd.png",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Infrastructure as Code Migration",
    description:
      "Led migration from manual infrastructure management to IaC using Terraform, improving consistency and reducing provisioning time.",
    tech: ["Terraform", "AWS", "CloudFormation", "Bash"],
    metrics: "80% reduction in provisioning time",
    image: "/project-iac.png",
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="mb-12">
      <h2 className="text-2xl font-bold mb-6 relative">
        Featured Projects
        <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                <span className="text-sm">Project Screenshot</span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                  {project.metrics}
                </span>
              </div>

              <div className="flex gap-3">
                <a href={project.liveUrl} className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm">
                  <ExternalLink size={16} />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  className="flex items-center gap-1 text-gray-600 hover:text-gray-800 text-sm"
                >
                  <Github size={16} />
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
