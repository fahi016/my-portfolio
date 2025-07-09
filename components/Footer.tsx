"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg text-foreground">MOHAMMED FAHEEM P</h3>
            <p className="text-sm text-muted-foreground">App Developer • Chennai, India</p>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-foreground">
              <a href="https://github.com/fahi016" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-foreground">
              <a href="https://www.linkedin.com/in/mohammed-faheem-p-22546b289/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-foreground">
              <a href="mailto:faheempktl@gmail.com">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center space-x-1">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>using Next.js, React, and Tailwind CSS</span>
          </p>
          <p className="text-xs text-muted-foreground/70 mt-2">
            © 2024 Mohammed Faheem P. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer