# 🎯 Como Usar Sua Imagem do Atleta no Hero

## 🖼️ Substituindo a Imagem

O Hero está configurado para usar a imagem do atleta com efeitos premium. Atualmente usa uma URL de placeholder, mas você pode facilmente substituir pela sua imagem.

### **Opção 1: Usar Arquivo Local (Recomendado)**

#### Passo 1: Salve a Imagem

1. Coloque a imagem em `public/images/`
2. Nomeie como `hero-athlete.jpg`

#### Passo 2: Edite Hero.vue

No arquivo `src/sections/Hero.vue`, na linha onde está:

```vue
<img
  src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=700&fit=crop"
  alt="Muscular Athlete with Dumbbell"
  class="w-full h-auto object-cover rounded-3xl shadow-glow-xl transition-all duration-500 hover:shadow-glow-xl"
/>
```

Substitua por:

```vue
<img
  src="/images/hero-athlete.jpg"
  alt="Muscular Athlete with Dumbbell"
  class="w-full h-auto object-cover rounded-3xl shadow-glow-xl transition-all duration-500 hover:shadow-glow-xl"
/>
```

### **Opção 2: Usar URL Remota**

Se a imagem está hospedada em um CDN (Cloudinary, AWS S3, etc):

```vue
<img
  src="https://seu-cdn.com/images/hero-athlete.jpg"
  alt="Muscular Athlete with Dumbbell"
  class="w-full h-auto object-cover rounded-3xl shadow-glow-xl transition-all duration-500 hover:shadow-glow-xl"
/>
```

### **Opção 3: Usar Base64 (Não Recomendado)**

Para imagens pequenas, você pode converter para Base64:

```vue
<img
  src="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
  alt="Muscular Athlete with Dumbbell"
  class="w-full h-auto object-cover rounded-3xl shadow-glow-xl transition-all duration-500 hover:shadow-glow-xl"
/>
```

## 📊 Dimensões Recomendadas

Para melhor resultado visual:

- **Largura**: 600px
- **Altura**: 700px
- **Proporção**: Aproximadamente 6:7
- **Formato**: JPG (melhor compressão) ou WebP
- **Tamanho do arquivo**: < 500KB

## 🔧 Otimizando a Imagem

### Windows (ImageMagick)

```bash
magick convert hero-athlete.jpg -resize 600x700 -quality 85 hero-athlete.jpg
```

### Ferramentas Online

- [TinyPNG](https://tinypng.com/) - Compressão com qualidade
- [ImageOptim](https://imageoptim.com/) - macOS
- [FileOptimizer](https://nikkhokkho.sourceforge.io/) - Windows

## 🎨 Efeitos Visuais Inclusos

O Hero já vem com:

- ✅ Glow circles animadas (laranja + vermelho)
- ✅ 4 badges flutuantes com estatísticas
- ✅ Efeito shadow glow na imagem
- ✅ Hover effect (amplifica o shadow)
- ✅ Responsivo para mobile (badges adicionados)
- ✅ Backdrop blur nos badges

## 📝 Badges Flutuantes

As posições dos badges:

1. **Top Right**: +1300 Positive Reviews (laranja)
2. **Left Middle**: +80 Coaches (vermelho)
3. **Bottom Right**: +1500 Trainers (laranja)
4. **Bottom Left**: +1000 Workout Videos (laranja)

Cada badge tem animação `animate-float` com delay diferente para movimento fluido.

## 🚀 Próximos Passos

1. Prepare sua imagem do atleta (600x700px)
2. Comprima para < 500KB
3. Salve em `public/images/hero-athlete.jpg` ou obtenha uma URL
4. Edite `src/sections/Hero.vue` linha 46
5. Execute `npm run dev` para visualizar
6. Faça `npm run build` para produção

## ✅ Checklist

- [ ] Imagem tem dimensões corretas (600x700px)
- [ ] Arquivo < 500KB
- [ ] Imagem salva ou URL disponível
- [ ] Hero.vue atualizado com novo src
- [ ] `npm run dev` executado sem erros
- [ ] Imagem aparece corretamente no navegador
- [ ] Badges flutuam sobre a imagem
- [ ] Efeitos glow funcionando

---

**Resultado**: Um hero section Premium com atleta real, badges flutuantes com glow e animações smooth! 💪🔥
