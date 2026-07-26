import { motion, AnimatePresence } from "framer-motion";
import { useCountdown } from "@/hooks/useCountdown";
import LotusDivider from "@/components/shared/LotusDivider";

const WEDDING_DATE = new Date("2026-08-28T10:18:00+05:30");

const units = [
  { key: "days" as const, label: "Days" },
  { key: "hours" as const, label: "Hours" },
  { key: "minutes" as const, label: "Minutes" },
  { key: "seconds" as const, label: "Seconds" },
];

export default function Countdown() {
  const timeLeft = useCountdown(WEDDING_DATE);

  return (
    <section
      id="countdown"
      className="section-panel paper-texture mx-6 my-12 rounded-[40px] border border-gold-light/30 bg-cream px-6 py-24 text-center md:mx-12 md:py-32"
      aria-label="Countdown to the wedding"
    >
      <h2 className="font-heading text-3xl text-maroon-deep md:text-5xl">Countdown To Our Big Day</h2>
      <LotusDivider className="my-6" />

      <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-4 md:gap-6">
        {units.map((u, i) => (
          <motion.div
            key={u.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="flex w-20 flex-col items-center rounded-2xl border border-gold-light bg-white/70 py-5 shadow-[0_10px_30px_rgba(122,16,37,0.08)] md:w-28 md:py-7"
          >
            <AnimatePresence mode="popLayout">
              <motion.span
                key={timeLeft[u.key]}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.3 }}
                className="font-heading text-3xl text-maroon md:text-4xl"
              >
                {String(timeLeft[u.key]).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
            <span className="mt-1 font-heading text-[10px] tracking-[0.2em] text-temple/60 md:text-xs">
              {u.label.toUpperCase()}
            </span>
          </motion.div>
        ))}
      </div>

      <p className="mt-8 text-sm text-temple/60">
        Muhurtham · 28 August 2026 · 10:18 AM
      </p>
    </section>
  );
}
