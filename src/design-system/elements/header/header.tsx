import LogoFireBeats from "../logo/logo-fire-beats";
import { ShoppingBag, User, Search } from "lucide-react"
import NavigationDesktop from "./desktop/navigation-desktop";

const dummieData = [
  {
    id: 1,
    name: 'Beats Packs',
    href: '/'
  },
  {
    id: 2,
    name: 'About',
    href: '/'
  },
  {
    id: 1,
    name: 'Blog',
    href: '/'
  }
]

const Header = () => {
  return (
    <header className="z-20 w-full">
      <nav className="wrapper-mobile wrapper flex justify-between w-full items-center py-3">
        <LogoFireBeats />
        <div>
          <NavigationDesktop links={dummieData}/>
        </div>
        <div className="flex flex-row gap-x-6">
          <User />
          <Search />
          <ShoppingBag />
        </div>
      </nav>
    </header>
  );
}

export default Header;