import { motion } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1];

export const MaskedLine = ({ children, delay = 0, className = "" }) => (
  <span className={`block overflow-hidden ${className}`}>
    <motion.span
      className="block will-change-transform"
      initial={{ y: "115%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: EASE, delay }}
    >
      {children}
    </motion.span>
  </span>
);

export const Reveal = ({ children, delay = 0, y = 36, className = "", once = true }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once, amount: 0.15 }}
    transition={{ duration: 0.8, ease: EASE, delay }}
  >
    {children}
  </motion.div>
);

export const Eyebrow = ({ children, light = false }) => (
  <span
    className={`inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs uppercase tracking-[0.3em] ${
      light ? "text-sun" : "text-leaf"
    }`}
  >
    <span className={`h-1.5 w-1.5 rounded-full ${light ? "bg-sun" : "bg-flame"}`} />
    {children}
  </span>
);

export default Reveal;
