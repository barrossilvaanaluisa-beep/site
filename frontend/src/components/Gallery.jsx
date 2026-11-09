import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Reveal, Eyebrow, EASE } from "./Reveal";
import { REAL_EVENTS } from "../lib/site";

const Gallery = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="galeria" data-testid="gallery-section" className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal>
              <Eyebrow>Galeria</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
                Cada canto, uma{" "}
                <span className="text-flame">lembrança</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-base leading-relaxed text-slate-600">
              Fotos de verdade, das festas e dos momentos que já aconteceram
              aqui. Toque para ver de perto.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.25}>
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full bg-flame px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ivory">
              Festa real
            </span>
            <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
              Festas que já aconteceram aqui
            </h3>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
          {REAL_EVENTS.map((g, i) => (
            <motion.button
              key={g.src}
              data-testid={`real-event-${i}`}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.07 }}
              onClick={() => setSelected({ src: g.src, caption: g.caption })}
              className="group relative block w-full overflow-hidden rounded-[1.5rem]"
            >
              <img
                src={g.src}
                alt={g.caption}
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
              <span className="absolute left-3 top-3 rounded-full bg-flame px-2.5 py-1 font-mono text-[8px] font-bold uppercase tracking-[0.15em] text-ivory sm:text-[9px]">
                {g.tag}
              </span>
              <span className="absolute bottom-3 left-3 right-3 text-left font-display text-sm font-bold text-ivory sm:text-base">
                {g.caption}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            data-testid="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/90 p-5 backdrop-blur-md"
            onClick={() => setSelected(null)}
          >
            <motion.figure
              initial={{ scale: 0.92, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 12 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="relative max-h-[88vh] max-w-4xl"
            >
              <img
                src={selected.src}
                alt={selected.caption}
                className="max-h-[80vh] w-auto rounded-[2rem] object-contain shadow-2xl"
              />
              <figcaption className="mt-4 text-center font-mono text-xs uppercase tracking-[0.3em] text-ivory/80">
                {selected.caption} — Campo dos Pássaros
              </figcaption>
              <button
                data-testid="gallery-lightbox-close"
                aria-label="Fechar"
                className="absolute -top-3 -right-3 flex h-11 w-11 items-center justify-center rounded-full bg-flame text-ivory shadow-lg transition-transform hover:scale-110"
              >
                <X size={20} />
              </button>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
