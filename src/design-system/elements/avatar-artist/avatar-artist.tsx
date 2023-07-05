import Image, { StaticImageData } from "next/image"
import { FC } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "../avatar/avatar";



type AvatarArtistProps = {
    image: StaticImageData; // Change this later for the real type 
    name: string;
}

const AvatarArtist: FC<AvatarArtistProps> = ({ image, name }) => {
    return (
        <Avatar>
            <AvatarImage src={image} />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>

    )
}

export default AvatarArtist