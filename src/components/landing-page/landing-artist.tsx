import { AvatarArtist } from "@/design-system"
import dataDummieArtist from "../../../public/artist"

const LandingArtist = () => {
    return (
        <div className="flex flex-row flex-wrap wrapper wrapper-mobile justify-between">
            {dataDummieArtist.map(({ id, image, name }) => (
                <AvatarArtist image={image} name={name} />

            ))}
        </div>
    )
}

export default LandingArtist