import { motion } from "framer-motion";
import { WhatsAppIcon } from "./Hero";
import { WA_DEFAULT } from "../lib/site";

const WhatsAppFloat = () => (
  <motion.a
    data-testid="whatsapp-float-button"
    href={WA_DEFAULT}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar no WhatsApp"
    initial={{ opacity: 0, scale: 0, y: 24 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ delay: 2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className="group fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/25 transition-transform duration-300 hover:scale-110 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
  >
    <span className="absolute inline-flex h-full w-full animate-[ping-slow_2.2s_ease-out_infinite] rounded-full bg-[#25D366]/50" />
    <span className="relative">
      <WhatsAppIcon size={28} />
    </span>
    <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-ink px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ivory opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block">
      Fale conosco
    </span>
  </motion.a>
);

export default WhatsAppFloat;
