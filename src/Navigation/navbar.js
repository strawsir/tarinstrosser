import React, {Component} from 'react';
import './navbar.css'
import NameLogo from '../Assets/namelogo';
import Hamburger from './hamburger';

export default class NavBar extends Component {
  constructor(){
    super()
    this.state={
      displayNav:false,
      burgerActive:false
    }
  }

  displayNav=()=>{
    this.setState({displayNav : !this.state.displayNav, burgerActive : !this.state.burgerActive
    })
    
  }


  render(){

    return (
      <div className='NavContainer'>
      <link href="https://fonts.googleapis.com/css?family=Fredoka+One&display=swap" rel="stylesheet"></link>

    <div className="NavBar">
      <div className="NavLeft" id="navitem">
          <NameLogo/>
      </div>
      <div className="NavRight menu" id="navitem">
          <div> HOME </div>
          <div> ABOUT </div>
          <div> PORTFOLIO </div>
          <div> CONTACT </div>
      </div>
      <div className="burger" onClick={this.displayNav}>

        
            <Hamburger burgerActive={this.state.burgerActive}/>

     
     
     </div>
    </div>
          
     <div className={this.state.displayNav ? 'dropdown' : 'dropdown hideNav'}>
     <div className='menuItem'> HOME </div>
          <div className='menuItem'> ABOUT </div>
          <div className='menuItem'> PORTFOLIO </div>
          <div className='menuItem roundcorder'> CONTACT </div>
     </div>
    </div>
  );
}
}

// export default NavBar;