import { Instagram } from "lucide-react";
import { LogoMark, Bird } from "./Logo";
import { scrollToId } from "./Navbar";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, WHATSAPP_DISPLAY, ADDRESS } from "../lib/site";

const LINKS = [
  { id: "espaco", label: "O Espaço" },
  { id: "decoracao", label: "Decoração" },
  { id: "galeria", label: "Galeria" },
  { id: "horarios", label: "Horários" },
  { id: "localizacao", label: "Localização" },
];

const Footer = () => (
  <footer data-testid="footer" className="relative overflow-hidden bg-ink pb-10 pt-16 sm:pt-20">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-sm">
          <span className="flex items-center gap-3">
            <LogoMark size={44} />
            <span className="font-display text-xl font-extrabold tracking-tight text-ivory">
              Campo dos Pássaros
            </span>
          </span>
          <p className="mt-4 text-sm leading-relaxed text-ivory/60">
            Espaço para festas e eventos em Novo Mundo, saída para Senador
            Canedo. Festas, comemorações e momentos inesquecíveis.
          </p>
          <a
            data-testid="footer-instagram-link"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-ivory/20 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-ivory transition-all duration-300 hover:border-sun hover:text-sun"
          >
            <Instagram size={15} /> {INSTAGRAM_HANDLE}
          </a>
        </div>

        <nav className="flex flex-col gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ivory/40">
            Navegue
          </span>
          {LINKS.map((l) => (
            <button
              key={l.id}
              data-testid={`footer-link-${l.id}`}
              onClick={() => scrollToId(l.id)}
              className="text-left text-sm font-semibold text-ivory/70 transition-colors hover:text-sun"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ivory/40">
            Contato
          </span>
          <span className="font-mono text-sm text-ivory/80">{WHATSAPP_DISPLAY}</span>
          <span className="max-w-[240px] text-sm leading-relaxed text-ivory/60">
            {ADDRESS}
          </span>
          <span className="font-mono text-xs text-ivory/60">Visitas: 6h às 22h</span>
        </div>
      </div>

      <div className="mt-14 select-none overflow-hidden" aria-hidden="true">
        <span className="block whitespace-nowrap font-display text-[11.5vw] font-extrabold uppercase leading-none tracking-tight text-ivory/[0.06]">
          Campo dos Pássaros
        </span>
      </div>

      <div className="mt-6 flex flex-col items-start justify-between gap-3 border-t border-ivory/10 pt-6 sm:flex-row sm:items-center">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ivory/40">
          © {new Date().getFullYear()} Campo dos Pássaros
        </span>
        <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ivory/40">
          Feito com carinho
          <Bird className="h-3.5 w-7" stroke="#EAB308" />
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
