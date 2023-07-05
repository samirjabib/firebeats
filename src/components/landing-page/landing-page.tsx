import LandingArtist from "./landing-artist"
import LandingHero from "./landing-hero"
import LandingPacksBeats from "./landing-packs-list"

const LandingPage = () => {
    return (
        <div>
            <LandingHero />
            <LandingArtist />
            <LandingPacksBeats />
        </div>
    )
}

export default LandingPage