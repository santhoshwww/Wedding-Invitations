interface TempleBellProps {
  className?: string;
  size?: number;
}

/** A hand-drawn SVG temple bell that swings gently, used as a corner accent. */
export default function TempleBell({ className = "", size = 48 }: TempleBellProps) {
  return (
    <div
      className={`origin-top animate-swingBell will-change-transform ${className}`}
      style={{ width: size }}
    >
      <svg viewBox="0 0 40 70" width={size} height={size * 1.75} fill="none">
        <line x1="20" y1="0" x2="20" y2="14" stroke="#A9832A" strokeWidth="1.5" />
        <circle cx="20" cy="12" r="3" fill="#D4AF37" />
        <path
          d="M10 20 C10 14 30 14 30 20 L34 46 C34 52 6 52 6 46 Z"
          fill="#D4AF37"
          stroke="#A9832A"
          strokeWidth="1"
        />
        <line x1="20" y1="52" x2="20" y2="60" stroke="#A9832A" strokeWidth="1.5" />
        <circle cx="20" cy="62" r="3" fill="#A9832A" />
      </svg>
    </div>
  );
}
