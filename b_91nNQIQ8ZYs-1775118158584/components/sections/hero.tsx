"use client"

import { ArrowDown, Github, Linkedin, Mail, Download, FolderOpen, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Part - Content */}
            <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
              {/* Available Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-primary">Available for hire</span>
              </div>
              
              <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
                <p className="text-primary font-mono text-sm tracking-wider">
                  Hi, my name is
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                  <span className="text-balance">Md. Sadek Hossain</span>
                  <span className="block text-primary mt-1">(Nirob)</span>
                </h1>
              </div>
              
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
                Full Stack Laravel Developer
              </h2>
              
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
                Building scalable, secure, high-performance web applications with 
                <span className="text-primary font-semibold"> 4+ years</span> of hands-on experience. 
                Specializing in Laravel, PHP, and modern JavaScript frameworks.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400">
                <Button asChild size="lg" className="gap-2">
                  <Link href="#projects">
                    <FolderOpen className="h-4 w-4" />
                    View Projects
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <a href="/cv.pdf" download>
                    <Download className="h-4 w-4" />
                    Download CV
                  </a>
                </Button>
                <Button asChild variant="secondary" size="lg" className="gap-2">
                  <Link href="#contact">
                    <Mail className="h-4 w-4" />
                    Contact Me
                  </Link>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 justify-center lg:justify-start pt-2 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500">
                <Link
                  href="https://www.facebook.com/nirob.abhee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="https://linkedin.com/in/nirob-abhee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="https://github.com/nirobabhee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="mailto:nirobabhee@gmail.com"
                  className="p-2.5 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                  aria-label="Send Email"
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Right Part - Profile Image */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2 animate-in fade-in slide-in-from-right-8 duration-700">
              <div className="relative">
                {/* Decorative rings */}
                <div className="absolute inset-0 -m-4 rounded-full border-2 border-primary/20 animate-pulse" />
                <div className="absolute inset-0 -m-8 rounded-full border border-primary/10" />
                
                {/* Image container */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/481996301_9744312542347056_664031051057252761_n-dL1Usc5uZDvlW2eOdtQe5cpG8Rv8wz.jpg"
                    alt="Md. Sadek Hossain (Nirob) - Full Stack Laravel Developer"
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                    priority
                    unoptimized
                  />
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-2 -right-2 px-4 py-2 bg-card border border-border rounded-full shadow-lg">
                  <span className="text-sm font-mono text-primary">4+ Years Exp</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll to About</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
