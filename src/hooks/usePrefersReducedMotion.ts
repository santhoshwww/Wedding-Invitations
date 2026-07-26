import { useEffect, useState } from "react";

/** Tracks the user's OS-level reduced-motion preference reactively. */
export function usePrefersReducedMotion(): boolean {
  const [prefers, setPrefers] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => setPrefers(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return prefers;
}
