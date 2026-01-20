"use client"

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { MapPin, ArrowDown, Sparkles } from 'lucide-react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-background/95">
      {/* Animated Background Gradient */}
      <div
        className="absolute inset-0 opacity-30 blur-3xl transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.1), transparent 50%)`
        }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className={`text-center space-y-12 max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Profile Image with Glow Effect */}
          <div className="relative mx-auto w-48 h-48 md:w-56 md:h-56 group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-30 blur-xl group-hover:opacity-40 transition-opacity duration-200" />
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 p-1 overflow-hidden shadow-2xl">
              <img
                src="/my-photo.jpg"
                alt="Mohammed Faheem P"
                className="object-cover w-full h-full rounded-full"
              />
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="flex items-center gap-1 px-4 py-1.5 bg-card/80 backdrop-blur-md border border-border/50 rounded-full shadow-lg">
                <span className="text-xs text-muted-foreground font-medium">Available for opportunities</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-foreground leading-none">
                <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                  MOHAMMED
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  FAHEEM P
                </span>
              </h1>
            </div>

            <div className="space-y-4">
              <p className="text-2xl md:text-3xl lg:text-4xl text-foreground/90 font-light tracking-wide">
                Spring Boot Backend Developer
              </p>
              <div className="flex items-center justify-center gap-2 text-muted-foreground text-lg">
                <span>REST APIs, JWT auth, and robust server-side systems</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Chennai, India</span>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="max-w-3xl mx-auto pt-4">
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light">
            Creating efficient and secure backends using <span className="font-semibold text-primary">Spring Boot</span>.This involve building REST APIs, security using jwt tokens, as well as solid database implementation. While I can design stunning UIs using Flutter, my recent interest is in building backends.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              size="lg"
              onClick={() => scrollToSection('#projects')}
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium px-10 py-6 text-lg rounded-full shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Explore My Work</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('#contact')}
              className="px-10 py-6 text-lg rounded-full border-2 border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 pt-12">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="group relative w-12 h-12 rounded-full overflow-hidden border border-border/50 hover:border-primary/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 hover:scale-110 p-0"
            >
              <a
                href="https://github.com/fahi016"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <img
                  src="/github.png"
                  alt="GitHub"
                  className="w-full h-full object-cover"
                />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="group relative w-12 h-12 rounded-full overflow-hidden border border-border/50 hover:border-primary/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 hover:scale-110 p-0"
            >
              <a
                href="https://www.linkedin.com/in/mohammed-faheem-p-22546b289/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <img
                  src="/linkedin.png"
                  alt="LinkedIn"
                  className="w-full h-full object-cover"
                />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="group relative w-12 h-12 rounded-full overflow-hidden border border-border/50 hover:border-primary/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 hover:scale-110 p-0"
            >
              <a
                href="mailto:faheempktl@gmail.com"
                aria-label="Email"
              >
                <img
                  src="/mail.png"
                  alt="Email"
                  className="w-full h-full object-cover"
                />
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-16 animate-bounce">
            <button
              onClick={() => scrollToSection('#about')}
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
              aria-label="Scroll to about"
            >
              <span className="text-sm font-medium">Scroll to explore</span>
              <ArrowDown className="h-6 w-6 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero