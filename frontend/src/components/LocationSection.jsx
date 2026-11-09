import { MapPin, Instagram, Clock, Navigation, Car } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import { ADDRESS, INSTAGRAM_URL, INSTAGRAM_HANDLE, WA_VISIT, HOURS, GMAPS_ROUTE, WAZE_ROUTE } from "../lib/site";
import { WhatsAppIcon } from "./Hero";

const MAP_SRC =
  "https://maps.google.com/maps?q=Avenida%20das%20Pir%C3%A2mides%2C%20Novo%20Mundo%2C%20Goi%C3%A2nia%20-%20GO&z=14&output=embed";

const LocationSection = () => (
  <section id="localizacao" data-testid="location-section" className="bg-ivory py-20 sm:py-28">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="mb-12">
        <Reveal>
          <Eyebrow>Localização</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Perto da cidade, <span className="text-leaf">longe da agitação</span>
          </h2>
        </Reveal>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="h-full">
          <div className="relative h-full min-h-[380px] overflow-hidden rounded-[2rem] shadow-lg shadow-forest/10">
            <iframe
              data-testid="location-map"
              title="Mapa — Campo dos Pássaros"
              src={MAP_SRC}
              className="absolute inset-0 h-full w-full border-0 grayscale-[35%] transition-all duration-700 hover:grayscale-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-forest px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ivory">
              Novo Mundo → Senador Canedo
            </span>
          </div>
        </Reveal>

        <div className="flex flex-col gap-4">
          <Reveal delay={0.1}>
            <div className="rounded-[2rem] bg-forest p-7 text-ivory sm:p-8">
              <MapPin size={26} className="text-sun" />
              <h3 className="mt-4 font-display text-2xl font-bold">Onde estamos</h3>
              <p className="mt-2 text-sm leading-relaxed text-ivory/80 sm:text-base">
                {ADDRESS}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-ivory/20 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ivory/75">
                <Clock size={12} className="text-sun" /> {HOURS}
              </span>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <a
                  data-testid="route-google-maps"
                  href={GMAPS_ROUTE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-sun px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-forest transition-all duration-300 hover:scale-[1.03] hover:bg-ivory"
                >
                  <Navigation size={15} /> Rota no Maps
                </a>
                <a
                  data-testid="route-waze"
                  href={WAZE_ROUTE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-ivory px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-forest transition-all duration-300 hover:scale-[1.03] hover:bg-flame hover:text-ivory"
                >
                  <Car size={15} /> Rota no Waze
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="flex-1">
            <div className="flex h-full flex-col justify-between rounded-[2rem] border border-forest/15 bg-sand p-7 sm:p-8">
              <div>
                <h3 className="font-display text-2xl font-bold text-ink">Fale com a gente</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Valores, disponibilidade e decoração: tudo direto pelo
                  WhatsApp. Siga também no Instagram para ver as festas.
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  data-testid="location-whatsapp-cta"
                  href={WA_VISIT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2.5 rounded-full bg-forest px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-ivory transition-all duration-300 hover:bg-leaf"
                >
                  <WhatsAppIcon size={16} /> WhatsApp
                </a>
                <a
                  data-testid="location-instagram-cta"
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-flame via-flame to-sun px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-ivory transition-all duration-300 hover:scale-[1.03]"
                >
                  <Instagram size={16} /> {INSTAGRAM_HANDLE}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default LocationSection;
