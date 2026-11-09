import { Clock, MessageCircle, CalendarCheck, PartyPopper } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import { WA_VISIT } from "../lib/site";
import { WhatsAppIcon } from "./Hero";

const STEPS = [
  {
    icon: MessageCircle,
    title: "1. Chame no WhatsApp",
    desc: "Conte pra gente qual festa você quer realizar, para quando e quantas pessoas.",
  },
  {
    icon: CalendarCheck,
    title: "2. Agende sua visita",
    desc: "Visitas e agendamentos todos os dias, das 6h às 22h — você escolhe o melhor horário.",
  },
  {
    icon: PartyPopper,
    title: "3. Garanta sua data",
    desc: "Valores sob consulta direto no WhatsApp. Decoração pode entrar como serviço à parte.",
  },
];

const HoursSection = () => (
  <section id="horarios" data-testid="hours-section" className="relative overflow-hidden bg-forest py-20 sm:py-28">
    <div className="pointer-events-none absolute -left-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-sun/10 blur-3xl" />
    <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-flame/10 blur-3xl" />

    <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <Reveal>
            <Eyebrow light>Horários</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ivory sm:text-5xl">
              Das <span className="text-sun">6h</span> às{" "}
              <span className="text-sun">22h</span>, a festa começa aqui
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex items-center gap-5 rounded-3xl border border-ivory/15 bg-ivory/5 p-6 backdrop-blur-sm">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sun text-forest">
                <Clock size={26} />
              </span>
              <div>
                <span className="block font-mono text-2xl font-bold tracking-wider text-ivory sm:text-3xl">
                  06:00 — 22:00
                </span>
                <span className="mt-1 block font-mono text-[11px] uppercase tracking-[0.25em] text-ivory/60">
                  visitas e agendamentos
                </span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <a
              data-testid="hours-whatsapp-cta"
              href={WA_VISIT}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-sun px-8 py-4 text-sm font-bold uppercase tracking-wider text-forest transition-all duration-300 hover:scale-[1.03] hover:bg-flame hover:text-ivory"
            >
              <WhatsAppIcon size={18} />
              Agendar minha visita
            </a>
          </Reveal>
        </div>

        <div className="flex flex-col gap-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={0.15 * i}>
              <div
                data-testid={`booking-step-${i + 1}`}
                className="group flex items-start gap-5 rounded-3xl border border-ivory/12 bg-ivory/5 p-6 backdrop-blur-sm transition-all duration-500 hover:border-sun/40 hover:bg-ivory/10"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-flame/90 text-ivory transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                  <s.icon size={22} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ivory sm:text-xl">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ivory/70">
                    {s.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HoursSection;
