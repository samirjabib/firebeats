import { Benefits, NewLetter } from "@/design-system";
import LandingArtist from "./landing-artist";
import LandingHero from "./landing-hero";
import LandingPacksBeats from "./landing-packs-list";
import LandingFidalize from "./landing-fidelize";

const LandingPage = () => {
  return (
    <div>
      <LandingHero />
      <Benefits />
      <LandingArtist />
      <LandingPacksBeats />
      <LandingFidalize />
      <NewLetter />
    </div>
  );
};

export default LandingPage;
