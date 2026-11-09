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

## Implementado (2026-11-09 — 3ª rodada, só fotos reais)
- Removidas TODAS as imagens de banco (Unsplash) do site — verificado: 0 imagens externas
- Hero redesenhado: fundo gráfico festivo (brilhos, flâmulas) + colagem apenas com fotos reais (mangueira + campo society à noite) e selo 6h-22h; no mobile, faixa de fotos reais abaixo dos CTAs
- Bento das comodidades: cards com fotos reais (Campo Society à noite, Espaço de Lazer) + cards de ícone (Piscina, Churrasqueira, Cozinha, Cavalos com ícone de cavalo do react-icons/gi, Área Arborizada, Ambiente Tranquilo, Decoração)
- Galeria exibe exclusivamente as 5 fotos reais com legendas + lightbox
- WhatsApp corrigido conforme instrução do usuário: +55 62 3224-2604 (wa.me/556232242604) — OBS: o flyer enviado mostrava "(62) 3324-2604"; usado o número do último pedido do usuário
- react-icons adicionado para ícone de cavalo (GiHorseHead)

## Implementado (2026-11-09 — 2ª rodada, fotos reais)
- Galeria "Festas que já aconteceram aqui" com 5 fotos reais enviadas pelo cliente e legendas (Chá de Bebê, Festa de 15 Anos, Jogo noturno no campo, Encontros com a natureza, A grande mangueira)
- Fotos dos flyers recortadas sem exibir preços (preços ficam só no WhatsApp, conforme escolha do usuário)
- Setas do print de vídeo removidas via crop
- Seção Decoração agora usa a foto real do palco de balões (15 anos) + card colado do chá de bebê
- Card "Área Arborizada" do bento usa a foto real da mangueira
- Botões de rota em 1 toque: "Rota no Maps" (Google Maps directions) e "Rota no Waze" (waze.com/ul navigate) no card "Onde estamos"
- Arquivos reais em /app/frontend/public/photos/ (mangueira, cha_baby, natureza_crop, deco_real, campo_noite)

## Verificação
- Desktop 1440px e mobile 390px: sem overflow-x, imagens ok, lightbox ok
- CTA de WhatsApp apontam para wa.me com texto pré-preenchido (clique abre conversa)

## Backlog / P0-P2
- P0: (nenhum — site completo para lançamento)
- P1: fotos reais do espaço (substituir stock) — enviar fotos e substituir URLs
- P1: integrar WhatsApp Business API para lead tracking (opcional)
- P2: versão EN/ES, SEO local com schema.org EventPlace, mapa com rota exata
