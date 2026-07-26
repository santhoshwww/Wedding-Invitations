interface CelebrationIconProps {
  variant: "mehendi" | "nalugu" | "haldi" | "sangeet" | "wedding";
  className?: string;
}

export default function CelebrationIcon({ variant, className = "" }: CelebrationIconProps) {
  switch (variant) {
    case "mehendi":
      return (
        <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
          <path d="M30 8 C40 20 44 32 30 52 C16 32 20 20 30 8Z" fill="#5F6E44" />
          <path d="M30 20 C34 26 36 32 30 42 C24 32 26 26 30 20Z" fill="#D7E8C4" />
        </svg>
      );
    case "nalugu":
      return (
        <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
          <circle cx="30" cy="34" r="16" fill="#F6E3C4" stroke="#D4AF37" strokeWidth="1.5" />
          <path d="M22 34 Q30 20 38 34" stroke="#A9832A" strokeWidth="2" fill="none" />
        </svg>
      );
    case "haldi":
      return (
        <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
          <circle cx="30" cy="30" r="18" fill="#FBEAB8" />
          <circle cx="30" cy="30" r="9" fill="#D4AF37" />
        </svg>
      );
    case "sangeet":
      return (
        <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
          <circle cx="20" cy="42" r="6" fill="#4E3968" />
          <circle cx="40" cy="38" r="6" fill="#77618F" />
          <path d="M26 42 V16 L44 12 V38" stroke="#4E3968" strokeWidth="2" fill="none" />
        </svg>
      );
    case "wedding":
    default:
      return (
        <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
          <path d="M20 40 L30 12 L40 40" stroke="#7A1025" strokeWidth="2" fill="none" />
          <rect x="14" y="40" width="32" height="8" rx="2" fill="#D4AF37" />
        </svg>
      );
  }
}
