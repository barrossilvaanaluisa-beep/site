import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Clock, Sparkles } from "lucide-react";
import { MaskedLine, EASE } from "./Reveal";
import Bird from "./Logo";
import { IMAGES, WA_DEFAULT, HOURS } from "../lib/site";
import { scrollToId } from "./Navbar";

const WhatsAppIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

export { WhatsAppIcon };

const CHIPS = [
  "Campo Society",
  "Piscina Infantil",
  "Churrasqueira",
  "Área Arborizada",
  "Cavalos",
];

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section ref={ref} data-testid="hero" className="relative min-h-[100svh] overflow-hidden bg-ink">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="Festa ao ar livre sob luzes em meio às árvores"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/45 to-ink" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />

      {/* bunting pennants */}
      <motion.svg
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: EASE, delay: 1.1 }}
        viewBox="0 0 200 24"
        className="absolute top-0 left-0 w-full text-sun"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 2 Q100 14 200 2" stroke="#FAF7EF" strokeWidth="0.6" fill="none" opacity="0.7" />
        {[8, 24, 40, 56, 72, 88, 104, 120, 136, 152, 168, 184].map((x, i) => (
          <path
            key={x}
            d={`M${x} ${3 + Math.sin((x / 200) * Math.PI) * 5} l6 0 l-3 8 z`}
            fill={["#EAB308", "#F97316", "#FAF7EF", "#2E7D32"][i % 4]}
            opacity="0.95"
          />
        ))}
      </motion.svg>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-14 pt-32 sm:px-8 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.35 }}
          className="mb-6 flex"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-ivory/25 bg-ivory/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-ivory backdrop-blur-md sm:text-[11px]">
            <Clock size={13} className="text-sun" /> {HOURS}
          </span>
        </motion.div>

        <h1 className="font-display text-[13.5vw] font-extrabold leading-[0.95] tracking-tight text-ivory sm:text-7xl lg:text-8xl">
          <MaskedLine delay={0.45}>Onde as festas</MaskedLine>
          <MaskedLine delay={0.58}>
            ganham{" "}
            <em className="not-italic text-sun">
              asas
              <Bird className="ml-3 inline-block h-[0.62em] w-auto align-baseline" stroke="#F97316" />
            </em>
          </MaskedLine>
        </h1>

        <div className="mt-7 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.85 }}
            className="max-w-xl text-base leading-relaxed text-ivory/85 sm:text-lg"
          >
            Campo society, piscina, churrasqueira, cavalos e muita área
            arborizada na saída para Senador Canedo. O cenário completo para
            festas e eventos inesquecíveis — com decoração especial à parte.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 1 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              data-testid="whatsapp-hero-button"
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-full bg-sun px-7 py-4 text-sm font-bold uppercase tracking-wider text-forest transition-all duration-300 hover:scale-[1.03] hover:bg-flame hover:text-ivory"
            >
              <WhatsAppIcon size={19} />
              Pedir orçamento
            </a>
            <button
              data-testid="hero-explore-button"
              onClick={() => scrollToId("espaco")}
              className="flex items-center gap-2 rounded-full border border-ivory/30 px-7 py-4 text-sm font-bold uppercase tracking-wider text-ivory backdrop-blur-sm transition-all duration-300 hover:border-sun hover:text-sun"
            >
              <Sparkles size={17} /> Conhecer o espaço
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-ivory/15 pt-5"
        >
          {CHIPS.map((c) => (
            <span
              key={c}
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-ivory/55 sm:text-[11px]"
            >
              {c}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
