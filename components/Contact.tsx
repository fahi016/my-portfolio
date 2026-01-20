"use client"

import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { MapPin, Send, Sparkles, CheckCircle2 } from 'lucide-react'

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const form = e.currentTarget
    const formData = new FormData(form)
    // Netlify expects data as URL-encoded
    const data = new URLSearchParams()
    formData.forEach((value, key) => {
      data.append(key, value as string)
    })
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: data.toString(),
    })
    setIsSubmitting(false)
    setSubmitted(true)
    toast({
      title: "Message sent!",
      description: "I'll get back to you soon.",
    })
  }

  return (
    <section id="contact" className="relative py-32 bg-background overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">Contact</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground tracking-tight">
            Let's Work
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <Card className="relative overflow-hidden bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="p-8 md:p-12 relative z-10">
              <h3 className="text-3xl font-bold text-foreground mb-10">Get In Touch</h3>

              <div className="grid grid-cols-2 gap-4 mb-10">
                {/* Email card */}
                <a
                  href="mailto:faheempktl@gmail.com"
                  className="group flex flex-col items-center justify-center p-5 rounded-2xl bg-card border border-border/60 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 hover:scale-[1.03]"
                >
                  <div className="w-12 h-12 rounded-xl overflow-hidden mb-3 bg-background/80">
                    <img src="/mail.png" alt="Email" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-sm font-semibold text-foreground mb-0.5">Email</p>
                  <p className="text-xs text-muted-foreground text-center group-hover:text-primary transition-colors">
                    faheempktl@gmail.com
                  </p>
                </a>

                {/* Location card */}
                <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-card border border-border/60">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 bg-gradient-to-br from-green-500 to-emerald-500">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-foreground mb-0.5">Location</p>
                  <p className="text-xs text-muted-foreground text-center">Chennai, India</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-6 text-lg">Connect With Me</h4>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="rounded-full overflow-hidden border-border/50 hover:border-primary/50 hover:bg-primary/5 w-12 h-12 p-0"
                  >
                    <a href="https://github.com/fahi016" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <img src="/github.png" alt="GitHub" className="h-full w-full object-cover" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="rounded-full overflow-hidden border-border/50 hover:border-primary/50 hover:bg-primary/5 w-12 h-12 p-0"
                  >
                    <a href="https://www.linkedin.com/in/mohammed-faheem-p-22546b289/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <img src="/linkedin.png" alt="LinkedIn" className="h-full w-full object-cover" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="rounded-full overflow-hidden border-border/50 hover:border-primary/50 hover:bg-primary/5 w-12 h-12 p-0"
                  >
                    <a href="mailto:faheempktl@gmail.com" aria-label="Email">
                      <img src="/mail.png" alt="Email" className="h-full w-full object-cover" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="p-8 md:p-12 relative z-10">
              <h3 className="text-3xl font-bold text-foreground mb-8">Send Message</h3>
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="inline-flex p-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mb-4">
                    <CheckCircle2 className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-foreground">Thank You!</h4>
                  <p className="text-muted-foreground">Your message has been sent successfully. I'll get back to you soon.</p>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="bot-field" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground font-medium">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        className="bg-background/50 border-border/50 focus:border-primary/50"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="bg-background/50 border-border/50 focus:border-primary/50"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground font-medium">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary/50"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="resize-none bg-background/50 border-border/50 focus:border-primary/50"
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-full py-6 text-lg font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact