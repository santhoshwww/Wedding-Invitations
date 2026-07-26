interface GaneshaIllustrationProps {
  className?: string;
}

/** A gentle, stylized illustration of Lord Ganesha seated on a lotus. */
export default function GaneshaIllustration({ className = "" }: GaneshaIllustrationProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      {/* halo */}
      <circle cx="100" cy="90" r="72" fill="#FFF3D6" opacity="0.7" />
      <circle cx="100" cy="90" r="72" fill="none" stroke="#D4AF37" strokeWidth="1.5" opacity="0.6" />

      {/* ears */}
      <ellipse cx="52" cy="86" rx="24" ry="30" fill="#7A1025" transform="rotate(-15 52 86)" />
      <ellipse cx="148" cy="86" rx="24" ry="30" fill="#7A1025" transform="rotate(15 148 86)" />

      {/* head */}
      <circle cx="100" cy="78" r="34" fill="#E9A857" />
      {/* crown */}
      <path d="M72 56 Q100 30 128 56 L122 62 Q100 46 78 62 Z" fill="#D4AF37" />
      <circle cx="100" cy="40" r="6" fill="#7A1025" />

      {/* trunk */}
      <path
        d="M92 96 Q84 130 100 150 Q112 158 108 168"
        fill="none"
        stroke="#C4823D"
        strokeWidth="12"
        strokeLinecap="round"
      />

      {/* eyes */}
      <circle cx="88" cy="76" r="3" fill="#3A2A1E" />
      <circle cx="112" cy="76" r="3" fill="#3A2A1E" />

      {/* belly */}
      <ellipse cx="100" cy="140" rx="40" ry="32" fill="#E9A857" />
      <path d="M100 112 Q112 140 100 168 Q88 140 100 112Z" fill="#C4823D" opacity="0.4" />

      {/* lotus seat */}
      <g transform="translate(100,178)">
        {[-60, -35, -12, 12, 35, 60].map((angle, i) => (
          <ellipse
            key={i}
            cx="0"
            cy="0"
            rx="10"
            ry="22"
            fill="#F7DDE6"
            stroke="#D4AF37"
            strokeWidth="1"
            transform={`rotate(${angle})`}
          />
        ))}
        <circle cx="0" cy="0" r="10" fill="#D4AF37" />
      </g>

      {/* modak / offering hand */}
      <circle cx="150" cy="120" r="8" fill="#D4AF37" />
    </svg>
  );
}
