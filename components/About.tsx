"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Smartphone, Database, Code, Brain } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development",
      description: "Expert in Flutter development with focus on user experience",
      color: "text-blue-500"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend Integration",
      description: "Proficient in Firebase, Supabase, and API development",
      color: "text-green-500"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Clean Code",
      description: "Strong foundation in algorithms and software engineering",
      color: "text-purple-500"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI & Robotics",
      description: "Specializing in artificial intelligence and robotics",
      color: "text-orange-500"
    }
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">About Me</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                I'm a Flutter developer and curious coder currently studying Computer Science with a focus on AI & Robotics at VIT Chennai. I enjoy turning caffeine and late-night ideas into mobile apps that (usually) work as expected.
              </p>
              <p className="text-lg leading-relaxed">
                I've got a solid grip on Flutter, Firebase, and modern state management,but I'm always poking around new tech stacks just to see what breaks (and how to fix it). Whether it's crafting smooth user interfaces or wiring up the backend, I aim to build stuff people actually enjoy using.
              </p>
              <p className="text-lg leading-relaxed">
                Still learning, still building, and always up for solving problems with a bit of code and a lot of trial and error.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="bg-card border-border hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className={`${item.color}`}>
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
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