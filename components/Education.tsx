"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Calendar, GraduationCap, Sparkles, Award, BookOpen } from 'lucide-react'

const Education = () => {
  const coursework = [
    "Artificial Intelligence",
    "Robotics",
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks"
  ]

  return (
    <section id="education" className="relative py-32 bg-background overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">Education</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground tracking-tight">
            Academic
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="relative bg-card border border-border/60 rounded-2xl hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8 md:p-10">
              <div className="space-y-10">
                {/* Header */}
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-11 h-11 rounded-full bg-primary/10 border border-primary/30 text-primary">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                        VIT Chennai
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground">
                        Vellore Institute of Technology • Chennai, India
                      </p>
                    </div>
                  </div>
                  <Badge className="w-fit px-4 py-1.5 text-xs md:text-sm font-medium bg-card border-border/60 text-primary">
                    B.Tech CSE • AI & Robotics
                  </Badge>
                </div>

                {/* Meta chips */}
                <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border/60 text-xs md:text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>2023 – 2027</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border/60 text-xs md:text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Chennai, India</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-xs md:text-sm">
                    <Award className="h-4 w-4 text-emerald-400" />
                    <span className="font-semibold text-emerald-300">CGPA: 8.82 / 10</span>
                  </div>
                </div>

                {/* Degree description */}
                <div className="space-y-3">
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Pursuing <span className="font-semibold text-foreground">Bachelor of Technology in Computer Science and Engineering</span>{' '}
                    with a specialization in <span className="font-semibold text-primary">AI & Robotics</span>, combining core CS fundamentals with hands-on work in intelligent systems.
                  </p>
                </div>

                {/* Coursework grid */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <h4 className="text-lg font-semibold text-foreground">Key Coursework</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {coursework.map((course, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-card border border-border/60 hover:border-primary/50 hover:bg-card/80 transition-all duration-200"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-sm font-medium text-foreground">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Education