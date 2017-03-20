import React from 'react';
import {goToTop} from 'react-scrollable-anchor';

const NavBar = ((props) => {
  return (
    <nav>
      <a className="nav-item" onClick={goToTop}>Movers</a>
      <a className="nav-item" href="#storage">Storage</a>
      <a className="nav-item" href="#courier">Courier</a>
    </nav>
  );
});

export default NavBar;