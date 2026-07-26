interface TempleSkylineProps {
  className?: string;
}

/**
 * A Tirumala-inspired temple gopuram skyline, rendered as soft layered
 * silhouettes to suggest watercolor depth without needing raster assets.
 */
export default function TempleSkyline({ className = "" }: TempleSkylineProps) {
  return (
    <svg
      viewBox="0 0 1200 260"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {/* far hills */}
      <path d="M0 200 Q200 140 400 190 T800 180 T1200 200 V260 H0 Z" fill="#5B3B26" opacity="0.18" />

      {/* left gopuram */}
      <g opacity="0.5">
        <Gopuram x={70} scale={1} />
      </g>
      {/* center main gopuram, larger */}
      <g opacity="0.75">
        <Gopuram x={520} scale={1.5} />
      </g>
      {/* right gopuram */}
      <g opacity="0.5">
        <Gopuram x={980} scale={1.1} />
      </g>

      {/* near ground line */}
      <path d="M0 240 Q300 210 600 235 T1200 225 V260 H0 Z" fill="#5B3B26" opacity="0.35" />
    </svg>
  );
}

function Gopuram({ x, scale }: { x: number; scale: number }) {
  return (
    <g transform={`translate(${x},0) scale(${scale})`}>
      <polygon points="60,10 78,45 70,45 90,75 78,75 100,105 20,105 42,75 30,75 50,45 42,45" fill="#5B3B26" />
      <rect x="20" y="105" width="80" height="70" fill="#5B3B26" />
      <rect x="5" y="170" width="110" height="14" fill="#5B3B26" />
      {Array.from({ length: 4 }).map((_, i) => (
        <circle key={i} cx={38 + i * 15} cy="55" r="2.2" fill="#D4AF37" opacity="0.8" />
      ))}
    </g>
  );
}
