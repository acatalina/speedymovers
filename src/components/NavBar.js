import React from 'react';
import {goToTop} from 'react-scrollable-anchor';

const NavBar = ((props) => {
  return (
    <nav className="header-nav">
      <a className="header-nav-item" onClick={goToTop}>Movers</a>
      <a className="header-nav-item" href="#storage">Storage</a>
      <a className="header-nav-item" href="#courier">Courier</a>
    </nav>
  );
});

export default NavBar;