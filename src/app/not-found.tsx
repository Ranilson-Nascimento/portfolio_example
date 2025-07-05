import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 p-8">
        <div className="space-y-2">
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <h2 className="text-3xl font-bold">Página não encontrada</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Oops! A página que você está procurando não existe. 
            Ela pode ter sido movida, excluída ou você digitou o endereço incorreto.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/">
              <Home className="h-4 w-4 mr-2" />
              Voltar ao Início
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Página Anterior
            </Link>
          </Button>
        </div>

        <div className="text-sm text-muted-foreground">
          <p>Se você acredita que isso é um erro, entre em contato:</p>
          <Link 
            href="mailto:ranilsonnunes6@gmail.com" 
            className="text-primary hover:underline"
          >
            ranilsonnunes6@gmail.com
          </Link>
        </div>
      </div>
    </div>
  )
}
