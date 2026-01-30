# 🎨 Guia de Personalização do Portfolio - Leonardo Alves Braz

## ✅ Já Adaptado

### 1. Configurações Pessoais (`src/data/config.ts`)
- ✅ Nome: Leonardo Alves Braz
- ✅ Email: leonardoalves@alu.ufc.br
- ✅ LinkedIn e GitHub atualizados
- ✅ Descrição profissional adaptada
- ✅ Keywords de SEO personalizadas

### 2. Skills/Tecnologias (`src/data/constants.ts`)
- ✅ Adicionadas suas tecnologias:
  - Python, C, C++, Java
  - TensorFlow, OpenCV
  - Flutter, Dart
  - Arduino, Raspberry Pi, FPGA
  - LaTeX, Git, GitHub
  - React, Next.js, Tailwind, etc.

### 3. Projetos (`src/data/projects.tsx`)
- ✅ AquaGuard - Mobile
- ✅ App Interface Flutter
- ✅ Projeto Embarca Tech
- ✅ Processamento de Imagens Médicas
- ✅ Cidade Inteligente - IoT

## 📸 Próximos Passos - Imagens

### Estrutura de Pastas para Screenshots dos Projetos

Você precisa adicionar screenshots dos seus projetos nas seguintes pastas:

```
public/assets/projects-screenshots/
├── aquaguard/
│   └── landing.png
├── flutterapp/
│   └── landing.png
├── embarcatech/
│   └── landing.png
├── processamento/
│   └── landing.png
└── cidadeinteligente/
    └── landing.png
```

### Imagens Importantes para Substituir

1. **Foto de Perfil**
   - Caminho: `public/assets/me.jpg`
   - Substitua pela sua foto

2. **Imagem de SEO/Open Graph**
   - Caminho: `public/assets/seo/og-image.png`
   - Dimensões recomendadas: 1200x630px
   - Será exibida ao compartilhar no LinkedIn, Twitter, etc.

3. **Logo**
   - Caminho: `public/assets/logo-dark.svg`
   - Pode criar um logo personalizado ou usar suas iniciais "LAB"

4. **Screenshots de Navegação**
   - Pasta: `public/assets/nav-link-previews/`
   - Você pode tirar prints das suas páginas depois de rodar o projeto

## 🚀 Como Executar o Portfolio

1. **Instalar Dependências**
   ```bash
   cd 3D-interactive-portfolio-main
   npm install
   ```

2. **Configurar Variável de Ambiente (Resend API - opcional)**
   - Crie um arquivo `.env.local` na raiz
   - Adicione: `RESEND_API_KEY=sua_chave_aqui`
   - (Opcional, apenas se quiser o formulário de contato funcionando)

3. **Rodar em Desenvolvimento**
   ```bash
   npm run dev
   ```
   - Acesse: http://localhost:3000

4. **Build para Produção**
   ```bash
   npm run build
   npm start
   ```

## 🎨 Personalizações Adicionais (Opcionais)

### Mudar Cores do Tema
- Arquivo: `tailwind.config.ts`
- Personalize as cores do tema light/dark

### Modificar Animações
- As animações 3D estão em arquivos `.spline`
- Para editar, use: https://spline.design/

### Adicionar Mais Projetos
- Edite: `src/data/projects.tsx`
- Siga o mesmo padrão dos projetos já criados

### Modificar Seções
- `src/app/page.tsx` - Página principal
- `src/app/projects/page.tsx` - Página de projetos
- `src/app/contact/page.tsx` - Página de contato

## 📝 Dicas

1. **Screenshots dos Projetos**: Tire prints dos seus projetos rodando ou use mockups
2. **Dimensões Recomendadas**: 1920x1080px para screenshots principais
3. **Formatos**: PNG para qualidade, JPEG para arquivos menores
4. **GIFs**: Considere criar GIFs animados mostrando funcionalidades dos projetos

## 🌐 Deploy (Quando Estiver Pronto)

### Opção 1: Vercel (Recomendado)
```bash
npm install -g vercel
vercel login
vercel
```

### Opção 2: Netlify
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

## ✨ Observações Importantes

- O portfolio usa Next.js 14 com App Router
- Inclui animações 3D com Spline
- Usa GSAP e Framer Motion para animações
- Totalmente responsivo para mobile e desktop
- Tema dark/light suportado

---

**Seu portfolio está 90% personalizado!**  
Agora é só adicionar as imagens e rodar o projeto. 🚀

Se precisar de ajuda com qualquer passo, estou aqui! 👨‍💻
