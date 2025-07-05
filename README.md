# Portfolio Profissional - Next.js

Um template moderno e responsivo para portfolio de desenvolvedores, construído com Next.js 15, TypeScript e Tailwind CSS.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC)](https://tailwindcss.com/)

## Sobre o Projeto

Este é um template completo para portfolio profissional, desenvolvido para apresentar projetos, habilidades e experiência de desenvolvedores. O projeto foi construído com foco em performance, SEO e experiência do usuário.

### Principais Funcionalidades

- **Design Responsivo**: Interface que se adapta a todos os dispositivos
- **Performance Otimizada**: Construído com Next.js 15 para carregamento rápido
- **SEO Avançado**: Metadata completa, sitemap dinâmico e estrutura otimizada
- **Acessibilidade**: Totalmente acessível seguindo as diretrizes WCAG
- **Modo Escuro/Claro**: Sistema de temas completo
- **PWA Ready**: Configurado como Progressive Web App
- **Segurança**: Headers de segurança implementados
- **Analytics Ready**: Preparado para Google Analytics

## Tecnologias Utilizadas

### Frontend
- **Next.js 15** - Framework React para produção
- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Radix UI** - Componentes acessíveis
- **Shadcn/ui** - Sistema de design moderno
- **Lucide React** - Ícones SVG modernos
- **Framer Motion** - Animações fluidas

### Desenvolvimento
- **ESLint** - Linting de código
- **Prettier** - Formatação de código
- **TypeScript** - Type checking

### Deploy
- **Vercel** - Deploy e hospedagem
- **GitHub Actions** - CI/CD pipeline

## Início Rápido

### Pré-requisitos

- Node.js 18+
- npm, yarn ou pnpm
- Git

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/Ranilson-Nascimento/portfolio_example.git
   cd portfolio_example
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   ```bash
   cp .env.example .env.local
   ```
   Edite o arquivo `.env.local` com suas configurações.

4. **Execute o projeto**
   ```bash
   npm run dev
   ```

5. **Abra no navegador**
   Acesse [http://localhost:3000](http://localhost:3000)

## Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Servidor de desenvolvimento
npm run dev:turbo    # Desenvolvimento com Turbopack

# Build e Produção
npm run build        # Build para produção
npm run start        # Servidor de produção
npm run preview      # Build + start para preview

# Qualidade de Código
npm run lint         # Executa linting
npm run lint:fix     # Corrige problemas automaticamente
npm run typecheck    # Verifica tipagem TypeScript

# Utilitários
npm run clean        # Limpa arquivos de build
npm run analyze      # Analisa o bundle
```

## Personalização

### 1. Informações Pessoais

Edite o arquivo `src/lib/config.ts` com suas informações:

```typescript
export const siteConfig = {
  name: "Seu Nome",
  description: "Sua descrição profissional",
  url: "https://seu-dominio.com",
  // ... outras configurações
}
```

### 2. Conteúdo

- **Sobre**: Edite `src/components/sections/about.tsx`
- **Projetos**: Edite `src/components/sections/projects.tsx`
- **Serviços**: Edite `src/components/sections/services.tsx`
- **Contato**: Edite `src/components/sections/contact.tsx`

### 3. Estilo

- **Cores**: Edite `tailwind.config.ts`
- **Fontes**: Configure em `src/app/layout.tsx`
- **Componentes**: Personalize em `src/components/ui/`

## Deploy na Vercel

### Deploy Automático

1. Faça fork deste repositório
2. Conecte com a Vercel
3. Configure as variáveis de ambiente
4. Deploy automático

### Deploy Manual

```bash
npm i -g vercel
vercel login
vercel --prod
```

### Variáveis de Ambiente

Configure no painel da Vercel:

```bash
NEXT_PUBLIC_SITE_URL=https://seu-dominio.vercel.app
NEXT_PUBLIC_SITE_NAME=Seu Nome - Portfolio
NEXT_PUBLIC_EMAIL=seu@email.com
# ... outras variáveis
```

## Funcionalidades Implementadas

### SEO e Performance
- Metadata completa com Open Graph e Twitter Cards
- Sitemap.xml dinâmico
- Robots.txt otimizado
- Otimização de imagens automática
- Cache de assets estáticos

### UX/UI
- Design responsivo mobile-first
- Modo escuro/claro
- Animações suaves
- Loading states
- Página 404 personalizada
- PWA configurado

### Desenvolvimento
- TypeScript strict mode
- ESLint + Prettier configurados
- CI/CD com GitHub Actions
- Componentes reutilizáveis
- Arquitetura escalável

## Estrutura do Projeto

```
portfolio_example/
├── public/                 # Arquivos estáticos
│   ├── favicon.ico        
│   └── site.webmanifest   
├── src/
│   ├── app/               # App Router (Next.js 13+)
│   │   ├── api/           # API routes
│   │   ├── globals.css    
│   │   ├── layout.tsx     
│   │   ├── page.tsx       
│   │   ├── loading.tsx    
│   │   └── not-found.tsx  
│   ├── components/        # Componentes React
│   │   ├── sections/      # Seções da página
│   │   ├── ui/            # Componentes de UI
│   │   └── icons/         
│   ├── hooks/             # Custom hooks
│   ├── lib/               # Utilitários
│   └── types/             # Tipos TypeScript
├── .github/workflows/     # GitHub Actions
├── .env.example          
├── next.config.ts        
├── tailwind.config.ts    
├── tsconfig.json         
└── vercel.json          
```

## Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

## Contato

**Desenvolvedor**: Ranilson Nascimento
- GitHub: [github.com/Ranilson-Nascimento](https://github.com/Ranilson-Nascimento)
- LinkedIn: [linkedin.com/in/ranilson-nascimento-875ba5181](https://www.linkedin.com/in/ranilson-nascimento-875ba5181/)

---

**Template criado para demonstração. Personalize com suas próprias informações antes de usar.**
