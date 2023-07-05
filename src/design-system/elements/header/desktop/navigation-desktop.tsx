import { FC } from "react"
import LogoFireBeats from "../../logo/logo-fire-beats"
import { ShoppingBag, User, Search } from "lucide-react"
import { NavLink } from "../types"
import NavLinksDesktop from "./nav-links-desktop"

type NavigationDesktopProps = {
    links: NavLink[]

}

const NavigationDesktop: FC<NavigationDesktopProps> = ({ links }) => {
    return (
        <nav className="wrapper-mobile wrapper flex justify-between w-full items-center py-3">
            <LogoFireBeats />
            <div>
                <NavLinksDesktop links={links} />
            </div>
            <div className="flex flex-row gap-x-6">
                <User />
                <Search />
                <ShoppingBag />
            </div>
        </nav>

    )
}

export default NavigationDesktop