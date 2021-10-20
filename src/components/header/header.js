import useWindowSize from '../../utils/useWindowSize';
import NavbarDesktop from '../navbar/navbarDesktop';
import NavbarMobile from '../navbar/navbarMobile';

function Header() {
  const { width } = useWindowSize();
  const breakpointWidth = 768;
  return <>{width >= breakpointWidth ? <NavbarDesktop /> : <NavbarMobile />}</>;
}

export default Header;
