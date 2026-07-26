import { motion } from "framer-motion";
import LotusDivider from "@/components/shared/LotusDivider";
import StoryIcon from "./StoryIcon";

interface StoryStep {
  number: string;
  title: string;
  lines: [string, string];
  icon: "meet" | "connect" | "family" | "ask" | "forever";
}

const steps: StoryStep[] = [
  { number: "01", title: "We Met", lines: ["Two souls.", "One beautiful beginning."], icon: "meet" },
  { number: "02", title: "We Connected", lines: ["From conversations", "to countless memories."], icon: "connect" },
  { number: "03", title: "Families United", lines: ["Two beautiful families.", "One bond."], icon: "family" },
  { number: "04", title: "He Asked", lines: ["A promise.", "For a lifetime."], icon: "ask" },
  { number: "05", title: "Forever Begins", lines: ["Our forever starts now.", ""], icon: "forever" },
];

export default function Story() {
  return (
    <section
      id="story"
      className="section-panel paper-texture mx-6 my-12 rounded-[40px] border border-gold-light/30 bg-cream px-6 py-24 md:mx-12 md:py-32"
      aria-label="Our story"
    >
      <div className="mx-auto max-w-6xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-heading text-3xl text-maroon-deep md:text-5xl"
        >
          Our Story
        </motion.h2>
        <LotusDivider className="my-6" />

        <div className="scrollbar-hide relative mt-8 flex gap-6 overflow-x-auto pb-6 md:mt-14 md:grid md:grid-cols-5 md:gap-6 md:overflow-visible">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex min-w-[220px] flex-col items-center gap-4 md:min-w-0"
            >
              <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-2 border-gold-light bg-gradient-to-br from-lotus/60 to-cream shadow-[0_10px_30px_rgba(122,16,37,0.1)] md:h-36 md:w-36">
                <StoryIcon variant={step.icon} className="h-16 w-16 md:h-20 md:w-20" />
                <span className="absolute -top-2 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-maroon font-heading text-xs text-cream shadow">
                  {step.number}
                </span>
              </div>
              <h3 className="font-heading text-lg text-maroon">{step.title}</h3>
              <p className="text-sm leading-snug text-temple/70">
                {step.lines[0]}
                {step.lines[1] && (
                  <>
                    <br />
                    {step.lines[1]}
                  </>
                )}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
