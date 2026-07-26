import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import LotusDivider from "@/components/shared/LotusDivider";

const REVEAL_THRESHOLD = 0.45;

export default function ScratchCard() {
  const holderRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isScratching = useRef(false);
  const [revealed, setRevealed] = useState(false);

  const paintGoldLeaf = useCallback(() => {
    const canvas = canvasRef.current;
    const holder = holderRef.current;
    if (!canvas || !holder) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = holder.getBoundingClientRect();
    canvas.width = width;
    canvas.height = height;

    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, "#F6E3AC");
    grad.addColorStop(0.5, "#D4AF37");
    grad.addColorStop(1, "#A9832A");
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "rgba(255,255,255,0.55)";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const fontSize = Math.max(16, width * 0.045);
    ctx.font = `600 ${fontSize}px Cinzel, serif`;
    ctx.fillText("SCRATCH THE GOLDEN LEAF", width / 2, height / 2 - fontSize);
    ctx.font = `${fontSize * 1.6}px serif`;
    ctx.fillText("🍃", width / 2, height / 2 + fontSize * 0.3);
  }, []);

  const getPos = (e: MouseEvent | TouchEvent, canvas: HTMLCanvasElement) => {
    const rect = canvas.getBoundingClientRect();
    if ("touches" in e && e.touches.length) {
      return { x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top };
    }
    const me = e as MouseEvent;
    return { x: me.clientX - rect.left, y: me.clientY - rect.top };
  };

  const celebrate = useCallback(() => {
    const colors = ["#D4AF37", "#F7DDE6", "#7A1025", "#FFF8F2"];
    confetti({
      particleCount: 120,
      spread: 90,
      startVelocity: 38,
      origin: { y: 0.6 },
      colors,
      scalar: 1.1,
    });
    confetti({
      particleCount: 60,
      spread: 130,
      startVelocity: 25,
      origin: { y: 0.4 },
      colors,
      shapes: ["circle"],
      scalar: 0.7,
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    paintGoldLeaf();

    const scratchAt = (x: number, y: number) => {
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, Math.max(canvas.width, canvas.height) * 0.07, 0, Math.PI * 2);
      ctx.fill();
    };

    const checkReveal = () => {
      const { width, height } = canvas;
      const data = ctx.getImageData(0, 0, width, height).data;
      let cleared = 0;
      let sampled = 0;
      const step = 4 * 24;
      for (let i = 3; i < data.length; i += step) {
        sampled++;
        if (data[i] < 40) cleared++;
      }
      if (sampled > 0 && cleared / sampled > REVEAL_THRESHOLD) {
        setRevealed(true);
        celebrate();
      }
    };

    const start = (e: MouseEvent | TouchEvent) => {
      isScratching.current = true;
      const p = getPos(e, canvas);
      scratchAt(p.x, p.y);
      e.preventDefault();
    };
    const move = (e: MouseEvent | TouchEvent) => {
      if (!isScratching.current) return;
      const p = getPos(e, canvas);
      scratchAt(p.x, p.y);
      checkReveal();
      e.preventDefault();
    };
    const end = () => {
      isScratching.current = false;
      checkReveal();
    };

    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("mousemove", move);
    window.addEventListener("mouseup", end);
    canvas.addEventListener("touchstart", start, { passive: false });
    canvas.addEventListener("touchmove", move, { passive: false });
    canvas.addEventListener("touchend", end);

    const onResize = () => {
      if (!revealed) paintGoldLeaf();
    };
    window.addEventListener("resize", onResize);

    return () => {
      canvas.removeEventListener("mousedown", start);
      canvas.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", end);
      canvas.removeEventListener("touchstart", start);
      canvas.removeEventListener("touchmove", move);
      canvas.removeEventListener("touchend", end);
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paintGoldLeaf, celebrate]);

  return (
    <section id="scratch" className="paper-texture bg-lotus/30 px-6 py-24 text-center md:py-32" aria-label="Save the date reveal">
      <h2 className="font-heading text-3xl text-maroon-deep md:text-5xl">One Final Surprise Awaits…</h2>
      <p className="mt-3 text-temple/70">Scratch the golden leaf to reveal our wedding day</p>
      <LotusDivider className="my-6" />

      <div className="relative mx-auto max-w-md">
        <div className="rounded-[28px] bg-gradient-to-br from-white to-[#F3E6CB] p-6 shadow-[0_24px_60px_rgba(122,16,37,0.12)]">
          <div ref={holderRef} className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            {/* Revealed content underneath */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#FFF3D8] to-[#F5DFA8] px-4 text-center">
              <span className="font-heading text-xs tracking-[0.3em] text-maroon">SAVE THE DATE</span>
              <span className="mt-2 font-heading text-4xl text-maroon-deep md:text-5xl">28 AUGUST 2026</span>
              <span className="mt-2 font-body text-base text-temple/80">Friday</span>
              <span className="mt-3 font-heading text-sm tracking-[0.2em] text-gold-dark">
                MUHURTHAM · 10:18 AM
              </span>
            </div>
            <canvas
              ref={canvasRef}
              className="absolute inset-0 cursor-grab touch-none"
              aria-label="Scratch to reveal the wedding date"
            />
          </div>
        </div>

        {revealed && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-5 font-heading text-sm tracking-[0.15em] text-maroon"
          >
            🌸 We can't wait to celebrate with you! 🌸
          </motion.div>
        )}
        {!revealed && (
          <p className="mt-4 text-sm text-temple/60">Click and drag, or swipe, across the gold to reveal ✦</p>
        )}
      </div>
    </section>
  );
}
