"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Sparkles, ArrowRight } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      images: ["/springboot.png", "/java.png", "/mysql.png"],
      title: "Backend Development",
      description: "Spring & Spring Boot, RESTful APIs, JWT auth, and clean layered architectures",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10"
    },
    {
      images: ["/dart.png", "/flutter.png", "/supabase.png"],
      title: "App Development",
      description: "Flutter apps with modern UI, smooth animations, and solid integration with backends",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10"
    },
    {
      images: ["/java.png", "/c++.png", "/github.png"],
      title: "Clean Code",
      description: "Strong foundation in algorithms, design patterns, and software engineering principles",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10"
    },
    {
      images: ["/python.png","/c++.png"],
      title: "AI & Robotics",
      description: "Specializing in artificial intelligence, machine learning, and robotics applications",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10"
    }
  ]

  return (
    <section id="about" className="relative py-32 bg-background overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">About Me</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground tracking-tight">
            Crafting Digital
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto mb-20">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 font-light">
                I'm a <span className="font-semibold text-primary">Spring Boot backend developer</span> and am also very enthusiastic about coding. At present, I am pursuing Computer Science with specialization in AI & Robotics at VIT Chennai.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              I develop and implement scalable backend solutions in Spring, Spring Boot, and RESTful APIs, emphasizing clean architecture, JWT authentication, and properly designed data access layers.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              Flutter and front-end tooling are still delights of mine in terms of using technology to make interfaces, but what I’m really passionate about is building secure and maintainable systems on the server side that enable those experiences.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a
                href="/cv.pdf"
                download
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25"
              >
                Download Resume
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <CardContent className="p-8 relative z-10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      {item.images.map((src) => (
                        <img
                          key={`${item.title}-${src}`}
                          src={src}
                          alt={item.title}
                          className="w-14 h-14 object-contain"
                        />
                      ))}
                    </div>
                    <h3 className="font-bold text-foreground text-xl">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto pt-20 border-t border-border/50">
          {[
            { label: "Projects", value: "10+", subtext: "Completed" },
            { label: "Technologies", value: "15+", subtext: "Mastered" },
            { label: "Experience", value: "2+", subtext: "Years" },
            { label: "CGPA", value: "8.82", subtext: "Out of 10" },
          ].map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-foreground">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.subtext}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About