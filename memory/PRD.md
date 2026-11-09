# PRD — Campo dos Pássaros (Landing Page de Eventos)

## Problema original (statement do usuário)
Criar um site profissional para o espaço de festas "Campo dos Pássaros" (Instagram @campodospassaros). Deve conter: WhatsApp 55 62 322242604; comodidades (Campo Society, Churrasqueira, Cavalo, Cozinha, Espaço de Lazer, Piscina Infantil, Área Arborizada, Ambiente Tranquilo); foco em festas e eventos; decoração com valor à parte; visitas e agendamentos das 6h às 22h; local: Avenida das Pirâmides, Novo Mundo, saída para Senador Canedo. Fotos de referência enviadas via Instagram (bloqueado para scraping — substituído por fotografia de stock coerente).

## Escolhas do usuário (ask_human)
- Site de página única
- Botão de WhatsApp abrindo conversa direta (sem formulário)
- Estilo festivo e colorido
- Sem preços no site — valores somente via WhatsApp

## Arquitetura
- Frontend: React (CRA + craco) + Tailwind + framer-motion 11 + lenis 1.3 (smooth scroll)
- Single page: App.js compõe Navbar, Hero (parallax + reveal mascarado), Marquee editorial, Bento de comodidades (9 tiles), Seção Decoração, Galeria com lightbox, Seção Horários (6h–22h + passos de agendamento), Localização (Google Maps embed) e Footer; botão flutuante de WhatsApp
- Sem backend/DB: site institucional estático; backend template intocado
- Identidade: logo SVG próprio (flâmulas + dois pássaros), favicon.svg, paleta verde-floresta/amarelo-sol/coral/marfim, fontes Outfit + Plus Jakarta Sans + Space Mono

## Requisitos de conteúdo (estáticos, exibidos exatamente como informado)
- WhatsApp: +55 62 32224-2604 (wa.me/5562322242604) com mensagens pré-preenchidas (orçamento, visita, decoração)
- 8 comodidades + decoração à parte
- Visitas e agendamentos: 6h às 22h
- Endereço: Avenida das Pirâmides, Novo Mundo — Saída para Senador Canedo
- Instagram: @campodospassaros

## Implementado (2026-11-09)
- Hero kinetic com parallax, flâmulas festivas e badge de horário
- Marquee editorial lento com pássaros divisores
- Bento assimétrico com as 8 comodidades + tile CTA decoração
- Seção decoração (valor à parte) com CTA próprio
- Galeria masonry (9 fotos, sem imagens quebradas) com lightbox
- Seção horários com passo a passo de agendamento
- Localização com mapa embed e cards de contato
- Footer editorial + botão flutuante de WhatsApp com pulso
- data-testids em todos os elementos interativos

## Verificação
- Desktop 1440px e mobile 390px: sem overflow-x, imagens ok, lightbox ok
- CTA de WhatsApp apontam para wa.me com texto pré-preenchido (clique abre conversa)

## Backlog / P0-P2
- P0: (nenhum — site completo para lançamento)
- P1: fotos reais do espaço (substituir stock) — enviar fotos e substituir URLs
- P1: integrar WhatsApp Business API para lead tracking (opcional)
- P2: versão EN/ES, SEO local com schema.org EventPlace, mapa com rota exata
