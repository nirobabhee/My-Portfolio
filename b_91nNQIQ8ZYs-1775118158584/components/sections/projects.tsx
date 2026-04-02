"use client"

import { ExternalLink, Github, Star, Briefcase, Globe, ArrowUpRight, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const clientProjects = [
  {
    title: "Vuneto",
    subtitle: "eSIM Platform",
    description: "Comprehensive eSIM management platform enabling users to purchase and activate digital SIM cards for global connectivity.",
    tech: ["Laravel", "MySQL","Javascript", "Bootstrap", "CSS","Ajax"],
    liveUrl: "https://vuneto.com",
    category: "E-Commerce",
  },
  {
    title: "Terra Teniente Realty",
    subtitle: "Property Platform",
    description: "Property selling and buying platform with advanced property listings, search filters, and agent management system.",
     tech: ["Laravel", "MySQL","Javascript", "Bootstrap", "CSS","Ajax"],
    liveUrl: "https://app.terratenienterealty.com",
    category: "Real Estate",
  },
  {
    title: "MortFund",
    subtitle: "Crowdfunding",
    description: "Real estate crowdfunding platform allowing investors to participate in property investments with transparent ROI tracking.",
    tech: ["Laravel", "MySQL","Javascript", "Bootstrap", "CSS","Ajax"],
    liveUrl: "https://mortfund.com",
    category: "Finance",
  },
  {
    title: "SyPow",
    subtitle: "PPC Platform",
    description: "Pay-per-click earning platform where users earn money by viewing advertisements and completing tasks.",
    tech: ["Laravel", "MySQL","Javascript", "Bootstrap", "CSS","Ajax"],
    liveUrl: "https://www.sypow.com",
    category: "Marketing",
  },
  {
    title: "SocialAccShop",
    subtitle: "Marketplace",
    description: "Social media account marketplace for buying and selling verified social media accounts securely.",
    tech: ["Laravel", "MySQL","Javascript", "Bootstrap", "CSS","Ajax"],
    liveUrl: "https://socialaccshop.com",
    category: "E-Commerce",
  },
  {
    title: "EBC Bidders",
    subtitle: "Bidding + Involab",
    description: "Bidding platform with integrated invoicing system for auction-style transactions and payment management.",
    tech: ["Laravel", "MySQL","Javascript", "Bootstrap", "CSS","Ajax"],
    liveUrl: "https://ebcbidders.com",
    category: "Auction",
  },
  {
    title: "AIComodo",
    subtitle: "360 Investing",
    description: "AI-powered 360-degree investing system providing portfolio management and automated investment strategies.",
    tech: ["Laravel", "MySQL","Javascript", "Bootstrap", "CSS","Ajax"],
    liveUrl: "https://aicomodo.ai",
    category: "Finance",
  },
  {
    title: "Smart4Bet",
    subtitle: "Betting System",
    description: "Comprehensive online betting platform with real-time odds, multiple sports coverage, and secure transactions.",
    tech: ["Laravel", "MySQL","Javascript", "Bootstrap", "CSS","Ajax"],
    liveUrl: "https://smart4bet.com",
    category: "Gaming",
  },
  {
    title: "SeekStock",
    subtitle: "Photo Platform",
    description: "Stock photography marketplace for photographers to sell their work with licensing and download management.",
     tech: ["Laravel", "MySQL","Javascript", "Bootstrap", "CSS","Ajax"],
    liveUrl: "https://seekstock.com.br",
    category: "Media",
  },
  {
    title: "GCPA Private Trust",
    subtitle: "Banking System",
    description: "Full-featured online banking system with account management, transfers, statements, and secure authentication.",
     tech: ["Laravel", "MySQL","Javascript", "Bootstrap", "CSS","Ajax"],
    liveUrl: "https://privatetrust.gcpagroup.com",
    category: "Finance",
  },
  {
    title: "Micky Sliquor",
    subtitle: "Review Platform",
    description: "Rating and review platform for liquor products with user reviews, ratings, and product recommendations.",
    tech: ["Laravel", "MySQL","Javascript", "Bootstrap", "CSS","Ajax"],
    liveUrl: "https://www.mickysliquor.com",
    category: "E-Commerce",
  },
]

const personalProjects = [
  {
    title: "RateLab",
    description: "A comprehensive business rating and review platform enabling customers to share feedback and businesses to manage their reputation.",
     tech: ["Laravel", "MySQL","Javascript", "Bootstrap", "CSS","Ajax"],
    liveUrl: "https://script.viserlab.com/ratelab",
    featured: true,
  },
  {
    title: "EscrowLab",
    description: "Secure escrow payment system for safe transactions between buyers and sellers with automated fund release.",
    tech: ["Laravel", "Bootstrap", "MySQL", "Ajax"],
    liveUrl: "https://script.viserlab.com/escrowlab",
    featured: true,
  },
  {
    title: "TreeVest",
    description: "Investment management system with portfolio tracking, ROI calculations, and automated profit distribution.",
    tech: ["Laravel", "Ajax", "MySQL", "CSS","Bootstrap"],
    liveUrl: "https://script.viserlab.com/treevest",
    featured: true,
  },
  {
    title: "Olance",
    description: "Full-featured freelancing marketplace connecting buyers and sellers with project management and payments.",
    tech: ["Laravel", "React", "MySQL", "Ajax","Jquery"],
    liveUrl: "https://script.viserlab.com/olance",
    featured: true,
  },
  {
    title: "SMMLab",
    description: "Social media marketing platform for managing campaigns and tracking analytics.",
    tech: ["Laravel", "MySQL","Javascript", "Bootstrap", "CSS","Ajax"],
    liveUrl: "#",
    featured: false,
  },
  {
    title: "Metalance",
    description: "MetaMask integrated gig-based freelancing platform with cryptocurrency payments.",
    tech: ["Laravel", "Web3","Ajax", "MetaMask"],
    liveUrl: "https://script.viserlab.com/metalance",
    featured: false,
  },
  {
    title: "Riselab",
    description: "Crowdfunding donation platform for creators to raise funds for projects.",
     tech: ["Laravel", "MySQL","Javascript", "Bootstrap", "CSS","Ajax"],
    liveUrl: "https://script.viserlab.com/riselab",
    featured: false,
  },
  {
    title: "Caremate",
    description: "On-demand caregiver hiring platform connecting families with qualified caregivers.",
    tech: ["Laravel", "MySQL", "Ajax","Booststrap", "CSS"],
    liveUrl: "https://script.viserlab.com/caremate",
    featured: false,
  },
]

const categoryColors: Record<string, string> = {
  "E-Commerce": "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  "Real Estate": "bg-blue-500/10 text-blue-500 border-blue-500/20",
  "Finance": "bg-amber-500/10 text-amber-500 border-amber-500/20",
  "Marketing": "bg-purple-500/10 text-purple-500 border-purple-500/20",
  "Auction": "bg-rose-500/10 text-rose-500 border-rose-500/20",
  "Gaming": "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
  "Media": "bg-pink-500/10 text-pink-500 border-pink-500/20",
}

export function ProjectsSection() {
  const featuredPersonal = personalProjects.filter((p) => p.featured)
  const otherPersonal = personalProjects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground whitespace-nowrap">
              <span className="text-primary font-mono text-xl mr-2">04.</span>
              Featured Projects
            </h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          {/* Client Work Section */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Live Client Projects</h3>
                  <p className="text-sm text-muted-foreground">Production applications serving real users</p>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  {clientProjects.length} Live Projects
                </span>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {clientProjects.map((project, index) => (
                <Link
                  key={project.title}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="h-full p-5 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 transition-colors">
                          <Layers className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                          </h4>
                          <p className="text-xs text-muted-foreground">{project.subtitle}</p>
                        </div>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>

                    {/* Category Badge */}
                    <span className={`inline-flex px-2.5 py-1 text-xs font-medium rounded-full border mb-3 ${categoryColors[project.category] || "bg-muted text-muted-foreground"}`}>
                      {project.category}
                    </span>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs font-mono rounded bg-muted text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Live Indicator */}
                    <div className="absolute bottom-5 right-5 flex items-center gap-1.5 text-xs text-emerald-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Personal/Featured Projects */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10">
                <Star className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Personal & Open Source</h3>
                <p className="text-sm text-muted-foreground">Side projects and experimental work</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {featuredPersonal.map((project, index) => (
                <div
                  key={project.title}
                  className="group relative p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 rounded-lg bg-amber-500/10">
                      <Star className="h-5 w-5 text-amber-500" />
                    </div>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      Featured
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Other Personal Projects */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {otherPersonal.map((project) => (
                <div
                  key={project.title}
                  className="group p-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <h5 className="font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {project.title}
                  </h5>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-mono rounded bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GitHub Link */}
          <div className="text-center">
            <Button asChild variant="outline" size="lg" className="gap-2 rounded-full">
              <Link
                href="https://github.com/nirobabhee"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                View More on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
