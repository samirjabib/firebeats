import { FC } from "react";
import { NavLink } from "../types";
import Link from "next/link";

type NavLinksProps = {
  links: NavLink[];
};

const NavLinksDesktop: FC<NavLinksProps> = ({ links }) => {
  return (
    <ul className="flex flex-row gap-x-6">
      {links.map(({ id, href, name }) => (
        <li
          key={id}
          className="relative cursor-pointer text-base w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary-foreground after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
        >
          <Link href={href}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinksDesktop;
