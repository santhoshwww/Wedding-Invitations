import { motion } from "framer-motion";

const petalPaths = [-72, -36, 0, 36, 72, 108, 144, 180, -108, -144];

/** A lotus whose petals bloom outward on scroll-into-view. */
export default function LotusBloom() {
  return (
    <svg viewBox="0 0 100 100" className="w-full" aria-hidden="true">
      {petalPaths.map((angle, i) => (
        <motion.ellipse
          key={angle}
          cx="50"
          cy="50"
          rx="8"
          ry="22"
          fill={i % 2 === 0 ? "#F7DDE6" : "#D4AF37"}
          opacity="0.85"
          initial={{ scale: 0.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.85 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          transform={`rotate(${angle} 50 50)`}
          style={{ transformOrigin: "50px 74px" }}
        />
      ))}
      <circle cx="50" cy="50" r="10" fill="#7A1025" />
    </svg>
  );
}
