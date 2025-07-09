"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Dart", level: 90, color: "#10B981" },
        { name: "Java", level: 85, color: "#3B82F6" },
        { name: "Python", level: 80, color: "#3B82F6" },
        { name: "C++", level: 75, color: "#F59E0B" },
        { name: "C", level: 70, color: "#F59E0B" },
      ]
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "Flutter", level: 95, color: "#10B981" },
        { name: "React", level: 80, color: "#3B82F6" },
      ]
    },
    {
      category: "Backend & Database",
      skills: [
        { name: "Firebase", level: 90, color: "#10B981" },
        { name: "Supabase", level: 85, color: "#3B82F6" },
        { name: "Hive", level: 80, color: "#3B82F6" },
        { name: "FastAPI", level: 75, color: "#F59E0B" },
      ]
    },
    {
      category: "State Management",
      skills: [
        { name: "Bloc", level: 90, color: "#10B981" },
        { name: "Provider", level: 85, color: "#3B82F6" },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Skills & Expertise</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-8 text-white">{category.category}</h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-white text-lg">{skill.name}</span>
                        <span className="text-gray-400 font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3">
                        <div 
                          className="h-3 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            backgroundColor: skill.color
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills