import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';
import Hamburger from 'hamburger-react';
import Button from '../button/button';

function NavbarMobile() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <header className="header">
        <div className="wrapper">
          <h2>SaveFood</h2>
          <Hamburger rounded toggled={isOpen} toggle={setOpen} color="#000" />
        </div>
        <ul className={`${isOpen ? 'nav' : 'nav hidden'}`} id="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/discovery">
              Restaurants
            </Link>
          </li>
          <Button variant="secondary">Sign up</Button>
        </ul>
      </header>
    </>
  );
}

export default NavbarMobile;
