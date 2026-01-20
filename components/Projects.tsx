"use client"

import React, { useEffect, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Github, ExternalLink, Play, ArrowUpRight, Sparkles } from 'lucide-react'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const projects = [
    {
      title: "Minilink",
      year: "2025",
      image: "/mimilink.png",
      description: "A URL shortener with a clean dashboard to manage, track, and share links.",
      github: "https://github.com/fahi016/url-shortener-spring-boot",
      visitUrl: "https://whimsical-starburst-4524fe.netlify.app/dashboard",
      tech: "Spring Boot"
    },
    {
      title: "Perplexity Clone",
      year: "2025",
      image: "/perplexity.jpg",
      description: "A Perplexity-inspired UI built in Flutter with a chat-like search experience.",
      github: "https://github.com/fahi016/perplexity_clone",
      demoVideo: "/perplexity final recording.mp4",
      tech: "Flutter"
    },
    {
      title: "Netflix Clone",
      year: "2025",
      bgColor: "bg-red-500",
      image: "/netflix.jpg",
      description: "A Netflix-style browsing experience with a polished Flutter UI and interactions.",
      github: "https://github.com/fahi016/netflix_clone",
      demoVideo: "/netflix_clone.mp4",
      tech: "Flutter"
    },
    {
      title: "Travel Planner",
      year: "2025",
      bgColor: "bg-green-500",
      image: "/travel.jpg",
      description: "A travel planning app concept with trip cards, timelines, and smooth navigation.",
      github: "https://github.com/fahi016/travel-planner",
      demoVideo: "/travel_planner.mp4",
      tech: "Flutter"
    },
    {
      title: "Tea App",
      year: "2024",
      bgColor: "bg-amber-500",
      image: "/tea.png",
      description: "A product-style UI for browsing teas with modern cards and clean typography.",
      github: "https://github.com/fahi016/tea-app",
      tech: "Flutter"
    },
    {
      title: "To-Do App",
      year: "2024",
      bgColor: "bg-blue-500",
      image: "/todo.png",
      description: "A simple, fast to-do app with a minimal Flutter UI and smooth UX.",
      github: "https://github.com/fahi016/to_do_app",
      demoVideo: "/to_do_app.mp4",
      tech: "Flutter"
    },
    {
      title: "Weather App",
      year: "2024",
      bgColor: "bg-cyan-500",
      image: "/weather.jpg",
      description: "A weather UI with clear states, clean layout, and modern styling in Flutter.",
      github: "https://github.com/fahi016/weather_app",
      demoVideo: "/weather_app.mp4",
      tech: "Flutter"
    }
  ]

  return (
    <section id="projects" className="relative py-32 bg-background overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">Portfolio</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground tracking-tight">
            Featured
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            A curated selection of my best work
          </p>
        </div>

        {/* Projects Grid - Logo Style */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`flex flex-col ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Project Card */}
                <div className="flip-card group relative aspect-square mb-3 z-0 hover:z-20 focus-within:z-20">
                  <div className="flip-card-inner relative w-full h-full transition-transform duration-500 ease-out will-change-transform group-hover:[transform:translateY(-10px)_scale(1.12)_rotateY(180deg)] group-focus-within:[transform:translateY(-10px)_scale(1.12)_rotateY(180deg)]">
                    {/* Front */}
                    <div className="flip-card-face absolute inset-0 rounded-xl border border-border/50 bg-card/30 overflow-hidden transition-colors duration-300 group-hover:border-primary/50 group-focus-within:border-primary/50">
                      {/* Background Image or Color */}
                      {project.image ? (
                        <div className="absolute inset-0 w-full h-full">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-75 transition-opacity duration-300"
                          />
                        </div>
                      ) : (
                        <div className={`absolute inset-0 w-full h-full ${project.bgColor} opacity-30`} />
                      )}

                      {/* Subtle overlay (no text on the card front) */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/10 to-transparent" />
                    </div>

                    {/* Back */}
                    <div className="flip-card-face absolute inset-0 rounded-xl border border-primary/40 bg-background/60 backdrop-blur-md overflow-hidden [transform:rotateY(180deg)]">
                      <div className="h-full w-full p-4 flex flex-col">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <div className="text-sm font-bold text-foreground truncate">{project.title}</div>
                            <div className="text-xs text-muted-foreground">{project.tech} • {project.year}</div>
                          </div>
                        </div>

                        <p className="text-xs text-muted-foreground mt-3 leading-relaxed line-clamp-5">
                          {project.description}
                        </p>

                        <div className="mt-auto pt-4 flex gap-2 w-full">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-card/90 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:bg-card transition-colors text-xs font-medium text-foreground"
                          >
                            <Github className="h-3.5 w-3.5" />
                            Code
                          </a>
                          {project.visitUrl ? (
                            <a
                              href={project.visitUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-primary/20 backdrop-blur-sm border border-primary/50 hover:bg-primary/30 transition-colors text-xs font-medium text-primary"
                            >
                              <ExternalLink className="h-3.5 w-3.5" />
                              Visit
                            </a>
                          ) : project.demoVideo ? (
                            <a
                              href={project.demoVideo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-primary/20 backdrop-blur-sm border border-primary/50 hover:bg-primary/30 transition-colors text-xs font-medium text-primary"
                            >
                              <Play className="h-3.5 w-3.5" />
                              Demo
                            </a>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details Below Card */}
                <div className="flex flex-col items-center">
                  {/* Project Name */}
                  <span className="text-sm font-semibold text-foreground text-center mb-2">
                    {project.title}
                  </span>

                  {/* Year Badge */}
                  <Badge
                    variant="outline"
                    className="text-xs font-medium border-border/50 mb-2"
                  >
                    {project.year}
                  </Badge>

                  {/* Tech Stack */}
                  <span className="text-xs text-muted-foreground text-center">
                    {project.tech}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <a
            href="https://github.com/fahi016"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-300 text-sm font-medium text-foreground hover:text-primary"
          >
            <Github className="h-4 w-4" />
            View All Projects on GitHub
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects