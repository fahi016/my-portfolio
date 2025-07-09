"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8">
          {/* Profile Image Placeholder */}
          <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-2xl">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-background/20 flex items-center justify-center">
              <span className="text-2xl md:text-3xl font-bold text-primary-foreground">MF</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              MOHAMMED FAHEEM P
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              App Developer
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Chennai, India
            </p>
          </div>

          {/* Introduction */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Passionate Flutter developer and software engineer pursuing BTech in Computer Science with specialization in AI & Robotics at VIT Chennai. Creating seamless user experiences through clean code and innovative solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('#projects')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('#contact')}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            <Button variant="ghost" size="icon" asChild className="hover:bg-primary hover:text-primary-foreground">
              <a href="https://github.com/fahi016" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:bg-primary hover:text-primary-foreground">
              <a href="https://linkedin.com/in/mohammed-faheem-p" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:bg-primary hover:text-primary-foreground">
              <a href="mailto:faheempktl@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => scrollToSection('#about')}
              className="text-muted-foreground hover:text-primary"
            >
              <ArrowDown className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero