import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LotusDivider from "@/components/shared/LotusDivider";

type Response = "yes" | "no" | null;

export default function RSVP() {
  const [open, setOpen] = useState(false);
  const [response, setResponse] = useState<Response>(null);

  return (
    <section
      id="rsvp"
      className="section-panel paper-texture mx-6 my-12 rounded-[40px] border border-gold-light/30 bg-lotus/30 px-6 py-24 text-center md:mx-12 md:py-32"
      aria-label="RSVP"
    >
      <h2 className="font-heading text-3xl text-maroon-deep md:text-5xl">Will You Join Us?</h2>
      <p className="mt-3 text-temple/70">Tap the envelope, break the seal, and let us know</p>
      <LotusDivider className="my-8" />

      <div className="mx-auto flex max-w-sm flex-col items-center">
        <button
          type="button"
          onClick={() => setOpen(true)}
          disabled={open}
          className="group relative w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
          aria-label="Open the RSVP envelope"
        >
          <svg viewBox="0 0 300 200" className="w-full drop-shadow-[0_16px_30px_rgba(122,16,37,0.15)]">
            <rect x="10" y="10" width="280" height="180" rx="10" fill="#F7DDE6" stroke="#D4AF37" strokeWidth="2" />
            <motion.path
              d="M10 20 L150 120 L290 20"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="2"
              initial={false}
              animate={open ? { d: "M10 10 L150 10 L290 10" } : { d: "M10 20 L150 120 L290 20" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.g
              initial={false}
              animate={open ? { y: -6, opacity: 0.9 } : { y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <circle cx="150" cy="95" r="22" fill="#7A1025" />
              <text x="150" y="101" textAnchor="middle" fontFamily="Cinzel, serif" fontSize="16" fill="#F7DDE6">
                T&amp;N
              </text>
            </motion.g>
          </svg>
          {!open && (
            <span className="mt-4 block font-heading text-xs tracking-[0.2em] text-maroon group-hover:text-maroon-deep">
              TAP TO OPEN
            </span>
          )}
        </button>

        <AnimatePresence>
          {open && !response && (
            <motion.div
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8 flex flex-col items-center gap-4"
            >
              <p className="text-temple/75">Kindly RSVP and bless the couple</p>
              <div className="flex gap-4">
                <button
                  onClick={() => setResponse("yes")}
                  className="rounded-full bg-[#5F6E44] px-8 py-3 font-heading text-xs tracking-[0.15em] text-cream transition-transform hover:-translate-y-0.5"
                >
                  YES, WE WILL
                </button>
                <button
                  onClick={() => setResponse("no")}
                  className="rounded-full bg-maroon px-8 py-3 font-heading text-xs tracking-[0.15em] text-cream transition-transform hover:-translate-y-0.5"
                >
                  SORRY, CAN'T MAKE IT
                </button>
              </div>
            </motion.div>
          )}

          {response && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 font-body italic text-maroon-deep"
            >
              {response === "yes"
                ? "Thank you for confirming — we can't wait to celebrate with you! 💛"
                : "We'll miss you there, but thank you for letting us know. 🙏"}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
