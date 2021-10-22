import { Link } from 'react-router-dom';
import Button from '../button/button';

import './navbar.css';

function NavbarDesktop() {
  return (
    <>
      <header className="header">
        <h2>SaveFood</h2>
        <ul className="nav" id="nav">
          <li className="nav-item">
            <Link className="nav-link bold" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About us
            </Link>
          </li>
          <li className="nav-item menum">
            <Link className="nav-link" to="/restaurants">
              Restaurants
            </Link>
          </li>
          <Button variant="disabled">Sign up</Button>
        </ul>
      </header>
    </>
  );
}

export default NavbarDesktop;
