"use client"

import React, { useEffect, useState } from 'react'
import { Sparkles } from 'lucide-react'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skillGroups = [
    {
      level: "Expert",
      skills: [
        { name: "Spring Boot", image: "/springboot.png" },
        { name: "Java", image: "/java.png" },
        { name: "REST API", image: "/rest.png" },
        { name: "MySql", image: "/mysql.png" },
        { name: "Dart", image: "/dart.png" },
        { name: "Flutter", image: "/flutter.png" },
      ],
    },
    {
      level: "Intermediate",
      skills: [
        { name: "C", image: "/c.png" },
        { name: "C++", image: "/c++.png" },
        { name: "Firebase", image: "/firebase.png" },
        { name: "Supabase", image: "/supabase.png" },
        { name: "Bloc", image: "/bloc.png" },
        { name: "Provider", image: "/provider.png" },
        

      ],
    },
    {
      level: "Beginner",
      skills: [
        { name: "React", image: "/react.png" },
      ],
    },
  ] as const

  const gridItems = skillGroups.flatMap((group) => [
    { type: "header" as const, level: group.level },
    ...group.skills.map((s) => ({ type: "skill" as const, level: group.level, ...s })),
  ])

  return (
    <section id="skills" className="relative py-32 bg-background overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">Skills</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground tracking-tight">
            Technical
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid - Logo Style */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
            {gridItems.map((item, index) => {
              if (item.type === "header") {
                return (
                  <div key={`header-${item.level}`} className="col-span-3 sm:col-span-4 md:col-span-5 lg:col-span-6 pt-4">
                    <div className="relative">
                      <div className="flex items-center justify-center">
                        <span className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                          {item.level}
                        </span>
                      </div>
                      <div className="relative mt-3 h-4">
                        <div className="absolute left-0 right-0 top-0 border-t border-border/60" />
                        <div className="absolute left-0 top-0 h-4 border-l border-border/60" />
                        <div className="absolute right-0 top-0 h-4 border-r border-border/60" />
                      </div>
                    </div>
                  </div>
                )
              }

              return (
                <div
                  key={`${item.level}-${item.name}`}
                  className={`group flex flex-col items-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    } transition-all duration-300`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {/* Full-image skill card */}
                  <div className="w-full aspect-square rounded-xl bg-card border border-border/50 overflow-hidden shadow-sm hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 mb-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain p-3"
                    />
                  </div>
                  {/* Technology Name */}
                  <span className="text-xs sm:text-sm font-medium text-foreground text-center group-hover:text-primary transition-colors">
                    {item.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills