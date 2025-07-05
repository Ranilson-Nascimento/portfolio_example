"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/lib/config"

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          {/* Avatar/Image placeholder */}
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
              {siteConfig.creator.split(' ').map(name => name[0]).join('')}
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-purple-600 animate-pulse opacity-75"></div>
          </div>

          {/* Text content */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Olá, eu sou{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                {siteConfig.creator}
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Desenvolvedor Full Stack apaixonado por criar experiências digitais incríveis.
              Especializado em React, Next.js, Node.js e tecnologias modernas de desenvolvimento web.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="#contact">
                Entre em Contato
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#projects">
                Ver Projetos
              </Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Button variant="ghost" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown className="h-6 w-6" />
          <span className="sr-only">Rolar para baixo</span>
        </Link>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-muted/20 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]">
          <svg
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="hero-pattern"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#hero-pattern)"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
