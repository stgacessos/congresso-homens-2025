# Congresso de Homens 2025 - Pescadores de Homens

Landing page oficial do Congresso de Homens 2025 da Igreja Bethshalom Caruaru.

## 🚀 Como rodar o projeto

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Rodar build de produção
npm start
```

## 📁 Estrutura do projeto

```
/
├── app/              # Arquivos principais do Next.js
├── components/       # Componentes React
├── public/          # Assets estáticos (imagens, áudio)
└── package.json     # Dependências
```

## 🎨 Identidade Visual

- **Paleta de cores:**
  - Dark: #0B1A36
  - Primary: #176BFF
  - Light: #67D2FF
  - Accent: #A2E9FF

## 🔧 Variáveis configuráveis

No código, procure por estas variáveis para personalizar:

- `{{CTA_URL}}` - URL do formulário de inscrição
- `{{PRECO_LOTE_2}}` - Preço do segundo lote
- `{{DATA_INICIO_LOTE_2}}` - Data de início do segundo lote
- `{{DATA_FIM_LOTE_2}}` - Data final do segundo lote
- `{{PRECO_LOTE_3}}` - Preço do terceiro lote
- `{{DATA_INICIO_LOTE_3}}` - Data de início do terceiro lote
- `{{DATA_FIM_LOTE_3}}` - Data final do terceiro lote

## 📷 Assets necessários

Substitua os arquivos placeholder em `/public`:

- `logo-igreja.png` - Logo da Igreja Bethshalom
- `logo-ministerio.png` - Logo do Ministério de Homens
- `hero-bg.jpg` - Imagem de fundo do hero
- `salomao.jpg` - Foto do Salomão do Reggae
- `camiseta-front.png` - Foto da frente da camiseta
- `camiseta-back.png` - Foto das costas da camiseta
- `ondas.svg` - Gráfico de ondas (opcional)
- `audio/tema.mp3` - Trilha sonora do site

## 🌐 Deploy

O projeto está pronto para deploy em qualquer plataforma que suporte Next.js:
- Vercel (recomendado)
- Netlify
- AWS Amplify
- Outros

## 📱 Responsividade

A landing page é totalmente responsiva e otimizada para:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)