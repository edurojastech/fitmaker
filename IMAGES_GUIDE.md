# 🖼️ Adicionando a Imagem Hero

## Pastas de Imagens

A aplicação FitMaker organiza as imagens nos seguintes locais:

```
public/
├── images/
│   ├── hero-athlete.jpg      (imagem principal do hero)
│   ├── blog/
│   └── testimonials/
```

## Como Adicionar a Imagem do Atleta

### Opção 1: Salvar Manualmente (Recomendado)

1. **Localize a imagem** que você quer usar (a foto do atleta com o peso)

2. **Salve a imagem como JPG/PNG**:
   - Formatos aceitos: `.jpg`, `.jpeg`, `.png`, `.webp`
   - Tamanho recomendado: 800x900px para desktop
   - Otimize o tamanho do arquivo (< 500KB)

3. **Coloque na pasta correta**:

   ```
   public/images/hero-athlete.jpg
   ```

4. **Reinicie o servidor**:
   ```bash
   npm run dev
   ```

### Opção 2: Usando o Script de Upload

Se quiser automatizar, você pode usar:

```bash
# Windows
copy "C:\caminho\da\imagem.jpg" "public/images/hero-athlete.jpg"

# Mac/Linux
cp /caminho/da/imagem.jpg public/images/hero-athlete.jpg
```

## Otimizando a Imagem

### Com ImageMagick:

```bash
convert hero-athlete.jpg -resize 800x900 -quality 85 hero-athlete.jpg
```

### Com FFmpeg:

```bash
ffmpeg -i hero-athlete.jpg -vf scale=800:900 hero-athlete.jpg
```

### Ferramentas Online:

- [TinyPNG](https://tinypng.com/) - Compressão com qualidade
- [ImageOptim](https://imageoptim.com/) - macOS
- [FileOptimizer](https://nikkhokkho.sourceforge.io/) - Windows

## Estrutura de Imagens Recomendada

```
public/images/
├── hero-athlete.jpg              (800x900px)
├── services/
│   ├── weight-loss.jpg
│   ├── muscle-gain.jpg
│   ├── home-training.jpg
│   └── gym-plan.jpg
├── trainers/
│   ├── alex-rodriguez.jpg
│   ├── emma-wilson.jpg
│   ├── david-lee.jpg
│   └── jessica-brown.jpg
├── testimonials/
│   ├── john-smith.jpg
│   ├── sarah-johnson.jpg
│   └── mike-davis.jpg
└── blog/
    ├── post-1.jpg
    ├── post-2.jpg
    └── post-3.jpg
```

## Alterando Outras Imagens

Para mudar imagens em outras seções, edite os arquivos `.vue`:

### Services (`src/sections/Services.vue`)

```vue
<img src="/images/services/weight-loss.jpg" alt="Losing Weight" />
```

### Trainers (`src/sections/Trainers.vue`)

```vue
<img src="/images/trainers/alex-rodriguez.jpg" alt="Alex Rodriguez" />
```

### Blog (`src/sections/Blog.vue`)

```vue
<img :src="`/images/blog/${post.slug}.jpg`" :alt="post.title" />
```

## 📏 Dimensões Recomendadas

| Seção        | Largura | Altura | Proporção |
| ------------ | ------- | ------ | --------- |
| Hero         | 800     | 900    | 8:9       |
| Services     | 400     | 300    | 4:3       |
| Trainers     | 300     | 350    | 6:7       |
| Blog         | 600     | 400    | 3:2       |
| Testimonials | 100     | 100    | 1:1       |

## 🎨 Formatos Suportados

- **JPG/JPEG** - Recomendado para fotos (melhor compressão)
- **PNG** - Para imagens com transparência
- **WebP** - Formato moderno (melhor qualidade/tamanho)
- **GIF** - Animações (não recomendado para fotos)

## ⚡ Otimização de Performance

### Lazy Loading (já configurado)

```vue
<img src="/images/hero-athlete.jpg" loading="lazy" alt="Athlete" />
```

### Responsive Images

```vue
<img
  srcset="
    /images/hero-athlete-sm.jpg  480w,
    /images/hero-athlete-md.jpg  800w,
    /images/hero-athlete-lg.jpg 1200w
  "
  sizes="(max-width: 640px) 480px, 
         (max-width: 1024px) 800px, 
         1200px"
  src="/images/hero-athlete.jpg"
  alt="Athlete"
/>
```

## 🐛 Troubleshooting

### Imagem não aparece

1. Verifique o caminho: `/images/hero-athlete.jpg`
2. Confirme o nome do arquivo (case-sensitive no Linux/Mac)
3. Reinicie o servidor: `npm run dev`
4. Limpe cache: `Ctrl+Shift+Delete` (navegador)

### Imagem pixelada

- Aumentar resolução original
- Usar formato WebP
- Ajustar CSS: `object-fit: cover` (já configurado)

### Arquivo muito pesado

- Comprimir com TinyPNG
- Usar formato WebP
- Redimensionar para resolução necessária

## 📝 Checklist

- [ ] Imagem salva em `public/images/hero-athlete.jpg`
- [ ] Imagem tem < 500KB
- [ ] Resolução é 800x900px
- [ ] Servidor reiniciado (`npm run dev`)
- [ ] Imagem aparece corretamente no navegador
- [ ] Responsive em mobile

---

**Próximo passo**: Adicionar imagens para outras seções (Services, Trainers, Blog)
