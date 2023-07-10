import FooterNavLink from "./footer-nav-link";

import { NavigationFooter } from "./constants";

const NavFooter = ({ links }: { links: NavigationFooter[] }) => {
  return (
    <div>
      <ul className="flex flex-row ites-center justify-center gap-x-4 text-sm">
        {links.map(({ href, id, name }) => (
          <FooterNavLink href={href} id={id} name={name} key={id} />
        ))}
      </ul>
    </div>
  );
};

export default NavFooter;
