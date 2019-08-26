import React from 'react';
import './navbar.css'
import TSLogo from '../Assets/tslogo';
import NameLogo from '../Assets/namelogo';

function NavBar() {
  return (
    <div className="NavBar">
      <div className="NavLeft" id="navitem">
          <NameLogo/>
      </div>
      <div className="NavRight" id="navitem">
          <div> HOME </div>
          <div> ABOUT </div>
          <div> PORTFOLIO </div>
          <div> CONTACT </div>
      </div>
    </div>
  );
}

export default NavBar;