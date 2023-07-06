import { AvatarArtist, Title } from "@/design-system"
import dataDummieArtist from "../../../public/artist"

const LandingArtist = () => {
    return (
        <div className="wrapper wrapper-mobile flex items-center flex-col py-20">
            <Title as="h4" size={"sectionSubtitle"} className="text-center text-white/60">
                Inspiracion
            </Title>
            <Title as="h2" size={"sectionTitle"} className="text-center max-w-3xl pb-16">
                Descubre nuestro sonido exclusivo inspirado en los artistas del momento.
            </Title>
            <div className="flex flex-row flex-wrap justify-between gap-12 ">
                {dataDummieArtist.map(({ id, image, name }) => (
                    <AvatarArtist image={image} name={name} />
                ))}
            </div>
        </div>
    )
}

export default LandingArtist