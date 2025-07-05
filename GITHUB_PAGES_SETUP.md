# Script para ativar GitHub Pages

## Passo 1: Acesse as configurações
https://github.com/Ranilson-Nascimento/portfolio_example/settings/pages

## Passo 2: Configure Source
- Source: "GitHub Actions" (NÃO "Deploy from a branch")
- Clique em "Save"

## Passo 3: Aguarde o primeiro deploy
O workflow vai rodar automaticamente após salvar.

## Verificar Status
- Actions: https://github.com/Ranilson-Nascimento/portfolio_example/actions
- Site estará em: https://ranilson-nascimento.github.io/portfolio_example

## Solução de Problemas

### Se o repositório for privado:
GitHub Pages gratuito só funciona com repositórios públicos.
Para tornar público:
1. Settings → General
2. Scroll até "Danger Zone"
3. "Change repository visibility" → "Make public"

### Se ainda não funcionar:
1. Verifique se o repositório tem o workflow correto
2. Execute manualmente: Actions → "Deploy Next.js to GitHub Pages" → "Run workflow"
