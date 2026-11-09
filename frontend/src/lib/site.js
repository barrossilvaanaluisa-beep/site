export const WHATSAPP_NUMBER = "5562322242604";
export const WHATSAPP_DISPLAY = "+55 62 32224-2604";
export const INSTAGRAM_URL = "https://www.instagram.com/campodospassaros/";
export const INSTAGRAM_HANDLE = "@campodospassaros";
export const ADDRESS = "Avenida das Pirâmides, Novo Mundo — Saída para Senador Canedo";
export const HOURS = "Visitas e agendamentos: 6h às 22h";

export const waLink = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const WA_DEFAULT = waLink(
  "Olá! Vim pelo site do Campo dos Pássaros e gostaria de saber os valores e a disponibilidade para festas e eventos."
);
export const WA_DECOR = waLink(
  "Olá! Gostaria de saber mais sobre o serviço de decoração (valor à parte) para eventos no Campo dos Pássaros."
);
export const WA_VISIT = waLink(
  "Olá! Gostaria de agendar uma visita ao Campo dos Pássaros. Vi que as visitas são das 6h às 22h."
);

const img = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  hero: img("photo-1621112904939-e259ddb99cff", 2000),
  soccer: img("photo-1632684363781-c82fe0e357c8"),
  soccerAction: img("photo-1574629810360-7efbbe195018"),
  pool: img("flagged/photo-1578467992042-7e2e9650cfbb"),
  poolVenue: img("photo-1775478944424-b04df3f01556"),
  bbq: img("photo-1780091606130-2bfc03991da6"),
  horse: img("photo-1782852685311-d192151e5ad1"),
  horseTwo: img("photo-1671326174235-c2198f6c8e71"),
  trees: img("photo-1599685315640-9ceab2f58148"),
  forestPath: img("photo-1699771913117-a747414bafd2"),
  balloons: img("photo-1530104091755-015d31dfa0b9"),
  balloonsTwo: img("photo-1575252663512-b25714ec27f9"),
  decorVenue: img("photo-1779816077360-015f74db32ff"),
  lights: img("photo-1522520631841-82ac1da7d859"),
};

export const GALLERY = [
  { src: IMAGES.hero, caption: "Noites iluminadas", tall: true },
  { src: IMAGES.soccer, caption: "Campo Society" },
  { src: IMAGES.pool, caption: "Piscina Infantil" },
  { src: IMAGES.bbq, caption: "Churrasqueira" },
  { src: IMAGES.horse, caption: "Os Cavalos", tall: true },
  { src: IMAGES.balloons, caption: "Decoração" },
  { src: IMAGES.forestPath, caption: "Área Arborizada" },
  { src: IMAGES.poolVenue, caption: "Espaço de Lazer" },
  { src: IMAGES.decorVenue, caption: "Festas ao ar livre" },
];

export const REAL = {
  mangueira: "/photos/mangueira.jpg",
  natureza: "/photos/natureza_crop.jpg",
  deco15: "/photos/deco_real.jpg",
  campoNoite: "/photos/campo_noite.jpg",
  chaBaby: "/photos/cha_baby.jpg",
};

export const REAL_EVENTS = [
  { src: REAL.chaBaby, caption: "Chá de Bebê", tag: "Decoração real" },
  { src: REAL.deco15, caption: "Festa de 15 Anos", tag: "Palco de balões" },
  { src: REAL.campoNoite, caption: "Jogo noturno no campo", tag: "Campo Society" },
  { src: REAL.natureza, caption: "Encontros com a natureza", tag: "Momento real" },
  { src: REAL.mangueira, caption: "A grande mangueira", tag: "Área arborizada" },
];

export const GMAPS_ROUTE =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent("Avenida das Pirâmides, Novo Mundo, Goiânia - GO");
export const WAZE_ROUTE =
  "https://waze.com/ul?q=" +
  encodeURIComponent("Avenida das Pirâmides, Novo Mundo, Goiânia - GO") +
  "&navigate=yes";
