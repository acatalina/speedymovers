import React from 'react';
import NavBar from './NavBar';

const Header = ((props) => {
  return (
    <header className="speedy-header">
      <h1>
        <img id="speedy-movers-logo" itemProp="image" 
          src="logo.svg" alt="Speedy Movers" 
          className={props.logoClass} 
          onScroll={props.handleScroll}
        />
      </h1>
      <NavBar />
    </header>
  );
});

export default Header;