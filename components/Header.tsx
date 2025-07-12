"use client"

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useTheme } from 'next-themes'
import { Menu, Sun, Moon, Github, Linkedin, Mail } from 'lucide-react'

const Header = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!mounted) return null

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* Desktop Name - Hidden on mobile */}
            <h1 className="hidden md:block text-xl font-bold text-foreground">MOHAMMED FAHEEM P</h1>

            {/* Mobile Download CV Button - Hidden on desktop */}
            <Button
              variant="outline"
              size="sm"
              asChild
              className="md:hidden"
            >
              <a href="/cv.pdf" download>
                Download CV
              </a>
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* Desktop Download CV Button - Hidden on mobile */}
            <Button
              variant="outline"
              size="sm"
              asChild
              className="hidden md:block mr-2"
            >
              <a href="/cv.pdf" download>
                Download CV
              </a>
            </Button>
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-muted-foreground hover:text-foreground"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-muted-foreground hover:text-foreground">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-card border-border">
                <nav className="flex flex-col space-y-4 mt-6">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header