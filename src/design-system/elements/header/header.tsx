
import NavigationDesktop from "./desktop/navigation-desktop";
import NavigationMobile from "./mobile/navigation-mobile";

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
        <NavigationDesktop links={dummieData} />
        <NavigationMobile links={dummieData} />
      </nav>
    </header>
  );
}

export default Header;