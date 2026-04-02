"use client"

import { Code2, Database, Globe, Zap } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "4+ Years Experience",
    description: "Building production-ready web applications with Laravel and modern JavaScript frameworks.",
  },
  {
    icon: Database,
    title: "Backend Expertise",
    description: "Strong proficiency in Laravel, API development, and database optimization with MySQL.",
  },
  {
    icon: Globe,
    title: "Full Stack Skills",
    description: "Frontend development with React, Vue, Next.js alongside robust backend systems.",
  },
  {
    icon: Zap,
    title: "Performance Focused",
    description: "Experience building SaaS, marketplaces, escrow systems, and high-traffic applications.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-10 md:py-15">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground whitespace-nowrap">
              <span className="text-primary font-mono text-xl mr-2">01.</span>
              About Me
            </h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m a passionate full-stack web developer with over 4 years of hands-on experience 
                specializing in <span className="text-foreground font-medium">Laravel, PHP, and modern JavaScript frameworks</span>. 
                My journey in software development has equipped me with a deep understanding of both 
                frontend and backend technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently, I work at <span className="text-foreground font-medium">The Softking Ltd.</span>, 
                where I&apos;ve developed and deployed 10+ Laravel-based applications with scalable architectures, 
                improving application performance by 30%. I specialize in designing optimized database schemas 
                and building RESTful APIs for seamless data flow.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m skilled in leveraging AI-assistant development tools like <span className="text-foreground font-medium">
                ChatGPT, Copilot, Claude, and Cursor</span> to improve code quality, speed, and efficiency. 
                My goal is to build solutions that are not only functional but also maintainable and scalable.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="group p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <item.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
