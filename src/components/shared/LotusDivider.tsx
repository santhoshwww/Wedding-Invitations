interface LotusDividerProps {
  className?: string;
}

/** A small gold lotus flanked by rules, used to separate section headings. */
export default function LotusDivider({ className = "" }: LotusDividerProps) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <span className="divider-rule w-16 md:w-20" />
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <g fill="#D4AF37">
          <ellipse cx="12" cy="12" rx="3.2" ry="5.5" />
          <ellipse cx="12" cy="12" rx="3.2" ry="5.5" transform="rotate(45 12 12)" />
          <ellipse cx="12" cy="12" rx="3.2" ry="5.5" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="3.2" ry="5.5" transform="rotate(135 12 12)" />
          <circle cx="12" cy="12" r="2.1" fill="#7A1025" />
        </g>
      </svg>
      <span className="divider-rule w-16 md:w-20" />
    </div>
  );
}
