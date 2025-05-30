"use client"

import { useState } from "react"

const skillCategories = {
  "Cloud & Infrastructure": [
    { name: "AWS", level: 90, years: "3+" },
    { name: "Kubernetes", level: 85, years: "2+" },
    { name: "Docker", level: 90, years: "3+" },
    { name: "Terraform", level: 80, years: "2+" },
    { name: "Google Cloud", level: 70, years: "1+" },
  ],
  "Monitoring & Observability": [
    { name: "Prometheus", level: 85, years: "2+" },
    { name: "Grafana", level: 85, years: "2+" },
    { name: "ELK Stack", level: 75, years: "2+" },
    { name: "Datadog", level: 70, years: "1+" },
  ],
  "Automation & CI/CD": [
    { name: "Ansible", level: 85, years: "2+" },
    { name: "Jenkins", level: 80, years: "2+" },
    { name: "GitLab CI", level: 75, years: "1+" },
    { name: "GitHub Actions", level: 70, years: "1+" },
  ],
  "Systems & Programming": [
    { name: "Linux", level: 90, years: "4+" },
    { name: "Python", level: 80, years: "3+" },
    { name: "Bash", level: 85, years: "3+" },
    { name: "Go", level: 60, years: "1+" },
  ],
}

export function EnhancedSkills() {
  const [activeCategory, setActiveCategory] = useState("Cloud & Infrastructure")

  return (
    <section id="skills" className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>

      <div className="flex flex-wrap gap-2 mb-6">
        {Object.keys(skillCategories).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeCategory === category ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillCategories[activeCategory as keyof typeof skillCategories].map((skill) => (
          <div key={skill.name} className="bg-white p-4 rounded-lg border">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">{skill.name}</span>
              <span className="text-sm text-gray-500">{skill.years} experience</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <div className="text-right text-sm text-gray-500 mt-1">{skill.level}%</div>
          </div>
        ))}
      </div>
    </section>
  )
}
