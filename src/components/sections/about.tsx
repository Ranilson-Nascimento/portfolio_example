import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Smartphone, Palette, Server } from "lucide-react"

const skills = [
  {
    category: "Frontend",
    icon: Globe,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400"
  },
  {
    category: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "Python", "API REST", "GraphQL"],
    color: "bg-green-500/10 text-green-600 dark:text-green-400"
  },
  {
    category: "Database",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma"],
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400"
  },
  {
    category: "Mobile",
    icon: Smartphone,
    skills: ["React Native", "Flutter", "Expo", "iOS", "Android"],
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400"
  },
  {
    category: "Design",
    icon: Palette,
    skills: ["Figma", "Adobe XD", "UI/UX", "Prototyping", "Design Systems"],
    color: "bg-pink-500/10 text-pink-600 dark:text-pink-400"
  },
  {
    category: "DevOps",
    icon: Code,
    skills: ["Docker", "AWS", "Vercel", "Git", "CI/CD"],
    color: "bg-gray-500/10 text-gray-600 dark:text-gray-400"
  }
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Sobre Mim
            </h2>
            <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Desenvolvedor Full Stack com mais de 3 anos de experiência criando soluções digitais inovadoras.
              Apaixonado por tecnologia e sempre em busca de novos desafios.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Minha Jornada</h3>
              <p className="text-muted-foreground">
                Comecei minha jornada como desenvolvedor em 2021, movido pela curiosidade de entender 
                como as coisas funcionam na web. Desde então, venho me dedicando a aprender e aplicar 
                as melhores tecnologias do mercado.
              </p>
              <p className="text-muted-foreground">
                Trabalho tanto no frontend quanto no backend, criando aplicações completas e escaláveis. 
                Tenho experiência em desenvolvimento de APIs, bancos de dados, interfaces responsivas 
                e aplicações mobile.
              </p>
              <p className="text-muted-foreground">
                Atualmente, estou focado em tecnologias como React, Next.js, Node.js e TypeScript, 
                sempre buscando as melhores práticas de desenvolvimento e arquitetura de software.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-2xl font-bold">Habilidades Técnicas</h3>
            <div className="grid gap-4">
              {skills.map((skill) => {
                const IconComponent = skill.icon
                return (
                  <Card key={skill.category} className="p-4">
                    <CardContent className="flex items-start space-x-4 p-0">
                      <div className={`rounded-lg p-2 ${skill.color}`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <h4 className="font-semibold">{skill.category}</h4>
                        <div className="flex flex-wrap gap-1">
                          {skill.skills.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Projetos Concluídos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">3+</div>
            <div className="text-sm text-muted-foreground">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">20+</div>
            <div className="text-sm text-muted-foreground">Tecnologias</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Satisfação do Cliente</div>
          </div>
        </div>
      </div>
    </section>
  )
}
