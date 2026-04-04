# 🚀 Guia de Deployment e Otimização

## 📦 Build para Produção

### Passo 1: Preparar Build

```bash
npm run build
```

Resultado em `dist/`:

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].css
│   └── index-[hash].js
```

### Passo 2: Testar Build Localmente

```bash
npm run preview
```

---

## 🌐 Opções de Hosting

### Vercel (Recomendado para Vue.js)

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Deploy
vercel
```

**vercel.json:**

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

### Netlify

```bash
# 1. Instalar Netlify CLI
npm i -g netlify-cli

# 2. Deploy
netlify deploy
```

**netlify.toml:**

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### GitHub Pages

```bash
# Adicione ao package.json
"deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

### Azure Static Web Apps

1. Crie repo no GitHub
2. Conecte no Azure Portal
3. Configure CI/CD automático

### AWS Amplify

```bash
npm install -g @aws-amplify/cli
amplify init
amplify add hosting
amplify publish
```

---

## ⚙️ Otimizações de Performance

### 1. Compressão Gzip

**terraform.config.js:**

```js
import compression from "vite-plugin-compression";

export default {
  plugins: [
    compression({
      algorithm: "gzip",
      ext: ".gz",
    }),
  ],
};
```

### 2. Code Splitting

Já feito automaticamente pelo Vite. para chunks customizados:

```js
// vite.config.ts
export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["vue"],
          utils: ["./src/utils"],
        },
      },
    },
  },
};
```

### 3. Image Optimization

Em `Blog.vue`, use `<img loading="lazy">`:

```vue
<img :src="post.image" @click="handleLoad" loading="lazy" alt="Post image" />
```

### 4. CSS Purging

Tailwind já remove CSS não usado automaticamente.

### 5. Lazy Loading de Componentes

```js
import { defineAsyncComponent } from "vue";

const Blog = defineAsyncComponent(() => import("./sections/Blog.vue"));
```

---

## 🔒 Segurança

### 1. Variáveis de Ambiente

Crie `.env`:

```
VITE_API_URL=https://api.example.com
VITE_API_KEY=seu-api-key
```

Use no projeto:

```js
const apiUrl = import.meta.env.VITE_API_URL;
```

### 2. Headers de Segurança

Adicione em `netlify.toml` ou servidor:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "SAMEORIGIN"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Content-Security-Policy = "default-src 'self'"
```

### 3. CORS

Adicione headers CORS no seu servidor:

```js
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://seu-dominio.com");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
```

---

## 📊 Analytics

### Google Analytics 4

Adicione em `index.html`:

```html
<!-- Google Analytics -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-XXXXXXXXXX");
</script>
```

### Hotjar

```html
<script>
  (function (h, o, t, j, a, r) {
    h.hj =
      h.hj ||
      function () {
        (h.hj.q = h.hj.q || []).push(arguments);
      };
    h._hjSettings = { hjid: HOTJAR_ID, hjsv: 6 };
    a = o.getElementsByTagName("head")[0];
    r = o.createElement("script");
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
</script>
```

---

## 🔍 SEO

### 1. Meta Tags Essenciais

```html
<!-- index.html -->
<meta name="description" content="FitMaker - Premium fitness platform" />
<meta name="keywords" content="fitness, gym, coaching, workout" />
<meta name="author" content="FitMaker" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<!-- Open Graph -->
<meta property="og:title" content="FitMaker" />
<meta property="og:description" content="Transform your fitness journey" />
<meta property="og:image" content="https://fitmaker.com/og-image.jpg" />
<meta property="og:url" content="https://fitmaker.com" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="FitMaker" />
<meta name="twitter:description" content="Transform your fitness journey" />
<meta name="twitter:image" content="https://fitmaker.com/twitter-image.jpg" />
```

### 2. Sitemap

Crie `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://fitmaker.com/</loc>
    <lastmod>2024-04-01</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://fitmaker.com/#plans</loc>
    <lastmod>2024-04-01</lastmod>
    <priority>0.8</priority>
  </url>
</urlset>
```

### 3. robots.txt

Crie `public/robots.txt`:

```
User-agent: *
Allow: /
Disallow: /admin
Sitemap: https://fitmaker.com/sitemap.xml
```

---

## 📝 Monitoramento

### Error Tracking (Sentry)

```bash
npm install @sentry/vue @sentry/tracing
```

Em `main.ts`:

```ts
import * as Sentry from "@sentry/vue";

Sentry.init({
  dsn: "https://seu-dsn@sentry.io/xxxxx",
  integrations: [
    new Sentry.Replay({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

const app = createApp(App);
app.use(Sentry.vuePlugin);
```

---

## 🧪 Testing

### Unit Tests (Vitest)

```bash
npm install -D vitest @vue/test-utils happy-dom
```

Exemplo teste:

```ts
// src/components/Header.test.ts
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Header from "@/components/Header.vue";

describe("Header.vue", () => {
  it("renders navigation items", () => {
    const wrapper = mount(Header);
    expect(wrapper.find("nav").exists()).toBe(true);
  });
});
```

### E2E Tests (Playwright)

```bash
npm install -D @playwright/test
```

---

## 📈 Checklist de Deployment

- [ ] Build passa sem erros: `npm run build`
- [ ] Sem console warnings/errors
- [ ] Imagens otimizadas
- [ ] Meta tags configuradas
- [ ] sitemap.xml criado
- [ ] robots.txt criado
- [ ] Google Analytics configurado
- [ ] SSL/HTTPS ativo
- [ ] Headers de segurança configurados
- [ ] CORS configurado
- [ ] Email de contato testado
- [ ] Forms testados
- [ ] Mobile responsivo testado
- [ ] Performance testada (PageSpeed)
- [ ] Backup configurado

---

## 🔧 Troubleshooting

### Build falha

```bash
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

### Lentidão

- Rode: `npm run build -- --analyze` (vite-plugin-visualizer)
- Verifique tamanho de imagens
- Ative gzip compression
- Use CDN para assets

### CORS Error

```js
// Se backend está em outro domínio
fetch("https://api.example.com/data", {
  headers: {
    "Content-Type": "application/json",
  },
  mode: "cors",
});
```

---

## 📚 Recursos Úteis

- [Vite Docs](https://vitejs.dev/)
- [Vue 3 Docs](https://vuejs.org/)
- [Tailwind Docs](https://tailwindcss.com/)
- [Vercel Docs](https://vercel.com/docs)
- [Web.dev Performance](https://web.dev/)

---

**Última atualização**: Abril 2024
