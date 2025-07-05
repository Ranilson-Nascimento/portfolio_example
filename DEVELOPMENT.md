# Instruções de Desenvolvimento

## Como personalizar este portfolio

### 1. Informações Pessoais

Edite o arquivo `src/lib/config.ts` com suas informações:

```typescript
export const siteConfig = {
  name: "Seu Nome",
  description: "Sua descrição profissional",
  creator: "Seu Nome",
  links: {
    github: "https://github.com/seu-usuario",
    linkedin: "https://linkedin.com/in/seu-perfil",
    email: "mailto:seu@email.com"
  },
  contact: {
    email: "seu@email.com",
    phone: "+55 11 99999-9999",
    whatsapp: "5511999999999"
  }
}
```

### 2. Conteúdo das Seções

#### Hero (src/components/sections/hero.tsx)
- Altere o texto de apresentação
- Adicione sua foto no lugar do avatar com iniciais
- Customize os botões de CTA

#### About (src/components/sections/about.tsx)
- Modifique sua história pessoal
- Atualize as habilidades técnicas
- Altere os números das estatísticas

#### Projects (src/components/sections/projects.tsx)
- Substitua pelos seus projetos reais
- Adicione imagens dos projetos na pasta `public/projects/`
- Atualize links e tecnologias

#### Services (src/components/sections/services.tsx)
- Customize os serviços que você oferece
- Ajuste preços e funcionalidades
- Modifique as tecnologias utilizadas

#### Contact (src/components/sections/contact.tsx)
- Configure o formulário de contato (pode integrar com EmailJS, Formspree, etc.)
- Atualize informações de contato
- Adicione outros métodos de contato

### 3. Estilo e Design

#### Cores
Edite `tailwind.config.ts` para alterar as cores:

```typescript
theme: {
  extend: {
    colors: {
      primary: "sua-cor-primaria",
      // outras cores...
    }
  }
}
```

#### Fontes
Altere as fontes em `src/app/layout.tsx`:

```typescript
const inter = Inter({ subsets: ['latin'] })
// Substitua por suas fontes preferidas
```

### 4. Imagens e Assets

- Adicione sua foto pessoal em `public/avatar.jpg`
- Coloque imagens dos projetos em `public/projects/`
- Atualize o favicon em `public/favicon.ico`
- Crie uma imagem OG em `public/og-image.png` (1200x630px)

### 5. SEO e Metadata

#### Layout Principal
Edite `src/app/layout.tsx` para atualizar metadata:

```typescript
export const metadata: Metadata = {
  title: "Seu Nome - Portfolio",
  description: "Sua descrição profissional",
  // outras configurações...
}
```

#### Variáveis de Ambiente
Copie `.env.example` para `.env.local` e preencha:

```bash
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
NEXT_PUBLIC_SITE_NAME=Seu Nome - Portfolio
NEXT_PUBLIC_EMAIL=seu@email.com
```

### 6. Funcionalidades Avançadas

#### Formulário de Contato
Para conectar o formulário a um serviço real:

1. **EmailJS**: Cadastre-se e configure
2. **Formspree**: Alternativa simples
3. **SendGrid**: Para uso profissional
4. **API Route**: Crie sua própria API

#### Analytics
Adicione Google Analytics editando `src/app/layout.tsx` ou usando um componente dedicado.

#### Blog (Opcional)
Se quiser adicionar um blog:
1. Crie uma pasta `src/app/blog/`
2. Use MDX ou conecte a um CMS headless

### 7. Deploy

#### Vercel (Recomendado)
1. Conecte seu repositório GitHub
2. Configure as variáveis de ambiente
3. Deploy automático

#### Netlify
1. Conecte repositório
2. Configure build: `npm run build`
3. Publish directory: `out` (se usar `next export`)

#### Outras Plataformas
- Railway
- Heroku
- AWS Amplify
- DigitalOcean App Platform

### 8. Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm run start

# Linting
npm run lint

# Type checking
npm run typecheck
```

### 9. Troubleshooting

#### Problemas Comuns
1. **Erro de build**: Verifique TypeScript errors
2. **Imagens não carregam**: Verifique paths no public/
3. **Styles não aplicam**: Verifique configuração do Tailwind

#### Performance
- Use `next/image` para otimização automática
- Implemente lazy loading
- Minimize JavaScript não utilizado

### 10. Melhorias Futuras

- [ ] Sistema de blog
- [ ] Dashboard admin
- [ ] Comentários nos projetos
- [ ] Newsletter
- [ ] Modo de manutenção
- [ ] Múltiplos idiomas
- [ ] Testes automatizados

## Suporte

Se precisar de ajuda, entre em contato:
- Email: ranilsonnunes6@gmail.com
- GitHub: [@Ranilson-Nascimento](https://github.com/Ranilson-Nascimento)
- LinkedIn: [Ranilson Nascimento](https://linkedin.com/in/ranilson-nascimento-875ba5181)
