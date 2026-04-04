# FitMaker - Premium Fitness Platform

Um site moderno e premium para academias fitness, desenvolvido com Vue.js 3, TypeScript e Tailwind CSS.

## 🎨 Design Visual

- **Tema**: Dark mode com gradiente preto + vermelho/laranja neon
- **Cores Principais**:
  - Dark: #0f0f0f, #1a1a1a
  - Neon Red: #ff2d2d
  - Neon Orange: #ff6a00
- **Tipografia**: Poppins (corpo), Montserrat (títulos)
- **Efeitos**: Glow, blur, gradientes, animações suaves

## 📄 Estrutura da Página

1. **Header (Navbar)** - Menu fixo com navegação e botões de autenticação
2. **Hero Section** - Headline + CTA buttons + Estatísticas flutuantes
3. **Stats Section** - Métricas de satisfação, experiência e membros
4. **Services Section** - 4 cards com serviços principais
5. **Plans Section** - 3 planos de preço com toggle mensal/anual
6. **Fitness Tools** - Calculadoras e ferramentas fitness
7. **Testimonials** - Depoimentos de clientes com ratings
8. **Trainers** - Cards dos personal trainers
9. **Blog Section** - Grid de posts e artigos
10. **Community** - Formulário de signup + benefícios
11. **FAQ** - Accordion com perguntas frequentes
12. **Footer** - Links e redes sociais

## 🛠️ Tecnologias

- **Vue.js 3** - Framework progressivo
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool rápido
- **Responsive Design** - Mobile-first approach

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm preview
```

## 🎯 Recursos

✨ **Design Premium**

- Dark mode elegante com efeitos neon
- Alto contraste e visual energético
- Animações suaves em hover

🎨 **Componentes Reutilizáveis**

- Header responsivo
- Cards customizados
- Buttons com variações
- Formulários estilizados

📱 **Responsivo**

- Mobile-first design
- Breakpoints otimizados
- Menu hamburger em mobile

⚡ **Performance**

- Otimizado para Web
- Lazy loading de imagens
- Animações CSS eficientes

## 📁 Estrutura de Pastas

```
src/
├── components/
│   └── Header.vue
├── sections/
│   ├── Hero.vue
│   ├── Stats.vue
│   ├── Services.vue
│   ├── Plans.vue
│   ├── FitnessTools.vue
│   ├── Testimonials.vue
│   ├── Trainers.vue
│   ├── Blog.vue
│   ├── Community.vue
│   ├── FAQ.vue
│   └── Footer.vue
├── App.vue
├── main.ts
└── style.css
```

## 🎨 Personalização

### Cores

Edite as cores em `tailwind.config.js`:

```js
colors: {
  neon: {
    red: "#ff2d2d",
    orange: "#ff6a00",
  },
  dark: {
    primary: "#0f0f0f",
    secondary: "#1a1a1a",
    tertiary: "#2a2a2a",
  },
}
```

### Fontes

As tipografias são importadas do Google Fonts (Poppins, Montserrat).

### Conteúdo

Edite os dados em cada seção Vue (hero, planos, depoimentos, etc).

## 🚀 Deploy

Para fazer deploy:

```bash
npm run build
# Arquivos gerados em: dist/
```

Faça upload da pasta `dist/` para seu servidor web.

## 📝 Licença

Este projeto é de uso exclusivo para academias e negócios fitness.

## 💬 Contato

Para dúvidas ou customizações, entre em contato com o desenvolvedor.

---

**FitMaker** - Transform Your Fitness Journey ✨💪
