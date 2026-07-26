import { useLenis } from "@/hooks/useLenis";
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
  useLenis();

  return (
    <div className="relative">
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
