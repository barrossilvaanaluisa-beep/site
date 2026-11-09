const Bird = ({ className = "", stroke = "#FAF7EF" }) => (
  <svg viewBox="0 0 64 40" fill="none" className={className} aria-hidden="true">
    <path
      d="M4 30 C12 18 22 18 30 26 C38 14 50 14 60 22"
      stroke={stroke}
      strokeWidth="5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export { Bird };

export const LogoMark = ({ size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    aria-hidden="true"
    className="shrink-0"
  >
    <rect width="64" height="64" rx="16" fill="#1B4D3E" />
    <path d="M6 17 L58 10" stroke="#FAF7EF" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 17.4 L20 16.2 L16.5 26 Z" fill="#EAB308" />
    <path d="M27 15.3 L35 14.2 L31.5 24 Z" fill="#F97316" />
    <path d="M42 13.2 L50 12.2 L46.5 22 Z" fill="#FAF7EF" />
    <path
      d="M14 42 C19 35 26 35 31 41 C36 34 43 34 48 39"
      stroke="#FAF7EF"
      strokeWidth="3.2"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M28 54 C32 49 37 49 41 54 C45 48 50 48 53 52"
      stroke="#EAB308"
      strokeWidth="2.6"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

export const LogoWordmark = ({ dark = false, size = "md" }) => {
  const textSize =
    size === "lg" ? "text-2xl" : size === "sm" ? "text-sm" : "text-base";
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark size={size === "lg" ? 48 : size === "sm" ? 32 : 38} />
      <span className="leading-tight">
        <span
          className={`block font-display font-extrabold tracking-tight ${textSize} ${
            dark ? "text-forest" : "text-ivory"
          }`}
        >
          Campo dos Pássaros
        </span>
        {size === "lg" && (
          <span className="block font-mono text-[11px] uppercase tracking-[0.25em] text-sun mt-1">
            Festas & Eventos
          </span>
        )}
      </span>
    </span>
  );
};

export default Bird;
