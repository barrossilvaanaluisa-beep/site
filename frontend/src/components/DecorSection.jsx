import { Reveal, Eyebrow } from "./Reveal";
import Bird from "./Logo";
import { REAL, WA_DECOR } from "../lib/site";
import { WhatsAppIcon } from "./Hero";

const STYLES = ["Aniversários", "Festas Infantis", "Casamentos ao ar livre", "Confraternizações"];

const DecorSection = () => (
  <section id="decoracao" data-testid="decor-section" className="relative overflow-hidden bg-sand py-20 sm:py-28">
    <Bird className="absolute -right-6 top-10 hidden h-16 w-32 opacity-15 lg:block" stroke="#1B4D3E" />
    <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
      <Reveal className="relative">
        <div className="relative overflow-hidden rounded-t-[10rem] rounded-b-[2.5rem] shadow-2xl shadow-forest/20">
          <img
            src={REAL.deco15}
            alt="Decoração real de festa de 15 anos com balões"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
        <div className="absolute -bottom-6 left-2 hidden -rotate-6 overflow-hidden rounded-2xl border-4 border-ivory shadow-xl sm:block lg:-left-8">
          <img
            src={REAL.chaBaby}
            alt="Decoração real de chá de bebê"
            loading="lazy"
            className="h-36 w-36 object-cover lg:h-44 lg:w-44"
          />
        </div>
        <div className="absolute -bottom-5 -right-2 rotate-3 rounded-2xl bg-forest px-5 py-4 shadow-xl sm:right-8">
          <span className="block font-display text-lg font-bold text-sun">Decoração</span>
          <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-ivory/80">
            serviço à parte
          </span>
        </div>
        <div className="absolute -left-3 top-8 -rotate-6 rounded-xl bg-flame px-4 py-3 shadow-lg sm:-left-6">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ivory">
            festa linda, dia inesquecível
          </span>
        </div>
      </Reveal>

      <div>
        <Reveal>
          <Eyebrow>Decoração</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            O espaço ainda ganha{" "}
            <span className="text-flame">decoração</span> para sua festa
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            Quer deixar tudo ainda mais especial? O Campo dos Pássaros conta
            com serviço de decoração que transforma o ambiente no clima exato
            da sua comemoração. Fica com valor à parte — fale com a gente para
            combinar cada detalhe.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {STYLES.map((s) => (
              <span
                key={s}
                className="rounded-full border border-forest/20 bg-ivory px-4 py-2 text-xs font-semibold uppercase tracking-wider text-forest"
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <a
            data-testid="decor-whatsapp-cta"
            href={WA_DECOR}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-forest px-8 py-4 text-sm font-bold uppercase tracking-wider text-ivory transition-all duration-300 hover:scale-[1.03] hover:bg-flame"
          >
            <WhatsAppIcon size={18} />
            Quero decoração na minha festa
          </a>
        </Reveal>
      </div>
    </div>
  </section>
);

export default DecorSection;
