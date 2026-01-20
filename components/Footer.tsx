"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-border/50 bg-gradient-to-b from-background to-background/95">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-2xl mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Mohammed Faheem P
            </h3>
            <p className="text-sm text-muted-foreground font-light">
              Spring boot backend Developer • Flutter Enthusiast
            </p>
            <p className="text-xs text-muted-foreground/70 mt-1">
              Chennai, India
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon" 
              asChild 
              className="rounded-full overflow-hidden w-12 h-12 text-muted-foreground hover:text-foreground hover:bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 p-0"
            >
              <a href="https://github.com/fahi016" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <img src="/github.png" alt="GitHub" className="w-full h-full object-cover" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              asChild 
              className="rounded-full overflow-hidden w-12 h-12 text-muted-foreground hover:text-foreground hover:bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 p-0"
            >
              <a href="https://www.linkedin.com/in/mohammed-faheem-p-22546b289/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <img src="/linkedin.png" alt="LinkedIn" className="w-full h-full object-cover" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              asChild 
              className="rounded-full overflow-hidden w-12 h-12 text-muted-foreground hover:text-foreground hover:bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 p-0"
            >
              <a href="mailto:faheempktl@gmail.com" aria-label="Email">
                <img src="/mail.png" alt="Email" className="w-full h-full object-cover" />
              </a>
            </Button>
          </div>

          {/* Scroll to Top */}
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full w-12 h-12 text-muted-foreground hover:text-foreground hover:bg-card border border-border/50 hover:border-primary/50 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-center">       
            <p className="text-base text-muted-foreground/70">
              © {new Date().getFullYear()} Mohammed Faheem P. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer