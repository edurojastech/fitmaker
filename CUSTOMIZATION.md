# FitMaker - Guia de Customização

## 🎨 Personalizando as Cores

### Cores Neon

Edite em `tailwind.config.js`:

```js
neon: {
  red: "#ff2d2d",      // Vermelho primário
  orange: "#ff6a00",   // Laranja secundário
}
```

### Cores Dark

```js
dark: {
  primary: "#0f0f0f",     // Fundo principal
  secondary: "#1a1a1a",   // Cards e seções
  tertiary: "#2a2a2a",    // Bordas e detalhes
}
```

## 📝 Editando Conteúdo

### Header

Arquivo: `src/components/Header.vue`

- Edite o prop `menuItems` para adicionar/remover itens do menu
- Customize o logo alterando "FM"

### Hero Section

Arquivo: `src/sections/Hero.vue`

- Altere `stats` para suas próprias métricas
- Edite headline e CTA buttons

### Planos de Preço

Arquivo: `src/sections/Plans.vue`

- Altere `plans` com seus preços e features
- O toggle mensal/anual calcula automaticamente

### Depoimentos

Arquivo: `src/sections/Testimonials.vue`

- Adicione/remova depoimentos no array `testimonials`
- Use emojis ou imagens para avatares

### Perguntas Frequentes

Arquivo: `src/sections/FAQ.vue`

- Edite o array `faqs` com suas perguntas e respostas

## 🖼️ Adicionando Imagens

### Hero Section

Substitua o placeholder em `Hero.vue`:

```vue
<!-- Atual -->
<div class="relative w-full h-96 bg-dark-secondary rounded-2xl...">

<!-- Adicione uma imagem real -->
<img src="seu-arquivo.jpg" alt="Athlete" class="w-full h-full object-cover" />
```

### Seção de Blog

Em `Blog.vue`, substitua emojis por imagens:

```vue
<img :src="post.image" alt="" class="w-full h-full object-cover" />
```

## 🔧 Tipografias

As fontes são importadas em `src/style.css`:

```css
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Montserrat:wght@600;700;800&display=swap");
```

Para usar outras fontes:

1. Encontre no Google Fonts
2. Copie a URL @import
3. Cole em `src/style.css`

## 🎬 Animações

As animações estão definidas em `tailwind.config.js`:

- `glow-pulse` - Efeito pulsante de brilho
- `float` - Movimento de flutuação
- `fade-in` - Fade entrada

Para adicionar animações customizadas:

```js
keyframes: {
  "sua-animacao": {
    "0%": { /* estilos iniciais */ },
    "100%": { /* estilos finais */ },
  },
},
animation: {
  "sua-animacao": "sua-animacao 2s ease-in-out infinite",
}
```

## 📱 Responsividade

Use os breakpoints do Tailwind:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Exemplo:

```vue
<div class="text-sm md:text-lg lg:text-2xl">
  Texto responsivo
</div>
```

## 🔗 Integrações

### Formulário de Signup

Em `Community.vue`, conecte a um serviço backend:

```js
const handleSubmit = async () => {
  const response = await fetch("/api/signup", {
    method: "POST",
    body: JSON.stringify(formData.value),
  });
};
```

### Links

Atualize os `href` dos links:

- Em `Header.vue`: Links de navegação
- Em `Footer.vue`: Links de redes sociais e páginas

### SEO

Edite as meta tags em `index.html`:

```html
<meta name="description" content="Sua descrição" />
<meta name="keywords" content="fitness, academia, coaching" />
```

## 🚀 Deployment

Para hospedar (Vercel, Netlify, etc):

```bash
npm run build
# Upload da pasta 'dist/'
```

## 💡 Dicas Pro

1. **Usar imagens otimizadas** - Comprima JPGs e PNGs antes
2. **Lazy loading** - Carregue imagens sob demanda
3. **Cache busting** - Vite faz automaticamente
4. **Analytics** - Adicione Google Analytics no index.html
5. **Form validation** - Valide inputs antes de enviar

## 🐛 Troubleshooting

### Erros de compilação

```bash
npm install
npm run dev
```

### Cores não aparecem

- Limpe cache: `npm run build`
- Verifique sintaxe em `tailwind.config.js`

### Layout quebrado mobile

- Verifique viewport em `index.html`
- Use classes responsive (`md:`, `lg:`, etc)

---

Para mais informações, consulte a documentação oficial:

- [Vue.js](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
