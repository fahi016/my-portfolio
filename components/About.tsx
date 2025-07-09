"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Code, Smartphone, Database, Brain } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Development",
      description: "Expert in Flutter development with focus on cross-platform solutions"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Backend Integration",
      description: "Proficient in Firebase, Supabase, and modern database solutions"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Clean Architecture",
      description: "Strong advocate for maintainable code and design patterns"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI & Robotics",
      description: "Specializing in cutting-edge AI and robotics technologies"
    }
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, skills, and passion for technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate Flutter developer and software engineer currently pursuing BTech in Computer Science with specialization in AI & Robotics at Vellore Institute of Technology, Chennai.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a strong foundation in mobile app development and backend technologies, I create seamless user experiences through clean code and innovative solutions. My expertise spans across Flutter development, Firebase integration, and modern state management patterns.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm constantly learning and exploring new technologies while maintaining a focus on delivering high-quality, user-centric applications.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Flutter Expert</Badge>
              <Badge variant="secondary">AI Enthusiast</Badge>
              <Badge variant="secondary">Clean Code</Badge>
              <Badge variant="secondary">Problem Solver</Badge>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About