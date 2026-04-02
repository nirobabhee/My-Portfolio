"use client"

import { Server, Layout, Database, Wrench, Sparkles, Cloud, HardDrive, Upload, FileCode } from "lucide-react"

const skillCategories = [
  {
    icon: Server,
    title: "Backend",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    skills: ["Laravel", "PHP", "CodeIgniter", "REST API", "Sanctum", "Redis", "Livewire"],
  },
  {
    icon: Layout,
    title: "Frontend",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    skills: ["JavaScript", "jQuery", "React", "Next.js", "Tailwind CSS", "Bootstrap", "Ajax","Jquery"],
  },
  {
    icon: Database,
    title: "Database",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "SQL", "Database Design", "Query Optimization", "Redis", "SQLite"],
  },
  {
    icon: FileCode,
    title: "Database Tools",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    skills: ["phpMyAdmin", "MySQL Workbench", "TablePlus", "DBeaver", "MongoDB Compass", "Adminer", "HeidiSQL"],
  },
  {
    icon: Cloud,
    title: "DevOps & CI/CD",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    skills: ["GitHub Actions", "GitLab CI", "Nginx", "Apache", "Bitbucket Pipelines"],
  },
  {
    icon: HardDrive,
    title: "Server & Hosting",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    skills: [ "CentOS", "cPanel", "WHM", "VPS Management", "AWS EC2", "DigitalOcean"],
  },
  {
    icon: Upload,
    title: "Deployment & FTP",
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
    skills: ["FTP/SFTP", "FileZilla", "SSH", "Git Deploy", "Forge", "Manual Deployment"],
  },
  {
    icon: Wrench,
    title: "Tools",
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    skills: ["Git", "GitHub", "Postman", "Composer", "NPM", "VS Code", "Trello", "Jira"],
  },
  {
    icon: Sparkles,
    title: "AI Tools",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    skills: ["ChatGPT", "GitHub Copilot", "Claude", "Gemini", "Cursor", "Black Box"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-10 md:py-15 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground whitespace-nowrap">
              <span className="text-primary font-mono text-xl mr-2">02.</span>
              Skills & Technologies
            </h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-xl ${category.bgColor} group-hover:scale-110 transition-transform`}>
                    <category.icon className={`h-5 w-5 ${category.color}`} />
                  </div>
                  <h3 className="font-bold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-full bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default border border-transparent hover:border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
