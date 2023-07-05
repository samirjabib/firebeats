import Link from "next/link"
import { FC } from "react"

type NavLink = {
    id: number,
    name: string,
    href: string
}

type NavigationDesktopProps = {
    links: NavLink[]

}

const NavigationDesktop: FC<NavigationDesktopProps> = ({ links }) => {

    return (
        <ul className="flex flex-row gap-x-6">
            {links.map(({ id, href, name }) => (
                <li key={name} className="relative text-sm w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary-foreground after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                    <Link href={href}>{name}</Link>
                </li>
            ))
            }
        </ul>
    )
}

export default NavigationDesktop