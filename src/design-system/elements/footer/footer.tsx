import LogoFireBeats from "../logo/logo-fire-beats";
import { FooterNavigationData } from "./constants";
import NavFooter from "./nav-footer";

const Footer = () => {
  return (
    <footer className="py-20 text-center flex flex-col gap-4">
      <LogoFireBeats />
      <NavFooter links={FooterNavigationData} />
    </footer>
  );
};

export default Footer;
