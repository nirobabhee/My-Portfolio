"use client"

import { Github, Linkedin, Mail, MapPin, Phone, Facebook, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "nirobabhee@gmail.com",
    href: "mailto:nirobabhee@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+880 1683 130030",
    href: "tel:+8801683130030",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Uttara, Dhaka, Bangladesh",
    href: null,
  },
]

const socialLinks = [
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/nirob.abhee",
    username: "@nirob.abhee",
    color: "hover:bg-blue-500/10 hover:border-blue-500/50",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/nirob-abhee",
    username: "@nirob-abhee",
    color: "hover:bg-blue-600/10 hover:border-blue-600/50",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/nirobabhee",
    username: "@nirobabhee",
    color: "hover:bg-gray-500/10 hover:border-gray-500/50",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-10 md:py-15">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground whitespace-nowrap">
              <span className="text-primary font-mono text-xl mr-2">05.</span>
              Get In Touch
            </h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            I&apos;m currently open to new opportunities and interesting projects. 
            Whether you have a question, want to discuss a project, or just want to say hi, 
            feel free to reach out!
          </p>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <div className="p-6 rounded-xl border border-border bg-card text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/30">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download-V7Zkya749DUvgQDGlA3PjW93eaHhes.png"
                    alt="Md. Sadek Hossain (Nirob)"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                    unoptimized
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  Md. Sadek Hossain
                </h3>
                <p className="text-primary font-medium mb-3">(Nirob)</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Full Stack Laravel Developer
                </p>
                <div className="flex justify-center gap-2">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary transition-all"
                      aria-label={link.label}
                    >
                      <link.icon className="h-5 w-5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card">
                    <div className="p-2 rounded-md bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                          {item.value}
                        </Link>
                      ) : (
                        <p className="text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">
                Connect With Me
              </h3>
              
              <div className="space-y-3">
                {socialLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-lg border border-border bg-card transition-all duration-300 group ${item.color}`}
                  >
                    <div className="p-2 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.label}
                      </p>
                      <p className="text-sm text-muted-foreground">{item.username}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                ))}
              </div>

              <Button asChild size="lg" className="w-full gap-2 mt-4">
                <Link href="mailto:nirobabhee@gmail.com">
                  <Mail className="h-4 w-4" />
                  Send me an email
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
