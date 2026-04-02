"use client"

import { Building2, Calendar, MapPin, Briefcase, TrendingUp, CheckCircle2 } from "lucide-react"

const experiences = [
  {
    title: "Software Developer",
    company: "The Softking Ltd.",
    location: "Uttara, Dhaka",
    period: "Dec 2021 – Present",
    duration: "3+ Years",
    current: true,
    type: "Full-time",
    summary: "Leading development of scalable Laravel applications serving thousands of users globally.",
    achievements: [
      "Developed and deployed 10+ Laravel-based applications with scalable architectures, improving application performance by 30%",
      "Designed and optimized MySQL database schemas, reducing query time by 25%",
      "Built and integrated RESTful APIs, ensuring seamless data flow between client and server",
      "Collaborated with front-end teams to deliver responsive, user-friendly UIs with Laravel Blade & modern frameworks",
      "Implemented secure authentication and role-based access systems to meet industry-standard security requirements",
      "Delivered 100+ client customization projects with tailored, high-impact web solutions",
    ],
    metrics: [
      { label: "Projects", value: "100+" },
      { label: "Performance", value: "+30%" },
      { label: "Query Speed", value: "+25%" },
    ],
  },
  {
    title: "Software Developer",
    company: "ICT Layer Ltd.",
    location: "Mirpur-10, Dhaka",
    period: "2019 – 2021",
    duration: "2 Years",
    current: false,
    type: "Full-time",
    summary: "Built foundational skills in PHP development while contributing to client projects.",
    achievements: [
      "Assisted in building CodeIgniter web applications, applying PHP best practices",
      "Collaborated with senior developers to enhance UX/UI and application performance",
      "Researched and implemented modern web trends, ensuring projects stayed competitive",
      "Researched emerging web development trends and implemented innovative solutions",
    ],
    metrics: [
      { label: "Experience", value: "2 Yrs" },
      { label: "Framework", value: "CI" },
      { label: "Focus", value: "PHP" },
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-10 md:py-15">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground whitespace-nowrap">
              <span className="text-primary font-mono text-xl mr-2">03.</span>
              Work Experience
            </h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${index}`}
                className="group relative"
              >
                {/* Connection Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-full h-8 w-px bg-gradient-to-b from-primary/50 to-transparent hidden md:block" />
                )}

                {/* Main Card */}
                <div className={`relative overflow-hidden rounded-xl border ${
                  exp.current 
                    ? "border-primary/50 bg-gradient-to-br from-primary/5 via-card to-card" 
                    : "border-border bg-card"
                } hover:border-primary/50 transition-all duration-300`}>
                  
                  {/* Current Badge */}
                  {exp.current && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-primary text-primary-foreground text-xs font-medium px-4 py-1.5 rounded-bl-lg">
                        Currently Working
                      </div>
                    </div>
                  )}

                  <div className="p-6 md:p-8">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div className="flex items-start gap-4">
                        {/* Company Icon */}
                        <div className={`p-3 rounded-xl ${
                          exp.current 
                            ? "bg-primary/20 text-primary" 
                            : "bg-muted text-muted-foreground"
                        }`}>
                          <Building2 className="h-6 w-6" />
                        </div>
                        
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-primary font-semibold text-lg">
                            {exp.company}
                          </p>
                          <p className="text-muted-foreground text-sm mt-1">
                            {exp.summary}
                          </p>
                        </div>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap md:flex-col gap-2 md:gap-1 md:text-right text-sm">
                        <div className="flex items-center gap-2 text-foreground font-medium">
                          <Calendar className="h-4 w-4 text-primary md:order-2" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4 md:order-2" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Briefcase className="h-4 w-4 md:order-2" />
                          <span>{exp.type} • {exp.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {exp.metrics.map((metric, i) => (
                        <div 
                          key={i}
                          className="text-center p-3 rounded-lg bg-muted/50 border border-border/50"
                        >
                          <div className="text-lg md:text-xl font-bold text-primary">
                            {metric.value}
                          </div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wide">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        Key Achievements
                      </div>
                      <div className="grid md:grid-cols-2 gap-2">
                        {exp.achievements.map((achievement, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 text-muted-foreground text-sm p-2 rounded-lg hover:bg-muted/30 transition-colors"
                          >
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
