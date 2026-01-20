"use client"

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useTheme } from 'next-themes'
import { Menu, Sun, Moon, Download, X } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const Header = () => {
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { theme, setTheme } = useTheme()
  const { toast } = useToast()

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border/50 shadow-lg shadow-black/5' 
          : 'bg-background/0 backdrop-blur-none border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => scrollToSection('#home')}
              className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full bg-card/50 backdrop-blur-sm border border-border/50">
            {navigation.map((item) => {
              const isActive = activeSection === item.href.replace('#', '')
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    isActive
                      ? 'text-foreground bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-card'
                  }`}
                >
                  {item.name}
                </button>
              )
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Download CV - Desktop */}
            <a
              href="/cv.pdf"
              download
              className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground hover:text-primary rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300"
              onClick={() => toast({ title: 'CV downloaded successfully!', description: 'Thank you for your interest!' })}
            >
              <Download className="h-4 w-4" />
              <span>CV</span>
            </a>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-full w-10 h-10 text-muted-foreground hover:text-foreground hover:bg-card border border-border/50"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="md:hidden rounded-full w-10 h-10 text-muted-foreground hover:text-foreground hover:bg-card border border-border/50"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[300px] sm:w-[400px] bg-card/95 backdrop-blur-md border-border"
              >
                <div className="flex flex-col h-full">
                  <nav className="flex flex-col space-y-2 mt-8">
                    {navigation.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => {
                          scrollToSection(item.href)
                          // Close sheet after navigation
                          setTimeout(() => {
                            document.querySelector('[data-state="open"]')?.querySelector('button')?.click()
                          }, 300)
                        }}
                        className={`text-left px-4 py-3 text-lg font-medium rounded-lg transition-colors ${
                          activeSection === item.href.replace('#', '')
                            ? 'text-foreground bg-primary/10'
                            : 'text-muted-foreground hover:text-foreground hover:bg-card'
                        }`}
                      >
                        {item.name}
                      </button>
                    ))}
                  </nav>
                  
                  <div className="mt-auto pt-8">
                    <a
                      href="/cv.pdf"
                      download
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 text-base font-medium text-foreground rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                      onClick={() => toast({ title: 'CV downloaded successfully!', description: 'Thank you for your interest!' })}
                    >
                      <Download className="h-4 w-4" />
                      Download CV
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header