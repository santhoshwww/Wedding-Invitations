import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Sri+Venkateswara+Kalyana+Mandapam+Tirupati+Road+Renigunta+Andhra+Pradesh+517520";

export default function Venue() {
  return (
    <section id="venue" className="relative overflow-hidden bg-maroon px-6 py-24 md:py-32" aria-label="Venue">
      <div className="pointer-events-none absolute inset-0 opacity-10" style={{
        backgroundImage:
          "radial-gradient(circle at 15% 20%, #D4AF37 0, transparent 40%), radial-gradient(circle at 85% 80%, #D4AF37 0, transparent 40%)",
      }} />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto flex max-w-2xl flex-col items-center"
      >
        {/* Scroll top rod */}
        <ScrollRod />

        <div className="w-full border-x border-gold-light/30 bg-[#FFF8F2] px-8 py-12 text-center shadow-[0_20px_60px_rgba(0,0,0,0.25)] md:px-14">
          <p className="font-heading text-xs tracking-[0.4em] text-maroon">VENUE</p>
          <h3 className="mt-4 font-heading text-2xl text-maroon-deep md:text-3xl">
            Sri Venkateswara Kalyana Mandapam
          </h3>
          <p className="mt-4 text-temple/75">
            Tirupati Road, Renigunta
            <br />
            Andhra Pradesh
          </p>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-maroon px-8 py-3 font-heading text-xs tracking-[0.18em] text-cream transition-transform hover:-translate-y-0.5 hover:bg-maroon-deep"
          >
            <FaMapMarkerAlt /> VIEW ON GOOGLE MAPS
          </a>
        </div>

        {/* Scroll bottom rod */}
        <ScrollRod flip />
      </motion.div>
    </section>
  );
}

function ScrollRod({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 400 30"
      className={`h-6 w-full max-w-2xl ${flip ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <rect x="0" y="10" width="400" height="10" rx="5" fill="#D4AF37" />
      <circle cx="14" cy="15" r="14" fill="#A9832A" />
      <circle cx="386" cy="15" r="14" fill="#A9832A" />
    </svg>
  );
}
