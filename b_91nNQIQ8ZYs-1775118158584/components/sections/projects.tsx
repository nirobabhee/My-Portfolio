"use client"

import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const personalProjects = [
  {
    title: "RateLab",
    description: "Business rating platform",
    tech: ["Laravel", "MySQL"],
    liveUrl: "https://script.viserlab.com/ratelab",
    featured: true,
  },
  {
    title: "EscrowLab",
    description: "Secure escrow system",
    tech: ["Laravel", "MySQL"],
    liveUrl: "https://script.viserlab.com/escrowlab",
    featured: true,
  },
  {
    title: "TreeVest",
    description: "Investment platform",
    tech: ["Laravel", "MySQL"],
    liveUrl: "https://script.viserlab.com/treevest",
    featured: false,
  },
  {
    title: "Olance",
    description: "Freelancing marketplace",
    tech: ["Laravel", "React"],
    liveUrl: "https://script.viserlab.com/olance",
    featured: false,
  },
]

export default function ProjectsSection() {
  const featured = personalProjects.filter(p => p.featured)
  const others = personalProjects.filter(p => !p.featured)

  return (
    <section className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-2xl font-bold mb-10">
          Personal Projects
        </h2>

        {/* FEATURED */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {featured.map((project) => (
            <a
              key={project.title}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative z-20"
            >
              <div className="p-6 border rounded-xl hover:border-primary hover:-translate-y-1 transition cursor-pointer">

                <ExternalLink className="h-4 w-4 float-right opacity-0 group-hover:opacity-100" />

                <h3 className="text-lg font-bold mb-2 group-hover:text-primary">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-500 mb-3">
                  {project.description}
                </p>

                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs bg-gray-200 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </a>
          ))}
        </div>

        {/* OTHER */}
        <div className="grid md:grid-cols-3 gap-4">
          {others.map((project) => (
            <a
              key={project.title}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative z-20"
            >
              <div className="p-4 border rounded-lg hover:border-primary hover:-translate-y-1 transition cursor-pointer">

                <ExternalLink className="h-4 w-4 float-right opacity-0 group-hover:opacity-100" />

                <h4 className="font-semibold group-hover:text-primary">
                  {project.title}
                </h4>

                <p className="text-sm text-gray-500">
                  {project.description}
                </p>

              </div>
            </a>
          ))}
        </div>

        {/* GitHub */}
        <div className="text-center mt-10">
          <Button asChild>
            <a href="https://github.com/nirobabhee" target="_blank">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>

      </div>
    </section>
  )
}
