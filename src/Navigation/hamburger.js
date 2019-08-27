import React from "react";

function Hamburger(props) {
    
    return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 479 291" className='lines'>
      <path
    //   className='right'
      className={props.burgerActive ? 'right' : ''}
        fill="none"
        stroke="#1b1026"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="50"
        d="M239.5 25L454 25"
        />
      <path
        // className='left'
        className={props.burgerActive ? 'left' : ''}
        fill="none"
        stroke="#1b1026"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="50"
        d="M25 25L239.5 25"
      />
      <path
    //   className='right vanish'
      className={props.burgerActive ? 'right vanish': ''}
        fill="none"
        stroke="#1b1026"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="50"
        d="M239.5 145.5L454 145.5"
        />
      <path
        // className='left vanish'
        className={props.burgerActive ? 'left vanish' : ''}
        fill="none"
        stroke="#1b1026"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="50"
        d="M25 145.5L239.5 145.5"
      />
      <path
    //   className='right vanish'
      className={props.burgerActive ? 'right vanish' : ''}
        fill="none"
        stroke="#1b1026"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="50"
        d="M239.5 266L454 266"
        />
      <path
        // className='left vanish'
        className={props.burgerActive ? 'left vanish' : ''}
        fill="none"
        stroke="#1b1026"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="50"
        d="M25 266L239.5 266"
      />
    </svg>
  );
}

export default Hamburger;
