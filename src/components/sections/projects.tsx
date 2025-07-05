import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "Plataforma completa de e-commerce com painel administrativo, carrinho de compras, sistema de pagamento e gestão de estoque.",
    longDescription: "Sistema completo de e-commerce desenvolvido com Next.js e Node.js, incluindo autenticação, painel admin, processamento de pagamentos com Stripe, e gestão completa de produtos e pedidos.",
    image: "/projects/ecommerce.jpg",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    demoUrl: "https://ecommerce-demo.vercel.app",
    githubUrl: "https://github.com/usuario/ecommerce",
    category: "web-development",
    featured: true,
    status: "completed" as const,
    startDate: "2023-01-15",
    endDate: "2023-04-20"
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Aplicativo de gerenciamento de tarefas com funcionalidades de colaboração em tempo real e sincronização em nuvem.",
    image: "/projects/taskapp.jpg",
    technologies: ["React", "Firebase", "Material-UI", "PWA"],
    demoUrl: "https://taskapp-demo.vercel.app",
    githubUrl: "https://github.com/usuario/taskapp",
    category: "web-development",
    featured: true,
    status: "completed" as const,
    startDate: "2023-05-01",
    endDate: "2023-07-15"
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "Dashboard interativo para previsão do tempo com mapas, gráficos e alertas personalizados.",
    image: "/projects/weather.jpg",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Sass"],
    demoUrl: "https://weather-dashboard-demo.vercel.app",
    githubUrl: "https://github.com/usuario/weather-dashboard",
    category: "web-development",
    featured: false,
    status: "completed" as const,
    startDate: "2023-08-01",
    endDate: "2023-09-30"
  },
  {
    id: "4",
    title: "Mobile Fitness App",
    description: "Aplicativo mobile para acompanhamento de exercícios e dieta com integração a dispositivos wearables.",
    image: "/projects/fitness.jpg",
    technologies: ["React Native", "Expo", "Redux", "AsyncStorage"],
    githubUrl: "https://github.com/usuario/fitness-app",
    category: "mobile-development",
    featured: false,
    status: "in-progress" as const,
    startDate: "2023-10-01"
  },
  {
    id: "5",
    title: "API REST Blog",
    description: "API completa para sistema de blog com autenticação JWT, upload de imagens e sistema de comentários.",
    image: "/projects/api.jpg",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Multer"],
    githubUrl: "https://github.com/usuario/blog-api",
    category: "api-backend",
    featured: false,
    status: "completed" as const,
    startDate: "2023-03-15",
    endDate: "2023-05-01"
  },
  {
    id: "6",
    title: "Design System",
    description: "Sistema de design completo com componentes reutilizáveis e documentação interativa.",
    image: "/projects/design-system.jpg",
    technologies: ["React", "Storybook", "Styled Components", "TypeScript"],
    demoUrl: "https://design-system-demo.vercel.app",
    githubUrl: "https://github.com/usuario/design-system",
    category: "ui-ux-design",
    featured: true,
    status: "completed" as const,
    startDate: "2023-06-01",
    endDate: "2023-08-15"
  }
]

export default function Projects() {
  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Projetos em Destaque
            </h2>
            <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Alguns dos projetos que desenvolvi utilizando as mais modernas tecnologias do mercado.
            </p>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden">
              <div className="relative overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-4xl font-bold text-muted-foreground/30">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  {project.demoUrl && (
                    <Button size="sm" asChild>
                      <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Link>
                    </Button>
                  )}
                  <Button size="sm" variant="outline" asChild>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </Link>
                  </Button>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <Badge variant={project.status === 'completed' ? 'default' : 'secondary'}>
                    {project.status === 'completed' ? 'Concluído' : 'Em Progresso'}
                  </Badge>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(project.startDate).toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' })}
                {project.endDate && (
                  <>
                    {' - '}
                    {new Date(project.endDate).toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' })}
                  </>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center">Outros Projetos</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <Card key={project.id} className="group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <div className="flex space-x-2">
                      {project.demoUrl && (
                        <Button size="sm" variant="ghost" asChild>
                          <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                      <Button size="sm" variant="ghost" asChild>
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <Link href="https://github.com/Ranilson-Nascimento" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              Ver Todos no GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
