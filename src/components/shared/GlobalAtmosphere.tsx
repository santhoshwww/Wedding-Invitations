import { useMemo } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * A fixed, pointer-events-none atmosphere layer mounted once in App.
 * Provides the continuous ambient motion the brief asks for site-wide:
 * drifting petals, moving clouds, flying birds and a soft gold shimmer —
 * without every section re-implementing its own particle system.
 */
export default function GlobalAtmosphere() {
  const reduced = usePrefersReducedMotion();

  interface Petal {
    id: number;
    left: string;
    delay: string;
    duration: string;
    size: number;
    hue: number;
  }

  const petals: Petal[] = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        id: i,
        left: `${(i * 7.3) % 100}%`,
        delay: `${(i * 1.7) % 12}s`,
        duration: `${14 + (i % 5) * 3}s`,
        size: 10 + (i % 4) * 4,
        hue: i % 3,
      })),
    []
  );

  if (reduced) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[5] overflow-hidden" aria-hidden="true">
      {/* Petals */}
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute top-0 animate-drift will-change-transform"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        >
          <svg
            width={p.size}
            height={p.size}
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10 1C13 4 19 6 19 10C19 14 13 16 10 19C7 16 1 14 1 10C1 6 7 4 10 1Z"
              fill={p.hue === 0 ? "#F7DDE6" : p.hue === 1 ? "#D4AF37" : "#F2C6D6"}
              opacity="0.75"
            />
          </svg>
        </span>
      ))}

      {/* Clouds */}
      <div className="absolute top-[6%] left-0 w-full opacity-60">
        <div className="animate-cloudMove" style={{ animationDuration: "70s" }}>
          <CloudSVG className="w-40 opacity-70" />
        </div>
      </div>
      <div className="absolute top-[14%] left-0 w-full opacity-50">
        <div className="animate-cloudMove" style={{ animationDuration: "95s", animationDelay: "-20s" }}>
          <CloudSVG className="w-28 opacity-60" />
        </div>
      </div>

      {/* Birds */}
      <div className="absolute top-[10%] left-0 w-full">
        <div className="animate-birdFly" style={{ animationDuration: "34s" }}>
          <BirdSVG className="w-8 opacity-70" />
        </div>
      </div>
      <div className="absolute top-[18%] left-0 w-full">
        <div className="animate-birdFly" style={{ animationDuration: "46s", animationDelay: "-12s" }}>
          <BirdSVG className="w-6 opacity-50" />
        </div>
      </div>
    </div>
  );
}

function CloudSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 80" className={className} fill="#FFFFFF">
      <ellipse cx="50" cy="50" rx="40" ry="22" opacity="0.9" />
      <ellipse cx="90" cy="38" rx="34" ry="26" opacity="0.9" />
      <ellipse cx="140" cy="50" rx="38" ry="20" opacity="0.9" />
    </svg>
  );
}

function BirdSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 20" className={className} fill="none" stroke="#5B3B26" strokeWidth="1.5">
      <path d="M2 12 Q10 2 20 10 Q30 2 38 12" strokeLinecap="round" />
    </svg>
  );
}
