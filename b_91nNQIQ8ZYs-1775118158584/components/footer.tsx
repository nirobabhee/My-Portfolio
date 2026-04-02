"use client"

import { Github, Linkedin, Mail, Facebook, Heart, ArrowUp } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/nirob.abhee",
    label: "Facebook",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/nirob-abhee",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/nirobabhee",
    label: "GitHub",
  },
  {
    icon: Mail,
    href: "mailto:nirobabhee@gmail.com",
    label: "Email",
  },
]

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-12 border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Top Section */}
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <span className="text-2xl font-bold text-foreground">
                  Nirob<span className="text-primary">.</span>
                </span>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Full Stack Laravel Developer specializing in building scalable, 
                secure, and high-performance web applications.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                    aria-label={link.label}
                  >
                    <link.icon className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact</h3>
              <div className="space-y-3 text-sm">
                <p className="text-muted-foreground">
                  <span className="text-foreground">Email:</span>{" "}
                  <Link href="mailto:nirobabhee@gmail.com" className="hover:text-primary transition-colors">
                    nirobabhee@gmail.com
                  </Link>
                </p>
                <p className="text-muted-foreground">
                  <span className="text-foreground">Phone:</span>{" "}
                  <Link href="tel:+8801683130030" className="hover:text-primary transition-colors">
                    +880 1683 130030
                  </Link>
                </p>
                <p className="text-muted-foreground">
                  <span className="text-foreground">Location:</span>{" "}
                  Uttara, Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-border mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {currentYear} Md. Sadek Hossain (Nirob). All rights reserved.
            </p>

            <p className="text-sm text-muted-foreground flex items-center gap-1">
             Stay with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> Your support!
            </p>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
