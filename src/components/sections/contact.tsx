"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"
import { siteConfig } from "@/lib/config"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    }

    try {
      // Simular envio do formulário
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Obrigado pelo seu contato. Responderei em breve.",
      })

      // Limpar formulário
      e.currentTarget.reset()
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato diretamente por email.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Entre em Contato
            </h2>
            <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Tem um projeto em mente? Vamos conversar sobre como posso ajudar a transformar 
              sua ideia em realidade.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">{siteConfig.contact.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Telefone</p>
                    <p className="text-sm text-muted-foreground">{siteConfig.contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Localização</p>
                    <p className="text-sm text-muted-foreground">São Paulo, Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Disponibilidade</h4>
              <p className="text-sm text-muted-foreground">
                Segunda a Sexta: 9h às 18h<br />
                Resposta em até 24 horas
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Formas de Trabalho</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Projetos pontuais</li>
                <li>• Desenvolvimento contínuo</li>
                <li>• Consultoria técnica</li>
                <li>• Trabalho remoto</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Envie uma Mensagem</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e entrarei em contato em breve.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nome *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Seu nome completo"
                        required
                        disabled={isLoading}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        required
                        disabled={isLoading}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Assunto *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Assunto da mensagem"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensagem *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Descreva seu projeto ou dúvida..."
                      className="min-h-[120px]"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Alternative Contact Methods */}
        <div className="text-center space-y-4">
          <h3 className="text-xl font-bold">Ou entre em contato diretamente</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild>
              <a href={`mailto:${siteConfig.contact.email}`}>
                <Mail className="h-4 w-4 mr-2" />
                Enviar Email
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a 
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="h-4 w-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
