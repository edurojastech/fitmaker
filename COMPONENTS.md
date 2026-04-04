# 📋 Documentação de Componentes - FitMaker

## 🏗️ Estrutura

```
src/
├── components/
│   └── Header.vue           # Navbar com navegação
├── sections/
│   ├── Hero.vue             # Seção principal com CTA
│   ├── Stats.vue            # Estatísticas em 4 colunas
│   ├── Services.vue         # 4 serviços principais
│   ├── Plans.vue            # 3 planos de preço com toggle
│   ├── FitnessTools.vue     # Calculadoras e ferramentas
│   ├── Testimonials.vue     # Depoimentos de clientes
│   ├── Trainers.vue         # Cards dos personal trainers
│   ├── Blog.vue             # Grid de posts
│   ├── Community.vue        # Signup + benefícios
│   ├── FAQ.vue              # Accordion com perguntas
│   └── Footer.vue           # Footer com links
├── App.vue                  # Componente raiz
├── main.ts                  # Entry point
└── style.css               # Estilos globais
```

## 🔧 Componentes Detalhados

### Header.vue (`src/components/Header.vue`)

- **Props**: Nenhum
- **State**: `isMenuOpen` (boolean)
- **Features**:
  - Menu responsivo com hamburger mobile
  - Navegação fixa
  - Logo customizável
  - Botões de Login e Sign Up
  - Menu items configuráveis

**Dados principais**:

```ts
const menuItems = [
  { label: "Home", href: "#home" },
  { label: "Programs", href: "#programs" },
  { label: "Coaching", href: "#coaching" },
  { label: "Plans", href: "#plans" },
  { label: "About", href: "#about" },
];
```

---

### Hero.vue (`src/sections/Hero.vue`)

- **Features**:
  - Headline destacada com gradiente
  - 2 CTA buttons (primário e secundário)
  - 3 cards estatísticos flutuantes
  - Placeholder para imagem hero (lado direito)
  - Responsivo 2 colunas → 1 coluna

**Dados principais**:

```ts
const stats = [
  { number: "+1300", label: "Positive Reviews" },
  { number: "+80", label: "Coaches" },
  { number: "+1000", label: "Video Tutorials" },
];
```

---

### Stats.vue (`src/sections/Stats.vue`)

- **Features**:
  - 4 colunas com métricas
  - Cards com ícones emoji
  - Efeito hover com glow
  - Totalmente responsivo

**Dados principais**:

```ts
const stats = [
  { value: "96%", label: "Client Satisfaction", icon: "⭐" },
  { value: "+5", label: "Years Experience", icon: "🏆" },
  { value: "+800", label: "Active Members", icon: "👥" },
  { value: "24/7", label: "Support", icon: "🛟" },
];
```

---

### Services.vue (`src/sections/Services.vue`)

- **Features**:
  - 4 cards de serviços
  - Ícones emoji
  - Descrições
  - Botão "Learn More" com seta
  - Hover com glow effect

**Dados principais**:

```ts
const services = [
  {
    title: "Losing Weight",
    description: "Scientifically-designed programs...",
    icon: "⚡",
  },
  // ... mais 3 serviços
];
```

---

### Plans.vue (`src/sections/Plans.vue`)

- **Features**:
  - 3 planos com preços
  - Toggle mensal/anual (desconto de 20%)
  - Plano destacado com "Most Popular"
  - Lista de features com checkmarks
  - Botões customizados por tipo
  - Escala do plano destacado

**Dados principais**:

```ts
const plans = [
  {
    name: 'BEGINNER PLAN',
    monthlyPrice: 49,
    yearlyPrice: 490,
    features: [...],
    highlight: false,
  },
  // ... Custom Plan (highlight: true)
  // ... Pro Plan (highlight: false)
]
```

---

### FitnessTools.vue (`src/sections/FitnessTools.vue`)

- **Features**:
  - 4 cards de ferramentas
  - Ícones com animação de escala
  - Descrições curtas
  - Botões "Use Tool"

**Dados principais**:

```ts
const tools = [
  { name: "Calorie Calculator", icon: "🔥", description: "..." },
  { name: "BMI Calculator", icon: "⚖️", description: "..." },
  { name: "Macronutrient Calculator", icon: "🥗", description: "..." },
  { name: "Goal Setting Tool", icon: "🎯", description: "..." },
];
```

---

### Testimonials.vue (`src/sections/Testimonials.vue`)

- **Features**:
  - 3 cards de depoimentos
  - Rating com 5 estrelas
  - Avatar com emoji
  - Nome, role e depoimento
  - Citação em itálico

**Dados principais**:

```ts
const testimonials = [
  {
    name: "John Smith",
    role: "Fitness Enthusiast",
    text: "...",
    avatar: "👨‍💼",
  },
  // ... mais depoimentos
];
```

---

### Trainers.vue (`src/sections/Trainers.vue`)

- **Features**:
  - 4 cards de trainers
  - Avatar com emoji grande
  - Nome, role, especialidade
  - Botão "Learn More"
  - Hover com glow

**Dados principais**:

```ts
const trainers = [
  {
    name: "Alex Rodriguez",
    role: "Head Coach",
    specialty: "Strength & Conditioning",
    avatar: "💪",
  },
  // ... mais trainers
];
```

---

### Blog.vue (`src/sections/Blog.vue`)

- **Features**:
  - Grid 6 posts (1/2/3 colunas responsivo)
  - Imagem com emojis (pronto para trocar)
  - Categoria, data, título
  - Botão "Read More"
  - Line clamp no título

**Dados principais**:

```ts
const posts = [
  {
    title: "10 Best Exercises for Home Workouts",
    category: "Training",
    date: "Mar 15, 2024",
    image: "🏠",
  },
  // ... mais posts
];
```

---

### Community.vue (`src/sections/Community.vue`)

- **Features**:
  - Formulário de signup (nome, email, senha)
  - 4 cards de benefícios com ícones
  - Validação básica
  - Divisor com "Or continue with"
  - Botão Google
  - Links de termos
  - Responsivo 2 colunas

**Estado**:

```ts
const formData = ref({
  name: "",
  email: "",
  password: "",
});
```

---

### FAQ.vue (`src/sections/FAQ.vue`)

- **Features**:
  - 6 FAQs em accordion
  - Click para expandir/colapsar
  - Animação de ícone
  - Bordas com hover glow
  - Totalmente responsivo

**Dados principais**:

```ts
const faqs = [
  {
    question: "What is FitMaker?",
    answer: "...",
  },
  // ... mais FAQs
];
```

---

### Footer.vue (`src/sections/Footer.vue`)

- **Features**:
  - Logo e descrição
  - 4 colunas de links
  - Links de redes sociais
  - Copyright
  - Links rodapé
  - Responsivo

**Dados principais**:

```ts
const footerSections = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Press", "Blog"],
  },
  // ... mais seções
];

const socialLinks = [
  { name: "Facebook", icon: "f", url: "#" },
  // ... mais redes
];
```

---

## 🎨 Classes CSS Globais

### Typography

- `.heading-lg` - Títulos grandes (H1)
- `.heading-md` - Títulos médios (H2)
- `.heading-sm` - Títulos pequenos (H3)

### Buttons

- `.btn-primary` - Botão principal (vermelho)
- `.btn-secondary` - Botão secundário (outline)

### Cards

- `.card` - Card base com hover effects
- `.glow-border` - Borda com glow effect

### Text

- `.gradient-text` - Texto com gradiente
- `.text-shadow` - Sombra de texto
- `.line-clamp-1/2/3` - Truncar texto em N linhas

### Colors

- `text-neon-red` - Texto vermelho neon
- `text-neon-orange` - Texto laranja neon
- `bg-dark-primary/secondary/tertiary` - Backgrounds

---

## 📱 Responsividade

Todos os componentes usam breakpoints Tailwind:

```
mobile:  base (0px)
sm:      640px
md:      768px
lg:      1024px
xl:      1280px
2xl:     1536px
```

Exemplo de layout responsivo:

```vue
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  <!-- 1 coluna mobile, 2 tablet, 4 desktop -->
</div>
```

---

## 🚀 Performance

- **CSS**: ~21KB (gzip: 4.5KB)
- **JS**: ~88KB (gzip: 31KB)
- **Build**: ~650ms
- **Animações**: Hardware-accelerated CSS
- **Lazy loading**: Pronto para implementar

---

## 🔮 Próximas Melhorias

- [ ] Implementar lazy loading de imagens
- [ ] Adicionar Dark/Light mode toggle
- [ ] Integração com backend (signup, plans)
- [ ] Analytics (Google Analytics)
- [ ] Sitemap e SEO otimizado
- [ ] PWA (Progressive Web App)
- [ ] Testing (Vitest, Cypress)
- [ ] Internationalization (i18n)

---

## 📦 Tamanho Final

**Production Bundle:**

- HTML: 0.72 KB (gzip: 0.43 KB)
- CSS: 21.44 KB (gzip: 4.51 KB)
- JS: 88.48 KB (gzip: 31.48 KB)
- **Total**: ~110 KB (gzip: ~36 KB)

---

**Última atualização**: Abril 2024
**Versão**: 1.0.0
**Compatibilidade**: Vue 3.5+, Node 16+
