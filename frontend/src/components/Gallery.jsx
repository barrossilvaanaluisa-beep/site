import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Reveal, Eyebrow, EASE } from "./Reveal";
import { GALLERY } from "../lib/site";

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
              Luzes, natureza e muita festa. Toque nas fotos para ver de perto
              o que espera pelo seu convidados.
            </p>
          </Reveal>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {GALLERY.map((g, i) => (
            <motion.button
              key={g.src}
              data-testid={`gallery-item-${i}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: EASE, delay: (i % 3) * 0.08 }}
              onClick={() => setSelected(g)}
              className="group relative block w-full overflow-hidden rounded-[1.75rem]"
            >
              <img
                src={g.src}
                alt={g.caption}
                loading="lazy"
                className={`w-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
                  g.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 rounded-full bg-ivory/90 px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-forest backdrop-blur-sm">
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
