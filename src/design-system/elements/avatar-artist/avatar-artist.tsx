import Image, { StaticImageData } from "next/image"
import { FC } from "react"


type AvatarArtistProps = {
    image: string;
    name: string;
}

const AvatarArtist: FC<AvatarArtistProps> = ({ image, name }) => {
    return (
        <div className="w-44 h-44 rounded-[100%] relative">
            <Image src={image} alt={name} fill className="rounded-[100%] object-top  shadow-2xl object-cover border-2 border-white/20 " />
        </div>

    )
}

export default AvatarArtist