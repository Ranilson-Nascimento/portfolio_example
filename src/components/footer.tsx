import Link from "next/link"
import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { siteConfig } from "@/lib/config"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          {/* Links rápidos */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projetos
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Desenvolvimento Web</li>
              <li className="text-muted-foreground">Aplicações Mobile</li>
              <li className="text-muted-foreground">UI/UX Design</li>
              <li className="text-muted-foreground">Consultoria Tech</li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Contato</h4>
            <div className="flex space-x-4">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href={siteConfig.links.email}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
            <p className="text-xs text-muted-foreground">
              {siteConfig.contact.email}
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} {siteConfig.creator}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground flex items-center mt-2 sm:mt-0">
            Feito com <Heart className="h-3 w-3 mx-1 text-red-500" /> usando Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}
