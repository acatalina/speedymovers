import React from 'react';
import NavBar from './NavBar';

const Header = ((props) => {
  return (
    <header className="speedy-header">
      <img src="logo.svg" alt="Speedy Movers" 
        className={props.logoClass} 
        onScroll={props.handleScroll}
      />
      <NavBar />
    </header>
  );
});

export default Header;