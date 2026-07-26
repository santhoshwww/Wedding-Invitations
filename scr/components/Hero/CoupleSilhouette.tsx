interface CoupleSilhouetteProps {
  className?: string;
}

/**
 * Illustrated bride and groom, viewed from behind, hand in hand,
 * facing the temple sunrise. Bride in a pastel pink saree, groom in
 * ivory traditional attire. No faces are depicted, in keeping with
 * an elegant, illustration-first invitation style.
 */
export default function CoupleSilhouette({ className = "" }: CoupleSilhouetteProps) {
  return (
    <svg
      viewBox="0 0 300 340"
      className={className}
      fill="none"
      aria-hidden="true"
      style={{ filter: "drop-shadow(0 12px 20px rgba(91,59,38,0.18))" }}
    >
      {/* Groom - ivory attire */}
      <g transform="translate(70,40)">
        <ellipse cx="30" cy="18" rx="16" ry="18" fill="#3A2A1E" />
        <path
          d="M30 34 C4 40 -6 90 0 180 C2 210 58 210 60 180 C66 90 56 40 30 34Z"
          fill="#FBF3E4"
          stroke="#E9CE7C"
          strokeWidth="1.5"
        />
        <path d="M14 60 L14 175" stroke="#D4AF37" strokeWidth="1.2" opacity="0.5" />
        <path d="M46 60 L46 175" stroke="#D4AF37" strokeWidth="1.2" opacity="0.5" />
      </g>

      {/* Bride - pastel pink saree, hair with flowers */}
      <g transform="translate(150,32)">
        <ellipse cx="34" cy="20" rx="17" ry="19" fill="#3A2A1E" />
        <path
          d="M34 6 C50 10 54 24 34 40 C14 24 18 10 34 6Z"
          fill="#3A2A1E"
        />
        {/* braid with flowers */}
        <path d="M34 34 C30 90 30 150 36 200" stroke="#3A2A1E" strokeWidth="10" strokeLinecap="round" />
        {[50, 90, 130, 170].map((y, i) => (
          <circle key={i} cx={35 + (i % 2 === 0 ? -3 : 3)} cy={y} r="4.5" fill="#F7DDE6" stroke="#D4AF37" strokeWidth="0.6" />
        ))}
        <path
          d="M34 40 C4 48 -8 100 2 190 C6 220 66 220 70 190 C78 100 64 48 34 40Z"
          fill="#F7DDE6"
          stroke="#D4AF37"
          strokeWidth="1.5"
        />
        {/* saree pallu drape */}
        <path
          d="M34 44 C50 80 70 110 66 190"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path d="M18 70 L18 195" stroke="#D4AF37" strokeWidth="1" opacity="0.4" />
        <path d="M50 70 L58 195" stroke="#D4AF37" strokeWidth="1" opacity="0.4" />
      </g>

      {/* clasped hands */}
      <ellipse cx="150" cy="150" rx="8" ry="6" fill="#F0CBA6" />
    </svg>
  );
}
