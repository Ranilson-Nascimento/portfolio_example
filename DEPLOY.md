# Guia de Deploy

## Deploy na Vercel (Recomendado)

### 1. Preparação

1. Certifique-se de que o projeto está em um repositório GitHub
2. Teste localmente com `npm run build` e `npm run dev`
3. Configure as variáveis de ambiente

### 2. Deploy Automático

1. Acesse [vercel.com](https://vercel.com)
2. Conecte sua conta GitHub
3. Importe o repositório do portfolio
4. Configure as variáveis de ambiente:

```bash
NEXT_PUBLIC_SITE_URL=https://seu-portfolio.vercel.app
NEXT_PUBLIC_SITE_NAME=Seu Nome - Portfolio
NEXT_PUBLIC_EMAIL=seu@email.com
```

5. Clique em "Deploy"

### 3. Deploy Manual (CLI)

```bash
# Instalar CLI da Vercel
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### 4. Configurações Importantes

#### Domínio Personalizado
- Vá em Settings > Domains
- Adicione seu domínio personalizado
- Configure DNS conforme instruções

#### Variáveis de Ambiente
```bash
NEXT_PUBLIC_SITE_URL=https://seudominio.com
NEXT_PUBLIC_SITE_NAME=Seu Nome Completo
NEXT_PUBLIC_EMAIL=contato@seudominio.com
```

#### Headers de Segurança
O arquivo `vercel.json` já inclui headers de segurança básicos.

## Deploy no Netlify

### 1. Conectar Repositório
1. Acesse [netlify.com](https://netlify.com)
2. Conecte seu repositório GitHub
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

### 2. Variáveis de Ambiente
Adicione as mesmas variáveis no painel da Netlify.

## Deploy no Railway

### 1. Conectar Repositório
1. Acesse [railway.app](https://railway.app)
2. Conecte GitHub e selecione o repositório
3. Railway detectará automaticamente Next.js

### 2. Configurações
- Railway configurará automaticamente
- Adicione variáveis de ambiente no painel

## Checklist Pré-Deploy

- [ ] Testado localmente (`npm run build`)
- [ ] Todas as imagens estão na pasta `public/`
- [ ] Informações pessoais atualizadas em `config.ts`
- [ ] Links de redes sociais funcionando
- [ ] Formulário de contato configurado
- [ ] SEO metadata configurada
- [ ] Favicon atualizado
- [ ] README.md atualizado

## Pós-Deploy

### 1. Teste o Site
- [ ] Navegação funciona
- [ ] Links externos abrem
- [ ] Formulário de contato envia
- [ ] Responsivo em mobile
- [ ] Modo escuro/claro funciona

### 2. SEO
- [ ] Submeter sitemap no Google Search Console
- [ ] Configurar Google Analytics (opcional)
- [ ] Verificar meta tags com tools de SEO

### 3. Performance
- [ ] Testar no PageSpeed Insights
- [ ] Verificar Core Web Vitals
- [ ] Otimizar imagens se necessário

## Solução de Problemas

### Build Falha
1. Verifique erros de TypeScript
2. Teste build local: `npm run build`
3. Verifique imports e exports

### Deploy Lento
1. Otimize imagens
2. Remova dependências não utilizadas
3. Use `next/image` para imagens

### Formulário Não Funciona
1. Configure serviço de email (EmailJS, Formspree)
2. Adicione validação de formulário
3. Teste envio local

## Manutenção

### Atualizações Regulares
- Atualizar dependências: `npm update`
- Revisar e atualizar projetos
- Adicionar novos trabalhos
- Backup do código

### Monitoramento
- Verificar uptime
- Monitorar performance
- Analisar analytics
- Responder contatos

## Suporte

Se encontrar problemas:
1. Verifique documentação do Next.js
2. Consulte docs da plataforma de deploy
3. Entre em contato: ranilsonnunes6@gmail.com
