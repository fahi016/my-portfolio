"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="relative mx-auto w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-2xl">
            <span className="text-4xl font-bold text-white">MF</span>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              MOHAMMED FAHEEM P
            </h1>
            <p className="text-2xl md:text-3xl text-gray-400 font-medium">
              App Developer
            </p>
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <MapPin className="h-5 w-5" />
              <span className="text-lg">Chennai, India</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Passionate Flutter developer and CS student specializing in AI & Robotics.
              Creating seamless mobile experiences with clean code and innovative
              solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('#projects')}
              className="bg-white text-black hover:bg-gray-200 font-medium px-8 py-3"
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('#contact')}
              className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3"
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-4">
            <Button variant="ghost" size="icon" asChild className="text-gray-400 hover:text-white">
              <a href="https://github.com/fahi016" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-gray-400 hover:text-white">
              <a href="https://linkedin.com/in/mohammed-faheem-p" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-gray-400 hover:text-white">
              <a href="mailto:faheempktl@gmail.com">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero