"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Dart", level: 90, color: "bg-blue-500" },
        { name: "Java", level: 85, color: "bg-orange-500" },
        { name: "Python", level: 80, color: "bg-yellow-500" },
        { name: "C++", level: 75, color: "bg-purple-500" },
        { name: "C", level: 70, color: "bg-gray-500" },
      ]
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "Flutter", level: 95, color: "bg-blue-400" },
        { name: "React", level: 75, color: "bg-cyan-500" },
        { name: "UI/UX Design", level: 80, color: "bg-pink-500" },
      ]
    },
    {
      category: "Backend & Database",
      skills: [
        { name: "Firebase", level: 90, color: "bg-orange-600" },
        { name: "Supabase", level: 85, color: "bg-green-500" },
        { name: "Hive", level: 80, color: "bg-amber-500" },
        { name: "FastAPI", level: 75, color: "bg-teal-500" },
      ]
    },
    {
      category: "State Management",
      skills: [
        { name: "Bloc", level: 90, color: "bg-indigo-500" },
        { name: "Provider", level: 85, color: "bg-violet-500" },
        { name: "Riverpod", level: 70, color: "bg-rose-500" },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-center">{category.category}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {skill.level}%
                        </Badge>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Skills Overview */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Flutter", "Dart", "Firebase", "Supabase", "Bloc", "Provider", "Hive",
              "FastAPI", "Python", "Java", "C++", "React", "Git", "VS Code",
              "Android Studio", "UI/UX", "REST APIs", "State Management"
            ].map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-1 px-3 hover:bg-primary hover:text-primary-foreground transition-colors">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills