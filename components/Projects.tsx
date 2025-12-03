"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Github, ExternalLink, Smartphone, Code, Database, Brain, Globe, Cloud } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "Perplexity Clone",
      year: "2025",
      description: "AI-powered search and chat application clone with WebSocket integration, real-time messaging, and advanced AI integration for intelligent responses.",
      technologies: ["Flutter", "WebSocket", "AI Integration", "Real-time"],
      github: "https://github.com/fahi016/perplexity_clone",
      demo: "/perplexity%20final%20recording.mp4",
      icon: <Brain className="h-6 w-6" />,
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      title: "Netflix Clone",
      year: "2025",
      description: "A complete Netflix clone built with Flutter featuring a responsive UI, movie browsing, and smooth animations. Implements modern design patterns with clean architecture.",
      technologies: ["Flutter", "Dart", "UI/UX", "Responsive Design"],
      github: "https://github.com/fahi016/netflix_clone",
      demo: "/netflix_clone.mp4",
      icon: <Smartphone className="h-6 w-6" />,
      gradient: "from-red-500 to-pink-500"
    },
    {
      title: "Travel Planner",
      year: "2025",
      description: "An intuitive travel planning application with beautiful UI/UX design, trip organization features, and local data persistence using Hive database.",
      technologies: ["Flutter", "UI/UX", "Hive", "Trip Planning"],
      github: "https://github.com/fahi016/travel-planner",
      demo: "/travel_planner.mp4",
      icon: <Globe className="h-6 w-6" />,
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Tea App",
      year: "2024",
      description: "A simple Flutter app for managing and sharing tea preferences, with Firebase authentication and Firestore integration.",
      technologies: ["Flutter", "Firebase", "Firestore", "Authentication"],
      github: "https://github.com/fahi016/tea-app",
      icon: <Database className="h-6 w-6" />, // You may want to change the icon if a more suitable one is available
      gradient: "from-amber-500 to-orange-500"
    },
    {
      title: "To-Do App",
      year: "2024",
      description: "A simple, beautiful, and responsive To-Do List app built with Flutter. Add, complete, and delete tasks with persistent storage using Hive.",
      technologies: ["Flutter", "Hive", "Responsive Design", "Local Storage"],
      github: "https://github.com/fahi016/to_do_app",
      demo: "/to_do_app.mp4",
      icon: <Code className="h-6 w-6" />, // Keeping the icon as is, but can be changed if needed
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Weather App",
      year: "2024",
      description: "A sleek Flutter app showing real-time, location-based weather with dynamic UI, glassmorphism design, and OpenWeatherMap integration.",
      technologies: ["Flutter", "Animations", "Glassmorphism", "Real-time Data"],
      github: "https://github.com/fahi016/weather_app",
      demo: "/weather_app.mp4",
      icon: <Cloud className="h-6 w-6" />, // You may need to import Cloud from lucide-react
      gradient: "from-cyan-500 to-blue-300"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and technical achievements in mobile app development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} text-white`}>
                    {project.icon}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {project.year}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="pt-2 flex gap-2">
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button variant="default" size="sm" asChild className="flex-1">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        Watch demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/fahi016" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Projects