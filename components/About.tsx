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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">About Me</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                I'm a passionate Flutter developer and software engineer currently
                pursuing BTech in Computer Science with specialization in AI &
                Robotics at Vellore Institute of Technology, Chennai.
              </p>
              <p className="text-lg leading-relaxed">
                With a strong foundation in mobile app development and backend
                technologies, I create seamless user experiences through clean
                code and innovative solutions. My expertise spans across Flutter
                development, Firebase integration, and modern state management
                patterns.
              </p>
              <p className="text-lg leading-relaxed">
                I'm constantly learning and exploring new technologies while
                maintaining a focus on delivering high-quality, user-centric
                applications.
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
                    <h3 className="font-semibold text-white text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
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