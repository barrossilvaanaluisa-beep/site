import { motion } from "framer-motion";
import {
  ChefHat,
  PartyPopper,
  Leaf,
  ArrowUpRight,
  Waves,
  Flame,
  Trees,
  Wind,
} from "lucide-react";
import { GiHorseHead } from "react-icons/gi";
import { Reveal, Eyebrow, EASE } from "./Reveal";
import { REAL, WA_DEFAULT } from "../lib/site";
import { WhatsAppIcon } from "./Hero";

const amenities = [
  {
    id: "campo-society",
    title: "Campo Society",
    desc: "O gramado iluminado para jogar bola e animar a festa até a noite.",
    img: REAL.campoNoite,
  },
  {
    id: "piscina-infantil",
    title: "Piscina Infantil",
    desc: "Diversão segura para os pequenos no dia do evento.",
    icon: Waves,
    bg: "bg-sun text-forest",
  },
  {
    id: "churrasqueira",
    title: "Churrasqueira",
    desc: "Estrutura completa para o churrasco que todo mundo ama.",
    icon: Flame,
    bg: "bg-coral text-ivory",
  },
  {
    id: "cozinha",
    title: "Cozinha",
    desc: "Espaço prático de apoio para buffet e preparo das delícias da festa.",
    icon: ChefHat,
    bg: "bg-sand text-forest border border-forest/15",
  },
  {
    id: "cavalo",
    title: "Cavalos",
    desc: "Encanto rural que transforma qualquer festa em lembrança inesquecível.",
    icon: GiHorseHead,
    bg: "bg-forest text-ivory",
  },
  {
    id: "espaco-lazer",
    title: "Espaço de Lazer",
    desc: "Momentos ao ar livre que as crianças não esquecem nunca.",
    img: REAL.natureza,
  },
  {
    id: "area-arborizada",
    title: "Área Arborizada",
    desc: "Sombra natural, ar puro e brisa fresca o dia inteiro.",
    icon: Trees,
    bg: "bg-leaf text-ivory",
  },
  {
    id: "ambiente-tranquilo",
    title: "Ambiente Tranquilo",
    desc: "Privacidade e sossego, longe do corre-corre da cidade.",
    icon: Wind,
    bg: "bg-emerald text-ivory",
  },
  {
    id: "decoracao-cta",
    title: "Decoração à parte",
    desc: "Temos o serviço que deixa o espaço com a cara da sua festa.",
    icon: ArrowUpRight,
    bg: "bg-ink text-ivory",
    link: "#decoracao",
  },
];

const scrollToDecor = (e) => {
  e.preventDefault();
  const el = document.getElementById("decoracao");
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -90 });
  else el.scrollIntoView({ behavior: "smooth" });
};

const Amenities = () => (
  <section id="espaco" data-testid="amenities-section" className="relative bg-ivory py-20 sm:py-28">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Reveal>
            <Eyebrow>O espaço</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              Tudo para a sua festa,{" "}
              <span className="text-leaf">em um só lugar</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <p className="max-w-sm text-base leading-relaxed text-slate-600">
            Uma estrutura pensada nos mínimos detalhes para receber festas,
            aniversários, confraternizações e eventos em geral.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:auto-rows-fr">
        {amenities.map((a, i) => {
          const inner = a.img ? (
            <div className="group relative h-full w-full overflow-hidden">
              <img
                src={a.img}
                alt={a.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <h3 className="font-display text-xl font-bold text-ivory sm:text-2xl">
                  {a.title}
                </h3>
                <p className="mt-1 max-w-md text-sm leading-relaxed text-ivory/80">
                  {a.desc}
                </p>
              </div>
            </div>
          ) : (
            <div
              className={`group relative flex h-full w-full flex-col justify-between p-5 sm:p-6 ${a.bg}`}
            >
              <a.icon
                size={34}
                strokeWidth={a.icon === GiHorseHead ? 1 : 1.6}
                className="transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
              />
              <div>
                <h3 className="font-display text-xl font-bold sm:text-2xl">{a.title}</h3>
                <p className="mt-1 text-sm leading-relaxed opacity-80">{a.desc}</p>
              </div>
              {a.link && (
                <a
                  data-testid="amenity-decor-link"
                  href={a.link}
                  onClick={scrollToDecor}
                  className="absolute inset-0"
                  aria-label="Ver decoração"
                />
              )}
            </div>
          );

          return (
            <motion.div
              key={a.id}
              data-testid={`amenity-card-${a.id}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: EASE, delay: (i % 3) * 0.08 }}
              className="h-64 rounded-[1.75rem] shadow-sm transition-shadow duration-500 hover:shadow-xl hover:shadow-forest/15 lg:col-span-2"
            >
              {inner}
            </motion.div>
          );
        })}
      </div>

      <Reveal delay={0.15} className="mt-10 flex justify-center">
        <a
          data-testid="amenities-whatsapp-cta"
          href={WA_DEFAULT}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-full bg-forest px-8 py-4 text-sm font-bold uppercase tracking-wider text-ivory transition-all duration-300 hover:bg-leaf"
        >
          <WhatsAppIcon size={18} />
          Consultar valores pelo WhatsApp
        </a>
      </Reveal>
    </div>
  </section>
);

export default Amenities;
