import Bird from "./Logo";

const ITEMS = [
  "Festas e Eventos",
  "Campo Society",
  "Piscina Infantil",
  "Área Arborizada",
  "Churrasqueira",
  "Cavalos",
  "Decoração Especial",
  "Ambiente Tranquilo",
];

const Marquee = () => (
  <section
    data-testid="marquee"
    aria-label="Diferenciais do espaço"
    className="relative overflow-hidden border-y-4 border-ink bg-forest py-5 sm:py-7"
  >
    <div className="flex w-max animate-marquee items-center gap-8 pr-8 sm:gap-12 sm:pr-12">
      {[0, 1].map((copy) => (
        <div key={copy} className="flex items-center gap-8 sm:gap-12" aria-hidden={copy === 1}>
          {ITEMS.map((item, i) => (
            <span key={item} className="flex items-center gap-8 sm:gap-12">
              <span
                className={`whitespace-nowrap font-display text-2xl font-bold uppercase tracking-wide sm:text-4xl ${
                  i % 2 === 0 ? "text-ivory" : "text-sun"
                }`}
              >
                {item}
              </span>
              <Bird
                className="h-5 w-10 shrink-0 sm:h-6 sm:w-12"
                stroke={i % 2 === 0 ? "#F97316" : "#EAB308"}
              />
            </span>
          ))}
        </div>
      ))}
    </div>
  </section>
);

export default Marquee;
