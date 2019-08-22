import React from 'react';
import './navbar.css'

function NavBar() {
  return (
    <div className="NavBar">
      <div className="NavLeft" id="navitem">
          Tarin Strosser
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