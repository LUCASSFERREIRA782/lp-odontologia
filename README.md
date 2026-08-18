# LP Studio — Template de Landing Page

Cliente atual: **CEVO** (clínica odontológica — Vila Luzita, Santo André)

Este projeto é um template reutilizável, não uma landing page fixa para um único cliente. A estrutura foi pensada para atender qualquer pequeno/médio negócio local trocando apenas conteúdo e identidade visual.

## Estrutura do projeto

```
landing-page/
├── index.html
├── css/
│   ├── variables.css     → cores, fontes, espaçamentos (identidade visual)
│   ├── components.css    → botões, cards, badges
│   ├── style.css         → layout das seções
│   ├── animations.css    → keyframes e transições
│   └── responsive.css    → media queries
├── js/
│   ├── config.js         → TODO o conteúdo do site (único arquivo pra editar por cliente)
│   ├── script.js         → injeta o conteúdo de config.js no HTML
│   ├── gallery.js        → galeria + lightbox
│   ├── slider.js         → slider de avaliações
│   ├── animations.js     → scroll reveal
│   └── whatsapp.js       → botão flutuante de WhatsApp
├── assets/
│   ├── images/
│   ├── icons/
│   └── logos/
├── robots.txt
├── manifest.json
└── sitemap.xml
```

## Como instalar / visualizar

Não precisa de build nem instalação. Basta abrir `index.html` num navegador — ou, melhor, servir a pasta com qualquer servidor estático (Live Server do VSCode, por exemplo) pra garantir que as fontes e os módulos JS carreguem corretamente.

## Como trocar de cliente (o mais importante)

1. Abra `js/config.js`.
2. Troque nome da empresa, slogan, contatos, redes sociais, horários, serviços, avaliações e textos de cada seção.
3. Troque as cores em `css/variables.css` (seção "Cores base" e "Cores de marca").
4. Substitua as imagens em `assets/images/` (a galeria hoje usa gradientes de placeholder — trocar por `<img>` real quando o cliente enviar fotos).
5. Pronto — nenhum outro arquivo precisa ser tocado pra uma troca básica de cliente.

## Como editar cores

Todas as cores vivem em `css/variables.css`, nas variáveis `--color-*`. Alterar ali muda o site inteiro, incluindo o gradiente de marca (`--gradient-smile`), sem precisar mexer em nenhum outro CSS.

## Como editar serviços

No array `servicos` dentro de `config.js`. Cada item vira automaticamente um card na seção "Serviços" — não precisa editar HTML.

## Como editar contatos / WhatsApp

No objeto `contato` em `config.js`. O número de WhatsApp (`whatsapp`) é usado em todos os botões do site automaticamente.

## Como reutilizar para outro nicho

O template não depende de nada específico de salão — troque os textos de `config.js` (serviços, sobre, diferenciais) pelo conteúdo do novo nicho (barbearia, salão, restaurante etc.) e ajuste a paleta em `variables.css` pra combinar com a nova identidade visual.

## Tecnologias

HTML5, CSS3 e JavaScript puro (ES6+). Sem frameworks, sem dependências externas — apenas as fontes do Google Fonts (Syne, Manrope, Space Grotesk).
