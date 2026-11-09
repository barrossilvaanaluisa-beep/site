export const WHATSAPP_NUMBER = "556232242604";
export const WHATSAPP_DISPLAY = "+55 62 3224-2604";
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
