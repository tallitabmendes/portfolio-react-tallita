# 🚀 Portfólio React na Vercel — Tallita Batista

**PARTE 2** da atividade acadêmica: migração do portfólio de HTML/CSS/JS para **React + Vite**.

## 📝 Sobre o Projeto

Portfólio desenvolvido com React e Vite, demonstrando domínio de:

- **Componentização** — 4 componentes modulares e reutilizáveis (Header, About, Projects, Footer)
- **Renderização dinâmica** — Array de objetos em `src/data/projects.js` renderizado com `.map()`
- **CSS Modules** — Estilização modular com escopo por componente
- **Responsividade** — Design mobile-first com adaptação para todos os dispositivos
- **Animações** — Efeito de typing, partículas animadas e scroll animations com Intersection Observer

## 🛠️ Tecnologias

- [React](https://react.dev/) 19
- [Vite](https://vitejs.dev/) 6
- CSS Modules
- JavaScript ES6+

## 📁 Estrutura de Arquivos

```
portfolio_react/
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navegação fixa com menu mobile
│   │   ├── About.jsx       # Seção Sobre Mim + card terminal
│   │   ├── Projects.jsx    # Renderização dinâmica dos projetos
│   │   └── Footer.jsx      # Rodapé com links sociais
│   ├── data/
│   │   └── projects.js     # Array de objetos dos projetos
│   ├── styles/
│   │   ├── Header.module.css
│   │   ├── About.module.css
│   │   ├── Projects.module.css
│   │   └── Footer.module.css
│   ├── App.jsx         # Componente principal
│   ├── App.css         # Estilos globais + Hero
│   └── main.jsx        # Ponto de entrada React
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## ⚙️ Instalação

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- npm (incluído com o Node.js)

### Passos

1. **Clone o repositório:**

```bash
git clone https://github.com/tallitabmendes/portfolio-react-tallita.git
cd portfolio-react
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Rode o servidor de desenvolvimento:**

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

## 📦 Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

Para pré-visualizar o build:

```bash
npm run preview
```

## 🌐 Deploy na Vercel

### Opção 1: Via GitHub (Recomendado)

1. Faça push do projeto para um repositório no GitHub
2. Acesse [vercel.com](https://vercel.com) e faça login com sua conta GitHub
3. Clique em **"New Project"**
4. Selecione o repositório `portfolio-react`
5. O Vite será detectado automaticamente — clique em **"Deploy"**
6. Pronto! Seu portfólio estará online em minutos

### Opção 2: Via CLI

```bash
npm install -g vercel
vercel
```

Siga as instruções interativas no terminal.

## 📱 Responsividade

| Dispositivo | Largura       |
|-------------|---------------|
| Mobile      | < 480px       |
| Tablet      | 480px – 768px |
| Desktop     | > 768px       |

## 👨‍💻 Autor

**Hélio Mendes**

- [GitHub](https://github.com/tallitabmendes)
- [LinkedIn](https://linkedin.com/in/tallitabmendes)

## 📄 Licença

Este projeto está sob a licença MIT.
