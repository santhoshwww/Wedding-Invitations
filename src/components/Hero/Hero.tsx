import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import TempleBell from "@/components/shared/TempleBell";
import TempleSkyline from "./TempleSkyline";
import CoupleSilhouette from "./CoupleSilhouette";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-[100svh] w-full items-center justify-center overflow-hidden"
      aria-label="Wedding welcome"
    >
      {/* Sunrise watercolor sky */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #F9D9B0 0%, #F6C193 22%, #F2A9A0 42%, #F7DDE6 62%, #FFF8F2 100%)",
        }}
      />
      {/* Sun glow */}
      <div
        className="absolute left-1/2 top-[38%] h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl md:h-80 md:w-80"
        style={{ background: "radial-gradient(circle, #FFE9B8 0%, rgba(255,233,184,0) 70%)" }}
      />

      <TempleSkyline className="absolute bottom-[18%] left-0 w-full text-temple/70 md:bottom-[16%]" />
      <CoupleSilhouette className="absolute bottom-0 left-1/2 h-[52%] -translate-x-1/2 md:h-[58%]" />

      {/* Ground wash */}
      <div className="absolute bottom-0 left-0 h-[20%] w-full bg-gradient-to-t from-cream to-transparent" />

      <TempleBell className="absolute left-4 top-4 md:left-10 md:top-8" size={40} />
      <TempleBell className="absolute right-4 top-4 md:right-10 md:top-8" size={40} />

      {/* Copy */}
      <div className="relative z-10 mt-8 flex flex-col items-center px-6 text-center">
        <motion.p
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-heading text-xs tracking-[0.4em] text-maroon md:text-sm"
        >
          WELCOME TO THE WEDDING OF
        </motion.p>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-4 font-heading text-6xl leading-[1.05] text-maroon-deep md:text-8xl"
        >
          Thulasi
          <span className="mx-3 inline-block text-3xl text-maroon md:text-5xl" aria-hidden="true">
            ❤️
          </span>
          <br className="md:hidden" />
          Nikhil
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="gold-shimmer-text mt-5 font-heading text-sm tracking-[0.5em] md:text-base"
        >
          BEGIN OUR FOREVER
        </motion.p>
      </div>

      <motion.a
        href="#ganesha"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 z-10 flex flex-col items-center gap-2 text-maroon/80 md:bottom-10"
        aria-label="Scroll to next section"
      >
        <span className="font-heading text-[10px] tracking-[0.3em]">SCROLL</span>
        <span className="animate-bob">
          <FaChevronDown size={14} />
        </span>
      </motion.a>
    </section>
  );
}
