import { motion } from "framer-motion";
import LotusBloom from "./LotusBloom";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-maroon-deep px-6 py-20 text-center text-cream/90" aria-label="Thank you">
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mb-6 w-24"
      >
        <LotusBloom />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="mx-auto max-w-md font-telugu text-lg leading-relaxed md:text-xl"
      >
        మీ రాక మా వివాహాన్ని
        <br />
        మరింత ఆనందమయం చేస్తుంది.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="mx-auto mt-4 max-w-md font-telugu text-lg leading-relaxed md:text-xl"
      >
        మీ ఆశీర్వాదమే
        <br />
        మాకు అమూల్యమైన కానుక.
      </motion.p>

      <div className="mx-auto mt-8 h-px w-16 bg-gold-light/50" />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="mt-8 font-heading text-xs tracking-[0.3em] text-gold-light"
      >
        WITH LOVE
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.75, duration: 0.7 }}
        className="mt-2 font-heading text-2xl text-cream md:text-3xl"
      >
        Thulasi <span aria-hidden="true">❤️</span> Nikhil
      </motion.p>
    </footer>
  );
}
