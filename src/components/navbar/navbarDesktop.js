import { Link } from 'react-router-dom';

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
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Sign up
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default NavbarDesktop;
