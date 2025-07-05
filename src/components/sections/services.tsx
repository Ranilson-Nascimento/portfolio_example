import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Globe, 
  Smartphone, 
  Database, 
  Palette, 
  Code, 
  Settings,
  ArrowRight,
  Check
} from "lucide-react"

const services = [
  {
    id: "web-development",
    title: "Desenvolvimento Web",
    description: "Criação de websites e aplicações web modernas, responsivas e otimizadas para performance.",
    icon: Globe,
    features: [
      "Sites responsivos e modernos",
      "Aplicações web interativas",
      "E-commerce completo",
      "Landing pages otimizadas",
      "PWA (Progressive Web Apps)",
      "Otimização para SEO"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    price: {
      from: 2500,
      currency: "R$"
    }
  },
  {
    id: "mobile-development",
    title: "Desenvolvimento Mobile",
    description: "Aplicativos móveis nativos e híbridos para iOS e Android com experiência de usuário excepcional.",
    icon: Smartphone,
    features: [
      "Apps nativos iOS/Android",
      "Apps híbridos (React Native)",
      "Design responsivo",
      "Integração com APIs",
      "Push notifications",
      "Publicação nas stores"
    ],
    technologies: ["React Native", "Flutter", "Expo", "Firebase"],
    price: {
      from: 3500,
      currency: "R$"
    }
  },
  {
    id: "backend-api",
    title: "Backend & APIs",
    description: "Desenvolvimento de APIs robustas, bancos de dados e arquitetura de backend escalável.",
    icon: Database,
    features: [
      "APIs REST e GraphQL",
      "Bancos de dados otimizados",
      "Autenticação e segurança",
      "Integração com serviços",
      "Deploy em cloud",
      "Documentação completa"
    ],
    technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    price: {
      from: 2000,
      currency: "R$"
    }
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "Design de interfaces intuitivas e experiências de usuário que convertem visitantes em clientes.",
    icon: Palette,
    features: [
      "Pesquisa de usuário",
      "Wireframes e protótipos",
      "Design de interface",
      "Testes de usabilidade",
      "Design system",
      "Guia de marca digital"
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "Principle"],
    price: {
      from: 1500,
      currency: "R$"
    }
  },
  {
    id: "consultoria",
    title: "Consultoria Tech",
    description: "Consultoria especializada em tecnologia para otimizar processos e escolher as melhores soluções.",
    icon: Settings,
    features: [
      "Análise de requisitos",
      "Arquitetura de software",
      "Escolha de tecnologias",
      "Code review",
      "Otimização de performance",
      "Mentoria técnica"
    ],
    technologies: ["Análise", "Arquitetura", "Best Practices", "Performance"],
    price: {
      from: 150,
      currency: "R$/hora"
    }
  },
  {
    id: "manutencao",
    title: "Manutenção & Suporte",
    description: "Suporte técnico contínuo, atualizações e manutenção para seus projetos existentes.",
    icon: Code,
    features: [
      "Correção de bugs",
      "Atualizações de segurança",
      "Novas funcionalidades",
      "Otimização de código",
      "Backup e monitoramento",
      "Suporte técnico 24/7"
    ],
    technologies: ["Monitoring", "CI/CD", "DevOps", "Support"],
    price: {
      from: 800,
      currency: "R$/mês"
    }
  }
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Serviços
            </h2>
            <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ofereço soluções completas para transformar suas ideias em realidade digital.
              Do planejamento à implementação, com qualidade e dedicação.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <Card key={service.id} className="group relative overflow-hidden transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      {service.price && (
                        <Badge variant="secondary" className="mt-1">
                          A partir de {service.price.currency}{service.price.from}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">O que está incluído:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <Check className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-sm text-muted-foreground">
                          E mais {service.features.length - 4} funcionalidades...
                        </li>
                      )}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Tecnologias:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full group" asChild>
                    <a href="#contact">
                      Solicitar Orçamento
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-4 mt-16">
          <h3 className="text-2xl font-bold">Precisa de algo personalizado?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada projeto é único. Vamos conversar sobre suas necessidades específicas 
            e criar uma solução sob medida para o seu negócio.
          </p>
          <Button size="lg" asChild>
            <a href="#contact">
              Vamos Conversar
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
