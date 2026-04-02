"use client"

import { GraduationCap, Calendar, Clock, MapPin, Award, CheckCircle2 } from "lucide-react"

const education = [
  {
    badge: "DIP",
    degree: "Diploma: Web App Development with PHP",
    institution: "ISDB-BISEW",
    period: "2018-2019",
    details: "960 Hours | IDB Bhaban, Dhaka",
    color: "bg-orange-500",
  },
  {
    badge: "MBA",
    degree: "MBA: Finance & Banking",
    institution: "Affiliate Dhaka University",
    period: "2015-2016",
    details: "GPA 2.97/4.00",
    color: "bg-orange-500",
  },
  {
    badge: "BBA",
    degree: "BBA: Finance & Banking",
    institution: "Siddheswari University",
    period: "2011-2015",
    details: "GPA 3.37/4.00",
    color: "bg-orange-500",
  },
]

const certification = {
  title: "IDB-BISEW IT-Diploma: Web Application Development with PHP and Frameworks",
  duration: "960 Hours (December 2018 - December 2019)",
  issuer: "Issued by ISDB-BISEW, Dhaka",
  type: "Professional Diploma",
}

const verifiedSkills = [
  "Laravel & PHP Architecture",
  "REST API Design & Integration",
  "MySQL Query Optimization",
  "Server Deployment & DevOps",
]

export function EducationSection() {
  return (
    <section id="education" className="py-10 md:py-15 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Education & Credentials
              <span className="text-primary">.</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Academic foundations combined with professional technical training.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
            {/* Academic Background Column */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-orange-500/10">
                  <GraduationCap className="h-5 w-5 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Academic Background</h3>
              </div>

              <div className="space-y-4">
                {education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="p-5 rounded-xl bg-card border border-border hover:border-orange-500/30 transition-all duration-300 group"
                  >
                    <div className="flex gap-4">
                      {/* Badge */}
                      <div className="flex-shrink-0">
                        <div className={`w-14 h-14 ${edu.color} rounded-xl flex flex-col items-center justify-center text-white`}>
                          <span className="text-xs font-bold">{edu.badge}</span>
                          <GraduationCap className="h-4 w-4 mt-0.5" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-foreground group-hover:text-orange-500 transition-colors">
                          {edu.degree}
                        </h4>
                        <p className="text-orange-500 text-sm font-medium mt-1">
                          {edu.institution}
                        </p>
                        <div className="flex flex-wrap items-center gap-3 mt-3">
                          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                            <Calendar className="h-3 w-3" />
                            {edu.period}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-xs text-orange-500 bg-orange-500/10 px-2.5 py-1 rounded-full">
                            <Clock className="h-3 w-3" />
                            {edu.details}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Column */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-amber-500/10">
                  <Award className="h-5 w-5 text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Certifications</h3>
              </div>

              {/* Main Certification Card */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-card to-card/50 border border-amber-500/20 mb-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-amber-500/10">
                    <CheckCircle2 className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">
                      CERTIFIED
                    </span>
                    <h4 className="font-bold text-foreground mt-1 leading-tight">
                      {certification.title}
                    </h4>
                  </div>
                </div>

                <div className="space-y-2 ml-11">
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5 text-amber-500" />
                    {certification.duration}
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-amber-500" />
                    {certification.issuer}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-sm font-medium text-amber-500">
                    {certification.type}
                  </span>
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    <span className="w-2 h-2 rounded-full bg-amber-500/60"></span>
                    <span className="w-2 h-2 rounded-full bg-amber-500/30"></span>
                  </div>
                </div>
              </div>

              {/* Skills Verified */}
              <div className="p-5 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <h4 className="font-semibold text-foreground">Skills Verified In Practice</h4>
                </div>
                <ul className="space-y-2.5">
                  {verifiedSkills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
