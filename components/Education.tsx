"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Calendar, Award, BookOpen } from 'lucide-react'

const Education = () => {
  const coursework = [
    "Artificial Intelligence",
    "Robotics",
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Machine Learning",
    "Software Engineering"
  ]

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and specialization in Computer Science with AI & Robotics
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Main Education Info */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">BTech Computer Science</h3>
                      <p className="text-lg text-muted-foreground">AI & Robotics Specialization</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>Vellore Institute of Technology, Chennai</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>2023 - 2027</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="font-semibold">CGPA: 8.81/10</span>
                    </div>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Academic Excellence</h4>
                    <p className="text-sm text-muted-foreground">
                      Maintaining a strong academic record while actively participating in projects and technical activities. Focus on practical application of theoretical concepts.
                    </p>
                  </div>
                </div>

                {/* Coursework */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Relevant Coursework</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {coursework.map((course, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm font-medium">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold">Specialization Focus</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Artificial Intelligence</Badge>
                      <Badge variant="secondary">Robotics</Badge>
                      <Badge variant="secondary">Machine Learning</Badge>
                      <Badge variant="secondary">Computer Vision</Badge>
                      <Badge variant="secondary">Deep Learning</Badge>
                    </div>
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