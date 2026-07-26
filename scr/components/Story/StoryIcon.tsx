interface StoryIconProps {
  variant: "meet" | "connect" | "family" | "ask" | "forever";
  className?: string;
}

/** Small circular watercolor-style illustrations for each story milestone. */
export default function StoryIcon({ variant, className = "" }: StoryIconProps) {
  switch (variant) {
    case "meet":
      return (
        <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
          <circle cx="38" cy="46" r="14" fill="#5B3B26" opacity="0.85" />
          <circle cx="64" cy="46" r="14" fill="#7A1025" opacity="0.85" />
          <path d="M38 60 Q50 66 64 60" stroke="#D4AF37" strokeWidth="2" fill="none" />
        </svg>
      );
    case "connect":
      return (
        <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
          <path d="M30 40 Q50 20 70 40 Q80 50 70 60 Q50 80 30 60 Q20 50 30 40Z" fill="#F7DDE6" />
          <circle cx="42" cy="48" r="4" fill="#7A1025" />
          <circle cx="58" cy="48" r="4" fill="#7A1025" />
          <circle cx="50" cy="60" r="4" fill="#D4AF37" />
        </svg>
      );
    case "family":
      return (
        <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
          <circle cx="30" cy="40" r="10" fill="#5B3B26" />
          <circle cx="50" cy="36" r="9" fill="#7A1025" />
          <circle cx="70" cy="40" r="10" fill="#D4AF37" />
          <path d="M20 68 Q50 50 80 68" stroke="#A9832A" strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
      );
    case "ask":
      return (
        <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
          <path
            d="M50 68 C20 48 26 22 46 26 C50 27 50 32 50 32 C50 32 50 27 54 26 C74 22 80 48 50 68Z"
            fill="#7A1025"
          />
          <circle cx="50" cy="50" r="6" fill="#D4AF37" />
        </svg>
      );
    case "forever":
    default:
      return (
        <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
          <path
            d="M50 20 C56 8 78 12 78 32 C78 52 58 62 50 76 C42 62 22 52 22 32 C22 12 44 8 50 20Z"
            fill="#F7DDE6"
            stroke="#D4AF37"
            strokeWidth="2"
          />
          <circle cx="50" cy="40" r="5" fill="#7A1025" />
        </svg>
      );
  }
}
