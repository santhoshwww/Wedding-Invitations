import GlobalAtmosphere from "@/components/shared/GlobalAtmosphere";
import Hero from "@/components/Hero/Hero";
import Ganesha from "@/components/Ganesha/Ganesha";
import Story from "@/components/Story/Story";
import Celebrations from "@/components/Celebrations/Celebrations";
import ScratchCard from "@/components/ScratchCard/ScratchCard";
import Venue from "@/components/Venue/Venue";
import Countdown from "@/components/Countdown/Countdown";
import RSVP from "@/components/RSVP/RSVP";
import Footer from "@/components/Footer/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-cream text-temple font-body antialiased">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(212,175,55,0.08), transparent 22%)," +
            "radial-gradient(circle at bottom right, rgba(122,16,37,0.07), transparent 18%)",
        }}
      />
      <GlobalAtmosphere />
      <main className="relative z-10">
        <Hero />
        <Ganesha />
        <Story />
        <Celebrations />
        <ScratchCard />
        <Venue />
        <Countdown />
        <RSVP />
        <Footer />
      </main>
    </div>
  );
}
