import { motion } from "framer-motion";
import LotusDivider from "@/components/shared/LotusDivider";
import CelebrationIcon from "./CelebrationIcon";

interface EventCard {
  key: "mehendi" | "nalugu" | "haldi" | "sangeet" | "wedding";
  title: string;
  date?: string;
  day?: string;
  teaser?: string;
  bg: string;
  text: string;
}

const events: EventCard[] = [
  { key: "mehendi", title: "Mehendi", date: "24 August 2026", day: "Monday", bg: "bg-leaf/50", text: "text-[#3F4C2C]" },
  { key: "nalugu", title: "Nalugu", date: "25 August 2026", day: "Tuesday", bg: "bg-[#F6E3C4]", text: "text-[#7A521E]" },
  { key: "haldi", title: "Haldi", date: "26 August 2026", day: "Wednesday · Morning", bg: "bg-[#FBEAB8]", text: "text-[#7A5E10]" },
  { key: "sangeet", title: "Sangeet", date: "26 August 2026", day: "Wednesday · Evening", bg: "bg-[#E4D9EF]", text: "text-[#4E3968]" },
  {
    key: "wedding",
    title: "Wedding",
    teaser: "Our Biggest Celebration Awaits…",
    bg: "bg-lotus",
    text: "text-maroon-deep",
  },
];

export default function Celebrations() {
  return (
    <section
      id="celebrations"
      className="section-panel paper-texture mx-6 my-12 rounded-[40px] border border-gold-light/30 bg-cream px-6 py-24 md:mx-12 md:py-32"
      aria-label="Celebration events"
    >
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="font-heading text-3xl text-maroon-deep md:text-5xl">Join Us For The Celebrations</h2>
        <LotusDivider className="my-6" />

        <div className="mt-10 grid grid-cols-2 gap-5 md:mt-14 md:grid-cols-5 md:gap-6">
          {events.map((ev, i) => (
            <motion.div
              key={ev.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className={`flex min-h-[240px] flex-col items-center justify-end rounded-[32px] border border-gold-light/60 p-5 text-center shadow-[0_20px_60px_rgba(122,16,37,0.1)] ${ev.bg} ${ev.text} ${
                ev.key === "wedding" ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <CelebrationIcon variant={ev.key} className="mb-4 h-12 w-12" />
              <h3 className="font-heading text-sm tracking-[0.16em] uppercase">{ev.title}</h3>
              {ev.teaser ? (
                <p className="mt-3 max-w-xs font-heading text-base italic">{ev.teaser}</p>
              ) : (
                <>
                  <p className="mt-3 text-lg font-semibold">{ev.date}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.22em] opacity-75">{ev.day}</p>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
