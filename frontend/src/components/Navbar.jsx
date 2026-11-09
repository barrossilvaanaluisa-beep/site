import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Clock } from "lucide-react";
import { LogoWordmark } from "./Logo";
import { WA_VISIT, WHATSAPP_DISPLAY, HOURS } from "../lib/site";

const LINKS = [
  { id: "espaco", label: "O Espaço" },
  { id: "decoracao", label: "Decoração" },
  { id: "galeria", label: "Galeria" },
  { id: "horarios", label: "Horários" },
  { id: "localizacao", label: "Localização" },
];

export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -90 });
  else el.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), open ? 250 : 0);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6">
        <div
          data-testid="navbar"
          className={`mt-3 flex items-center justify-between gap-3 rounded-2xl px-4 py-2.5 transition-all duration-500 sm:rounded-full sm:px-5 ${
            scrolled
              ? "bg-forest/90 shadow-xl shadow-forest/20 backdrop-blur-xl"
              : "bg-forest/40 backdrop-blur-md"
          }`}
        >
          <button
            data-testid="nav-logo-button"
            onClick={() => window.__lenis ? window.__lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Voltar ao topo"
          >
            <LogoWordmark size="sm" />
          </button>

          <nav className="hidden items-center gap-6 lg:flex">
            {LINKS.map((l) => (
              <button
                key={l.id}
                data-testid={`nav-link-${l.id}`}
                onClick={() => go(l.id)}
                className="text-[13px] font-semibold uppercase tracking-widest text-ivory/80 transition-colors hover:text-sun"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <span className="hidden items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-ivory/70 xl:flex">
              <Clock size={13} className="text-sun" /> {WHATSAPP_DISPLAY}
            </span>
            <a
              data-testid="whatsapp-nav"
              href={WA_VISIT}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full bg-sun px-5 py-2.5 text-[13px] font-bold uppercase tracking-wider text-forest transition-all duration-300 hover:bg-flame hover:text-ivory"
            >
              Agendar visita
            </a>
          </div>

          <button
            data-testid="nav-mobile-toggle"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-ivory/10 text-ivory lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="mt-2 flex flex-col gap-1 rounded-2xl bg-forest/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden"
            >
              {LINKS.map((l) => (
                <button
                  key={l.id}
                  data-testid={`nav-mobile-link-${l.id}`}
                  onClick={() => go(l.id)}
                  className="rounded-xl px-4 py-3 text-left text-sm font-semibold uppercase tracking-widest text-ivory/90 hover:bg-ivory/10"
                >
                  {l.label}
                </button>
              ))}
              <a
                data-testid="whatsapp-nav-mobile"
                href={WA_VISIT}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-xl bg-sun px-4 py-3 text-center text-sm font-bold uppercase tracking-wider text-forest"
              >
                Agendar visita
              </a>
              <span className="mt-2 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-ivory/60">
                {HOURS}
              </span>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
