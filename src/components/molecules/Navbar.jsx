import Logo from "../atoms/Logo";
import SearchBar from "../atoms/SearchBar";
import UserActions from "../atoms/UserActions";
import HamburgerButton from "../atoms/HamburgerButton";
import MobileMenu from "../atoms/MobileMenu";
import { useNavbar } from "../../hooks/useNavbar";

const Navbar = () => {
  const { isMenuOpen, isMobile, toggleMenu, closeMenu } = useNavbar();

  return (
    <>
      <div className="w-full max-w-pc mx-auto 2xl:px-0 px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3 lg:gap-0">
            <HamburgerButton isOpen={isMenuOpen} onClick={toggleMenu} />
            <Logo />
          </div>
          <div className="hidden 2xl:block lg:block">
            <SearchBar />
          </div>
          <UserActions />
        </div>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
};

export default Navbar;
