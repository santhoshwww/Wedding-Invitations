import { motion } from "framer-motion";
import LotusDivider from "@/components/shared/LotusDivider";
import GaneshaIllustration from "./GaneshaIllustration";

const slokaLines = [
  "గణేశాయ నమః",
  "వక్రతుండాయ నమః",
  "",
  "వక్రతుండ మహాకాయ",
  "సూర్యకోటి సమప్రభ ।",
  "నిర్విఘ్నం కురుమే దేవ",
  "సర్వకార్యేషు సర్వదా ॥",
];

const lineVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Ganesha() {
  return (
    <section
      id="ganesha"
      className="paper-texture relative overflow-hidden bg-lotus/40 px-6 py-24 md:py-32"
      aria-label="Invocation to Lord Ganesha"
    >
      {/* Temple lamp accents */}
      <LampGlow className="absolute left-4 top-10 h-16 w-16 opacity-70 md:left-16" />
      <LampGlow className="absolute right-4 top-10 h-16 w-16 opacity-70 md:right-16" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <GaneshaIllustration className="h-40 w-40 md:h-52 md:w-52" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 font-heading text-sm tracking-[0.3em] text-maroon"
        >
          || శ్రీ గణేశాయ నమః ||
        </motion.p>

        <LotusDivider className="mt-6" />

        <div className="mt-8 space-y-2">
          {slokaLines.map((line, i) =>
            line ? (
              <motion.p
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                variants={lineVariants}
                className="font-telugu text-xl leading-relaxed text-maroon-deep md:text-2xl"
              >
                {line}
              </motion.p>
            ) : (
              <div key={i} className="h-2" />
            )
          )}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-8 max-w-md font-body text-sm italic text-temple/70 md:text-base"
        >
          Invoking Lord Ganesha's blessings, that all our endeavours be free
          of obstacles.
        </motion.p>
      </div>
    </section>
  );
}

function LampGlow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 90" className={`animate-swingBell origin-top ${className}`} fill="none" aria-hidden="true">
      <line x1="30" y1="0" x2="30" y2="30" stroke="#A9832A" strokeWidth="1.2" />
      <path d="M14 30 Q30 20 46 30 L40 46 Q30 52 20 46 Z" fill="#D4AF37" />
      <ellipse cx="30" cy="30" rx="10" ry="4" fill="#FFE9B8" opacity="0.9" />
      <path d="M22 52 L38 52 L34 70 L26 70 Z" fill="#A9832A" />
    </svg>
  );
}
