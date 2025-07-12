"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Calendar, GraduationCap } from 'lucide-react'

const Education = () => {
  const coursework = [
    "Artificial Intelligence",
    "Robotics",
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks"
  ]

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Education</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-blue-500 rounded-full">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Vellore Institute of Technology, Chennai
                    </h3>

                    <p className="text-xl text-muted-foreground mb-4">BTech CSE (AI & Robotics)</p>

                    <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>2023 - 2027</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>Chennai, India</span>
                      </div>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                        CGPA: 8.81/10
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-4">Relevant Coursework</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {coursework.map((course, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-muted-foreground text-sm">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-muted/30 rounded-lg">
                    <h4 className="text-lg font-semibold text-foreground mb-3">Specialization Focus</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      I’m specializing in AI & Robotics, blending smart algorithms with real-world robotics to gear up for the future of tech and automation.
                    </p>
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